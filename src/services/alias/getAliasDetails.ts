// Internal Components
import * as PushAPI from '@pushprotocol/restapi';
import { appConfig } from 'config';
import { aliasChainIdToChainName } from 'helpers/UtilityHelper';

type Props = {
  account: string;
  chainId: number;
};

export const getAliasDetails = async ({ account, chainId }: Props) => {
  try {
    const response = await PushAPI.alias.getAliasInfo({
      alias: account,
      aliasChain: aliasChainIdToChainName[chainId],
      env: appConfig.appEnv,
    });
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};
