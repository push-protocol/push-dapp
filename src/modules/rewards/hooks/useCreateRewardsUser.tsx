// React and other libraries
import { useContext, useEffect, useState } from 'react';

// third party libraries
import { useSelector } from 'react-redux';

// helpers
import { useAccount } from 'hooks';
import { generateVerificationProof } from '../utils/generateVerificationProof';
import { walletToCAIP10 } from 'helpers/w2w';
import { AppContext } from 'contexts/AppContext';

// hooks
import { useCreateRewardsUser as useCreateRewardsUserQuery, useGetUserRewardsDetails } from 'queries/hooks';

// types
import { UserStoreType } from 'types';
import { AppContextType } from 'types/context';
import { PushAPI } from '@pushprotocol/restapi';

const useCreateRewardsUser = () => {
  const { account } = useAccount();

  const caip10WalletAddress = walletToCAIP10({ account });
  const [isSuccess, setIsSuccess] = useState(false);

  // @ts-expect-error
  const { isUserProfileUnlocked } = useContext<AppContextType>(AppContext);

  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);
  const isActiveAccount = userPushSDKInstance?.account === account;

  const { status, refetch } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  const { mutate: createUser } = useCreateRewardsUserQuery();

  const handleCreateUser = async ({ userPushSDKInstance }: { userPushSDKInstance: PushAPI }) => {
    // get ref, send with user wallet. if ref is null, send only user wallet
    const ref = sessionStorage.getItem('ref');
    const data = {
      ...(ref && { refPrimary: ref }),
      userWallet: caip10WalletAddress,
    };

    //generate verification proof again, after unlocking profile
    const verificationProof = await generateVerificationProof(data, userPushSDKInstance);
    if (!verificationProof) return;

    createUser(
      {
        pgpPublicKey: userPushSDKInstance?.pgpPublicKey,
        userWallet: caip10WalletAddress,
        verificationProof: verificationProof as string,
        refPrimary: ref,
      },
      {
        onSuccess: () => {
          setIsSuccess(true);
          refetch();
        },
        onError: (err) => {
          console.error('Error', err);
        },
      }
    );
  };

  useEffect(() => {
    if (isUserProfileUnlocked && isActiveAccount && status !== 'success') {
      handleCreateUser({ userPushSDKInstance });
    }
  }, [isUserProfileUnlocked, userPushSDKInstance, account]);

  return { handleCreateUser, isSuccess, setIsSuccess, isUserProfileUnlocked };
};

export { useCreateRewardsUser };
