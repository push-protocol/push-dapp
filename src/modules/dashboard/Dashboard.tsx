// React and other libraries
import { FC, useState } from 'react';

// Components
import { Box, Button, Modal } from 'blocks';
import { DashboardSubHeader } from './components/DashboardSubHeader';
import { FeaturedChannels } from './components/FeaturedChannels';
import { ChannelVariantsSection } from './components/ChannelVariantsSection';
import DashboardHeader from './components/DashboardHeader';
import { modal } from 'blocks';

export type DashboardProps = {};

const Dashboard: FC<DashboardProps> = () => {
  const [showSubHeader, setSubHeaderVisibility] = useState(false);

  return (
    <Box
      flexDirection="column"
      display="flex"
      margin={{ initial: 'spacing-sm spacing-xl spacing-sm spacing-xl', ml: 'spacing-sm', lp: 'spacing-sm' }}
      gap={{ ml: 'spacing-md' }}
      height="100%"
      width="auto"
    >
      <Button
        onClick={() => {
          modal.error({ title: 'This is the heading', description: 'This is some description', size: 'medium' });
        }}
      >
        toggle alert Modal
      </Button>
      <Button onClick={() => setSubHeaderVisibility(true)}>toggle Modal</Button>
      <Modal
        isOpen={showSubHeader}
        onClose={() => setSubHeaderVisibility(false)}
        onBack={() => setSubHeaderVisibility(false)}
        //  width="500px"
        size="large"
      >
        Hellow World
      </Modal>
      <DashboardHeader
        showSubHeader={showSubHeader}
        setSubHeaderVisibility={setSubHeaderVisibility}
      />

      {showSubHeader && <DashboardSubHeader />}
      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-md"
      >
        <FeaturedChannels />
        <ChannelVariantsSection />
      </Box>
    </Box>
  );
};

export { Dashboard };
