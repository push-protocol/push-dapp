import { Box, Link, Skeleton, Text } from 'blocks';
import { FC } from 'react';
import { getRewardsActivityTitle } from '../utils/getRewardsActivityTitle';

type RewardsActivityTitleProps = {
  activityTitle: string;
  isLoading: boolean;
};

const RewardsActivityTitle: FC<RewardsActivityTitleProps> = ({ activityTitle, isLoading }) => {
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
            variant="bl-semibold"
            color="text-primary"
          >
            {preText}
          </Text>
          <Link
            to={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text
              variant="bl-semibold"
              color="text-brand-medium"
            >
              {linkedText}
            </Text>
          </Link>
          <Text
            variant="bl-semibold"
            color="text-primary"
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
          variant="bl-semibold"
          color="text-primary"
        >
          {activityTitle}
        </Text>
      </Skeleton>
    );
  }
};

export { RewardsActivityTitle };
