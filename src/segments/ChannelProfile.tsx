// React + Web3 Essentials
import React, { useEffect, useState } from "react";

// External Packages
import { NotificationItem } from "@pushprotocol/uiweb";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useClickAway } from "react-use";
import styled, { ThemeProvider, useTheme } from "styled-components";

// Internal Compoonents
import { ReactComponent as Back } from 'assets/chat/arrowleft.svg';
import ChannelLoading from "components/ChannelLoading";
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';

// Internal Configs
import { latest } from "@pushprotocol/restapi/src/lib/chat";
import ViewChannelItem from "components/ViewChannelItem";
import ChannelProfileComponent from "components/channel/ChannelProfileComponent";
import { ItemVV2, SpanV2 } from "components/reusables/SharedStylingV2";
import { appConfig } from "config";
import APP_PATHS from "config/AppPaths";
import { device } from "config/Globals";
import ChannelsDataStore from "singletons/ChannelsDataStore";



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
  // Setup navigation
  const navigate = useNavigate();

  useEffect(() => {
    setChannelDetails(null)
    if (userPushSDKInstance) {
      setLoading(true);
      (async () => {
        try {
          const channelBasedOnChannelID = await userPushSDKInstance.channel.info(channelID);
          setChannelDetails(channelBasedOnChannelID);
          setLoading(false);
        } catch (error) {
          console.log("Error", error);
        }
      })()
    }

  }, [channelID, userPushSDKInstance])

  // load notifications
  useEffect(() => {
    if (userPushSDKInstance) {
      setLoading(true);
      userPushSDKInstance.channel.notifications(channelID, {
        page: 1,
        limit: NOTIFICATIONS_PER_PAGE,
      }).then((response) => {
        setNotifications(response.feeds);
        setLoadingNotifs(false);

        // ENABLE PAGINATION HERE
      }).catch((err) => {
        // ENABLE NO NOTIFICATION FOUND HERE
      });
    };
    return () => {
      setNotifications([]);
      setLoadingNotifs(true);
    }
  }, [channelID]);

  // Render
  return (
    <ThemeProvider theme={themes}>
      <Container>
        <ItemVV2
          flex="initial"
          alignSelf="flex-start"
          padding="0px"
        >
          <SpanV2
            alignSelf="flex-start"
          >
            <Back
              onClick={() => {
                navigate(APP_PATHS.Channels);
              }}
            />
          </SpanV2>
        </ItemVV2>

        {/* New Channel Profile Component */}
        {channelDetails && !loading &&
          <ViewChannelItem
            channelObjectProp={channelDetails}
            loadTeaser={loadTeaser}
            playTeaser={playTeaser}
            minimal={minimal}
            profileType={profileType}
          />
        }

        {/* Show Latest Notifications of the Channel */}
        <TextContainer>
          <SpanV2
            fontSize="20px"
            fontWeight="500"
          >
            Recent Notifications
          </SpanV2>
          <Notice>
            Showing preview of the latest non-encrypted notifications sent by the channel.
          </Notice>
        </TextContainer>

        
        <ScrollItem>
          {loadingNotifs &&
            <LoaderSpinner
              type={LOADER_TYPE.SEAMLESS}
              spinnerSize={40}
            />
          }

          {notifications.map((item, index) => {
            const payload = item.payload;

            // render the notification item
            return (
              <NotifsOuter key={`${item.payload_id}`}>
                <NotificationItem
                  notificationTitle={payload.notification.title}
                  notificationBody={payload.notification.body}
                  cta={payload.data.acta}
                  app={payload.data.app}
                  icon={payload.data.icon}
                  image={payload.data.aimg}
                  theme={themes.scheme}
                  chainName={item.source}
                  url={payload.data.url}
                />
              </NotifsOuter>
            );
          })}
        </ScrollItem>
      </Container>
    </ThemeProvider>
  );
}

// css styles
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-weight: 200;
  margin: 20px 0px 0px 20px;

  @media (max-width: 768px) {
    margin: 20px 10px 0px 10px;
  }
`;

const NotifsOuter = styled.div`

`;

const ScrollItem = styled(ItemVV2)`
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

  @media (max-width: 768px) {
    padding: 0px 20px;

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
      color-stop(0.44,  #CF1C84),
      color-stop(0.72, #CF1C84),
      color-stop(0.86, #CF1C84)
    );
  }
`;

const TextContainer = styled(ItemVV2)`
  flex:0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.10);
  padding: 10px;
  align-items:baseline;
  margin:7px 20px 24px 5px;
`

const Notice = styled(SpanV2)`
  font-size: 0.8em;
`

// Export Default
export default ChannelProfile;