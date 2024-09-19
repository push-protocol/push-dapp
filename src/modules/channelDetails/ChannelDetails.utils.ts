import channelTuts from 'config/channelTuts';

export const getChannelTutorialDetails = (address: string) => {
  return Object.values(channelTuts).find((tutorial) => tutorial.maintainer === address) || null;
};
