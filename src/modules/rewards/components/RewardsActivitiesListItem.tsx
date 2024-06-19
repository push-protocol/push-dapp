import { FC } from 'react';
import { css } from 'styled-components';
import { Box, Button, RewardsCircle, Text } from 'blocks';

export type RewardActivitiesListItemProps = {
  title: string;
  subtitle?: string;
  points: number;
  buttonText: string;
  disabled?: boolean;
};

const RewardsActivitiesListItem: FC<RewardActivitiesListItemProps> = ({
  title,
  subtitle,
  points,
  buttonText,
  disabled = false,
}) => {
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
        <RewardsCircle />
        <Box>
          <Text
            variant="bl-semibold"
            color={{ light: 'gray-1000', dark: 'gray-100' }}
          >
            {title}
          </Text>
          <Text
            variant="h5-regular"
            color="gray-500"
          >
            {subtitle}
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
          width={32}
          height={32}
        />
        <Text
          variant="h4-semibold"
          color={{ light: 'gray-1000', dark: 'gray-100' }}
          css={css`
            margin-right: 24px;
          `}
        >
          {points?.toLocaleString()} points
        </Text>
        <Button
          variant="tertiary"
          size="small"
          disabled={disabled}
          css={css`
            min-width: 100px;
          `}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export { RewardsActivitiesListItem };
