
import { Section } from 'components/SharedStyling';
import GLOBALS from "config/Globals";
import InternalDevModule from "modules/internal/InternalDevModule";
import styled from 'styled-components';

const InternalDevPage = () => {
  // RENDER
  return (
    <Container>
      <InternalDevModule />
    </Container>
  );
}
export default InternalDevPage;

// This defines the page settings, toggle align-self to center if not covering entire stuff
const Container = styled(Section)`
    display: flex;
    flex-direction: column;
    height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - 52px - ${props => props.theme.interfaceTopPadding});
    align-items: stretch;
    align-self: stretch; 
`;