// React and other libraries
import { FC } from 'react';

// Third party libraries
import { css } from 'styled-components';

//components
import { Box, Button, Points, Text } from 'blocks';

export type DashboardSectionHeaderProps = {
  onGetStarted: () => void;
};

const DashboardSectionHeader: FC<DashboardSectionHeaderProps> = ({ onGetStarted }) => {
  return (
    <Box
      borderRadius="r6"
      display="flex"
      padding={{ tb: 's4', initial: 's6' }}
      alignItems="center"
      justifyContent="space-between"
      flexDirection={{ tb: 'column', initial: 'row' }}
      css={css`
        background: radial-gradient(circle, rgba(222, 190, 255, 1) 0%, rgba(192, 255, 247, 1) 85%);
      `}
    >
      <Box
        width="-webkit-fill-available"
        display="flex"
        flexDirection={{ tb: 'column', initial: 'row' }}
        gap={{ tb: 's4' }}
        alignItems={{ tb: 'stretch', initial: 'center' }}
        justifyContent="space-between"
      >
        <Box
          gap="s3"
          display="flex"
          alignItems="center"
        >
          <Points />
          <Box
            display="flex"
            flexDirection="column"
          >
            <Text
              variant="h4-semibold"
              color="black"
            >
              Earn Rewards for Exploring!
            </Text>
            <Box maxWidth={{ tb: 'auto', initial: '567px' }}>
              <Text
                variant="bl-regular"
                color="black"
              >
                Push Points are the new way to prove that you belong to the Push community and access to some cool
                surprises in the future.
              </Text>
            </Box>
          </Box>
        </Box>

        <Button
          variant="tertiary"
          size="medium"
          onClick={onGetStarted}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export { DashboardSectionHeader };
