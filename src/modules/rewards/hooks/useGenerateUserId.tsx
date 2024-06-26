// React and other libraries
import { useEffect, useState } from 'react';

// third party libraries
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

//Hooks
import { useGetUserRewardsDetails, useCreateRewardsUser } from 'queries';

//Types
import { UserStoreType } from 'types';
import { AxiosError } from 'axios';

//helpers
import { generateVerificationProof } from '../utils/generateVerificationProof';

const useGenerateUserId = (caip10WalletAddress: string) => {
  const [searchParams] = useSearchParams();

  const ref = searchParams.get('ref');
  const [showConnectModal, setConnectModalVisibility] = useState(false);

  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);

  const {
    data: userDetails,
    status,
    refetch,
    error,
  } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  const { mutate: createUser } = useCreateRewardsUser();

  const errorMessage = 'Failed to retrieve user';

  useEffect(() => {
    if (status === 'error' && error instanceof AxiosError && error?.response?.data?.error === errorMessage) {
      // generate userId
      generateUserId(ref);
    }
    // bad request error
  }, [userDetails, status]);

  const generateUserId = async (ref: string | null) => {
    // userPushSDKInstance null check
    if (!userPushSDKInstance) return;

    // if ref is present, add it to the data needed to generate verification proof, if not - send only user wallet
    const data = {
      ...(ref && { refPrimary: ref }),
      userWallet: caip10WalletAddress,
    };

    // generate verification proof
    const verificationProof = await generateVerificationProof(data, userPushSDKInstance);

    //if verification proof is null, unlock push profile to get the decrypted pgp pvt key needed for the verification proof
    if (verificationProof == null || verificationProof == undefined) {
      if (userPushSDKInstance && userPushSDKInstance.readmode()) {
        setConnectModalVisibility(true);
      }
      return;
    }

    console.log(verificationProof, ref, errorMessage);

    // mutate action to make the request and on success - call the get user by wallet address fn with the id again
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
  };
};

export { useGenerateUserId };
