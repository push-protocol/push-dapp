import { EnvHelper } from "./UtilityHelper";
import ipfsClient from 'ipfs-http-client';

export const productionIpfsGateway: string = 'https://epns-gateway.infura-ipfs.io/ipfs/';
export const developmentIpfsGateway: string = 'https://epns-testing.infura-ipfs.io/ipfs/';

export const IPFSGateway = EnvHelper.isProduction() ? productionIpfsGateway : developmentIpfsGateway;

export const IPFSupload = async (input: string) => {
  const bufferInput = Buffer.from(input);
  const projectId = process.env.REACT_APP_IPFS_PROJECT_ID;
  const projectSecret = process.env.REACT_APP_IPFS_PROJECT_SECRET;
  const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

  const client = ipfsClient({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    apiPath: '/api/v0/add',
    headers: {
      authorization: auth
    }
  });

  try {
    const storagePointer = await client.add(bufferInput, {pin: true});
    return storagePointer[0]['hash'];
  } catch (err) {
    throw Error(err);
  }
}