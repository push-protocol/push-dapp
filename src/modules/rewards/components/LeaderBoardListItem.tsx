import { FC, useState } from 'react';

import { css } from 'styled-components';

//Hooks
import { useBlocksTheme } from 'blocks/Blocks.hooks';

import { Box, Text } from 'blocks';

export type LeaderboardListItemProps = {
  rank: string;
  address: string;
  points: string;
};

const LeaderboardListItem: FC<LeaderboardListItemProps> = ({ rank, address, points }) => {
  const [isChainVisible, setChainVisibility] = useState(false);

  const { mode } = useBlocksTheme();

  const handleShowChain = () => setChainVisibility(true);

  const handleHideChain = () => setChainVisibility(false);

  return (
    <Box
      height="56px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      cursor="pointer"
      css={css`
        border-bottom: 1px solid var(--${mode === 'dark' ? 'gray-800' : 'gray-200'});
      `}
      onMouseEnter={handleShowChain}
      onMouseLeave={handleHideChain}
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
          {/* to be replace by an image */}
          {isChainVisible && (
            <Box
              width="24px"
              height="24px"
              backgroundColor="pink-300"
              borderRadius="r10"
            />
          )}
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
