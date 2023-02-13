// React + Web3 Essentials
import React, { useContext } from 'react';
import { useWeb3React } from '@web3-react/core';

// External Packages
import styled, { ThemeProvider, useTheme } from 'styled-components';
import { useClickAway } from 'react-use';
import { ethers } from 'ethers';
import * as PushAPI from "@pushprotocol/restapi";

// Internal Components
import { ModalInnerComponentType } from 'hooks/useModalBlur';
import { ReactComponent as Close } from 'assets/chat/group-chat/close.svg';
import { ReactComponent as Back } from 'assets/chat/arrowleft.svg';
import { GroupDetailsContent } from './GroupDetailsContent';
import { AddWalletContent } from './AddWalletContent';
import { ItemHV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import {ChatUserContext} from '../../../../../contexts/ChatUserContext';

export const CreateGroupModalContent = ({ onClose, onConfirm: createGroup, toastObject }: ModalInnerComponentType) => {
  const [createGroupState, setCreateGroupState] =  React.useState<number>(1);
  const [groupNameData, setGroupNameData] = React.useState<string>('');
  const [groupDescriptionData, setGroupDescriptionData] = React.useState<string>('');
  const [groupImageData, setGroupImageData] = React.useState<string>('');
  const [groupTypeObject, setGroupTypeObject] = React.useState<any>();
  const [memberList, setMemberList] = React.useState<any>([]);
  const {connectedUser} = useContext(ChatUserContext);
  const { account } = useWeb3React<ethers.providers.Web3Provider>();
  const themes = useTheme();

  const handlePrevious = () => {
    setCreateGroupState(1);
  };

  const handleClose = () => onClose();

  // to close the modal upon a click on backdrop
  const containerRef = React.useRef(null);
  useClickAway(containerRef, () => handleClose());

  const handleCreateGroup = async (): Promise<any> => {
    console.log(
      'Data\n groupname',
      groupNameData,
      '\ngroupDescription',
      groupDescriptionData,
      '\nmembers',
      memberList,
      '\ngroupImage',
      groupImageData,
      '\nisPublic',
      groupTypeObject.groupTypeData == 'public' ? true : false,
      '\ngroupCreator',
      account,
      '\naccount',
      account,
      '\npgpPrivateKey',
      connectedUser?.privateKey
    );
    try {
      const memberWalletList = memberList.map(member => member.wallets);
      const createGroupRes = await PushAPI.chat.createGroup({
        groupName: groupNameData,
        groupDescription: groupDescriptionData,
        members: memberWalletList,
        groupImage: groupImageData,
        admins: [],
        isPublic: groupTypeObject.groupTypeData == 'public' ? true : false,
        groupCreator: account!,
        account: account!,
        pgpPrivateKey: connectedUser?.privateKey,
      });
      console.log('createGroup Response', createGroupRes);
    } catch (e) {
      console.log('Error in creating group', e);
    }
  };
  return (
    <ThemeProvider theme={themes}>
      <ModalContainer
        background={themes.modalContentBackground}
        ref={containerRef}
      >
        <ItemHV2
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Back
            onClick={handlePrevious}
            style={{ cursor: 'pointer' }}
          />
          <SpanV2
            fontWeight="500"
            fontSize="24px"
            margin="0px 0px 42px 0px"
            color={themes.modalMessageColor}
          >
            Create Group
          </SpanV2>
          <Close
            onClick={() => handleClose()}
            style={{ cursor: 'pointer', marginTop: '8px' }}
          />
        </ItemHV2>
        {createGroupState == 1 && (
          <GroupDetailsContent
            groupNameData={groupNameData}
            createGroupState = {createGroupState}
            groupDescriptionData={groupDescriptionData}
            groupImageData = {groupImageData}
            groupTypeObject = {groupTypeObject}
            handleGroupNameData = {setGroupNameData}
            handleGroupDescriptionData = {setGroupDescriptionData}
            handleGroupImageData = {setGroupImageData}
            handleGroupTypeObject = {setGroupTypeObject}
            handleCreateGroupState = {setCreateGroupState}

          />
        )}
        {createGroupState == 2 && <AddWalletContent handleCreateGroup={handleCreateGroup} memberList = {memberList} handleMemberList = {setMemberList} />}
      </ModalContainer>
    </ThemeProvider>
  );
};

const ModalContainer = styled.div`
  max-height: 500px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${(props) => props.background};
  padding: 32px 24px;
  margin: 0px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;
