import { FC, useState } from 'react';
import { Add, Box, Button, Dash, HoverableSVG, Text } from 'blocks';
import IllustrationComponent from './components/IllustrationComponent';
import FeaturedNotificationComponent from './components/FeaturedNotificationComponent';


export type DashboardProps = {}

const Dashboard: FC<DashboardProps> = () => {

  const [showWelcomeIllustrations, setShowWelcomeIllustrations] = useState(true);

  return (
    <Box height="100vh" padding='s4 s7 s0 s7' >

      <Box flexDirection='row' display='flex' justifyContent='space-between'>
        <Box flexDirection='row' display='flex' gap='s3'>
          <Text variant='h3-semibold'>👋</Text>
          <Text variant='h3-semibold' color={{ light: 'black', dark: 'white' }}>GM! Welcome to Push.</Text>
        </Box>

        <Box onClick={() => setShowWelcomeIllustrations(!showWelcomeIllustrations)}>
          {showWelcomeIllustrations ? (
            <HoverableSVG icon={<Dash size={20} color={{ light: 'gray-300', dark: 'gray-700' }} />}></HoverableSVG>
          ) : (
            <HoverableSVG icon={<Add size={20} color={{ light: 'gray-300', dark: 'gray-700' }} />}></HoverableSVG>
          )}
        </Box>
      </Box>

      {showWelcomeIllustrations && (<IllustrationComponent />)}

      <FeaturedNotificationComponent />

    </Box>
  );
};

export { Dashboard };

