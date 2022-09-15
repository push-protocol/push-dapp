// React + Web3 Essentials
import { useWeb3React } from "@web3-react/core";
import React, { Fragment, useEffect, useState } from "react";

// External Packages
import { useDispatch, useSelector } from "react-redux";
import styled, { useTheme } from "styled-components";

// Internal Compoonents
import AliasProcessing from "components/AliasProcessing";
import ChannelDetails from "components/ChannelDetails";
import ChannelLoading from "components/ChannelLoading";
import ChannelSettings from "components/ChannelSettings";
import CreateChannel from "components/CreateChannel";
import { ItemHV2, ItemVV2 } from "components/reusables/SharedStylingV2";
import { convertChainIdToChainCaip, getCAIP } from "helpers/CaipHelper";
import { aliasChainIdsMapping, getAliasFromChannelDetails } from "helpers/UtilityHelper";
import { useDeviceWidthCheck } from "hooks";
import { setAliasAddress, setAliasAddressFromContract, setAliasEthAddress, setAliasVerified } from "redux/slices/adminSlice";
import { setProcessingState } from "redux/slices/channelCreationSlice";
import ChannelsDataStore from "singletons/ChannelsDataStore";
import { Content, Item, Section } from "../primaries/SharedStyling";

// Internal Configs
import { envConfig } from "@project/contracts";

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
    <ItemHV2>
      {((channelDetails === 'unfetched') || processingState === null) &&
        <ChannelLoading />
      }

      {channelDetails !== 'unfetched' &&
        <ItemVV2>
          {/* display the create channel page if there are no details */}
          {!channelDetails && processingState === 0 && 
            <CreateChannel />
          }
          
          {isChannelDetails && processingState !== null &&
            (
              <>
                {channelDetails && !isMobile && 
                  <ItemHV2 position="absolute" top="0" right="0" zIndex="1">
                    <ChannelSettings />
                  </ItemHV2>
                }
                {channelDetails ? <ChannelDetails /> : ""}
              </>
            )
          }
          
          {/* processing box */}
          {processingState !== 0 && processingState !== null && isChannelDetails && (
            <AliasProcessing aliasEthAccount={aliasEthAddr} setAliasVerified={setAliasVerified} />
          )}
        </ItemVV2>
      }
      
    </ItemHV2>
  );
}
export default ChannelOwnerDashboard;
