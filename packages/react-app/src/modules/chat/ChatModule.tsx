import W2wIndex from 'components/chat/w2wIndex';
import { Item, Section } from 'components/SharedStyling';
import styled from 'styled-components';

import GLOBALS from 'config/Globals';

// Create Header
const ChatModule = () => {
  window.ethereum.on('accountsChanged', (account) => {
    window.location.reload();
  });
  window.ethereum.on('networksChanged', () => {
    window.location.reload();
  });

  return (
    <Container>
      <W2wIndex />
    </Container>
  );
}
export default ChatModule;

// Define how the module is fitted, define it align-self to strect to fill entire bounds
// Define height: inherit to cover entire height
const Container = styled(Section)`
	align-items: center;
	align-self: stretch;
  height: inherit;
	background: ${(props) => props.theme.mainBg};
	border-radius: ${GLOBALS.CONSTANTS.MODULE.BORDER_RADIUS}px;
	box-shadow: ${GLOBALS.CONSTANTS.MODULE.BOX_SHADOW};
	display: flex;
	flex-direction: column;
	flex: initial;
	justify-content: center;
	position: relative;
`;
