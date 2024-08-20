// React + Web3 Essentials
import { utils } from 'ethers';
import React from 'react';

// External Packages
import { MdCheckCircle, MdError } from 'react-icons/md';
import styled, { useTheme } from 'styled-components';
import { useSelector } from 'react-redux';

// Internal Components
import useToast from 'hooks/useToast';
import { Item, Span } from '../primaries/SharedStyling';
import { aliasChainIdsMapping, CORE_CHAIN_ID, networkName } from 'helpers/UtilityHelper';
import { appConfig, CHAIN_DETAILS } from 'config/index.js';
import { useAccount } from 'hooks';
import { Box, Button, Text } from 'blocks';

const ChangeNetwork = () => {
  const changeNetworkToast = useToast();
  const themes = useTheme();
  const { switchChain } = useAccount();
  const {
    aliasDetails: { aliasChainId },
  } = useSelector((state: any) => state.admin);

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
        Change your wallet network to <TextPink>{CHAIN_DETAILS[aliasChainId]?.label}</TextPink> to start <br></br>
        verifying your Channel Alias.
      </Span>

      <Box
        display="flex"
        alignSelf="center"
        alignItems="center"
        margin="spacing-xxxl spacing-none spacing-xxl spacing-none"
      >
        <Button
          variant="primary"
          onClick={() => switchChain(parseInt(aliasChainId))}
          size="large"
        >
          <Text color="white">Change Network</Text>
        </Button>
      </Box>
    </Item>
  );
};

const TextPink = styled.b`
  color: #cf1c84;
`;

export default ChangeNetwork;
