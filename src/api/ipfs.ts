import { MessageIPFS } from 'helpers/w2w/ipfs';
// @ts-ignore
import { appConfig } from "config";
import { MessageIPFSWithCID } from './w2w';

let BASE_URL = appConfig.apiUrl
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  BASE_URL = appConfig.w2wApiUrl
} else {
  BASE_URL = appConfig.apiUrl
}

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

export const postIPFS = async (data: string): Promise<string> => {
  const response: any = await fetch(BASE_URL + '/v1/ipfs/upload', {
    method: 'POST',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify({
      data
    })
  })
  const cidResponse: { cid: string } = await response.json()
  return cidResponse.cid
}
