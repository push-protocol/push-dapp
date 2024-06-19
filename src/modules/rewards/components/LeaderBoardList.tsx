// React and other libraries
import { FC } from 'react';

//Components
import { LeaderboardListItem } from './LeaderBoardListItem';

import { Box, Skeleton } from 'blocks';

export type LeaderBoardListProps = {};

const LeaderBoardList: FC<LeaderBoardListProps> = () => (
  <Box
    maxHeight="calc(100vh - 356px)"
    overflow="scroll"
  >
    {dummyData.map((item, index) => (
      <Skeleton
        isLoading={false}
        key={`${index}`}
      >
        <LeaderboardListItem
          rank={`${index + 1}`}
          address={item.wallet}
          points={item.points}
        />
      </Skeleton>
    ))}
  </Box>
);

export { LeaderBoardList };

const dummyData = [
  { wallet: 'w2d3f3f23ddsqwdqwdqwd232132321we12s1', points: '12,132' },
  { wallet: 'w2d3f3f23ddsqwdqwdqwd232132321we12s1', points: '1121' },
  { wallet: 'w2d3f3f232321we12s1', points: '1232' },
  { wallet: 'e232weqe2323232323232323232323', points: '12' },
  { wallet: 'w2d3f3f23ddsqwdqwdqwd232132321we12s1', points: '12,132' },
  { wallet: 'w2d3f3f23ddsqwdqwdqwd232132321we12s1', points: '12,132' },
  { wallet: 'w2d3f3f23ddsqwdqwdqwd232132321we12s1', points: '12,132' },
  { wallet: 'w2d3f3f23ddsqwdqwdqwd232132321we12s1', points: '12,132' },
  { wallet: 'w2d3f3f23ddsqwdqwdqwd232132321we12s1', points: '12,132' },
  { wallet: 'w2d3f3f23ddsqwdqwdqwd232132321we12s1', points: '12,132' },
];
