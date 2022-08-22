import ipfsClient from 'ipfs-http-client';

// Utility Helper Functions
const UtilityHelper = {
  isMainnet : (chainId) => {
    if (chainId === 1 || chainId === 137) {
      return true;
    }
  },
}

export const IPFSupload = async (input) => {
  input = Buffer.from(input);
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

  const storagePointer = await client.add(input, {pin: true});
  return storagePointer[0]['hash'];
}

// Disable the browser notification on Metamask iphone mobile
export const isUserAgentIphone = (userAgent) =>{
  return userAgent.indexOf("iPhone") !== -1
}

export default UtilityHelper;
