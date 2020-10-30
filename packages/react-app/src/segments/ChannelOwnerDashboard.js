import React from "react";

import styled, { css } from 'styled-components';
import {Section, Content} from 'components/SharedStyling';

import SendNotifications from 'components/SendNotifications';

// CREATE CHANNEL OWNER DASHBOARD
function ChannelOwnerDashboard() {
  React.useEffect(() => {

  });

  // RRENDER
  return (
    <>
      <Section>
        <Content padding="0px">
          <SendNotifications />
        </Content>
      </Section>
    </>
  );
}

// css styles


// Export Default
export default ChannelOwnerDashboard;
