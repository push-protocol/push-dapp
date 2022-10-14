// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import { Web3Provider } from 'ethers/providers';
import React, { useContext, useEffect, useState } from 'react';

// External Packages
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import FadeLoader from 'react-spinners/FadeLoader';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import * as PushNodeClient from 'api';
import { User } from 'api';
import { ReactComponent as SearchIcon } from 'assets/chat/search.svg';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ButtonV2, ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import * as w2wChatHelper from 'helpers/w2w';
import { MdError } from 'react-icons/md';
import { AppContext, Context } from 'sections/chat/ChatMainSection';
import MessageFeed from '../messageFeed/MessageFeed';
import './SearchBar.css';

// Internal Configs

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps): JSX.Element => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3, padding: '0px' }}>{children}</Box>}
    </div>
  );
};

const SearchBar = () => {
  // get theme
  const theme = useTheme();

  const {
    setSearchedUser,
    searchedUser,
    hasUserBeenSearched,
    setHasUserBeenSearched,
    setActiveTab,
    userShouldBeSearched,
    setUserShouldBeSearched,
  }: AppContext = useContext<AppContext>(Context);
  const { chainId } = useWeb3React<Web3Provider>();
  const [filteredUserData, setFilteredUserData] = useState<User[]>([]);
  const [isInValidAddress, setIsInvalidAddress] = useState<boolean>(false);
  const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(false);
  const provider = ethers.getDefaultProvider();

  useEffect(() => {
    if (searchedUser !== '' && userShouldBeSearched) {
      handleSearch();
      setUserShouldBeSearched(false);
    }
  }, []);

  const onChangeSearchBox = async (event: React.ChangeEvent<HTMLInputElement>) => {
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
      setIsLoadingSearch(true);
      let ens: string;
      try {
        const address = await provider.resolveName(searchedUser);
        // this ensures address are checksummed
        ens = ethers.utils.getAddress(address.toLowerCase());
        let filteredData: User;
        if (ens) {
          const caip10 = w2wChatHelper.walletToCAIP10({ account: ens, chainId });
          filteredData = await PushNodeClient.getUser({ caip10 });
          if (filteredData !== null) {
            setHasUserBeenSearched(true);
            setFilteredUserData([filteredData]);
          } else {
            setHasUserBeenSearched(true);
            setUserShouldBeSearched(true);
            setActiveTab(3);
          }
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
      setIsLoadingSearch(true);
      const caip10 = w2wChatHelper.walletToCAIP10({ account: searchedUser, chainId });
      let filteredData: User;
      setHasUserBeenSearched(true);
      if (searchedUser.length) {
        filteredData = await PushNodeClient.getUser({ caip10 });
        if (filteredData !== null) {
          setFilteredUserData([filteredData]);
        }
        // User is not in the protocol. Create new user
        else {
          if (ethers.utils.isAddress(searchedUser)) {
            setHasUserBeenSearched(true);
            setUserShouldBeSearched(true);
            setActiveTab(3);
          } else {
            setIsInvalidAddress(true);
            setFilteredUserData([]);
          }
        }
      } else {
        setFilteredUserData([]);
      }
    }
    setIsLoadingSearch(false);
  };

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
      </ItemHV2>
      <ItemVV2 justifyContent="flex-start">
        <MessageFeed
          hasUserBeenSearched={hasUserBeenSearched}
          filteredUserData={filteredUserData}
          isInvalidAddress={isInValidAddress}
        />
      </ItemVV2>
    </ItemVV2>
  );
};

const SearchBarContent = styled.form`
  position: relative;
  display: flex;
  flex: 1;
`;

const Close = styled(CloseIcon)`
  position: absolute;
  top: 23px;
  right: 55px;
  cursor: pointer;
`;

const SearchLoader = styled.div`
  position: absolute;
  top: 20px;
  right: 15px;
  height: 25px;
  width: 20px;
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
