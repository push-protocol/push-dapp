// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { ThemeProvider, useTheme } from 'styled-components';
import * as PushAPI from '@pushprotocol/restapi';
import { MdError } from 'react-icons/md';

// Internal Components
import ModalConfirmButton from 'primaries/SharedModalComponents/ModalConfirmButton';
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { Input, TextField } from 'components/SharedStyling';
import { ReactComponent as AddGroupIcon } from 'assets/chat/group-chat/creategroupicon.svg';
import { ReactComponent as AddGroupIconDark } from 'assets/chat/group-chat/creategroupicondark.svg';
import { isLengthValid } from 'helpers/ValidationHelper';
import ErrorMessage from 'components/reusables/errorMessageLabel/errorMessageLabel';
import { appConfig } from 'config';
import { device } from 'config/Globals';
import GroupModalHeader from './GroupModalHeader';
import AutoImageClipper from 'primaries/AutoImageClipper';
import useToast from 'hooks/useToast';

export const GroupDetailsContent = ({
  groupNameData,
  groupDescriptionData,
  groupImageData,
  groupTypeObject,
  handleGroupImageData,
  handleGroupNameData,
  handleGroupDescriptionData,
  handleGroupTypeObject,
  handleCreateGroupState,
  handlePrevious,
  handleClose
}) => {
  const [imageSrc, setImageSrc] = React.useState();
  const [isImageUploaded, setIsImageUploaded] = React.useState<boolean>(false)
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const fileUploadInputRef = React.useRef<HTMLInputElement>();
  const [errorInfo, setErrorInfo] = React.useState<{ name: string; description: string }>({
    name: '',
    description: '',
  });

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
  const groupDetailToast=useToast();

  const handleFile = async (e) => {
    setIsImageUploaded(true)
    handleGroupImageData(undefined);

    //you can carry out any file validations here...
    if (e.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);

      reader.onloadend = function (e) {
        setImageSrc(reader.result);
      };
    } else {
      return "Nothing....";
    }
  };

  const handleValidation = async () => {
    try {
      const getGroupResponse = await PushAPI.chat.getGroupByName({ groupName: groupNameData, env: appConfig.appEnv });
      if (typeof getGroupResponse !== 'string') {
        setErrorInfo((x) => ({
          ...x,
          name: 'Group Name should be unique! Please retry!',
        }));

        return false;
      }
    } catch (e) { 
      groupDetailToast.showMessageToast({
        toastTitle: 'Error',
        toastMessage: 'Error in finding group name',
        toastType: 'ERROR',
        getToastIcon: (size) => (
          <MdError
            size={size}
            color="red"
          />
        ),
      });

    }

    if (!isLengthValid(groupNameData, 50)) {
      setErrorInfo((x) => ({
        ...x,
        name: 'Group Name should not exceed 50 characters! Please retry!',
      }));

      return false;
    }
    if (!isLengthValid(groupDescriptionData, 150, 3)) {
      setErrorInfo((x) => ({
        ...x,
        description: 'Group Description should be between 3 to 150 characters! Please retry!',
      }));

      return false;
    }
    return true;
  };

  const handleNextClick = async () => {
    if (groupDescriptionData && groupNameData && groupTypeObject?.groupTypeData && (await handleValidation())) {
      handleCreateGroupState(2);
    } else {
      handleCreateGroupState(1);
    }
  };

  const handleUpload = (e) => {
    fileUploadInputRef.current.click();
  };

  return (
    <ThemeProvider theme={themes}>


      <GroupModalHeader
        handleClose={handleClose}
        title={"Create Group"}
      />



      <Container>
        <GroupIconContainer onClick={handleUpload}>
          {isImageUploaded
            ? groupImageData
              ?
              <ItemVV2
                maxWidth="128px"
                height="128px"
                borderRadius="32px"
                overflow="hidden"
              >
                <ImageV2
                  src={groupImageData}
                  style={{ objectFit: 'contain' }}
                />
              </ItemVV2>
              :
              <AutoImageClipper
                imageSrc={imageSrc}
                onImageCropped={(croppedImage) => handleGroupImageData(croppedImage)}
              />
            : themes.scheme == 'light' ? (
              <AddGroupIcon />
            ) : (
              <AddGroupIconDark />
            )}
          <FileInput
            type="file"
            ref={fileUploadInputRef}
            onChange={handleFile}
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
            onChange={(e) => handleGroupNameData(e.target.value.slice(0, 50))}
            borderColor={themes.modalInputBorderColor}
            color={themes.modalMessageColor}
          />
          {errorInfo?.name && <ErrorMessage message={errorInfo?.name} />}
        </TextFieldContainer>
        <TextFieldContainer>
          <TextFieldHeaderContainer>
            <TextFieldHeading color={themes.modalHeadingColor}>Group Description</TextFieldHeading>
            <CharacterCount color={themes.modalSecondaryTextColor}>{150 - groupDescriptionData.length}</CharacterCount>
          </TextFieldHeaderContainer>
          <GroupDescription
            rows="4"
            value={groupDescriptionData}
            onChange={(e) => handleGroupDescriptionData(e.target.value.slice(0, 150))}
            borderColor={themes.modalInputBorderColor}
            color={themes.modalMessageColor}
          />
          {errorInfo?.description && <ErrorMessage message={errorInfo?.description} />}
        </TextFieldContainer>
        <ItemVV2 alignItems="baseline">
          <TextFieldHeading color={themes.modalHeadingColor}>Group Type</TextFieldHeading>
          <OptionsContainer>
            {options.map((option) => {
              return (
                <OptionContainer
                  borderRadius={option.id == 1 ? '12px 0px 0px 12px' : '0px 12px 12px 0px'}
                  hoverBackground={themes.modalOptionHoverBackgroundColor}
                  borderColor={themes.modalInputBorderColor}
                  backgroundColor={
                    option.id == groupTypeObject?.groupTypeId ? themes.modalOptionHoverBackgroundColor : 'transparent'
                  }
                  key={option.id}
                  onClick={() => {
                    handleGroupTypeObject({ groupTypeData: option.value, groupTypeId: option.id });
                  }}
                >
                  <OptionText
                    fontWeight="500"
                    fontSize="18px"
                    color={themes.modalMessageColor}
                    margin="0px 0px 2px 0px"
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
          </OptionsContainer>
        </ItemVV2>
        <ModalConfirmButton
          text="Next"
          onClick={() => {
            handleNextClick();
          }}
          isLoading={isLoading}
          backgroundColor={
            groupDescriptionData && groupNameData && groupTypeObject?.groupTypeData
              ? '#CF1C84'
              : themes.modalConfirmButtonBackground
          }
          color={
            groupDescriptionData && groupNameData && groupTypeObject?.groupTypeData
              ? '#FFF'
              : themes.modalConfirmButtonTextColor
          }
          border={
            groupDescriptionData && groupNameData && groupTypeObject?.groupTypeData
              ? 'none'
              : `1px solid ${themes.modalConfirmButtonBorder}`
          }
          topMargin="28px"
        />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  display:flex;
  flex-direction: column;
  padding: 42px 22px 0px 26px;
  overflow-y: auto;
  overflow-x: hidden;
  &&::-webkit-scrollbar {
    width: 4px;
  }
  &&::-webkit-scrollbar-thumb {
    background: #d53a94;
    border-bottom:200px solid transparent;
    background-clip:padding-box;
  }
  @media ${device.mobileL} {
    padding: 42px 18px 42px 26px;
    &&::-webkit-scrollbar-thumb {
      border-bottom:400px solid transparent;
    }
  }
`;

const GroupIconContainer = styled.div`
  min-width:128px;
  min-height:128px;
  width: fit-content;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin: auto;
  margin-bottom: 28px;
`;

const FileInput = styled.input`
  display: none;
`;

const TextFieldContainer = styled(ItemVV2)`
  width: 299px;
  margin-bottom: 28px;
`;

const GroupDescription = styled(TextField)`
  resize: none;
  width: 299px;
  border: 1px solid ${(props) => props.borderColor || '#BAC4D6'};
  background: ${(props) => props.theme.modalInputBackgrundColor};
  border-radius: 12px;
  box-sizing: border-box;
  padding: 13px 16px;
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  &:focus {
    border: 1px solid #ffdbf0;
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
  box-sizing: border-box;
  border: 1px solid ${(props) => props.borderColor || '#BAC4D6'};
  border-radius: 12px;
  background: ${(props) => props.theme.modalInputBackgrundColor};
  padding: 8px 16px;
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.019em;
  &:focus {
    border: 1px solid #ffdbf0;
  }
`;

const OptionsContainer = styled(ItemHV2)`
  margin: 16px 0px 0px;
  box-sizing: border-box;
  align-items: center;
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
