// React + Web3 Essentials
import React, { useState } from "react";

// External Packages
import Switch from 'react-switch';
import Slider from 'react-input-slider';
import styled, { css, useTheme } from "styled-components";

// Internal Components
import { DropdownBtnHandler } from "./DropdownBtnHandler";

// Internal Configs
import { SpanV2 } from "components/reusables/SharedStylingV2";

interface OptinNotifSettingDropdownProps {
  children: React.ReactNode;
}

const OptinNotifSettingDropdownContainer: React.FC<{ settings: any[] }> = ({ settings }) => {
  const [modifiedSettings, setModifiedSettings] = useState([...settings]);

  const theme = useTheme();

  console.log(modifiedSettings);

  const handleSliderChange = (index: number, value: number) => {
    const updatedSettings = [...modifiedSettings];
    updatedSettings[index].defaultValue = value;
    setModifiedSettings(updatedSettings);
  };

  const handleSwitchChange = (index: number) => {
    const updatedSettings = [...modifiedSettings];
    updatedSettings[index].default = !updatedSettings[index].default;
    setModifiedSettings(updatedSettings);
  };

  return (
    <DropdownOuterContainer>
      {modifiedSettings.map((setting, index) => (
        <DropdownInnerContainer 
            key={index}
            hasBottomBorder={index !== settings.length - 1}
        >
            <DropdownSwitchItem>
                <SpanV2 color={theme.settingsModalPrimaryTextColor} fontSize="15px" fontWeight='500' textAlign="left">{setting.description}</SpanV2>
                <Switch 
                    onChange={() => handleSwitchChange(index)} checked={setting.default} 
                    checkedIcon={false}
                    uncheckedIcon={false}
                    onColor="#D53A94"
                    offColor="#A0A3B1"
                    height={16}
                    width={32}
                    handleDiameter={12}
                />
            </DropdownSwitchItem>
          {setting.type === 2 && setting.default && (
            <DropdownSliderItem>
                <Slider
                    styles={{
                        active: {
                            backgroundColor: theme.sliderActiveColor
                        },
                        track: {
                            height: 4,
                            width: 250,
                            backgroundColor: theme.sliderTrackColor
                        },
                        thumb: {
                            width: 16,
                            height: 16
                        }
                        }}
                    axis="x"
                    x={setting.defaultValue}
                    onChange={({ x }) => handleSliderChange(index, x)}
                    xstep={1}
                    xmin={setting.lowerLimit}
                    xmax={setting.upperLimit}
                />
                <SpanV2 color={theme.settingsModalPrimaryTextColor} fontSize="15px" fontWeight='500' textAlign="right">{setting.defaultValue}</SpanV2>
            </DropdownSliderItem>
          )}
        </DropdownInnerContainer>
      ))}
        <DropdownSubmitItem>
            <SpanV2 color={theme.textcolor} fontSize="15px" fontWeight='500' textAlign="left">You will receive all important updates from this channel.</SpanV2>
            <DropdownSubmitButton>Opt-in</DropdownSubmitButton>
        </DropdownSubmitItem>
    </DropdownOuterContainer>
  );
};

// Faucet URLs
const OptinNotifSettingDropdown: React.FC<OptinNotifSettingDropdownProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const settings = [
    {
        "type": 1,
        "index": 1,
        "default": false,
        "description": "Giveaway Alerts"
    },
    {
        "type": 2,
        "index": 2,
        "default": true,
        "defaultValue": 50,
        "lowerLimit": 20,
        "upperLimit": 100,
        "description": "ETH Price Drop Alert"
    },
    {
        "type": 1,
        "index": 3,
        "default": true,
        "description": "Partnership Announcements"
    },
    {
        "type": 2,
        "index": 4,
        "default": false,
        "defaultValue": 45,
        "lowerLimit": 10,
        "upperLimit": 150,
        "description": "Marketing"
    }
]

  // render
  return (
      <DropdownBtnHandler 
        showDropdown={isOpen}
        toggleDropdown={toggleDropdown}
        closeDropdown={closeDropdown}
        renderDropdownContainer={<OptinNotifSettingDropdownContainer settings={settings} />}
        containerPadding="0px 16px 16px 16px"
      >
        {children}
      </DropdownBtnHandler>
  );
}

// Export Default
export default OptinNotifSettingDropdown;

const DropdownOuterContainer = styled.div`
    min-width: 300px;
`;

const DropdownInnerContainer = styled.div<{ hasBottomBorder: boolean }>`
    display: flex;
    flex-direction: column;
    min-width: 250px;

    ${(props) =>
        props.hasBottomBorder &&
        css`
            border-bottom: 1px solid ${(props) => props.theme.settingsModalBorderBottomColor};
        `}
`;

const DropdownSwitchItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding: 10px 0px;
`;

const DropdownSubmitItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding: 10px 0px;
`;

const DropdownSubmitButton = styled.button`
    border: 0;
    outline: 0;
    display: flex;
    align-items: center;
    min-width: max-content;
    justify-content: center;
    margin: 0px 0px 0px 10px;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    position: relative;
    background: #e20880;
    border-radius: 8px;
    padding: 9px 20px;
    &:hover {
        opacity: 0.9;
        cursor: pointer;
        pointer: hand;
    }
    &:active {
        opacity: 0.75;
        cursor: pointer;
        pointer: hand;
    }
    ${(props) =>
    props.disabled &&
    css`
        &:hover {
            opacity: 1;
            cursor: default;
            pointer: default;
        }
        &:active {
            opacity: 1;
            cursor: default;
            pointer: default;
        }
    `}
`

const DropdownSliderItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding-bottom: 10px;
`;
