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
import { ChatUserContext } from '../../../../../contexts/ChatUserContext';
import { appConfig } from '../../../../../config';
import useToast from 'hooks/useToast';
import { MdCheckCircle, MdError } from 'react-icons/md';

export const CreateGroupModalContent = ({ onClose, onConfirm: createGroup, toastObject }: ModalInnerComponentType) => {
  const [createGroupState, setCreateGroupState] = React.useState<number>(1);
  const [groupNameData, setGroupNameData] = React.useState<string>('');
  const [groupDescriptionData, setGroupDescriptionData] = React.useState<string>('');
  const [groupImageData, setGroupImageData] = React.useState<string>('');
  const [groupTypeObject, setGroupTypeObject] = React.useState<any>();
  const [memberList, setMemberList] = React.useState<any>([]);
  const { connectedUser } = useContext(ChatUserContext);
  const { account } = useWeb3React<ethers.providers.Web3Provider>();
  const themes = useTheme();
  const createGroupToast = useToast();


  const handlePrevious = () => {
    setCreateGroupState(1);
  };

  const handleClose = () => onClose();

  // to close the modal upon a click on backdrop
  const containerRef = React.useRef(null);
  useClickAway(containerRef, () => handleClose());

  const handleCreateGroup = async (): Promise<any> => {
    console.log("Member list",memberList);
    try {
      const memberWalletList = memberList.map(member => member.wallets);
      const createGroupRes = await PushAPI.chat.createGroup({
        groupName: groupNameData,
        groupDescription: groupDescriptionData,
        members: memberWalletList,
        groupImage: groupImageData,
        admins: [],
        isPublic: groupTypeObject.groupTypeData == 'public' ? true : false,
        account: account!,
        pgpPrivateKey: connectedUser?.privateKey,
        env: appConfig.appEnv
      });
      if (typeof createGroupRes !== 'string') {
        createGroupToast.showMessageToast({
          toastTitle: 'Success',
          toastMessage: 'Group created successfully',
          toastType: 'SUCCESS',
          getToastIcon: (size) => (
            <MdCheckCircle
              size={size}
              color="green"
            />
          ),
        });
        handleClose();
      } else {
        createGroupToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: 'Unable to create group',
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });
        handleClose();
      }

    } catch (e) {
      console.log('Error in creating group', e);
    }
  };
  return (
    <ThemeProvider theme={themes}>
      <ModalContainer
        // background={themes.modalContentBackground}
        // ref={containerRef}
        style={{
          padding: createGroupState == 2 ? "20px 17px 32px" : "20px 6px 32px"
        }}
      >
        {/* This below one is displayed only for the first page where user gets input fields */}
        {createGroupState == 1 && (
          <ItemHV2
          justifyContent={"center"}
          // margin="0px 0px 62px 0px"
          align-items="center"

        >
          <SpanV2
            fontWeight="500"
            fontSize="24px"
            color={themes.fontColor}
            flex="1"
          >
            Create Group
          </SpanV2>
          <Close
            onClick={() => handleClose()}
            style={{ cursor: 'pointer' }}
          />
        </ItemHV2>
        )}

        {/* This is basically where we get input fields for adding details of the group like image, title, desc, etc. */}
        {createGroupState == 1 && (
          <GroupDetailsContent
            groupNameData={groupNameData}
            groupDescriptionData={groupDescriptionData}
            groupImageData={groupImageData}
            groupTypeObject={groupTypeObject}
            handleGroupNameData={setGroupNameData}
            handleGroupDescriptionData={setGroupDescriptionData}
            handleGroupImageData={setGroupImageData}
            handleGroupTypeObject={setGroupTypeObject}
            handleCreateGroupState={setCreateGroupState}

          />
        )}

        {/* Here we display the add wallet modal where we can search and add the wallet addresses */}
        {createGroupState == 2 &&
          <AddWalletContent
            handleCreateGroup={handleCreateGroup}
            memberList={memberList}
            handleMemberList={setMemberList}
            handlePrevious={handlePrevious}
            handleClose={handleClose}
            title={"Create Group"}
            groupMembers={[]}
          />}
      </ModalContainer>
    </ThemeProvider>
  );
};

const ModalContainer = styled.div`
  max-height: 600px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${(props) => props.background};
  // padding: 20px 6px 32px 6px;
  margin: 0px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;
