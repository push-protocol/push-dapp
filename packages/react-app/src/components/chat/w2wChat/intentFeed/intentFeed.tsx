import MuiAlert, { AlertProps } from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Snackbar from '@mui/material/Snackbar'
import Typography from '@mui/material/Typography'
import { useWeb3React } from '@web3-react/core'
import * as PushNodeClient from 'api'
import { approveIntent, Feeds, User } from 'api'
import { DID } from 'dids'
import { Web3Provider } from 'ethers/providers'
import { caip10ToWallet } from 'helpers/w2w'
import * as w2wHelper from 'helpers/w2w/'
import * as DIDHelper from 'helpers/w2w/did'
import { generateKeyPair } from 'helpers/w2w/pgp'
import React, { useContext, useEffect, useState } from 'react'
import DefaultIntent from '../defaultIntent/defaultIntent'
import { AppContext, Context } from '../w2wIndex'
import { intitializeDb } from '../w2wIndexeddb'
import { decryptFeeds, fetchIntent } from '../w2wUtils'
import './intentFeed.css'
// @ts-ignore
import { Oval as Loader } from 'react-loader-spinner'
import styled from 'styled-components'
import IntentCondition from '../IntentCondition/IntentCondition'

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
  const { did, setChat, connectedUser, intents, setConnectedUser, connectAndSetDID, setDID }: AppContext = useContext<
    AppContext
  >(Context)
  const { chainId, account } = useWeb3React<Web3Provider>()
  const [receivedIntents, setReceivedIntents] = useState<Feeds[]>([])
  const [open, setOpen] = useState(false)
  const [receivedIntentFrom, setReceivedIntentFrom] = useState<string>()
  const [openSuccessSnackbar, setOpenSuccessSnackBar] = useState(false)
  const [openReprovalSnackbar, setOpenReprovalSnackBar] = useState(false)
  const [toDID, settoDID] = useState<string>()
  const [isLoading, setIsLoading] = useState<boolean>()

  async function resolveThreadhash(): Promise<void> {
    let getIntent
    if (did) {
      getIntent = await intitializeDb<string>('Read', 2, 'Intent', did.id, '', 'did')
    }
    // If the user is not registered in the protocol yet, his did will be his wallet address
    const didOrWallet: string = did ? did.id : connectedUser.wallets.split(',')[0]
    if (getIntent === undefined) {
      let intents = await fetchIntent({ did: didOrWallet, intentStatus: 'Pending' })
      intents = await decryptFeeds({ feeds: intents, connectedUser, did })
      setReceivedIntents(intents)
    } else {
      let intents = await fetchIntent({ did: didOrWallet, intentStatus: 'Pending' })
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

  const createUserIfNecessary = async (): Promise<{ didCreated: DID; createdUser: User }> => {
    try {
      if (!did) {
        const createdDID: DID = await connectAndSetDID()
        // This is a new user
        const keyPairs = await generateKeyPair()
        const encryptedPrivateKey = await DIDHelper.encrypt(keyPairs.privateKeyArmored, createdDID)
        const caip10: string = w2wHelper.walletToCAIP10({ account, chainId })
        const createdUser = await PushNodeClient.createUser({
          caip10,
          did: createdDID.id,
          publicKey: keyPairs.publicKeyArmored,
          encryptedPrivateKey: JSON.stringify(encryptedPrivateKey),
          encryptionType: 'pgp',
          signature: 'xyz',
          sigType: 'a'
        })
        setConnectedUser(createdUser)
        setDID(createdDID)
        return { didCreated: createdDID, createdUser }
      } else {
        return { didCreated: did, createdUser: connectedUser }
      }
    } catch (e) {
      console.log(e)
    }
  }

  async function ApproveIntent(status: string): Promise<void> {
    setIsLoading(true)
    const { didCreated } = await createUserIfNecessary()
    await approveIntent(didCreated.id, toDID, status, '1', 'sigType')
    setOpen(false)
    if (status === 'Approved') setOpenSuccessSnackBar(true)
    else setOpenReprovalSnackBar(true)
    await resolveThreadhash()
    setIsLoading(false)
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
            {isLoading ? (
              <Loader type="oval" />
            ) : (
              <Button
                onClick={(): void => {
                  ApproveIntent('Approved')
                }}
              >
                Approve
              </Button>
            )}
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
        <UserProfileContainer height={152}>{displayReceivedIntents()}</UserProfileContainer>
      </section>
    </>
  )
}

const UserProfileContainer = styled.div`
  margin-top: 14px;
  width: 100%;
  max-height: calc(83.6vh - ${(props) => props.height || 238}px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
  &&::-webkit-scrollbar {
    width: 4px;
  }
  &&::-webkit-scrollbar-thumb {
    background: #cf1c84;
  }
`

export default IntentFeed
