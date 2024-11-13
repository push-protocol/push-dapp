import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { userSocialStatus } from '../../queryKeys';
import { getUserSocialsStatus } from '../../services';

//Types
import { UserSocialStatusResponse } from 'queries/types';

export const useGetSocialsStatus = (
  channelAddress: string,
  config?: Partial<UseQueryOptions<UserSocialStatusResponse>>
) => {
  const query = useQuery<UserSocialStatusResponse>({
    queryKey: [userSocialStatus, channelAddress],
    queryFn: () => getUserSocialsStatus({ channelAddress }),
    ...config,
  });
  return query;
};
