import { FC } from 'react';

import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';

//Hooks
import { LeaderboardModelledResponse } from 'queries';

//Components
import { Box, Button, Refresh, Text, UserSwitch } from 'blocks';

export type LeaderBoardNullStateProps = {
  heading?: string;
  subHeading?: string;
  error?: boolean;
  refetchLeaderboard?:
    | (() => void)
    | ((options?: RefetchOptions | undefined) => Promise<QueryObserverResult<LeaderboardModelledResponse, Error>>);
};
const LeaderBoardNullState: FC<LeaderBoardNullStateProps> = ({
  heading,
  subHeading,
  error = false,
  refetchLeaderboard,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="s4"
      padding="s15"
      height="200px"
    >
      <UserSwitch
        size={48}
        color="gray-300"
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="s1"
      >
        {heading && (
          <Text
            textAlign="center"
            variant="h5-bold"
            color={{ light: 'black', dark: 'white' }}
          >
            {heading}
          </Text>
        )}
        {subHeading && (
          <Text
            textAlign="center"
            variant="bs-regular"
            color={{ light: 'gray-600', dark: 'gray-500' }}
          >
            {subHeading}
          </Text>
        )}
      </Box>

      {error && (
        <Button
          onClick={() => refetchLeaderboard?.()}
          variant="tertiary"
          size="small"
          leadingIcon={<Refresh />}
        >
          Refresh
        </Button>
      )}
    </Box>
  );
};

export { LeaderBoardNullState };
