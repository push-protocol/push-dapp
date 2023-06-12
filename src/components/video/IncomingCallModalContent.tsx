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
  width: ${props => props.isIncomingCallMinimized ? "28vw" : "24vw"};

  @media (max-width: 2560px){
    bottom: ${props => props.isIncomingCallMinimized ? "8%" : "unset"};
    width: ${props => props.isIncomingCallMinimized ? "21vw" : "24vw"};
  }

  @media (max-width: 2040px){
    bottom: ${props => props.isIncomingCallMinimized ? "10%" : "unset"};
    width: ${props => props.isIncomingCallMinimized ? "29vw" : "24vw"};
  }
   
  @media ${device.laptopL} {
    right: ${props => props.isIncomingCallMinimized ? "2%" : "25%"};
    bottom: ${props => props.isIncomingCallMinimized ? "11%" : "17%"};
    width: ${props => props.isIncomingCallMinimized ? "33vw" : "24vw"};
  }

  @media (min-width: 768px) and (max-height: 700px){
    right: ${props => props.isIncomingCallMinimized ? "2%" : "25%"};
    bottom: ${props => props.isIncomingCallMinimized ? "10%" : "12%"};
    width: ${props => props.isIncomingCallMinimized ? "33vw" : "24vw"};
  }

  @media (max-width: 1364px) {
    width : ${props => props.isIncomingCallMinimized ? "36vw" : "24vw"};
    bottom: ${props => props.isIncomingCallMinimized ? "11%" : "12%"};
  }

  @media (max-width: 1240px) {
    width : ${props => props.isIncomingCallMinimized ? "40vw" : "24vw"};
  }

  @media (max-width: 1130px) {
    width : ${props => props.isIncomingCallMinimized ? "44vw" : "24vw"};
  }

  @media ${device.laptop} {
    right: ${props => props.isIncomingCallMinimized ? "2%" : "25%"};
    bottom: ${props => props.isIncomingCallMinimized ? "15%" : "20%"};
    width: ${props => props.isIncomingCallMinimized ? "45vw" : "24vw"};

  @media (max-width: 996px) {
    width: ${props => props.isIncomingCallMinimized ? "49vw" : "24vw"};
  }

  @media (max-width: 932px) {
    width: ${props => props.isIncomingCallMinimized ? "55vw" : "34vw"};
    bottom: ${props => props.isIncomingCallMinimized ? "8%" : "25%"};
  }

  @media ${device.tablet} {
    right: ${props => props.isIncomingCallMinimized ? "5%" : "30%"};
    bottom: ${props => props.isIncomingCallMinimized ? "10%" : "25%"};
    width: ${props => props.isIncomingCallMinimized ? "60vw" : "37vw"};
  }

  @media (max-width:550px){
    right: ${props => props.isIncomingCallMinimized ? "3%" : "30%"};
    bottom: ${props => props.isIncomingCallMinimized ? "12%" : "25%"};
    width: ${props => props.isIncomingCallMinimized ? "77vw" : "49vw"};
  }

  @media ${device.mobileL} {
    // right: 4%;
    right: ${props => props.isIncomingCallMinimized ? "1.5%" : "11%"};
    bottom: ${props => props.isIncomingCallMinimized ? "12.5%" : "25%"};
    width: ${props => props.isIncomingCallMinimized ? "94vw" : "77vw"};
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
    width: 100%;
  }
`;

export default IncomingCallModalContent;
