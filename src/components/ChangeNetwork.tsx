// React + Web3 Essentials
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
import { appConfig, CHAIN_DETAILS } from 'config';
import { useAccount } from 'hooks';
import { ButtonV2, SpanV2 } from "./reusables/SharedStylingV2";
const ChangeNetwork = () => {
  const changeNetworkToast = useToast();
  const themes = useTheme();
  const { switchChain } = useAccount();
  const { aliasDetails: {aliasChainId} } = useSelector((state: any) => state.admin);

  return (
    <Item
      margin="15px 20px 15px 20px"
      flex="1"
      display="flex"
      direction="column"
    >
      <SpanV2
        textAlign="center"
        margin="30px 0px 0px 0px"
        color={themes.color}
        fontSize ="16px"
        textTransform="none"
        fontWeight="500"
        lineHeight="24px"
      >
        Change your wallet network to <TextPink>{CHAIN_DETAILS[aliasChainId]?.label}</TextPink> to
        start <br></br>
        verifying your Channel Alias.
      </SpanV2>

      <Item
        width="12.2em"
        self="center"
        align="center"
        margin="100px auto 50px auto"
      >
        <ButtonV2
          background="#e20880"
          color="#fff"
          borderRadius="15px"
          padding="20px 20px"
          onClick={() => switchChain(aliasChainId)}
        >
          <SpanV2
            color="#fff"
            fontWeight="600"
            textTransform="none"
            lineHeight="22px"
            fontSize="16px"
          >
            Change Network
          </SpanV2>
        </ButtonV2>
      </Item>
    </Item>
  );
};

const TextPink = styled.b`
  color: #cf1c84;
`;

export default ChangeNetwork;
