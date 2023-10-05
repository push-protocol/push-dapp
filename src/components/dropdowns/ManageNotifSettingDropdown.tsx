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
  centerOnMobile: boolean;
}

const ManageNotifSettingDropdownContainer: React.FC<{centerOnMobile: boolean}> = ({centerOnMobile}) => {

  const theme = useTheme();

  return (
    <DropdownOuterContainer>
      <DropdownInnerContainer>
        <UpdateNotifSettingDropdown centerOnMobile={centerOnMobile}>
            <DropdownBtn flexDirection="row">
                <ImageV2
                    width="20px"
                    height="20px"
                    src="svg/manageSettings.svg"
                    alt="Settings Logo"
                />
                <SpanV2 color={theme.viewChannelPrimaryText} fontWeight={500} fontSize="14px">Manage Settings</SpanV2>
            </DropdownBtn>
        </UpdateNotifSettingDropdown>
      </DropdownInnerContainer>
      <DropdownBtn flexDirection="row">
        <ImageV2
            width="20px"
            height="20px"
            src="svg/optout.svg"
            alt="Opt-out Logo"
        />
        <SpanV2 color={theme.viewChannelPrimaryText} fontWeight={500} fontSize="14px">Opt-out</SpanV2>
      </DropdownBtn>
    </DropdownOuterContainer>
  );
};

const ManageNotifSettingDropdown: React.FC<ManageNotifSettingDropdownProps> = ({ children, centerOnMobile }) => {
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
        renderDropdownContainer={<ManageNotifSettingDropdownContainer centerOnMobile={centerOnMobile} />}
        containerPadding="12px 16px"
        centerOnMobile={centerOnMobile}
      >
        {children}
      </DropdownBtnHandler>
  );
}

// Export Default
export default ManageNotifSettingDropdown;

const DropdownOuterContainer = styled.div`
    min-width: max-content;
    gap: 16px;
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
    justify-content: flex-start;
    background: transparent;
    cursor: pointer;
    gap: 8px;
`;
