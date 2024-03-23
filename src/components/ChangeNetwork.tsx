// React + Web3 Essentials

// External Packages
import { useSelector } from 'react-redux';
import styled, { useTheme } from 'styled-components';

// Internal Components
import { CHAIN_DETAILS } from 'config';
import { useAccount } from 'hooks';
import useToast from 'hooks/useToast';
import { ButtonV2, ItemVV2, SpanV2 } from './reusables/SharedStylingV2';

const ChangeNetwork = () => {
  const changeNetworkToast = useToast();
  const themes = useTheme();
  const { switchChain } = useAccount();
  const {
    aliasDetails: { aliasChainId },
  } = useSelector((state: any) => state.admin);

  return (
    <ItemVV2
      margin="15px 20px 15px 20px"
      flex="1"
      display="flex"
      direction="column"
    >
      <SpanV2
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
      </SpanV2>

      <ItemVV2
        width="12.2em"
        self="center"
        alignItems="center"
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
            size="16px"
          >
            Change Network
          </SpanV2>
        </ButtonV2>
      </ItemVV2>
    </ItemVV2>
  );
};

const TextPink = styled.b`
  color: #cf1c84;
`;

export default ChangeNetwork;
