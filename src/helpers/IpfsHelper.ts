// External Packages
import { create } from 'ipfs-http-client';

// Internal Components
import { EnvHelper } from './UtilityHelper';

// Internal Configs
import { appConfig } from '../config/index.js';

// Constants
export const productionIpfsGateway: string = 'https://push.infura-ipfs.io/ipfs/';
export const developmentIpfsGateway: string = 'https://epns-testing.infura-ipfs.io/ipfs/';

export const IPFSGateway = EnvHelper.isProduction() ? productionIpfsGateway : developmentIpfsGateway;

export const IPFSupload = async (input: string): Promise<string> => {
  const bufferInput = Buffer.from(input);
  const projectId: string = appConfig.ipfsInfuraAPIKey;
  const projectSecret: string = appConfig.ipfsInfuraAPISecret;
  const auth: string = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

  const client = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    apiPath: '/api/v0',
    headers: {
      authorization: auth,
    },
  });

  try {
    const storagePointer = await client.add(bufferInput, { pin: true });
    return storagePointer?.path;

    // const pathHash = await ipfsUpload({ input });
    // return pathHash;
  } catch (err) {
    throw Error(err);
  }
};
