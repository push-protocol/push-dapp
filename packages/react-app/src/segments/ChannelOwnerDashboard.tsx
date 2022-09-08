import React, {Fragment, useEffect, useState} from "react";
import styled from "styled-components";
import { Section, Content, Item } from "../primaries/SharedStyling";
import ChannelSettings from "components/ChannelSettings";
import ChannelDetails from "components/ChannelDetails";
import CreateChannel from "components/CreateChannel";
import { useDispatch, useSelector } from "react-redux";
import { useWeb3React } from "@web3-react/core";
import { envConfig } from "@project/contracts";
import { ThemeProvider, useTheme } from "styled-components";
import { aliasChainIdsMapping, getAliasFromChannelDetails } from "helpers/UtilityHelper";
import { convertChainIdToChainCaip, getCAIP } from "helpers/CaipHelper";
import { setAliasAddress, setAliasEthAddress, setAliasVerified, setAliasAddressFromContract } from "redux/slices/adminSlice";
import { setProcessingState } from "redux/slices/channelCreationSlice";
import AliasProcessing from "components/AliasProcessing"
import ChannelsDataStore from "singletons/ChannelsDataStore";
import { useDeviceWidthCheck } from "hooks";
import ChannelLoading from "components/ChannelLoading";

// interval after which alias details api will be called, in seconds
const ALIAS_API_CALL_INTERVAL:number = 10;

// interval id for calling search api
let intervalID = null;

// CREATE CHANNEL OWNER DASHBOARD
const ChannelOwnerDashboard = () => {
  const theme = useTheme();
  const { account, chainId } = useWeb3React();
  const { channelDetails, delegatees, aliasDetails: {aliasAddr, aliasEthAddr, isAliasVerified, aliasAddrFromContract} } = useSelector((state: any) => state.admin);
  const { processingState } = useSelector((state: any) => state.channelCreation);

  const isChannelDetails = (channelDetails && channelDetails !== 'unfetched');

  const dispatch = useDispatch();

  const [channelDetailsLoading, setChannelDetailsLoading] = useState<boolean>(true); 

  const CORE_CHAIN_ID: number = envConfig.coreContractChain;
  const onCoreNetwork: boolean = CORE_CHAIN_ID === chainId;
  const isMobile = useDeviceWidthCheck(600);

  
  useEffect(() => {
    if (!onCoreNetwork || !channelDetails || aliasAddrFromContract || channelDetails === 'unfetched') return;

    const aliasAddress: (string | null) = getAliasFromChannelDetails(channelDetails);
    if (aliasAddress) {
      dispatch(setAliasAddressFromContract(aliasAddress));
      // dispatch(setAliasAddress(aliasAddress));
    } else {
      dispatch(setProcessingState(0));
      // setChannelDetailsLoading(false);
    }
  }, [channelDetails, aliasAddrFromContract]);

  const fetchChannelDetails = async (address: string) => {
    let { aliasAddress=null, isAliasVerified=null } = await ChannelsDataStore.instance.getChannelDetailsFromAddress(address);
    if (aliasAddress == "NULL") aliasAddress = null;

    return { aliasAddress: aliasAddress, aliasVerified: isAliasVerified };
  }

  React.useEffect(() => {
    if (!onCoreNetwork || !aliasAddrFromContract || processingState === 0) return;

    intervalID = setInterval(async () => {
      const { aliasAddress, aliasVerified } = await fetchChannelDetails(account);
      if (aliasAddress) {
        dispatch(setAliasAddress(aliasAddress));
        if (aliasVerified) {
          // setChannelDetailsLoading(false);
          dispatch(setAliasVerified(true));
          dispatch(setProcessingState(0));
        } else {
          // setChannelDetailsLoading(false);
          dispatch(setProcessingState(2));
          dispatch(setAliasVerified(false));
        }
      } else {
        if (processingState != 0 && processingState != 1)
          dispatch(setProcessingState(1));
        // setChannelDetailsLoading(false);
      }
    }, ALIAS_API_CALL_INTERVAL * 1000);
  }, [aliasAddrFromContract]);

  if (aliasAddr !== null) {
    clearInterval(intervalID);
  }

  return (
    <Container>
      <Interface>
        {((channelDetails === 'unfetched') || processingState === null) &&
          <ChannelLoading />
        } 
      </Interface>
        <ModifiedContent>
          {/* display the create channel page if there are no details */}
          {(!channelDetails && processingState === 0) ? <CreateChannel /> : ""}
          {isChannelDetails && processingState !== null &&
            (
              <>
                {channelDetails && !isMobile ? <ChannelSettings /> : ""}
                {channelDetails ? <ChannelDetails /> : ""}
              </>
            )
          }
          
          {/* processing box */}
          {processingState !== 0 && processingState !== null && isChannelDetails && (
            <ThemeProvider theme={theme}>
              <AliasProcessing aliasEthAccount={aliasEthAddr} setAliasVerified={setAliasVerified} />
            </ThemeProvider>
          )}
          </ModifiedContent>
    </Container>
  );
}

// css styles
const ModifiedContent = styled(Content)`
  flex: 1;
  padding: 0px;
  position: relative;
    @media (min-width: 800px) and (max-width: 1600px) {
      padding: 20px 30px;
   }

   @media (min-width: 1601px) and (max-width: 2200px) {
    padding: 20px 50px;
 }
  @media (min-width: 2201px) and (max-width: 2900px) {
    padding: 30px 220px;
  }
  @media (min-width: 2901px) {
    padding: 30px 550px;
  }

  @media (min-width: 3501px) {
    padding: 30px 1000px;
  }
`;

const Container = styled.div`
  flex: 1;
  display: block;
  flex-direction: column;
`;

const Interface = styled.div`
  flex: 1;
  display: flex;

  margin-bottom: 15px;
  overflow: hidden;
`;

  //   @media screen and (max-width: 1200px) {
  //   min-width: 700px;
  //  }

  //  @media screen and (max-width: 1600px) {
  //   min-width: 900px;
  // }

  // @media screen and (max-width: 2000px) {
  //   min-width: 1300px;
  // }

  // @media screen and (max-width: 2100px) {
  //    min-width: 1200px;
  // }

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
