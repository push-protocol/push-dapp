// External Packages
import styled from 'styled-components';

// Internal Components
import BlurBG from 'components/reusables/blurs/BlurBG';
import { ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';

// Internal Configs
import { device } from 'config/Globals';

type IncomingCallModalContentProps = {
  isIncomingCallMinimized: boolean;
};

const IncomingCallModalContent: React.FC<IncomingCallModalContentProps> = ({ isIncomingCallMinimized, children }) => {
  return (
    <Container isIncomingCallMinimized={isIncomingCallMinimized}>
      <BlurBG
        blur={5}
        zIndex={2}
        additionalStyles={{ borderRadius: '1.5rem' }}
      />
      <ContentContainer isIncomingCallMinimized={isIncomingCallMinimized}>{children}</ContentContainer>
    </Container>
  );
};

const Container = styled(ItemHV2)<IncomingCallModalContentProps>`
  position: absolute;
  right: ${props => props.isIncomingCallMinimized ? "2%" : "25%"};
  bottom: ${props => props.isIncomingCallMinimized ? "10%" : "unset"};
  border-radius: 1.5rem;
  width: ${props => props.isIncomingCallMinimized ? "24vw" : "24vw"};
   
  @media ${device.laptopL} {
    right: ${props => props.isIncomingCallMinimized ? "2%" : "25%"};
    bottom: ${props => props.isIncomingCallMinimized ? "10%" : "20%"};
    width: ${props => props.isIncomingCallMinimized ? "31vw" : "24vw"};
  }

  @media ${device.laptop} {
    right: ${props => props.isIncomingCallMinimized ? "2%" : "25%"};
    bottom: ${props => props.isIncomingCallMinimized ? "10%" : "20%"};
    width: ${props => props.isIncomingCallMinimized ? "45vw" : "24vw"};

  @media ${device.tablet} {
    right: ${props => props.isIncomingCallMinimized ? "5%" : "30%"};
    bottom: ${props => props.isIncomingCallMinimized ? "10%" : "25%"};
    width: ${props => props.isIncomingCallMinimized ? "60vw" : "37vw"};
  }

  @media ${device.mobileL} {
    right: 3%;
    bottom: ${props => props.isIncomingCallMinimized ? "10%" : "20%"};
    width: auto;
  }
`;

const ContentContainer = styled(ItemVV2)<IncomingCallModalContentProps>`
  // display: flex;
  background: ${(props) => props.theme.vcModalBGColor};
  border: ${(props) => {
    return `2px solid ${props.theme.vcBorderColor}`;
  }};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 1.5rem;
  width: ${props => props.isIncomingCallMinimized ? "auto" : "25vw"};
  flex-direction: ${props => props.isIncomingCallMinimized ? "row" : "column"};
  justify-content: ${props => props.isIncomingCallMinimized ? "center" : "center"};
  height: fit-content;
  z-index: 10;

  @media ${device.laptop} {
    // width: 31vw;
  }

  @media ${device.tablet} {
    width: 45vw;
  }

  @media ${device.mobileL} {
    width: 90vw;
  }
`;

export default IncomingCallModalContent;
