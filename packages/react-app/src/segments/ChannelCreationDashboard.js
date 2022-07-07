import React from "react";
import {Section, Content} from 'primaries/SharedStyling';

import CreateChannel from 'components/CreateChannel';

// CREATE CHANNEL OWNER DASHBOARD
function ChannelCreationDashboard() {

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
