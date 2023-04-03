// External Packages
import styled from 'styled-components';

// Internal Components
import { ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import BlurBG from 'components/reusables/blurs/BlurBG';

type IncomingCallModalContentProps = {
  containerStyles?: {};
  contentContainerStyles?: {};
};

const IncomingCallModalContent: React.FC<IncomingCallModalContentProps> = ({
  containerStyles,
  contentContainerStyles,
  children,
}) => {
  return (
    <Container style={containerStyles}>
      <BlurBG
        blur={4}
        zIndex={2}
        additionalStyles={{ borderRadius: '1.5rem' }}
      />
      <ContentContainer style={contentContainerStyles}>{children}</ContentContainer>
    </Container>
  );
};

const Container = styled(ItemHV2)`
  position: absolute;
  right: 18%;
  border-radius: 1.5rem;
`;

const ContentContainer = styled(ItemVV2)`
  background: ${(props) => props.theme.vcModalBGColor};
  border: ${(props) => {
    return `2px solid ${props.theme.vcBorderColor}`;
  }};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 1.5rem;
  width: 25vw;
  height: fit-content;
  z-index: 10;
`;

export default IncomingCallModalContent;
