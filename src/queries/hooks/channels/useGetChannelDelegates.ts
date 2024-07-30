import { useQuery } from '@tanstack/react-query';

//Constants
import { channelDelegates } from '../../queryKeys';

//Services
import { getChannelDelegates } from '../../services';

//Types
import { PushAPI } from '@pushprotocol/restapi';

export const useGetChannelDelegates = (userPushSDKInstance: PushAPI) => {
  const query = useQuery({
    queryKey: [channelDelegates, userPushSDKInstance?.account],
    queryFn: () => getChannelDelegates({ userPushSDKInstance })
  });
  return query;
};
