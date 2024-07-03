import { FC } from 'react';
import { Box, Text } from 'blocks';

const PointsVaultListColumns: FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
    >
      <Box width="345px">
        <Text
          variant="c-bold"
          color={{ light: 'gray-500', dark: 'gray-600' }}
        >
          USER
        </Text>
      </Box>

      <Box width="345px">
        <Text
          variant="c-bold"
          color={{ light: 'gray-500', dark: 'gray-600' }}
        >
          TWITTER LINK
        </Text>
      </Box>

      <Box
        width="42px"
        justifyContent="center"
        display="flex"
      >
        <Text
          variant="c-bold"
          color={{ light: 'gray-500', dark: 'gray-600' }}
        >
          FOLLOWERS
        </Text>
      </Box>

      <Box
        width="245px"
        display="flex"
        justifyContent="center"
      >
        <Text
          variant="c-bold"
          color={{ light: 'gray-500', dark: 'gray-600' }}
        >
          ACTION
        </Text>
      </Box>
    </Box>
  );
};

export { PointsVaultListColumns };
