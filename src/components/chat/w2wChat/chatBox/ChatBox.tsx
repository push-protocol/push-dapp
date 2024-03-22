// React + Web3 Essentials
import { ethers } from 'ethers';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// External Packages
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import * as PushAPI from '@pushprotocol/restapi';
import { ChatProfile, ChatViewList, MessageInput, UserProfile } from '@pushprotocol/uiweb';
import 'font-awesome/css/font-awesome.min.css';
import { produce } from 'immer';
import { CID } from 'ipfs-http-client';
import { BsDashLg } from 'react-icons/bs';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { useSelector } from 'react-redux';
import ScrollToBottom from 'react-scroll-to-bottom';
import { useClickAway } from 'react-use';
import styled, { useTheme } from 'styled-components';

// Internal Components
import { ReactComponent as Info } from 'assets/chat/group-chat/info.svg';
import { ReactComponent as InfoDark } from 'assets/chat/group-chat/infodark.svg';
import { ReactComponent as More } from 'assets/chat/group-chat/more.svg';
import { ReactComponent as MoreDark } from 'assets/chat/group-chat/moredark.svg';
import videoCallIcon from 'assets/icons/videoCallIcon.svg';
import { Content } from 'components/SharedStyling';
import Recommended from 'components/chat/recommended/Recommended';
import { ButtonV2, ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import Tooltip from 'components/reusables/tooltip/Tooltip';
import { checkIfChatExist } from 'helpers/w2w/user';
import { useAccount, useDeviceWidthCheck } from 'hooks';
import { useResolveWeb3Name } from 'hooks/useResolveWeb3Name';
import useToast from 'hooks/useToast';
import { Context } from 'modules/chat/ChatModule';
import { AppContext as ContextType } from 'types/chat';
import HandwaveIcon from '../../../../assets/chat/handwave.svg';
import { caip10ToWallet } from '../../../../helpers/w2w';
import { checkIfGroup, getGroupImage } from '../../../../helpers/w2w/groupChat';

import { AppContext } from 'contexts/AppContext';
import { AppContextType } from 'types/context';

// Internal Configs
import { appConfig } from 'config';
import GLOBALS, { device } from 'config/Globals';
import { VideoCallContext } from 'contexts/VideoCallContext';

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

const ChatBox = ({ showGroupInfoModal, triggerChatParticipant }): JSX.Element => {
  const { currentChat, viewChatBox, receivedIntents, activeTab, setViewChatBox, setChat, selectedChatId }: ContextType =
    useContext<ContextType>(Context);
  const { web3NameList }: AppContextType = useContext(AppContext);
  const { setSelectedChatId } = useContext(Context);

  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });

  const { account } = useAccount();
  const [Loading, setLoading] = useState<boolean>(true);
  const [imageSource, setImageSource] = useState<string>('');
  const [openReprovalSnackbar, setOpenSuccessSnackBar] = useState<boolean>(false);
  const [SnackbarText, setSnackbarText] = useState<string>('');
  const [isGroup, setIsGroup] = useState<boolean>(false);
  const [showGroupInfo, setShowGroupInfo] = useState<boolean>(false);
  const groupInfoRef = useRef<HTMLInputElement>(null);
  const { connectedUser } = useContext(AppContext);
  const { videoObject } = useContext(VideoCallContext);
  const theme = useTheme();
  const isMobile = useDeviceWidthCheck(600);

  useClickAway(groupInfoRef, () => setShowGroupInfo(false));

  //resolve web3 names
  useResolveWeb3Name(!isGroup ? currentChat?.wallets?.split(',')[0].toString() : null);

  // get web3 name
  let ensName = '';
  if (!isGroup && currentChat?.wallets?.split(',')[0].toString()) {
    const walletLowercase = currentChat.wallets.includes(':nft')
      ? caip10ToWallet(
          currentChat?.wallets
            .replace(/eip155:\d+:/, 'eip155:')
            .split(':nft')[0]
            .toString()
            .toLowerCase()
        )
      : caip10ToWallet(currentChat?.wallets?.split(',')[0].toString())?.toLowerCase();
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

  useEffect(() => {
    setIsGroup(false);
    setShowGroupInfo(false);

    if (currentChat) {
      setIsGroup(checkIfGroup(currentChat));
      // We only delete the messages once the user clicks on another chat. The user could click multiple times on the same chat and it would delete the previous messages
      // even though the user was still on the same chat.
      const image = getGroupImage(currentChat);
      try {
        CID.parse(image); // Will throw exception if invalid CID
        setImageSource(INFURA_URL + `${image}`);
      } catch (err) {
        setImageSource(image);
      }
    }
    if (Loading) setLoading(false);
  }, [currentChat]);

  const getChatId = () => {
    let chatId = selectedChatId || currentChat?.did;

    if (chatId) {
      return chatId?.includes(':nft:') ? chatId.replace(/eip155:\d+:/, 'eip155:').split(':nft')[0] : chatId;
    }
    return chatId;
  };
  const handleCloseSuccessSnackbar = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccessSnackBar(false);
  };

  const startVideoCallHandler = async () => {
    videoObject?.setData((oldData) => {
      return produce(oldData, (draft) => {
        draft.local.address = account;
        draft.incoming[0].address = caip10ToWallet(currentChat.wallets.toString());
        draft.incoming[0].status = PushAPI.VideoCallStatus.INITIALIZED;
        draft.meta.chatId = currentChat.chatId;
      });
    });
  };

  const InfoMessages = [
    { id: 1, content: 'Say Hi to your wallet friends!' },
    { id: 2, content: 'Or join groups of your favorite projects and chat with other members.' },
    { id: 3, content: 'Or create your own gated groups based on your requirements' },
    { id: 4, content: 'And experience the future of Web3 communication!' },
  ];

  return (
    <Container>
      {!viewChatBox || !getChatId() ? (
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
                  <Recommended
                    bg="#e2078021"
                    onChatSelected={async (chatId, chatParticipant) =>
                      setSelectedChatId(await triggerChatParticipant(chatParticipant, chatId))
                    }
                  />

                  <WelcomePoints>
                    {InfoMessages.map((item) => (
                      <WelcomeContent key={item.id}>
                        <BsDashLg className="icon" />
                        <TextInfo>{item.content}</TextInfo>
                      </WelcomeContent>
                    ))}
                  </WelcomePoints>
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
          >
            {getChatId() && (
              <ChatProfile
                chatProfileLeftHelperComponent={
                  isMobile ? (
                    <SpanV2 onClick={() => setViewChatBox(false)}>
                      <MdOutlineArrowBackIos />
                    </SpanV2>
                  ) : null
                }
                chatProfileRightHelperComponent={
                  <Tooltip
                    tooltipContent="Video call"
                    placementProps={{
                      bottom: '1.4rem',
                      transform: 'translateX(-92%)',
                      borderRadius: '12px 12px 2px 12px',
                      width: '75px',
                      padding: '0.3rem 0.8rem 0.25rem 0.8rem',
                    }}
                    wrapperProps={{ width: 'fit-content', minWidth: 'fit-content' }}
                  >
                    <VideoCallButton onClick={startVideoCallHandler}>
                      <ImageV2
                        cursor="pointer"
                        src={videoCallIcon}
                      />
                    </VideoCallButton>
                  </Tooltip>
                }
                chatId={getChatId()}
              />
            )}
          </ItemHV2>

          <MessageContainer>
            {getChatId() && (
              <ChatViewList
                chatId={getChatId()}
                limit={10}
              />
            )}
          </MessageContainer>
          {checkIfChatExist({ chats: receivedIntents, currentChat, connectedUser, isGroup }) ? null : (
            <>
              <MessageInputWrapper>{getChatId() && <MessageInput chatId={getChatId()} />}</MessageInputWrapper>
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
const MessageInputWrapper = styled.div`
  width: 98%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 8px;
`;

const ChatContainer = styled.div`
  overflow-x: hidden;
  align-items: unset;
  display: block;
  justify-content: flex-start;
  position: absolute;
  top: 20px;
  bottom: 0px;
  left: 0;
  right: 0;
  margin: 0;
  width: 100%;
`;
const MessageContainer = styled(ItemVV2)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  padding: 0px 20px 160px 20px;
  top: 90px;
  height: 100%;
  @media (max-height: 750px) {
    height: 75%;
  }
  @media (max-height: 650px) {
    height: 70%;
  }
  @media (max-height: 550px) {
    height: 63%;
  }
  @media (max-height: 450px) {
    height: 55%;
  }
  @media (max-height: 400px) {
    height: 45%;
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

const WelcomePoints = styled(ItemVV2)`
  margin: 20px 0px 0px 0px;
  gap: 10px;
`;

const WelcomeItem = styled(ItemVV2)`
  width: 420px;
  min-width: 300px;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;

  .icon {
    transform: rotate(-60deg);
    color: #d53893;
    min-width: 17px;
  }
`;

const ItemBody = styled.div`
  padding: 0px 20px;

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
`;

export default ChatBox;
