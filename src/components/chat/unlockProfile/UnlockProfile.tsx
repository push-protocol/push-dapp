// React + Web3 Essentials
import React, { useContext, useState } from 'react';

// External Packages
import { useSelector } from 'react-redux';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import { ButtonV2, ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { AppContext } from 'contexts/AppContext';
import { useAccount } from 'hooks';

// Internal Configs
import { device } from 'config/Globals';

// Assets
import UnlockLogo from '../../../assets/chat/unlock.svg';

// Constants
export enum UNLOCK_PROFILE_TYPE {
  BOTTOM_BAR = 'bottombar',
  MODAL = 'modal',
}

const DEFAULT_PROPS = {
  type: UNLOCK_PROFILE_TYPE.MODAL,
  title: 'Unlock Push Profile',
  body: 'You will need to unlock Push Profile to proceed. Please sign using your wallet to continue.',
};

// Interface
interface IntroContainerProps {
  type?: UNLOCK_PROFILE_TYPE;
  title?: string;
  body?: string;
}

const UnlockProfile = ({
  type = DEFAULT_PROPS.type,
  title = DEFAULT_PROPS.title,
  body = DEFAULT_PROPS.body,
}: IntroContainerProps) => {
  const theme = useTheme();
  const { handleConnectWallet } = useContext(AppContext);

  const { account } = useAccount();

  // Ensures if profile is stored then true is returned else false
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleChatprofileUnlock = async () => {
    await handleConnectWallet({ remember: rememberMe });
  };

  return (
    <Container className={type}>
      <ImageV2
        width={'48px'}
        height={'48px'}
        src={UnlockLogo}
        alt="Unlock Logo"
        zIndex={1}
      />
      <ItemVV2
        gap="10px"
        flex="initial"
      >
        <SpanV2
          fontSize="20px"
          fontWeight="500"
          color={theme.default.color}
        >
          {title}
        </SpanV2>
        <SpanV2
          fontSize="15px"
          fontWeight="400"
          color={theme.default.secondaryColor}
        >
          {body}
        </SpanV2>
        <ButtonV2
          padding="14px 20px"
          background="#D53A94"
          color="#fff"
          borderRadius="16px"
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
    </Container>
  );
};

const Container = styled(ItemVV2)`
  flex: initial;
  border-radius: 24px;
  padding: 24px;
  gap: 32px;
  width: 358px; // this should be auto and container should wrap the content
  align-items: center;
  overflow: hidden;
  backdrop-filter: blur(8px);

  &.bottombar {
    flex: initial;
    position: absolute;
    left: 0;
    right: 0;
    width: auto;
    bottom: 0;
    flex-direction: row;
    overflow: hidden;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: ${(props) => props.theme.chat.modalBg};
    opacity: 0.8;
  }
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
