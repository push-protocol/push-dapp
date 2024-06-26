import { Box, Link, Skeleton, Text } from 'blocks';
import { FC } from 'react';

type RewardsActivityTitleProps = {
  activityTitle: string;
  isLoading: boolean;
};

const RewardsActivityTitle: FC<RewardsActivityTitleProps> = ({ activityTitle, isLoading }) => {

  // If url is present in the title
  const regex = /\[([^\]]+)\]\(([^)]+)\)/;
  const match = activityTitle?.match(regex);
  if (match) {
    const preText = activityTitle.substring(0, match.index);
    const linkedText = match[1];
    const url = match[2];
    let postText;
    if (match.index) {
      postText = activityTitle.substring(match.index + match[0].length);
    }

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
  }

  // If no url is present in the title
  return (
    <Skeleton isLoading={isLoading}>
      <Text variant="bl-semibold" color={{ light: 'gray-1000', dark: 'gray-100' }}>
        {activityTitle}
      </Text>
    </Skeleton>
  );
};

export { RewardsActivityTitle };
