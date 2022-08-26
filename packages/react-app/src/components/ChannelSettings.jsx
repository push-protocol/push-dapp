import React from "react";
import { useClickAway } from "react-use";
import styled from "styled-components";
import ChannelSettingsDropdown from "./ChannelSettingsDropdown";

import {
  AiOutlineEllipsis,
} from 'react-icons/ai';


export default function ChannelSettings() {
  const [active, setActive] = React.useState(false);
  const modalRef = React.useRef(null);
  const toggleActive = () => {
    setActive((a) => !a);
  };

  useClickAway(modalRef, () => active && setActive(false));

  return (
    <SettingsWrapper ref={modalRef}>
      <Settings
        active={active}
        onClick={toggleActive}
      />
      {active && <ChannelSettingsDropdown />}
    </SettingsWrapper>
  );
}

const SettingsWrapper = styled.div`
  flex:1;
  display:flex;
  justify-content: flex-end;
  position: relative;
  top: 70px;
  left:-50px;
  @media (max-width: 600px) {
    position: inherit;
    width:100%;
    display:flex;
    justify-content:center;
    margin: 0 auto;
  }
`;

const Settings = styled(AiOutlineEllipsis)`
  position: relative;
  width: 40px;
  height: 36px;
  border: 1px solid #DFDEE9;
  border-radius: 8px;
  cursor: pointer;
  transition: 400ms;
  transform: ${(props) => (props.active ? "rotateZ(90deg)" : "none")};
`;
