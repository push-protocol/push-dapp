// React and other libraries
import { FC } from 'react';

// hooks
import { getRewardsActivityTitle } from '../utils/getRewardsActivityTitle';

// types
import { TextVariants } from 'blocks/text';
import { TextColors } from 'blocks/theme/Theme.types';

// components
import { Box, Link, Skeleton, Text } from 'blocks';

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
          display="inline"
          gap="spacing-xxxs"
        >
          <Text
            variant={variant || 'bl-semibold'}
            color={color || 'text-primary'}
            as="span"
          >
            {preText}
          </Text>

          <Link
            to={url}
            isText
            target="_blank"
            textProps={{
              variant: variant || 'bl-semibold',
              color: 'text-brand-medium',
              display: 'inline-block',
            }}
          >
            {linkedText}
          </Link>

          <Text
            variant={variant || 'bl-semibold'}
            color={color || 'text-primary'}
            as="span"
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
