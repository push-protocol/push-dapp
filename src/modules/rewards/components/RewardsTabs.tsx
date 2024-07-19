import { FC } from 'react';

import { css } from 'styled-components';

import { rewardsTabsList } from '../Rewards.constants';

import { Box, Text } from 'blocks';

import { RewardsTabs as RewardsTabsType } from '../Rewards.types';

export type RewardsTabsProps = {
  activeTab: RewardsTabsType;
  handleSetActiveTab: (tab: RewardsTabsType) => void;
};

const RewardsTabs: FC<RewardsTabsProps> = ({ activeTab, handleSetActiveTab }) => {
  // TODO: Use tab component
  return (
    <Box
      display="flex"
      gap="spacing-xs"
      css={css`
        border-bottom: var(--border-sm) solid var(--stroke-secondary);
      `}
      justifyContent={{ ml: 'space-between', initial: 'flex-start' }}
    >
      {rewardsTabsList.map((tab) => (
        <Box
          key={`${tab.value}`}
          padding={{
            ml: 'spacing-none spacing-none spacing-xs spacing-none',
            initial: 'spacing-none spacing-sm spacing-sm spacing-sm',
          }}
          cursor="pointer"
          onClick={() => handleSetActiveTab(tab.value)}
          css={css`
            margin-bottom: -1px;
            border-bottom: ${tab.value === activeTab ? 'var(--border-md) solid var(--stroke-brand-medium)' : '0px'};
          `}
        >
          <Text
            variant="h5-semibold"
            display={{ ml: 'none', dp: 'block' }}
            color="text-primary"
          >
            {tab.label}
          </Text>
          <Text
            variant="h6-semibold"
            display={{ ml: 'block', dp: 'none' }}
            color="text-primary"
          >
            {tab.label}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export { RewardsTabs };
