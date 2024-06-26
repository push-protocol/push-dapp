// React and other libraries
import { FC, useState } from 'react';

// Third-party libraries
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, TwitterAuthProvider, User } from 'firebase/auth';
import { useSelector } from 'react-redux';

//Components
import { useClaimRewardsActivity } from 'queries';
import { generateVerificationProof } from '../utils/generateVerificationProof';
import { StatusButtonComponent } from './StatusButtonComponent';

//Config
import { appConfig } from 'config';

//types
import { UserStoreType } from 'types';



type TwitterActivityButtonProps = {
  userId: string;
  activityTypeId: string;
  refetchActivity: () => void;
  setErrorMessage: (errorMessage: string) => void;

};

const TwitterActivityButton: FC<TwitterActivityButtonProps> = ({ userId, activityTypeId, refetchActivity, setErrorMessage }) => {
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);
  const [verifying, setVerifying] = useState(false);

  //TODO: Remove the following firebase config and add the line no. 41 const app.
  const firebaseConfig = {
    apiKey: 'AIzaSyCBcenRUEiP1VhssDp3a3VBhUa5xS_xKFA',
    authDomain: 'push-login-8a0f9.firebaseapp.com',
    projectId: 'push-login-8a0f9',
    storageBucket: 'push-login-8a0f9.appspot.com',
    messagingSenderId: '937398385572',
    appId: '1:937398385572:web:d9fb710282e1831c859f31',
    measurementId: 'G-0XW5EWYC8Q'
  };
  const app = initializeApp(firebaseConfig);

  // const app = initializeApp(appConfig.firebaseConfig);/
  //TODO:Intialise the Twitter Authorisation based on the firebase config.

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
    activityTypeId
  });

  const handleVerification = async () => {
    setErrorMessage('');
    const userDetails = await handleConnect();

    if (userDetails) {
      setVerifying(true);
      const twitterHandle = userDetails.reloadUserInfo.screenName;

      const verificationProof = await generateVerificationProof({
        twitter: twitterHandle
      }, userPushSDKInstance);

      claimRewardsActivity(
        {
          userId,
          activityTypeId,
          pgpPublicKey: userPushSDKInstance.pgpPublicKey as string,
          data: {
            twitter: twitterHandle
          },
          verificationProof: verificationProof as string
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
          onError: (error: Error) => {
            console.log('Error in creating activiy', error);
            setVerifying(false);
            if (error.name) {
              setErrorMessage(error.response.data.error);
            }
          }
        }
      );
    }
  };

  return (
    <StatusButtonComponent
      label='Verify'
      isLoading={verifying}
      disabled={verifying}
      onClick={handleVerification}
    />
  );
};

export { TwitterActivityButton };
