// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import React, { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';

// External Packages
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import Picker from 'emoji-picker-react';
import 'font-awesome/css/font-awesome.min.css';
import { CID } from 'ipfs-http-client';
import { MdCheckCircle, MdError, MdOutlineArrowBackIos } from 'react-icons/md';
import { useQuery } from 'react-query';
import ScrollToBottom from 'react-scroll-to-bottom';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import * as PushNodeClient from 'api';
import { Feeds, MessageIPFSWithCID, User } from 'api';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ButtonV2, ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { Content, TextField } from 'components/SharedStyling';
import { DID } from 'dids';
import * as w2wHelper from 'helpers/w2w/';
import * as DIDHelper from 'helpers/w2w/did';
import { generateKeyPair } from 'helpers/w2w/pgp';
import useToast from 'hooks/useToast';
import { AppContext, Context } from 'sections/chat/ChatMainSection';
import HandwaveIcon from "../../../../assets/chat/handwave.svg";
import { caip10ToWallet, decryptAndVerifySignature, encryptAndSign, walletToCAIP10 } from '../../../../helpers/w2w';
import { MessageIPFS } from '../../../../helpers/w2w/ipfs';
import Chats from '../chats/chats';
import { FileMessageContent } from '../Files/Files';
import GifPicker from '../Gifs/gifPicker';
import { intitializeDb } from '../w2wIndexeddb';
import { decryptFeeds, fetchInbox } from '../w2wUtils';
import './chatBox.css';

// Internal Configs
import { appConfig } from 'config';
import GLOBALS, { device } from 'config/Globals';

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

const ChatBox = (): JSX.Element => {
  const {
    currentChat,
    viewChatBox,
    did,
    searchedUser,
    connectedUser,
    inbox,
    setConnectedUser,
    connectAndSetDID,
    setDID,
    setChat,
    setInbox,
    setHasUserBeenSearched,
    setSearchedUser,
    setLoadingMessage,
    setBlockedLoading
  }: AppContext = useContext<AppContext>(Context)
  const [newMessage, setNewMessage] = useState<string>('')
  const [textAreaDisabled, setTextAreaDisabled] = useState<boolean>(false)
  const [showEmojis, setShowEmojis] = useState<boolean>(false)
  const { chainId, account } = useWeb3React<ethers.providers.Web3Provider>()
  const [Loading, setLoading] = useState<boolean>(true)
  const [messageBeingSent, setMessageBeingSent] = useState<boolean>(false)
  const [messages, setMessages] = useState<MessageIPFSWithCID[]>([])
  const [imageSource, setImageSource] = useState<string>('')
  const [filesUploading, setFileUploading] = useState<boolean>(false)
  const imageInputRef = useRef<HTMLInputElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isGifPickerOpened, setIsGifPickerOpened] = useState<boolean>(false)
  const [openReprovalSnackbar, setOpenSuccessSnackBar] = useState<boolean>(false)
  const [SnackbarText, setSnackbarText] = useState<string>('')
  const [chatCurrentCombinedDID, setChatCurrentCombinedDID] = useState<string>('')
  const [showOption, setShowOption] = useState<boolean>(false)
  const provider = ethers.getDefaultProvider()
  const chatBoxToast = useToast();
  const theme = useTheme();
  let showTime = false;
  let time = '';

  const getMessagesFromCID = async (): Promise<void> => {
    if (currentChat) {
      const latestThreadhash: string = inbox.find((x) => x.combinedDID === currentChat.combinedDID)?.threadhash;
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
          if (msgIPFS.encType !== 'PlainText' && msgIPFS.encType !== null) {
            // To do signature verification it depends on who has sent the message
            let signatureValidationPubliKey: string;
            if (msgIPFS.fromDID === connectedUser.did) {
              signatureValidationPubliKey = connectedUser.publicKey;
            } else {
              signatureValidationPubliKey = currentChat.publicKey;
            }
            msgIPFS.messageContent = await decryptAndVerifySignature({
              cipherText: msgIPFS.messageContent,
              encryptedSecretKey: msgIPFS.encryptedSecret,
              did: did,
              encryptedPrivateKeyArmored: connectedUser.encryptedPrivateKey,
              publicKeyArmored: signatureValidationPubliKey,
              signatureArmored: msgIPFS.signature,
            });
          }

          //checking if the message is encrypted or not
          const messagesSentInChat: MessageIPFS = messages.find(
            (msg) =>
              msg.link === '' &&
              msg.encType === '' &&
              msg.cid === '' &&
              msg.messageContent === msgIPFS.messageContent &&
              msg.messageType === msgIPFS.messageType
          );
          // Replace message that was inserted when sending a message (same comment -abhishek)
          if (messagesSentInChat) {
            console.log("Message sent in chat",messagesSentInChat)
            const newMessages = messages.map((x) => x);
            const index = newMessages.findIndex(
              (msg) =>
                msg.link === '' &&
                msg.encType === '' &&
                msg.cid === '' &&
                msg.messageContent === msgIPFS.messageContent &&
                msg.messageType === msgIPFS.messageType
            );
            newMessages[index] = msgIPFS;
            setMessages(newMessages);
          } else {
            //checking if the message is already in the array or not (if that is not present so we are adding it in the array)
            const messageInChat: MessageIPFS = messages.find((msg) => msg.link === msgIPFS?.link);
            if (messageInChat === undefined) {
              
              setMessages((m) => [...m, msgIPFS]);
            }
          }
        }
        // This condition is triggered when the user loads the chat whenever the user is changed
        else{
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

              // Decrypt message
              if (msgIPFS.encType !== 'PlainText' && msgIPFS.encType !== null) {
                // To do signature verification it depends on who has sent the message
                let signatureValidationPubliKey: string;
                if (msgIPFS.fromDID === connectedUser.did) {
                  signatureValidationPubliKey = connectedUser.publicKey;
                } else {
                  signatureValidationPubliKey = currentChat.publicKey;
                }
                msgIPFS.messageContent = await decryptAndVerifySignature({
                  cipherText: msgIPFS.messageContent,
                  encryptedSecretKey: msgIPFS.encryptedSecret,
                  did: did,
                  encryptedPrivateKeyArmored: connectedUser.encryptedPrivateKey,
                  publicKeyArmored: signatureValidationPubliKey,
                  signatureArmored: msgIPFS.signature,
                });
              }

              // !FIX-ME : This will also be not called as when the messages are fetched from IndexDB or IPFS they are already present there and they are not duplicated so we can remove this below if statement only else is fine.
              const messagesSentInChat: MessageIPFS = messages.find(
                (msg) =>
                  msg.link === '' &&
                  msg.encType === '' &&
                  msg.cid === '' &&
                  msg.messageContent === msgIPFS.messageContent &&
                  msg.messageType === msgIPFS.messageType
              );
              // Replace message that was inserted when sending a message
              if (messagesSentInChat) {
                const newMessages = messages.map((x) => x);
                const index = newMessages.findIndex(
                  (msg) =>
                    msg.link === '' &&
                    msg.encType === '' &&
                    msg.cid === '' &&
                    msg.messageContent === msgIPFS.messageContent &&
                    msg.messageType === msgIPFS.messageType
                );
                newMessages[index] = msgIPFS;
                setMessages(newMessages);
              }
              // Display messages for the first time
              else if (messages.length === 0 || msgIPFS.timestamp < messages[0].timestamp) {
                setMessages((m) => [msgIPFS, ...m]);

                //I did here because this is triggered when the intent is sent from the sender what it does is it shows loader until the message is received from the IPFS by creating a threadhash. Because of the react query this function is triggered after 3 secs and if their is no threadhash(in case of Intent) the else part is triggered which setMessages([]) to null.
                setMessageBeingSent(false)
              }
              // Messages got from useQuery
              // else {
              //TODO: Not needed as this is handled when the threadhashes are not same.
              //   setMessages((m) => [...m, msgIPFS])
              // }
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
    setLoading(true)
    console.log("Current Chat changed")
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

  const sendMessage = async ({ message, messageType }: { message: string; messageType: string }): Promise<void> => {
    setMessageBeingSent(true);
    let msg: MessageIPFSWithCID;
    let messageContent: string, encryptionType: string, aesEncryptedSecret: string, signature: string, sigType: string;
    try {
      msg = {
        fromCAIP10: walletToCAIP10({ account, chainId }),
        fromDID: did.id,
        toDID: currentChat.did,
        messageContent: message,
        messageType,
        signature: '',
        encType: '',
        sigType: '',
        timestamp: Date.now(),
        encryptedSecret: '',
        link: '',
        cid: '',
      };
      setNewMessage('');
      // setMessages([...messages, msg]);
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
          fromEncryptedPrivateKeyArmored: connectedUser.encryptedPrivateKey,
          fromPublicKeyArmored: connectedUser.publicKey,
          toPublicKeyArmored: currentChat.publicKey,
          did,
        });
        messageContent = cipherText;
        encryptionType = pgpEncryptionType;
        aesEncryptedSecret = encryptedSecret;
        signature = pgpSignature;
        sigType = pgpSignatureType;
      }
      const savedMsg: MessageIPFSWithCID | string = await PushNodeClient.postMessage({
        fromCAIP10: walletToCAIP10({ account, chainId }),
        fromDID: did.id,
        toDID: currentChat.did,
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
        if (savedMsg.encType !== 'PlainText' && savedMsg.encType !== null) {
          // To do signature verification it depends on who has sent the message
          let signatureValidationPubliKey: string;
          if (savedMsg.fromDID === connectedUser.did) {
            signatureValidationPubliKey = connectedUser.publicKey;
          } else {
            signatureValidationPubliKey = currentChat.publicKey;
          }
          savedMsg.messageContent = await decryptAndVerifySignature({
            cipherText: savedMsg.messageContent,
            encryptedSecretKey: savedMsg.encryptedSecret,
            did: did,
            encryptedPrivateKeyArmored: connectedUser.encryptedPrivateKey,
            publicKeyArmored: signatureValidationPubliKey,
            signatureArmored: savedMsg.signature,
          });
        }
        console.log("Saved Msg",savedMsg)
        setMessages([...messages, savedMsg]);
      }
    } catch (error) {
      console.log(error);
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
      console.log("Timeout of 2 sec")
      setMessageBeingSent(false);
    }, 2000);
  };

  const handleSubmit = (e: { preventDefault: () => void }): void => {
    e.preventDefault();

    if (newMessage.trim() !== '') {
      if (currentChat.threadhash) {
        sendMessage({
          message: newMessage,
          messageType: 'Text',
        });
      } else {
        sendIntent({ message: newMessage, messageType: 'Text' });
      }
    }
  };

  const createUserIfNecessary = async (): Promise<{ didCreated: DID; createdUser: User }> => {
    try {
      if (!did) {
        setBlockedLoading({
          enabled: true,
          title: "Step 1/4: Preparing First Time Setup",
          progressEnabled: true,
          progress: 25,
          progressNotice: "We use Ceramic to enable multichain and multiwallet experience. This step is is only done for first time users and might take a couple of minutes. Steady lads, chat is almost ready! You will need to sign two transactions when they appear."
        })

        const createdDID: DID = await connectAndSetDID();

        // This is a new user
        setBlockedLoading({
          enabled: true,
          title: "Step 2/4: Generating crytographic keys",
          progressEnabled: true,
          progress: 40,
        })

        const keyPairs = await generateKeyPair();
        setBlockedLoading({
          enabled: true,
          title: "Step 3/4: Encrypting your info",
          progressEnabled: true,
          progress: 60
        })

        const encryptedPrivateKey = await DIDHelper.encrypt(keyPairs.privateKeyArmored, createdDID);
        const caip10: string = w2wHelper.walletToCAIP10({ account, chainId });
        setBlockedLoading({
          enabled: true,
          title: "Step 3/4: Syncing account info",
          progressEnabled: true,
          progress: 85,
          progressNotice: "This might take a couple of seconds as push nodes sync your info for first time!"
        })

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
          title: "Step 4/4: Done, Welcome to Push Chat!",
          spinnerCompleted: true,
          progressEnabled: true,
          progress: 100,
        })
        
        return { didCreated: createdDID, createdUser };
      } else {
        return { didCreated: did, createdUser: connectedUser };
      }
    } catch (e) {
      console.log(e);
    }
  };

  const sendIntent = async ({ message, messageType }: { message: string; messageType: string }): Promise<void> => {
    try {
      setMessageBeingSent(true);
      const { didCreated, createdUser } = await createUserIfNecessary();
      if (currentChat.intent === null || currentChat.intent === '' || !currentChat.intent.includes(didCreated.id)) {
        const user: User = await PushNodeClient.getUser({ did: currentChat.did });
        let messageContent: string, encryptionType: string, aesEncryptedSecret: string, signature: string;
        let caip10: string;
        if (!user) {
          caip10 = walletToCAIP10({ account: searchedUser, chainId });
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
              fromEncryptedPrivateKeyArmored: createdUser.encryptedPrivateKey,
              toPublicKeyArmored: currentChat.publicKey,
              fromPublicKeyArmored: createdUser.publicKey,
              did: didCreated,
            });
            messageContent = cipherText;
            encryptionType = 'pgp';
            aesEncryptedSecret = encryptedSecret;
            signature = pgpSignature;
          }
        }

        const msg: MessageIPFSWithCID | string = await PushNodeClient.createIntent({
          toDID: currentChat.did,
          fromDID: didCreated.id,
          fromCAIP10: walletToCAIP10({ account, chainId }),
          messageContent,
          messageType,
          signature,
          encType: encryptionType,
          sigType: signature,
          encryptedSecret: aesEncryptedSecret,
        });

        if (typeof msg === 'string') {
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
        } else {
          // We store the message in state decrypted so we display to the user the intent message
          msg.messageContent = message;
          // setMessages([...messages, msg]);
          setNewMessage('');
          // Update inbox. We do this because otherwise the currentChat.threadhash after sending the first intent
          // will be undefined since it was not updated right after the intent was sent
          let inboxes: Feeds[] = await fetchInbox(didCreated);
          inboxes = await decryptFeeds({ feeds: inboxes, connectedUser: createdUser, did: didCreated });
          setInbox(inboxes);
          const result = inboxes.find((x) => x.did === currentChat.did);
          setChat(result);
          chatBoxToast.showMessageToast({
            toastTitle: 'Success',
            toastMessage: 'Intent Sent',
            toastType: 'SUCCESS',
            getToastIcon: (size) => (
              <MdCheckCircle
                size={size}
                color="green"
              />
            ),
          });
        }
      } else {
        setNewMessage('');
        setOpenSuccessSnackBar(true);
        setSnackbarText('Cannot send message, Intent is not approved!');
      }
      setSearchedUser('')
      setHasUserBeenSearched(false)
    } catch (error) {
      console.log(error);
      setMessageBeingSent(false);
    }
    // setMessageBeingSent(false);
  };

  const handleKeyPress = (e: any): void => {
    const x = e.keyCode;
    if (x === 13) {
      handleSubmit(e);
    }
  };

  const textOnChange = (e: any): void => {
    if(!messageBeingSent){
      setNewMessage(e.target.value);
    }
  };

  const uploadFile = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file: File = e.target.files?.[0];
    if (file) {
      try {
        const TWO_MB = 1024 * 1024 * 2;
        if (file.size > TWO_MB) {
          setOpenSuccessSnackBar(true);
          setSnackbarText('Files larger than 2mb is now allowed');
          return;
        }
        setFileUploading(true);
        const messageType = file.type.startsWith('image') ? 'Image' : 'File';
        const reader = new FileReader();
        let fileMessageContent: FileMessageContent;
        reader.readAsDataURL(file);
        reader.onloadend = async (e): Promise<void> => {
          fileMessageContent = {
            content: e.target.result as string,
            name: file.name,
            type: file.type,
            size: file.size,
          };
          if (!currentChat.intent.includes(did.id)) {
            sendIntent({ message: JSON.stringify(fileMessageContent), messageType: messageType });
          } else {
            sendMessage({
              message: JSON.stringify(fileMessageContent),
              messageType,
            });
          }
          setFileUploading(false);
        };
      } catch (err) {
        console.log(err);
      }
    }
  };

  const addEmoji = (e: any, emojiObject: { emoji: any }): void => {
    setNewMessage(newMessage + emojiObject.emoji);
    setShowEmojis(false);
  };

  const sendGif = (url: string): void => {
    if (!currentChat.intent.includes(did.id)) {
      sendIntent({ message: url, messageType: 'GIF' });
    } else {
      sendMessage({
        message: url,
        messageType: 'GIF',
      });
    }
  };
  const handleCloseSuccessSnackbar = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccessSnackBar(false);
  };

  return (
    <Container>
      {!viewChatBox ? (
        <ItemVV2 gap="25px">
         <WelcomeMainText 
         theme={theme}>
           <ImageV2 src={HandwaveIcon} 
           alt="wave"
           display="inline" 
           width="auto"
           verticalAlign="middle"
           margin="0 13px"/>
         </WelcomeMainText>
         <WelcomeSubText 
          theme={theme}>
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
            zIndex="999"
          >
          {/* setChat */}
          
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
              {caip10ToWallet(currentChat.msg.name)}
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
            <ScrollToBottom className="chatBoxTop" initialScrollBehavior="smooth">
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
                          did={did}
                          messageBeingSent={messageBeingSent}
                        />
                        {/* {messages.length === 1 && msg.fromDID === did.id ? (
                          <FirstConversation>
                            This is your first conversation with the receipent, you will be able to continue the
                            conversation once the receipent accepts the intent
                          </FirstConversation>
                        ) : null} */}
                      </div>
                    );
                  })}
                </>
              )}
            </ScrollToBottom>
          </MessageContainer>

          {/* {messageBeingSent ? (
            <LoaderSpinner
              type={LOADER_TYPE.STANDALONE_MINIMAL}
              spinnerSize={40}
            />
          ) : ( */}
            <ItemHV2 
                position="absolute"
                justifyContent="space-between"
                gap="10px"
                bottom="9px"
                left="9px"
                right="9px"
                height="55px"
                padding="0 1rem"
                borderRadius="16px"
                color="black"
                background={theme.chat.sendMessageBoxBg}
            >
              <Icon 
                src={`/svg/chats/smiley${theme.scheme==="dark"?"_dark":""}.svg`} 
                onClick={(): void => setShowEmojis(!showEmojis)} 
              />
              {showEmojis && (
                <Picker
                  onEmojiClick={addEmoji}
                  pickerStyle={{
                    width: '300px',
                    position: 'absolute',
                    bottom: '2.5rem',
                    zindex: '700',
                    left: '2.5rem',
                  }}
                />
              )}
              {
                <TextInput
                  placeholder="Type your message..."
                  onKeyDown={handleKeyPress}
                  onChange={textOnChange}
                  value={newMessage}
                  autoFocus="autoFocus"
                />
              }
              <>
                <>
                  <label>
                    {isGifPickerOpened && (
                      <GifPicker
                        setIsOpened={setIsGifPickerOpened}
                        isOpen={isGifPickerOpened}
                        onSelect={sendGif}
                      />
                    )}
                    <Icon 
                      src={`/svg/chats/gif${theme.scheme==="dark"?"_dark":""}.svg`} 
                      onClick={() => setIsGifPickerOpened(!isGifPickerOpened)}
                      style={{
                        width: "38px",
                        padding: "5.5px 9px",
                        background: theme.chat.gifBtnBg,
                        borderRadius: "10px",
                      }} 
                    />
                  </label>
                  <label>
                    <Icon
                      src={`/svg/chats/attachment${theme.scheme==="dark"?"_dark":""}.svg`} 
                      style={{
                        height:"24px",
                        width:"20px"
                      }} 
                    />
                    <FileInput
                      type="file"
                      ref={fileInputRef}
                      onChange={uploadFile}
                    />
                  </label>
                </>
                {(filesUploading || messageBeingSent) ? (
                    <LoaderSpinner
                      type={LOADER_TYPE.SEAMLESS}
                      spinnerSize={32}
                    />
                  ) : (
                  <Icon
                    src={`/svg/chats/send${theme.scheme==="dark"?"_dark":""}.svg`} 
                    onClick={handleSubmit}
                    style={{
                      width: "26px"
                    }}
                  />
                )}
              </>
            </ItemHV2>
          {/* )} */}
        </>
      )}
    </Container>
  );
};

const SpinnerWrapper = styled.div`
  width: 100%;
  height: calc(83.6vh - 130px);
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

const FileInput = styled.input`
  display: none;
`;

const MessageTime = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #000000;
  margin: 15px 0px;
`;

const MessageContainer = styled.div`
  position: absolute;
  top: 65px;
  bottom: 66px;
  left: 0;
  right: 0;
  margin: 0;
  width: 100%;
  height: calc(83.6vh - 130px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  /* &&::-webkit-scrollbar {
    width: 0;
    height: 0;
  } */
  &&::-webkit-scrollbar {
    width: 4px;
  }
  &&::-webkit-scrollbar-thumb {
    background: #cf1c84;
  }
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

const Icon = styled(ImageV2)`
  height: 32px;
  width: 32px;
  margin: 0px;
  padding: 0px;
  &:hover {
    cursor: pointer;
  }
`;

const TextInput = styled(TextField)`
  height: 26px;
  width: 77%;
  font-size: 16px;
  resize: none;
  padding: 4px 0;
  color: ${(props) => props.theme.chat.sendMessageBoxFontClr || '#494D5F'};
  &&::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  &&::placeholder {
    color: ${(props) => props.theme.chat.sendMessageBoxFontClr || '#494D5F'};
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
  padding:24px 70px 27px 70px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const WelcomeMainText = styled(SpanV2)`
  background:${props => props.theme.default.bg};
  padding:20px 55px;
  border-radius:2px 28px 28px 28px;
  font-size:28px;
  font-weight:500;
  text-align:center;
  color:${props => props.theme.default.color};
  letter-spacing:-0.03em;
  margin:0 4rem;
  @media only screen and (max-width: 1115px) and (min-width: 991px) {
    font-size:26px;
    padding: 16px 33px;
    & img {
      width:2rem;
    }
  }
  @media only screen and (max-width: 771px) and (min-width: 711px) {
    font-size:23px;
    padding: 16px 30px;
    & img {
      width:1.8rem;
    }
  }
`;

const WelcomeSubText = styled(SpanV2)`
font-size:15px;
font-weight:400;
line-height:19px;
max-width:17rem;
color:${props => props.theme.default.seconddaryColor};
@media only screen and (max-width: 1115px) and (min-width: 991px) {
  font-size:13px;
  max-width:15rem;
}
@media only screen and (max-width: 780px) and (min-width: 711px) {
  font-size:13px;
  max-width:14rem;
}
`;

const TabletBackButton = styled(ButtonV2)`
  display: none;
  
  @media ${device.tablet} {
    display: initial;
  }
`

export default ChatBox;
