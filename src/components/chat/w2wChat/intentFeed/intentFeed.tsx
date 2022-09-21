// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
// @ts-ignore
import { Web3Provider } from 'ethers/providers';
import React, { useContext, useEffect, useState } from 'react';

// External Packages
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

// Internal Compoonents
import * as PushNodeClient from 'api';
import { approveIntent, Feeds, User } from 'api';
import ChatSnap from "components/chat/chatsnap/ChatSnap";
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import { DID } from 'dids';
import { caip10ToWallet } from 'helpers/w2w';
import * as w2wHelper from 'helpers/w2w/';
import * as DIDHelper from 'helpers/w2w/did';
import { generateKeyPair } from 'helpers/w2w/pgp';
import useToast from 'hooks/useToast';
import { MdCheckCircle, MdError } from 'react-icons/md';
import { AppContext, Context } from 'sections/chat/ChatMainSection';
import DefaultIntent from '../defaultIntentDeprecated/defaultIntent.deprecated';
import IntentCondition from '../IntentCondition/IntentCondition';
import { intitializeDb } from '../w2wIndexeddb';
import { decryptFeeds, fetchIntent } from '../w2wUtils';
import './intentFeed.css';

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
  return (
    <MuiAlert
      elevation={6}
      ref={ref}
      variant="filled"
      {...props}
    />
  );
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
    setBlockedLoading,
    setActiveTab,
  }: AppContext = useContext<AppContext>(Context);
  const intentToast = useToast();
  const { chainId, account } = useWeb3React<Web3Provider>();
  const [receivedIntents, setReceivedIntents] = useState<Feeds[]>([]);
  const [open, setOpen] = useState(false);
  const [receivedIntentFrom, setReceivedIntentFrom] = useState<string>();
  const [fromDID, setFromDID] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [selectedIntentSnap, setSelectedIntentSnap] = useState<string>();
  
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
        setBlockedLoading({
          enabled: true,
          title: 'Step 1/4: Creating cryptography keys',
          progressEnabled: true,
          progress: 25,
        });

        const keyPairs = await generateKeyPair();
        setBlockedLoading({
          enabled: true,
          title: 'Step 2/4: Encrypting your info',
          progressEnabled: true,
          progress: 50,
        });

        const encryptedPrivateKey = await DIDHelper.encrypt(keyPairs.privateKeyArmored, createdDID);
        const caip10: string = w2wHelper.walletToCAIP10({ account, chainId });

        setBlockedLoading({
          enabled: true,
          title: 'Step 3/4: Syncing account info',
          progressEnabled: true,
          progress: 75,
          progressNotice: 'This might take a moment',
        });

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

        setBlockedLoading({
          enabled: false,
          title: 'Step 4/4: Done, Welcome to Push Chat!',
          spinnerCompleted: true,
          progressEnabled: true,
          progress: 100,
          progressNotice: 'This might take a moment',
        });

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

    // displaying toast according to status
    if(status==="Approved"){
      intentToast.showMessageToast({
        toastTitle: 'Success',
        toastMessage: 'Intent approved',
        toastType: 'SUCCESS',
        getToastIcon: (size) => (
          <MdCheckCircle
            size={size}
            color="green"
          />
        ),
      });
    }
    else{
      intentToast.showMessageToast({
        toastTitle: 'Error',
        toastMessage: `There was a problem in approving the intent, please try again.`,
        toastType: 'ERROR',
        getToastIcon: (size) => (
          <MdError
            size={size}
            color="red"
          />
        ),
      });
    }

    await resolveThreadhash();
    setActiveTab(0);
    setIsLoading(false);
  }

  const handleCloseSuccessSnackbar = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccessSnackBar(false);
  };

  const handleCloseReprovalSnackbar = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenReprovalSnackBar(false);
  };

  return (
    <ItemVV2
      alignSelf="stretch"
      justifyContent="flex-start"
      alignItems="stretch"
    >
      {!isLoading && (
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Approve Intent
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              style={{ textAlign: 'center' }}
            >
              You have received an intent from {receivedIntentFrom ? caip10ToWallet(receivedIntentFrom) : ''}.
            </Typography>
            <br />
            {isLoading ? (
              <LoaderSpinner
                type={LOADER_TYPE.STANDALONE_MINIMAL}
                spinnerSize={40}
              />
            ) : (
              <Button
                style={{ background: '#cf1c84', width: '100%', color: 'white' }}
                onClick={(): void => {
                  ApproveIntent('Approved');
                }}
              >
                Approve
              </Button>
            )}
          </Box>
        </Modal>
      )}

      {/* Load the Intents */}
      <ItemVV2 justifyContent="flex-start">
        {isLoading && (
          <LoaderSpinner
            type={LOADER_TYPE.SEAMLESS}
            spinnerSize={40}
          />
        )}

        {!isLoading && receivedIntents?.length == 0 && (
          <NoIntentMessage>You don't have any request yet Start a conversation by using the + button</NoIntentMessage>
        )}

        {!isLoading && receivedIntents?.length > 0 && (
          <UserIntents>
            {receivedIntents.map((intent: Feeds, i) => (
              <ItemVV2
                alignSelf="stretch"
                flex="initial"
                key={intent.threadhash || i}
              >
                <ChatSnap
                    pfp={intent.profilePicture}
                    username={intent.msg.name}
                    chatSnapMsg={
                      {
                        type: intent.msg.messageType,
                        message: intent.msg.lastMessage,
                      }
                    }
                    timestamp={intent.msg.timestamp}
                    selected={intent.threadhash == selectedIntentSnap ? true : false}
                    onClick={(): void => {
                      setChat(intent);
                      setSelectedIntentSnap(intent.threadhash);
                      showModal({
                        intentFrom: intent.wallets.split(',')[0],
                        fromDID: intent.intentSentBy,
                      });
                    }}
                  />
              </ItemVV2>
            ))}
          </UserIntents>
        )}
      </ItemVV2>
    </ItemVV2>
  );
};

const NoIntentMessage = styled.div`
  position: relative;
  width: 80%;
  text-align: justify;
  text-align-last: center;
  color: #657795;
  font-size: 15px;
  margin-top:25px;
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

const UserIntents = styled(ItemVV2)`
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: auto;
  height: 0px;
  flex-flow: column;

  &&::-webkit-scrollbar {
    width: 4px;
  }
  &&::-webkit-scrollbar-thumb {
    background: #cf1c84;
  }
`;

export default IntentFeed;
