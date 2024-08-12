import { useEffect, useState } from 'react';

import { Box, TabItem, Tabs } from 'blocks';

import { useAccount } from 'hooks';

import { ChannelTabs } from '../Dashboard.types';

import { HottestChannelsList } from './HottestChannelsList';
import { TrendingChannelsList } from './TrendingChannelsList';
import { SubscribedChannelsList } from './SubscribedChannelsList';

const ChannelTabsSection = () => {
  const dashboardChannelTabs: TabItem[] = [
    {
      label: 'Trending Channels',
      key: 'trending',
      children: (
        <Box
          display="flex"
          flexDirection="column"
          overflow="hidden auto"
          borderRadius="radius-md"
          minHeight="285px"
          maxHeight="285px"
          border="border-sm solid stroke-secondary"
          padding="spacing-xxs spacing-sm"
        >
          <TrendingChannelsList />
        </Box>
      ),
    },
    {
      label: 'Hottest Channels',
      key: 'hottest',
      children: (
        <Box
          display="flex"
          flexDirection="column"
          overflow="hidden auto"
          borderRadius="radius-md"
          minHeight="285px"
          maxHeight="285px"
          border="border-sm solid stroke-secondary"
          padding="spacing-xxs spacing-sm"
        >
          <HottestChannelsList />
        </Box>
      ),
    },
    {
      label: 'Subscribed',
      key: 'subscribed',
      children: (
        <Box
          display="flex"
          flexDirection="column"
          overflow="hidden auto"
          borderRadius="radius-md"
          minHeight="285px"
          maxHeight="285px"
          border="border-sm solid stroke-secondary"
          padding="spacing-xxs spacing-sm"
        >
          <SubscribedChannelsList />
        </Box>
      ),
    },
  ];
  const [selectedChannelTab, setSelectedChannelTab] = useState<ChannelTabs>(dashboardChannelTabs[0].key as ChannelTabs);
  const { wallet } = useAccount();

  const isWalletConnected = !!wallet?.accounts?.length;

  useEffect(() => {
    if (isWalletConnected) {
      const newTabValue = selectedChannelTab === 'hottest' ? 'subscribed' : selectedChannelTab;
      setSelectedChannelTab(newTabValue);
    } else {
      const newTabValue = selectedChannelTab === 'subscribed' ? 'hottest' : selectedChannelTab;
      setSelectedChannelTab(newTabValue);
    }
  }, [isWalletConnected]);

  const getUpdatedDashboardTabs = (dashboardChannelTabs: TabItem[], isWalletConnected: boolean): TabItem[] => {
    if (!isWalletConnected) return dashboardChannelTabs.filter((tabs) => tabs.key !== 'subscribed');

    if (isWalletConnected) return dashboardChannelTabs.filter((tabs) => tabs.key !== 'hottest');
    return dashboardChannelTabs;
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width={{ ml: '100%', initial: '50%' }}
    >
      <Tabs
        items={getUpdatedDashboardTabs(dashboardChannelTabs, isWalletConnected)}
        activeKey={selectedChannelTab}
        variant="fill"
        onChange={(activeKey) => setSelectedChannelTab(activeKey as ChannelTabs)}
      />
    </Box>
  );
};

export { ChannelTabsSection };
