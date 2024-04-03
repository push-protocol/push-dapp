// React + Web3 Essentials
import React from "react";

// External Packages
import ReactGA from "react-ga";
import styled, { useTheme } from "styled-components";

// Internal Components
import { ItemVV2 } from "components/reusables/SharedStylingV2";
import { H2, Item, Section, Span } from "../../primaries/SharedStyling";
import Info from "segments/Info";

// Internal Configs
import GLOBALS, { device, globalsMargin } from "config/Globals";
import useModalBlur, { MODAL_POSITION } from "hooks/useModalBlur";
import MetamaskPushSnapModal from "./MetamaskPushSnapModal";

// Create Header
function ReceiveNotifsModule() {
  ReactGA.pageview("/receive");

  // get theme
  const theme = useTheme();

  // Render
  return (
    <Container>
      <ItemVV2 alignItems="stretch">
        <MetamaskPushSnapModal onClose={() => {}} closeEnabled={false} />
      </ItemVV2>
    </Container>
  );
}

// css style
const Container = styled(Section)`
	align-items: center;
	align-self: center;
	background: ${(props) => props.theme.default.bg};
	border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
	box-shadow: ${GLOBALS.ADJUSTMENTS.MODULE_BOX_SHADOW};
	display: flex;
	flex-direction: column;
	flex: initial;
	justify-content: center;
  max-width: 1200px;
  width: auto;
  padding: ${GLOBALS.ADJUSTMENTS.PADDING.BIG};
	position: relative;
  margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT};
  }

  @media ${device.mobileL} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT};
  }
`;


// Export Default
export default ReceiveNotifsModule;
