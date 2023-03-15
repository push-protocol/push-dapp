import { walletToCAIP10 } from 'helpers/w2w';
import { displayDefaultUser } from 'helpers/w2w/user';
import { ConnectedUser, User } from 'types/chat';
import { decryptPGPKey } from './decryptPGPKey';
import { getUser } from './getUser';

export const getConnectedUser = async (account, library) => {
  try {
    const caip10: string = walletToCAIP10({ account });
    const user: User = await getUser(caip10);
    let connectedUser: ConnectedUser;

    if (user?.did.includes('did:3:')) {
      throw Error('Invalid DID');
    }

    if (user && user.encryptedPrivateKey) {
      if (user.wallets.includes(',') || !user.wallets.includes(caip10)) {
        throw Error('Invalid user');
      }

      const privateKeyArmored: string = await decryptPGPKey({
        signer: library.signer,
        encryptedPGPPrivateKey: user.encryptedPrivateKey,
      });
      connectedUser = { ...user, privateKey: privateKeyArmored };
    } else {
      connectedUser = { ...displayDefaultUser({ caip10 }), privateKey: '' };
    }
    return connectedUser;
  } catch (err) {
    throw new Error(err.message);
  }
};
