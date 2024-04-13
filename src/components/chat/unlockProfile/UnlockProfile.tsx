import React, { useContext, useState } from 'react';
import styled, { ThemeProvider, useTheme } from 'styled-components';

import { ButtonV2, ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { AppContext } from 'contexts/AppContext';
import { useAccount } from 'hooks';
import UnlockLogo from '../../../assets/chat/unlock.svg';

const UnlockProfile = () => {
  const theme = useTheme();
  const { handleConnectWallet } = useContext(AppContext);

  const { account } = useAccount();

  const [rememberMe, setRememberMe] = useState(true);

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleChatprofileUnlock = async () => {
    const user = await handleConnectWallet();

    if (rememberMe) {
      if (!user.readmode()) {
        localStorage.setItem(user.account, user.decryptedPgpPvtKey);
      }
    }
  };

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
            onClick={handleChatprofileUnlock}
          >
            Unlock Profile
          </ButtonV2>

          <ItemHV2 gap="10px">
            <CustomCheckbox
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <SpanV2
              fontSize="14px"
              fontWeight="500"
              lineHeight="130%"
            >
              Remember Me
            </SpanV2>
          </ItemHV2>
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

const CustomCheckbox = styled.input.attrs({ type: 'checkbox' })`
  accent-color: #d53a94; /* Changes the checkbox color */
  &:checked {
    background-color: #d53a94;
  }
  cursor: pointer;
  width: 18px;
  height: 18px;
`;

export default UnlockProfile;
