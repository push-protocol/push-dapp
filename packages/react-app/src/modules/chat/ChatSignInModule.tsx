import ProgressBar from 'components/reusables/progress/ProgressBarUnit';
import { Item, Section } from 'components/SharedStyling';
import styled from 'styled-components';

import GLOBALS from "config/Globals";

// Create Header
const ChatSignInModule = () => {
  window.ethereum.on('accountsChanged', () => {
    window.location.reload();
  });
  window.ethereum.on('networksChanged', () => {
    window.location.reload();
  });

  return (
    <Container>
      <ProgressBar
        percent={100}
        color={GLOBALS.COLORS.PRIMARY_PINK}
      />
    </Container>
  );
}
export default ChatSignInModule;

// Define how the module is fitted, define it align-self to strect to fill entire bounds
// Define height: inherit to cover entire height
const Container = styled(Section)`
  display: flex;
  flex-direction: column;
  flex: initial;
  background: ${(props) => props.theme.mainBg};

  align-items: center;
  align-self: center;
  justify-content: center;

  padding: 30px 30px;

  min-width: 300px;

	border-radius: ${GLOBALS.CONSTANTS.MODULE.BORDER_RADIUS}px;
	box-shadow: ${GLOBALS.CONSTANTS.MODULE.BOX_SHADOW};

  position: relative;
`;
