import { Box, Separator } from 'blocks';
import { appConfig } from 'config';
import { ChannelListItem } from './ChannelListItem';
import { hottestChannels } from '../Dashboard.constants';
import { EnvKeys } from '../Dashboard.types';

const HottestChannelsList = () => {
  return hottestChannels[appConfig.appEnv as EnvKeys]?.map((channel, index) => (
    <Box>
      <ChannelListItem
        key={`${index}`}
        allowSubscribe={false}
        channelAddress={channel}
      />
      {index != hottestChannels[appConfig.appEnv as EnvKeys].length - 1 && <Separator />}
    </Box>
  ));
};

export { HottestChannelsList };
