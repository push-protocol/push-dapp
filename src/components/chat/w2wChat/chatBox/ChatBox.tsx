// React + Web3 Essentials
import { ethers } from 'ethers';
import { useContext, useEffect, useRef, useState, forwardRef, SyntheticEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// External Packages
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { VideoCallStatus } from '@pushprotocol/restapi';
import { ChatProfile, ChatViewList, MessageInput } from '@pushprotocol/uiweb';
import { produce } from 'immer';
import { CID } from 'ipfs-http-client';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { useClickAway } from 'react-use';
import styled, { useTheme } from 'styled-components';

// Internal Components
import { Content } from 'components/SharedStyling';
import Intro from 'components/chat/intro/Intro';
import Recommended from 'components/chat/recommended/Recommended';
import { ButtonV2, ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import Tooltip from 'components/reusables/tooltip/Tooltip';
import { AppContext } from 'contexts/AppContext';
import { checkIfChatExist } from 'helpers/w2w/user';
import { useAccount, useDeviceWidthCheck } from 'hooks';
import { useResolveWeb3Name } from 'hooks/useResolveWeb3Name';
import { Context } from 'modules/chat/ChatModule';
import { AppContext as ContextType } from 'types/chat';
import { AppContextType } from 'types/context';
import { caip10ToWallet } from '../../../../helpers/w2w';
import { checkIfGroup, getGroupImage } from '../../../../helpers/w2w/groupChat';

// Assets
import videoCallIcon from 'assets/icons/videoCallIcon.svg?react';

// Internal Configs
import GLOBALS, { device } from 'config/Globals';
import { appConfig } from 'config/index.js';
import { VideoCallContext } from 'contexts/VideoCallContext';

// Constants
const INFURA_URL = appConfig.infuraApiUrl;

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return (
    <MuiAlert
      elevation={6}
      ref={ref}
      variant="filled"
      {...props}
    />
  );
});

const ChatBox = ({ triggerChatParticipant }): JSX.Element => {
  const { currentChat, viewChatBox, receivedIntents, activeTab, setViewChatBox, selectedChatId }: ContextType =
    useContext<ContextType>(Context);
  const { web3NameList }: AppContextType = useContext(AppContext);
  const { setSelectedChatId } = useContext(Context);

  const { account } = useAccount();
  const [Loading, setLoading] = useState<boolean>(true);
  const [imageSource, setImageSource] = useState<string>('');
  const [openReprovalSnackbar, setOpenSuccessSnackBar] = useState<boolean>(false);
  const [SnackbarText] = useState<string>('');
  const [isGroup, setIsGroup] = useState<boolean>(false);
  const [showGroupInfo, setShowGroupInfo] = useState<boolean>(false);
  const groupInfoRef = useRef<HTMLInputElement>(null);
  const { connectedUser } = useContext(AppContext);
  const { videoObject } = useContext(VideoCallContext);
  const theme = useTheme();
  const isMobile = useDeviceWidthCheck(600);

  useClickAway(groupInfoRef, () => setShowGroupInfo(false));

  //resolve web3 names
  // useResolveWeb3Name(!isGroup ? currentChat?.wallets?.split(',')[0].toString() : null);

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
  const handleCloseSuccessSnackbar = (event?: SyntheticEvent | Event, reason?: string): void => {
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
        draft.incoming[0].status = VideoCallStatus.INITIALIZED;
        draft.meta.chatId = currentChat.chatId;
      });
    });
  };

  return (
    <Container>
      {!viewChatBox || !getChatId() ? (
        <IntroContainer gap="25px">
          {activeTab == 4 && (
            <LoaderSpinner
              type={LOADER_TYPE.STANDALONE_MINIMAL}
              spinnerSize={40}
            />
          )}

          {activeTab != 4 && (
            <>
              <Intro />

              <Recommended
                bg={theme.default.bg}
                onChatSelected={async (chatId, chatParticipant) =>
                  setSelectedChatId(await triggerChatParticipant(chatParticipant, chatId))
                }
              />
            </>
          )}
        </IntroContainer>
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

const MessageInputWrapper = styled.div`
  width: 98%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 8px;
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

const IntroContainer = styled(ItemVV2)`
  max-width: 420px;
  min-width: 300px;
  display: flex;
  justify-content: center;
  margin: auto auto;

  @media ${device.laptop} {
    max-width: 90%;
    min-width: 80%;
  }

  @media ${device.tablet} {
    width: auto;
  }
`;

const VideoCallButton = styled(ButtonV2)`
  cursor: pointer;
  width: 1.75rem;
  max-width: 1.75rem;
  min-width: 1.75rem;
  background: none;
`;

export default ChatBox;
