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
import { useClickAway } from 'react-use';
import * as PushAPI from '@pushprotocol/restapi';

// Internal Components
import * as PushNodeClient from 'api';
import LoaderSpinner, { LOADER_SPINNER_TYPE, LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ButtonV2, ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { Content } from 'components/SharedStyling';
import * as w2wHelper from 'helpers/w2w/';
import useToast from 'hooks/useToast';
import { useResolveEns } from 'hooks/useResolveEns';
import { useDeviceWidthCheck } from 'hooks';
import { Context } from 'modules/chat/ChatModule';
import HandwaveIcon from '../../../../assets/chat/handwave.svg';
import { caip10ToWallet, walletToCAIP10 } from '../../../../helpers/w2w';
import Chats from '../chats/Chats';
import { intitializeDb } from '../w2wIndexeddb';
import Lock from '../../../../assets/Lock.png';
import LockSlash from '../../../../assets/LockSlash.png';
import { AppContext, Feeds, MessageIPFS, MessageIPFSWithCID, User } from 'types/chat';
import videoCallIcon from '../../../../assets/icons/videoCallIcon.svg';
import { ReactComponent as Info } from 'assets/chat/group-chat/info.svg';
import { ReactComponent as More } from 'assets/chat/group-chat/more.svg';
import { ReactComponent as InfoDark } from 'assets/chat/group-chat/infodark.svg';
import { ReactComponent as MoreDark } from 'assets/chat/group-chat/moredark.svg';
import {
  checkConnectedUser,
  checkIfIntentExist,
  fetchInbox,
  getLatestThreadHash,
  getUserWithDecryptedPvtKey,
} from 'helpers/w2w/user';
import Typebar from '../TypeBar/Typebar';
import { ChatUserContext } from 'contexts/ChatUserContext';
import { MessagetypeType } from '../../../../types/chat';
import { checkIfGroup, getGroupImage, getIntentMessage, getMemberDetails } from '../../../../helpers/w2w/groupChat';
import { HeaderMessage } from './HeaderMessage';

// Internal Configs
import { appConfig } from 'config';
import GLOBALS, { device } from 'config/Globals';
import { Item } from 'primaries/SharedStyling';
import Tooltip from 'components/reusables/tooltip/Tooltip';

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

const ChatBox = ({ setVideoCallInfo, showGroupInfoModal }): JSX.Element => {
  const {
    currentChat,
    viewChatBox,
    receivedIntents,
    inbox,
    setActiveTab,
    setChat,
    setInbox,
    setHasUserBeenSearched,
    setPendingRequests,
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
  const [isGroup, setIsGroup] = useState<boolean>(false);
  const [showGroupInfo, setShowGroupInfo] = useState<boolean>(false);
  const [removedMembers, setRemovedMembers] = useState<any>();
  const groupInfoRef = React.useRef<HTMLInputElement>(null);
  const { connectedUser, setConnectedUser } = useContext(ChatUserContext);
  const chatBoxToast = useToast();
  let removedMembersAddressArray;
  const theme = useTheme();
  const isMobile = useDeviceWidthCheck(600);
  let showTime = false;
  let time = '';

 
  useClickAway(groupInfoRef, () => setShowGroupInfo(false));

  //get ens name
  const ensName = useResolveEns(!isGroup ? currentChat?.wallets?.split(',')[0].toString() : null);

  const getMessagesFromCID = async (): Promise<void> => {
    if (currentChat) {
      let latestThreadhash: string = getLatestThreadHash({ inbox, receivedIntents, currentChat, isGroup });
    
      //for instance when the group chat first message is send their is not threadhash as it is null and it gets updated afterwards so fetching the threadhash from the message.
      if (latestThreadhash === undefined) {
        latestThreadhash = messages[messages?.length - 1]?.cid;
      }

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
           removedMembersAddressArray = new Set<string>();
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
      setIsGroup(checkIfGroup(currentChat));
      // We only delete the messages once the user clicks on another chat. The user could click multiple times on the same chat and it would delete the previous messages
      // even though the user was still on the same chat.
      setMessages([]);
      const image = getGroupImage(currentChat);
      try {
        CID.parse(image); // Will throw exception if invalid CID
        setImageSource(INFURA_URL + `${image}`);
      } catch (err) {
        setImageSource(image);
      }
    }
  }, [currentChat]);

  const getDisplayName = () => {
    if (ensName) return `${ensName} (${caip10ToWallet(currentChat?.wallets?.split(',')[0].toString())})`;
    if (isGroup)
      return isMobile
        ? currentChat?.groupInformation?.groupName.length > 25
          ? currentChat?.groupInformation?.groupName?.slice(0, 25) + '...'
          : currentChat?.groupInformation?.groupName
        : currentChat?.groupInformation?.groupName;
    if (currentChat?.wallets) return caip10ToWallet(currentChat?.wallets?.split(',')[0].toString());
  };

  const fetchInboxApi = async (): Promise<Feeds> => {
    if (checkConnectedUser(connectedUser)) {
      const inboxes: Feeds[] = await fetchInbox(connectedUser);
      setInbox(inboxes);
      return inboxes.find((x) => x.wallets.split(':')[1] === currentChat.wallets.split(':')[1]);
    }
  };

  const sendMessage = async ({
    message,
    messageType,
  }: {
    message: string;
    messageType: MessagetypeType;
  }): Promise<void> => {
    setMessageBeingSent(true);
    const user = await getUserWithDecryptedPvtKey(connectedUser);
    try {
      const sendResponse = await PushAPI.chat.send({
        messageContent: message,
        messageType: messageType,
        receiverAddress: isGroup ? currentChat.groupInformation?.chatId : currentChat?.wallets,
        account: account!,
        pgpPrivateKey: connectedUser?.privateKey !== '' ? connectedUser?.privateKey : user.privateKey,
        env: appConfig.appEnv,
      });

      if (typeof sendResponse !== 'string') {
        await intitializeDb<MessageIPFS>('Insert', 'CID_store', sendResponse.cid, sendResponse, 'cid');
        sendResponse.messageContent = message;
        const updatedCurrentChat = currentChat;
        updatedCurrentChat.msg = sendResponse;
        setChat(updatedCurrentChat);
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
      setConnectedUser(user);
    }, 3000);
  };

  async function resolveThreadhash(): Promise<void> {
    setLoading(true);
    let getIntent;
    if (checkConnectedUser(connectedUser)) {
      getIntent = await intitializeDb<string>('Read', 'Intent', walletToCAIP10({ account: account! }), '', 'did');
    }
    // If the user is not registered in the protocol yet, his did will be his wallet address
    const didOrWallet: string = connectedUser.wallets.split(':')[1];
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
    let user;
    try {
      setMessageBeingSent(true);
      if (
        currentChat.intent === null ||
        currentChat.intent === '' ||
        !currentChat.intent.includes(currentChat.wallets.split(':')[1])
      ) {
        user = await getUserWithDecryptedPvtKey(connectedUser);
        const sendResponse = await PushAPI.chat.send({
          messageContent: message,
          messageType: messageType,
          receiverAddress: currentChat?.wallets.split(':')[1],
          account: account!,
          pgpPrivateKey: connectedUser?.privateKey !== '' ? connectedUser?.privateKey : user.privateKey,
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

      setHasUserBeenSearched(false);
      setActiveTab(0);
    } catch (error) {
      console.error(error.message);
      chatBoxToast.showMessageToast({
        toastTitle: 'Error',
        toastMessage: 'Cannot send request, Try again later',
        toastType: 'ERROR',
        getToastIcon: (size) => (
          <MdError
            size={size}
            color="red"
          />
        ),
      });
      setMessageBeingSent(false);
    }
    setTimeout(() => {
      setMessageBeingSent(false);
      setConnectedUser(user);
    }, 2000);
  };

  const handleCloseSuccessSnackbar = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccessSnackBar(false);
  };

  const startVideoCallHandler = () => {
    setVideoCallInfo({
      address: caip10ToWallet(currentChat.wallets.toString()),
      fromPublicKeyArmored: connectedUser.publicKey,
      toPublicKeyArmored: currentChat.publicKey,
      privateKeyArmored: connectedUser.privateKey,
      establishConnection: 1,
    });
  };

  const InfoMessages = [
    { id: 1, content: 'You can send up to 10 chat requests in alpha' },
    // { id: 2, content: 'You can send a chat request to anyone including non-whitelisted users' },
    // { id: 3, content: 'You can chat with non-whitelisted users but they cannot send a chat request to anyone.' },
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

            {/* Video call button */}
            {/* <Tooltip 
              tooltipContent='Video Call'
              placementProps={{
                bottom:"1.4rem",
                transform:"translateX(-92%)",
                borderRadius: "12px 12px 2px 12px",
                width: "70px"

              }}
              wrapperProps={{width:"fit-content", minWidth:"fit-content" }}
            >
              <VideoCallButton onClick={startVideoCallHandler}>
                <ImageV2 src={videoCallIcon} />
              </VideoCallButton>
            </Tooltip> */}

            {currentChat.groupInformation && (
              <MoreOptions onClick={() => setShowGroupInfo(!showGroupInfo)}>
                <ItemHV2 padding="0px 11px 0px 0px">{theme.scheme == 'light' ? <More /> : <MoreDark />}</ItemHV2>
                {showGroupInfo && (
                  <GroupInfo
                    onClick={() => {
                      showGroupInfoModal();
                      setShowGroupInfo(false);
                    }}
                    ref={groupInfoRef}
                  >
                    <ItemVV2 maxWidth="32px">{theme.scheme == 'light' ? <Info /> : <InfoDark />}</ItemVV2>
                    <SpanV2 color={theme.default.secondaryColor}>Group Info</SpanV2>
                  </GroupInfo>
                )}
              </MoreOptions>
            )}
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
                        {!showTime ? null : (
                          <HeaderMessage
                            index={i}
                            time={time}
                            isGroup={isGroup}
                          />
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
                  <HeaderMessage
                    messages={messages}
                    isGroup={isGroup}
                  />
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
                isGroup={isGroup}
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

const GroupInfo = styled(ItemHV2)`
  position: absolute;
  top: 32px;
  right: 15px;
  width: 200px;
  border: 1px solid ${(props) => props.theme.default.border};
  background-color: ${(props) => props.theme.default.bg};
  border-radius: 12px;
  justify-content: flex-start;
  gap: 9px;
  padding: 8px;
`;

const MoreOptions = styled.div`
  position: relative;
  height: 100%;
  max-width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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

const FileUploadLoaderContainer = styled.div`
  border: none;
  font-size: 1.8rem;
  border-radius: 5px;
  background-color: transparent;
  margin-right: 2rem;
  color: rgb(58, 103, 137);
`;

const VideoCallButton = styled(ButtonV2)`
  cursor: pointer;
  width: 1.75rem;
  max-width: 1.75rem;
  min-width: 1.75rem;
  background: none;
  margin-right: 2rem;
`;

export default ChatBox;
