// react and other libraries
import { useEffect, useState } from 'react';

// third party libraries
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, TwitterAuthProvider, User } from 'firebase/auth';
import { useSelector } from 'react-redux';

// helpers
import { appConfig } from 'config';
import { generateVerificationProof } from '../utils/generateVerificationProof';
import { useClaimRewardsActivity } from 'queries';

// types
import { UserStoreType } from 'types';

export type UseTwitterVerifyParams = {
  userId: string;
  activityTypeId: string;
  setErrorMessage: (errorMessage: string) => void;
  refetchActivity: () => void;
};

const useVerifyTwitter = ({ userId, activityTypeId, setErrorMessage, refetchActivity }: UseTwitterVerifyParams) => {
  const [verifying, setVerifying] = useState(false);
  const [activityStatus, setActivityStatus] = useState<string | null>(null);
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);

  useEffect(() => {
    setErrorMessage('');
  }, [setErrorMessage]);

  initializeApp(appConfig.firebaseConfig);

  const provider = new TwitterAuthProvider();
  const auth = getAuth();

  const handleTwitterVerification = () => {
    handleVerify();
  };

  const handleConnect = (): Promise<User | null> => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        const credential = TwitterAuthProvider.credentialFromResult(result);
        if (credential) {
          const user = result.user;
          return user;
        } else {
          return null;
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        const credential = TwitterAuthProvider.credentialFromError(error);
        console.log('Error in connecting twitter >>>', errorCode, errorMessage, credential);
        setVerifying(false);
        return null;
      });
  };

  const { mutate: claimRewardsActivity } = useClaimRewardsActivity({
    userId,
    activityTypeId,
  });

  const handleVerify = async () => {
    setErrorMessage('');
    setVerifying(true);
    const userDetails = await handleConnect();

    if (userDetails) {
      // @ts-expect-error
      const twitterHandle = userDetails.reloadUserInfo.screenName;

      const verificationProof = await generateVerificationProof(
        {
          twitter: twitterHandle,
        },
        userPushSDKInstance
      );

      if (verificationProof == null || verificationProof == undefined) {
        if (userPushSDKInstance && userPushSDKInstance.readmode()) {
          setVerifying(false);
          setErrorMessage('Please Enable Push profile');
        }
        return;
      }

      claimRewardsActivity(
        {
          userId,
          activityTypeId,
          pgpPublicKey: userPushSDKInstance.pgpPublicKey as string,
          data: {
            twitter: twitterHandle,
          },
          verificationProof: verificationProof as string,
        },
        {
          onSuccess: (response) => {
            if (response.status === 'COMPLETED') {
              setActivityStatus('Claimed');
              refetchActivity();
              setVerifying(false);
            }
            if (response.status === 'PENDING') {
              setActivityStatus('Pending');
              refetchActivity();
              setVerifying(false);
            }
          },
          onError: (error: any) => {
            console.log('Error in creating activity', error);
            setVerifying(false);
            if (error.name) {
              setErrorMessage(error.response.data.error);
            }
          },
        }
      );
    }
  };

  return {
    verifying,
    activityStatus,
    handleTwitterVerification,
  };
};

export { useVerifyTwitter };
