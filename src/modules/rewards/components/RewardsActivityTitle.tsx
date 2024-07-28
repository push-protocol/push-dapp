import { Box, Link, Skeleton, Text } from 'blocks';
import { FC } from 'react';
import { getRewardsActivityTitle } from '../utils/getRewardsActivityTitle';
import { TextVariants } from 'blocks/text';
import { TextColors } from 'blocks/theme/Theme.types';

type RewardsActivityTitleProps = {
  activityTitle: string;
  isLoading: boolean;
  defaultColor?: TextColors;
  defaultVariant?: TextVariants;
};

const RewardsActivityTitle: FC<RewardsActivityTitleProps> = ({
  activityTitle,
  isLoading,
  defaultColor,
  defaultVariant,
}) => {
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
            variant={defaultVariant || 'bl-semibold'}
            color={defaultColor || 'text-primary'}
          >
            {preText}
          </Text>
          <Link
            to={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text
              variant={defaultVariant || 'bl-semibold'}
              color="text-brand-medium"
            >
              {linkedText}
            </Text>
          </Link>
          <Text
            variant={defaultVariant || 'bl-semibold'}
            color={defaultColor || 'text-primary'}
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
          variant={defaultVariant || 'bl-semibold'}
          color={defaultColor || 'text-primary'}
        >
          {activityTitle}
        </Text>
      </Skeleton>
    );
  }
};

export { RewardsActivityTitle };
