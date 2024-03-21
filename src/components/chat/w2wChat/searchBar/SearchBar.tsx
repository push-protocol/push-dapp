// React + Web3 Essentials

import React, { useContext, useEffect, useRef, useState } from 'react';

// External Packages
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@mui/icons-material/Add';
import styled, { useTheme } from 'styled-components';

// Internal Components
import { ReactComponent as SearchIcon } from 'assets/chat/search.svg';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ButtonV2, ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { Context } from 'modules/chat/ChatModule';
import { AppContext } from 'types/chat';
import ArrowLeft from '../../../../assets/chat/arrowleft.svg';

const SearchBar = ({ autofilled, searchedUser, setSearchedUser }) => {
  // get theme
  const theme = useTheme();

  const { setHasUserBeenSearched, activeTab, setActiveTab, userShouldBeSearched, setUserShouldBeSearched }: AppContext =
    useContext<AppContext>(Context);

  const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(false);

  useEffect(() => {
    if (searchedUser !== '' && userShouldBeSearched) {
      setSearchedUser(searchedUser);
      setUserShouldBeSearched(false);
    }
    return () => setUserShouldBeSearched(false);
  }, []);

  useEffect(() => {
    if (autofilled && !userShouldBeSearched) {
      if (autofilled.includes('chatid')) {
        setSearchedUser(autofilled.split(':')[1]);
      } else {
        setSearchedUser(autofilled);
      }
      submitSearch();
    }
  }, [userShouldBeSearched, autofilled]);

  const onChangeSearchBox = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    let searchAddress = event.target.value;

    if (searchAddress === '') {
      clearInput();
    } else {
      setSearchedUser(searchAddress);
    }
  };

  const submitSearch = (): void => {
    setActiveTab(3);
  };

  const clearInput = (): void => {
    setSearchedUser('');
    setHasUserBeenSearched(false);
    setIsLoadingSearch(false);
  };

  return (
    <ItemVV2
      alignItems="stretch"
      justifyContent="flex-start"
      flex="0"
    >
      {(activeTab === 3 || activeTab === 4) && (
        <ItemHV2
          justifyContent="flex-start"
          width="100%"
          flex="initial"
          margin="20px 0px 12px 0px"
          padding="0px 0px 14px 0px"
          style={{ borderBottom: '2px solid #D53893' }}
        >
          <ImageV2
            src={ArrowLeft}
            height="18px"
            width="22px"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setActiveTab(0);
              clearInput();
            }}
          />
          <SpanV2
            color="#D53893"
            margin="0px 0px 0px 7px"
          >
            {activeTab == 3 ? 'New Chat' : 'All Chats'}
          </SpanV2>
        </ItemHV2>
      )}
      <ItemHV2
        justifyContent="space-between"
        width="100%"
        flex="initial"
      >
        <ItemVV2
          alignItems="stretch"
          display={activeTab == 4 ? 'none' : 'flex'}
        >
          <Input
            type="text"
            onKeyUp={(e) => (e.key === 'Enter' ? submitSearch() : null)}
            value={searchedUser}
            onChange={onChangeSearchBox}
            placeholder="Search Web3 domain or 0x123..."
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
                onClick={submitSearch}
              />
            )}
          </ItemVV2>
        </ItemVV2>

        {activeTab !== 3 && activeTab !== 4 && (
          <ItemVV2
            flex="initial"
            margin="0px 0px 0px 10px"
            alignItems="center"
            width="48px"
            height="48px"
            top="10px"
            right="0px"
            zIndex="1"
          >
            <ButtonV2
              alignSelf="stretch"
              background="#D53893"
              hoverBackground="transparent"
              borderRadius="50%"
              onClick={() => setActiveTab(3)}
            >
              <AddIcon style={{ color: '#FFFFFF', fontSize: '24px', cursor: 'pointer' }} />
            </ButtonV2>
          </ItemVV2>
        )}
      </ItemHV2>
    </ItemVV2>
  );
};

const Input = styled.input`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  width: 100%;
  height: 48px;
  padding: 13px 60px 13px 21px;
  margin: 10px 0px 10px 0px;
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

export default SearchBar;
