import { PushAPI } from '@pushprotocol/restapi';
import { UpdateProfileInfoResponse } from 'queries/types';

// Assuming PushAPI.Profile is the type you want to use for userPushSDKInstance
type UpdateUserProfileParams = {
  userPushSDKInstance: PushAPI;
  name: string | null;
  desc: string | null;
  picture: string | null;
};

export const updateUserProfileInfo = async ({
  userPushSDKInstance,
  name,
  desc,
  picture,
}: UpdateUserProfileParams): Promise<UpdateProfileInfoResponse> => {
  const res = await userPushSDKInstance.profile.update({
    name: name as string,
    desc: desc ? desc : '',
    picture: picture as string,
  });
  return res;
};
