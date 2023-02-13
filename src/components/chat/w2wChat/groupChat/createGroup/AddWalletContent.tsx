// React + Web3 Essentials
import React from 'react';
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';

// External Packages
import styled, { ThemeProvider, useTheme } from 'styled-components';

import { MdError } from 'react-icons/md';

// Internal Components
import ModalConfirmButton from 'primaries/SharedModalComponents/ModalConfirmButton';
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
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
import { shortenText } from 'helpers/UtilityHelper';

// Internal configs
import { appConfig } from 'config';
import MemberListContainer from './MemberListContainer';

export const AddWalletContent = ({ handleCreateGroup, memberList, handleMemberList }) => {
  const [searchedUser, setSearchedUser] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { chainId } = useWeb3React<ethers.providers.Web3Provider>();
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

  const addMemberToList = (member) => {
    handleMemberList((prev) => [...prev, member]);
    setFilteredUserData('');
  };

  const removeMemberFromList = (member) => {
    const filteredMembers = memberList.filter((user) => user.wallets !== member.wallets);
    handleMemberList(filteredMembers);
  };

  const handleSearch = async (e): Promise<void> => {
    e.preventDefault();
    console.log('Search');
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

  console.log("Filetered Data", filteredUserData);
  console.log("Member List Data", memberList)

  const clearInput = () => {
    setSearchedUser('');
    setFilteredUserData(null);
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
            {`${memberList?.length} / ${10 - memberList?.length} Members`}
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
            {searchedUser.length >= 0 && (
              <SearchIcon
                style={{ cursor: 'pointer' }}
                onClick={handleSearch}
              />
            )}
          </ItemVV2>
        </SearchBarContent>
      </SearchbarContainer>
      {filteredUserData ? (
        <MemberList marginTop="8px">

          <MemberListContainer
            memberData={filteredUserData}
            handleMemberList={handleMemberList}
            setFilteredUserData={setFilteredUserData}
            members={false}
          />


          {/* <WalletProfileContainer background={theme.groupSearchProfilBackground}>
            <WalletProfile>
              <ItemVV2
                width="48px"
                maxWidth="48px"
                borderRadius="100%"
                overflow="hidden"
                margin="0px 12px 0px 0px"
              >
                <ImageV2 src={filteredUserData?.profilePicture} />
              </ItemVV2>
              <SpanV2 color={theme.modalPrimaryTextColor}>
                {shortenText(filteredUserData.wallets.split(':')[1], 6)}
              </SpanV2>
            </WalletProfile>
            <ItemVV2
              alignItems="flex-end"
              maxWidth="30px"
              style={{ cursor: 'pointer' }}
              onClick={() => addMemberToList(filteredUserData)}>
              {theme.scheme == 'light' ? <AddLight /> : <AddDark />}
            </ItemVV2>
          </WalletProfileContainer> */}
        </MemberList>
      ) : (
        <MemberList marginTop="8px">
          {memberList.map((member, index) => (

            <MemberListContainer
              key={index}
              memberData={member}
              handleMemberList={handleMemberList}
              setFilteredUserData={setFilteredUserData}
              members={true}
              memberList={memberList}
            />




            // <WalletProfileContainer
            //   background={theme.groupSearchProfilBackground}
            //   key={index}
            // >
            //   <WalletProfile>
            //     <ItemVV2
            //       width="48px"
            //       maxWidth="48px"
            //       borderRadius="100%"
            //       overflow="hidden"
            //       margin="0px 12px 0px 0px"
            //     >
            //       <ImageV2 src={member?.profilePicture} />
            //     </ItemVV2>
            //     <SpanV2 color={theme.modalPrimaryTextColor}>{shortenText(member.wallets.split(':')[1], 6)}</SpanV2>
            //   </WalletProfile>
            //   <ItemVV2
            //     alignItems="flex-end"
            //     maxWidth="30px"
            //     style={{ cursor: 'pointer' }}
            //     onClick={() => removeMemberFromList(member)}
            //   >
            //     {' '}
            //     {theme.scheme == 'light' ? <RemoveLight /> : <RemoveDark />}
            //   </ItemVV2>
            // </WalletProfileContainer>
          ))}
        </MemberList>
      )}
      <ModalConfirmButton
        text="Create Group"
        onClick={() => handleCreateGroup()}
        isLoading={isLoading}
        backgroundColor={memberList?.length > 0 ? '#CF1C84' : theme.groupButtonBackgroundColor}
        color={theme.groupButtonTextColor}
        border={`1px solid ${theme.modalConfirmButtonBorder}`}
      />
    </ThemeProvider>
  );
};

const SearchbarContainer = styled(ItemVV2)`
  margin-bottom: 8px;
`;

const LabelContainer = styled(ItemHV2)`
  min-width: 445px;
  justify-content: space-between;
  margin: 0px;
  margin-bottom: 8px;
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
  min-width: 445px;
  box-sizing: border-box;
  align-items: center;
  border-radius: 16px;
  @media (max-width: 480px) {
    min-width: 300px;
  }
`;

const WalletProfile = styled(ItemHV2)`
  justify-content: flex-start;
`;

const MemberList = styled(ItemVV2)`
  margin-top: ${(props) => props.marginTop || '8px'};
  justify-content: 'flex-start';
`;
