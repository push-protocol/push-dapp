// React and other libraries
import { useState } from 'react';

// third party libraries
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

//Hooks
import { useGetUserRewardsDetails, useCreateRewardsUser } from 'queries';

//Types
import { UserStoreType } from 'types';

//helpers
import { generateVerificationProof } from '../utils/generateVerificationProof';
import { useAccount } from 'hooks';

const useGenerateUserId = (caip10WalletAddress: string) => {
  const [searchParams] = useSearchParams();

  const ref = searchParams.get('ref');
  if (ref) sessionStorage.setItem('ref', ref);
  const [showConnectModal, setConnectModalVisibility] = useState(false);

  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);
  const { isWalletConnected } = useAccount();

  const { refetch, isPending, status } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  const { mutate: createUser } = useCreateRewardsUser();

  const getRefAndData = () => {
    // if ref is present, add it to the data needed to generate verification proof, if not - send only user wallet
    const ref = sessionStorage.getItem('ref');
    const data = {
      ...(ref && { refPrimary: ref }),
      userWallet: caip10WalletAddress,
    };

    return { data, ref };
  };

  const unlockUser = async () => {
    if (!userPushSDKInstance) return;

    const { data } = getRefAndData();

    // generate verification proof
    const verificationProof = await generateVerificationProof(data, userPushSDKInstance);

    //if verification proof is null, unlock push profile update to update userPUSHSDKInstance
    if (verificationProof === null || verificationProof === undefined) {
      if (isWalletConnected && userPushSDKInstance && userPushSDKInstance.readmode()) {
        setConnectModalVisibility(true);
      }
      return;
    }
  };

  const handleCreateUser = async () => {
    if (!userPushSDKInstance || status === 'success') return;

    const { data, ref } = getRefAndData();

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
          refetch();
        },
        onError: (err) => {
          console.error('Error', err);
        },
      }
    );
  };

  return {
    showConnectModal,
    setConnectModalVisibility,
    isPending,
    unlockUser,
    handleCreateUser,
  };
};

export { useGenerateUserId };
