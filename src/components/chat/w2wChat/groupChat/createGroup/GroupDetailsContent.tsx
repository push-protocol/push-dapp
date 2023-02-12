// React + Web3 Essentials
import React, { useContext } from 'react';

// External Packages
import styled, { ThemeProvider, useTheme } from 'styled-components';
// import { useClickAway } from 'react-use';

// Internal Components
import ModalConfirmButton from 'primaries/SharedModalComponents/ModalConfirmButton';
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { Input, TextField } from 'components/SharedStyling';
import { ReactComponent as AddGroupIcon } from 'assets/chat/group-chat/creategroupicon.svg';
import { ReactComponent as AddGroupIconDark } from 'assets/chat/group-chat/creategroupicondark.svg';
import { ReactComponent as Close } from 'assets/chat/group-chat/close.svg';
import { Context } from 'modules/chat/ChatModule';
import { AppContext } from 'types/chat';

export const GroupDetailsContent = () => {
  const {
    setGroupName,
    groupDescription,
    setGroupDescription,
    groupImage,
    setGroupImage,
    groupType,
    setGroupType,
    setCreateGroupState
  }: AppContext = useContext<AppContext>(Context);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [groupNameData, setGroupNameData] = React.useState<string>('');
  const [groupDescriptionData, setGroupDescriptionData] = React.useState<string>('');
  const [groupImageData, setGroupImageData] = React.useState<string>('');
  const [groupTypeData, setGroupTypeData] = React.useState<string>('');
  const [groupTypeId, setGroupTypeId] = React.useState<number>();
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

  const getFileString = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setGroupImageData(reader.result);
    };
  };

  const handleUpload = (e) => {
    fileUploadInputRef.current.click();
  };

  const handleGroupName = (e) => {
    setGroupNameData(e.target.value);
  };
  const handleGroupDescription = (e) => {
    setGroupDescriptionData(e.target.value);
  };

  const handleGroupDetails = () => {
    setGroupName(groupNameData);
    setGroupDescription(groupDescriptionData);
    setGroupImage(groupImageData);
    setGroupType(groupTypeData);
  };

  return (
    <ThemeProvider theme={themes}>
      <GroupIconContainer onClick={handleUpload}>
        {groupImageData ? (
          <ImageV2
            src={groupImageData}
            width="128px"
            height="128px"
            style={{ objectFit: 'contain' }}
          />
        ) : themes.scheme == 'light' ? (
          <AddGroupIcon />
        ) : (
          <AddGroupIconDark />
        )}
        <FileInput
          type="file"
          ref={fileUploadInputRef}
          onChange={getFileString}
          accept="image/*"
        />
      </GroupIconContainer>
      <TextFieldContainer>
        <TextFieldHeaderContainer>
          <TextFieldHeading color={themes.modalHeadingColor}>Group Name</TextFieldHeading>
          <CharacterCount color={themes.modalSecondaryTextColor}>{50 - groupNameData.length}</CharacterCount>
        </TextFieldHeaderContainer>
        <CustomInput
          type="text"
          value={groupNameData}
          // ref={groupNameInputRef}
          onChange={handleGroupName}
          padding="0.8rem"
          borderColor={themes.modalInputBorderColor}
          color={themes.modalMessageColor}
        />
      </TextFieldContainer>
      <TextFieldContainer>
        <TextFieldHeaderContainer>
          <TextFieldHeading color={themes.modalHeadingColor}>Group Description</TextFieldHeading>
          <CharacterCount color={themes.modalSecondaryTextColor}>{150 - groupDescriptionData.length}</CharacterCount>
        </TextFieldHeaderContainer>
        <GroupDescription
          // ref={groupDescriptionInputRef}
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
              backgroundColor={option.id == groupTypeId ? themes.modalOptionHoverBackgroundColor : 'transparent'}
              key={option.id}
              onClick={() => {
                setGroupTypeData(option.value);
                setGroupTypeId(option.id);
              }}
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
                color={themes.modalSecondaryTextColor}
              >
                {option.subTitle}
              </OptionText>
            </OptionContainer>
          );
        })}
      </ItemHV2>
      <ModalConfirmButton
        text="Next"
        onClick={() => {
          if (groupDescriptionData && groupNameData && groupTypeData && groupImageData) {
            console.log(
              'Data complted description',
              groupDescriptionData,
              'name',
              groupNameData,
              'type',
              groupTypeData,
              'Image',
              groupImageData
            );
            handleGroupDetails();
            setCreateGroupState(2);
          } else {
            setCreateGroupState(1);
          }
        }}
        isLoading={isLoading}
        backgroundColor={
          groupDescriptionData && groupNameData && groupTypeData && groupImageData
            ? '#CF1C84'
            : themes.modalConfirmButtonBackground
        }
        color={
          groupDescriptionData && groupNameData && groupTypeData && groupImageData
            ? '#FFFFF'
            : themes.modalConfirmButtonTextColor
        }
        border={`1px solid ${themes.modalConfirmButtonBorder}`}
      />
    </ThemeProvider>
  );
};

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
  min-width: 299px;
  margin-bottom: 28px;
`;

const GroupDescription = styled(TextField)`
  resize: none;
  width: 299px;
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
  width: 299px;
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
  box-sizing: border-box;
  min-width: 150px;
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
