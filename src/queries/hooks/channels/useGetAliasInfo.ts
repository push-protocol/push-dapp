import { useQuery } from '@tanstack/react-query';
import { AliasOptions } from '@pushprotocol/restapi';
import { useSelector } from 'react-redux';

import { aliasInfo } from '../../queryKeys';
import { getAliasInfo } from '../../services';

import { UserStoreType } from 'types';

export const useGetAliasInfo = (options: AliasOptions) => {
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });
  const query = useQuery({
    queryKey: [aliasInfo, options],
    queryFn: () => getAliasInfo({ userPushSDKInstance, options }),
  });
  return query;
};
