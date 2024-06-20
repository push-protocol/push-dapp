// React and other libraries
import { FC, LegacyRef } from 'react';

// Third-party libraries
import { css } from 'styled-components';

//Hooks
import { useBlocksTheme } from 'blocks/Blocks.hooks';

//Components
import { Box, Skeleton, Text } from 'blocks';
import Blockies from 'components/BlockiesIdenticon';

//Utility helper
import { shortenText } from 'helpers/UtilityHelper';

export type LeaderboardListItemProps = {
  rank: number;
  address: string;
  points: number;
  isLoading: boolean;
  ref: LegacyRef<HTMLElement>;
};

const LeaderboardListItem: FC<LeaderboardListItemProps> = ({ rank, address, points, isLoading, ref }) => {
  const { mode } = useBlocksTheme();
  return (
    <Box
      ref={ref}
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
      <Skeleton isLoading={isLoading}>
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
            <Box
              width="32px"
              height="32px"
              borderRadius="r10"
              overflow="hidden"
            >
              <Blockies
              // seed={address?.toLowerCase()}
              // opts={{ seed: address?.toLowerCase(), size: 7, scale: 7 }}
              />
            </Box>
            <Text
              variant="bm-bold"
              display={{ ml: 'none', dp: 'block' }}
              color={{ light: 'gray-1000', dark: 'gray-100' }}
            >
              {shortenText(address, 10, 10)}
            </Text>
            <Text
              variant="bs-bold"
              display={{ ml: 'block', dp: 'none' }}
              color={{ light: 'gray-1000', dark: 'gray-100' }}
            >
              {shortenText(address, 10, 10)}
            </Text>
          </Box>
        </Box>
      </Skeleton>

      <Skeleton isLoading={isLoading}>
        <Box
          width="88px"
          minWidth="88px"
          minHeight="22px"
          display="flex"
          justifyContent="center"
        >
          <Text
            variant="bm-bold"
            display={{ ml: 'none', dp: 'block' }}
            color={{ light: 'gray-1000', dark: 'gray-100' }}
          >
            {points}
          </Text>
          <Text
            variant="bs-bold"
            display={{ ml: 'block', dp: 'none' }}
            color={{ light: 'gray-1000', dark: 'gray-100' }}
          >
            {points}
          </Text>
        </Box>
      </Skeleton>
    </Box>
  );
};

export { LeaderboardListItem };
