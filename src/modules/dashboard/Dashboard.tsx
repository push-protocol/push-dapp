// React + Web3 Essentials
import { FC, useState } from 'react';

// Internal Components
import { Add, Box, Dash, HoverableSVG, Text } from 'blocks';
import { IllustrationComponent } from './components/IllustrationComponent';
import { FeaturedNotificationComponent } from './components/FeaturedNotificationComponent';
import { TrendingRecommended } from './components/TrendingRecommended';

export type DashboardProps = {};

const Dashboard: FC<DashboardProps> = () => {
  const [showWelcomeIllustrations, setShowWelcomeIllustrations] = useState(true);

  return (
    <Box
      flexDirection="column"
      display="flex"
      margin="s4 s6 s4 s6"
      gap="s6"
    >
      <Box
        flexDirection="row"
        display="flex"
        justifyContent="space-between"
      >
        <Box
          flexDirection="row"
          display="flex"
          gap="s3"
        >
          <Text variant="h3-semibold">👋</Text>
          <Text
            variant="h3-semibold"
            color={{ light: 'black', dark: 'white' }}
          >
            GM! Welcome to Push.
          </Text>
        </Box>

        <Box onClick={() => setShowWelcomeIllustrations(!showWelcomeIllustrations)}>
          {showWelcomeIllustrations ? (
            <HoverableSVG
              icon={
                <Dash
                  size={20}
                  color={{ light: 'gray-300', dark: 'gray-700' }}
                />
              }
            ></HoverableSVG>
          ) : (
            <HoverableSVG
              icon={
                <Add
                  size={20}
                  color={{ light: 'gray-300', dark: 'gray-700' }}
                />
              }
            ></HoverableSVG>
          )}
        </Box>
      </Box>

      {showWelcomeIllustrations && <IllustrationComponent />}

      <Box
        display="flex"
        flexDirection="column"
        gap="s6"
      >
        <FeaturedNotificationComponent />

        <TrendingRecommended />
      </Box>
    </Box>
  );
};

export { Dashboard };
