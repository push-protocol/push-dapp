// React and other libraries
import { FC } from 'react';

// components
import { Box, Clockwise, Text } from 'blocks';
import { StakePushActivitiesListItem } from './StakePushActivitiesListItem';
import { css } from 'styled-components';
import { RewardsActivityTitle } from './RewardsActivityTitle';

export type StakePushPoints = {
  stakeArray: any;
  title: string;
  subtitle: string;
  timeline?: boolean;
  bottomText?: boolean;
};

const StakePushSection: FC<StakePushPoints> = ({ title, subtitle, timeline, stakeArray, bottomText }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-md"
    >
      <Box
        display="flex"
        flexDirection={{ ml: 'column', initial: 'row' }}
        width="-webkit-fill-available"
        justifyContent="space-between"
        gap={{ ml: 'spacing-sm' }}
      >
        <Box>
          <Text
            variant="h4-bold"
            color="text-primary"
          >
            {title}
          </Text>

          <RewardsActivityTitle
            activityTitle={subtitle}
            isLoading={false}
            defaultColor="text-tertiary"
            defaultVariant="bm-regular"
          />
        </Box>

        {timeline && (
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap="spacing-xxxs"
          >
            <Clockwise
              size={24}
              color="icon-brand-medium"
            />
            <Text
              variant="bs-semibold"
              color="text-tertiary"
            >
              Activity resets in 13 days
            </Text>
          </Box>
        )}
      </Box>

      <Box
        display="grid"
        css={css`
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: var(--s4);
        `}
      >
        {stakeArray?.map((item: any) => (
          <StakePushActivitiesListItem item={item} />
        ))}
      </Box>

      {bottomText && (
        <Text
          variant="bm-regular"
          color="text-tertiary"
          textAlign="center"
        >
          Activity rewards will be distributed and added to your points after the epoch ends.
        </Text>
      )}
    </Box>
  );
};

export { StakePushSection };
