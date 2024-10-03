// React and other libraries
import { useEffect, useState } from 'react';

// Third-party libraries
import { PushAPI } from '@pushprotocol/restapi';
import { useSelector } from 'react-redux';

// hooks;
import { appConfig } from 'config';
import { useClaimRewardsActivity, useGetUserRewardsDetails } from 'queries';

// helpers
import { generateVerificationProof } from '../utils/generateVerificationProof';
import { walletToCAIP10 } from 'helpers/w2w';
import { useAccount } from 'hooks/useAccount';

// Types
import { UserStoreType } from 'types';

//Config
import APP_PATHS from 'config/AppPaths';
import { useCallback } from 'react';

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

  const [discordActivityStatus, setDiscordActivityStatus] = useState<'Claimed' | null>(null);
  const [verifyingDiscord, setVerifyingDiscord] = useState(token ? true : false);
  const [updatedId, setUpdatedId] = useState<string | null>(null);

  const { account } = useAccount();
  const isActiveAccount = userPushSDKInstance?.account === account;
  const caip10WalletAddress = walletToCAIP10({ account });

  useEffect(() => {
    setErrorMessage('');
  }, [setErrorMessage]);

  const { refetch: refetchUserDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  const { mutate: claimRewardsActivity } = useClaimRewardsActivity({
    userId: updatedId as string,
    activityTypeId,
  });

  const handleDiscordVerification = (userId: string) => {
    setUpdatedId(userId);
    setErrorMessage('');
    setVerifyingDiscord(true);

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

  const handleVerify = useCallback(
    async (userPushSDKInstance: PushAPI, userId: string) => {
      const token = localStorage.getItem('access_token');
      const username = localStorage.getItem('username');

      if (username && token) {
        const data = {
          discord: username,
          discord_token: token,
        };

        const verificationProof = await generateVerificationProof(data, userPushSDKInstance);

        if (verificationProof == null || verificationProof == undefined) {
          if (userPushSDKInstance && userPushSDKInstance.readmode()) {
            setVerifyingDiscord(false);
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
                setDiscordActivityStatus('Claimed');
                refetchActivity();
                refetchUserDetails();
                setVerifyingDiscord(false);
                setErrorMessage('');
              }
            },
            onError: (error: any) => {
              console.log('Error in creating activity', error);
              setVerifyingDiscord(false);
              if (error.name) {
                setErrorMessage(error.response.data.error);
              }
            },
          }
        );
      }
    },
    [isActiveAccount, userPushSDKInstance]
  );

  return {
    verifyingDiscord,
    discordActivityStatus,
    handleDiscordVerification,
  };
};

export { useVerifyDiscord };
