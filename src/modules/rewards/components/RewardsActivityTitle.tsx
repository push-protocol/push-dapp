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
        <Box display="flex" gap="s1">
          <Text variant="bl-semibold"> {preText}</Text>
          <Link color="pink-500" to={url} target="_blank" rel="noopener noreferrer">
            <Text variant="bl-semibold" color="pink-500">
              {linkedText}
            </Text>
          </Link>
          <Text variant="bl-semibold"> {postText}</Text>
        </Box>
      </Skeleton>
    );
  } else {
    return <Skeleton isLoading={isLoading}>
      <Text variant="bl-semibold" color={{ light: 'gray-1000', dark: 'gray-100' }}>
        {activityTitle}
      </Text>
    </Skeleton>
  }
};

export { RewardsActivityTitle };
