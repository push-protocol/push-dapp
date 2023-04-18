// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';
import { useClickAway } from 'react-use';

// Internal Components
import { ModalInnerComponentType } from 'hooks/useModalBlur';
import { ButtonV2, SpanV2 } from 'components/reusables/SharedStylingV2';

export const DemoModalContent = ({ onClose, InnerComponentProps }: ModalInnerComponentType) => {
  const { heading } = InnerComponentProps;
  const theme = useTheme();
  const containerRef = React.useRef();

  const handleClose = () => onClose();

  useClickAway(containerRef, () => handleClose());

  return (
    <Container ref={containerRef}>
      <SpanV2
        color={theme.default.color}
        fontSize="32px"
        fontWeight={600}
      >
        {heading}
      </SpanV2>
      <ButtonV2
        background="#e20880"
        color="#fff"
        flex="initial"
        borderRadius="15px"
        padding="10px 20px"
        onClick={() => handleClose()}
      >
        <SpanV2>Close</SpanV2>
      </ButtonV2>
    </Container>
  );
};

const Container = styled.div`
  min-width: 25vw;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 16px;
  background: ${(props) => props.theme.default.secondaryBg};
`;
