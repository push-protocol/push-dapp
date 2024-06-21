// React and other libraries
import React, { useEffect, useState } from 'react';

// Third-party libraries
import { PushAPI } from '@pushprotocol/restapi';
import { MdError } from 'react-icons/md';
import { useSelector } from 'react-redux';

//helpers
import { generateVerificationProof } from '../helpers/generateVerificationProof';
import { useCreateActivity, useGetUserDiscordDetails } from 'queries';

//Hooks
import APP_PATHS from 'config/AppPaths';
import useToast from 'hooks/useToast';

//Components
import CommonButtonComponent from './CommonButtonComponent';

//Types
import { UserStoreType } from 'types';



type Props = {
  userId: string;
  activityTypeId: string;
  refetchActivity: () => void;
};

const VerifyButton: React.FC<Props> = ({
  userId, activityTypeId, refetchActivity
}) => {

  const access_token = sessionStorage.getItem('access_token');
  const [token, setToken] = useState(access_token);

  const rewardsToast = useToast(5000);

  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });

  const url = window.location.origin;
  const handleConnect = () => {
    //TODO:Change this Client Id to the Push's Discord
    const CLIENT_ID = '1253697881211277333'; //Abhishek's Test Dapp
    const REDIRECT_URI = `${url}${APP_PATHS.RewardsActivities}`;
    const SCOPE = 'identify email guilds.members.read';
    const AUTH_URL = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=${SCOPE}`;

    window.location.href = AUTH_URL;
  };

  const handleVerification = () => {
    if (token) {
      handleVerify(userPushSDKInstance);
    } else {
      handleConnect();
    }
  }


  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const token = params.get('access_token');
      const expiresIn = params.get('expires_in');

      if (token && expiresIn) {
        sessionStorage.setItem('access_token', token);
        sessionStorage.setItem('expires_in', expiresIn);
        setToken(token);
      }

      window.history.replaceState({}, '', window.location.pathname);
    }
  }, [])

  const { data: userDiscordDetails, isLoading } = useGetUserDiscordDetails(token as string);

  useEffect(() => {
    if (token && userDiscordDetails) {
      handleVerify(userPushSDKInstance);
    }

  }, [token, userDiscordDetails])


  const { mutate: createActivity } = useCreateActivity({
    userId,
    activityTypeId
  });

  const [verifying, setVerifying] = useState(false);

  const handleVerify = async (userPushSDKInstance: PushAPI) => {

    if (userDiscordDetails && token) {
      setVerifying(true);
      const data = {
        discord: userDiscordDetails.global_name,
        discord_token: token
      };

      const verificationProof = await generateVerificationProof(data, userPushSDKInstance);
      createActivity(
        {
          userId,
          activityTypeId,
          pgpPublicKey: userPushSDKInstance.pgpPublicKey as string,
          data: data,
          verificationProof: verificationProof as string
        },
        {
          onSuccess: (response) => {
            if (response.status === 'COMPLETED') {
              refetchActivity();
              setVerifying(false);
            }
          },
          onError: (error) => {
            console.log('Error in creating activiy', error);
            setVerifying(false);
            rewardsToast.showMessageToast({
              toastTitle: 'Error',
              toastMessage: `${error.response.data.error}`,
              toastType: 'ERROR',
              getToastIcon: (size) => (
                <MdError
                  size={size}
                  color="red"
                />
              ),
            });
          }
        }
      );
    }
  };

  return (
    <CommonButtonComponent
      label='Verify'
      onClick={handleVerification}
      isLoading={isLoading || verifying}
    />
  );
};

export default VerifyButton;