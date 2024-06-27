// React and other libraries
import { FC, useEffect, useState } from 'react';

// Third-party libraries
import { PushAPI } from '@pushprotocol/restapi';
import { useSelector } from 'react-redux';

import { appConfig } from 'config';
import { useClaimRewardsActivity, useGetUserDiscordDetails } from 'queries';

// Components
import { ActivityStatusButton } from './ActivityStatusButton';

//helpers
import { generateVerificationProof } from '../utils/generateVerificationProof';

//Types
import { UserStoreType } from 'types';

type DiscordActivityButtonProps = {
  userId: string;
  activityTypeId: string;
  refetchActivity: () => void;
  setErrorMessage: (errorMessage: string) => void;
};

const DiscordActivityButton: FC<DiscordActivityButtonProps> = ({
  userId,
  activityTypeId,
  refetchActivity,
  setErrorMessage,
}) => {
  const token = sessionStorage.getItem('access_token');

  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);

  useEffect(() => {
    setErrorMessage('');
  }, []);

  const handleConnect = () => {
    const clientID = appConfig.discord_client_id;

    const redirectURI = window.location.href; //it will redirect the user to the current page

    const scope = 'identify email guilds.members.read';

    const authURL = `https://discord.com/api/oauth2/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=token&scope=${scope}`;

    window.location.href = authURL;
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
    activityTypeId,
  });

  const [verifying, setVerifying] = useState(false);

  const handleVerify = async (userPushSDKInstance: PushAPI) => {
    if (userDiscordDetails && token) {
      setVerifying(true);
      const data = {
        discord: userDiscordDetails.global_name,
        discord_token: token,
      };

      const verificationProof = await generateVerificationProof(data, userPushSDKInstance);

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
          data: data,
          verificationProof: verificationProof as string,
        },
        {
          onSuccess: (response) => {
            if (response.status === 'COMPLETED') {
              refetchActivity();
              setVerifying(false);
              setErrorMessage('');
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

export { DiscordActivityButton };
