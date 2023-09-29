// React + Web3 Essentials
import React, { useState } from "react";

// External Packages
import styled, { useTheme } from "styled-components";

// Internal Components
import { DropdownBtnHandler } from "./DropdownBtnHandler";
import UpdateNotifSettingDropdown from "./UpdateNotifSettingDropdown";

// Internal Configs
import { ImageV2, SpanV2 } from "components/reusables/SharedStylingV2";

interface ManageNotifSettingDropdownProps {
  children: React.ReactNode;
}

const ManageNotifSettingDropdownContainer: React.FC = () => {

  const theme = useTheme();

  return (
    <DropdownOuterContainer>
      <DropdownInnerContainer>
        <UpdateNotifSettingDropdown>
            <DropdownBtn flexDirection="row">
                <ImageV2
                    width="20px"
                    height="20px"
                    src="svg/manageSettings.svg"
                    alt="Settings Logo"
                />
                <SpanV2 color={theme.viewChannelPrimaryText} fontWeight={500}>Manage Settings</SpanV2>
            </DropdownBtn>
        </UpdateNotifSettingDropdown>
      </DropdownInnerContainer>
      <DropdownBtn flexDirection="row">
        <ImageV2
            width="16px"
            height="16px"
            src="svg/optout.svg"
            alt="Opt-out Logo"
        />
        <SpanV2 color={theme.viewChannelPrimaryText} fontWeight={500}>Opt-out</SpanV2>
      </DropdownBtn>
    </DropdownOuterContainer>
  );
};

const ManageNotifSettingDropdown: React.FC<ManageNotifSettingDropdownProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  // render
  return (
      <DropdownBtnHandler 
        showDropdown={isOpen}
        toggleDropdown={toggleDropdown}
        closeDropdown={closeDropdown}
        renderDropdownContainer={<ManageNotifSettingDropdownContainer />}
      >
        {children}
      </DropdownBtnHandler>
  );
}

// Export Default
export default ManageNotifSettingDropdown;

const DropdownOuterContainer = styled.div`
    min-width: max-content;
    gap: 5px;
    display: flex;
    flex-direction: column;
`;

const DropdownInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const DropdownBtn = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: transparent;
    cursor: pointer;
    gap: 5px;
`;
