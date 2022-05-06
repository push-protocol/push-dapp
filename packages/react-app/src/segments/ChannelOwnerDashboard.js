import React from "react";
import styled from "styled-components";
import { Section, Content, Button, Item, H2, Span, H3 } from "components/SharedStyling";

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


// CREATE CHANNEL OWNER DASHBOARD
const ChannelOwnerDashboard = () => {
  const { account, chainId } = useWeb3React();
  const [modalOpen, setModalOpen] = React.useState(false);
  const { channelDetails, delegatees } = useSelector((state) => state.admin);

  const themes = useTheme();

  const [aliasEthAccount, setAliasEthAccount] = React.useState(null);
  const [aliasVerified, setAliasVerified] = React.useState(null); // null means error, false means unverified and true means verified

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
          console.log({ data });
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
              <ThemeProvider theme={themes}>
                <Section>
                  <Content padding="10px 20px 20px">
                    <Item align="flex-start">
                      <H2 textTransform="uppercase" spacing="0.1em">
                        <Span bg="#674c9f" color="#fff" weight="600" padding="0px 8px">
                          Verify
                        </Span>
                        <Span weight="200" color={themes.color}> Your Channel Alias!</Span>
                      </H2>
                      <H3 color={themes.color} padding="10px 0px">
                        You have to verify your main channel's alias to use the channel here.
                      </H3>
                      <Button
                        bg="#e20880"
                        color="#fff"
                        flex="1"
                        radius="10px"
                        padding="20px 10px"
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
