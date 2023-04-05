// External Packages
import * as PushAPI from "@pushprotocol/restapi";

// @ts-ignore
import { User } from 'types/chat';

// Internal configs
import { appConfig } from 'config';

// Constants
let BASE_URL = appConfig.apiUrl;

if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  BASE_URL = appConfig.w2wApiUrl;
} else {
  BASE_URL = appConfig.apiUrl;
}

export const getUser = async ({ did = '', caip10 = '' }: { did?: string; caip10?: string }): Promise<User> => {
  let retry = 0;

  for (let i = 0; i < 3; i++) {
    try {
      const userResponse = await PushAPI.user.get({
        account: did || caip10,
        env: appConfig.appEnv,
      })
      return userResponse;
    } catch (err) {
      console.log('Error in the API call', err);
      retry++;
      continue;
    }
  }
};

export const createUser = async ({
  signer
}): Promise<User> => {
  try {
    const userResponse = await PushAPI.user.create({
      signer: signer,
      env: appConfig.appEnv,
    })
    return userResponse;
  } catch (err) {
    console.log('Error in creating user', err.message);
  }
};

export const updateUser = async ({
  did,
  caip10 = '',
  profilePictureCID = '',
}: {
  did: string;
  caip10?: string;
  profilePictureCID?: string;
}): Promise<User> => {
  const response: any = await fetch(BASE_URL + '/v1/w2w/users', {
    method: 'PUT',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify({
      did,
      caip10,
      profilePictureCID,
    }),
  });
  return await response.json();
};
