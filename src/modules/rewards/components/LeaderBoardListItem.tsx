// React and other libraries
import { FC } from 'react';

// Third-party libraries
import { css } from 'styled-components';

//Hooks
import { useBlocksTheme } from 'blocks/Blocks.hooks';

//Components
import { Box, Text } from 'blocks';

export type LeaderboardListItemProps = {
  rank: string;
  address: string;
  points: string;
};

const LeaderboardListItem: FC<LeaderboardListItemProps> = ({ rank, address, points }) => {
  const { mode } = useBlocksTheme();

  return (
    <Box
      height="56px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      cursor="pointer"
      // TODO: Fix ds-blocks
      css={css`
        border-bottom: 1px solid var(--${mode === 'dark' ? 'gray-800' : 'gray-200'});
      `}
    >
      <Box
        display="flex"
        gap="s3"
        alignItems="center"
      >
        <Box
          width="34px"
          justifyContent="center"
          display="flex"
        >
          <Text
            variant="bm-bold"
            color={{ light: 'gray-1000', dark: 'gray-100' }}
          >
            {rank}
          </Text>
        </Box>
        <Box
          display="flex"
          gap="s3"
          alignItems="center"
        >
          {/* to be replace by an image */}
          <Box
            width="32px"
            height="32px"
            backgroundColor="black"
            borderRadius="r10"
          />
          <Text
            variant="bm-bold"
            color={{ light: 'gray-1000', dark: 'gray-100' }}
          >
            {address}
          </Text>
        </Box>
      </Box>
      <Box
        width="88px"
        minWidth="88px"
        display="flex"
        justifyContent="center"
      >
        <Text
          variant="bm-bold"
          color={{ light: 'gray-1000', dark: 'gray-100' }}
        >
          {points}
        </Text>
      </Box>
    </Box>
  );
};

export { LeaderboardListItem };
