// Internal Components
import * as PushAPI from '@pushprotocol/restapi';
import { appConfig } from 'config';

// Types
type ALIAS_CHAIN = 'POLYGON' | 'BSC' | 'OPTIMISM';

type Props = {
  account: string;
  chainId: ALIAS_CHAIN;
};

export const getAliasDetails = async ({ account, chainId }: Props) => {
  try {
    const response = await PushAPI.alias.getAliasInfo({ alias: account, aliasChain: chainId, env: appConfig.appEnv });
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};
