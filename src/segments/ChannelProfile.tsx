// React + Web3 Essentials

// External Packages
import { NotificationItem } from '@pushprotocol/uiweb';
import { useNavigate } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import Back from 'assets/chat/arrowleft.svg?react';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import DisplayNotice from 'primaries/DisplayNotice';

// Internal Configs
import ViewChannelItem from 'components/ViewChannelItem';
import { ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import APP_PATHS from 'config/AppPaths';
import { device } from 'config/Globals';
import { useGetChannelDetails, useGetChannelNotifications } from 'queries';

// Constants
const NOTIFICATIONS_PER_PAGE = 20;

// Create Header
const ChannelProfile = ({ channelID, loadTeaser, playTeaser, minimal, profileType }) => {
  // get theme
  const themes = useTheme();

  // isChannelLoading
  const { data: notifications, isLoading: isNotificationsLoading } = useGetChannelNotifications(
    channelID,
    1,
    NOTIFICATIONS_PER_PAGE
  );

  const { data: channelDetails, isLoading: isChannelLoading } = useGetChannelDetails(channelID);
  // Setup navigation
  const navigate = useNavigate();

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
        {channelDetails && !isChannelLoading && (
          <ViewChannelItem
            channelObjectProp={channelDetails}
            loadTeaser={loadTeaser}
            playTeaser={playTeaser}
            minimal={minimal}
            profileType={profileType}
          />
        )}

        {/* Show Latest Notifications of the Channel */}
        {!isChannelLoading && (
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
          {isNotificationsLoading && (
            <LoaderSpinner
              type={LOADER_TYPE.SEAMLESS}
              spinnerSize={40}
            />
          )}

          {!notifications?.length && !isNotificationsLoading && (
            <div style={{ textAlign: 'center' }}>
              <DisplayNotice title="You currently have no notifications, try subscribing to some channels." />
            </div>
          )}

          {notifications?.map((item, index) => {
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
      {/* {!isNotificationsLoading && (
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
  gap: 16px;
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
