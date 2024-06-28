// React and other libraries
import { FC, useEffect, useState } from 'react';

// Third-party libraries
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, TwitterAuthProvider, User } from 'firebase/auth';
import { useSelector } from 'react-redux';

import { appConfig } from 'config';

//Components
import { generateVerificationProof } from '../utils/generateVerificationProof';
import { ActivityStatusButton } from './ActivityStatusButton';

//Queries
import { useClaimRewardsActivity } from 'queries';

//types
import { UserStoreType } from 'types';

type TwitterActivityButtonProps = {
  userId: string;
  activityTypeId: string;
  refetchActivity: () => void;
  setErrorMessage: (errorMessage: string) => void;
};

const TwitterActivityButton: FC<TwitterActivityButtonProps> = ({
  userId,
  activityTypeId,
  refetchActivity,
  setErrorMessage,
}) => {
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);
  const [verifying, setVerifying] = useState(false);

  //For One case where the error is already present and user relogins the account
  useEffect(() => {
    setErrorMessage('');
  }, []);

  initializeApp(appConfig.firebaseConfig);

  const provider = new TwitterAuthProvider();
  const auth = getAuth();

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
        const credential = TwitterAuthProvider.credentialFromError(error);
        console.log('Error in connecting twitter >>>', errorCode, errorMessage, credential);
        return null;
      });
  };

  const { mutate: claimRewardsActivity } = useClaimRewardsActivity({
    userId,
    activityTypeId,
  });

  const handleVerification = async () => {
    setErrorMessage('');
    const userDetails = await handleConnect();

    if (userDetails) {
      setVerifying(true);

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
              refetchActivity();
              setVerifying(false);
            }
            if (response.status === 'PENDING') {
              refetchActivity();
              setVerifying(false);
            }
          },
          onError: (error: any) => {
            console.log('Error in creating activiy', error);
            setVerifying(false);
            if (error.name) {
              setErrorMessage(error.response.data.error);
            }
          },
        }
      );
    }
  };

  return (
    <ActivityStatusButton
      label="Verify"
      isLoading={verifying}
      disabled={verifying}
      onClick={handleVerification}
    />
  );
};

export { TwitterActivityButton };
