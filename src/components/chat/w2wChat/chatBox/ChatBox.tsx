// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// External Packages
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import * as PushAPI from '@pushprotocol/restapi';
import 'font-awesome/css/font-awesome.min.css';
import { CID } from 'ipfs-http-client';
import { BsDashLg } from 'react-icons/bs';
import { MdCheckCircle, MdError, MdOutlineArrowBackIos } from 'react-icons/md';
import ScrollToBottom from 'react-scroll-to-bottom';
import { useClickAway } from 'react-use';
import styled, { useTheme } from 'styled-components';

// Internal Components
import { ReactComponent as Info } from 'assets/chat/group-chat/info.svg';
import { ReactComponent as InfoDark } from 'assets/chat/group-chat/infodark.svg';
import { ReactComponent as More } from 'assets/chat/group-chat/more.svg';
import { ReactComponent as MoreDark } from 'assets/chat/group-chat/moredark.svg';
import videoCallIcon from 'assets/icons/videoCallIcon.svg';
import LoaderSpinner, { LOADER_SPINNER_TYPE, LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ButtonV2, ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import Tooltip from 'components/reusables/tooltip/Tooltip';
import { Content } from 'components/SharedStyling';
import { ChatUserContext } from 'contexts/ChatUserContext';
import * as w2wHelper from 'helpers/w2w/';
import {
  checkIfChatExist,
  fetchInbox
} from 'helpers/w2w/user';
import { useDeviceWidthCheck } from 'hooks';
import { useResolveWeb3Name } from 'hooks/useResolveWeb3Name';
import useToast from 'hooks/useToast';
import { Context } from 'modules/chat/ChatModule';
import { AppContext as ContextType, Feeds, MessageIPFS } from 'types/chat';
import HandwaveIcon from '../../../../assets/chat/handwave.svg';
import { caip10ToWallet, walletToCAIP10 } from '../../../../helpers/w2w';
import { checkIfGroup, getGroupImage, getIntentMessage } from '../../../../helpers/w2w/groupChat';
import { MessagetypeType } from '../../../../types/chat';
import Chats from '../chats/Chats';
import Typebar from '../TypeBar/Typebar';
import { intitializeDb } from '../w2wIndexeddb';
import { HeaderMessage } from './HeaderMessage';
import { AppContext } from 'contexts/AppContext';
import { AppContextType } from 'types/context';

// Internal Configs
import { appConfig } from 'config';
import GLOBALS, { device } from 'config/Globals';
import { getChats } from 'services';

// Constants
const INFURA_URL = appConfig.infuraApiUrl;
const chatsFetchedLimit = 15;

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
    messages,
    activeTab,
    setActiveTab,
    setMessages,
    setChat,
    setInbox,
    setHasUserBeenSearched,
    setReceivedIntents,
    setBlockedLoading,
  }: ContextType = useContext<ContextType>(Context);
  const { web3NameList }:AppContextType=useContext(AppContext);
  const [chatMeta, setChatMeta] = useState(null);

  const [newMessage, setNewMessage] = useState<string>('');
  const { chainId, account, library } = useWeb3React<ethers.providers.Web3Provider>();
  const [Loading, setLoading] = useState<boolean>(true);
  const [messageBeingSent, setMessageBeingSent] = useState<boolean>(false);
  const [imageSource, setImageSource] = useState<string>('');
  const [openReprovalSnackbar, setOpenSuccessSnackBar] = useState<boolean>(false);
  const [SnackbarText, setSnackbarText] = useState<string>('');
  const [isGroup, setIsGroup] = useState<boolean>(false);
  const [showGroupInfo, setShowGroupInfo] = useState<boolean>(false);
  const groupInfoRef = useRef<HTMLInputElement>(null);
  const { connectedUser, setConnectedUser, createUserIfNecessary } = useContext(ChatUserContext);

  const listInnerRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [chatsLoading, setChatsLoading] = useState<boolean>(true);
  const [lastThreadHashFetched, setLastThreadHashFetched] = useState<string | null>(null);
  const [wasLastListPresent, setWasLastListPresent] = useState<boolean>(false);
  const chatBoxToast = useToast();
  const theme = useTheme();
  const isMobile = useDeviceWidthCheck(600);
  let showTime = false;
  let time = '';

  useClickAway(groupInfoRef, () => setShowGroupInfo(false));

  //resolve web3 names
  useResolveWeb3Name(!isGroup ? currentChat?.wallets?.split(',')[0].toString() : null);

  // get web3 name
  let ensName=''
  if(!isGroup && currentChat?.wallets?.split(',')[0].toString()){
    const walletLowercase = caip10ToWallet(currentChat?.wallets?.split(',')[0].toString())?.toLowerCase();
    const checksumWallet = ethers.utils.getAddress(walletLowercase);
    ensName = web3NameList[checksumWallet];
  }
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // if ens is resolved, update browse to match ens name is it doesn't match
    if (ensName && location.pathname !== `/chat/${ensName}`) {
      // lastly, set navigation for dynamic linking
      navigate(`/chat/${ensName}`, { replace: true });
    }
  }, [ensName]);

  const onScroll = async () => {
    if (listInnerRef.current) {
      const { scrollTop } = listInnerRef.current;
      if (scrollTop === 0) {
        // This will be triggered after hitting the first element.
        // pagination
        // addDom();

        //scroll item
        // let content = document.getElementById('loop');
        let content = listInnerRef.current;
        let curScrollPos = content.scrollTop;
        let oldScroll = content.scrollHeight - content.clientHeight;

        await getChatCall();

        let newScroll = content.scrollHeight - content.clientHeight;
        content.scrollTop = curScrollPos + (newScroll - oldScroll);
      }
    }
  };

  const scrollToBottom = (behavior) => {
    bottomRef?.current?.scrollIntoView(!behavior ? true : { behavior: 'smooth' });
  };

  useEffect(() => {
    if (messages.length <= chatsFetchedLimit) scrollToBottom(null);
  }, [messages]);

  const getChatCall = async (
    wasLastListPresentProp = wasLastListPresent,
    messagesProp = messages,
    lastThreadHashFetchedProp = lastThreadHashFetched
  ) => {
    if (!connectedUser) return;
    if (wasLastListPresentProp && !lastThreadHashFetchedProp) return;
    setChatsLoading(true);
    // scrollToNext();
    const { chatsResponse, lastThreadHash, lastListPresent } = await getChats({
      account,
      pgpPrivateKey: connectedUser.privateKey,
      chatId: currentChat?.did || currentChat?.groupInformation?.chatId,
      threadHash: lastThreadHashFetchedProp!,
      limit: chatsFetchedLimit,
    });

    // remove this custom decryption after SDK issue is resolved in future
    const promiseArrToDecryptMsg = [];
    chatsResponse.forEach((chat) =>
      promiseArrToDecryptMsg.push(
        w2wHelper.decryptMessages({
          savedMsg: chat,
          connectedUser,
          account,
          currentChat,
          inbox,
        })
      )
    );
    const decryptedMsgArr = await Promise.all(promiseArrToDecryptMsg);
    decryptedMsgArr.sort((a, b) => {
      return a.timestamp! > b.timestamp! ? 1 : -1;
    });

    setMessages([...decryptedMsgArr, ...messagesProp]);
    setLastThreadHashFetched(lastThreadHash);
    setWasLastListPresent(lastListPresent);
    setChatsLoading(false);
  };

  useEffect(() => {
    setWasLastListPresent(false);
    setLastThreadHashFetched(null);
    setIsGroup(false);
    setShowGroupInfo(false);
    setMessages([]);

    if (currentChat) {
      setIsGroup(checkIfGroup(currentChat));
      // We only delete the messages once the user clicks on another chat. The user could click multiple times on the same chat and it would delete the previous messages
      // even though the user was still on the same chat.
      const image = getGroupImage(currentChat);
      getChatCall(false, [], null);
      try {
        CID.parse(image); // Will throw exception if invalid CID
        setImageSource(INFURA_URL + `${image}`);
      } catch (err) {
        setImageSource(image);
      }
    }
    if (Loading) setLoading(false);
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
    const inboxes: Feeds[] = await fetchInbox(connectedUser);
    setInbox(inboxes);
    return inboxes?.find((x) => x.wallets.split(':')[1]?.toLowerCase() === currentChat.wallets.split(':')[1]?.toLowerCase());
  };

  const sendMessage = async ({
    message,
    messageType,
  }: {
    message: string;
    messageType: MessagetypeType;
  }): Promise<void> => {
    setMessageBeingSent(true);

    try {
      let createdUser;
      if (!connectedUser.publicKey) {
        createdUser = await createUserIfNecessary();
      }
      const signer = await library.getSigner();

      const sendResponse = await PushAPI.chat.send({
        messageContent: message,
        messageType: messageType,
        receiverAddress: isGroup ? currentChat.groupInformation?.chatId : currentChat?.wallets,
        signer: signer!,
        pgpPrivateKey: connectedUser?.privateKey || createdUser?.privateKey,
        env: appConfig.appEnv,
      });

      if (typeof sendResponse !== 'string') {
        intitializeDb<MessageIPFS>('Insert', 'CID_store', sendResponse.cid, sendResponse, 'cid');
        sendResponse.messageContent = message;
        const updatedCurrentChat = currentChat;
        updatedCurrentChat.msg = sendResponse;
        setChat(updatedCurrentChat);
        setNewMessage('');
        setMessages([...messages, sendResponse]);

        setTimeout(() => {
          setMessageBeingSent(false);
        }, 1)
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

      setMessageBeingSent(false);
    }
  };

  useEffect(() => {
    if (messageBeingSent == false) {
      setTimeout(() => {
        scrollToBottom(null);
      }, 10);
    }
  }, [messageBeingSent]);

  async function resolveThreadhash(): Promise<void> {
    setLoading(true);
    let getIntent;
    getIntent = await intitializeDb<string>('Read', 'Intent', walletToCAIP10({ account: account! }), '', 'did');
    // If the user is not registered in the protocol yet, his did will be his wallet address
    const didOrWallet: string = connectedUser.wallets.split(':')[1];
    let intents = await PushAPI.chat.requests({ account: didOrWallet!, env: appConfig.appEnv, toDecrypt: false });
    await intitializeDb<Feeds[]>('Insert', 'Intent', walletToCAIP10({ account: account! }), intents, 'did');
    intents = await w2wHelper.decryptFeeds({ feeds: intents, connectedUser });
    setReceivedIntents(intents);
    setLoading(false);
  }

  async function ApproveIntent(status: string): Promise<void> {
    setMessageBeingSent(true);
    let updatedIntent: any;
    try {
      let createdUser;
      if (!connectedUser.publicKey) {
        createdUser = await createUserIfNecessary();
      }
      const signer = await library.getSigner();
      updatedIntent = await PushAPI.chat.approve({
        status: 'Approved',
        signer: signer!,
        senderAddress: isGroup ? currentChat.groupInformation?.chatId : currentChat.intentSentBy,
        pgpPrivateKey: connectedUser?.privateKey || createdUser?.privateKey,
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
        !currentChat.intent?.toLowerCase().includes(currentChat.wallets.split(':')[1]?.toLowerCase())
      ) {
        let createdUser;
        if (!connectedUser.publicKey) {
          createdUser = await createUserIfNecessary();
        }
        const signer = await library.getSigner();
        const sendResponse = await PushAPI.chat.send({
          messageContent: message,
          messageType: messageType,
          receiverAddress: currentChat?.wallets.split(':')[1],
          signer: signer!,
          pgpPrivateKey: connectedUser.privateKey || createdUser?.privateKey,
          env: appConfig.appEnv,
        });

        if (typeof sendResponse !== 'string') {
           // We store the message in state decrypted so we display to the user the intent message
           sendResponse.messageContent = message;
           setNewMessage('');
           let result = await fetchInboxApi();
           result.msg.messageContent = message;
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
          setMessageBeingSent(false);
        }
      }

      setHasUserBeenSearched(false);
      setActiveTab(0);
    } catch (error) {
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
    } finally {
      setMessageBeingSent(false);
    }
  };

  const handleCloseSuccessSnackbar = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccessSnackBar(false);
  };

  const startVideoCallHandler = async () => {
    const toUser = await PushAPI.user.get({
      account: caip10ToWallet(currentChat.wallets.toString()),
      env: appConfig.appEnv
    });

    setVideoCallInfo({
      address: caip10ToWallet(currentChat.wallets.toString()),
      fromPublicKeyArmored: connectedUser.publicKey,
      fromProfileUsername: connectedUser.name,
      fromProfilePic: connectedUser.profilePicture,
      toPublicKeyArmored: currentChat.publicKey,
      toProfileUsername: null,
      toProfilePic: currentChat.profilePicture,
      privateKeyArmored: connectedUser.privateKey,
      establishConnection: 1,
      chatId: currentChat.chatId
    });
  };


  const InfoMessages = [
    { id: 1, content: 'You can send up to 10 group requests in alpha' },
    // { id: 2, content: 'You can send a chat request to anyone including non-whitelisted users' },
    // { id: 3, content: 'You can chat with non-whitelisted users but they cannot send a chat request to anyone.' },
    {
      id: 4,
      content: 'You will have access to 1000 latest messages. Encryption is enabled after a chat request is accepted',
    },
    { id: 5, content: 'Messages will only be encrypted if the receiver has encryption keys' },
    // {
    //   id: 6,
    //   content:
    //     'Due to certain limitations Push Chat does not support Ledger Wallet yet. We are working on adding support.',
    // },
    { id: 7, content: 'Access to more chat requests and messages will be added in the near future' },
  ];

  return (
    <Container>
      {!viewChatBox ? (
        <WelcomeItem gap="25px">
          {activeTab == 4 && (
            <LoaderSpinner
              type={LOADER_TYPE.STANDALONE_MINIMAL}
              spinnerSize={40}
            />
          )}

          {activeTab != 4 && (
            <>
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
            </>
          )}
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
           {!isGroup &&  <Tooltip
              tooltipContent="Video call"
              placementProps={{
                bottom: '1.4rem',
                transform: 'translateX(-92%)',
                borderRadius: '12px 12px 2px 12px',
                width: '75px',
                padding: "0.3rem 0.8rem 0.25rem 0.8rem"
              }}
              wrapperProps={{ width: 'fit-content', minWidth: 'fit-content' }}
            >
              <VideoCallButton onClick={startVideoCallHandler}>
                <ImageV2 cursor="pointer" src={videoCallIcon} />
              </VideoCallButton>
            </Tooltip>}

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

          <MessageContainer
            ref={listInnerRef}
            onScroll={onScroll}
          >
            {/* style={{overflow: "scroll",backgroundColor:'red'}} */}
            {/* <CustomScrollContent initialScrollBehavior="smooth"> */}
            {Loading ? (
              <SpinnerWrapper>
                <LoaderSpinner
                  type={LOADER_TYPE.SEAMLESS}
                  spinnerSize={40}
                />
              </SpinnerWrapper>
            ) : (
              <>
                {chatsLoading && (
                  <SpinnerWrapper height="35px">
                    <LoaderSpinner
                      type={LOADER_TYPE.SEAMLESS}
                      spinnerSize={40}
                    />
                  </SpinnerWrapper>
                )}
                <div ref={topRef}>
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
                              (!currentChat?.groupInformation?.isPublic && checkIfChatExist({ chats:receivedIntents, currentChat, connectedUser, isGroup }))
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
                </div>
                <HeaderMessage
                  messages={messages}
                  isGroup={isGroup}
                />
                {checkIfChatExist({ chats:receivedIntents, currentChat, connectedUser, isGroup }) && (
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
            {/* </CustomScrollContent> */}
            <div ref={bottomRef}></div>
          </MessageContainer>

          {checkIfChatExist({ chats:receivedIntents, currentChat, connectedUser,isGroup }) ? null : (
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
                isJoinGroup = {(!checkIfChatExist({ chats:inbox, currentChat, connectedUser,isGroup }) && isGroup)}
                approveIntent= {ApproveIntent}
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
  height: ${(props) => props.height || '90px'};
`;

const MessageContainer = styled(ItemVV2)`
  align-items: unset;
  display: block;
  justify-content: flex-start;
  position: absolute;
  top: 65px;
  bottom: 66px;
  left: 0;
  right: 0;
  margin: 0;
  width: 100%;
  height: calc(100% - 140px);
  overflow-x: none;
  overflow-y: scroll;
  // background: red;

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.scrollBg};
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    background-color: ${(props) => props.theme.scrollBg};
    width: 5px;
  }

  @media (max-width: 768px) {
    padding: 0px 0px 0px 0px;

    &::-webkit-scrollbar-track {
      background-color: none;
      border-radius: 9px;
    }

    &::-webkit-scrollbar {
      background-color: none;
      width: 4px;
    }
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0.44, #cf1c84),
      color-stop(0.72, #cf1c84),
      color-stop(0.86, #cf1c84)
    );
  }
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
