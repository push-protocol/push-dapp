// React and other libraries
import { FC, useEffect, useState } from 'react';

// Third-party libraries
import { PushAPI } from '@pushprotocol/restapi';
import { useSelector } from 'react-redux';

//helpers
import { generateVerificationProof } from '../utils/generateVerificationProof';
import { useClaimRewardsActivity, useGetUserDiscordDetails } from 'queries';

//Hooks
import { appConfig } from 'config';

//Types
import { UserStoreType } from 'types';
import { StatusButtonComponent } from './StatusButtonComponent';

type DiscordActivityButtonProps = {
  userId: string;
  activityTypeId: string;
  refetchActivity: () => void;
  setErrorMessage: (errorMessage: string) => void;
};

const DiscordActivityButton: FC<DiscordActivityButtonProps> = ({ userId, activityTypeId, refetchActivity, setErrorMessage }) => {
  const access_token = sessionStorage.getItem('access_token');
  const [token, setToken] = useState(access_token);

  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);

  const handleConnect = () => {
    const CLIENT_ID = appConfig.discord_client_id;
    const REDIRECT_URI = window.location.href; //it will redirect the user to the current page
    const SCOPE = 'identify email guilds.members.read';
    const AUTH_URL = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=${SCOPE}`;

    window.location.href = AUTH_URL;
  };

  const handleVerification = () => {
    setErrorMessage('');
    if (token) {
      handleVerify(userPushSDKInstance);
    } else {
      handleConnect();
    }
  };

  const { data: userDiscordDetails } = useGetUserDiscordDetails(token as string);

  useEffect(() => {
    if (token && userDiscordDetails) {
      handleVerify(userPushSDKInstance);
    }
  }, [token, userDiscordDetails]);

  const { mutate: claimRewardsActivity } = useClaimRewardsActivity({
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
    <StatusButtonComponent
      label='Verify'
      isLoading={verifying}
      disabled={verifying}
      onClick={handleVerification}
    />
  );
};

export { DiscordActivityButton };
