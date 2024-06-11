import { FC } from 'react';
import { Box, Text } from 'blocks';
import IllustrationComponent from './components/IllustrationComponent';
import FeaturedNotificationComponent from './components/FeaturedNotificationComponent';
import { css } from 'styled-components';
import ScrollAnimationComponent from './components/ScrollAnimationComponent';
export type DashboardProps = {}

const Dashboard: FC<DashboardProps> = () => {
  return (
    <Box height="100vh" padding='s4 s7 s0 s7'>

      <Box flexDirection='row' display='flex' gap='s3'>
        <Text variant='h3-semibold'>👋</Text>
        <Text variant='h3-semibold'>GM! Welcome to Push.</Text>
      </Box>

      <IllustrationComponent />
      {/* <FeaturedNotificationComponent /> */}

      <ScrollAnimationComponent />




    </Box>
  );
};

export { Dashboard };