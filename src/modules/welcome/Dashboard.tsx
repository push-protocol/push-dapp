// React and other libraries
import { FC, useState } from 'react';

// External Packages
import styled from 'styled-components';

// Components
import { Box } from 'blocks';
import { ChannelVariantsSection } from './components/ChannelVariantsSection';
import DashboardHeader from './components/DashboardHeader';
import { DashboardSubHeader } from './components/DashboardSubHeader';
import { FeaturedChannels } from './components/FeaturedChannels';

// Internal Components
import { ItemVV2, SectionV2 } from 'components/reusables/SharedStylingV2';

// Internal Configs
import GLOBALS, { device, globalsMargin } from 'config/Globals';

export type UserWelcomeProps = {};

const WelcomeModule: FC<UserWelcomeProps> = () => {
  const [showSubHeader, setSubHeaderVisibility] = useState(true);

  return (
    <Container>
      <ItemVV2>
        <DashboardHeader
          showSubHeader={showSubHeader}
          setSubHeaderVisibility={setSubHeaderVisibility}
        />

        {showSubHeader && <DashboardSubHeader />}

        <Box
          display="flex"
          flexDirection="column"
          gap="s6"
          width="100%"
        >
          <FeaturedChannels />
          <ChannelVariantsSection />
        </Box>
      </ItemVV2>
    </Container>
  );
};

export { WelcomeModule };

// Define how the module is fitted, define it align-self to strect to fill entire bounds
// Define height: inherit to cover entire height
const Container = styled(SectionV2)`
  align-items: center;
  align-self: center;
  background: transparent;
  border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  width: calc(
    100% - ${globalsMargin.MINI_MODULES.DESKTOP.RIGHT} - ${globalsMargin.MINI_MODULES.DESKTOP.LEFT} -
      ${GLOBALS.ADJUSTMENTS.PADDING.BIG} - ${GLOBALS.ADJUSTMENTS.PADDING.BIG}
  );
  padding: ${GLOBALS.ADJUSTMENTS.PADDING.BIG};
  padding-top: 0;
  position: relative;
  margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${globalsMargin.MINI_MODULES.TABLET.RIGHT} - ${globalsMargin.MINI_MODULES.TABLET.LEFT} -
        ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }

  @media ${device.mobileM} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${globalsMargin.MINI_MODULES.MOBILE.RIGHT} - ${globalsMargin.MINI_MODULES.MOBILE.LEFT} -
        ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }
`;
