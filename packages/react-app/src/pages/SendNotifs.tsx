import React, {useContext} from 'react';
import { useSelector } from "react-redux";
import SendNotifications from "components/SendNotifications";
import { useWeb3React } from "@web3-react/core";
import { envConfig } from "@project/contracts";
import { NotificationContext } from "contexts/NotificationContext";

function SendNotifs() {
  const { channelDetails, delegatees } = useSelector((state) => state.admin);
  
  const aliasVerified = useContext(NotificationContext)
  const { chainId } = useWeb3React();
  const CORE_CHAIN_ID = envConfig.coreContractChain;
  const onCoreNetwork = CORE_CHAIN_ID === chainId;
  return (
    <>
    {(channelDetails && ((!onCoreNetwork && aliasVerified) || onCoreNetwork)) || delegatees?.length ? <SendNotifications /> : "Please create a channel to send notifications or become a delegate to any other channel"}
    </>
  )
}

export default SendNotifs
