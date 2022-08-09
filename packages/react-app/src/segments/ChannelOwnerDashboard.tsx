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
import { setAliasAddress, setAliasVerified } from "redux/slices/adminSlice";
import { setProcessingState } from "redux/slices/channelCreationSlice";
import AliasProcessing from "components/AliasProcessing"
import ChannelsDataStore from "singletons/ChannelsDataStore";

// interval after which alias details api will be called, in seconds
const ALIAS_API_CALL_INTERVAL = 10;

// CREATE CHANNEL OWNER DASHBOARD
const ChannelOwnerDashboard = () => {
  const theme = useTheme();
  const { account, chainId } = useWeb3React();
  const [modalOpen, setModalOpen] = React.useState(false);
  const { channelDetails, delegatees, aliasDetails: {aliasAddr, isAliasVerified} } = useSelector((state: any) => state.admin);
  const { processingState } = useSelector((state: any) => state.channelCreation);

  const dispatch = useDispatch();

  const [aliasEthAccount, setAliasEthAccount] = React.useState(null);
  const [aliasAddressFromContract, setAliasAddressFromContract] = React.useState(null);

  const CORE_CHAIN_ID = envConfig.coreContractChain;
  const onCoreNetwork = CORE_CHAIN_ID === chainId;

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
    let { aliasAddress, isAliasVerified } = await ChannelsDataStore.instance.getChannelDetailsFromAddress(address);
    if (aliasAddress == "NULL") aliasAddress = null;

    return { aliasAddress: null, aliasVerified: isAliasVerified };
  }

  const fetchEthAccount = async (address: string) => {
    let ethAccount = await ChannelsDataStore.instance.getEthAddressFromAlias(address);
    if (ethAccount == "NULL") ethAccount = null;

    return ethAccount;
  }

  React.useEffect(() => {
    if (!onCoreNetwork || !aliasAddressFromContract) return;

    const intervalID = setInterval(async () => {
      const { aliasAddress, aliasVerified } = await fetchChannelDetails(account);
      if (aliasAddress) {
        dispatch(setAliasAddress(aliasAddress));
        if (aliasVerified) {
          dispatch(setProcessingState(0));
          dispatch(setAliasVerified(true));
        } else {
          dispatch(setProcessingState(2));
          dispatch(setAliasVerified(false));
        }
      } else {
        if (processingState != 0)
          dispatch(setProcessingState(1));
      }
    }, ALIAS_API_CALL_INTERVAL * 1000);

    if (aliasAddr != null) {
      clearInterval(intervalID);
    }
  });

  React.useEffect(() => {
    if (onCoreNetwork) return;
    if (isAliasVerified && processingState === 0) return;

    (async function process() {
      const ethAccount = await fetchEthAccount(account);
      setAliasEthAccount(ethAccount);

      if (ethAccount) {
        const { aliasVerified } = await fetchChannelDetails(ethAccount);
        if (!aliasVerified) {
          dispatch(setProcessingState(3));
          dispatch(setAliasVerified(false));
        } else {
          dispatch(setProcessingState(0));
          dispatch(setAliasVerified(true));
        }
      }
    })()
  });

  console.log(isAliasVerified,processingState,aliasEthAccount)


  return (
    <Fragment>
      <Section>
        <ModifiedContent>
          {/* display the create channel page if there are no details */}
          {!channelDetails && aliasEthAccount === null ? <CreateChannel /> : ""}
          
          {/* {aliasEthAccount !== null && isAliasVerified === false && */}
          {processingState !== 0 && (
            <ThemeProvider theme={theme}>
              <AliasProcessing aliasVerified={isAliasVerified} aliasEthAccount={aliasEthAccount} setAliasVerified={setAliasVerified} />
            </ThemeProvider>
          )}
          {/* } */}

      {/* {modalOpen &&
            <AliasVerificationModal
              onClose={(val) => setModalOpen(val)}
              onSuccess={() => dispatch(setAliasVerified(true))}
              verificationStatus={isAliasVerified}
              aliasEthAccount={aliasEthAccount}
            />
          } */}
          {processingState === 0 && (<>
          {/* display the create channel page if there are no details */}
          {/* display the channel settings */}
          {channelDetails && ((!onCoreNetwork && isAliasVerified) || onCoreNetwork) ? <ChannelSettings /> : ""}
          {/* display the channel settings */}
          {/* display the details about the profile of the channel */}
          {channelDetails && ((!onCoreNetwork && isAliasVerified) || onCoreNetwork) ? <ChannelDetails /> : ""}
          {/* display the details about the profile of the channel */}
          {/* display the notifications settings */}
          {(channelDetails && ((!onCoreNetwork && isAliasVerified) || onCoreNetwork)) || delegatees?.length ? <SendNotifications /> : ""}
          {/* display the notifications settings */}
          </>)}
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
