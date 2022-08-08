import React, {Fragment} from "react";
import styled from "styled-components";
import { Section, Content, Button, Item, H2, Span, H3 } from "../primaries/SharedStyling";

import SendNotifications from "components/SendNotifications";
import ChannelSettings from "components/ChannelSettings";
import ChannelDetails from "components/ChannelDetails";
import CreateChannel from "components/CreateChannel";
import AliasVerificationModal from "components/AliasVerificationModal";
import { useDispatch, useSelector } from "react-redux";
import { useWeb3React } from "@web3-react/core";
import { envConfig } from "@project/contracts";
import { postReq } from "api";
import { ThemeProvider, useTheme } from "styled-components";
import { aliasChainIdsMapping, networkName } from "helpers/UtilityHelper";
import { getCAIP } from "helpers/CaipHelper";
import EPNSCoreHelper from "helpers/EPNSCoreHelper";
import { setAliasAddress } from "redux/slices/adminSlice";
import { setProcessingState } from "redux/slices/channelCreationSlice";
import AliasProcessing from "components/AliasProcessing"

// interval after which alias details api will be called, in seconds
const ALIAS_API_CALL_INTERVAL = 10;

// CREATE CHANNEL OWNER DASHBOARD
const ChannelOwnerDashboard = () => {
  const theme = useTheme();
  const { account, chainId } = useWeb3React();
  const [modalOpen, setModalOpen] = React.useState(false);
  const { channelDetails, delegatees, aliasDetails } = useSelector((state: any) => state.admin);
  const { processingState } = useSelector((state: any) => state.channelCreation);

  const dispatch = useDispatch();

  const [aliasEthAccount, setAliasEthAccount] = React.useState(null);
  const [aliasVerified, setAliasVerified] = React.useState(null); // null means error, false means unverified and true means verified
  const [aliasAddressFromContract, setAliasAddressFromContract] = React.useState(null);

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

  /*
    onCoreNetwork :- 
      1> Alias from Contract hai -> 
        1> alias from api nhi hai -> Processing 1st
        2> alias from api hai -> 
          1> alias verified hai -> channel dashboard
          2> alias verified nhi hai -> Processing 2nd
      2> Alias from Contract nhi hai -> Create Channel

    !onCoreNetwork :-
      1> Eth account hai ->
        1> Alias hai ->
          1> Alias verified hai -> dashboard
          2> Alias verified nhi hai -> Processing 3rd
      2> Eth account nhi hai -> Create Channel
  */
  
  React.useEffect(() => {
    if (!onCoreNetwork || !channelDetails) return;

    if (channelDetails['aliasDetails']) {
      if (!onCoreNetwork) return;
      const aliasDetails = channelDetails['aliasDetails'];
      const aliasChainId = aliasChainIdsMapping[CORE_CHAIN_ID];
      const caip = getCAIP(aliasChainId);
      if (aliasDetails[`${caip}:${aliasChainId}`]) {
        setAliasAddressFromContract(aliasDetails[`${caip}:${aliasChainId}`]);
      }
    }
  }, []);

  const fetchChannelDetails = async (address: string) => {
    let { aliasAddress, isAliasVerified } = await EPNSCoreHelper.getChannelDetailsFromAddress(address);
    if (aliasAddress == "NULL") aliasAddress = null;

    return { aliasAddress: null, isAliasVerified: isAliasVerified };
  }

  React.useEffect(() => {
    if (!onCoreNetwork || !aliasAddressFromContract) return;

    const intervalID = setInterval(async () => {
      const { aliasAddress, isAliasVerified } = await fetchChannelDetails(account);
      if (aliasAddress) {
        dispatch(setAliasAddress(aliasAddress));
        if (isAliasVerified) {
          dispatch(setProcessingState(0));
        } else {
          dispatch(setProcessingState(2));
        }
      } else {
        if (processingState != 0)
          dispatch(setProcessingState(1));
      }
    }, ALIAS_API_CALL_INTERVAL * 1000);

    if (aliasDetails['aliasAddress'] != null) {
      clearInterval(intervalID);
    }
  })

  // console.log(aliasDetails,processingState)

  return (
    <Fragment>
      <Section>
        <ModifiedContent>
          {/* display the create channel page if there are no details */}
          {!channelDetails && aliasEthAccount === null ? <CreateChannel /> : ""}
          
          {aliasEthAccount !== null && aliasVerified === false &&
        <>
        <ThemeProvider theme={theme}>
          {/* <Section padding="30px">
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
          </Section> */}
          <AliasProcessing aliasVerified={aliasVerified} aliasEthAccount={aliasEthAccount} setAliasVerified={setAliasVerified} />
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
    </Fragment>
  );
}

// css styles
const ModifiedContent = styled(Content)`
  padding: 0px;
  position: relative;
`;

// Export Default
export default ChannelOwnerDashboard;
