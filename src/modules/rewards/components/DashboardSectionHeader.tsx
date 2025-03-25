// React and other libraries
import { FC } from 'react';

// Third party libraries
import { css } from 'styled-components';

//components
import { Box, Button, Link, Points, Text } from 'blocks';

export type DashboardSectionHeaderProps = {
  onGetStarted?: () => void;
};

const DashboardSectionHeader: FC<DashboardSectionHeaderProps> = ({}) => {
  const handleGoToNewSeason = () => {
    window.open('http://portal.push.org/rewards');
  };
  return (
    <Box
      borderRadius="radius-md"
      display="flex"
      padding={{ tb: 'spacing-sm', initial: 'spacing-md' }}
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
        gap={{ tb: 'spacing-sm' }}
        alignItems={{ tb: 'stretch', initial: 'center' }}
        justifyContent="space-between"
      >
        <Box
          gap="spacing-xs"
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
              color="text-on-light-bg"
            >
              Push Points S2 is Live
            </Text>
            <Box maxWidth={{ tb: 'auto', initial: '607px' }}>
              <Text
                variant="bl-regular"
                color="text-on-light-bg"
              >
                Season 1 has ended and your points have been snapshot. Participate in Season 2 at{' '}
                <Link
                  to="https://portal.push.org/rewards"
                  target="_blank"
                  textProps={{
                    variant: 'bl-regular',
                    color: 'text-on-light-bg',
                    css: css`
                      display: inline;
                    `,
                  }}
                >
                  Push Portal
                </Link>
              </Text>
            </Box>
          </Box>
        </Box>

        <Button
          variant="tertiary"
          size="medium"
          onClick={handleGoToNewSeason}
        >
          Go To Season 2
        </Button>
      </Box>
    </Box>
  );
};

export { DashboardSectionHeader };
