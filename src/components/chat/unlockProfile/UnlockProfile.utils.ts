import { PushAPI } from '@pushprotocol/restapi';

export const checkUnlockProfileErrors = (user: PushAPI) => {
  const userMessage = 'Error decrypting PGP private key ...swiching to Guest mode';
  const errorExists = user?.errors.some(
    (error: { type: string; message: string }) => error.type === 'ERROR' && error.message === userMessage
  );

  return errorExists;
};
