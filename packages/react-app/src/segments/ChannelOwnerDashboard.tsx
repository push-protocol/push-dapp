import React, {Fragment, useState} from "react";
import styled from "styled-components";
import { Section, Content } from "../primaries/SharedStyling";

import SendNotifications from "components/SendNotifications";
import ChannelSettings from "components/ChannelSettings";
import ChannelDetails from "components/ChannelDetails";
import CreateChannel from "components/CreateChannel";
import { useDispatch, useSelector } from "react-redux";
import { useWeb3React } from "@web3-react/core";
import { envConfig } from "@project/contracts";
import { ThemeProvider, useTheme } from "styled-components";
import { aliasChainIdsMapping } from "helpers/UtilityHelper";
import { getCAIP } from "helpers/CaipHelper";
import { setAliasAddress, setAliasEthAddress, setAliasVerified } from "redux/slices/adminSlice";
import { setProcessingState } from "redux/slices/channelCreationSlice";
import AliasProcessing from "components/AliasProcessing"
import ChannelsDataStore from "singletons/ChannelsDataStore";

// interval after which alias details api will be called, in seconds
const ALIAS_API_CALL_INTERVAL = 5;

// interval id for calling search api
let intervalID = null;

// CREATE CHANNEL OWNER DASHBOARD
const ChannelOwnerDashboard = () => {
  const theme = useTheme();
  const { account, chainId } = useWeb3React();
  const { channelDetails, delegatees, aliasDetails: {aliasAddr, aliasEthAddr, isAliasVerified} } = useSelector((state: any) => state.admin);
  const { processingState } = useSelector((state: any) => state.channelCreation);

  const dispatch = useDispatch();

  const [aliasAddressFromContract, setAliasAddressFromContract] = useState(null);
  const [channelDetailsLoading, setChannelDetailsLoading] = useState(true); 

  const CORE_CHAIN_ID = envConfig.coreContractChain;
  const onCoreNetwork = CORE_CHAIN_ID === chainId;
  
  React.useEffect(() => {
    if (!onCoreNetwork || !channelDetails) return;

    if (channelDetails['aliasDetails']) {
      const aliasDetails = channelDetails['aliasDetails'];
      const aliasChainId = aliasChainIdsMapping[CORE_CHAIN_ID];
      const caip = getCAIP(aliasChainId);
      if (aliasDetails[`${caip}:${aliasChainId}`]) {
        setAliasAddressFromContract(aliasDetails[`${caip}:${aliasChainId}`]);
      }
    } else {
      dispatch(setProcessingState(0));
    }
  }, []);

  const fetchChannelDetails = async (address: string) => {
    let { aliasAddress, isAliasVerified } = await ChannelsDataStore.instance.getChannelDetailsFromAddress(address);
    if (aliasAddress == "NULL") aliasAddress = null;

    return { aliasAddress: aliasAddress, aliasVerified: isAliasVerified };
  }

  const fetchEthAccount = async (address: string) => {
    if (aliasEthAddr) return aliasEthAddr;
    let ethAccount = await ChannelsDataStore.instance.getEthAddressFromAlias(address);
    if (ethAccount == "NULL") ethAccount = null;

    return ethAccount;
  }

  React.useEffect(() => {
    if (!onCoreNetwork || !aliasAddressFromContract || processingState === 0) return;

    setChannelDetailsLoading(true);
    intervalID = setInterval(async () => {
      const { aliasAddress, aliasVerified } = await fetchChannelDetails(account);
      if (aliasAddress) {
        dispatch(setAliasAddress(aliasAddress));
        if (aliasVerified) {
          setChannelDetailsLoading(false);
          dispatch(setAliasVerified(true));
          dispatch(setProcessingState(0));
        } else {
          setChannelDetailsLoading(false);
          dispatch(setProcessingState(2));
          dispatch(setAliasVerified(false));
        }
      } else {
        if (processingState != 0 && processingState != 1)
          dispatch(setProcessingState(1));
        setChannelDetailsLoading(false);
      }
    }, ALIAS_API_CALL_INTERVAL * 1000);
  }, [aliasAddressFromContract]);

  if (aliasAddr !== null) {
    clearInterval(intervalID);
  }

  React.useEffect(() => {
    if (onCoreNetwork) return;
    if (isAliasVerified || processingState === 0) return;
    (async function process() {
      const ethAccount = await fetchEthAccount(account);
      if (ethAccount) {
        dispatch(setAliasEthAddress(ethAccount));
        setChannelDetailsLoading(false);
        const { aliasVerified } = await fetchChannelDetails(ethAccount);
        if (!aliasVerified) {
          dispatch(setProcessingState(3));
          dispatch(setAliasVerified(false));
        } else {
          dispatch(setAliasVerified(true));
          dispatch(setProcessingState(0));
        }
      } else {
        setChannelDetailsLoading(false);
        dispatch(setProcessingState(0));
      }
    })()
  });

  return (
    <Fragment>
      <Section>
        {channelDetailsLoading &&
          <ChannelLoadingMessage>
            Channel details are being loaded, please wait…
          </ChannelLoadingMessage>
        }
        <ModifiedContent>
          {/* display the create channel page if there are no details */}
          {!channelDetails && aliasEthAddr === null && !channelDetailsLoading ? <CreateChannel /> : ""}
          
          {/* {aliasEthAccount !== null && isAliasVerified === false && */}
          {processingState !== 0 && processingState !== null && (
            <ThemeProvider theme={theme}>
              <AliasProcessing aliasVerified={isAliasVerified} aliasEthAccount={aliasEthAddr} setAliasVerified={setAliasVerified} />
            </ThemeProvider>
          )}
      
          {processingState === 0 && (<>
          {/* display the create channel page if there are no details */}
          {/* display the channel settings */}
          {channelDetails && ((!onCoreNetwork && isAliasVerified) || onCoreNetwork) ? <ChannelSettings /> : ""}
          {/* display the channel settings */}
          {/* display the details about the profile of the channel */}
          {channelDetails && ((!onCoreNetwork && isAliasVerified) || onCoreNetwork) ? <ChannelDetails /> : ""}
          {/* display the details about the profile of the channel */}
          {/* display the notifications settings */}
          {/* {(channelDetails && ((!onCoreNetwork && isAliasVerified) || onCoreNetwork)) || delegatees?.length ? <SendNotifications /> : ""} */}
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

const ChannelLoadingMessage = styled.div`
  width: 100%;
  padding: 40px;
  font-size: 1.5em;
  font-weight: 300;
  text-align: center;
  color: ${props => props.theme.color};
`;

// Export Default
export default ChannelOwnerDashboard;
