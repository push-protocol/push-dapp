import React from 'react';
import { useSelector } from "react-redux";
import SendNotifications from "components/SendNotifications";
import { useWeb3React } from "@web3-react/core";
import { envConfig } from "@project/contracts";

function SendNotifs() {
  const { channelDetails, delegatees, aliasVerified } = useSelector((state) => state.admin);

  const { chainId } = useWeb3React();
  const CORE_CHAIN_ID = envConfig.coreContractChain;
  const onCoreNetwork = CORE_CHAIN_ID === chainId;
  return (
    <>
    {(channelDetails && ((!onCoreNetwork && aliasVerified) || onCoreNetwork)) || delegatees?.length ? <SendNotifications /> : "Create"}
    </>
  )
}

export default SendNotifs
