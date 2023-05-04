// React + Web3 Essentials
import React, { useContext } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

// Internal Components
import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import { ReactComponent as SearchIcon } from 'assets/chat/search.svg';
import { SpaceTabOption } from 'contexts';

const Searchbar = ({ setActiveTab, activeTab }: any) => {
  const them = useTheme();

  const searchSpace = () => {};
  const clearInput = () => {};

  return (
    <ItemVV2
      alignItems="stretch"
    >
      <SearchBarContent onSubmit={searchSpace}>
        <Input
          type="text"
          placeholder="Search space name"
        />
        {false && (
          <ItemVV2
            position="absolute"
            alignItems="flex-end"
            width="24px"
            height="24px"
            top="22px"
            right="34px"
          >
            <CloseIcon onClick={clearInput} />
          </ItemVV2>
        )}
        <ItemVV2
          position="absolute"
          alignItems="flex-end"
          width="24px"
          height="24px"
          top="22px"
          right="16px"
        >
          <SearchIcon
            style={{ cursor: 'pointer' }}
            onClick={searchSpace}
          />
        </ItemVV2>
      </SearchBarContent>
    </ItemVV2>
  );
};

const SearchBarContent = styled.form`
  position: relative;
  display: flex;
  flex: 1;
`;

const Input = styled.input`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  width: 0;
  height: 48px;
  padding: 13px 60px 13px 21px;
  margin: 10px 0px 17px 0px;
  border-radius: 99px;
  border: 1px solid transparent !important;
  background-color: ${(props) => props.theme.chat.snapFocusBg};
  color: ${(props) => props.theme.default.color || '#000'};
  &:focus {
    outline: none;
    background-image: linear-gradient(
        ${(props) => props.theme.chat.snapFocusBg},
        ${(props) => props.theme.chat.snapFocusBg}
      ),
      linear-gradient(
        to right,
        rgba(182, 160, 245, 1),
        rgba(244, 110, 246, 1),
        rgba(255, 222, 211, 1),
        rgba(255, 207, 197, 1)
      );
    background-origin: border;
    border: 1px solid transparent !important;
    background-clip: padding-box, border-box;
  }
  &::placeholder {
    color: #657795;
  }
`;

export default Searchbar;
