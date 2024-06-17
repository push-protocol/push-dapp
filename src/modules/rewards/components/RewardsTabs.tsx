import { FC, useState } from 'react';
import { css } from 'styled-components';
import { Box, Text } from 'blocks';
import { rewardsTabsList } from '../Rewards.constants';
import { RewardsTabs as RewardsTabsType } from '../Rewards.types';

export type RewardsTabsProps = {
  activeTab: RewardsTabsType;
  handleSetActiveTab: (tab: RewardsTabsType) => void;
};

const RewardsTabs: FC<RewardsTabsProps> = ({ activeTab, handleSetActiveTab }) => {
  return (
    <Box
      display="flex"
      gap="s3"
      // TODO: fix the color
      css={css`
        border-bottom: 1px solid #eaebf2;
      `}
    >
      {rewardsTabsList.map((tab) => (
        <Box
          key={`${tab.value}`}
          padding="s0 s4 s4 s4"
          cursor="pointer"
          onClick={() => handleSetActiveTab(tab.value)}
          css={css`
            margin-bottom: -1px;
            border-bottom: ${tab.value === activeTab ? '2px solid var(--pink-400)' : '0px'};
          `}
        >
          <Text
            variant="h5-semibold"
            color="gray-1000"
          >
            {tab.label}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export { RewardsTabs };
