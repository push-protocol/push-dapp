// React + Web3 Essentials
import React, { useState } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';
import { useClickAway } from 'react-use';
import { MdClose } from 'react-icons/md';

// Internal Components
import ModalConfirmButton from 'primaries/SharedModalComponents/ModalConfirmButton';
import { ModalInnerComponentType } from 'hooks/useModalBlur';
import type { ChannelSetting } from '../../helpers/channel/types';

// Internal Configs
import { device } from 'config/Globals';
import { Item } from 'components/SharedStyling';
import { FormSubmision, Input, Span } from 'primaries/SharedStyling';
import { IOSSwitch } from 'components/SendNotifications';
import { isAllFilledAndValid } from 'helpers/channel/InputValidation';

const ToggleItem = ({ checked, onChange, label, description }) => {
  return (
    <Item
      margin="12px 0px 12px 0px"
      flex="1"
      self="stretch"
      align="stretch"
    >
      <Item
        direction="row"
        align="center"
        flex="1"
        self="stretch"
        justify="space-between"
      >
        <Item
          flex="1"
          self="stretch"
          justify="space-between"
          align="flex-start"
        >
          <Label>{label}</Label>
          <Description>{description}</Description>
        </Item>
        <IOSSwitch
          checked={checked}
          onChange={onChange}
        />
      </Item>
    </Item>
  );
};

interface AddSettingModalProps extends Omit<ModalInnerComponentType, 'InnerComponentProps'> {
  InnerComponentProps?: {
    settingToEdit?: ChannelSetting;
  };
}

const AddSettingModalContent = ({
  onConfirm: onSubmit,
  onClose,
  toastObject,
  InnerComponentProps,
}: AddSettingModalProps) => {
  const settingToEdit = InnerComponentProps?.settingToEdit || undefined;
  const [isLoading, setIsLoading] = useState(false);
  const [settingName, setSettingName] = useState(settingToEdit ? settingToEdit.description : '');
  const [isDefault, setIsDefault] = useState<boolean>(
    settingToEdit
      ? (settingToEdit.type === 1 && settingToEdit.default) || (settingToEdit.type === 2 && settingToEdit.enabled)
      : true
  );
  const [isRange, setIsRange] = useState<boolean>(settingToEdit && settingToEdit.type === 2 ? true : false);
  const [lowerLimit, setLowerLimit] = useState<string>(
    settingToEdit && settingToEdit.type === 2 ? settingToEdit.lowerLimit.toString() : ''
  );
  const [upperLimit, setUpperLimit] = useState<string>(
    settingToEdit && settingToEdit.type === 2 ? settingToEdit.upperLimit.toString() : ''
  );
  const [defaultValue, setDefaultValue] = useState<string>(
    settingToEdit && settingToEdit.type === 2 ? settingToEdit.default.toString() : ''
  );
  const [errorInfo, setErrorInfo] = useState<any>();

  const theme = useTheme();

  const handleClose = () => !isLoading && onClose();

  const containerRef = React.useRef(null);
  useClickAway(containerRef, () => handleClose());

  const onConfirm = (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (
      isAllFilledAndValid({
        setErrorInfo,
        defaultValue,
        settingName,
        lowerLimit,
        type: isRange ? 2 : 1,
        upperLimit,
      })
    ) {
      const index = settingToEdit ? settingToEdit.index : Math.floor(Math.random() * 1000000);
      const settingData: ChannelSetting = isRange
        ? {
            type: 2,
            default: Number(defaultValue),
            enabled: isDefault,
            description: settingName,
            index: index,
            lowerLimit: Number(lowerLimit),
            upperLimit: Number(upperLimit),
          }
        : {
            type: 1,
            default: isDefault,
            description: settingName,
            index: index,
          };
      onSubmit(settingData);
      onClose();
    }
    setIsLoading(false);
  };

  return (
    <ModalContainer ref={containerRef}>
      <FormSubmision onSubmit={onConfirm}>
        <CloseButton onClick={handleClose} />
        <ModalTitle>{settingToEdit ? 'Edit ' : 'Add a '} Setting</ModalTitle>
        <Item
          margin="32px 0px 12px 0px"
          flex="1"
          self="stretch"
          align="stretch"
        >
          <Item
            direction="row"
            align="center"
            flex="1"
            self="stretch"
            justify="space-between"
          >
            <Label>Setting Name</Label>
            <Span
              color={theme.editChannelSecondaryText}
              size="14px"
              margin="0px 8px 0px 0px"
              weight="500"
            >
              {50 - settingName.length}
            </Span>
          </Item>
          <InputWithError
            maxlength="50"
            padding="13px 16px"
            weight="400"
            size="15px"
            resize="none"
            overflow="hidden"
            line-height="19.5px"
            margin="8px 0px 0px 0px"
            border={theme.textAreaBorderColor}
            focusBorder={theme.textAreaFocusBorder}
            radius="12px"
            bg={theme.editChannelInputbg}
            color={theme.editChannelPrimaryText}
            value={settingName}
            onChange={(e) => {
              setSettingName(e.target.value.slice(0, 50));
              setErrorInfo((prev) => ({ ...prev, settingName: undefined }));
            }}
            autocomplete="off"
            hasError={errorInfo?.settingName ? true : false}
          />
          <ErrorInfo>{errorInfo?.settingName}</ErrorInfo>
        </Item>
        <ToggleItem
          checked={isDefault}
          onChange={() => setIsDefault((prev) => !prev)}
          label="Set as default"
          description="Setting turned on for users by default"
        />
        <ToggleItem
          checked={isRange}
          onChange={() => setIsRange((prev) => !prev)}
          label="Range"
          description="Set a range for this setting e.g. 1-10"
        />
        {isRange && (
          <>
            <Item
              direction="column"
              align="flex-start"
              flex="1"
              self="stretch"
              margin="12px 0px"
            >
              <Label>Range Values</Label>
              <Item direction="row">
                <MaxWidthInput
                  padding="13px 16px"
                  weight="400"
                  type="number"
                  placeholder="e.g. 0"
                  size="15px"
                  resize="none"
                  overflow="hidden"
                  line-height="19.5px"
                  margin="8px 0px 0px 0px"
                  border={theme.textAreaBorderColor}
                  focusBorder={theme.textAreaFocusBorder}
                  radius="12px"
                  bg={theme.editChannelInputbg}
                  color={theme.editChannelPrimaryText}
                  value={lowerLimit}
                  onChange={(e) => {
                    setLowerLimit(e.target.value);
                    setErrorInfo((prev) => ({ ...prev, lowerLimit: undefined }));
                  }}
                  autocomplete="off"
                  hasError={errorInfo?.lowerLimit ? true : false}
                />
                <Label padding="0px 16px">to</Label>
                <MaxWidthInput
                  padding="13px 16px"
                  weight="400"
                  type="number"
                  placeholder="e.g. 10"
                  size="15px"
                  resize="none"
                  overflow="hidden"
                  line-height="19.5px"
                  margin="8px 0px 0px 0px"
                  border={theme.textAreaBorderColor}
                  focusBorder={theme.textAreaFocusBorder}
                  radius="12px"
                  bg={theme.editChannelInputbg}
                  color={theme.editChannelPrimaryText}
                  value={upperLimit}
                  onChange={(e) => {
                    setUpperLimit(e.target.value);
                    setErrorInfo((prev) => ({ ...prev, upperLimit: undefined }));
                  }}
                  autocomplete="off"
                  hasError={errorInfo?.upperLimit ? true : false}
                />
              </Item>
              <ErrorInfo>{errorInfo?.lowerLimit}</ErrorInfo>
              <ErrorInfo>{errorInfo?.upperLimit}</ErrorInfo>
            </Item>
            <Item
              direction="column"
              align="flex-start"
              flex="1"
              self="stretch"
              margin="12px 0px"
            >
              <Label>Default Value</Label>
              <MaxWidthInput
                padding="13px 16px"
                weight="400"
                type="number"
                placeholder="e.g. 0"
                size="15px"
                resize="none"
                overflow="hidden"
                line-height="19.5px"
                margin="8px 0px 0px 0px"
                border={theme.textAreaBorderColor}
                focusBorder={theme.textAreaFocusBorder}
                radius="12px"
                bg={theme.editChannelInputbg}
                color={theme.editChannelPrimaryText}
                value={defaultValue}
                onChange={(e) => {
                  setDefaultValue(e.target.value);
                  setErrorInfo((prev) => ({ ...prev, default: undefined }));
                }}
                autocomplete="off"
                hasError={errorInfo?.default ? true : false}
              />
              <ErrorInfo>{errorInfo?.default}</ErrorInfo>
            </Item>
          </>
        )}
        <ModalConfirmButton
          text="Save Setting"
          isLoading={isLoading}
          topMargin="20px"
          padding="14.5px 26.5px"
        />
      </FormSubmision>
    </ModalContainer>
  );
};

const CloseButton = styled(MdClose)`
  align-self: flex-end;
  color: ${(props) => props.theme.default.secondaryColor};
  font-size: 20px;
  cursor: pointer;
`;

const ModalTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${(props) => props.theme.default.color};
`;

const ModalContainer = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  margin: 6% 1%;
  background: ${(props) => props.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media (${device.laptop}) {
    width: 50vw;
  }
  @media (${device.mobileL}) {
    width: 95vw;
  }
`;

const Label = styled.div<{ padding?: string }>`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.011em;
  color: ${(props) => props.theme.default.color};
  padding: ${(props) => props.padding || '0px'};
`;

const Description = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) => props.theme.default.secondaryColor};
`;

const MaxWidthInput = styled(Input)<{ hasError: boolean }>`
  max-width: 108px;
  flex: 1;
  border: ${(props) =>
    props.hasError ? `1px solid ${props.theme.nfsError}` : `1px solid ${props.theme.default.borderColor}`};
`;

const InputWithError = styled(Input)<{ hasError: boolean }>`
  flex: 1;
  border: ${(props) =>
    props.hasError ? `1px solid ${props.theme.nfsError}` : `1px solid ${props.theme.default.borderColor}`};
`;

const ErrorInfo = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) => props.theme.nfsError};
  margin-top: 4px;
`;

export default AddSettingModalContent;
