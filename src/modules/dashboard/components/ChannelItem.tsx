// React and other libraries
import { FC } from 'react';

// Components
import { Box, Button, InboxBell, Skeleton, Text } from 'blocks';
import { useBlocksTheme } from 'blocks/Blocks.hooks';
import { css } from 'styled-components';

export type ChannelItemProps = {
  channelDetails: any;
};
const ChannelItem: FC<ChannelItemProps> = ({ channelDetails }) => {
  const { mode } = useBlocksTheme();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      margin="s2 s0"
    >
      <Box display="flex">
        <Box
          width="40px"
          height="40px"
        ></Box>
        <Box
          display="flex"
          flexDirection="column"
        >
          <Text
            variant="h5-semibold"
            color={{ light: 'gray-1000', dark: 'white' }}
          >
            Unstoppable Domains
          </Text>
          <Text
            variant="c-regular"
            color={{ light: 'gray-600', dark: 'gray-500' }}
          >
            555 subscribers
          </Text>
        </Box>
      </Box>
      <Button
        size="small"
        iconOnly={<InboxBell />}
        variant={'tertiary'}
        css={css`
          background-color: ${mode === 'dark' ? '#484d58' : ''};
        `}
      />
    </Box>
  );
};

export { ChannelItem };
