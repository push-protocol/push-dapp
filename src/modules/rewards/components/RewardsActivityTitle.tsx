// React and other libraries
import { FC } from 'react';

// third party libraries
import { css } from 'styled-components';

// hooks
import { getRewardsActivityTitle } from '../utils/getRewardsActivityTitle';

// types
import { TextVariants } from 'blocks/text';
import { TextColors } from 'blocks/theme/Theme.types';

// components
import { Box, Skeleton, Text } from 'blocks';

type RewardsActivityTitleProps = {
  activityTitle: string;
  isLoading: boolean;
  color?: TextColors;
  variant?: TextVariants;
};

const RewardsActivityTitle: FC<RewardsActivityTitleProps> = ({ activityTitle, isLoading, color, variant }) => {
  const extractedTitle = getRewardsActivityTitle(activityTitle);

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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

          <Text
            variant={variant || 'bl-semibold'}
            color="text-brand-medium"
            onClick={() => handleLinkClick(url)}
            as="span"
            css={css`
              cursor: pointer;
            `}
          >
            {linkedText}
          </Text>

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
