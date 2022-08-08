import React, { useState, useEffect, useContext } from 'react'
import './messageFeed.css'
import DefaultMessage from '../defaultMessage/defaultMessage'
import Loader from '../Loader/Loader'
import { AppContext, Context, ToastPosition } from '../w2wIndex'
import { Feeds, getLatestThreadhash, User } from '../../../../api'
import { fetchInbox } from '../w2wUtils'
import { intitializeDb } from '../w2wIndexeddb'
import { useQuery } from 'react-query'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import ReactSnackbar from '../ReactSnackbar/ReactSnackbar'
import { toast } from 'react-toastify'

interface MessageFeedProps {
  filteredUserData: User[]
  hasUserBeenSearched: boolean
  isInvalidAddress: boolean
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const MessageFeed = (props: MessageFeedProps) => {
  const { did, setChat }: AppContext = useContext<AppContext>(Context)
  const [feeds, setFeeds] = useState<Feeds[]>([])
  const [messagesLoading, setMessagesLoading] = useState<boolean>(true)
  const [isSameUser, setIsSameUser] = useState<boolean>(false)
  const [isInValidAddress, setIsInvalidAddress] = useState<boolean>(false)
  const [openReprovalSnackbar, setOpenReprovalSnackBar] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [stopApi, setStopApi] = useState<boolean>(true)

  const getInbox = async (): Promise<Feeds[]> => {
    const getInbox: any = await intitializeDb<string>('Read', 2, 'Inbox', did.id, '', 'did')
    if (getInbox !== undefined) {
      const inbox: Feeds[] = await fetchInbox(did)
      console.log('Inbox', inbox)
      setFeeds(inbox)
      // setCurrentChat(inbox)
      return inbox
    } else {
      const inbox: Feeds[] = await fetchInbox(did)
      setFeeds(inbox)
      return inbox
    }
    const inbox: Feeds[] = await fetchInbox(did)
    setFeeds(inbox)
  }

  const data = useQuery('current', getInbox, {
    refetchInterval: 5000
  })

  console.log('Data from useQuery', data)

  useEffect(() => {
    if (!props.hasUserBeenSearched) {
      getInbox()
    } else {
      const searchFn = async (): Promise<void> => {
        if (props.filteredUserData.length) {
          if (Object(props.filteredUserData[0]).did === did.id) {
            setIsSameUser(true)
            setOpenReprovalSnackBar(true)
            setErrorMessage("You can't send intent to yourself")
            toast.error("You can't send intent to yourself", ToastPosition)
            setFeeds([])
          } else {
            // When searching as of now the search will always result in only one user being displayed.
            // There is no multiple users appearing on the sidebar when a search is done. The wallets must match exactly.
            const user: User = props.filteredUserData[0]
            const threadhash: string = await getLatestThreadhash({ firstDID: user.did, secondDID: did.id })
            const inbox: Feeds = {
              msg: {
                name: user.wallets.split(',')[0].toString(),
                profile_picture: user.profile_picture,
                lastMessage: null,
                timestamp: null,
                messageType: null,
                signature: null,
                signatureType: null
              },
              wallets: user.wallets,
              did: user.did,
              threadhash: threadhash,
              profile_picture: user.profile_picture,
              about: user.about,
              intent: null,
              intent_sent_by: null,
              intent_timestamp: null,
              pgp_pub: user.pgp_pub
            }
            setFeeds([inbox])
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
  }, [props.hasUserBeenSearched, props.filteredUserData])

  const setCurrentChat = (feed: Feeds) => {
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
                  setCurrentChat(feed)
                }}
              >
                <DefaultMessage inbox={feed} />
              </div>
            ))}
          </div>
        ) : null}

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
