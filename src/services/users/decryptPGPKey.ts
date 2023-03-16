// External Packages
import * as PushAPI from '@pushprotocol/restapi';
import { SignerType } from '@pushprotocol/restapi';

//type
type DecryptPGPKeyInputType = {
  encryptedPGPPrivateKey: string;
  account?: string;
  signer?: SignerType;
};
export const decryptPGPKey = async (options: DecryptPGPKeyInputType) => {
  const { encryptedPGPPrivateKey, signer } = options;
  try {
    const decryptedPrivateKey: string = await PushAPI.chat.decryptPGPKey({
      encryptedPGPPrivateKey,
      signer,
    });
    return decryptedPrivateKey;
  } catch (err) {
    throw new Error(err.message);
  }
};
