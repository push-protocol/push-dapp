// React and other libraries
import { FC, useEffect } from 'react';

//Third-party libraries
import { css } from 'styled-components';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';

//Configs
import { LOGO_ALIAS_CHAIN } from '../configs/ChainDetails';

//Utility functions
import { formatSubscriberCount } from '../Dashboard.utils';

//Hooks
import { UserSubscriptionsResponse, useGetChannelDetails, useGetUserSubscriptions } from 'queries';

// Components

import {
  Box,
  Button,
  NotificationMobile,
  Skeleton,
  Text,
  Link,
  InboxBell,
  TickDecoratedCircleFilled,
  Ethereum,
} from 'blocks';
import { VerifiedToolTipComponent } from './VerifiedToolTipComponent';
import { UserSetting } from 'helpers/channel/types';

import { useAccount } from 'hooks';
import { SubscribeChannelDropdown } from 'common/components/SubscribeChannelDropdown';
import { UnsubscribeChannelDropdown } from 'common/components/UnsubscribeChannelDropdown';

export type ChannelListItemProps = {
  channelAddress: string;
  userSetting?: UserSetting[];
  isLoading?: boolean;
  refetchUserSubscriptions?: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<UserSubscriptionsResponse, Error>>;
};
const ChannelListItem: FC<ChannelListItemProps> = ({
  channelAddress,
  userSetting = undefined,
  refetchUserSubscriptions,
  isLoading,
}) => {
  const { data: channelDetails, isLoading: isChannelLoading } = useGetChannelDetails(channelAddress);
  const { data: userSubscription, refetch, isLoading: isSubscriptionLoading } = useGetUserSubscriptions(channelAddress);
  const { wallet } = useAccount();

  const AliasChain = channelDetails?.alias_blockchain_id && LOGO_ALIAS_CHAIN[+channelDetails.alias_blockchain_id];
  const hasAddressAlias =
    channelDetails?.alias_address != null && channelDetails?.alias_address != 'NULL' && AliasChain;

  const isWalletConnected = !!wallet?.accounts?.length;

  if (isWalletConnected) refetch();

  const isSubscribed = userSubscription && userSubscription?.length;

  return (
    <Skeleton isLoading={isChannelLoading || isLoading || isSubscriptionLoading}>
      <Box
        display="flex"
        justifyContent="space-between"
        margin="s2 s0"
      >
        <Box
          display="flex"
          gap="s3"
        >
          <Box
            width="40px"
            height="40px"
            borderRadius="var(--r3)"
            css={css`
              overflow: hidden;
            `}
          >
            <img
              width="100%"
              height="100%"
              src={channelDetails?.iconV2}
              alt={channelDetails?.name}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
          >
            <Box
              display="flex"
              gap="s1"
              alignItems="center"
            >
              <Link
                to={`/channels/${channelDetails?.channel}`}
                textProps={{
                  variant: 'h5-semibold',
                  color: { light: 'gray-1000', dark: 'white' },
                }}
              >
                {channelDetails?.name}
              </Link>
              {!!channelDetails?.verified_status && (
                <VerifiedToolTipComponent>
                  <TickDecoratedCircleFilled color={{ light: 'gray-300', dark: 'gray-700' }} />
                </VerifiedToolTipComponent>
              )}
              <Ethereum
                width={16}
                height={16}
              />
              {channelDetails && hasAddressAlias && (
                <AliasChain
                  width={16}
                  height={16}
                />
              )}
            </Box>
            <Text
              variant="c-regular"
              color={{ light: 'gray-600', dark: 'gray-500' }}
            >
              {formatSubscriberCount(channelDetails?.subscriber_count || 0)} subscribers
            </Text>
          </Box>
        </Box>

        {isWalletConnected && channelDetails && !isSubscribed && (
          <SubscribeChannelDropdown
            channelDetails={channelDetails}
            onSuccess={refetch}
          >
            <Button
              size="small"
              iconOnly={<InboxBell />}
              variant={'tertiary'}
            />
          </SubscribeChannelDropdown>
        )}

        {isWalletConnected && channelDetails && !!isSubscribed && (
          <UnsubscribeChannelDropdown
            channelDetail={channelDetails}
            onSuccess={refetchUserSubscriptions ?? refetch}
            userSetting={userSetting}
          >
            <Button
              size="small"
              iconOnly={<NotificationMobile />}
              variant={'secondary'}
            />
          </UnsubscribeChannelDropdown>
        )}
      </Box>
    </Skeleton>
  );
};

export { ChannelListItem };
