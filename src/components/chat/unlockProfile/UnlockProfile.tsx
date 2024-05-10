// React + Web3 Essentials
import React, { useContext, useEffect, useState } from 'react';

// External Packages
import { useSelector } from 'react-redux';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import { ButtonV2, ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { AppContext } from 'contexts/AppContext';
import { useAccount, useDeviceWidthCheck } from 'hooks';

// Internal Configs
import { device, size } from 'config/Globals';

// Assets
import UnlockLogo from '../../../assets/chat/unlock.svg';
import Wallet from '../../../assets/chat/wallet.svg';
import Tooltip from 'components/reusables/tooltip/Tooltip';

// Constants
export enum UNLOCK_PROFILE_TYPE {
  BOTTOM_BAR = 'bottombar',
  MODAL = 'modal',
}

export enum PROFILESTATE {
  CONNECT_WALLET = 'connectwallet',
  UNLOCK_PROFILE = 'unlockprofile',
}

// Interface

type UnlockProfileModalProps = {
  InnerComponentProps: {
    type: UNLOCK_PROFILE_TYPE | undefined;
  };
  onClose?: () => void;
};

const UnlockProfile = ({ InnerComponentProps, onClose }: UnlockProfileModalProps) => {
  const { type } = InnerComponentProps;

  const theme = useTheme();
  const { handleConnectWallet, connectWallet } = useContext(AppContext);

  const { account, wallet } = useAccount();

  // Ensures if profile is stored then true is returned else false
  const [rememberMe, setRememberMe] = useState(false);

  const [activeStatus, setActiveStatus] = useState({
    status: PROFILESTATE.CONNECT_WALLET,
    title: 'Connect Wallet',
    body: 'Sign with wallet to continue.',
  });

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleChatprofileUnlock = async () => {
    await handleConnectWallet({ remember: rememberMe });
  };

  useEffect(() => {
    if (wallet?.accounts?.length > 0) {
      setActiveStatus({
        status: PROFILESTATE.UNLOCK_PROFILE,
        title: 'Unlock Profile',
        body: 'Unlock your profile to read and send messages.',
      });
    }
  }, [wallet]);

  const isMobile = useDeviceWidthCheck(parseInt(size.tablet));

  console.log('isMobile', isMobile, parseInt(size.tablet));

  return (
    <Container type={type}>

      <SubContainer type={type}>

        {/* Logo and Left Text */}
        <ItemHV2
          flex="none"
          gap="12px"
          flexDirection={type === UNLOCK_PROFILE_TYPE.MODAL || isMobile ? 'column' : 'row'}
        >
          <ImageV2
            width={'38px'}
            height={'35px'}
            src={activeStatus.status === PROFILESTATE.CONNECT_WALLET ? Wallet : UnlockLogo}
            alt="Unlock Logo"
            zIndex={1}
          />

          <ItemVV2 alignItems={type === UNLOCK_PROFILE_TYPE.MODAL || isMobile ? 'center' : 'baseline'}>
            <SpanV2
              fontSize="24px"
              fontWeight="500"
              lineHeight="28.8px"
              color={theme.default.color}
            >
              {activeStatus.title}
            </SpanV2>
            <SpanV2
              fontSize="18px"
              fontWeight="400"
              lineHeight="22.4px"
              color={theme.userSecText}
            >
              {activeStatus.body}
            </SpanV2>
          </ItemVV2>
        </ItemHV2>

        {/* Buttons and Connecting Steps */}
        <ItemVV2
          flex="none"
          gap="8px"
          flexDirection={type === UNLOCK_PROFILE_TYPE.MODAL || isMobile ? 'row' : 'column'}
        >
          <ItemHV2
            flex="none"
            flexDirection={type === UNLOCK_PROFILE_TYPE.MODAL || isMobile ? 'column' : 'row'}
          >
            <StepsLeftDesign background="#D53A94">1</StepsLeftDesign>
            <HorizontalBar
              activeState={activeStatus.status}
              type={type}
            ></HorizontalBar>
            <StepsLeftDesign background={activeStatus.status === PROFILESTATE.CONNECT_WALLET ? theme.disabledBtnColor : '#D53A94'}>
              2
            </StepsLeftDesign>
          </ItemHV2>


          <ItemHV2
            gap="16px"
            flex="none"
            alignItems="baseline"
            flexDirection={type === UNLOCK_PROFILE_TYPE.MODAL || isMobile ? 'column' : 'row'}
          >
            <ButtonV2
              flex="none"
              padding="12px 16px"
              background="#D53A94"
              background={activeStatus.status === PROFILESTATE.CONNECT_WALLET ? '#D53A94' : theme.disabledBtnColor}
              color="#fff"
              borderRadius="12px"
              minWidth='150px'
              onClick={() => connectWallet()}
            >
              Connect Wallet
            </ButtonV2>


            <ButtonV2
              flex="none"
              padding="12px 16px"
              background={activeStatus.status === PROFILESTATE.UNLOCK_PROFILE ? '#D53A94' : theme.disabledBtnColor}
              color="#fff"
              borderRadius="12px"
              minWidth='150px'
              onClick={handleChatprofileUnlock}
            >
              Unlock Profile
            </ButtonV2>

          </ItemHV2>

        </ItemVV2>
      </SubContainer>


      {/* Remember Me Tag */}
      {activeStatus.status === PROFILESTATE.UNLOCK_PROFILE && (
        <RenderToolTip type={type}>
          <ItemHV2
            gap="8px"
            justifyContent={type === UNLOCK_PROFILE_TYPE.MODAL ? 'center' : 'end'}
            margin={type === UNLOCK_PROFILE_TYPE.MODAL ? "12px 16px 0 20px" : '12px 16px 0 0px'}
          >
            <CustomCheckbox
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <SpanV2
              fontSize="14px"
              fontWeight="500"
              lineHeight="130%"
              color={theme.default.color}
            >
              Remember Me
            </SpanV2>
          </ItemHV2>
        </RenderToolTip>
      )}



    </Container>

  );
};

const RenderToolTip = ({ children, type }) => {
  console.log("Type >>>", type);
  return (
    <Tooltip
      wrapperProps={{
        width: 'fit-content',
        maxWidth: 'fit-content',
        minWidth: 'fit-content',
      }}
      placementProps={
        type === UNLOCK_PROFILE_TYPE.MODAL ? {
          background: 'black',
          width: '220px',
          padding: '8px 12px',
          top: '10px',
          left: '40px',
          borderRadius: '4px 12px 12px 12px',
        } : {
          background: 'black',
          width: '120px',
          padding: '8px 12px',
          bottom: '0px',
          right: '-30px',
          borderRadius: '12px 12px 12px 4px',
        }
      }

      tooltipContent={
        <SpanV2
          fontSize="10px"
          fontWeight="400"
        >
          Selecting 'Remember me' will save your Push Profile keys locally on this device. Proceed at your own risk.
        </SpanV2>
      }
    >
      {children}
    </Tooltip>
  );
};
const Container = styled(ItemHV2)`
  flex-direction: column;
  align-items:${(props) => (props.type === UNLOCK_PROFILE_TYPE.MODAL ? 'center' : 'end')};
  width: ${(props) => (props.type === UNLOCK_PROFILE_TYPE.MODAL ? '450px' : 'inherit')};
  padding: ${(props) => (props.type === UNLOCK_PROFILE_TYPE.MODAL ? '16px' : '0px')};

  @media(${device.tablet}){
    width: ${(props) => (props.type === UNLOCK_PROFILE_TYPE.MODAL ? '320px' : 'inherit')};
    padding: ${(props) => (props.type === UNLOCK_PROFILE_TYPE.MODAL ? '12px' : '0px')};
    align-items:center;
  }

`;

const SubContainer = styled(ItemVV2)`
  gap: ${(props) => (props.type === UNLOCK_PROFILE_TYPE.MODAL ? '24px' : '0px')};
  align-items:end;
  flex-direction: ${(props) => (props.type === UNLOCK_PROFILE_TYPE.MODAL ? 'column' : 'row')};
  justify-content: space-between;

  @media ${device.tablet} {
    align-items:center;
    flex-direction: column;
    gap:24px;
  }

`

const CustomCheckbox = styled.input.attrs({ type: 'checkbox' })`
  accent-color: #d53a94; /* Changes the checkbox color */
  &:checked {
    background-color: #d53a94;
  }
  cursor: pointer;
  width: 18px;
  height: 18px;
  border: 1px solid #c5c8cd;
`;

const StepsLeftDesign = styled(SpanV2)`
  font-size: 10px;
  font-weight: 700;
  line-height: 130%;
  padding: 6px 10px;
  border-radius: 22px;
  color: #fff;
`;

const HorizontalBar = styled.div`
  width: ${(props) => (props.type === UNLOCK_PROFILE_TYPE.MODAL ? '2px' : '150px')};
  height: ${(props) => (props.type === UNLOCK_PROFILE_TYPE.MODAL ? '40px' : '3px')};
  background: ${(props) =>
    props.activeState === PROFILESTATE.CONNECT_WALLET ? 'linear-gradient(to right,#D53A94, #C2C7CF)' : '#D53A94'};

  @media ${device.tablet} {
    width: 2px;
    height: 40px;
  }
`;

export default UnlockProfile;
