// React and other libraries
import { FC } from 'react';

//Third-party libraries
import { css } from 'styled-components';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';

//Configs
import { LOGO_ALIAS_CHAIN, formatSubscriberCount, VerifiedChannelTooltipContent } from 'common';

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
  Tooltip,
} from 'blocks';

import { UserSetting } from 'helpers/channel/types';
import { useAccount } from 'hooks';
import { SubscribeChannelDropdown } from 'common/components/SubscribeChannelDropdown';
import { UnsubscribeChannelDropdown } from 'common/components/UnsubscribeChannelDropdown';

export type ChannelListItemProps = {
  allowSubscribe?: boolean;
  channelAddress: string;
  isLoading?: boolean;

  refetchChannels?:
    | (() => void)
    | ((options?: RefetchOptions | undefined) => Promise<QueryObserverResult<UserSubscriptionsResponse, Error>>);
};
const ChannelListItem: FC<ChannelListItemProps> = ({
  allowSubscribe = true,
  channelAddress,
  refetchChannels,
  isLoading,
}) => {
  const { data: channelDetails, isLoading: isChannelLoading } = useGetChannelDetails(channelAddress);

  const { wallet } = useAccount();

  const isWalletConnected = !!wallet?.accounts?.length;

  const {
    data: userSubscription,
    refetch: refetchUserSubscription,
    isLoading: isSubscriptionLoading,
  } = useGetUserSubscriptions(channelAddress, {
    enabled: isWalletConnected,
  });

  const AliasChain = channelDetails?.alias_blockchain_id && LOGO_ALIAS_CHAIN[+channelDetails.alias_blockchain_id];

  const hasAddressAlias =
    channelDetails?.alias_address != null && channelDetails?.alias_address != 'NULL' && AliasChain;

  const isSubscribed = userSubscription && userSubscription?.length;

  const handleRefetch = () => {
    refetchChannels?.();
    refetchUserSubscription();
  };

  return (
    <Skeleton isLoading={isChannelLoading || isLoading}>
      <Box
        display="flex"
        justifyContent="space-between"
        margin="spacing-xxs spacing-none"
      >
        <Box
          display="flex"
          gap="spacing-xs"
        >
          <Box
            width="40px"
            height="40px"
            borderRadius="radius-xs"
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
              gap="spacing-xxs"
              alignItems="center"
            >
              <Link
                to={`/channels/${channelDetails?.channel}`}
                textProps={{
                  variant: 'h5-semibold',
                  color: 'text-primary',
                }}
              >
                {channelDetails?.name}
              </Link>
              {!!channelDetails?.verified_status && (
                <Tooltip overlay={<VerifiedChannelTooltipContent />}>
                  <Box
                    cursor="pointer"
                    display="flex"
                  >
                    <TickDecoratedCircleFilled
                      color="icon-tertiary"
                      size={16}
                    />
                  </Box>
                </Tooltip>
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
              color="text-tertiary-inverse"
            >
              {formatSubscriberCount(channelDetails?.subscriber_count || 0)} subscribers
            </Text>
          </Box>
        </Box>

        <Skeleton isLoading={isSubscriptionLoading}>
          {allowSubscribe && channelDetails && !isSubscribed && (
            <SubscribeChannelDropdown
              channelDetails={channelDetails}
              onSuccess={handleRefetch}
            >
              <Button
                size="small"
                iconOnly={<InboxBell />}
                variant={'tertiary'}
              />
            </SubscribeChannelDropdown>
          )}

          {allowSubscribe && channelDetails && !!isSubscribed && (
            <UnsubscribeChannelDropdown
              channelDetail={channelDetails}
              onSuccess={handleRefetch}
              userSetting={JSON.parse(userSubscription[0].user_settings) as UserSetting[]}
            >
              <Button
                size="small"
                iconOnly={<NotificationMobile />}
                variant={'secondary'}
              />
            </UnsubscribeChannelDropdown>
          )}
        </Skeleton>
      </Box>
    </Skeleton>
  );
};

export { ChannelListItem };
