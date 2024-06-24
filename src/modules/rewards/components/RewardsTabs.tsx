import { FC } from 'react';

import { css } from 'styled-components';

import { rewardsTabsList } from '../Rewards.constants';

import { useBlocksTheme } from 'blocks/Blocks.hooks';

import { Box, Text } from 'blocks';

import { RewardsTabs as RewardsTabsType } from '../Rewards.types';

export type RewardsTabsProps = {
  activeTab: RewardsTabsType;
  handleSetActiveTab: (tab: RewardsTabsType) => void;
};

const RewardsTabs: FC<RewardsTabsProps> = ({ activeTab, handleSetActiveTab }) => {
  const { mode } = useBlocksTheme();
  return (
    <Box
      display="flex"
      gap="s3"
      // TODO: Fix ds-blocks
      css={css`
        border-bottom: 1px solid var(--${mode === 'dark' ? 'gray-800' : 'gray-200'});
      `}
      justifyContent={{ ml: 'space-between', initial: 'flex-start' }}
    >
      {rewardsTabsList.map((tab) => (
        <Box
          key={`${tab.value}`}
          padding={{ ml: 's0 s0 s3 s0', initial: 's0 s4 s4 s4' }}
          cursor="pointer"
          onClick={() => handleSetActiveTab(tab.value)}
          css={css`
            margin-bottom: -1px;
            border-bottom: ${tab.value === activeTab ? '2px solid var(--pink-400)' : '0px'};
          `}
        >
          <Text
            variant="h5-semibold"
            display={{ ml: 'none', dp: 'block' }}
            color={{ light: 'gray-1000', dark: 'gray-200' }}
          >
            {tab.label}
          </Text>
          <Text
            variant="h6-semibold"
            display={{ ml: 'block', dp: 'none' }}
            color={{ light: 'gray-1000', dark: 'gray-200' }}
          >
            {tab.label}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export { RewardsTabs };
