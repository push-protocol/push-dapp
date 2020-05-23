import React from "react";
import { addresses, abis } from "@project/contracts";

import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { ethers } from "ethers";

import styled from 'styled-components';

import Home from 'pages/Home';

async function readOnchainBalance() {
  // Should replace with the end-user wallet, e.g. Metamask
  const defaultProvider = ethers.getDefaultProvider();
  // Create an instance of ethers.Contract
  // Read more about ethers.js on https://docs.ethers.io/ethers.js/html/api-contract.html
  const ceaErc20 = new ethers.Contract(addresses.ceaErc20, abis.erc20, defaultProvider);
  // A pre-defined address that owns some CEAERC20 tokens
  const tokenBalance = await ceaErc20.balanceOf("0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C");
  console.log({ tokenBalance: tokenBalance.toString() });
}


function App() {
  React.useEffect(() => {

  });

  return (

    <Home />
  );
}

// CSS STYLES
const AppLogo = styled.img`
  height: 40vmin;
  margin-bottom: 16px;
  pointer-events: none;
`

const AppLink = styled.a`
  height: 40px;
`


export default App;
