import { Button } from 'components/SharedStyling';
import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { device } from 'config/Globals';
import { shortenText } from 'helpers/UtilityHelper';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as MoreLight } from 'assets/chat/group-chat/more.svg';
import { ReactComponent as MoreDark } from 'assets/chat/group-chat/moredark.svg';
import { ReactComponent as RestrictIcon } from 'assets/PushSnaps/MinusCircle.svg';
import Switch from 'react-switch';
import { useClickAway } from 'react-use';
import { useWeb3React } from '@web3-react/core';
import Tooltip from 'components/reusables/tooltip/Tooltip';
import InfoImage from "assets/info.svg";

const MetamaskSnapConfigureModal = () => {
  const [walletAddresses, setWalletAddresses] = useState([]);
  const [searchedUser, setSearchedUser] = useState('');
  const [showRemove, setShowRemove] = useState();

  const defaultSnapOrigin = 'npm:push-v1';

  const { chainId, account, provider } = useWeb3React();

  async function getSignature(mode: number) {
    if (mode == 1) {
      const signer = provider.getSigner(account);
      const signature = await signer.signMessage('Add address to receive notifications');
      return signature;
    }
    if (mode == 2) {
      const signer = provider.getSigner(account);
      const signature = await signer.signMessage('Remove address to receive notifications');
      return signature;
    }
  }

  const addWalletAddresses = async () => {
    console.log('searchedUser', searchedUser);
    const signatureResult = await getSignature(1);
    if (signatureResult) {
      if (searchedUser) {
        await window.ethereum?.request({
          method: 'wallet_invokeSnap',
          params: {
            snapId: defaultSnapOrigin,
            request: {
              method: 'pushproto_addaddress',
              params: { address: searchedUser },
            },
          },
        });
        console.log('Added', searchedUser);
        setWalletAddresses((prev) => [...prev, searchedUser]);
      }
    } else {
      console.log('Signature Validation Failed');
    }
  };

  const [checked, setChecked] = useState(false);
  const handleChange = async (nextChecked) => {
    setChecked(nextChecked);
    await window.ethereum?.request({
      method: 'wallet_invokeSnap',
      params: {
        snapId: defaultSnapOrigin,
        request: { method: 'pushproto_togglepopup' },
      },
    });
  };

  const removeWalletAddresses = async () => {
    const signatureResult = await getSignature(2);
    if (signatureResult) {
      if (searchedUser) {
        await window.ethereum?.request({
          method: 'wallet_invokeSnap',
          params: {
            snapId: defaultSnapOrigin,
            request: {
              method: 'pushproto_removeaddress',
              params: { address: searchedUser },
            },
          },
        });
      }
    } else {
      console.log('Signature Validation Failed');
    }
  };

  const containerRef = React.useRef(null);
  useClickAway(containerRef, () => {
    console.log('Set show to be null');
    setShowRemove(null);
  });

  return (
    <Container>
      <SpanV2
        fontSize="22px"
        fontWeight="500"
      >
        Settings
      </SpanV2>

      <ItemVV2
        alignItems="baseline"
        margin="24px 0 0 0"
      >
        <PrimaryText>Notification Address</PrimaryText>
        <SecondaryText>Add or remove wallet address to receive notifications</SecondaryText>
        <Input
          type="text"
          value={searchedUser}
          onChange={(e) => {
            setSearchedUser(e.target.value);
          }}
          placeholder="0x123 .... 4567"
        //   color={theme.modalPrimaryTextColor}
        />
        <ItemHV2
          margin="14px 0 0 0"
          justifyContent="end"
          gap="5px"
        >
          <AddButton onClick={addWalletAddresses}>Add</AddButton>
          <AddButton onClick={removeWalletAddresses}>Remove</AddButton>
        </ItemHV2>
      </ItemVV2>

      <ItemVV2
        alignItems="flex-start"
        margin="24px 0 0 0"
      >
        <ItemHV2 justifyContent='flex-start'>
          <PrimaryText>
            Snooze Notifications
          </PrimaryText>

          <InfoToolTip/>
        </ItemHV2>

        <SecondaryText>Toggle notification pop-ups on or off</SecondaryText>

        <ItemHV2
          justifyContent="flex-start"
          margin="15px 0 0 0"
          gap="8px"
        >
          <Switch
            onChange={handleChange}
            checked={checked}
            className="react-switch"
            uncheckedIcon={false}
            checkedIcon={false}
            height={23}
            onColor="#D53A94"
            width={44}
          />
          <SpanV2
            fontSize="18px"
            fontWeight="500"
          >
            {checked ? 'On' : 'Off'}
          </SpanV2>
        </ItemHV2>
      </ItemVV2>
    </Container >
  );
};

export default MetamaskSnapConfigureModal;

const InfoToolTip = () =>{


  return(
    <Tooltip
            wrapperProps={{
              width: 'fit-content',
              maxWidth: 'fit-content',
              minWidth: 'fit-content',
              // zIndex: "10",
            }}
            placementProps={{
              background: 'none',
              bottom: "20px",
              // top: '20px',
              // right: "-175px",
              left: '5px',
            }}
            tooltipContent={
              <ToolTipContainer>
                <ToolTipText>Toggle popups in case of frequent incoming notifications</ToolTipText>
              </ToolTipContainer>
            }
          >
            <ItemVV2 margin='0 0 0 5px'>
              <ImageInfo src={InfoImage} />
            </ItemVV2>
          </Tooltip>

  )
}

const Container = styled(ItemVV2)`
  padding: 0px 9px 12px 9px;
`;

const ToolTipContainer = styled(ItemVV2)`
box-sizing: border-box;
width: 18.75rem;
// height: 7.5rem;
// max-height: 7.5rem;
background: ${(props) => props.theme.default.bg};
border-radius: 1rem 1rem 1rem 0.125rem;
justify-content: flex-start;
border: 1px solid rgba(173, 176, 190, 0.2);
align-items: flex-start;
padding: 0.75rem 0.25rem 0.75rem 1rem;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);

@media (max-width:400px){
  width:16.75rem;
}


`;

const PrimaryText = styled.p`
  margin: 0px;
  font-size: 18px;
  font-weight: 500;
  align-self: baseline;
`;

const SecondaryText = styled.p`
  margin: 0px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #62626a;
  text-align: left;
`;

const ToolTipText = styled.p`
  margin: 0px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #62626a;
  color: ${(props)=>props.theme.modalMessageColor};
  text-align: left;
`

const AddButton = styled(Button)`
  align-self: end;
  width: fit-content;
  background: #d53a94;
  color: #fff;
  height: 36px;
  min-width: 79px;
  z-index: 0;
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: normal;
  border-radius: 8px;
  padding: 14px;
`;

const ImageInfo = styled.img`
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  cursor: pointer;
`;

const Input = styled.input`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  width: 100%;
  height: 48px;
  padding: 13px 16px;
  margin: 10px 0px 0px;
  //   border: 1px solid;
  //   border-color: ${(props) => props.theme.modalSearchBarBorderColor};
  background: ${(props) => props.theme.modalSearchBarBackground};

  border-radius: 12px;
  border: 1px solid #bac4d6;

  color: ${(props) => props.color || '#000'};
  &:focus {
    outline: none;
    background-origin: border;
    border: 1px solid #bac4d6 !important;
    background-clip: padding-box, border-box;
  }
  &::placeholder {
    color: #657795;
  }
  @media ${device.mobileL} {
    min-width: 300px;
  }
`;
