// React + Web3 Essentials
import React, { useContext, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import { Web3Provider } from 'ethers/providers';

// External Packages
import styled, { useTheme } from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

// Internal Components
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import ArrowLeft from '../../../../assets/chat/arrowleft.svg';
import { ReactComponent as SearchIcon } from 'assets/chat/search.svg';
import * as PushNodeClient from 'api';
import { Feeds, User } from 'api';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import * as w2wChatHelper from 'helpers/w2w';
import { caip10ToWallet } from 'helpers/w2w';

import { Context } from 'modules/chat/ChatModule';

function NewUser() {
  const theme = useTheme();

  const {
    setChat,
    setSearchedUser,
    searchedUser,
    hasUserBeenSearched,
    setHasUserBeenSearched,
    setActiveTab,
    userShouldBeSearched,
    setUserShouldBeSearched,
  } = useContext(Context);

  const { chainId } = useWeb3React<Web3Provider>();
  const [searchedUserData, setSearchedUserData] = useState<User[]>([]);
  const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(false);
  const [isInvalidAddress, setIsInvalidAddress] = useState<boolean>(false);
  const [messagesLoading, setMessagesLoading] = useState<boolean>(false);
  const [feeds, setFeeds] = useState<Feeds[]>([]);
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

  const submitSearch = (event: React.FormEvent) => {
    //!There is a case when the user enter a wallet Address less than the fixed length of the wallet address
    event.preventDefault();
    handleSearch();
  };

  const handleSearch = async () => {
    if (!ethers.utils.isAddress(searchedUser)) {
      setMessagesLoading(true);
      setIsLoadingSearch(true);
      let ens: string;
      try {
        const address = await provider.resolveName(searchedUser);
        // this ensures address are checksummed
        ens = ethers.utils.getAddress(address.toLowerCase());

        if (ens) {
          const caip10 = w2wChatHelper.walletToCAIP10({ account: ens, chainId });
          let filteredData: User;
          filteredData = await PushNodeClient.getUser({ caip10 });
          if (filteredData !== null) {
            setHasUserBeenSearched(true);
            setUserShouldBeSearched(true);
            setActiveTab(0);
          } else {
            const displayUser = displayDefaultUser({ caip10 });
            setFeed(displayUser);
            setHasUserBeenSearched(true);
          }
        } else {
          setIsInvalidAddress(true);
          setSearchedUserData([]);
          setHasUserBeenSearched(true);
        }
      } catch (err) {
        setIsInvalidAddress(true);
        setSearchedUserData([]);
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
          setHasUserBeenSearched(true);
          setUserShouldBeSearched(true);
          setActiveTab(0);
        }
        // User is not in the protocol. Create new user
        else {
          if (ethers.utils.isAddress(searchedUser)) {
            const displayUser = displayDefaultUser({ caip10 });
            setFeed(displayUser);
            setHasUserBeenSearched(true);
            setMessagesLoading(false);
          } else {
            setIsInvalidAddress(true);
            setSearchedUserData([]);
          }
        }
      } else {
        setSearchedUserData([]);
      }
    }
    setIsLoadingSearch(false);
    setMessagesLoading(false);
  };

  function setFeed(displayUser: User) {
    let feed: Feeds;
    feed = {
      msg: {
        name: displayUser.wallets.split(',')[0].toString(),
        profilePicture: displayUser.profilePicture,
        lastMessage: null,
        timestamp: null,
        messageType: null,
        signature: null,
        signatureType: null,
        encType: null,
        encryptedSecret: null,
        fromDID: null,
        toDID: null,
      },
      wallets: displayUser.wallets,
      did: displayUser.did,
      threadhash: null,
      profilePicture: displayUser.profilePicture,
      about: displayUser.about,
      intent: null,
      intentSentBy: null,
      intentTimestamp: null,
      publicKey: displayUser.publicKey,
      combinedDID: null,
      cid: null,
    };
    setFeeds([feed]);
  }

  const clearInput = () => {
    setSearchedUserData([]);
    setFeeds([]);
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
          onClick={() => setActiveTab(0)}
        />
        <SpanV2
          color="#D53893"
          margin="0px 0px 0px 7px"
        >
          New Chat
        </SpanV2>
      </ItemHV2>
      <ItemHV2
        justifyContent="center"
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
              top="32px"
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
            top="32px"
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
      </ItemHV2>
      <ItemVV2
        alignItems="stretch"
        justifyContent="flex-start"
      >
        {messagesLoading ? (
          <LoaderSpinner
            type={LOADER_TYPE.SEAMLESS}
            spinnerSize={40}
          />
        ) : (
          <>
            {feeds?.map((feed: Feeds, i) => {
              return (
                <ProfileCard
                  padding="10px"
                  background={theme.chat.snapFocusBg}
                  onClick={() => setChat(feed)}
                  key={feed.threadhash || i}
                >
                  <ImageV2
                    src={feed.profilePicture}
                    alt="UserProfile"
                    height="48px"
                    width="48px"
                    borderRadius="50%"
                    margin="0px 13px 0px 0px"
                  />
                  <SpanV2
                    fontSize="17px"
                    fontWeight="500"
                    color={theme.default.color}
                  >
                    {caip10ToWallet(feed.wallets.split(',')[0].toString()).slice(0, 8) +
                      '...' +
                      caip10ToWallet(feed.wallets.split(',')[0].toString()).slice(-7)}
                  </SpanV2>
                </ProfileCard>
              );
            })}
          </>
        )}
      </ItemVV2>
    </ItemVV2>
  );
}

const ProfileCard = styled(ItemHV2)`
  min-height: 73px;
  flex: initial;
  justify-content: flex-start;
  position: relative;
  border-radius: 16px;
  margin-bottom: 10px;
  left: 0;
  right: 0;
  &:hover {
    background-color: ${(props) => props.background || 'transparent'};
    cursor: pointer;
  }
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
  width: 0;
  height: 48px;
  padding: 13px 60px 13px 21px;
  margin: 20px 0px 17px 0px;
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

export default NewUser;
