import { Box, Button, Skeleton } from 'blocks';
import APP_PATHS from 'config/AppPaths';
import { useCreateActivity, useGetUserDiscordDetails, useGetUsersSingleActivity } from 'queries/hooks/rewards';
import React, { useEffect, useMemo, useState } from 'react';
import { css } from 'styled-components';
import { generateVerificationProof } from '../helpers/generateVerificationProof';
import { useSelector } from 'react-redux';
import { UserStoreType } from 'types';
import axios from 'axios';
import { PushAPI } from '@pushprotocol/restapi';
import { useNavigate } from 'react-router-dom';
type Props = {
  activityTypeId: string;
};
const DiscordActionButton: React.FC<Props> = ({ activityTypeId }) => {
  const ButtonState = {
    CONNECT: {
      id: '1',
      label: 'Connect',
      onclick: () => handleConnect(),
      disabled: false
    },
    JOIN: {
      id: '2',
      label: 'Join',
      onclick: () => handleJoin(),
      disabled: false
    },
    VERIFY: {
      id: '3',
      label: 'Verify',
      onclick: () => handleVerify(userPushSDKInstance),
      disabled: false
    },
    CLAIMED: {
      id: '4',
      label: 'Claimed',
      onclick: () => { },
      disabled: true
    }
  };

  const [activeButtonState, setActiveButtonState] = useState(ButtonState.CONNECT);
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });

  const [verifying, setVerifying] = useState(false);

  // const userId = 'fa25902';
  const userId = '5bddf6c';
  // const userId = '0d5950a';

  //Fetching Activities based on activity Type ID
  const { data: usersSingleActivity, isLoading, isSuccess, error } = useGetUsersSingleActivity(userId, activityTypeId);

  //TODO:handle Logic for reloading and fetching bearer_token from localstorage
  // const access_token = localStorage.getItem('access_token');
  const [token, setToken] = useState<string>();

  useEffect(() => {
    console.log('Users Single Activities', usersSingleActivity);
    // What about null state of the usersSingleActivity or if this API throws an error.

    if (usersSingleActivity && usersSingleActivity.status === 'COMPLETED') {
      setActiveButtonState(ButtonState.CLAIMED);
    } else if (usersSingleActivity && !token) {
      setActiveButtonState(ButtonState.CONNECT);
    } else if (token) {
      setActiveButtonState(ButtonState.VERIFY);
    }
  }, [usersSingleActivity, token]);

  const url = window.location.origin;
  const handleConnect = () => {
    console.log('Connecting your discord >>>>>');
    // const CLIENT_ID = '1253336966875840532'; //Push's Client Id
    const CLIENT_ID = '1252558464354484316';
    const REDIRECT_URI = `${url}${APP_PATHS.RewardsActivities}`;
    const SCOPE = 'identify guilds guilds.join guilds.members.read';
    const AUTH_URL = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=${SCOPE}`;

    window.location.href = AUTH_URL;
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const token = params.get('access_token');
      const expiresIn = params.get('expires_in');

      if (token && expiresIn) {
        console.log('Token >>>>', token);
        setToken(token);
        setActiveButtonState(ButtonState.VERIFY);
      }

      // Remove the hash from the URL
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  const navigate = useNavigate();

  const handleJoin = () => {
    console.log('Join Discord Channel');
    navigate('https://discord.gg/pushprotocol');
  };

  const { data: userDiscordDetails, isLoading: loadingdetails } = useGetUserDiscordDetails(token);

  console.log('userDiscordDetails', userDiscordDetails, loadingdetails, token);

  //TODO:Post request to the create activity tab
  // const res = usePostCreateActivity();


  const { mutate: createActivity } = useCreateActivity({
    userId,
    activityTypeId,
  })

  const handleVerify = async (userPushSDKInstance: PushAPI) => {
    setVerifying(true);

    console.log('access_token>>>>', token, userDiscordDetails);
    // refetch();
    if (userDiscordDetails && token) {
      const data = {
        discord: userDiscordDetails.global_name,
        discord_token: token
      };

      console.log('Data before signing', data, userPushSDKInstance);

      const verificationProof = await generateVerificationProof(data, userPushSDKInstance);
      const body = {
        pgpPublicKey: userPushSDKInstance.pgpPublicKey,
        data: data,
        verificationProof: verificationProof
      };

      console.log('Body Post >>', body, userId, activityTypeId);

      //TODO: Call the mutation here to create the activity.
      createActivity({
        userId, activityTypeId,
        pgpPublicKey: userPushSDKInstance.pgpPublicKey as string,
        data: data,
        verificationProof: verificationProof as string
      }, {
        onSuccess: (response) => {
          console.log('Response from create activity', response);
        }
      });
    }

    setVerifying(false);
  };

  return (
    <Box display="flex" alignItems={{ ml: "flex-start", initial: "center" }} flexDirection='column' minWidth='100px' >
      <Skeleton isLoading={isLoading} width='100%'>
        <Button
          variant="tertiary"
          size="small"
          css={css`
          width: 100%;
        `}
          onClick={activeButtonState.onclick}
          disabled={verifying || activeButtonState.disabled}
        >
          {activeButtonState.label}
        </Button>
      </Skeleton>
    </Box>
  );
};

export { DiscordActionButton };
