// React + Web3 Essentials
import React, { useMemo, useState } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';
import { useClickAway } from 'react-use';
import { MdClose } from 'react-icons/md';

// Internal Components
import ModalConfirmButton from 'primaries/SharedModalComponents/ModalConfirmButton';
import { ModalInnerComponentType } from 'hooks/useModalBlur';
import type { ChannelSetting } from '../../helpers/channel/types';
import InputSlider from 'components/reusables/sliders/InputSlider';

// Internal Configs
import { device } from 'config/Globals';
import { Item } from 'components/SharedStyling';
import { FormSubmision, Input, Span } from 'primaries/SharedStyling';
import { IOSSwitch } from 'components/SendNotifications';
import { isAllFilledAndValid } from 'helpers/channel/InputValidation';
import RangeSlider from 'components/reusables/sliders/RangeSlider';
import Checkbox from 'components/reusables/checkbox/Checkbox';

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
      ? (settingToEdit.type === 1 && settingToEdit.default) || (settingToEdit.type === 2 && settingToEdit.enabled) || (settingToEdit.type === 3 && settingToEdit.enabled)
      : true
  );
  const [isRange, setIsRange] = useState<boolean>(settingToEdit && (settingToEdit.type === 2 || settingToEdit.type === 3) ? true : false);
  const [lowerLimit, setLowerLimit] = useState<string>(
    settingToEdit && (settingToEdit.type === 2 || settingToEdit.type === 3) ? settingToEdit.lowerLimit.toString() : ''
  );
  const [upperLimit, setUpperLimit] = useState<string>(
    settingToEdit && (settingToEdit.type === 2 || settingToEdit.type === 3) ? settingToEdit.upperLimit.toString() : ''
  );
  const [sliderStep, setSliderStep] = useState<string>(
    settingToEdit && (settingToEdit.type === 2 || settingToEdit.type === 3) && settingToEdit.ticker ? settingToEdit.ticker.toString() : '1'
  );

  const [enableMultiRange, setEnableMultiRange] = useState<boolean>(
    settingToEdit && settingToEdit.type === 3 ? true : false
  );

  // for single value slider
  const [defaultValue, setDefaultValue] = useState<string>(
    settingToEdit && settingToEdit.type === 2 ? settingToEdit.default.toString() : ''
  );
  const [sliderPreviewVal, setSliderPreviewVal] = useState<number>(
    settingToEdit && settingToEdit.type === 2 ? settingToEdit.default : 0
  );

  // for range slider
  const [defaultStartValue, setDefaultStartValue] = useState<string>(
    settingToEdit && settingToEdit.type === 3 ? settingToEdit.default.lower.toString() : ''
  );
  const [defaultEndValue, setDefaultEndValue] = useState<string>(
    settingToEdit && settingToEdit.type === 3 ? settingToEdit.default.upper.toString() : ''
  );
  const [sliderPreviewStartVal, setSliderPreviewStartVal] = useState<number>(
    settingToEdit && settingToEdit.type === 3 ? settingToEdit.default.lower : 0
  );
  const [sliderPreviewEndVal, setSliderPreviewEndVal] = useState<number>(
    settingToEdit && settingToEdit.type === 3 ? settingToEdit.default.upper : 0
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
        defaultValue: enableMultiRange ? { lower: defaultStartValue, upper: defaultEndValue } : defaultValue,
        settingName,
        lowerLimit,
        type: isRange ? (enableMultiRange ? 3 : 2) : 1,
        upperLimit,
        sliderStep,
      })
    ) {
      const index = settingToEdit ? settingToEdit.index : Math.floor(Math.random() * 1000000);
      const settingData: ChannelSetting = isRange
        ? enableMultiRange 
          ? 
          {
            type: 3,
            default: {
              lower: Number(defaultStartValue),
              upper: Number(defaultEndValue)
            },
            enabled: isDefault,
            description: settingName,
            index: index,
            lowerLimit: Number(lowerLimit),
            upperLimit: Number(upperLimit),
            ticker: Number(sliderStep),
          } 
          : 
          {
            type: 2,
            default: Number(defaultValue),
            enabled: isDefault,
            description: settingName,
            index: index,
            lowerLimit: Number(lowerLimit),
            upperLimit: Number(upperLimit),
            ticker: Number(sliderStep),
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

  const isInvalidNumber = (value: string): boolean => {
    const regex = /^[0-9]+(?:\.[0-9])?$/;
    return value !== '' && !regex.test(value);
  };

  const showPreview = useMemo(() => {
    return (
      lowerLimit !== '' &&
      upperLimit !== '' &&
      (enableMultiRange ? (defaultStartValue !== '' && defaultEndValue !== '') : defaultValue !== '') &&
      sliderStep !== '' &&
      Number(lowerLimit) <= Number(upperLimit) &&
      Number(sliderStep) > 0 &&
      Number(sliderStep) <= Number(upperLimit) - Number(lowerLimit) &&
      (enableMultiRange ? 
        (Number(defaultStartValue) >= Number(lowerLimit) &&
        Number(defaultEndValue) <= Number(upperLimit) &&
        Number(defaultEndValue) > Number(defaultStartValue))
        :
        (Number(defaultValue) >= Number(lowerLimit) &&
        Number(defaultValue) <= Number(upperLimit))
      )
    );
  }, [lowerLimit, upperLimit, defaultValue, sliderStep, defaultStartValue, defaultEndValue, enableMultiRange]);

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
                    setErrorInfo((prev) => ({ ...prev, lowerLimit: undefined }));
                    if (isInvalidNumber(e.target.value)) return;
                    setLowerLimit(e.target.value);
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
                    setErrorInfo((prev) => ({ ...prev, upperLimit: undefined }));
                    if (isInvalidNumber(e.target.value)) return;
                    setUpperLimit(e.target.value);
                  }}
                  autocomplete="off"
                  hasError={errorInfo?.upperLimit ? true : false}
                />
              </Item>
              <ErrorInfo>{errorInfo?.lowerLimit}</ErrorInfo>
              <ErrorInfo>{errorInfo?.upperLimit}</ErrorInfo>
            </Item>
            <Item
              direction="row"
              align="flex-start"
              flex="1"
              self="stretch"
              margin="12px 0px"
            >
              <Checkbox checked={enableMultiRange} onChange={() => setEnableMultiRange(!enableMultiRange)}/>
              <Item align="left" margin="0px 0px 0px 4px">
                <Label>Enable Multi Range Slider</Label>
                <Description>User can select a range of values in the slider</Description>
              </Item>
            </Item>
            {!enableMultiRange &&
              <Item
                direction="column"
                align="stretch"
                flex="1"
                self="stretch"
                margin="12px 0px"
              >
                <Label>Default Value</Label>
                <InputWithError
                  padding="13px 16px"
                  weight="400"
                  type="number"
                  placeholder="e.g. 5"
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
                    setErrorInfo((prev) => ({ ...prev, default: undefined }));
                    if (isInvalidNumber(e.target.value)) return;
                    setDefaultValue(e.target.value);
                    setSliderPreviewVal(Number(e.target.value));
                  }}
                  autocomplete="off"
                  hasError={errorInfo?.default ? true : false}
                />
                <ErrorInfo>{errorInfo?.default}</ErrorInfo>
              </Item>
            }
            {enableMultiRange &&
              <Item
                direction="column"
                align="flex-start"
                flex="1"
                self="stretch"
                margin="12px 0px"
              >
                <Label>Default Values</Label>
                <Item direction="row">
                  <MaxWidthInput
                    padding="13px 16px"
                    weight="400"
                    type="number"
                    placeholder="e.g. 5"
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
                    value={defaultStartValue}
                    onChange={(e) => {
                      setErrorInfo((prev) => ({ ...prev, defaultStart: undefined }));
                      if (isInvalidNumber(e.target.value)) return;
                      setDefaultStartValue(e.target.value);
                      setSliderPreviewStartVal(Number(e.target.value));
                    }}
                    autocomplete="off"
                    hasError={errorInfo?.defaultStart ? true : false}
                  />
                  <Label padding="0px 16px">to</Label>
                  <MaxWidthInput
                    padding="13px 16px"
                    weight="400"
                    type="number"
                    placeholder="e.g. 8"
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
                    value={defaultEndValue}
                    onChange={(e) => {
                      setErrorInfo((prev) => ({ ...prev, defaultEnd: undefined }));
                      if (isInvalidNumber(e.target.value)) return;
                      setDefaultEndValue(e.target.value);
                      setSliderPreviewEndVal(Number(e.target.value));
                    }}
                    autocomplete="off"
                    hasError={errorInfo?.defaultEnd ? true : false}
                  />
                </Item> 
                <ErrorInfo>{errorInfo?.defaultStart || errorInfo?.defaultEnd}</ErrorInfo>
              </Item>
            }
            <Item
              direction="column"
              align="stretch"
              flex="1"
              self="stretch"
              margin="12px 0px"
            >
              <Label>Slider Step Value</Label>
              <InputWithError
                padding="13px 16px"
                weight="400"
                type="number"
                placeholder="e.g. 1"
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
                value={sliderStep}
                onChange={(e) => {
                  setErrorInfo((prev) => ({ ...prev, sliderStep: undefined }));
                  setSliderStep(e.target.value);
                  setSliderPreviewVal(lowerLimit === '' ? 0 : Number(lowerLimit));
                }}
                autocomplete="off"
                hasError={errorInfo?.sliderStep ? true : false}
              />
              <ErrorInfo>{errorInfo?.sliderStep}</ErrorInfo>
            </Item>
            {showPreview && (
              <Item
                direction="column"
                align="flex-start"
                flex="1"
                self="stretch"
                margin="12px 0px"
              >
                <LabelLight>Preview</LabelLight>
                {!enableMultiRange &&
                  <SliderPreviewContainer>
                  <Label>{lowerLimit}</Label>
                  <InputSlider
                    val={sliderPreviewVal}
                    min={Number(lowerLimit)}
                    max={Number(upperLimit)}
                    step={Number(sliderStep)}
                    defaultVal={Number(defaultValue)}
                    onChange={({ x }) => setSliderPreviewVal(x)}
                    preview={true}
                  />
                  <Label>{upperLimit}</Label>
                  </SliderPreviewContainer>
                }

                {enableMultiRange &&
                  <SliderPreviewContainer>
                  <Label>{lowerLimit}</Label>
                  <RangeSlider
                    startVal={sliderPreviewStartVal}
                    endVal={sliderPreviewEndVal}
                    min={Number(lowerLimit)}
                    max={Number(upperLimit)}
                    step={Number(sliderStep)}
                    defaultStartVal={Number(defaultStartValue)}
                    defaultEndVal={Number(defaultEndValue)}
                    onChange={({ startVal, endVal }) => {
                      setSliderPreviewStartVal(startVal)
                      setSliderPreviewEndVal(endVal)
                    }}
                    preview={true}
                  />
                  <Label>{upperLimit}</Label>
                </SliderPreviewContainer>
                }
              </Item>
            )}
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

const LabelLight = styled(Label)`
  color: ${(props) => props.theme.default.secondaryColor};
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

const SliderPreviewContainer = styled.div`
  display: flex;
  padding: 12px;
  gap: 16px;
  margin-top: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  background: ${(props) => props.theme.nfsTickerPreviewBg};
`;

export default AddSettingModalContent;
