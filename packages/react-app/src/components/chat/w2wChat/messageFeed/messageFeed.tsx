import React, { useState, useEffect, useContext } from 'react'
import './messageFeed.css'
import DefaultMessage from '../defaultMessage/defaultMessage'
import Loader from '../Loader/Loader'
import { Feeds, getLatestThreadhash } from '../../../../api'
import { AppContext, Context, ToastPosition } from '../w2wIndex'
import { fetchMessagesFromIpfs, fetchInbox } from '../w2wUtils'
import { intitializeDb } from '../w2wIndexeddb'
import { useQuery } from 'react-query'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import ReactSnackbar from '../ReactSnackbar/ReactSnackbar'
import { toast } from 'react-toastify'

interface messageFeedProps {
  filteredUserData: {}[]
  hasUserBeenSearched: boolean
  isInvalidAddress: boolean
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const MessageFeed = (props: messageFeedProps) => {
  const { did, renderInboxFeed, setChat }: AppContext = useContext<AppContext>(Context)
  const [feeds, setFeeds] = useState<Array<{}>>([])
  const [messagesLoading, setMessagesLoading] = useState<boolean>(true)
  const [isSameUser, setIsSameUser] = useState<boolean>(false)
  const [isInValidAddress, setIsInvalidAddress] = useState<boolean>(false)
  const [openReprovalSnackbar, setOpenReprovalSnackBar] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const [stopApi, setStopApi] = useState<boolean>(true)

  const getInbox = async (): Promise<Feeds[]> => {
    const getInbox: any = await intitializeDb<string>('Read', 2, 'Inbox', did.id, '', 'did')
    if (getInbox !== undefined) {
      setFeeds(getInbox.body)
    }
    const inbox: Feeds[] = await fetchInbox(did)
    setFeeds(inbox)
    return inbox
  }

  // const { data, error, isError, isLoading } = useQuery('current', getInbox, {
  //   refetchInterval: 5000
  // })

  const data = useQuery('current', getInbox, {
    enabled: stopApi,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
    suspense: false,
    onError: () => {
      setStopApi(false)
      toast.error('Error! Please Try Again later', ToastPosition)
    },
    retry: 3,
    refetchInterval: 1000 * 5, // 5 seconds,
    retryDelay: 1000 * 5 //5 seconds
  })

  useEffect(() => {
    setFeeds(renderInboxFeed)
  }, [renderInboxFeed])

  useEffect(() => {
    if (!props.hasUserBeenSearched) {
      getInbox()
    } else {
      const searchFn = async () => {
        if (props.filteredUserData.length) {
          if (Object(props.filteredUserData[0]).did === did.id) {
            setIsSameUser(true)
            setOpenReprovalSnackBar(true)
            setErrorMessage("You can't send intent to yourself")
            toast.error("You can't send intent to yourself", ToastPosition)
            setFeeds([])
          } else {
            let inbox = await fetchMessagesFromIpfs(props.filteredUserData)
            const threadhash = await getLatestThreadhash(inbox[0].did, did.id)
            inbox = [{ ...inbox[0], threadhash }]
            setFeeds(inbox)
          }
        } else {
          if (props.isInvalidAddress) {
            setIsInvalidAddress(true)
            setOpenReprovalSnackBar(true)
            setErrorMessage('Invalid Address')
          }
          setFeeds([])
        }
      }
      searchFn()
    }

    setMessagesLoading(false)
    // if (!props.hasUserBeenSearched) {
    //     const interval = setInterval(() => getInbox(), 5000)
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }
  }, [props.hasUserBeenSearched, props.filteredUserData])

  const setCurrentChat = (feed: any) => {
    setChat(feed)
  }

  const handleCloseReprovalSnackbar = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return
    }
    setOpenReprovalSnackBar(false)
  }

  return (
    <>
      <section className="messageFeed_body">
        {!feeds?.length && messagesLoading && (
          <div style={{ position: 'relative', textAlign: 'center', width: '100%', height: '100%' }}>
            <Loader />
          </div>
        )}
        {!feeds?.length && isSameUser ? (
          <p
            style={{ position: 'relative', textAlign: 'center', width: '100%', background: '#d2cfcf', padding: '10px' }}
          >
            You can't send intent to yourself
          </p>
        ) : !feeds?.length && isInValidAddress ? (
          <p
            style={{ position: 'relative', textAlign: 'center', width: '100%', background: '#d2cfcf', padding: '10px' }}
          >
            Invalid Address
          </p>
        ) : !feeds?.length && !messagesLoading ? (
          <p
            style={{ position: 'relative', textAlign: 'center', width: '100%', background: '#d2cfcf', padding: '10px' }}
          >
            No Address found.
          </p>
        ) : !messagesLoading ? (
          <div>
            {feeds.map((feed: Feeds, i) => (
              <div
                key={feed.threadhash || i}
                onClick={() => {
                  console.log('feed', feed)
                  setCurrentChat(feed)
                }}
              >
                <DefaultMessage inbox={feed} />
              </div>
            ))}
          </div>
        ) : null}
        {/* <Snackbar open={openReprovalSnackbar} autoHideDuration={6000} onClose={handleCloseReprovalSnackbar}>
          <Alert onClose={handleCloseReprovalSnackbar} severity="error" sx={{ width: '100%' }}>
            {errorMessage}
          </Alert>
        </Snackbar> */}

        <ReactSnackbar
          text={errorMessage}
          open={openReprovalSnackbar}
          handleClose={handleCloseReprovalSnackbar}
          severity={'error'}
        />
      </section>
    </>
  )
}

export default MessageFeed
