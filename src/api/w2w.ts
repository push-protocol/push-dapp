import { ToastPosition } from 'modules/chat/ChatModule';
// @ts-ignore
import { toast } from 'react-toastify';
import { Feeds, User } from 'types/chat';

// Internal configs
import { appConfig } from 'config';

// Constants
let BASE_URL = appConfig.apiUrl;

if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  BASE_URL = appConfig.w2wApiUrl;
} else {
  BASE_URL = appConfig.apiUrl;
}

// Done
export const getInbox = async (did: string): Promise<Feeds[]> => {
  let retry = 0;
  for (let i = 0; i < 3; i++) {
    try {
      const path = BASE_URL + '/v1/w2w/users/' + did + '/messages';
      const response = await fetch(path, {
        method: 'GET',
      });
      if (response.status >= 500) continue;
      const data: Feeds[] = await response.json();
      return data;
    } catch (err) {
      // if (retry > 1) {
      //   toast.error('An Error Occurred! Please Reload the Page', ToastPosition);
      // }
      console.log('Error in the API call', err);
      retry++;
      continue;
    }
  }
};

// TODO: Delete this function since it's calling the same endpoint as the `getInbox` above.
// Done
export const getIntents = async (did: string): Promise<Feeds[]> => {
  let retry = 0;

  for (let i = 0; i < 3; i++) {
    try {
      const response = await fetch(BASE_URL + '/v1/w2w/inbox/did', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          did,
        }),
      });
      const intents: Feeds[] = await response.json();
      return intents;
    } catch (err) {
      console.log('Retry', retry);
      if (retry > 1) {
        toast.error("Chat request can't be loaded! Please try again later", ToastPosition);
      }
      console.log('Error in the API call', err);
      retry++;
      continue;
    }
  }
};

export const getUser = async ({ did = '', caip10 = '' }: { did?: string; caip10?: string }): Promise<User> => {
  let retry = 0;

  for (let i = 0; i < 3; i++) {
    try {
      if (did && caip10) {
        throw new Error("Both properties can't be at the same time");
      }
      let path = '/v1/w2w/users';
      if (did) {
        path += `?did=${did}`;
      } else if (caip10) {
        path += `?caip10=${caip10}`;
      }
      const response = await fetch(BASE_URL + path, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data: User = await response.json();
      return data;
    } catch (err) {
      // if (retry > 1) {
      //   toast.error('An Error Occurred! Please Reload the Page', ToastPosition)
      // }
      console.log('Error in the API call', err);
      retry++;
      continue;
    }
  }
};


export const createUser = async ({
  caip10,
  did,
  publicKey,
  encryptedPrivateKey,
  encryptionType,
  signature,
  sigType,
}: {
  caip10: string;
  did: string;
  publicKey: string;
  encryptedPrivateKey: string;
  encryptionType: string;
  signature: string;
  sigType: string;
}): Promise<User> => {
  const response = await fetch(BASE_URL + '/v1/w2w/users', {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify({
      caip10,
      did,
      publicKey,
      encryptedPrivateKey,
      encryptionType,
      signature,
      sigType,
    }),
  });
  const data: User = await response.json();
  return data;
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
