// External Packages
import * as PushAPI from '@pushprotocol/restapi';

// Internal Configs
import { appConfig } from 'config';

// Types
type Props = {
  channel: string;
};

export const getChannel = async ({ channel }: Props) => {
  try {
    return await PushAPI.channels.getChannel({ channel, env: appConfig.appEnv });
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
};
