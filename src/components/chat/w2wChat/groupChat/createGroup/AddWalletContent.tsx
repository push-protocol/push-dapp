// React + Web3 Essentials
import React from 'react';
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';

// External Packages
import styled, { ThemeProvider, useTheme } from 'styled-components';
import { MdError } from 'react-icons/md';

// Internal Components
import ModalConfirmButton from 'primaries/SharedModalComponents/ModalConfirmButton';
import {  ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { ReactComponent as SearchIcon } from 'assets/chat/search.svg';
import { ReactComponent as Clear } from 'assets/chat/group-chat/close.svg';
import { ReactComponent as AddDark } from 'assets/chat/group-chat/adddark.svg';
import { ReactComponent as RemoveLight } from 'assets/chat/group-chat/removelight.svg';
import { ReactComponent as RemoveDark } from 'assets/chat/group-chat/removedark.svg';
import { ReactComponent as AddLight } from 'assets/chat/group-chat/addlight.svg';
import { displayDefaultUser } from 'helpers/w2w/user';
import * as w2wChatHelper from 'helpers/w2w';
import * as PushNodeClient from 'api';
import useToast from 'hooks/useToast';

// Internal configs
import { appConfig } from 'config';
import MemberListContainer from './MemberListContainer';
import { User } from '../../../../../types/chat';
import { findObject } from '../../../../../helpers/UtilityHelper';

export const AddWalletContent = ({ handleCreateGroup, memberList, handleMemberList,isLoading }) => {
  const [searchedUser, setSearchedUser] = React.useState<string>('');
  const { chainId, account } = useWeb3React<ethers.providers.Web3Provider>();
  const [filteredUserData, setFilteredUserData] = React.useState<any>(null);
  const [isInValidAddress, setIsInvalidAddress] = React.useState<boolean>(false);
  const provider = new ethers.providers.InfuraProvider(appConfig.coreContractChain, appConfig.infuraAPIKey);
  const { library } = useWeb3React();

  const theme = useTheme();
  const searchFeedToast = useToast();

  React.useEffect(() => {
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

  const onChangeSearchBox = (e) => {
    setSearchedUser(e.target.value);
  };


  const handleSearch = async (e): Promise<void> => {
    e.preventDefault();
    if (!ethers.utils.isAddress(searchedUser)) {
      let address: string;
      try {
        address = await provider.resolveName(searchedUser);
        if (!address) {
          address = await library.resolveName(searchedUser);
        }
        // this ensures address are checksummed
        address = ethers.utils.getAddress(address.toLowerCase());
        if (address) {
          handleUserSearch(address);
        } else {
          setIsInvalidAddress(true);
          setFilteredUserData(null);
        }
      } catch (err) {
        setIsInvalidAddress(true);
        setFilteredUserData(null);
      }
    } else {
      handleUserSearch(searchedUser);
    }
  };

  const handleUserSearch = async (userSearchData: string): Promise<void> => {
    const caip10 = w2wChatHelper.walletToCAIP10({ account: userSearchData, chainId });
    let filteredData: User;

    if (userSearchData.length) {
      filteredData = await PushNodeClient.getUser({ caip10 });

      if (filteredData !== null) {
        setFilteredUserData(filteredData);
      }
      // User is not in the protocol. Create new user
      else {
        if (ethers.utils.isAddress(userSearchData)) {
          const displayUser = displayDefaultUser({ caip10 });
          setFilteredUserData(displayUser);
        } else {
          setIsInvalidAddress(true);
          setFilteredUserData(null);
        }
      }
    } else {
      setFilteredUserData(null);
    }
  };


  const clearInput = () => {
    setSearchedUser('');
    setFilteredUserData(null);
  };

  const addMemberToList = (member: User) => {
    let errorMessage = '';

    if (memberList?.length >= 9) {
      errorMessage = 'No More Addresses can be added'
    }

    if (findObject(member, memberList, 'wallets')) {
      errorMessage = 'Address is already added'
    }

    if(member?.wallets === w2wChatHelper.walletToCAIP10({account})){
      errorMessage = 'Group Creator cannot be added as Member'
    }

    if (errorMessage) {
      searchFeedToast.showMessageToast({
        toastTitle: 'Error',
        toastMessage: `${errorMessage}`,
        toastType: 'ERROR',
        getToastIcon: (size) => (
          <MdError
            size={size}
            color="red"
          />
        ),
      });
    } else {
      handleMemberList((prev) => [...prev,member]);
    }

    setFilteredUserData('');
    clearInput();
  };

  const removeMemberFromList = (member: User) => {
    const filteredMembers = memberList.filter((user) => user.wallets !== member.wallets);
    handleMemberList(filteredMembers);
  };



  return (
    <ThemeProvider theme={theme}>
      <Container>
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
              {`0${memberList?.length} / 09 Members`}
            </SpanV2>
          </LabelContainer>
          <SearchBarContent onSubmit={handleSearch}>
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
              width="40px"
              height="24px"
              top="22px"
              right="16px"
            >
              {searchedUser.length > 0 && <Clear onClick={clearInput} />}
              {searchedUser.length == 0 && !filteredUserData && (
                <SearchIcon
                  style={{ cursor: 'pointer' }}
                />
              )}
            </ItemVV2>
          </SearchBarContent>
        </SearchbarContainer>
        {filteredUserData ? (
          <MemberList >

            <MemberListContainer
              memberData={filteredUserData}
              handleMemberList={addMemberToList}
              lightIcon={<AddLight />}
              darkIcon={<AddDark />}
            />

          </MemberList>
        ) : (
          <MultipleMemberList >
            {memberList.map((member, index) => (

              <MemberListContainer
                key={index}
                memberData={member}
                handleMemberList={removeMemberFromList}
                lightIcon={<RemoveLight />}
                darkIcon={<RemoveDark />}
              />

            ))}
          </MultipleMemberList>
        )}
        <ModalConfirmButton
          text="Create Group"
          onClick={() => handleCreateGroup()}
          isLoading={isLoading}
          loaderTitle = "Creating group"
          backgroundColor={memberList?.length > 0 ? '#CF1C84' : theme.groupButtonBackgroundColor}
          color={memberList?.length > 0 ? '#FFF'  : theme.groupButtonTextColor}
          border={memberList?.length > 0 ? "none" : `1px solid ${theme.modalConfirmButtonBorder}`}
          topMargin="60px"
        />

      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  margin-top:62px;
`;

const SearchbarContainer = styled(ItemVV2)`
  margin-bottom: 8px;
`;

const LabelContainer = styled(ItemHV2)`
  min-width: 445px;
  justify-content: space-between;
  margin: 0px;
  margin-bottom: 6px;
  @media (max-width: 480px) {
    min-width: 300px;
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
  min-width: 445px;
  height: 48px;
  padding: 0px 50px 0px 16px;
  margin: 10px 0px 0px;
  border-radius: 99px;
  border: 1px solid ;
  border-color:${(props)=>props.theme.modalSearchBarBorderColor};
  background: ${(props) => props.theme.modalSearchBarBackground};
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
    min-width: 337px;
  }
`;


const MemberList = styled(ItemVV2)`
  justify-content: 'flex-start';
  padding: 0px 2px;
`;


const MultipleMemberList = styled.div`
  overflow-y:auto;
  height:fit-content;
  max-height:216px;
  padding: 0px 2px;
  overflow-x:hidden;

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.scrollBg};
  }

  &::-webkit-scrollbar {
    background-color: ${(props) => props.theme.scrollBg};
    width: 6px;
  }

  @media (max-width: 768px) {
    padding: 0px 0px 0px 0px;
    max-height:35vh;

    &::-webkit-scrollbar-track {
      background-color: none;
      border-radius: 9px;
    }
  
    &::-webkit-scrollbar {
      background-color: none;
      width: 4px;
    }
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0.44,  #CF1C84),
      color-stop(0.72, #CF1C84),
      color-stop(0.86, #CF1C84)
    );
  }


`;
