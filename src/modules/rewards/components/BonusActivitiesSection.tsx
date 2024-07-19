// React and other libraries
import { FC } from 'react';

// third party libraries
import { css } from 'styled-components';

// components
import { Box, Text } from 'blocks';
import { BonusActivitiesItem } from './BonusActivitiesItem';

export type BonusActivitiesSectionProps = {};

const BonusActivities: FC<BonusActivitiesSectionProps> = () => {
  const bonusActivities = [
    {
      header: 'Create a Channel on Push',
      subheader: 'Visit app.push.org and create a notification channel.',
      points: 20000,
    },
    {
      header: '100 Subscribers',
      subheader: 'Get 100 Subscribers for your channel.',
      points: 500,
    },
    {
      header: '500 Subscribers',
      subheader: 'Get 500 Subscribers for your channel.',
      points: 3000,
    },
    {
      header: '1k Subscribers',
      subheader: 'Get 1,000 Subscribers for your channel.',
      points: 6000,
    },
    {
      header: '5k Subscribers',
      subheader: 'Get 5,000 Subscribers for your channel.',
      points: 32000,
    },
    {
      header: '10k Subscribers',
      subheader: 'Get 10,000 Subscribers for your channel.',
      points: 72000,
    },
    {
      header: '50k Subscribers',
      subheader: 'Get 50,000 Subscribers for your channel.',
      multipliers: 1.5,
    },
    {
      header: '100k Subscribers',
      subheader: 'Get 100,000 Subscribers for your channel.',
      multipliers: 2,
    },
  ];
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-sm"
    >
      <Text
        variant="h4-bold"
        color="text-primary"
      >
        Bonus Activities
      </Text>

      <Box
        display="grid"
        css={css`
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: var(--s4);

          @media (max-width: 1200px) {
            // grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          }
        `}
      >
        {bonusActivities.map((item) => (
          <BonusActivitiesItem item={item} />
        ))}
      </Box>
    </Box>
  );
};

export { BonusActivities };
