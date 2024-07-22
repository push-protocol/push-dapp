import { Box } from 'blocks';

//fix the height
export const getReactNodeIcon = ({ icon, alt }: { icon: string; alt: string }) => {
  return (
    <Box
      width="24px"
      height="24px"
      borderRadius="radius-xxs"
      overflow="hidden"
    >
      <img
        width="100%"
        height="100%"
        src={icon}
        alt={alt}
      />
    </Box>
  );
};

//add types
export const getChannelChainList = (channelDetails) => {
  const aliases = channelDetails?.aliases?.map((alias) => alias.alias_blockchain_id) || [];
  return [...aliases, 11155111];
};

export const getChannelDelegatesOptions = (channelDetails) => {
  //map delegates here
  if (channelDetails)
    return [
      {
        icon: getReactNodeIcon({ icon: channelDetails.iconV2, alt: channelDetails.name }),
        label: channelDetails?.name,
        value: channelDetails?.channel,
      },
    ];
  return [];
};

export const getChannelSettingsOptions = (channelDetails) => {
  let settingsOptions = [];
  const defaultOption = { label: 'Default', value: '0' };
  if (channelDetails) {
    settingsOptions = JSON.parse(channelDetails?.channel_settings)?.map((settings, index) => ({
      label: settings?.description,
      value: (index + 1).toString(),
    }));
  }
  return [...settingsOptions, defaultOption];
};
