import { MessageIPFS } from 'helpers/w2w/ipfs'
// @ts-ignore
import { envConfig } from '@project/contracts'
import { MessageIPFSWithCID } from './w2w'

const BASE_URL = envConfig.w2wApiUrl

export const getFromIPFS = async (cid: string): Promise<MessageIPFSWithCID> => {
  const response: any = await fetch(BASE_URL + '/v1/ipfs/' + cid, {
    method: 'GET',
    headers: {
      'content-Type': 'application/json'
    }
  })
  const messageIPFS: MessageIPFS = await response.json()
  const messageIPFSWithCID: MessageIPFSWithCID = { ...messageIPFS, cid }
  return messageIPFSWithCID
}
