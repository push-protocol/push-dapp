import * as w2wHelper from 'helpers/w2w';

export const retrieveUserPGPKeyFromStorage = (account: string): string | null => {
  const key = getUniquePGPKey(account);
  const value = localStorage.getItem(key);

  if (isPGPKey(value)) {
    return value;
  }

  return null;
};

const isPGPKey = (str: string | null) => {
  if (!str) return false;

  const pgpPublicKeyRegex = /-----BEGIN PGP PUBLIC KEY BLOCK-----[\s\S]*-----END PGP PUBLIC KEY BLOCK-----/;
  const pgpPrivateKeyRegex = /-----BEGIN PGP PRIVATE KEY BLOCK-----[\s\S]*-----END PGP PRIVATE KEY BLOCK-----/;

  return pgpPublicKeyRegex.test(str) || pgpPrivateKeyRegex.test(str);
};

const getUniquePGPKey = (account: string) => {
  let address = w2wHelper.walletToCAIP10({ account });
  const uniqueKey = `push-user-${address}-pgp`;
  return uniqueKey;
};
