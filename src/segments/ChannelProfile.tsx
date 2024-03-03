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
import { ItemVV2, SpanV2 } from "components/reusables/SharedStylingV2";
import { appConfig } from "config";
import APP_PATHS from "config/AppPaths";
import { device } from "config/Globals";

// Constants
const NOTIFICATIONS_PER_PAGE = 20;

// Create Header
const ChannelProfile = ({ channelID }) => {
  const dispatch = useDispatch();
  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });
  const modalRef = React.useRef(null);

  // get theme
  const themes = useTheme();

  // loading
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);
  
  // Setup navigation
  const navigate = useNavigate();

  // load notifications
  useEffect(() => {
    if (userPushSDKInstance) {
      setLoading(true);
      userPushSDKInstance.channel.notifications(channelID, {
          page: 1,
          limit: NOTIFICATIONS_PER_PAGE,
        }).then((response) => {
          setNotifications(response.feeds);
          setLoading(false);

          // ENABLE PAGINATION HERE
        }).catch((err) => { 
          // ENABLE NO NOTIFICATION FOUND HERE
      });
    };
    return () => {
      setNotifications([]);
      setLoading(true);
    }
  }, [channelID]);

  // Render
  return (
    <ThemeProvider theme={themes}>
      <Container>
        <ItemVV2
          flex="initial"
          alignSelf="flex-start"
          padding="0px 0px 20px 0px"
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
          <SpanV2>
            Channel Profile Here
          </SpanV2>
        </ItemVV2>

        <ScrollItem>
          {loading && 
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
    padding: 0px;

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

// Export Default
export default ChannelProfile;