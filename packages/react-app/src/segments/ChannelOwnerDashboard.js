import React from "react";
import styled from "styled-components";
import { Section, Content } from "components/SharedStyling";

import SendNotifications from "components/SendNotifications";
import ChannelSettings from "components/ChannelSettings";
import ChannelDetails from "components/ChannelDetails";
import CreateChannel from "components/CreateChannel";
import { useSelector } from "react-redux";

// CREATE CHANNEL OWNER DASHBOARD
function ChannelOwnerDashboard() {
  const { channelDetails, delegatees } = useSelector((state) => state.admin);
  return (
    <>
      <Section>
        <ModifiedContent>
          {/* display the create channel page if there are no details */}
          {!channelDetails ? <CreateChannel /> : ""}
          {/* display the create channel page if there are no details */}
          {/* display the channel settings */}
          {channelDetails ? <ChannelSettings /> : ""}
          {/* display the channel settings */}
          {/* display the details about the profile of the channel */}
          {channelDetails ? <ChannelDetails /> : ""}
          {/* display the details about the profile of the channel */}
          {/* display the notifications settings */}
          {channelDetails || delegatees?.length ? <SendNotifications /> : ""}
          {/* display the notifications settings */}
        </ModifiedContent>
      </Section>
    </>
  );
}

// css styles
const ModifiedContent = styled(Content)`
  padding: 0;
  position: relative;
`;

// Export Default
export default ChannelOwnerDashboard;
