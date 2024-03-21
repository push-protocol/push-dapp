import React, { useContext } from 'react';
import styled, { ThemeProvider, useTheme } from 'styled-components';

import { ButtonV2, ImageV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { AppContext } from 'contexts/AppContext';
import UnlockLogo from '../../../assets/chat/unlock.svg';

const UnlockProfile = () => {
  const theme = useTheme();
  const { handleConnectWallet } = useContext(AppContext);
  return (
    <ThemeProvider theme={theme}>
      <ModalContainer>
        <ItemVV2
          padding="24px"
          gap="32px"
        >
          <ImageV2
            width={'48px'}
            height={'48px'}
            src={UnlockLogo}
            alt="Unlock Logo"
          />
          <ItemVV2 gap="10px">
            <SpanV2
              fontSize="20px"
              fontWeight="500"
              color={theme.default.color}
            >
              Unlock Your Push Profile
            </SpanV2>
            <SpanV2
              fontSize="15px"
              fontWeight="400"
              color={theme.default.secondaryColor}
            >
              You need to decrypt your Push Profile to proceed. Please sign using your wallet to continue.
            </SpanV2>
          </ItemVV2>
          <ButtonV2
            padding="14px 20px"
            background="#D53A94"
            color="#fff"
            borderRadius="16px"
            width="100%"
            onClick={async () => await handleConnectWallet()}
          >
            Unlock Profile
          </ButtonV2>
        </ItemVV2>
      </ModalContainer>
    </ThemeProvider>
  );
};

const ModalContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-radius: 24px;
  width: 358px;
  min-height: -webkit-fill-available;
  background: ${(props) => props.theme.default.bg};
  align-items: flex-start;
  overflow: hidden;
`;

export default UnlockProfile;
