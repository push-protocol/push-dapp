import React from 'react';
import { useSelector } from "react-redux";
import SendNotifications from "components/SendNotifications";
import { useWeb3React } from "@web3-react/core";
import { envConfig } from "@project/contracts";

function SendNotifs() {
  const { channelDetails, delegatees } = useSelector((state) => state.admin);
  const [aliasVerified, setAliasVerified] = React.useState(null); // null means error, false means unverified and true means verified
  
  const { chainId } = useWeb3React();
  const CORE_CHAIN_ID = envConfig.coreContractChain;
  const onCoreNetwork = CORE_CHAIN_ID === chainId;
  return (
    <>
    {(channelDetails && ((!onCoreNetwork && aliasVerified) || onCoreNetwork)) || delegatees?.length ? <SendNotifications /> : ""}
    </>
  )
}

export default SendNotifs