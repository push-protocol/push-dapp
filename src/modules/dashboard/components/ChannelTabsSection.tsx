import { useEffect, useState } from 'react';

import { Box, Tabs } from 'blocks';

import { useAccount } from 'hooks';

import { ChannelTabs } from '../Dashboard.types';

import { dashboardChannelTabs } from '../Dashboard.constants';

import { getUpdatedDashboardTabs } from '../Dashboard.utils';

const ChannelTabsSection = () => {
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
