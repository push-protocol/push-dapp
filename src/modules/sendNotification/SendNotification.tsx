import { FC, useEffect, useState } from 'react';

import { css } from 'styled-components';
import { useSelector } from 'react-redux';

import { Box, Text } from 'blocks';
import { SendNotificationForm } from './components/SendNotificationForm';
import UnlockProfileWrapper, { UNLOCK_PROFILE_TYPE } from 'components/chat/unlockProfile/UnlockProfileWrapper';

import { UserStoreType } from 'types';
import { useGetAliasInfo, useGetChannelDetails } from 'queries';
import { useAccount } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { aliasChainIdToChainName } from 'helpers/UtilityHelper';
import { ALIAS_CHAIN } from '@pushprotocol/restapi/src/lib/config';

const SendNotification: FC = () => {
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(true);
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);
  const { account, chainId } = useAccount();

  const { data: alaisDetails } = useGetAliasInfo({
    alias: account,
    aliasChain: aliasChainIdToChainName[chainId as keyof typeof aliasChainIdToChainName] as ALIAS_CHAIN,
  });
  const { data: channelDetails } = useGetChannelDetails(alaisDetails?.channel || account);
  const { delegatees } = useSelector((state: any) => state.admin);
  const nagivate = useNavigate();

  useEffect(() => {
    if (!channelDetails && !delegatees?.length && !alaisDetails) nagivate('/channels');
  }, [channelDetails]);

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
        display={{ initial: 'block', ml: 'none' }}
      >
        Send Notification
      </Text>
      <Text
        color="text-primary"
        variant="h5-semibold"
        display={{ initial: 'none', ml: 'block' }}
      >
        Send Notification
      </Text>
      <Box width="100%">
        <SendNotificationForm channelDetails={channelDetails} />
      </Box>
      {isAuthModalVisible && userPushSDKInstance && userPushSDKInstance?.readmode() && (
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
            onClose={() => setIsAuthModalVisible(false)}
            description="Unlock your profile to proceed."
          />
        </Box>
      )}
    </Box>
  );
};

export { SendNotification };
