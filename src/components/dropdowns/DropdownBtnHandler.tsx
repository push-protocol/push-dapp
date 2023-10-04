import React, { useRef } from 'react';

// External Packages
import styled from 'styled-components';

// Internal Configs
import { useClickAway } from 'hooks/useClickAway';
import { ItemHV2 } from 'components/reusables/SharedStylingV2';

interface DropdownBtnHandlerProps {
  children: React.ReactNode;
  renderDropdownContainer: React.ReactNode;
  showDropdown: boolean;
  toggleDropdown: () => void;
  closeDropdown: () => void;
  containerPadding?: string;
}

export const DropdownBtnHandler: React.FC<DropdownBtnHandlerProps> = ({ 
    children, 
    renderDropdownContainer,
    showDropdown,
    toggleDropdown,
    closeDropdown,
    containerPadding
}) => {
  const dropdownRef = useRef<HTMLButtonElement | null>(null);
  const renderDropdownContainerRef = useRef<HTMLDivElement | null>(null);

  useClickAway(dropdownRef, renderDropdownContainerRef, closeDropdown);

  return (
        <Container ref={dropdownRef} onClick={toggleDropdown}>
            {children}
            {showDropdown && (
                <DropdownContainer containerPadding={containerPadding}>
                    <div ref={renderDropdownContainerRef} onClick={(e) => e.stopPropagation()}>
                        {renderDropdownContainer}
                    </div>
                </DropdownContainer>
            )}
        </Container>
  );
};

const Container = styled.button`
  position:relative;
  margin: 0;
  padding: 0;
  background: none;
  border: 0;
  outline: 0;
`

const DropdownContainer = styled(ItemHV2)<{ containerPadding?: string}>`
    background: ${(props)=>props.theme.settingsModalBackground};
    border:1px solid;
    border-color:${(props)=>props.theme.settingsModalBorderColor};
    border-radius: 8px;
    align-items:flex-start;
    padding: ${props => props.containerPadding ? props.containerPadding : '7px 14px'};
    position:absolute;
    top:0rem;
    z-index:10;
    right:-0.5rem;

    @media (max-width:768px){
        left: 50%;
        transform: translateX(-50%);
        width: fit-content;
    }
`;