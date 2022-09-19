// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
// @ts-ignore
import { Web3Provider } from 'ethers/providers';
import React, { useContext, useEffect, useState } from 'react';

// External Packages
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import styled from 'styled-components'

// Internal Compoonents
import * as PushNodeClient from 'api'
import { approveIntent, Feeds, User } from 'api'
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner'
import { DID } from 'dids'
import { caip10ToWallet } from 'helpers/w2w'
import * as w2wHelper from 'helpers/w2w/'
import * as DIDHelper from 'helpers/w2w/did'
import { generateKeyPair } from 'helpers/w2w/pgp'
import DefaultIntent from '../defaultIntent/defaultIntent'
import { AppContext, Context } from '../w2wIndex'
import { intitializeDb } from '../w2wIndexeddb'
import { decryptFeeds, fetchIntent } from '../w2wUtils'
import './intentFeed.css'

// Internal Configs

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const IntentFeed = (): JSX.Element => {
  const {
    did,
    setChat,
    connectedUser,
    intents,
    setConnectedUser,
    connectAndSetDID,
    setDID,
    setPendingRequests,
    setLoadingMessage,
  }: AppContext = useContext<AppContext>(Context);
  const { chainId, account } = useWeb3React<Web3Provider>();
  const [receivedIntents, setReceivedIntents] = useState<Feeds[]>([]);
  const [open, setOpen] = useState(false);
  const [receivedIntentFrom, setReceivedIntentFrom] = useState<string>();
  const [fromDID, setFromDID] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>();

  async function resolveThreadhash(): Promise<void> {
    setIsLoading(true);
    let getIntent;
    if (did) {
      getIntent = await intitializeDb<string>('Read', 'Intent', did.id, '', 'did');
    }
    // If the user is not registered in the protocol yet, his did will be his wallet address
    const didOrWallet: string = did ? did.id : connectedUser.wallets.split(',')[0];
    if (getIntent === undefined) {
      let intents = await fetchIntent({ did: didOrWallet, intentStatus: 'Pending' });
      intents = await decryptFeeds({ feeds: intents, connectedUser, did });
      setPendingRequests(intents?.length);
      setReceivedIntents(intents);
    } else {
      let intents = await fetchIntent({ did: didOrWallet, intentStatus: 'Pending' });
      intents = await decryptFeeds({ feeds: intents, connectedUser, did });
      setPendingRequests(intents?.length);
      setReceivedIntents(intents);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    resolveThreadhash();
  }, [intents]);

  function showModal({ intentFrom, fromDID }: { intentFrom: string; fromDID: string }): void {
    setReceivedIntentFrom(intentFrom);
    setFromDID(fromDID);
    setOpen(true);
  }

  const createUserIfNecessary = async (): Promise<{ didCreated: DID; createdUser: User }> => {
    try {
      if (!did) {
        const createdDID: DID = await connectAndSetDID();
        // This is a new user
        setLoadingMessage('Creating cryptography keys');
        const keyPairs = await generateKeyPair();
        setLoadingMessage('Cryptography keys created');
        const encryptedPrivateKey = await DIDHelper.encrypt(keyPairs.privateKeyArmored, createdDID);
        const caip10: string = w2wHelper.walletToCAIP10({ account, chainId });
        setLoadingMessage('Creating user in the protocol');
        const createdUser = await PushNodeClient.createUser({
          caip10,
          did: createdDID.id,
          publicKey: keyPairs.publicKeyArmored,
          encryptedPrivateKey: JSON.stringify(encryptedPrivateKey),
          encryptionType: 'pgp',
          signature: 'xyz',
          sigType: 'a',
        });
        setConnectedUser(createdUser);
        setDID(createdDID);
        setLoadingMessage('User created');
        return { didCreated: createdDID, createdUser };
      } else {
        return { didCreated: did, createdUser: connectedUser };
      }
    } catch (e) {
      console.log(e);
    }
  };

  async function ApproveIntent(status: string): Promise<void> {
    setIsLoading(true);
    const { didCreated } = await createUserIfNecessary();
    await approveIntent(fromDID, didCreated.id, status, '1', 'sigType');
    setOpen(false);
    await resolveThreadhash();
    setIsLoading(false);
  }

  function displayReceivedIntents(): JSX.Element {
    return isLoading ? (
      <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={40} />
    ) : (
      <>
        {!receivedIntents?.length ? (
          <InfoMessage>No received intents</InfoMessage>
        ) : (
          <>
            <div>
              {receivedIntents.map((intent: Feeds) => (
                <div
                  key={intent.threadhash}
                  onClick={(): void => {
                    setChat(intent);
                    showModal({
                      intentFrom: intent.wallets.split(',')[0],
                      fromDID: intent.intentSentBy,
                    });
                  }}>
                  <DefaultIntent inbox={intent} />
                </div>
              ))}
            </div>
          </>
        )}
      </>
    );
  }


  return (
    <>
      <section className="messageFeed_body">
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Approve Intent
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ textAlign: 'center' }}>
              You have received an intent from {receivedIntentFrom ? caip10ToWallet(receivedIntentFrom) : ''}.
            </Typography>
            <br />
            {isLoading ? (
              <LoaderSpinner type={LOADER_TYPE.STANDALONE_MINIMAL} spinnerSize={40} />
            ) : (
              <Button
                style={{ background: '#cf1c84', width: '100%', color: 'white' }}
                onClick={(): void => {
                  ApproveIntent('Approved');
                }}>
                Approve
              </Button>
            )}
          </Box>
        </Modal>
        <UserProfileContainer height={152}>{displayReceivedIntents()}</UserProfileContainer>
      </section>
    </>
  );
};

const InfoMessage = styled.p`
  position: relative;
  text-align: center;
  width: 80%;
  background: #d2cfcf;
  padding: 10px;
  margin: 0;
`;

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
`;

export default IntentFeed;
