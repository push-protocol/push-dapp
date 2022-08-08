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
  position: absolute;
  top: 30px;
  right: 30px;
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
