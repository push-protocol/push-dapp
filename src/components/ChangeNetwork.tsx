// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import { utils } from "ethers";
import React from "react";

// External Packages
import { MdCheckCircle, MdError } from "react-icons/md";
import styled, { useTheme } from "styled-components";
import { useSelector } from 'react-redux';

// Internal Components
import useToast from "hooks/useToast";
import { Button, Item, Span } from "../primaries/SharedStyling";
import { aliasChainIdsMapping, CORE_CHAIN_ID, networkName } from "helpers/UtilityHelper";
import { CHAIN_DETAILS } from 'config';
import { handleChangeNetwork } from 'helpers/ChainHelper';

const ChangeNetwork = () => {
  const changeNetworkToast = useToast();
  const themes = useTheme();
  const { chainId, library } = useWeb3React();
  const { aliasDetails: {aliasChainId} } = useSelector((state: any) => state.admin);

  return (
    <Item
      margin="15px 20px 15px 20px"
      flex="1"
      display="flex"
      direction="column"
    >
      <Span
        textAlign="center"
        margin="30px 0px 0px 0px"
        color={themes.color}
        size="16px"
        textTransform="none"
        weight="500"
        line="24px"
      >
        Change your wallet network to <TextPink>{CHAIN_DETAILS[aliasChainId]?.label}</TextPink> to
        start <br></br>
        verifying your Channel Alias.
      </Span>

      <Item
        width="12.2em"
        self="center"
        align="center"
        margin="100px auto 50px auto"
      >
        <Button
          bg="#e20880"
          color="#fff"
          radius="15px"
          padding="20px 20px"
          onClick={() => handleChangeNetwork(aliasChainId, library.provider)}
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
