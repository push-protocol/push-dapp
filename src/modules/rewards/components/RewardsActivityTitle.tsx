import { Box, Link, Skeleton, Text } from 'blocks';
import { FC } from 'react';
import { getRewardsActivityTitle } from '../utils/getRewardsActivityTitle';
import { TextVariants } from 'blocks/text';
import { TextColors } from 'blocks/theme/Theme.types';

type RewardsActivityTitleProps = {
  activityTitle: string;
  isLoading: boolean;
  color?: TextColors;
  variant?: TextVariants;
};

const RewardsActivityTitle: FC<RewardsActivityTitleProps> = ({ activityTitle, isLoading, color, variant }) => {
  const extractedTitle = getRewardsActivityTitle(activityTitle);

  if (extractedTitle) {
    const { preText, url, linkedText, postText } = extractedTitle;
    return (
      <Skeleton isLoading={isLoading}>
        <Box
          display="flex"
          gap="spacing-xxxs"
        >
          <Text
            variant={variant || 'bl-semibold'}
            color={color || 'text-primary'}
          >
            {preText}
          </Text>
          <Link
            to={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text
              variant={variant || 'bl-semibold'}
              color="text-brand-medium"
            >
              {linkedText}
            </Text>
          </Link>
          <Text
            variant={variant || 'bl-semibold'}
            color={color || 'text-primary'}
          >
            {' '}
            {postText}
          </Text>
        </Box>
      </Skeleton>
    );
  } else {
    return (
      <Skeleton isLoading={isLoading}>
        <Text
          variant={variant || 'bl-semibold'}
          color={color || 'text-primary'}
        >
          {activityTitle}
        </Text>
      </Skeleton>
    );
  }
};

export { RewardsActivityTitle };
