import { MessageIPFS } from 'helpers/w2w/ipfs'
// @ts-ignore
import { envConfig } from '@project/contracts'

const BASE_URL = envConfig.w2wApiUrl

export const getFromIPFS = async (cid: string): Promise<MessageIPFS> => {
  const response: any = await fetch(BASE_URL + '/v1/ipfs/' + cid, {
    method: 'GET',
    headers: {
      'content-Type': 'application/json'
    }
  })
  return await response.json()
}
