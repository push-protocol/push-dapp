// React + Web3 Essentials
import React, { useRef, useState } from 'react';

// External Packages
import { AiOutlineMore } from 'react-icons/ai';
import styled from 'styled-components';
import { useClickAway } from 'react-use';

export interface ChannelDropdownOption {
  icon: React.ReactNode;
  text: string;
  onClick: (item) => void;
}

interface DelegateSettingsDropdownProps {
  options: Array<ChannelDropdownOption>;
  item: string;
}

const DelegateSettingsDropdown = ({ options, item }: DelegateSettingsDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useClickAway(dropdownRef, () => setIsOpen(false));

  return (
    <div>
      <MoreButtonUI onClick={() => setIsOpen(true)} />
      {isOpen && (
        <ListContainer onMouseLeave={() => setIsOpen(false)} ref={dropdownRef}>
          {options.map(({ icon, onClick, text }, index) => {
            return (
              <OptionButton
                onClick={() => onClick(item)}
                key={index}
                index={index}
              >
                {icon}
                <OptionText>{text}</OptionText>
              </OptionButton>
            );
          })}
        </ListContainer>
      )}
    </div>
  );
};

export default DelegateSettingsDropdown;

const MoreButtonUI = styled(AiOutlineMore)`
  background: transparent;
  display: flex;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 0px;
  position: relative;
  width: 24px;
  height: 24px;
  color: ${(props) => props.theme.default.color};
`;

const ListContainer = styled.div`
  padding: 10px 6px;
  width: 119px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.default.border};
  position: absolute;
  top: 3px;
  right: 0px;
  background-color: ${(props) => props.theme.default.bg};
  z-index: 2;
`;

const OptionButton = styled.div<{ index: number }>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  margin-top: ${(props) => (props.index === 0 ? '0px' : '16px')};
`;

const OptionText = styled.span`
  margin-left: 8px;
`;
