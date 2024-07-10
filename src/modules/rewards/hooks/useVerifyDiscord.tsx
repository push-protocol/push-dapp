// React and other libraries
import { useEffect, useState } from 'react';

// Third-party libraries
import { PushAPI } from '@pushprotocol/restapi';
import { useSelector } from 'react-redux';

import { appConfig } from 'config';
import { useClaimRewardsActivity } from 'queries';

// helpers
import { generateVerificationProof } from '../utils/generateVerificationProof';

// Types
import { UserStoreType } from 'types';

//Config
import APP_PATHS from 'config/AppPaths';

type UseDiscordActivityVerificationProps = {
  activityTypeId: string;
  refetchActivity: () => void;
  setErrorMessage: (errorMessage: string) => void;
};

const useVerifyDiscord = ({
  activityTypeId,
  refetchActivity,
  setErrorMessage,
}: UseDiscordActivityVerificationProps) => {
  const token = localStorage.getItem('access_token');

  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);

  const [activityStatus, setActivityStatus] = useState<string | null>(null);
  const [verifying, setVerifying] = useState(token ? true : false);
  const [updatedId, setUpdatedId] = useState<string | null>(null);

  useEffect(() => {
    setErrorMessage('');
  }, [setErrorMessage]);

  const { mutate: claimRewardsActivity } = useClaimRewardsActivity({
    userId: updatedId as string,
    activityTypeId,
  });

  const handleDiscordVerification = (userId: string) => {
    setUpdatedId(userId);
    setErrorMessage('');
    handleConnect(userId);
  };

  const handleConnect = (userId: string) => {
    const clientID = appConfig.discord_client_id;
    const baseURL = window.location.origin;
    const redirectURI = `${baseURL}${APP_PATHS.DiscordVerification}`;
    const scope = 'identify email guilds.members.read';

    const authURL = `https://discord.com/api/oauth2/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=token&scope=${scope}`;

    const newWindow = window.open(authURL, '_blank');

    const checkAuth = setInterval(() => {
      if (newWindow?.closed) {
        clearInterval(checkAuth);
        handleVerify(userPushSDKInstance, userId);
      }
    }, 1000);
  };

  const handleVerify = async (userPushSDKInstance: PushAPI, userId: string) => {
    const token = localStorage.getItem('access_token');
    const username = localStorage.getItem('username');

    if (username && token) {
      setVerifying(true);
      const data = {
        discord: username,
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

      localStorage.removeItem('access_token');
      localStorage.removeItem('username');
      localStorage.removeItem('expires_in');

      claimRewardsActivity(
        {
          userId: updatedId || (userId as string),
          activityTypeId,
          pgpPublicKey: userPushSDKInstance.pgpPublicKey as string,
          data: data,
          verificationProof: verificationProof as string,
        },
        {
          onSuccess: (response) => {
            if (response.status === 'COMPLETED') {
              setActivityStatus('Claimed');
              refetchActivity();
              setVerifying(false);
              setErrorMessage('');
              // localStorage.removeItem('discordVerificationTriggered');
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
    activityStatus,
    verifying,
    handleDiscordVerification,
  };
};

export { useVerifyDiscord };
