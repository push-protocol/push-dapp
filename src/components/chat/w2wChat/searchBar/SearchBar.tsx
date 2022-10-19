// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import { Web3Provider } from 'ethers/providers';
import React, { useContext, useEffect, useState } from 'react';

// External Packages
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import * as PushNodeClient from 'api';
import { Feeds, User } from 'api';
import { ReactComponent as SearchIcon } from 'assets/chat/search.svg';
import ArrowLeft from '../../../../assets/chat/arrowleft.svg';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ButtonV2, ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import useToast from 'hooks/useToast';
import * as w2wChatHelper from 'helpers/w2w';
import { MdError } from 'react-icons/md';
import { AppContext, Context } from 'sections/chat/ChatMainSection';
import MessageFeed from '../messageFeed/MessageFeed';
import './SearchBar.css';

const SearchBar = () => {
  // get theme
  const theme = useTheme();

  const {
    setSearchedUser,
    searchedUser,
    hasUserBeenSearched,
    setHasUserBeenSearched,
    activeTab,
    setActiveTab,
    userShouldBeSearched,
    setUserShouldBeSearched,
    inbox,
  }: AppContext = useContext<AppContext>(Context);
  const { chainId } = useWeb3React<Web3Provider>();
  const [filteredUserData, setFilteredUserData] = useState<User[]>([]);
  const [isInValidAddress, setIsInvalidAddress] = useState<boolean>(false);
  const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(false);
  const provider = ethers.getDefaultProvider();
  const searchFeedToast = useToast();

  useEffect(() => {
    if (searchedUser !== '' && userShouldBeSearched) {
      handleSearch();
      setUserShouldBeSearched(false);
    }
    return () => setUserShouldBeSearched(false);
  }, []);

  useEffect(() => {
    if (isInValidAddress) {
      searchFeedToast.showMessageToast({
        toastTitle: 'Error',
        toastMessage: 'Invalid Address',
        toastType: 'ERROR',
        getToastIcon: (size) => (
          <MdError
            size={size}
            color="red"
          />
        ),
      });
    }
  }, [isInValidAddress]);

  const displayDefaultUser = ({ caip10 }: { caip10: string }): User => {
    const profilePicture = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAvklEQVR4AcXBsW2FMBiF0Y8r3GQb6jeBxRauYRpo4yGQkMd4A7kg7Z/GUfSKe8703fKDkTATZsJsrr0RlZSJ9r4RLayMvLmJjnQS1d6IhJkwE2bT13U/DBzp5BN73xgRZsJMmM1HOolqb/yWiWpvjJSUiRZWopIykTATZsJs5g+1N6KSMiO1N/5DmAkzYTa9Lh6MhJkwE2ZzSZlo7xvRwson3txERzqJhJkwE2bT6+JhoKTMJ2pvjAgzYSbMfgDlXixqjH6gRgAAAABJRU5ErkJggg==`;
    const userCreated: User = {
      did: caip10,
      wallets: caip10,
      publicKey: 'temp',
      profilePicture: profilePicture,
      encryptedPrivateKey: 'temp',
      encryptionType: 'temp',
      signature: 'temp',
      sigType: 'temp',
      about: null,
      name: null,
      numMsg: 1,
      allowedNumMsg: 100,
      linkedListHash: null,
    };
    return userCreated;
  };

  const onChangeSearchBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    let searchAddress = event.target.value;
    if (searchAddress === '') {
      clearInput();
    } else {
      setSearchedUser(searchAddress);
    }
  };

  const submitSearch = (event: React.FormEvent) => {
    //!There is a case when the user enter a wallet Address less than the fixed length of the wallet address
    event.preventDefault();
    handleSearch();
  };

  const handleSearch = async () => {
    if (!ethers.utils.isAddress(searchedUser)) {
      // Search for ens name
      setIsLoadingSearch(true);
      let ens: string;
      try {
        const address = await provider.resolveName(searchedUser);
        // this ensures address are checksummed
        ens = ethers.utils.getAddress(address.toLowerCase());
        if (ens) {
          handleUserSearch(ens);
        } else {
          setIsInvalidAddress(true);
          setFilteredUserData([]);
          setHasUserBeenSearched(true);
        }
      } catch (err) {
        setIsInvalidAddress(true);
        setFilteredUserData([]);
        setHasUserBeenSearched(true);
      }
    } else {
      // Search for wallet address
      handleUserSearch(searchedUser);
    }
    setIsLoadingSearch(false);
  };

  async function handleUserSearch(userSearchData) {
    setIsLoadingSearch(true);
    const caip10 = w2wChatHelper.walletToCAIP10({ account: userSearchData, chainId });
    let filteredData: User;
    setHasUserBeenSearched(true);

    if (userSearchData.length) {
      filteredData = await PushNodeClient.getUser({ caip10 });
      // Checking whether user already present in contact list
      let isUserConnected = checkIsUserConnected(filteredData);

      if (filteredData !== null && isUserConnected) {
        if (activeTab !== 0) {
          setUserShouldBeSearched(true);
          setActiveTab(0);
        }
        setFilteredUserData([filteredData]);
      }
      // User is not in the protocol. Create new user
      else {
        if (ethers.utils.isAddress(userSearchData)) {
          setUserShouldBeSearched(true);
          setActiveTab(3);
          const displayUser = displayDefaultUser({ caip10 });
          setFilteredUserData([displayUser]);
        } else {
          setIsInvalidAddress(true);
          setFilteredUserData([]);
        }
      }
    } else {
      setFilteredUserData([]);
    }
  }

  function checkIsUserConnected(userData: User): boolean {
    let isPresent = false;
    inbox.map((user) => {
      if (user?.did == userData?.did) {
        isPresent = true;
      }
    });
    return isPresent;
  }

  const clearInput = () => {
    setFilteredUserData([]);
    setSearchedUser('');
    setHasUserBeenSearched(false);
    setIsLoadingSearch(false);
  };

  return (
    <ItemVV2
      alignItems="stretch"
      justifyContent="flex-start"
    >
      {activeTab === 3 && (
        <ItemHV2
          justifyContent="flex-start"
          width="100%"
          flex="initial"
          margin="20px 0px 0px 0px"
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
            New Chat
          </SpanV2>
        </ItemHV2>
      )}
      <ItemHV2
        justifyContent="space-between"
        width="100%"
        flex="initial"
      >
        <SearchBarContent onSubmit={submitSearch}>
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
                onClick={submitSearch}
              />
            )}
          </ItemVV2>
        </SearchBarContent>

        {activeTab !== 3 && (
          <ItemVV2
            flex="initial"
            margin="0px 0px 0px 10px"
            alignItems="center"
            width="48px"
            height="48px"
            top="10px"
            right="0px"
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
      <ItemVV2 justifyContent="flex-start">
        {isLoadingSearch ? (
          <LoaderSpinner
            type={LOADER_TYPE.SEAMLESS}
            spinnerSize={40}
          />
        ) : (
          <MessageFeed
            hasUserBeenSearched={activeTab !== 3 ? hasUserBeenSearched : true}
            filteredUserData={filteredUserData}
            isInvalidAddress={isInValidAddress}
          />
        )}
      </ItemVV2>
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
      linear-gradient(to right, #cf1c84, #8ed6ff);
    background-origin: border;
    border: 1px solid transparent !important;
    background-clip: padding-box, border-box;
  }
`;

export default SearchBar;
