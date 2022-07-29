import React from "react";
import styled from "styled-components";
import { Section, Content, Button, Item, H2, Span, H3 } from "../primaries/SharedStyling";

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
  const theme = useTheme();
  const { account, chainId } = useWeb3React();
  const [modalOpen, setModalOpen] = React.useState(false);
  const { channelDetails } = useSelector((state) => state.admin);

  const [aliasEthAccount, setAliasEthAccount] = React.useState(null); 
  const [aliasVerified, setAliasVerified] = React.useState(null); 

  const CORE_CHAIN_ID = envConfig.coreContractChain;
  const onCoreNetwork = CORE_CHAIN_ID === chainId;

  React.useEffect(() => {
    (async function init() {
      // if we are not on the core network then check for if this account is an alias for another channel
      if (!onCoreNetwork) {
        // get the eth address of the alias address, in order to properly render information about the channel
        const aliasEth = await postReq("/channels/get_eth_address", {
          aliasAddress: account,
          op: "read",
        }).then(({ data }) => {
          const ethAccount = data;
          if (ethAccount) {
            setAliasEthAccount(ethAccount.ethAddress);
          }
          return data;
        });
        if (aliasEth) {
          // if an alias exists, check if its verified.
          await postReq("/channels/get_alias_verification_status", {
            aliasAddress: account,
            op: "read",
          }).then(({ data }) => {
            console.log(data);
            // if it returns undefined then we need to let them know to verify their channel
            if (!data) {
              setAliasVerified(null);
              return;
            }
            const { status } = data;
            setAliasVerified(status);
            return data;
          });
        }
      }
    })();
    }, [account, chainId]);

  return (
    <>
      <Section>
        <ModifiedContent>
          {/* display the create channel page if there are no details */}
          {!channelDetails && aliasEthAccount === null ? <CreateChannel /> : ""}
          
          {aliasEthAccount !== null && aliasVerified === false &&
        <>
        <ThemeProvider theme={theme}>
          <Section padding="30px">
            <Content padding="10px 0px 20px">
              <Item align="flex-start">
                <H2 textTransform="uppercase" spacing="0.1em">
                  <Span bg="#674c9f" color="#fff" weight="600" padding="0px 8px">
                    Verify
                  </Span>
                  <Span weight="200" color={theme.color}> Your Channel Alias!</Span>
                </H2>
                <H3 color={theme.color} padding="10px 0px">
                  Please verify the Channel Alias Address to use the Channel on {networkName[chainId]} Network.
                </H3>
                <Button
                  bg="#e20880"
                  color="#fff"
                  flex="1"
                  padding="20px 10px"
                  textTransform="uppercase"
                  style={{width: "100%"}}
                  onClick={() => setModalOpen(true)}
                >
                    Verify Channel Alias
                </Button>      
              </Item>
            </Content>
          </Section>
        </ThemeProvider>
        </>

      }

      {modalOpen &&
            <AliasVerificationModal
              onClose={(val) => setModalOpen(val)}
              onSuccess={() => setAliasVerified(true)}
              verificationStatus={aliasVerified}
              aliasEthAccount={aliasEthAccount}
            />
          }

          {/* display the create channel page if there are no details */}
          {/* display the channel settings */}
          {channelDetails && ((!onCoreNetwork && aliasVerified) || onCoreNetwork) ? <ChannelSettings /> : ""}
          {/* display the channel settings */}
          {/* display the details about the profile of the channel */}
          {channelDetails && ((!onCoreNetwork && aliasVerified) || onCoreNetwork) ? <ChannelDetails /> : ""}
          {/* display the details about the profile of the channel */}
          {/* display the notifications settings */}
          
          
        </ModifiedContent>
      </Section>
    </>
  );
}

// css styles
const ModifiedContent = styled(Content)`
  padding: 0px;
  position: relative;
`;

// Export Default
export default ChannelOwnerDashboard;
