// React and other libraries
import { useState } from 'react';

// third party libraries
import { useSelector } from 'react-redux';

//Hooks
import { useCreateRewardsUser } from 'queries';

//Types
import { UserStoreType } from 'types';

//helpers
import { generateVerificationProof } from '../utils/generateVerificationProof';

const useGenerateUserId = (caip10WalletAddress: string, refetch: () => void) => {
  const [isRewardsLoading, setIsRewardsLoading] = useState<boolean>(false);
  const [showConnectModal, setConnectModalVisibility] = useState<boolean>(false);
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);

  const { mutate: createUser } = useCreateRewardsUser();

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
    }

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
          setIsRewardsLoading(false);
        },
        onError: (err) => {
          console.error('Error', err);
        },
      }
    );
  };

  const handleError = (error: any, ref: string | null) => {
    if (error.message.includes('400')) {
      // handle bad request
      console.error(error, 'Bad request. Please check your input and try again.');
    } else if (error.message.includes('500') && error.response.data.error == 'Failed to retrieve user') {
      // handle USER not found - call the function to generate verification proof and query to create user with the generated verification proof, pgp public key and wallet address(caip 10 format) and ref, if there is a ref in the route query
      generateUserId(ref);
    } else {
      console.error(error);
    }
  };

  return {
    isRewardsLoading,
    setIsRewardsLoading,
    showConnectModal,
    setConnectModalVisibility,
    generateUserId,
    handleError,
  };
};

export { useGenerateUserId };
