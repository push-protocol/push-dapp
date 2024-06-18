import React from 'react';
import { css } from 'styled-components';
import { Box, Button, RewardsCircle, Text } from 'blocks';

export type RewardActivitiesListItemProps = {
  title: string;
  subtitle?: string;
  points: number;
  buttonText: string;
  disabled?: boolean;
};

const RewardActivitiesListItem: FC<RewardActivitiesListItemProps> = ({ item }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      padding="s6"
      backgroundColor={{ light: 'gray-100', dark: 'gray-1000' }}
      borderRadius="r4"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box
        display="flex"
        flexDirection="row"
        gap="s4"
        alignItems="center"
      >
        <RewardsCircle color={{ light: 'gray-1000', dark: 'gray-100' }} />
        <Box>
          <Text
            variant="bl-semibold"
            // color="gray-1000"
            color={{ light: 'gray-1000', dark: 'gray-100' }}
          >
            {item?.title}
          </Text>
          <Text
            variant="h5-regular"
            color="gray-500"
          >
            {item?.subtitle}
          </Text>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        gap="s2"
        alignItems="center"
      >
        <RewardsCircle
          width="32px"
          height="32px"
        />
        <Text
          variant="h4-semibold"
          color={{ light: 'gray-1000', dark: 'gray-100' }}
          css={css`
            margin-right: 24px;
          `}
        >
          {item?.points?.toLocaleString()} points
        </Text>
        <Button
          variant={item?.disabled ? 'disabled' : 'tertiary'}
          size="small"
          css={css`
            min-width: 100px;
          `}
        >
          {item?.buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export { RewardActivitiesListItem };
