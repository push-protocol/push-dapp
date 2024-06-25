// React and other libraries
import { FC, useState } from 'react';

// Third-party libraries
import { css } from 'styled-components';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, TwitterAuthProvider, User } from 'firebase/auth';
import { useSelector } from 'react-redux';

//Components
import { Box, Button, Skeleton } from 'blocks';
import { useClaimRewardsActivity } from 'queries';
import { generateVerificationProof } from '../utils/generateVerificationProof';

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

  // const app = initializeApp(appConfig.firebaseConfig);//TODO:Intialise the Twitter Authorisation based on the firebase config.

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
        const email = error.customData.email;
        const credential = TwitterAuthProvider.credentialFromError(error);
        console.log('Error in connecting twitter >>>', errorCode, errorMessage, email, credential);
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

    const username = userDetails?.displayName;

    if (username) {
      setVerifying(true);
      const data = {
        twitter: username,
      }

      const verificationProof = await generateVerificationProof(data, userPushSDKInstance);

      claimRewardsActivity(
        {
          userId,
          activityTypeId,
          pgpPublicKey: userPushSDKInstance.pgpPublicKey as string,
          data: data,
          verificationProof: verificationProof as string
        },
        {
          onSuccess: (response) => {
            console.log('Response >>>>', response);
            if (response.status === 'COMPLETED') {
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
    <Box display="flex" alignItems={{ ml: 'flex-start', initial: 'center' }} flexDirection="column" minWidth="100px">
      <Skeleton width="100%" isLoading={verifying}>
        <Button
          variant="tertiary"
          size="small"
          css={css`
            width: 100%;
          `}
          disabled={verifying}
          onClick={handleVerification}
        >
          Verify
        </Button>
      </Skeleton>
    </Box>
  );
};

export default TwitterActivityButton;
