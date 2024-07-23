import { FC } from 'react';

import { css } from 'styled-components';
import { useSelector } from 'react-redux';

import { Box, Text } from 'blocks';
import { FormFields } from './components/FormFields';
import UnlockProfileWrapper, { UNLOCK_PROFILE_TYPE } from 'components/chat/unlockProfile/UnlockProfileWrapper';

import { UserStoreType } from 'types';

//add formik
//add conditon for /send url

const SendNotification: FC = () => {
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);
  return (
    <Box
      padding={{ dp: 'spacing-lg', ml: 'spacing-sm' }}
      display="flex"
      flexDirection="column"
      gap={{ dp: 'spacing-xl', ml: 'spacing-md' }}
      alignSelf="center"
      width={{ dp: '648px', ml: '357px' }}
      //this has to be responsive
      borderRadius="radius-lg"
      alignItems="center"
      backgroundColor="surface-primary"
      margin={{ dp: 'spacing-lg', ml: 'spacing-sm' }}
    >
      <Text
        color="text-primary"
        variant="h3-semibold"
        display={{ dp: 'block', ml: 'none' }}
      >
        Send Notification
      </Text>
      <Text
        color="text-primary"
        variant="h5-semibold"
        display={{ dp: 'none', ml: 'block' }}
      >
        Send Notification
      </Text>
      <FormFields />
      {userPushSDKInstance && userPushSDKInstance?.readmode() && (
        <Box
          display="flex"
          justifyContent="center"
          width="-webkit-fill-available"
          alignItems="center"
          css={css`
            z-index: 99999;
          `}
        >
          <UnlockProfileWrapper
            type={UNLOCK_PROFILE_TYPE.MODAL}
            showConnectModal={true}
          />
        </Box>
      )}
    </Box>
  );
};

export { SendNotification };
