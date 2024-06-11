import { Box, Text } from 'blocks';
import { FC } from 'react';

export type ChannelItemProps = {
  channelDetails: any;
};
const ChannelItem: FC<ChannelItemProps> = ({ channelDetails }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
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
            color="black"
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
