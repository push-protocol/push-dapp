// React and other libraries
import { FC, useContext } from 'react';

// Third-party libraries
import { css } from 'styled-components';
import BlockiesSvg from 'blockies-react-svg';
//Hooks
import { useBlocksTheme } from 'blocks/Blocks.hooks';

//Components
import { Box, Skeleton, Text } from 'blocks';

import { AppContext } from 'contexts/AppContext';

//Hooks
import { useResolveWeb3Name } from 'hooks/useResolveWeb3Name';

//Utility helper
import { shortenText } from 'helpers/UtilityHelper';

//Types
import { AppContextType } from 'types/context';

export type LeaderboardListItemProps = {
  rank: number;
  address: string;
  points: number;
  isLoading: boolean;
};

const LeaderboardListItem: FC<LeaderboardListItemProps> = ({ rank, address, points, isLoading }) => {
  const { mode } = useBlocksTheme();
  const { web3NameList }: AppContextType = useContext(AppContext)!;

  useResolveWeb3Name(address);

  const web3Name = web3NameList[address];
  const displayName = web3Name ? web3Name : shortenText(address, 10, 10);

  return (
    <Box
      height="56px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
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
              <BlockiesSvg
                address={address}
                size={8}
                scale={4}
              />
            </Box>
            <Text
              variant="bm-bold"
              display={{ ml: 'none', dp: 'block' }}
              color={{ light: 'gray-1000', dark: 'gray-100' }}
            >
              {displayName}
            </Text>
            <Text
              variant="bs-bold"
              display={{ ml: 'block', dp: 'none' }}
              color={{ light: 'gray-1000', dark: 'gray-100' }}
            >
              {displayName}
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
