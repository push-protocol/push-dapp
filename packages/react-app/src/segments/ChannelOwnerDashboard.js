import React from "react";
import styled from "styled-components";
import { Section, Content, Button, Item, H2, Span, H3 } from "../primaries/SharedStyling";

import SendNotifications from "components/SendNotifications";
import ChannelSettings from "components/ChannelSettings";
import ChannelDetails from "components/ChannelDetails";
import CreateChannel from "components/CreateChannel";
import AliasVerificationModal from "components/AliasVerificationModal";
import { useSelector } from "react-redux";
import { useWeb3React } from "@web3-react/core";
import { envConfig } from "@project/contracts";
import { postReq } from "api";
import { ThemeProvider, useTheme } from "styled-components";

const networkName = {
  80001: "Polygon Mumbai",
  137: "Polygon Mainnet"
}

// CREATE CHANNEL OWNER DASHBOARD
const ChannelOwnerDashboard = () => {
  const { account, chainId } = useWeb3React();
  const { channelDetails, delegatees } = useSelector((state) => state.admin);

  const themes = useTheme();

  const [aliasEthAccount, setAliasEthAccount] = React.useState(null);
  const [aliasVerified, setAliasVerified] = React.useState(null); // null means error, false means unverified and true means verified

  const CORE_CHAIN_ID = envConfig.coreContractChain;
  const onCoreNetwork = CORE_CHAIN_ID === chainId;


  return (
    <>
      <Section>
        <ModifiedContent>
          {/* display the create channel page if there are no details */}
          {!channelDetails && aliasEthAccount === null ? <CreateChannel /> : ""}
          
          {/* display the create channel page if there are no details */}
          {/* display the channel settings */}
          {channelDetails && ((!onCoreNetwork && aliasVerified) || onCoreNetwork) ? <ChannelSettings /> : ""}
          {/* display the channel settings */}
          {/* display the details about the profile of the channel */}
          {channelDetails && ((!onCoreNetwork && aliasVerified) || onCoreNetwork) ? <ChannelDetails /> : ""}
          {/* display the details about the profile of the channel */}
          {/* display the notifications settings */}
          {(channelDetails && ((!onCoreNetwork && aliasVerified) || onCoreNetwork)) || delegatees?.length ? <SendNotifications /> : ""}
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
