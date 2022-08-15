import { ToastPosition, InboxChat } from 'components/chat/w2wChat/w2wIndex'
import { envConfig } from '@project/contracts'
import { toast } from 'react-toastify'
import { MessageIPFS } from 'helpers/w2w/ipfs'

const BASE_URL = envConfig.w2wApiUrl

export interface Feeds {
  // This property contains all the info to be displayed on the sidebar for the other peer's information
  // Such as the decrypted message content and peer's profilePicture
  msg: InboxChat
  did: string
  wallets: string
  profile_picture: string | null
  publicKey: string | null
  about: string | null
  threadhash: string | null
  intent: string | null
  intentSentBy: string | null
  intentTimestamp: Date
  combinedDID: string
}

export interface User {
  did: string
  wallets: string
  profile_picture: string | null
  publicKey: string
  encryptedPrivateKey: string
  encryptionType: string
  signature: string
  sigType: string
  about: string | null
  numMsg: number
  allowedNumMsg: number
  linkedListHash?: string | null
}

export const getInbox = async (did: string): Promise<Feeds[]> => {
  let retry = 0
  for (let i = 0; i < 3; i++) {
    try {
      const response = await fetch(BASE_URL + '/w2w/inbox/did/' + did, {
        method: 'POST'
      })
      if (response.status >= 500) continue
      const data: Feeds[] = await response.json()
      return data
    } catch (err) {
      if (retry > 1) {
        toast.error('An Error Occurred! Please Reload the Page', ToastPosition)
      }
      console.log('Error in the API call', err)
      retry++
      continue
    }
  }
}

export const getIntents = async (did: string): Promise<Feeds[]> => {
  let retry = 0

  for (let i = 0; i < 3; i++) {
    try {
      const response = await fetch(BASE_URL + '/w2w/inbox/did', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          did
        })
      })
      const intents: Feeds[] = await response.json()
      return intents
    } catch (err) {
      console.log('Retry', retry)
      if (retry > 1) {
        toast.error('Intent cannot be loaded! Please try again later', ToastPosition)
      }
      console.log('Error in the API call', err)
      retry++
      continue
    }
  }
}

export const getUser = async ({ did, wallet }: { did: string; wallet: string }): Promise<User> => {
  let retry = 0

  for (let i = 0; i < 3; i++) {
    try {
      const response = await fetch(BASE_URL + '/w2w/getUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          did,
          wallet
        })
      })
      const data: User = await response.json()
      return data
    } catch (err) {
      if (retry > 1) {
        toast.error('An Error Occurred! Please Reload the Page', ToastPosition)
      }
      console.log('Error in the API call', err)
      retry++
      continue
    }
  }
}

export const uploadUserProfileImage = async ({ did, imageCID }: { did: string; imageCID: string }): Promise<void> => {
  await fetch(BASE_URL + '/w2w/updateUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      did,
      imageCID
    })
  })
}

export const postMessage = async ({
  fromWallet,
  fromDID,
  toDID,
  messageContent,
  messageType,
  signature,
  encType,
  sigType,
  encryptedSecret
}: {
  fromWallet: string
  fromDID: string
  toDID: string
  messageContent: string
  messageType: string
  signature: string
  encType: string
  sigType: string
  encryptedSecret: string
}): Promise<MessageIPFS> => {
  const response = await fetch(BASE_URL + '/w2w/sendMessage', {
    method: 'POST',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify({
      fromWallet,
      fromDID,
      toDID,
      messageContent,
      messageType,
      signature,
      enc_type: encType,
      encryptedSecret,
      sigType: sigType
    })
  })
  if (response.status > 299) {
    throw new Error('Error posting message')
  }
  const data: MessageIPFS = await response.json()
  return data
}

export const createUser = async ({
  wallet,
  did,
  publicKey,
  encryptedPrivateKey,
  encryptionType,
  signature,
  sigType
}: {
  wallet: string
  did: string
  publicKey: string
  encryptedPrivateKey: string
  encryptionType: string
  signature: string
  sigType: string
}): Promise<User> => {
  const response = await fetch(BASE_URL + '/w2w/createUser', {
    method: 'POST',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify({
      wallet,
      did,
      publicKey,
      encryptedPrivateKey,
      encryptionType,
      signature,
      sigType
    })
  })
  const data: User = await response.json()
  return data
}

export const getLatestThreadhash = async ({
  firstDID,
  secondDID
}: {
  firstDID: string
  secondDID: string
}): Promise<string> => {
  const response = await fetch(BASE_URL + '/w2w/getMessages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstDID,
      secondDID
    })
  })
  if (response.status === 400) {
    throw new Error('Error fetching threadhash')
  }
  const data: string = await response.json()
  return data
}

export const approveIntent = async (
  fromDID: string,
  toDID: string,
  status: string,
  signature: string,
  sigType: string
): Promise<void> => {
  const response = await fetch(BASE_URL + '/w2w/updateIntent', {
    method: 'PUT',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify({
      toDID,
      fromDID,
      status,
      signature,
      sigType
    })
  })
  if (response.status < 200 || response.status > 299) {
    throw new Error('Error changing intent status')
  }
}

export const createIntent = async ({
  toDID,
  fromDID,
  fromWallet,
  message,
  messageType,
  signature,
  encType,
  sigType,
  encryptedSecret
}: {
  toDID: string
  fromDID: string
  fromWallet: string
  message: string
  messageType: string
  signature: string
  encType: string
  sigType: string
  encryptedSecret: string
}): Promise<MessageIPFS> => {
  if (message.length > 0) {
    const response = await fetch(BASE_URL + '/w2w/createIntent', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({
        toDID,
        fromDID,
        fromWallet,
        message,
        messageType,
        signature,
        encType,
        encryptedSecret,
        sigType
      })
    })
    const data = await response.json()
    return data
  } else {
    const response = await fetch(BASE_URL + '/w2w/createIntent', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({
        toDID,
        fromDID,
        fromWallet,
        messageType,
        signature,
        encType
      })
    })
    const data = await response.json()
    return data
  }
}

export const getRandomProfile = async (wallet: string): Promise<{ uniqueName: string; uniqueAvatar: string }> => {
  const response = await fetch(BASE_URL + '/w2w/getRandomProfile', {
    method: 'POST',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify({
      wallet
    })
  })
  const data: { uniqueName: string; uniqueAvatar: string } = await response.json()
  return data
}

export const getFromIPFS = async (cid: string): Promise<MessageIPFS> => {
  const response: any = await fetch(BASE_URL + '/w2w/getIPFS', {
    method: 'POST',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify({
      cid
    })
  })
  return await response.json()
}

export const updateUser = async ({ did, wallet = '' }: { did: string; wallet: string }): Promise<User> => {
  const response: any = await fetch(BASE_URL + '/w2w/updateUser', {
    method: 'POST',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify({
      did,
      wallet
    })
  })
  return await response.json()
}
