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

const MetamaskSnapConfigureModal = () => {
  const [walletAddresses, setWalletAddresses] = useState([]);
  const [searchedUser, setSearchedUser] = useState('');
  const [showRemove, setShowRemove] = useState();

  const defaultSnapOrigin = 'npm:push-v1';

  const addWalletAddresses = async () => {
    console.log('searchedUser', searchedUser);
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
  };

  console.log('Addresses', walletAddresses);

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
        <PrimaryText>Snooze Notifications</PrimaryText>
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
    </Container>
  );
};

export default MetamaskSnapConfigureModal;

const Container = styled(ItemVV2)`
  padding: 0px 9px 12px 9px;
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
const WalletOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 250px;
  overflow-y: auto;
  width: 100%;
  gap: 8px;
  margin-top: 8px;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d53a94;
    border-radius: 99px;
  }
`;

const WalletContainer = styled(ItemHV2)`
  border-radius: 12px;
  background: #f2f2f2;
  flex: none;
  position: relative;
  padding: 13px 16px;
  justify-content: space-between;
  width: auto;
  height: 30px;
  margin-right: 10px;
`;

const RemoveContainer = styled(ItemHV2)`
  padding: 8px 12px 8px 8px;
  gap: 9px;
  cursor: pointer;
  position: absolute;
  right: 0px;
  top: 5px;
  height: 25px;
  border-radius: 12px;
  border: 1px solid #bac4d6;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
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
