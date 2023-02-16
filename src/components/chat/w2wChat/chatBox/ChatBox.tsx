// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import React, { useContext, useEffect, useState } from 'react';

// External Packages
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import 'font-awesome/css/font-awesome.min.css';
import { CID } from 'ipfs-http-client';
import { MdCheckCircle, MdError, MdOutlineArrowBackIos } from 'react-icons/md';
import { useQuery } from 'react-query';
import ScrollToBottom from 'react-scroll-to-bottom';
import styled, { useTheme } from 'styled-components';
import { BsDashLg } from 'react-icons/bs';
import * as PushAPI from '@pushprotocol/restapi';

// Internal Components
import * as PushNodeClient from 'api';
import LoaderSpinner, { LOADER_SPINNER_TYPE, LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ButtonV2, ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { Content } from 'components/SharedStyling';
import * as w2wHelper from 'helpers/w2w/';
import useToast from 'hooks/useToast';
import { useResolveEns } from 'hooks/useResolveEns';
import { Context } from 'modules/chat/ChatModule';
import HandwaveIcon from '../../../../assets/chat/handwave.svg';
import { caip10ToWallet, walletToCAIP10 } from '../../../../helpers/w2w';
import Chats from '../chats/Chats';
import { intitializeDb } from '../w2wIndexeddb';
import Lock from '../../../../assets/Lock.png';
import LockSlash from '../../../../assets/LockSlash.png';
import { AppContext, Feeds, MessageIPFS, MessageIPFSWithCID, User } from 'types/chat';

// Internal Configs
import { appConfig } from 'config';
import GLOBALS, { device } from 'config/Globals';
import { checkConnectedUser, checkIfIntentExist, getLatestThreadHash } from 'helpers/w2w/user';
import Typebar from '../TypeBar/Typebar';
import { Item } from 'primaries/SharedStyling';
import { ChatUserContext } from 'contexts/ChatUserContext';
import { MessagetypeType } from '../../../../types/chat';
import { checkIfGroup, getIntentMessage, getProfilePicture } from '../../../../helpers/w2w/groupChat';

// Constants
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
    receivedIntents,
    inbox,
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
  const [isGroup, setIsGroup] = useState<boolean>(false);
  const { connectedUser, setConnectedUser } = useContext(ChatUserContext);
  const provider = ethers.getDefaultProvider();
  const chatBoxToast = useToast();
  const theme = useTheme();
  let showTime = false;
  let time = '';

  useEffect(() => {
    setIsGroup(checkIfGroup(currentChat));
  });

  //get ens name
  const ensName = useResolveEns(!isGroup ? currentChat?.wallets?.split(',')[0].toString() : null);

  const getMessagesFromCID = async (): Promise<void> => {
    if (currentChat) {
      const latestThreadhash: string = getLatestThreadHash({ inbox, receivedIntents, currentChat, isGroup });
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

          //checking if the message is already in the array or not (if that is not present so we are adding it in the array)
          const messageInChat: MessageIPFS = messages.find((msg) => msg.link === msgIPFS?.link);
          if (messageInChat === undefined) {
            setMessages((m) => [...m, msgIPFS]);
          }
        }
        // This condition is triggered when the user loads the chat whenever the user is changed
        else if (messages.length == 0) {
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
              if (messages.length === 0 || msgIPFS.timestamp < messages[0].timestamp) {
                setMessages((m) => [msgIPFS, ...m]);
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
        const image = getProfilePicture(currentChat);
        try {
          CID.parse(image); // Will throw exception if invalid CID
          setImageSource(INFURA_URL + `${image}`);
        } catch (err) {
          setImageSource(image);
        }
      }
    }
  }, [currentChat]);

  const getDisplayName = () => {
    if (ensName) return `${ensName} (${caip10ToWallet(currentChat?.wallets?.split(',')[0].toString())})`;
    if (isGroup) return currentChat?.groupInformation?.groupName;
    if (currentChat?.wallets) return caip10ToWallet(currentChat?.wallets?.split(',')[0].toString());
  };

  const fetchInboxApi = async (): Promise<Feeds> => {
    if (checkConnectedUser(connectedUser)) {
      // Update inbox. We do this because otherwise the currentChat.threadhash after sending the first intent
      // will be undefined since it was not updated right after the intent was sent
      let inboxes: Feeds[] = await PushAPI.chat.chats({ account: account!, env: appConfig.appEnv, toDecrypt: false });
      await intitializeDb<Feeds[]>('Insert', 'Inbox', walletToCAIP10({ account: account! }), inboxes, 'did');
      inboxes = await w2wHelper.decryptFeeds({ feeds: inboxes, connectedUser: connectedUser });
      setInbox(inboxes);
      return inboxes.find((x) => x.wallets.split(',')[0] === currentChat.wallets.split(',')[0]);
    }
  };

  const sendMessage = async ({ message, messageType }: { message: string; messageType: MessagetypeType }): Promise<void> => {
    setMessageBeingSent(true);
    try {
      const sendResponse = await PushAPI.chat.send({
        messageContent: message,
        messageType: messageType,
        receiverAddress: isGroup ? currentChat.groupInformation?.chatId : currentChat?.wallets.split(',')[0],
        account: account!,
        pgpPrivateKey: connectedUser?.privateKey,
        apiKey: 'tAWEnggQ9Z.UaDBNjrvlJZx3giBTIQDcT8bKQo1O1518uF1Tea7rPwfzXv2ouV5rX9ViwgJUrXm',
        env: appConfig.appEnv,
      });

      if (typeof sendResponse !== 'string') {
        await intitializeDb<MessageIPFS>('Insert', 'CID_store', sendResponse.cid, sendResponse, 'cid');
        sendResponse.messageContent = message;
        setNewMessage('');
        setMessages([...messages, sendResponse]);
      } else {
        chatBoxToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: `${sendResponse}`,
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });
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
    }, 2000);
  };

  async function resolveThreadhash(): Promise<void> {
    setLoading(true);
    let getIntent;
    if (checkConnectedUser(connectedUser)) {
      getIntent = await intitializeDb<string>('Read', 'Intent', walletToCAIP10({ account: account! }), '', 'did');
    }
    // If the user is not registered in the protocol yet, his did will be his wallet address
    const didOrWallet: string = connectedUser.wallets.split(',')[0];
    let intents = await PushAPI.chat.requests({ account: didOrWallet!, env: appConfig.appEnv, toDecrypt: false });
    await intitializeDb<Feeds[]>('Insert', 'Intent', walletToCAIP10({ account: account! }), intents, 'did');
    intents = await w2wHelper.decryptFeeds({ feeds: intents, connectedUser });
    setPendingRequests(intents?.length);
    setReceivedIntents(intents);
    setLoading(false);
  }

  async function ApproveIntent(status: string): Promise<void> {
    setMessageBeingSent(true);

    let updatedIntent: any;
    try {
    updatedIntent = await PushAPI.chat.approve({
      status: 'Approved',
      account: account!,
      senderAddress: isGroup ? currentChat.groupInformation?.chatId : currentChat.intentSentBy,
      env: appConfig.appEnv,
    });

    let activeChat = currentChat;
    activeChat.intent = updatedIntent.data;
    setChat(activeChat);

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
    } catch (error) {
      chatBoxToast.showMessageToast({
        toastTitle: 'Error',
        toastMessage: 'Cannot approve intent, Try again later',
        toastType: 'ERROR',
        getToastIcon: (size) => (
          <MdError
            size={size}
            color="red"
          />
        ),
      });
    }
  }

  const sendIntent = async ({
    message,
    messageType,
  }: {
    message: string;
    messageType: MessagetypeType;
  }): Promise<void> => {
    try {
      setMessageBeingSent(true);
      if (
        currentChat.intent === null ||
        currentChat.intent === '' ||
        !currentChat.intent.includes(currentChat.wallets.split(',')[0])
      ) {
        const sendResponse = await PushAPI.chat.send({
          messageContent: message,
          messageType: messageType,
          receiverAddress: currentChat?.wallets.split(',')[0],
          account: account!,
          pgpPrivateKey: connectedUser?.privateKey,
          apiKey: 'tAWEnggQ9Z.UaDBNjrvlJZx3giBTIQDcT8bKQo1O1518uF1Tea7rPwfzXv2ouV5rX9ViwgJUrXm',
          env: appConfig.appEnv,
        });

        if (typeof sendResponse === 'string') {
          if (sendResponse.toLowerCase() === 'your wallet is not whitelisted') {
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
            toastMessage: `${sendResponse}`,
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
          sendResponse.messageContent = message;
          setNewMessage('');
          const result = await fetchInboxApi();
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
    setTimeout(() => {
      setMessageBeingSent(false);
    }, 2000);
  };

  const handleCloseSuccessSnackbar = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccessSnackBar(false);
  };

  const InfoMessages = [
    { id: 1, content: 'You can send up to 10 chat requests in alpha' },
    { id: 2, content: 'You can send a chat request to anyone including non-whitelisted users' },
    { id: 3, content: 'You can chat with non-whitelisted users but they cannot send a chat request to anyone.' },
    {
      id: 4,
      content: 'You will have access to 100 latest messages. Encryption is enabled after a chat request is accepted',
    },
    { id: 5, content: 'Messages will only be encrypted if the receiver has encryption keys' },
    {
      id: 6,
      content:
        'Due to certain limitations Push Chat does not support Ledger Wallet yet. We are working on adding support.',
    },
    { id: 7, content: 'Access to more chat requests and messages will be added in the near future' },
  ];

  return (
    <Container>
      {!viewChatBox ? (
        <WelcomeItem gap="25px">
          <WelcomeMainText theme={theme}>
            <WelcomeText>Say</WelcomeText>
            <ImageV2
              src={HandwaveIcon}
              alt="wave"
              display="inline"
              width="auto"
              verticalAlign="middle"
              margin="0 13px"
            />
            <WelcomeText>to Push Chat</WelcomeText>
          </WelcomeMainText>

          <WelcomeInfo>
            <SpanV2
              fontWeight="500"
              fontSize="15px"
              lineHeight="130%"
            >
              Push Chat is in alpha and things might break.
            </SpanV2>

            <Atag
              href={'https://discord.gg/pushprotocol'}
              target="_blank"
            >
              We would love to hear your feedback
            </Atag>

            <ItemBody>
              {InfoMessages.map((item) => (
                <WelcomeContent key={item.id}>
                  <BsDashLg className="icon" />
                  <TextInfo>{item.content}</TextInfo>
                </WelcomeContent>
              ))}
            </ItemBody>
          </WelcomeInfo>
        </WelcomeItem>
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
            zIndex="1"
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
                objectFit="cover"
              />
            </ItemHV2>

            <SpanV2
              flex="1"
              margin="5px 10px"
              fontWeight="400"
              textAlign="start"
            >
              {getDisplayName()}
            </SpanV2>
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
                    let intents = currentChat?.intent?.split('+');
                    return (
                      <div key={i}>
                        {!showTime ? null : (
                          <Item>
                            <MessageTime>{time}</MessageTime>

                            {i === 0 && intents?.length === 2 && (
                              <ItemText>
                                <Image src={Lock} />
                                Messages are end-to-end encrypted. Only users in this chat can view or listen to them.
                                <ItemLink
                                  href="https://docs.push.org/developers/concepts/push-chat-for-web3#encryption"
                                  target={'_blank'}
                                >
                                  {' '}
                                  Click to learn more.
                                </ItemLink>
                              </ItemText>
                            )}

                            {i === 0 && intents?.length === 1 && (
                              <ItemTextSlash>
                                <Image src={LockSlash} />
                                Messages are not encrypted till the user accepts the chat request.
                              </ItemTextSlash>
                            )}
                          </Item>
                        )}

                        <Chats
                          msg={
                            isGroup && checkIfIntentExist({ receivedIntents, currentChat, connectedUser, isGroup })
                              ? ''
                              : msg
                          }
                          caip10={walletToCAIP10({ account: account! })}
                          messageBeingSent={messageBeingSent}
                          isGroup={isGroup}
                        />
                      </div>
                    );
                  })}
                  {messages && messages?.length === 0 && (
                    <Item margin="30px 0px">
                      <ItemTextSlash>
                        <Image src={LockSlash} />
                        Messages are not encrypted till the user accepts the chat request.
                      </ItemTextSlash>

                      {!isGroup && (
                        <FirstTime>
                          This is your first conversation with recipient.<br></br> Start the conversation by sending a
                          message.
                        </FirstTime>
                      )}
                    </Item>
                  )}
                  {checkIfIntentExist({ receivedIntents, currentChat, connectedUser, isGroup }) && (
                    <Chats
                      msg={{
                        ...messages[0],
                        messageContent: getIntentMessage(currentChat, isGroup),
                        messageType: 'Intent',
                      }}
                      caip10={walletToCAIP10({ account: account! })}
                      messageBeingSent={messageBeingSent}
                      ApproveIntent={() => ApproveIntent('Approved')}
                      isGroup={isGroup}
                    />
                  )}
                </>
              )}
            </CustomScrollContent>
          </MessageContainer>

          {checkIfIntentExist({ receivedIntents, currentChat, connectedUser }) ? null : (
            <>
              <Typebar
                messageBeingSent={messageBeingSent}
                setNewMessage={setNewMessage}
                newMessage={newMessage}
                setVideoCallInfo={setVideoCallInfo}
                sendMessage={sendMessage}
                isGroup = {isGroup}
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


const ItemLink = styled.a`
  color: ${(props) => props.theme.default.secondaryColor};
  text-decoration: none;
  cursor: pointer;
`;

const ItemText = styled.div`
  color: ${(props) => props.theme.default.secondaryColor};
  width: 556px;
  font-weight: 400;
  font-size: 13px;
  line-height: 130%;
  background-color: ${(props) => props.theme.default.bg};
  padding: 10px;
  border-radius: 14px;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 1250px) {
    width: 70%;
  }

  @media (max-width: 771px) {
    width: 80%;
  }
`;

const ItemTextSlash = styled.div`
  color: ${(props) => props.theme.default.secondaryColor};
  width: auto;
  font-weight: 400;
  font-size: 13px;
  line-height: 130%;
  background-color: ${(props) => props.theme.default.bg};
  padding: 10px;
  border-radius: 14px;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 1250px) {
    width: 70%;
  }

  @media (max-width: 771px) {
    width: 80%;
  }
`;
const Image = styled.img`
  width: 10px;
  margin-right: 5px;
  position: relative;
  bottom: -2px;
`;

const MessageTime = styled(ItemHV2)`
  width: 100%;
  font-size: 11px;
  color: ${(props) => props.theme.default.secondaryColor};
  margin: 15px 0px;
`;

const FirstTime = styled(ItemHV2)`
  width: 100%;
  font-size: 13px;
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

const WelcomeItem = styled(ItemVV2)`
  width: 369px;
  display: flex;
  justify-content: center;
  margin: auto auto;
  @media (max-width: 768px) {
    width: auto;
  }

  @media (min-width: 1000px) and (max-width: 1060px) {
    width: 95%;
  }
`;

const WelcomeContent = styled.div`
  width: 304px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  .icon {
    transform: rotate(-60deg);
    color: #d53893;
    min-width: 17px;
  }
`;

const ItemBody = styled.div`
  @media (min-width: 768px) and (max-height: 1080px) {
    overflow-y: scroll;
    height: 300px;
  }

  @media (min-width: 768px) and (max-height: 768px) {
    overflow-y: scroll;
    height: 150px;
  }

  @media (min-width: 768px) and (max-height: 500px) {
    overflow-y: scroll;
    height: 100px;
  }
`;

const TextInfo = styled.div`
  align-items: center;
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  color: ${(props) => props.theme.default.secondaryColor};
  width: 274px;
`;

const WelcomeMainText = styled(SpanV2)`
  background: ${(props) => props.theme.default.bg};
  padding: 20px 0px;
  border-radius: 2px 28px 28px 28px;
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  width: 100%;
  color: ${(props) => props.theme.default.color};
  letter-spacing: -0.03em;
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

const WelcomeText = styled(SpanV2)`
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  width: 100%;
  color: ${(props) => props.theme.default.color};
  letter-spacing: -0.03em;
  @media (max-width: 768px) {
    display: none;
  }
`;

const WelcomeInfo = styled.div`
  background: ${(props) => props.theme.default.bg};
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 0;
  border-radius: 28px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Atag = styled.a`
  font-weight: 500;
  font-size: 15px;
  line-height: 130%;
  text-align: center;
  color: #d53893;
  cursor: pointer;
  margin-bottom: 20px;
`;


const TabletBackButton = styled(ButtonV2)`
  display: none;

  @media ${device.tablet} {
    display: initial;
  }
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


export default ChatBox;
