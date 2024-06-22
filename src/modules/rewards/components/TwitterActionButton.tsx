import { Box, Button, Skeleton } from 'blocks';
import { useGetUsersSingleActivity } from 'queries/hooks/rewards';
import React, { useEffect, useState } from 'react';
import { css } from 'styled-components';

type Props = {
  activityTypeId: string;
};
const TwitterActionButton: React.FC<Props> = ({ activityTypeId }) => {
  const ButtonState = {
    CONNECT: {
      id: '1',
      label: 'Connect',
      onclick: () => handleConnect(),
      disabled: false,
    },
    JOIN: {
      id: '2',
      label: 'Follow',
      onclick: () => handleJoin(),
      disabled: false,
    },
    VERIFY: {
      id: '3',
      label: 'Verify',
      onclick: () => handleVerify(),
      disabled: false,
    },
    CLAIMED: {
      id: '4',
      label: 'Claimed',
      onclick: () => {},
      disabled: true,
    },
  };

  const [activeButtonState, setActiveButtonState] = useState(ButtonState.CONNECT);

  const [verifying, setVerifying] = useState(false);

  // const userId = 'fa25902';
  const userId = '5bddf6c';
  // const userId = '0d5950a';

  //Fetching Activities based on activity Type ID
  const { data: usersSingleActivity, isLoading } = useGetUsersSingleActivity({ userId, activityId: activityTypeId });

  useEffect(() => {
    console.log('Users Single Activities', activityTypeId, usersSingleActivity);
    // What about null state of the usersSingleActivity or if this API throws an error.
    if (usersSingleActivity && usersSingleActivity.status === 'COMPLETED') {
      setActiveButtonState(ButtonState.CLAIMED);
    } else if (usersSingleActivity) {
      setActiveButtonState(ButtonState.CONNECT);
    }
  }, [usersSingleActivity]);

  const handleConnect = () => {
    console.log('Log In to twitter');
    setActiveButtonState(ButtonState.VERIFY);
  };

  const handleJoin = () => {
    console.log('Follow Push on Twitter');
    setActiveButtonState(ButtonState.CLAIMED);
  };

  const handleVerify = async () => {
    console.log('Verifying if you follow Push on twitter or not');
    setActiveButtonState(ButtonState.JOIN);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      minWidth="100px"
    >
      <Skeleton
        isLoading={isLoading}
        width="100%"
      >
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

export { TwitterActionButton };
