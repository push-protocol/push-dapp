import React from "react";
import { useClickAway } from "react-use";
import styled from "styled-components";
import ChannelSettingsDropdown from "./ChannelSettingsDropdown";

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
        src="/Settings.svg"
        alt=""
      ></Settings>
      {active && <ChannelSettingsDropdown />}
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
