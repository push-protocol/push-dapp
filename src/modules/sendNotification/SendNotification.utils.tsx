import { NotificationType } from '@pushprotocol/restapi';

import { Box } from 'blocks';
import { appConfig } from 'config';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';

import { ChannelSetting } from 'helpers/channel/types';

import { ChannelDetails } from 'queries';

export const getChannelChainList = (channelDetails: ChannelDetails) => {
  const aliases =
    channelDetails?.aliases
      ?.filter((alias) => alias.is_alias_verified)
      ?.map((alias) => parseInt(alias.alias_blockchain_id)) || [];
  return [...aliases, appConfig.coreContractChain];
};

export const getChannelDelegatesOptions = (delegatees: [ChannelDetails]) => {
  if (delegatees && delegatees.length) {
    return delegatees?.map((channel) => ({
      icon: (
        <Box
          width="24px"
          height="24px"
          borderRadius="radius-xxs"
          overflow="hidden"
        >
          <img
            width="100%"
            height="100%"
            src={channel?.iconV2}
            alt={channel?.name}
          />
        </Box>
      ),
      label: channel?.name,
      value: channel?.channel,
    }));
  }

  return [];
};

export const getChannelSettingsOptions = (channelDetails: ChannelDetails) => {
  let settingsOptions = [];
  const defaultOption = { label: 'Default', value: '0' };
  if (channelDetails) {
    settingsOptions =
      JSON.parse(channelDetails?.channel_settings)?.map((settings: ChannelSetting, index: number) => ({
        label: settings?.description,
        value: (index + 1).toString(),
      })) || [];
  }
  return [...settingsOptions, defaultOption];
};

export const getRecipients = (type: NotificationType, recipient: string) => {
  if (recipient) {
    if (type === 'SUBSET') {
      return recipient.split(',');
    }
    if (type === 'TARGETTED') return [recipient];
  }
  return ['*'];
};

export const getChannelAddress = (channelOption: ChannelDetails, chainId: string, onCoreNetwork: boolean) => {
  console.debug(channelOption);
  if (onCoreNetwork) return convertAddressToAddrCaip(channelOption.channel, parseInt(chainId));
  else {
    const aliasAddress =
      channelOption.aliases.find((alias) => alias.alias_blockchain_id === chainId)?.alias_address ||
      channelOption.channel;
    return aliasAddress;
  }
};
