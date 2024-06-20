import { FC } from 'react';

//Components
import { Box, Button, Refresh, Text, UserSwitch } from 'blocks';

export type NullErrorLeaderboardListProps = {
  heading?: string;
  subHeading?: string;
  error?: boolean;
};
const NullErrorLeaderboardList: FC<NullErrorLeaderboardListProps> = ({ heading, subHeading, error = false }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="s4"
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

export { NullErrorLeaderboardList };
