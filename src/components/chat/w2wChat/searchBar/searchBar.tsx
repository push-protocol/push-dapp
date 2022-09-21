// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import { Web3Provider } from 'ethers/providers';
import React, { useContext, useState } from 'react';

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
import { ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import * as w2wChatHelper from 'helpers/w2w';
import { AppContext, Context } from 'sections/chat/ChatMainSection';
import MessageFeed from '../messageFeed/messageFeed';
import './searchBar.css';
import { MdError } from 'react-icons/md';

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

  const { setSearchedUser, searchedUser, hasUserBeenSearched, setHasUserBeenSearched }: AppContext =
    useContext<AppContext>(Context);
  const { chainId } = useWeb3React<Web3Provider>();
  const [filteredUserData, setFilteredUserData] = useState<User[]>([]);
  const [isInValidAddress, setIsInvalidAddress] = useState<boolean>(false);
  const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(false);
  const provider = ethers.getDefaultProvider();

  const onChangeSearchBox = async (event: React.ChangeEvent<HTMLInputElement>) => {
    let searchAddress = event.target.value;
    if (searchAddress === '') {
      clearInput();
    } else {
      setSearchedUser(searchAddress);
    }
  };

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

  const submitSearch = async (event: React.FormEvent) => {
    //!There is a case when the user enter a wallet Address less than the fixed length of the wallet address
    event.preventDefault();
    if (!ethers.utils.isAddress(searchedUser)) {
      setIsLoadingSearch(true);
      let ens:string
      try{
        ens = await provider.resolveName(searchedUser);
      if (ens) {
        const caip10 = w2wChatHelper.walletToCAIP10({ account: ens, chainId });
        const displayUser = displayDefaultUser({ caip10 });
        setHasUserBeenSearched(true);
        setFilteredUserData([displayUser]);
      }else{
        setIsInvalidAddress(true);
        setFilteredUserData([]);
        setHasUserBeenSearched(true);
      }
      }catch(err){
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
            const displayUser = displayDefaultUser({ caip10 });
            setHasUserBeenSearched(true);
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
            {!isLoadingSearch && <SearchIcon style={{ cursor: 'pointer' }} />}
          </ItemVV2>
        </SearchBarContent>
        <ItemVV2
          position="absolute"
          alignItems="center"
          width="48px"
          height="48px"
          top="10px"
          right="0px"
          background="#D53893"
          borderRadius="50%"
        >
          <AddIcon style={{ color: '#FFFFFF', fontSize: '24px' }} />
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
  width: 245px;
  height: 48px;
  padding: 13px 60px 13px 21px;
  margin: 10px 0px 17px 0px;
  border-radius: 99px;
  border: 1px solid transparent !important;
  background-color: ${(props) => props.theme.chat.snapFocusBg};
  color: ${(props) => props.theme.default.color || '#000'};
  &:focus {
    outline: none;
    background-image: linear-gradient(${(props) => props.theme.chat.snapFocusBg}, ${(props) => props.theme.chat.snapFocusBg}), linear-gradient(to right, #cf1c84, #8ed6ff);
    background-origin: border;
    border: 1px solid transparent !important;
    background-clip: padding-box, border-box;
  }
`;

export default SearchBar;
