import { useQuery } from '@tanstack/react-query';

//Constants
import { channelDelegates } from '../../queryKeys';

//Services
import { getChannelDelegates } from '../../services';

//Types
import { PushAPI } from '@pushprotocol/restapi';

export const useGetChannelDelegates = (userPushSDKInstance: PushAPI, channelAddressinCAIP: string) => {
  const query = useQuery({
    queryKey: [channelDelegates, channelAddressinCAIP],
    queryFn: () => getChannelDelegates({ userPushSDKInstance, channelAddressinCAIP })
  });
  return query;
};
