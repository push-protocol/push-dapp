import { networkName, CORE_CHAIN_ID, aliasChainIdsMapping, PolygonNetworks } from "helpers/UtilityHelper";
import React from "react";
import styled, { useTheme } from "styled-components";
import { Item, Span, Button } from "../primaries/SharedStyling";
import { useWeb3React } from '@web3-react/core';
import useToast from "hooks/useToast";
import { utils } from "ethers";
import { MdCheckCircle, MdError } from "react-icons/md";

const ChangeNetwork = () => {
  const changeNetworkToast = useToast();
  const themes = useTheme();
  const { chainId, library } = useWeb3React();

  const switchToPolygonNetwork = async (chainId: number, provider: any) => {
    const polygonChainId = aliasChainIdsMapping[chainId];

    try {
      changeNetworkToast.showToast("Waiting for Confirmation...");

      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: utils.hexValue(polygonChainId) }],
      });

      changeNetworkToast.updateToast("Success", `Successfully switched to ${networkName[polygonChainId]} !`, "SUCCESS", (size) => <MdCheckCircle size={size} color="green" />)
    } catch (switchError) {
      changeNetworkToast.updateToast("Error", `There was an error switching Chain ( ${switchError.message} )`, "ERROR", (size) => <MdError size={size} color="red" />)

      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await provider.request({
            method: 'wallet_addEthereumChain',
            params: [polygonChainId === 80001 ? PolygonNetworks.MUMBAI_TESTNET : PolygonNetworks.POLYGON_MAINNET],
          });
        } catch (addError) {
          console.error(`Unable to add ${networkName[polygonChainId]} Network in wallet`);
        }
      }
      // error toast - Your wallet doesn't support switch network. Kindly, switch the network to Polygon manually.
      changeNetworkToast.updateToast("Error", `Your wallet doesn't support switching chains. Kindly, switch the network to ${networkName[polygonChainId]} manually.( ${switchError.message} )`, "ERROR", (size) => <MdError size={size} color="red" />)
      console.error("Unable to switch chains");
    }
  }

  return (
    <Item
      margin="15px 20px 15px 20px"
      flex="1"
      display="flex"
      direction="column"
    >
      <Span
        textAlign="center"
        margin="60px 0px 0px 0px"
        color={themes.color}
        size="16px"
        textTransform="none"
        weight="500"
        line="24px"
      >
        Change your wallet network to <TextPink>{networkName[aliasChainIdsMapping[CORE_CHAIN_ID]]}</TextPink> to
        start <br></br>
        verifying your Channel Alias.
      </Span>

      <Item
        width="12.2em"
        self="stretch"
        align="stretch"
        margin="100px auto 50px auto"
      >
        <Button
          bg="#e20880"
          color="#fff"
          flex="1"
          radius="15px"
          padding="20px 20px"
          onClick={() => switchToPolygonNetwork(chainId, library.provider)}
        >
          <Span
            color="#fff"
            weight="600"
            textTransform="none"
            line="22px"
            size="16px"
          >
            Change Network
          </Span>
        </Button>
      </Item>
    </Item>
  );
};

const TextPink = styled.b`
  color: #cf1c84;
`;

export default ChangeNetwork;
