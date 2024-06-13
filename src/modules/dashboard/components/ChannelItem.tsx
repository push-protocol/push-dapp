// React and other libraries
import { FC } from 'react';

// Components
import { Box, Button, InboxBell, Text } from 'blocks';
import { useBlocksTheme } from 'blocks/Blocks.hooks';
import { css } from 'styled-components';
import { useGetChannelDetails } from 'queries';

export type ChannelItemProps = {
  channelAddress: string;
  subscribed?: boolean;
};
const ChannelItem: FC<ChannelItemProps> = ({ channelAddress, subscribed = false }) => {
  const { mode } = useBlocksTheme();
  const { data: channelDetails } = useGetChannelDetails(channelAddress);

  return channelDetails ? (
    <Box
      display="flex"
      justifyContent="space-between"
      margin="s2 s0"
    >
      <Box
        display="flex"
        gap="s3"
      >
        <Box
          width="40px"
          height="40px"
          borderRadius="var(--r3)"
          css={css`
            overflow: hidden;
          `}
        >
          <img
            width="100%"
            height="100%"
            src={channelDetails.icon}
            alt={channelDetails.name}
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
        >
          <Text
            variant="h5-semibold"
            color={{ light: 'gray-1000', dark: 'white' }}
          >
            {channelDetails.name}
          </Text>
          <Text
            variant="c-regular"
            color={{ light: 'gray-600', dark: 'gray-500' }}
          >
            {channelDetails.subscriberCount} subscribers
          </Text>
        </Box>
      </Box>
      {subscribed && (
        <Button
          size="small"
          iconOnly={<InboxBell />}
          variant={'tertiary'}
          css={css`
            background-color: ${mode === 'dark' ? '#484d58' : ''};
          `}
        />
      )}
    </Box>
  ) : null;
};

export { ChannelItem };
