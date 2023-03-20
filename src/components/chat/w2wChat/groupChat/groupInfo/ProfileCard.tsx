// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';

// Internal Components
import { ReactComponent as MoreDark } from 'assets/chat/group-chat/moredark.svg';
import { ReactComponent as MoreLight } from 'assets/chat/group-chat/more.svg';
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { shortenText } from 'helpers/UtilityHelper';
import Dropdown from 'components/Dropdown';
import { caip10ToWallet } from '../../../../../helpers/w2w';
import { device } from 'config/Globals';

export const ProfileCard = ({
  key,
  member,
  dropdownValues,
  selectedMemeberAddress,
  setSelectedMemeberAddress,
  dropdownRef,
}) => {
  const theme = useTheme();
  const { account } = useWeb3React<ethers.providers.Web3Provider>();
  return (
    <ProfileCardItem key={key}>
      <ItemHV2 justifyContent="flex-start">
        <ItemVV2
          height="48px"
          maxWidth="48px"
          borderRadius="100%"
          overflow="hidden"
          margin="0px 12px 0px 0px"
        >
          <ImageV2
            maxHeight="100%"
            objectFit="cover"
            src={member?.image}
          />
        </ItemVV2>
        <SpanV2
          fontSize="18px"
          fontWeight="400"
          color={theme.modalProfileTextColor}
        >
          {shortenText(member?.wallet?.split(':')[1], 6)}
        </SpanV2>
      </ItemHV2>
      <ItemHV2 justifyContent="flex-end">
        {member?.isAdmin && (
          <SpanV2
            background="#F4DCEA"
            color="#D53A94"
            borderRadius="8px"
            padding="6px"
            fontWeight="500"
            fontSize="10px"
          >
            Admin
          </SpanV2>
        )}
        {caip10ToWallet(member?.wallet) !== account && dropdownValues.length > 0 && (
          <ItemVV2
            maxWidth="4px"
            padding="0 20px 0 0"
            onClick={() => setSelectedMemeberAddress(member?.wallet)}
            style={{ cursor: 'pointer' }}
          >
            {theme.scheme == 'light' ? <MoreLight /> : <MoreDark />}
          </ItemVV2>
        )}
      </ItemHV2>
      {selectedMemeberAddress == member?.wallet && (
        <DropdownContainer ref={dropdownRef}>
          <Dropdown
            dropdownValues={dropdownValues}
            hoverBGColor={theme.chat.snapFocusBg}
          />
        </DropdownContainer>
      )}
    </ProfileCardItem>
  );
};

const ProfileCardItem = styled(ItemHV2)`
  justify-content: space-between;
  padding: 8px 16px;
  border-radius: 16px;
  position: unset;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.chat.snapFocusBg};
  margin-bottom: 8px;
  max-height: 64px;
  @media (max-width: 600px) {
    max-width: 300px;
  }
`;

const DropdownContainer = styled(ItemVV2)`
  position: absolute;
  left: 85.5%;
  top: 69%;
  border-radius: 16px;
  padding: 14px 8px;
  background: ${(props) => props.theme.modalContentBackground};
  z-index: 11;
  @media ${device.mobileL} {
    left: 27%;
  }
  @media (min-width: 426px) and (max-width: 1150px) {
    left: 48%;
  }
`;
