// React + Web3 Essentials
import React, { useEffect, useState } from 'react';

// External Packages
import { NotificationItem } from '@pushprotocol/uiweb';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useClickAway } from 'react-use';
import { addPaginatedNotifications, setFinishedFetching } from 'redux/slices/notificationSlice';
import styled, { ThemeProvider, useTheme } from 'styled-components';

// Internal Compoonents
import { ReactComponent as Back } from 'assets/chat/arrowleft.svg';
import ChannelLoading from 'components/ChannelLoading';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { useAccount } from 'hooks';
import DisplayNotice from 'primaries/DisplayNotice';

// Internal Configs
import { latest } from '@pushprotocol/restapi/src/lib/chat';
import ViewChannelItem from 'components/ViewChannelItem';
import ChannelProfileComponent from 'components/channel/ChannelProfileComponent';
import { ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { appConfig } from 'config';
import APP_PATHS from 'config/AppPaths';
import { device } from 'config/Globals';
import ChannelsDataStore from 'singletons/ChannelsDataStore';

// Constants
const NOTIFICATIONS_PER_PAGE = 20;

// Create Header
const ChannelProfile = ({ channelID, loadTeaser, playTeaser, minimal, profileType }) => {
  const dispatch = useDispatch();
  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });
  const modalRef = React.useRef(null);

  // get theme
  const themes = useTheme();

  // loading
  const [loading, setLoading] = useState(true);
  const [loadingNotifs, setLoadingNotifs] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [channelDetails, setChannelDetails] = useState(null);

  // get signer
  const { account, provider } = useAccount();

  // Setup navigation
  const navigate = useNavigate();

  useEffect(() => {
    setChannelDetails(null);
    if (userPushSDKInstance) {
      setLoading(true);
      (async () => {
        try {
          const channelBasedOnChannelID = await userPushSDKInstance.channel.info(channelID);
          setChannelDetails(channelBasedOnChannelID);
          setLoading(false);
        } catch (error) {
          console.log('Error', error);
          setLoading(false);
        }
      })();
    }
  }, [channelID, userPushSDKInstance]);

  // load notifications
  useEffect(() => {
    if (userPushSDKInstance) {
      setLoading(true);
      userPushSDKInstance.channel
        .notifications(channelID, {
          page: 1,
          limit: NOTIFICATIONS_PER_PAGE,
        })
        .then((response) => {
          console.log(response);
          setNotifications(response.notifications);
          setLoadingNotifs(false);

          // ENABLE PAGINATION HERE
          dispatch(addPaginatedNotifications(response.notifications));
          if (response.notifications.length === 0) {
            dispatch(setFinishedFetching());
          }
        })
        .catch((err) => {
          // ENABLE NO NOTIFICATION FOUND HERE
          console.error('Error >>>>', err);
          setLoadingNotifs(false);
        });
    }
    return () => {
      setNotifications([]);
      setLoadingNotifs(true);
    };
  }, [channelID, userPushSDKInstance]);

  // Render
  return (
    <Container>
      <BackContainer
        flex="initial"
        alignItems="flex-start"
        padding="0px"
      >
        <Back
          onClick={() => {
            navigate(APP_PATHS.Channels);
          }}
        />
      </BackContainer>

      <>
        {channelDetails && !loading && (
          <ViewChannelItem
            channelObjectProp={channelDetails}
            loadTeaser={loadTeaser}
            playTeaser={playTeaser}
            minimal={minimal}
            profileType={profileType}
          />
        )}

        {/* Show Latest Notifications of the Channel */}
        {!loading && (
          <TextContainer>
            <SpanV2
              fontSize="20px"
              fontWeight="500"
              color={themes.color}
            >
              Recent Notifications
            </SpanV2>
            <Notice color={themes.color}>
              Showing preview of the latest non-encrypted notifications sent by the channel.
            </Notice>
          </TextContainer>
        )}

        <NotificationItems>
          {loadingNotifs && (
            <LoaderSpinner
              type={LOADER_TYPE.SEAMLESS}
              spinnerSize={40}
            />
          )}

          {!notifications.length && !loadingNotifs && (
            <div style={{ textAlign: 'center' }}>
              <DisplayNotice title="You currently have no notifications, try subscribing to some channels." />
            </div>
          )}

          {notifications.map((item, index) => {
            const payload = item.message.payload;

            // render the notification item
            return (
              <NotifsOuter key={`${item.payload_id}`}>
                <NotificationItem
                  notificationTitle={payload.title}
                  notificationBody={payload.body}
                  cta={payload.cta}
                  image={payload.embed}
                  app={item.channel.name}
                  icon={item.channel.icon}
                  url={item.channel.url}
                  chainName={item.source}
                  theme={themes.scheme}
                />
              </NotifsOuter>
            );
          })}
        </NotificationItems>
      </>

      {/* Add Support chat */}
      {/* {!loadingNotifs && (
          <SupportChat
            supportAddress={channelID} //support address, this belongs to you
            account={account} //signer
            env="prod" // can be "prod" or "staging"
          />
        )} */}
    </Container>
  );
};

// css styles
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  font-weight: 200;
  margin: 20px 0px 0px 20px;

  @media ${device.tablet} {
    overflow-y: auto;
    margin: 20px 10px 0px 10px;
  }
`;

const BackContainer = styled(ItemVV2)`
  @media ${device.tablet} {
    position: absolute;
    z-index: 1;
    padding: 10px;
    backdrop-filter: blur(4px);
    top: 0;
    left: 0;
    right: 0;
  }
`;

const NotifsOuter = styled.div``;

const NotificationItems = styled(ItemVV2)`
  display: flex;
  align-self: stretch;
  align-items: stretch;
  justify-content: stretch;
  flex-wrap: nowrap;

  flex: 1;
  padding: 0px 20px 10px 0px;
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.scrollBg};
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    background-color: ${(props) => props.theme.scrollBg};
    width: 6px;
  }

  @media ${device.tablet} {
    padding: 0px 20px;
    overflow-y: visible;

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

const TextContainer = styled(ItemVV2)`
  flex: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  align-items: baseline;
  margin: 7px 20px 24px 5px;
`;

const Notice = styled(SpanV2)`
  font-size: 0.8em;
`;

// Export Default
export default ChannelProfile;
