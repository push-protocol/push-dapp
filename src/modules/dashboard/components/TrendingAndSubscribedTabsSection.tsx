// React and other libraries
import { useState } from 'react';

//Hooks
import { useAccount } from 'hooks';

// Constants
import { DashboardChannelTabType } from '../Dashboard.types';

// Components
import { Box, Text } from 'blocks';
import { TrendingChannelsList } from './TrendingChannelsList';
import { SubscribedChannelsList } from './SubscribedChannelsList';
import { dahboardChannelTabs } from '../Dashboard.constants';

const TrendingAndSubscribedTabsSection = () => {
  const [selectedChannelTab, setSelectedChannelTab] = useState<DashboardChannelTabType>(dahboardChannelTabs[0]);
  const { wallet } = useAccount();
  const isWalletConnected = !!wallet?.accounts?.length;
  console.debug(dahboardChannelTabs);
  // console.debug(dahboardChannelTabs.map((c) => console.log(c, 'test')));
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
          borderRadius="var(--r4)"
          width={{ lp: 'auto', initial: 'fit-content' }}
        >
          {dahboardChannelTabs?.map((channelTab, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="center"
              width={{ ll: '100%' }}
              alignItems="center"
              padding="s2 s3"
              borderRadius="var(--r4)"
              backgroundColor={selectedChannelTab === channelTab ? { dark: 'gray-800', light: 'white' } : 'transparent'}
              onClick={() => setSelectedChannelTab(channelTab)}
            >
              <Text
                color={{ light: 'gray-1000', dark: 'white' }}
                variant="h5-semibold"
                ellipsis={true}
              >
                {channelTab.value === 'subscribed'
                  ? isWalletConnected
                    ? channelTab?.label
                    : 'Hottest Channels'
                  : channelTab?.label}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        overflow="hidden auto"
        borderRadius="var(--r6)"
        maxHeight="285px"
        height="285px"
        border={{ light: '1px solid gray-200', dark: '1px solid gray-800' }}
        padding="s2 s4"
      >
        {selectedChannelTab.value === 'trending' && <TrendingChannelsList />}
        {selectedChannelTab.value === 'subscribed' && <SubscribedChannelsList />}
      </Box>
    </Box>
  );
};

export { TrendingAndSubscribedTabsSection };
