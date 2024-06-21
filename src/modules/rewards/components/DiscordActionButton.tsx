import { PushAPI } from '@pushprotocol/restapi';
import { useCreateActivity, useGetUserDiscordDetails, useGetUsersSingleActivity } from 'queries';
import React, { useEffect, useState } from 'react';
import { generateVerificationProof } from '../helpers/generateVerificationProof';
import { useSelector } from 'react-redux';
import { UserStoreType } from 'types';
import APP_PATHS from 'config/AppPaths';
import { Box, Button, Skeleton } from 'blocks';
import { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';

type Props = {
  activityTypeId: string;
};

const DiscordActionButton: React.FC<Props> = ({ activityTypeId }) => {
  const userId = '5bddf6c';

  const [activeState, setActiveState] = useState(0);

  const access_token = localStorage.getItem('access_token');
  const [token, setToken] = useState(access_token);

  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });

  //First API call to get users single activity Details
  const { data: usersSingleActivity, isLoading } = useGetUsersSingleActivity(userId, activityTypeId);

  const { data: userDiscordDetails } = useGetUserDiscordDetails(token);

  useEffect(() => {
    if (!isLoading) {
      if (usersSingleActivity && usersSingleActivity.status === 'COMPLETED') {
        setActiveState(3);
      } else {
        setActiveState(0);
      }
    }
  }, [usersSingleActivity]);

  const ConnectFlow = () => {
    useEffect(() => {
      const hash = window.location.hash;
      if (hash) {
        const params = new URLSearchParams(hash.substring(1));
        const token = params.get('access_token');
        const expiresIn = params.get('expires_in');

        if (token && expiresIn) {
          localStorage.setItem('access_token', token);
          localStorage.setItem('expires_in', expiresIn);
          setToken(token);
          setActiveState(2);
        }

        window.history.replaceState({}, '', window.location.pathname);
      }
    }, []);

    useEffect(() => {
      if (token) {
        setActiveState(2);
      }
    }, [token]);

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

    return (
      <Box display="flex" alignItems={{ ml: 'flex-start', initial: 'center' }} flexDirection="column" minWidth="100px">
        <Button
          variant="tertiary"
          size="small"
          css={css`
            width: 100%;
          `}
          disabled={false}
          onClick={handleConnect}
        >
          Connect Discord
        </Button>
      </Box>
    );
  };

  const Verify = () => {
    const { mutate: createActivity } = useCreateActivity({
      userId,
      activityTypeId
    });

    const [verifying, setVerifying] = useState(false);
    const handleVerify = async (userPushSDKInstance: PushAPI) => {
      setVerifying(true);

      if (userDiscordDetails && token) {
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
              console.log('Response from create activity', response);
              if (response.data.status === 'COMPLETED') {
                setActiveState(3);
              }
            },
            onError: (err) => {
              console.log('Error in creating activiy', err);
              console.log('User has not joined the server move to Join State...');
              setActiveState(1);
            }
          }
        );
      }

      setVerifying(false);
    };

    return (
      <Box display="flex" alignItems={{ ml: 'flex-start', initial: 'center' }} flexDirection="column" minWidth="100px">
        <Skeleton isLoading={verifying} width='100%'>
          <Button
            variant="tertiary"
            size="small"
            css={css`
          width: 100%;
        `}
            disabled={false}
            onClick={() => handleVerify(userPushSDKInstance)}
          >
            Verify
          </Button>
        </Skeleton>
      </Box>
    );
  };

  const Join = () => {
    const navigate = useNavigate();
    const handleJoin = () => {
      console.log('Join Discord Channel');
      navigate('https://discord.gg/pushprotocol');
    };


    return (
      <Box display="flex" alignItems={{ ml: 'flex-start', initial: 'center' }} flexDirection="column" minWidth="100px">
        <Button
          variant="tertiary"
          size="small"
          css={css`
          width: 100%;
        `}
          disabled={false}
          onClick={() => handleJoin()}
        >
          Join
        </Button>
      </Box>
    );
  };

  const Claimed = () => {
    return (
      <Box display="flex" alignItems={{ ml: 'flex-start', initial: 'center' }} flexDirection="column" minWidth="100px">
        <Button
          variant="tertiary"
          size="small"
          css={css`
            width: 100%;
          `}
          disabled={true}
        >
          Claimed
        </Button>
      </Box>
    );
  };

  return (
    <>
      {activeState === 0 && <ConnectFlow />}
      {activeState === 1 && <Join />}
      {activeState === 2 && <Verify />}
      {activeState === 3 && <Claimed />}
    </>
  );
};

export { DiscordActionButton };
