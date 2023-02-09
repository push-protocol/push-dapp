// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { ThemeProvider, useTheme } from 'styled-components';

// Internal Components
import ModalConfirmButton from 'primaries/SharedModalComponents/ModalConfirmButton';
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { ReactComponent as SearchIcon } from 'assets/chat/search.svg';
import { ReactComponent as Clear } from 'assets/chat/group-chat/close.svg';
import { ReactComponent as AddDark } from 'assets/chat/group-chat/adddark.svg';
import { ReactComponent as RemoveLight } from 'assets/chat/group-chat/removelight.svg';
import { ReactComponent as RemoveDark } from 'assets/chat/group-chat/removedark.svg';
import { ReactComponent as AddLight } from 'assets/chat/group-chat/addlight.svg';
import Profile from 'assets/chat/group-chat/profile.svg';
//import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';

export const AddWalletContent = () => {
  const [searchedUser, setSearchedUser] = React.useState<string>('');
  const [isLoadingSearch, setIsLoadingSearch] = React.useState<boolean>(false);
  const [searchResult, setSearchResult] = React.useState<number>(0);
  const [completed, setCompleted] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const theme = useTheme();

  const onChangeSearchBox = (e) => {
    setSearchedUser(e.target.value);
  };

  const handleUserSearch = () => {
    console.log('Search');
  };

  const clearInput = () => {
    setSearchedUser('');
  };

  return (
    <ThemeProvider theme={theme}>
      <SearchbarContainer>
        <LabelContainer>
          <SpanV2
            color={theme.modalHeadingColor}
            fontWeight={500}
            fontSize="18px"
          >
            Add Wallets
          </SpanV2>
          <SpanV2
            color={theme.modalSecondaryTextColor}
            fontWeight={400}
            fontSize="14px"
          >
            01/09 Members
          </SpanV2>
        </LabelContainer>
        <SearchBarContent onSubmit={handleUserSearch}>
          <Input
            type="text"
            value={searchedUser}
            onChange={onChangeSearchBox}
            placeholder="Search name.eth or 0x123..."
            color={theme.modalPrimaryTextColor}
          />
          <ItemVV2
            position="absolute"
            alignItems="flex-end"
            width="24px"
            height="24px"
            top="22px"
            right="16px"
          >
            {/* {isLoadingSearch && (
              <LoaderSpinner
                type={LOADER_TYPE.SEAMLESS}
                width="auto"
                spinnerSize={24}
                spinnerColor={theme.default.secondaryColor}
              />
            )} */}
            {searchedUser.length > 0 && <Clear onClick={clearInput} />}
            {searchedUser.length == 0 && (
              <SearchIcon
                style={{ cursor: 'pointer' }}
                onClick={() => {}}
              />
            )}
          </ItemVV2>
        </SearchBarContent>
      </SearchbarContainer>
      {searchResult > 0 ? (
        <MemberList marginTop="8px">
          <WalletProfileContainer background={theme.groupSearchProfilBackground}>
            <WalletProfile>
              <ImageV2
                src={Profile}
                width="48px"
                height="48px"
                borderRadius="48px"
                margin="0px 12px 0px 0px"
              />
              <SpanV2 color={theme.modalPrimaryTextColor}>0x12344...AD23S</SpanV2>
            </WalletProfile>
            {theme.scheme == 'light' ? <AddLight /> : <AddDark />}
          </WalletProfileContainer>
        </MemberList>
      ) : (
        <MemberList marginTop="16px">
          <WalletProfileContainer background={theme.groupSearchProfilBackground}>
            <WalletProfile>
              <ImageV2
                src={Profile}
                width="48px"
                height="48px"
                borderRadius="48px"
                margin="0px 12px 0px 0px"
              />
              <SpanV2 color={theme.modalPrimaryTextColor}>0x12344...AD23S</SpanV2>
            </WalletProfile>
            {theme.scheme == 'light' ? <RemoveLight /> : <RemoveDark />}
          </WalletProfileContainer>
          <WalletProfileContainer background={theme.groupSearchProfilBackground}>
            <WalletProfile>
              <ImageV2
                src={Profile}
                width="48px"
                height="48px"
                borderRadius="48px"
                margin="0px 12px 0px 0px"
              />
              <SpanV2 color={theme.modalPrimaryTextColor}>0x12344...AD23S</SpanV2>
            </WalletProfile>
            {theme.scheme == 'light' ? <RemoveLight /> : <RemoveDark />}
          </WalletProfileContainer>
        </MemberList>
      )}
      <ModalConfirmButton
        text="Create Group"
        onClick={() => {}}
        isLoading={isLoading}
        backgroundColor={completed ? '#CF1C84' : theme.groupButtonBackgroundColor}
        color={completed ? '#FFFFF' : theme.groupButtonTextColor}
        border={`1px solid ${theme.modalConfirmButtonBorder}`}
      />
    </ThemeProvider>
  );
};

const SearchbarContainer = styled(ItemVV2)`
  margin-bottom: 8px;
`;

const LabelContainer = styled(ItemHV2)`
  width: 100%;
  justify-content: space-between;
  margin: 0px;
  margin-bottom: 8px;
`;

const SearchBarContent = styled.form`
  position: relative;
  display: flex;
  flex: 1;
`;

const Input = styled.input`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  min-width: 445px;
  height: 48px;
  padding: 13px 60px 13px 21px;
  margin: 10px 0px 0px;
  border-radius: 99px;
  border: 1px solid transparent !important;
  background-color: ${(props) => props.theme.chat.snapFocusBg};
  color: ${(props) => props.color || '#000'};
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
  @media (max-width: 480px) {
    min-width: 300px;
  }
`;

const WalletProfileContainer = styled(ItemHV2)`
  padding: 8px;
  margin: 0px 0px 8px 0px;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
`;

const WalletProfile = styled(ItemHV2)`
  justify-content: flex-start;
`;

const MemberList = styled(ItemVV2)`
  margin-top: ${(props) => props.marginTop || '8px'};
  justify-content: 'flex-start';
`;
