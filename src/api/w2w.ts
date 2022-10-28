// Internal components
import { InboxChat, ToastPosition } from 'sections/chat/ChatMainSection';
import { MessageIPFS } from 'helpers/w2w/ipfs';

// External Components
import { toast } from 'react-toastify';

// Internal configs
import { appConfig } from 'config';

// Constants
let BASE_URL = appConfig.apiUrl;

if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  BASE_URL = appConfig.w2wApiUrl;
} else {
  BASE_URL = appConfig.apiUrl;
}

export interface Feeds {
  // This property contains all the info to be displayed on the sidebar for the other peer's information
  // Such as the decrypted message content and peer's profilePicture
  msg: InboxChat;
  did: string;
  wallets: string;
  profilePicture: string | null;
  publicKey: string | null;
  about: string | null;
  threadhash: string | null;
  intent: string | null;
  intentSentBy: string | null;
  intentTimestamp: Date;
  combinedDID: string;
  cid: string;
}

export interface User {
  did: string;
  wallets: string;
  profilePicture: string | null;
  publicKey: string;
  encryptedPrivateKey: string;
  encryptionType: string;
  signature: string;
  sigType: string;
  about: string | null;
  name: string | null;
  numMsg: number;
  allowedNumMsg: number;
  linkedListHash?: string | null;
}

export interface ConnectedUser extends User {
  privateKey: string | null;
}

export interface MessageIPFSWithCID extends MessageIPFS {
  cid: string;
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

export const postMessage = async ({
  fromCAIP10,
  fromDID,
  toDID,
  toCAIP10,
  messageContent,
  messageType,
  signature,
  encType,
  sigType,
  encryptedSecret,
}: {
  fromCAIP10: string;
  fromDID: string;
  toCAIP10;
  toDID: string;
  messageContent: string;
  messageType: string;
  signature: string;
  encType: string;
  sigType: string;
  encryptedSecret: string;
}): Promise<MessageIPFSWithCID | string> => {
  const response = await fetch(BASE_URL + '/v1/w2w/messages', {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify({
      fromCAIP10,
      toCAIP10,
      fromDID,
      toDID,
      messageContent,
      messageType,
      signature,
      encType,
      encryptedSecret,
      sigType,
    }),
  });
  if (response.status > 299) {
    throw new Error('Error posting message');
  }
  const data: MessageIPFSWithCID | string = await response.json();
  return data;
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
  console.log('data', caip10, did);
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

export const approveIntent = async (
  fromDID: string,
  toDID: string,
  status: string,
  signature: string,
  sigType: string
): Promise<string> => {
  const response = await fetch(BASE_URL + '/v1/w2w/intents', {
    method: 'PUT',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify({
      toDID,
      fromDID,
      status,
      signature,
      sigType,
    }),
  });
  if (response.status < 200 || response.status > 299) {
    throw new Error('Error changing intent status');
  }
  return await response.json();
};

export const createIntent = async ({
  toDID,
  fromDID,
  fromCAIP10,
  toCAIP10,
  messageContent,
  messageType,
  signature,
  encType,
  sigType,
  encryptedSecret,
}: {
  toDID: string;
  fromDID: string;
  fromCAIP10: string;
  toCAIP10: string;
  messageContent: string;
  messageType: string;
  signature: string;
  encType: string;
  sigType: string;
  encryptedSecret: string;
}): Promise<MessageIPFSWithCID | string> => {
  let data: MessageIPFSWithCID | string;
  if (messageContent.length > 0) {
    const response = await fetch(BASE_URL + '/v1/w2w/intents', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({
        toDID,
        fromDID,
        fromCAIP10,
        toCAIP10,
        messageContent,
        messageType,
        signature,
        encType,
        encryptedSecret,
        sigType,
      }),
    });
    data = await response.json();
  } else {
    const response = await fetch(BASE_URL + '/v1/w2w/intents', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({
        toDID,
        fromDID,
        fromCAIP10,
        messageType,
        signature,
        encType,
      }),
    });
    data = await response.json();
  }
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
