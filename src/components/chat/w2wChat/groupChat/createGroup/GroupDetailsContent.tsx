// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { ThemeProvider, useTheme } from 'styled-components';
// import { useClickAway } from 'react-use';

// Internal Components
import ModalConfirmButton from 'primaries/SharedModalComponents/ModalConfirmButton';
import { ModalInnerComponentType } from 'hooks/useModalBlur';
import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { Input, TextField } from 'components/SharedStyling';
import { ReactComponent as AddGroupIcon } from 'assets/chat/group-chat/creategroupicon.svg';
import { ReactComponent as AddGroupIconDark } from 'assets/chat/group-chat/creategroupicondark.svg';
import { ReactComponent as Close } from 'assets/chat/group-chat/close.svg';

export const CreateGroupData = ({setCreateGroupState}) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [groupName, setGroupName] = React.useState<string>('');
  const [groupDescription, setGroupDescription] = React.useState<string>('');
  const [privacy, setPrivacy] = React.useState<number>();
  const groupNameInputRef = React.useRef<HTMLInputElement>();
  const groupDescriptionInputRef = React.useRef<HTMLInputElement>();
  const fileUploadInputRef = React.useRef<HTMLInputElement>();

  const options = [
    {
      id: 1,
      title: 'Public',
      subTitle: 'Chats are not encrypted',
      value: 'public',
    },
    {
      id: 2,
      title: 'Private',
      subTitle: 'Chats are encrypted',
      value: 'private',
    },
  ];

  const themes = useTheme();

  const handleUpload = (e) => {
    fileUploadInputRef.current.click();
  };

  const handleGroupName = (e) => {
    setGroupName(e.target.value);
  };
  const handleGroupDescription = (e) => {
    setGroupDescription(e.target.value);
  };

//   // to close the modal upon a click on backdrop
//   const containerRef = React.useRef(null);
//   useClickAway(containerRef, () => handleClose());

  return (
    <ThemeProvider theme={themes}>
      {/* <ModalContainer ref={containerRef}>
        <>
          <SpanV2
            fontWeight="500"
            fontSize="24px"
            margin="0px 0px 42px 0px"
            color={themes.modalMessageColor}
          >
            Create Group
          </SpanV2>
          <Close />
        </> */}
        <GroupIconContainer onClick={handleUpload}>
          {themes.scheme == 'light' ? <AddGroupIcon /> : <AddGroupIconDark />}
          <FileInput
            type="file"
            ref={fileUploadInputRef}
          />
        </GroupIconContainer>
        <TextFieldContainer>
          <TextFieldHeaderContainer>
            <TextFieldHeading color={themes.modalMessageColor}>Group Name</TextFieldHeading>
            <CharacterCount color={themes.modalMessageColor}>{groupName.length}</CharacterCount>
          </TextFieldHeaderContainer>
          <CustomInput
            ref={groupNameInputRef}
            onChange={handleGroupName}
            padding="0.8rem"
            borderColor={themes.modalInputBorderColor}
            color={themes.modalMessageColor}
          />
        </TextFieldContainer>
        <TextFieldContainer>
          <TextFieldHeaderContainer>
            <TextFieldHeading color={themes.modalMessageColor}>Group Description</TextFieldHeading>
            <CharacterCount color={themes.modalMessageColor}>{groupDescription.length}</CharacterCount>
          </TextFieldHeaderContainer>
          <GroupDescription
            ref={groupDescriptionInputRef}
            onChange={handleGroupDescription}
            borderColor={themes.modalInputBorderColor}
            color={themes.modalMessageColor}
          />
        </TextFieldContainer>
        <ItemHV2>
          {options.map((option) => {
            return (
              <OptionContainer
                borderRadius={option.id == 1 ? '12px 0px 0px 12px' : '0px 12px 12px 0px'}
                hoverBackground={themes.modalOptionHoverBackgroundColor}
                borderColor={themes.modalInputBorderColor}
                backgroundColor={option.id == privacy ? themes.modalOptionHoverBackgroundColor : 'transparent'}
                key={option.id}
                onClick={() => setPrivacy(option.id)}
              >
                <OptionText
                  fontWeight="500"
                  fontSize="18px"
                  color={themes.modalMessageColor}
                >
                  {option.title}
                </OptionText>
                <OptionText
                  fontWeight="400"
                  fontSize="12px"
                  color={themes.modalMessageColor}
                >
                  {option.subTitle}
                </OptionText>
              </OptionContainer>
            );
          })}
        </ItemHV2>
        <ModalConfirmButton
          text="Next"
          onClick={()=>setCreateGroupState(2)}
          isLoading={isLoading}
          backgroundColor={groupDescription && groupName && privacy ? '#CF1C84' : themes.modalConfirmButtonBackground}
          color={groupDescription && groupName && privacy ? '#FFFFF' : themes.modalConfirmButtonTextColor}
          border={`1px solid ${themes.modalConfirmButtonBorder}`}
        />
      {/* </ModalContainer> */}
    </ThemeProvider>
  );
};

// const ModalContainer = styled.div`
//   width: 399px;
//   max-height: 500px;
//   display: flex;
//   flex-direction: column;
//   box-sizing: border-box;
//   padding: 32px 24px;
//   margin: 0px;
//   overflow-y: auto;
// `;

const GroupIconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 28px;
`;

const FileInput = styled.input`
  display: none;
`;

const TextFieldContainer = styled(ItemVV2)`
  margin-bottom: 28px;
`;

const GroupDescription = styled(TextField)`
  resize: none;
  width: 100%;
  height: 121px;
  border: 1px solid ${(props) => props.borderColor || '#BAC4D6'};
  border-radius: 12px;
  padding: 0.8rem;
  &:focus {
    border: 2px solid #ffdbf0;
  }
`;

const TextFieldHeaderContainer = styled(ItemHV2)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0px;
  margin-bottom: 8px;
`;

const TextFieldHeading = styled(SpanV2)`
  color: ${(props) => props.color || '#0000'};
  font-size: 18px;
  font-weight: 500;
`;

const CharacterCount = styled(SpanV2)`
  color: ${(props) => props.color || '#0000'};
  font-size: 14px;
  font-size: 400;
`;

const CustomInput = styled(Input)`
  box-sizing: border-box;
  width: 100%;
  border: 1px solid ${(props) => props.borderColor || '#BAC4D6'};
  border-radius: 12px;
  padding: 0.8rem;
  &:focus {
    border: 2px solid #ffdbf0;
  }
`;

const OptionContainer = styled(ItemVV2)`
  border: 1px solid ${(props) => props.borderColor || '#BAC4D6'};
  border-radius: ${(props) => props.borderRadius || '0px'};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hoverBackground || 'transparent'};
    border: 1px solid #bac4d6;
  }
`;

const OptionText = styled(SpanV2)`
  color: ${(props) => props.color || '#0000'};
  font-weight: ${(props) => props.fontWeight || 500};
  font-size: ${(props) => props.fontSize || '18px'};
`;
