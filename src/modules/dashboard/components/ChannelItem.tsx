// React and other libraries
import { FC } from 'react';

// Components
import { Box, Separator, Text } from 'blocks';

export type ChannelItemProps = {
  channelDetails: any;
};
const ChannelItem: FC<ChannelItemProps> = ({ channelDetails }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      margin="s2"
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
            color="gray-1000"
          >
            Unstoppable Domains
          </Text>
          <Text
            variant="c-regular"
            color="gray-600"
          >
            555 subscribers
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export { ChannelItem };
