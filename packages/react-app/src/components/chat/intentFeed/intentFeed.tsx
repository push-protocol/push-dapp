import React, { useState, useEffect, useContext } from 'react'
import './intentFeed.css'
import DefaultIntent from '../defaultIntent/defaultIntent'
import { AppContext, Context } from '../w2wIndex'
import { decryptFeeds, fetchIntent } from '../w2wUtils'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { approveIntent, Feeds } from 'api'
import { intitializeDb } from '../w2wIndexeddb'
import { caip10ToWallet } from 'helpers/w2w'
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const IntentFeed = (): JSX.Element => {
  const { did, setChat, connectedUser, intents }: AppContext = useContext<AppContext>(Context)
  const [receivedIntents, setReceivedIntents] = useState<Feeds[]>([])
  const [open, setOpen] = useState(false)
  const [receivedIntentFrom, setReceivedIntentFrom] = useState<string>()
  const [openSuccessSnackbar, setOpenSuccessSnackBar] = useState(false)
  const [openReprovalSnackbar, setOpenReprovalSnackBar] = useState(false)
  const [toDID, settoDID] = useState<string>()

  async function resolveThreadhash(): Promise<void> {
    const getIntent = await intitializeDb<string>('Read', 2, 'Intent', did.id, '', 'did')

    if (getIntent === undefined) {
      let intents = await fetchIntent({ did, intentStatus: 'Pending' })
      intents = await decryptFeeds({ feeds: intents, connectedUser, did })
      setReceivedIntents(intents)
    } else {
      let intents = await fetchIntent({ did, intentStatus: 'Pending' })
      intents = await decryptFeeds({ feeds: intents, connectedUser, did })
      setReceivedIntents(intents)
    }
  }

  useEffect(() => {
    resolveThreadhash()
  }, [intents])

  function showModal({ intentFrom, todid }: { intentFrom: string; todid: string }): void {
    setReceivedIntentFrom(intentFrom)
    settoDID(todid)
    setOpen(true)
  }

  async function ApproveIntent(status: string): Promise<void> {
    await approveIntent(did.id, toDID, status, '1', 'sigType')
    setOpen(false)
    if (status === 'Approved') setOpenSuccessSnackBar(true)
    else setOpenReprovalSnackBar(true)
    await resolveThreadhash()
  }

  function displayReceivedIntents(): JSX.Element {
    return (
      <>
        {!receivedIntents?.length ? (
          <p
            style={{ position: 'relative', textAlign: 'center', width: '80%', background: '#d2cfcf', padding: '10px' }}
          >
            No received intents !
          </p>
        ) : (
          <>
            <div>
              {receivedIntents.map((intent: Feeds) => (
                <div
                  key={intent.threadhash}
                  onClick={(): void => {
                    setChat(intent)
                    showModal({
                      intentFrom: intent.wallets.split(',')[0],
                      todid: intent.intentSentBy
                    })
                  }}
                >
                  <DefaultIntent inbox={intent} />
                </div>
              ))}
            </div>
          </>
        )}
      </>
    )
  }

  const handleCloseSuccessSnackbar = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return
    }

    setOpenSuccessSnackBar(false)
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
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Approve Intent
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              You have received an intent from {receivedIntentFrom ? caip10ToWallet(receivedIntentFrom) : ''}.
            </Typography>
            <br />
            <Button
              onClick={(): void => {
                ApproveIntent('Approved')
              }}
            >
              Approve
            </Button>
          </Box>
        </Modal>

        {/* Snackbar for successful approval */}
        <Snackbar open={openSuccessSnackbar} autoHideDuration={6000} onClose={handleCloseSuccessSnackbar}>
          <Alert onClose={handleCloseSuccessSnackbar} severity="success" sx={{ width: '100%' }}>
            Intent succesfully Approved !
          </Alert>
        </Snackbar>
        {/* Snackbar for rejected intent */}
        <Snackbar open={openReprovalSnackbar} autoHideDuration={6000} onClose={handleCloseReprovalSnackbar}>
          <Alert onClose={handleCloseReprovalSnackbar} severity="error" sx={{ width: '100%' }}>
            Intent was Reproved !
          </Alert>
        </Snackbar>
        {displayReceivedIntents()}
      </section>
    </>
  )
}

export default IntentFeed
