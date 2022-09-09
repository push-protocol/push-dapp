import React from "react";

import styled, { css } from 'styled-components';
import {Section, Content} from 'components/SharedStyling';

import CreateChannel from 'components/CreateChannel';

// CREATE CHANNEL OWNER DASHBOARD
function ChannelCreationDashboard() {
  React.useEffect(() => {

  });

  // RRENDER
  return (
    <>
      <Section>
        <Content padding="0px">
          <CreateChannel />
        </Content>
      </Section>
    </>
  );
}

// css styles


// Export Default
export default ChannelCreationDashboard;
