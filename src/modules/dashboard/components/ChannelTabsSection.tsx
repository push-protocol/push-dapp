// React and other libraries
import { useEffect, useState } from 'react';

//Hooks
import { useAccount } from 'hooks';

// Constants
import { ChannelTabs } from '../Dashboard.types';

// Components
import { Box, TabItem, Tabs } from 'blocks';
import { TrendingChannelsList } from './TrendingChannelsList';
import { SubscribedChannelsList } from './SubscribedChannelsList';
import { dashboardChannelTabs } from '../Dashboard.constants';
import { HottestChannelsList } from './HottestChannelsList';

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

  const getUpdatedDashboardTabs = (dashboardChannelTabs: TabItem[]): TabItem[] => {
    if (!isWalletConnected) return dashboardChannelTabs.filter((tabs) => tabs.key !== 'subscribed');

    if (isWalletConnected) return dashboardChannelTabs.filter((tabs) => tabs.key !== 'hottest');
    return dashboardChannelTabs;
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width={{ ml: '100%', initial: '50%' }}
      gap="s4"
    >
      <Box width="100%">
        <Box
          backgroundColor={{ light: 'gray-100', dark: 'gray-1000' }}
          cursor="pointer"
          display="flex"
          gap="s1"
          padding="s1"
          height="fit-content"
          justifyContent="space-between"
          borderRadius="r4"
          width={{ lp: 'auto', initial: 'fit-content' }}
        >
          {/* {dashboardChannelTabs?.map((channelTab, index) => {
            if (channelTab.key === 'subscribed' && !isWalletConnected) return null;

            if (channelTab.key === 'hottest' && isWalletConnected) return null;

            return (
              // <Box
              //   key={`${index}`}
              //   display="flex"
              //   justifyContent="center"
              //   width={{ ll: '100%' }}
              //   alignItems="center"
              //   padding="s2 s3"
              //   borderRadius="r4"
              //   backgroundColor={
              //     selectedChannelTab === channelTab.value ? { dark: 'gray-800', light: 'white' } : 'transparent'
              //   }
              //   onClick={() => setSelectedChannelTab(channelTab.value)}
              // >
              //   <Text
              //     color={{ light: 'gray-1000', dark: 'white' }}
              //     variant="h5-semibold"
              //     ellipsis={true}
              //   >
              //     {channelTab?.label}
              //   </Text>
              // </Box>
              <Tabs
                items={[]}
                activeKey={selectedChannelTab}
                variant="fill"
                onChange={() => setSelectedChannelTab(channelTab.key)}
              />
            );
          })} */}
          <Tabs
            items={getUpdatedDashboardTabs(dashboardChannelTabs)}
            activeKey={selectedChannelTab}
            variant="fill"
            onChange={(activeKey) => setSelectedChannelTab(activeKey as ChannelTabs)}
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        overflow="hidden auto"
        borderRadius="r6"
        minHeight="285px"
        maxHeight="285px"
        border={{ light: '1px solid gray-200', dark: '1px solid gray-800' }}
        padding="s2 s4"
      >
        {selectedChannelTab === 'trending' && <TrendingChannelsList />}
        {selectedChannelTab === 'subscribed' && <SubscribedChannelsList />}
        {selectedChannelTab === 'hottest' && <HottestChannelsList />}
      </Box>
    </Box>
  );
};

export { ChannelTabsSection };
