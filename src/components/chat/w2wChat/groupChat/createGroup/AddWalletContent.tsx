import React from 'react';

import CloseIcon from '@material-ui/icons/Close';
import styled, { useTheme } from 'styled-components';

import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import { ReactComponent as SearchIcon } from 'assets/chat/search.svg';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';

export const AddWalletContent = () => {
  const [searchedUser, setSearchedUser] = React.useState<string>('');
  const [isLoadingSearch, setIsLoadingSearch] = React.useState<boolean>(false);

  const theme = useTheme();

  const onChangeSearchBox = (e) => {
    setSearchedUser(e.target.value);
  };

  const clearInput = () => {
    setSearchedUser('');
  };

  return (
    <SearchBarContent onSubmit={() => {}}>
      <Input
        type="text"
        value={searchedUser}
        onChange={onChangeSearchBox}
        placeholder="Search name.eth or 0x123..."
      />
      {searchedUser.length > 0 && (
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
        {isLoadingSearch && (
          <LoaderSpinner
            type={LOADER_TYPE.SEAMLESS}
            width="auto"
            spinnerSize={24}
            spinnerColor={theme.default.secondaryColor}
          />
        )}
        {!isLoadingSearch && (
          <SearchIcon
            style={{ cursor: 'pointer' }}
            onClick={() => {}}
          />
        )}
      </ItemVV2>
    </SearchBarContent>
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
      linear-gradient(to right, #cf1c84, #8ed6ff);
    background-origin: border;
    border: 1px solid transparent !important;
    background-clip: padding-box, border-box;
  }
  &::placeholder {
    color: #657795;
  }
`;
