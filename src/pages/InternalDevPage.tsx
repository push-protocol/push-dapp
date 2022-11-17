// External Packages
import styled from 'styled-components';

// Internal Components
import { Section } from 'components/SharedStyling';
import InternalDevModule from "modules/internal/InternalDevModule";

// Internal Configs
import GLOBALS from "config/Globals";

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
    align-items: stretch;
    align-self: stretch; 
`;