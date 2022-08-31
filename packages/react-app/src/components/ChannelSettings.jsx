import React from "react";
import styled from "styled-components";
import ChannelSettingsDropdown from "./ChannelSettingsDropdown";

export default function ChannelSettings() {
  const DropdownRef = React.useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  
  const toggleDropdownHandler = () => {
      setIsDropdownOpen((prevVal) => !prevVal);
  };

  const closeDropdownHandler = ()=>{
    setIsDropdownOpen(false);
  }

  return (
    <SettingsWrapper ref={DropdownRef}>
      <Settings
        active={isDropdownOpen}
        onClick={toggleDropdownHandler}
        src="/Settings.svg"
        alt=""
      ></Settings>
      {isDropdownOpen && 
      <ChannelSettingsDropdown 
        DropdownRef={DropdownRef}
        isDropdownOpen={isDropdownOpen} 
        closeDropdown={closeDropdownHandler} 
      />}
    </SettingsWrapper>
  );
}

const SettingsWrapper = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
`;

const Settings = styled.img`
  width: 40px;
  height: 40px;
  margin-left: auto;
  margin-right: 30px;
  cursor: pointer;
  transition: 400ms;
  transform: ${(props) => (props.active ? "rotateZ(35deg)" : "none")};
`;
