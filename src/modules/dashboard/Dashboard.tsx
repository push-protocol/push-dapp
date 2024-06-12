import { FC } from 'react';
import { Box, Text } from 'blocks';
import IllustrationComponent from './components/IllustrationComponent';
import FeaturedNotificationComponent from './components/FeaturedNotificationComponent';
import { css } from 'styled-components';
import ScrollAnimationComponent from './components/ScrollAnimationComponent';
import Carousel from './components/Carousel';
export type DashboardProps = {}

const Dashboard: FC<DashboardProps> = () => {

  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 6, name: 'Item 6' },
    { id: 7, name: 'Item 7' },
    { id: 8, name: 'Item 8' },
    { id: 9, name: 'Item 9' },
    { id: 10, name: 'Item 10' },
  ];


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