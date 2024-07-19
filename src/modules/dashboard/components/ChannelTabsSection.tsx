import { useEffect, useState } from 'react';
import { css } from 'styled-components';

import { Box, Text } from 'blocks';
import { useAccount } from 'hooks';
import { ChannelTabs } from '../Dashboard.types';
import { TrendingChannelsList } from './TrendingChannelsList';
import { SubscribedChannelsList } from './SubscribedChannelsList';
import { dahboardChannelTabs } from '../Dashboard.constants';
import { HottestChannelsList } from './HottestChannelsList';

const ChannelTabsSection = () => {
  const [selectedChannelTab, setSelectedChannelTab] = useState<ChannelTabs>(dahboardChannelTabs[0].value);
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
      gap="spacing-sm"
    >
      <Box width="100%">
        {/* TODO: Use Tabs component here */}
        <Box
          backgroundColor="surface-secondary"
          cursor="pointer"
          display="flex"
          gap="spacing-xxxs"
          padding="spacing-xxxs"
          height="fit-content"
          justifyContent="space-between"
          borderRadius="radius-sm"
          width={{ lp: 'auto', initial: 'fit-content' }}
        >
          {dahboardChannelTabs?.map((channelTab, index) => {
            if (channelTab.value === 'subscribed' && !isWalletConnected) return null;

            if (channelTab.value === 'hottest' && isWalletConnected) return null;

            return (
              <Box
                key={`${index}`}
                display="flex"
                justifyContent="center"
                width={{ ll: '100%' }}
                alignItems="center"
                padding="spacing-xxs spacing-xs"
                borderRadius="radius-sm"
                onClick={() => setSelectedChannelTab(channelTab.value)}
                css={css`
                  background-color: var(
                    --${selectedChannelTab === channelTab.value ? 'components-button-tertiary-background-inverse' : 'surface-transparent'}
                  );
                `}
              >
                <Text
                  variant="h5-semibold"
                  ellipsis={true}
                  css={css`
                    color: var(--components-button-secondary-text-default);
                  `}
                >
                  {channelTab?.label}
                </Text>
              </Box>
            );
          })}
        </Box>
      </Box>
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
        {selectedChannelTab === 'trending' && <TrendingChannelsList />}
        {selectedChannelTab === 'subscribed' && <SubscribedChannelsList />}
        {selectedChannelTab === 'hottest' && <HottestChannelsList />}
      </Box>
    </Box>
  );
};

export { ChannelTabsSection };
