// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import React, { useContext, useEffect, useState } from 'react';

// External Packages
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import 'font-awesome/css/font-awesome.min.css';
import { CID } from 'ipfs-http-client';
import { MdCheckCircle, MdError, MdOutlineArrowBackIos } from 'react-icons/md';
import { useQuery } from 'react-query';
import ScrollToBottom from 'react-scroll-to-bottom';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import * as PushNodeClient from 'api';
import { approveIntent, ConnectedUser, Feeds, MessageIPFSWithCID, User } from 'api';
import LoaderSpinner, { LOADER_SPINNER_TYPE, LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ButtonV2, ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { Content } from 'components/SharedStyling';
import * as w2wHelper from 'helpers/w2w/';
import { generateKeyPair } from 'helpers/w2w/pgp';
import useToast from 'hooks/useToast';
import { useResolveEns } from 'hooks/useResolveEns';
import { AppContext, Context } from 'sections/chat/ChatMainSection';
import HandwaveIcon from '../../../../assets/chat/handwave.svg';
import { caip10ToWallet, decryptAndVerifySignature, encryptAndSign, walletToCAIP10 } from '../../../../helpers/w2w';
import { fetchInbox, fetchIntent, MessageIPFS } from 'helpers/w2w/ipfs';
import Chats from '../chats/Chats';
import { intitializeDb } from '../w2wIndexeddb';

// Internal Configs
import { appConfig } from 'config';
import GLOBALS, { device } from 'config/Globals';
import CryptoHelper from 'helpers/CryptoHelper';
import { checkConnectedUser } from 'helpers/w2w/user';
import Typebar from '../TypeBar/Typebar';

const INFURA_URL = appConfig.infuraApiUrl;

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

const ChatBox = ({ setVideoCallInfo }): JSX.Element => {
  const {
    currentChat,
    viewChatBox,
    searchedUser,
    connectedUser,
    receivedIntents,
    inbox,
    intents,
    setConnectedUser,
    setActiveTab,
    setChat,
    setInbox,
    setHasUserBeenSearched,
    setPendingRequests,
    setSearchedUser,
    setReceivedIntents,
    setBlockedLoading,
  }: AppContext = useContext<AppContext>(Context);
  const [newMessage, setNewMessage] = useState<string>('');
  const { chainId, account } = useWeb3React<ethers.providers.Web3Provider>();
  const [Loading, setLoading] = useState<boolean>(true);
  const [messageBeingSent, setMessageBeingSent] = useState<boolean>(false);
  const [messages, setMessages] = useState<MessageIPFSWithCID[]>([]);
  const [imageSource, setImageSource] = useState<string>('');
  const [openReprovalSnackbar, setOpenSuccessSnackBar] = useState<boolean>(false);
  const [SnackbarText, setSnackbarText] = useState<string>('');
  const [chatCurrentCombinedDID, setChatCurrentCombinedDID] = useState<string>('');
  const provider = ethers.getDefaultProvider();
  const chatBoxToast = useToast();
  const theme = useTheme();
  let showTime = false;
  let time = '';

  // get ens name
  const ensName = useResolveEns(currentChat?.msg?.name);

  const getMessagesFromCID = async (): Promise<void> => {
    if (currentChat) {
      const latestThreadhash: string =
        inbox.find((x) => x.combinedDID === currentChat.combinedDID)?.threadhash ||
        receivedIntents.find((x) => x.combinedDID === currentChat.combinedDID)?.threadhash;
      let messageCID = latestThreadhash;
      if (latestThreadhash) {
        // Check if cid is present in messages state. If yes, ignore, if not, append to array

        // Logic: This is done to check that while loop is to be executed only when the user changes person in inboxes.
        // We only enter on this if condition when we receive or send new messages
        if (latestThreadhash !== currentChat?.threadhash) {
          // !Fix-ME : Here I think that this will never call IndexDB to get the message as this is called only when new messages are fetched.
          const messageFromIndexDB: any = await intitializeDb<string>('Read', 'CID_store', messageCID, '', 'cid');
          let msgIPFS: MessageIPFSWithCID;
          if (messageFromIndexDB !== undefined) {
            msgIPFS = messageFromIndexDB.body;
          } else {
            const messageFromIPFS: MessageIPFSWithCID = await PushNodeClient.getFromIPFS(messageCID);
            await intitializeDb<MessageIPFS>('Insert', 'CID_store', messageCID, messageFromIPFS, 'cid');
            msgIPFS = messageFromIPFS;
          }

          // Decrypt message
          msgIPFS = await w2wHelper.decryptMessages({
            savedMsg: msgIPFS,
            connectedUser,
            account,
            chainId,
            currentChat,
            inbox,
          });

          //checking if the message is encrypted or not
          //!This below checking is not needed according to me as the message sent are always encrypted.
          // const messagesSentInChat: MessageIPFS = messages.find(
          //   (msg) =>
          //     msg.link === '' &&
          //     msg.encType === '' &&
          //     msg.cid === '' &&
          //     msg.messageContent === msgIPFS.messageContent &&
          //     msg.messageType === msgIPFS.messageType
          // );
          // // Replace message that was inserted when sending a message (same comment -abhishek)
          // if (messagesSentInChat) {
          //   const newMessages = messages.map((x) => x);
          //   const index = newMessages.findIndex(
          //     (msg) =>
          //       msg.link === '' &&
          //       msg.encType === '' &&
          //       msg.cid === '' &&
          //       msg.messageContent === msgIPFS.messageContent &&
          //       msg.messageType === msgIPFS.messageType
          //   );
          //   newMessages[index] = msgIPFS;
          //   setMessages(newMessages);
          // } else {

          //checking if the message is already in the array or not (if that is not present so we are adding it in the array)
          const messageInChat: MessageIPFS = messages.find((msg) => msg.link === msgIPFS?.link);
          if (messageInChat === undefined) {
            setMessages((m) => [...m, msgIPFS]);
          }

          // }
        }
        // This condition is triggered when the user loads the chat whenever the user is changed
        else {
          while (messageCID) {
            setLoading(true);
            if (messages.filter((msg) => msg.cid === messageCID).length > 0) {
              setLoading(false);
              break;
            } else {
              const messageFromIndexDB: any = await intitializeDb<string>('Read', 'CID_store', messageCID, '', 'cid');
              let msgIPFS: MessageIPFSWithCID;
              if (messageFromIndexDB !== undefined) {
                msgIPFS = messageFromIndexDB.body;
              } else {
                const messageFromIPFS: MessageIPFSWithCID = await PushNodeClient.getFromIPFS(messageCID);
                await intitializeDb<MessageIPFS>('Insert', 'CID_store', messageCID, messageFromIPFS, 'cid');
                msgIPFS = messageFromIPFS;
              }

              //Decrypting Messages
              msgIPFS = await w2wHelper.decryptMessages({
                savedMsg: msgIPFS,
                connectedUser,
                account,
                chainId,
                currentChat,
                inbox,
              });

              // !FIX-ME : This will also be not called as when the messages are fetched from IndexDB or IPFS they are already present there and they are not duplicated so we can remove this below if statement only else is fine.
              // const messagesSentInChat: MessageIPFS = messages.find(
              //   (msg) =>
              //     msg.link === '' &&
              //     msg.encType === '' &&
              //     msg.cid === '' &&
              //     msg.messageContent === msgIPFS.messageContent &&
              //     msg.messageType === msgIPFS.messageType
              // );
              // // Replace message that was inserted when sending a message
              // if (messagesSentInChat) {
              //   const newMessages = messages.map((x) => x);
              //   const index = newMessages.findIndex(
              //     (msg) =>
              //       msg.link === '' &&
              //       msg.encType === '' &&
              //       msg.cid === '' &&
              //       msg.messageContent === msgIPFS.messageContent &&
              //       msg.messageType === msgIPFS.messageType
              //   );
              //   newMessages[index] = msgIPFS;
              //   setMessages(newMessages);
              // }
              // Display messages for the first time
              // else
              if (messages.length === 0 || msgIPFS.timestamp < messages[0].timestamp) {
                setMessages((m) => [msgIPFS, ...m]);

                //I did here because this is triggered when the intent is sent from the sender what it does is it shows loader until the message is received from the IPFS by creating a threadhash. Because of the react query this function is triggered after 3 secs and if their is no threadhash(in case of Intent) the else part is triggered which setMessages([]) to null.
                setMessageBeingSent(false);
              }

              const link = msgIPFS.link;
              if (link) {
                messageCID = link;
              } else {
                break;
              }
            }
          }
        }
      } else {
        setMessages([]);
      }
    }
    setLoading(false);
  };

  useQuery<any>('chatbox', getMessagesFromCID, { refetchInterval: 3000 });

  useEffect(() => {
    setLoading(true);
    if (currentChat) {
      if (currentChat.combinedDID !== chatCurrentCombinedDID) {
        setChatCurrentCombinedDID(currentChat.combinedDID);
        // We only delete the messages once the user clicks on another chat. The user could click multiple times on the same chat and it would delete the previous messages
        // even though the user was still on the same chat.
        setMessages([]);
        try {
          CID.parse(currentChat.profilePicture); // Will throw exception if invalid CID
          setImageSource(INFURA_URL + `${currentChat.profilePicture}`);
        } catch (err) {
          setImageSource(currentChat.profilePicture);
        }
      }
    }
  }, [currentChat]);

  const fetchInboxApi = async (createdUser: ConnectedUser): Promise<Feeds> => {
    if (checkConnectedUser(connectedUser)) {
      // Update inbox. We do this because otherwise the currentChat.threadhash after sending the first intent
      // will be undefined since it was not updated right after the intent was sent
      let inboxes: Feeds[] = await fetchInbox(walletToCAIP10({ account, chainId }));
      await intitializeDb<Feeds[]>('Insert', 'Inbox', walletToCAIP10({ account, chainId }), inboxes, 'did');
      inboxes = await w2wHelper.decryptFeeds({ feeds: inboxes, connectedUser: createdUser });
      setInbox(inboxes);
      return inboxes.find((x) => x.wallets.split(',')[0] === currentChat.wallets.split(',')[0]);
    }
  };

  const sendMessage = async ({ message, messageType }: { message: string; messageType: string }): Promise<void> => {
    setMessageBeingSent(true);
    // setLoading(true);
    let msg: MessageIPFSWithCID;
    let messageContent: string, encryptionType: string, aesEncryptedSecret: string, signature: string, sigType: string;
    try {
      if (!currentChat.publicKey.includes('-----BEGIN PGP PUBLIC KEY BLOCK-----')) {
        messageContent = message;
        encryptionType = 'PlainText';
        aesEncryptedSecret = '';
        signature = '';
        sigType = '';
      } else {
        const {
          cipherText,
          encryptedSecret,
          signature: pgpSignature,
          sigType: pgpSignatureType,
          encType: pgpEncryptionType,
        } = await encryptAndSign({
          plainText: message,
          fromPublicKeyArmored: connectedUser.publicKey,
          toPublicKeyArmored: currentChat.publicKey,
          privateKeyArmored: connectedUser.privateKey,
        });
        messageContent = cipherText;
        encryptionType = pgpEncryptionType;
        aesEncryptedSecret = encryptedSecret;
        signature = pgpSignature;
        sigType = pgpSignatureType;
      }
      let savedMsg: MessageIPFSWithCID | string = await PushNodeClient.postMessage({
        fromCAIP10: walletToCAIP10({ account, chainId }),
        fromDID: walletToCAIP10({ account, chainId }),
        toDID: walletToCAIP10({ account: currentChat.wallets.split(',')[0], chainId }),
        toCAIP10: walletToCAIP10({ account: currentChat.wallets.split(',')[0], chainId }),
        messageContent,
        messageType,
        signature,
        encType: encryptionType,
        sigType,
        encryptedSecret: aesEncryptedSecret,
      });

      if (typeof savedMsg === 'string') {
        chatBoxToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: `${savedMsg}`,
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });
      } else {
        await intitializeDb<MessageIPFS>('Insert', 'CID_store', savedMsg.cid, savedMsg, 'cid');
        //Decrypting Message here because we want it to add in the setMessages Array as encrypted Message and also we are displaying the messages so encryption is done above and decryption is done to add it in the setMessages
        // Decrypt message
        savedMsg = await w2wHelper.decryptMessages({
          savedMsg: savedMsg,
          connectedUser,
          account,
          chainId,
          currentChat,
          inbox: [],
        });
        setNewMessage('');
        setMessages([...messages, savedMsg]);
      }
    } catch (error) {
      chatBoxToast.showMessageToast({
        toastTitle: 'Error',
        toastMessage: 'Cannot send Message, Try again later',
        toastType: 'ERROR',
        getToastIcon: (size) => (
          <MdError
            size={size}
            color="red"
          />
        ),
      });
    }
    setTimeout(() => {
      setMessageBeingSent(false);
      // setLoading(true);
    }, 2000);
  };

  async function resolveThreadhash(): Promise<void> {
    setLoading(true);
    let getIntent;
    if (checkConnectedUser(connectedUser)) {
      getIntent = await intitializeDb<string>(
        'Read',
        'Intent',
        w2wHelper.walletToCAIP10({ account, chainId }),
        '',
        'did'
      );
    }
    // If the user is not registered in the protocol yet, his did will be his wallet address
    const didOrWallet: string = connectedUser.wallets.split(',')[0];
    let intents = await fetchIntent({ userId: didOrWallet, intentStatus: 'Pending' });
    await intitializeDb<Feeds[]>('Insert', 'Intent', w2wHelper.walletToCAIP10({ account, chainId }), intents, 'did');
    intents = await w2wHelper.decryptFeeds({ feeds: intents, connectedUser });
    setPendingRequests(intents?.length);
    setReceivedIntents(intents);
    setLoading(false);
  }

  async function ApproveIntent(status: string): Promise<void> {
    setMessageBeingSent(true);
    const { createdUser } = await createUserIfNecessary();
    // We must use createdUser here for getting the wallet instead of using the `account` since the user can be created at the moment of sending the intent
    const updatedIntent: string = await approveIntent(
      currentChat.intentSentBy,
      createdUser.wallets.split(',')[0],
      status,
      '1',
      'sigType'
    );
    let activeChat = currentChat;
    activeChat.intent = updatedIntent;
    setChat(activeChat);
    // setOpen(false);

    // displaying toast according to status
    if (status === 'Approved') {
      chatBoxToast.showMessageToast({
        toastTitle: 'Success',
        toastMessage: 'Request approved',
        toastType: 'SUCCESS',
        getToastIcon: (size) => (
          <MdCheckCircle
            size={size}
            color="green"
          />
        ),
      });
    } else {
      chatBoxToast.showMessageToast({
        toastTitle: 'Error',
        toastMessage: `There was a problem in approving the chat request, please try again.`,
        toastType: 'ERROR',
        getToastIcon: (size) => (
          <MdError
            size={size}
            color="red"
          />
        ),
      });
    }
    setActiveTab(0);
    await resolveThreadhash();
    setMessageBeingSent(false);
  }
  const createUserIfNecessary = async (): Promise<{ createdUser: ConnectedUser }> => {
    try {
      if (!checkConnectedUser(connectedUser)) {
        // This is a new user
        setBlockedLoading({
          enabled: true,
          title: 'Step 1/4: Generating secure keys for your account',
          progressEnabled: true,
          progress: 30,
          progressNotice:
            'This step is is only done for first time users and might take a few seconds. PGP keys are getting generated to provide you with secure yet seamless chat',
        });
        await new Promise((r) => setTimeout(r, 200));

        const keyPairs = await generateKeyPair();
        setBlockedLoading({
          enabled: true,
          title: 'Step 2/4: Encrypting your keys',
          progressEnabled: true,
          progress: 60,
          progressNotice: 'Please sign the transaction to continue. Steady lads, chat is almost ready!',
        });

        const walletPublicKey = await CryptoHelper.getPublicKey(account);
        const encryptedPrivateKey = CryptoHelper.encryptWithRPCEncryptionPublicKeyReturnRawData(
          keyPairs.privateKeyArmored,
          walletPublicKey
        );
        const caip10: string = w2wHelper.walletToCAIP10({ account, chainId });
        setBlockedLoading({
          enabled: true,
          title: 'Step 3/4: Syncing account info',
          progressEnabled: true,
          progress: 85,
          progressNotice: 'This might take a couple of seconds as push nodes sync your info for the first time!',
        });

        const createdUser: User = await PushNodeClient.createUser({
          caip10,
          did: caip10,
          publicKey: keyPairs.publicKeyArmored,
          encryptedPrivateKey: JSON.stringify(encryptedPrivateKey),
          encryptionType: 'x25519-xsalsa20-poly1305',
          signature: 'xyz',
          sigType: 'a',
        });
        const createdConnectedUser = { ...createdUser, privateKey: keyPairs.privateKeyArmored };
        setConnectedUser(createdConnectedUser);

        setBlockedLoading({
          enabled: false,
          title: 'Step 4/4: Done, Welcome to Push Chat!',
          spinnerType: LOADER_SPINNER_TYPE.COMPLETED,
          progressEnabled: true,
          progress: 100,
        });
        return { createdUser: createdConnectedUser };
      } else {
        return { createdUser: connectedUser };
      }
    } catch (e) {
      console.log(e);
    }
  };

  const encryptingMessages = async ({
    user,
    createdUser,
    message,
  }: {
    user: User;
    createdUser: ConnectedUser;
    message: string;
  }) => {
    let messageContent: string, encryptionType: string, aesEncryptedSecret: string, signature: string;
    let caip10: string;
    if (!user) {
      if (!ethers.utils.isAddress(searchedUser)) {
        try {
          const ens: string = await provider.resolveName(searchedUser);
          if (ens) {
            caip10 = walletToCAIP10({ account: ens, chainId });
          }
        } catch (err) {
          console.log(err);
          return;
        }
      } else {
        caip10 = walletToCAIP10({ account: searchedUser, chainId });
      }
      await PushNodeClient.createUser({
        caip10,
        did: caip10,
        publicKey: '',
        encryptedPrivateKey: '',
        encryptionType: '',
        signature: 'pgp',
        sigType: 'pgp',
      });
      // If the user is being created here, that means that user don't have a PGP keys. So this intent will be in plaintext
      messageContent = message;
      encryptionType = 'PlainText';
      aesEncryptedSecret = '';
      signature = '';
    } else {
      // It's possible for a user to be created but the PGP keys still not created
      if (!user.publicKey.includes('-----BEGIN PGP PUBLIC KEY BLOCK-----')) {
        messageContent = message;
        encryptionType = 'PlainText';
        aesEncryptedSecret = '';
        signature = '';
      } else {
        const {
          cipherText,
          encryptedSecret,
          signature: pgpSignature,
        } = await encryptAndSign({
          plainText: message,
          toPublicKeyArmored: user.publicKey,
          fromPublicKeyArmored: createdUser.publicKey,
          privateKeyArmored: createdUser.privateKey,
        });
        messageContent = cipherText;
        encryptionType = 'pgp';
        aesEncryptedSecret = encryptedSecret;
        signature = pgpSignature;
      }
    }
    return {
      messageContent,
      encryptionType,
      aesEncryptedSecret,
      signature,
    };
  };

  const sendIntent = async ({ message, messageType }: { message: string; messageType: string }): Promise<void> => {
    try {
      setMessageBeingSent(true);
      const { createdUser } = await createUserIfNecessary();
      if (
        currentChat.intent === null ||
        currentChat.intent === '' ||
        !currentChat.intent.includes(currentChat.wallets.split(',')[0])
      ) {
        const user: User = await PushNodeClient.getUser({ caip10: currentChat.wallets.split(',')[0] });
        const { messageContent, encryptionType, aesEncryptedSecret, signature } = await encryptingMessages({
          user,
          createdUser,
          message,
        });

        const msg: MessageIPFSWithCID | string = await PushNodeClient.createIntent({
          toDID: walletToCAIP10({ account: currentChat.wallets.split(',')[0], chainId }),
          toCAIP10: walletToCAIP10({ account: currentChat.wallets.split(',')[0], chainId }),
          fromDID: walletToCAIP10({ account: account, chainId }),
          fromCAIP10: walletToCAIP10({ account, chainId }),
          messageContent,
          messageType,
          signature,
          encType: encryptionType,
          sigType: signature,
          encryptedSecret: aesEncryptedSecret,
        });

        if (typeof msg === 'string') {
          if (msg.toLowerCase() === 'your wallet is not whitelisted') {
            // Getting User Info
            setBlockedLoading({
              enabled: true,
              title: 'Wallet is not whitelisted',
              spinnerType: LOADER_SPINNER_TYPE.WHITELIST,
              progressEnabled: true,
              progress: 0,
              progressNotice:
                'Reminder: Push Chat is in alpha, Things might break. It seems you are not whitelisted, join our discord channel where we will be frequently dropping new invites: https://discord.com/invite/cHRmsnmyKx',
            });
          }
          // Display toaster
          chatBoxToast.showMessageToast({
            toastTitle: 'Error',
            toastMessage: `${msg}`,
            toastType: 'ERROR',
            getToastIcon: (size) => (
              <MdError
                size={size}
                color="red"
              />
            ),
          });
          setMessageBeingSent(false);
        } else {
          // We store the message in state decrypted so we display to the user the intent message
          msg.messageContent = message;
          setNewMessage('');
          const result = await fetchInboxApi(createdUser);
          setChat(result);
          chatBoxToast.showMessageToast({
            toastTitle: 'Success',
            toastMessage: 'Chat Request Sent',
            toastType: 'SUCCESS',
            getToastIcon: (size) => (
              <MdCheckCircle
                size={size}
                color="green"
              />
            ),
          });
        }
      }

      setSearchedUser('');
      setHasUserBeenSearched(false);
      setActiveTab(0);
    } catch (error) {
      console.log(error);
      setMessageBeingSent(false);
    }
    // setMessageBeingSent(false);
  };

  const handleCloseSuccessSnackbar = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccessSnackBar(false);
  };

  const checkIfIntentExist = (receivedIntents:PushNodeClient.Feeds[])=>{
    console.log("receivedIntents",receivedIntents)
    const intentReceived = receivedIntents.find((x) => x.combinedDID === currentChat.combinedDID && x.msg.toDID === connectedUser.did)
    ?.threadhash
    console.log("Intent received",intentReceived)

    return intentReceived
  }

  return (
    <Container>
      {!viewChatBox ? (
        <ItemVV2 gap="25px">
          <WelcomeMainText theme={theme}>
            <ImageV2
              src={HandwaveIcon}
              alt="wave"
              display="inline"
              width="auto"
              verticalAlign="middle"
              margin="0 13px"
            />
          </WelcomeMainText>
          <WelcomeSubText theme={theme}>
            You haven’t started a conversation yet. Start a new chat by using the + button
          </WelcomeSubText>
        </ItemVV2>
      ) : (
        <>
          <Snackbar
            open={openReprovalSnackbar}
            autoHideDuration={10000}
            onClose={handleCloseSuccessSnackbar}
          >
            <Alert
              onClose={handleCloseSuccessSnackbar}
              severity="error"
              sx={{ width: '100%' }}
            >
              {SnackbarText}
            </Alert>
          </Snackbar>

          <ItemHV2
            position="absolute"
            alignItems="center"
            justifyContent="flex-start"
            top="10px"
            left="10px"
            right="10px"
            minHeight="55px"
            borderRadius={GLOBALS.ADJUSTMENTS.RADIUS.LARGE}
            color={theme.default.color}
            background={theme.default.bg}
            padding="6px"
            fontWeight="500"
            zIndex="998"
          >
            <ItemHV2
              height="48px"
              flex="initial"
            >
              <TabletBackButton
                margin="0px 5px 0px 0px"
                color={theme.default.secondaryColor}
                background="transparent"
                hover="transparent"
                hoverBackground="transparent"
                onClick={() => {
                  setChat(null);
                }}
              >
                <MdOutlineArrowBackIos size={24} />
              </TabletBackButton>

              <ImageV2
                height="48px"
                width="48px"
                alt="Profile Picture"
                src={imageSource}
                borderRadius="100%"
                overflow="hidden"
              />
            </ItemHV2>

            <SpanV2
              flex="1"
              margin="5px 10px"
              fontWeight="400"
              textAlign="start"
            >
              {ensName && `${ensName} (${caip10ToWallet(currentChat.msg.name)})`}

              {!ensName && caip10ToWallet(currentChat.msg.name)}
            </SpanV2>
            {/* <MoreOptions>
              <IconButton aria-label="more" onClick={(): void => setShowOption((option) => !option)}>
                <MoreVertIcon />
              </IconButton>
              {showOption && (
                <OptionContainer>
                  <Option>
                    <Icon>
                      <img src="/svg/chats/nickname.svg" height="24px" width="24px" alt="nickname" />
                    </Icon>
                    <Typography ml={1} variant="subtitle2">
                      Give Nickname
                    </Typography>
                  </Option>
                  <Option>
                    <Icon>
                      <img src="/svg/chats/block.svg" height="24px" width="24px" alt="block" />
                    </Icon>
                    <Typography ml={1} variant="subtitle2">
                      Block User
                    </Typography>
                  </Option>
                </OptionContainer>
              )}
            </MoreOptions> */}
          </ItemHV2>

          <MessageContainer>
            <CustomScrollContent initialScrollBehavior="smooth">
              {Loading ? (
                <SpinnerWrapper>
                  <LoaderSpinner
                    type={LOADER_TYPE.SEAMLESS}
                    spinnerSize={40}
                  />
                </SpinnerWrapper>
              ) : (
                <>
                  {messages?.map((msg, i) => {
                    //const isLast = i === messages.length - 1
                    //const noTail = !isLast && messages[i + 1]?.fromDID === msg.fromDID

                    showTime = false;
                    if (i >= 0) {
                      const duration = new Date(messages[i]?.timestamp);
                      const dateString = duration.toDateString();
                      if (dateString !== time || i === 0) {
                        showTime = true;
                        time = dateString;
                      }
                    }
                    return (
                      <div key={i}>
                        {!showTime ? null : <MessageTime>{time}</MessageTime>}
                        <Chats
                          msg={msg}
                          caip10={walletToCAIP10({ account, chainId })}
                          messageBeingSent={messageBeingSent}
                        />
                      </div>
                    );
                  })}
                  {checkIfIntentExist(receivedIntents) && (
                    <Chats
                      msg={{
                        ...messages[0],
                        messageContent: 'Please accept to enable push chat from this wallet',
                        messageType: 'Intent',
                      }}
                      caip10={walletToCAIP10({ account, chainId })}
                      messageBeingSent={messageBeingSent}
                      ApproveIntent={() => ApproveIntent('Approved')}
                    />
                  )}
                </>
              )}
            </CustomScrollContent>
          </MessageContainer>

          {checkIfIntentExist(receivedIntents) ? null : (
            <>
              <Typebar
                messageBeingSent={messageBeingSent}
                setNewMessage={setNewMessage}
                newMessage={newMessage}
                setVideoCallInfo={setVideoCallInfo}
                sendMessage={sendMessage}
                sendIntent={sendIntent}
                setOpenSuccessSnackBar={setOpenSuccessSnackBar}
                setSnackbarText={setSnackbarText}
              />
            </>
          )}
        </>
      )}
    </Container>
  );
};

const SpinnerWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  height: 90px;
`;

const FirstConversation = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #657795;
  margin: 59px 0px 0px 0px;
  padding: 0px 50px;
`;

const MessageTime = styled(ItemHV2)`
  width: 100%;
  font-size: 11px;
  color: ${(props) => props.theme.default.secondaryColor};
  margin: 15px 0px;
`;

const MessageContainer = styled(ItemVV2)`
  align-items: unset;
  justify-content: flex-start;
  position: absolute;
  top: 65px;
  bottom: 66px;
  left: 0;
  right: 0;
  margin: 0;
  width: 100%;
  height: calc(100% - 140px);
`;

const UserInfo = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
`;

const ChatHeader = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 9px;
  left: 9px;
  right: 9px;
  height: 55px;
  border-radius: 29px;
  color: ${(props) => props.theme.default.color};
  background: ${(props) => props.theme.default.bg};
  padding: 6px;
  font-weight: 500;
`;

const Option = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const OptionContainer = styled.div`
  position: absolute;
  top: 55px;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 19px;
  width: 193px;
  background: #ffffff;
  border-radius: 16px;
  z-index: 100;
`;

const MoreOptions = styled.div`
  position: relative;
`;

const Icon = styled.i`
  filter: ${(props) => props.filter};
  padding: 0px;
  display: flex;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const Container = styled(Content)`
  box-sizing: border-box;
  background: ${(props) => props.theme.chat.chatboxBg || 'transparent'};
  border-radius: 24px;
  height: 100%;
  display: flex;
  align-items: center;
  align-self: stretch;
  text-align: center;
  font-weight: 400;
  justify-content: center;
  position: relative;
`;

const HelloBox = styled(Box)`
  background: #ffffff;
  border-radius: 2px 28px 28px 28px;
  padding: 24px 70px 27px 70px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const WelcomeMainText = styled(SpanV2)`
  background: ${(props) => props.theme.default.bg};
  padding: 20px 55px;
  border-radius: 2px 28px 28px 28px;
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  color: ${(props) => props.theme.default.color};
  letter-spacing: -0.03em;
  margin: 0 4rem;
  @media only screen and (max-width: 1115px) and (min-width: 991px) {
    font-size: 26px;
    padding: 16px 33px;
    & img {
      width: 2rem;
    }
  }
  @media only screen and (max-width: 771px) and (min-width: 711px) {
    font-size: 23px;
    padding: 16px 30px;
    & img {
      width: 1.8rem;
    }
  }
`;

const WelcomeSubText = styled(SpanV2)`
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  max-width: 17rem;
  color: ${(props) => props.theme.default.seconddaryColor};
  @media only screen and (max-width: 1115px) and (min-width: 991px) {
    font-size: 13px;
    max-width: 15rem;
  }
  @media only screen and (max-width: 780px) and (min-width: 711px) {
    font-size: 13px;
    max-width: 14rem;
  }
`;

const TabletBackButton = styled(ButtonV2)`
  display: none;

  @media ${device.tablet} {
    display: initial;
  }
`;

const MessageLoader = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const CustomScrollContent = styled(ScrollToBottom)`
  padding-right: 0px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  margin: 0 2px;
  & > * {
    overflow-x: hidden;
  }
  & > div::-webkit-scrollbar {
    width: 4px;
  }
  & > div::-webkit-scrollbar-thumb {
    background: #cf1c84;
    border-radius: 10px;
  }
`;

const FileUploadLoaderContainer = styled.div`
  border: none;
  font-size: 1.8rem;
  border-radius: 5px;
  background-color: transparent;
  margin-right: 2rem;
  color: rgb(58, 103, 137);
`;

export default ChatBox;
