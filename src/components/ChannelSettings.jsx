// React + Web3 Essentials
import React from 'react';

// External Packages
import { AiOutlineEllipsis } from 'react-icons/ai';
import styled from 'styled-components';

// Internal Compoonents
import { ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import ChannelSettingsDropdown from './ChannelSettingsDropdown';
import { Button } from './SharedStyling';
import { useTheme } from '@emotion/react';

export default function ChannelSettings() {
  const DropdownRef = React.useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const theme = useTheme();

  const toggleDropdownHandler = () => {
    setIsDropdownOpen((prevVal) => !prevVal);
  };

  const closeDropdownHandler = () => {
    setIsDropdownOpen(false);
  };

  return (
    <ItemHV2 flex="0" ref={DropdownRef}>
      <Settings active={isDropdownOpen} onClick={toggleDropdownHandler} />
      {isDropdownOpen && (
          <ChannelSettingsDropdown
            DropdownRef={DropdownRef}
            isDropdownOpen={isDropdownOpen}
            closeDropdown={closeDropdownHandler}
          />
      )}
    </ItemHV2>
  );
}

const SettingsWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: 70px;
  left: -50px;
  @media (max-width: 600px) {
    position: inherit;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
`;

const Settings = styled(AiOutlineEllipsis)`
  position: relative;
  width: 40px;
  height: 36px;
  border: 1px solid;
  border-color: ${(props)=>props.theme.default.borderColor};
  border-radius: 8px;
  cursor: pointer;
  transition: 400ms;
  transform: ${(props) => (props.active ? 'rotateZ(90deg)' : 'none')};
`;

const SubmitButton = styled(Button)`
  width: 7rem;
  background: #cf1c84;
  color: #fff;
  z-Index:0;
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  margin-right: 20px;
  border-radius: 8px;
  padding: 11px 10px;
  @media (min-width:600px) and (max-width:700px){
    margin-right: 9px;
  }
`;
