// React + Web3 Essentials
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import React, { useContext, useEffect, useRef, useState } from 'react';

// External Packages
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@mui/icons-material/Add';
import { MdError } from 'react-icons/md';
import styled, { useTheme } from 'styled-components';

// Internal Components
import * as PushAPI from "@pushprotocol/restapi";
import { ReactComponent as SearchIcon } from 'assets/chat/search.svg';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ButtonV2, ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { appConfig } from 'config';
import { findObject } from 'helpers/UtilityHelper';
import * as w2wChatHelper from 'helpers/w2w';
import { displayDefaultUser } from 'helpers/w2w/user';
import useToast from 'hooks/useToast';
import { Context } from 'modules/chat/ChatModule';
import { getGroup } from 'services/chats/getGroup';
import { getGroupbyChatId } from 'services/chats/getGroupByChatId';
import { getGroupByName } from 'services/chats/getGroupByName';
import { AppContext, IGroup, User } from 'types/chat';
import ArrowLeft from '../../../../assets/chat/arrowleft.svg';
import MessageFeed from '../messageFeed/MessageFeed';
import { getUdResolver } from 'helpers/w2w/udResolver';

const SearchBar = ({ autofilled }) => {
  // get theme
  const theme = useTheme();

  const {
    hasUserBeenSearched,
    setHasUserBeenSearched,
    activeTab,
    setActiveTab,
    userShouldBeSearched,
    setUserShouldBeSearched,
    filteredUserData,
    setFilteredUserData,
    inbox,
  }: AppContext = useContext<AppContext>(Context);
  const { library } = useWeb3React();
  const { chainId } = useWeb3React<Web3Provider>();
  const [searchedUser, setSearchedUser] = useState<string>('');
  const [isInValidAddress, setIsInvalidAddress] = useState<boolean>(false);
  const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(false);
  const provider = new ethers.providers.InfuraProvider(appConfig.coreContractChain, appConfig.infuraAPIKey);
  const udResolver = getUdResolver();
  const searchFeedToast = useToast();


  if (autofilled) {
    // console.log("Search is autofilled:", autofilled);
  }

  useEffect(() => {
    if (searchedUser !== '' && userShouldBeSearched) {
      handleSearch();
      setUserShouldBeSearched(false);
    }
    return () => setUserShouldBeSearched(false);
  }, []);

  useEffect(() => {
    if (autofilled && !userShouldBeSearched) {
      // automate search
      // setSearchedUser(autofilled);

      // const event = new KeyboardEvent('keypress', {
      //   key: 'enter',
      // });
      // console.log("in search")
      submitSearch(null, autofilled);
    }
  }, [userShouldBeSearched, autofilled]);

  useEffect(() => {
    if (isInValidAddress) {
      searchFeedToast.showMessageToast({
        toastTitle: 'Error',
        toastMessage: 'Invalid Search',
        toastType: 'ERROR',
        getToastIcon: (size) => (
          <MdError
            size={size}
            color="red"
          />
        ),
      });

      if (activeTab == 4) {
        setActiveTab(0);
      }
    }
  }, [isInValidAddress]);

  const onChangeSearchBox = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    let searchAddress = event.target.value;
    if (searchAddress === '') {
      clearInput();
    } else {
      setSearchedUser(searchAddress);
    }
  };

  const submitSearch = (event: React.FormEvent | null, autoSearch: string = null): void => {
    if (autoSearch) {
      //!There is a case when the user enter a wallet Address less than the fixed length of the wallet address
      if (autoSearch.includes('chatid')) {
        handleSearch(autoSearch.split(':')[1]);
      }
      else {
        handleSearch(autoSearch);
      }

    } else {
      //!There is a case when the user enter a wallet Address less than the fixed length of the wallet address
      event.preventDefault();
      handleSearch();
    }

  };

  const setInvalidSearch = () => {
    setIsInvalidAddress(true);
    setFilteredUserData([]);
    setHasUserBeenSearched(true);
  }
  const handleSearch = async (autoSearch: string = null): Promise<void> => {
    let searchText = autoSearch ? autoSearch : searchedUser;
    setIsInvalidAddress(false);

    if (!ethers.utils.isAddress(searchText)) {
      setIsLoadingSearch(true);
      let address: string;
      let group: IGroup;

      if (searchText.includes('.')) {
        try {
          // address = await provider.resolveName(searchText);
          // if (!address) {
          //   address = await library.resolveName(searchText);
          // }

          address =
            (await provider.resolveName(searchText)) ||
            (await library.resolveName(searchText)) ||
            (await udResolver.owner(searchText));


        } catch (err) {
          setInvalidSearch();
        }
      }
      else {
        group = await getGroup(searchText, setInvalidSearch);
      }

      // this ensures address are checksummed

      if (address) {
        address = ethers.utils.getAddress(address?.toLowerCase());
        handleUserSearch({ userSearchData: address });
      } else if (group) {
        handleUserSearch({ groupSearchData: group });
      }
      else if (!group && !address) {
        setInvalidSearch();
      }
    } else {
      await handleUserSearch({ userSearchData: searchText });
    }
    setIsLoadingSearch(false);
  };

  //this function needs some optimisation
  const handleUserSearch = async ({ userSearchData, groupSearchData }: { userSearchData?: string, groupSearchData?: IGroup }): Promise<void> => {
    setIsLoadingSearch(true);
    let filteredData: User;
    setHasUserBeenSearched(true);

    if (userSearchData) {
      const caip10 = w2wChatHelper.walletToCAIP10({ account: userSearchData });
      filteredData = await PushAPI.user.get({
        account: caip10,
        env: appConfig.appEnv
      });
      // Checking whether user already present in contact list
      let isUserConnected = findObject(filteredData, inbox, 'did');

      if (filteredData !== null && isUserConnected) {
        if (activeTab !== 0) {
          setUserShouldBeSearched(true);
          if (autofilled) {
            setActiveTab(4);
          } else {
            setActiveTab(0);
          }
        }
        setFilteredUserData([filteredData]);
        setSearchedUser('');
      } else if (ethers.utils.isAddress(userSearchData)) {
        setUserShouldBeSearched(true);
        if (autofilled) {
          setActiveTab(4);
        } else {
          setActiveTab(3);
        }
        const displayUser = displayDefaultUser({ caip10 });
        setFilteredUserData([displayUser]);
        setSearchedUser('');
      } else {
        setIsInvalidAddress(true);
        setFilteredUserData([]);
      }
      // User is not in the protocol. Create new user
    } else {
      if (groupSearchData) {
        const isGroupInInbox = inbox.find((inb) => inb?.groupInformation?.chatId === groupSearchData.chatId);
        if (isGroupInInbox) {
          if (activeTab != 0) {
            setUserShouldBeSearched(true);
            //check if in inbox
            if (autofilled) {
              setActiveTab(4);
            } else {
              setActiveTab(3);
            }
          }
        } else {
          setUserShouldBeSearched(true);
          //check if in inbox
          if (autofilled) {
            setActiveTab(4);
          } else {
            setActiveTab(3);
          }
        }
        setFilteredUserData([groupSearchData]);
        setSearchedUser('');
      } else {
        setIsInvalidAddress(true);
        setFilteredUserData([]);
      }
    }
  };

  const clearInput = (): void => {
    setFilteredUserData([]);
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
          <SearchBarContent onSubmit={submitSearch}>
            <Input
              type="text"
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
          </SearchBarContent>
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

      {isLoadingSearch ? (
        <ItemVV2
          flex="initial"
          margin={activeTab == 4 ? '10px' : '0px'}
          alignItems="center"
        >
          <LoaderSpinner
            type={LOADER_TYPE.SEAMLESS}
            spinnerSize={40}
          />
        </ItemVV2>
      ) : (
        filteredUserData.length > 0 && (
          <MessageFeed
            hasUserBeenSearched={activeTab !== 3 && activeTab !== 4 ? hasUserBeenSearched : true}
            filteredUserData={filteredUserData}
            isInvalidAddress={isInValidAddress}
            automatedSearch={autofilled ? true : false}
          />
        )
      )}
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

export default SearchBar;
