// React + Web3 Essentials
import { FC } from 'react';

// Third-party libraries
import { css } from 'styled-components';
import { Link } from 'react-router-dom';

//hooks
import { useGetChannelDetails, useGetUserSubscriptions } from 'queries';
import { useAccount } from 'hooks';

//Utility functions
import { formatSubscriberCount } from '../Dashboard.utils';

// Components
import { Box, Button, CaretDown, Ethereum, NotificationMobile, Skeleton, Text, TickDecoratedCircleFilled } from 'blocks';
import { SubscribeChannelDropdown } from 'common/components/SubscribeChannelDropdown';
import { UnsubscribeChannelDropdown } from 'common/components/UnsubscribeChannelDropdown';
import { VerifiedToolTipComponent } from './VerifiedToolTipComponent';
import { UserSetting } from 'helpers/channel/types';

// Internal Configs
import { LOGO_ALIAS_CHAIN } from 'common';

// Styles
import { ImageV3 } from '../Dashboard.styled';

type FeaturedChannelsListItemProps = {
  channelAddress: string;
};

const FeaturedChannelsListItem: FC<FeaturedChannelsListItemProps> = (props) => {
  const { channelAddress } = props;

  const { wallet } = useAccount();
  const isWalletConnected = !!wallet?.accounts?.length;

  /* Fetching Channel Details based on Channel Address */
  const { data: channelDetails, isLoading } = useGetChannelDetails(channelAddress);

  /* Fetching User Subscribed Channel Details along with user settings */
  const {
    data: userSubscription,
    refetch,
    isLoading: isSubscriptionLoading,
  } = useGetUserSubscriptions(channelAddress, { enabled: isWalletConnected });

  const isSubscribed = userSubscription && userSubscription?.length;

  const AliasChain = channelDetails?.alias_blockchain_id && LOGO_ALIAS_CHAIN[+channelDetails.alias_blockchain_id];

  const hasAliasAddress =
    channelDetails && channelDetails?.alias_address != null && channelDetails?.alias_address != 'NULL';

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        border="border-sm solid stroke-secondary"
        padding={{ initial: 'spacing-md', ml: 'spacing-md spacing-sm', tb: 'spacing-sm', lp: 'spacing-sm' }}
        borderRadius="radius-md"
        gap="spacing-xs"
        width={{ initial: '290px', ml: 'auto', tb: '278px', lp: '278px' }}
        css={css`
          flex-shrink: 0;
        `}
        minHeight={{ initial: 'auto', tb: '180px' }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
        >
          <Skeleton isLoading={isLoading}>
            <ImageV3
              width="52px"
              height="52px"
              src={channelDetails?.iconV2}
              alt={channelDetails?.name}
            />
          </Skeleton>

          {!isSubscribed && (
            <Skeleton
              isLoading={isSubscriptionLoading || isLoading}
              height="40px"
            >
              <SubscribeChannelDropdown
                channelDetails={channelDetails!}
                onSuccess={refetch}
              >
                <Button
                  id="basic-button"
                  disabled={isLoading}
                  variant="tertiary"
                  size="small"
                >
                  Subscribe
                </Button>
              </SubscribeChannelDropdown>
            </Skeleton>
          )}

          {!!isSubscribed && (
            <Skeleton
              isLoading={isSubscriptionLoading || isLoading}
              height="40px"
            >
              <UnsubscribeChannelDropdown
                channelDetail={channelDetails!}
                onSuccess={refetch}
                userSetting={JSON.parse(userSubscription[0].user_settings) as UserSetting[]}
              >
                <Button
                  variant="secondary"
                  size="small"
                  leadingIcon={<NotificationMobile size={20} />}
                  trailingIcon={<CaretDown size={20} />}
                >
                  Subscribed
                </Button>
              </UnsubscribeChannelDropdown>
            </Skeleton>
          )}
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-xxs"
        >
          <Box
            display="flex"
            flexDirection="column"
            gap="spacing-xxxs"
          >
            <Skeleton
              isLoading={isLoading}
              height="20px"
            >
              <Box
                display="flex"
                flexDirection="row"
                gap="spacing-xxxs"
                alignItems="center"
              >
                <Link
                  to={`/channels/${channelDetails?.channel}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Text
                    variant="h5-semibold"
                    color="text-primary"
                  >
                    {channelDetails?.name}
                  </Text>
                </Link>

                {!!channelDetails?.verified_status && (
                  <VerifiedToolTipComponent>
                    <TickDecoratedCircleFilled
                      size={16}
                      color="icon-tertiary"
                    />
                  </VerifiedToolTipComponent>
                )}

                <Ethereum
                  width={16}
                  height={16}
                />

                {hasAliasAddress && AliasChain && (
                  <AliasChain
                    width={16}
                    height={16}
                  />
                )}
              </Box>
            </Skeleton>

            <Skeleton
              isLoading={isLoading}
              height="20px"
            >
              <Text
                variant="c-regular"
                color="text-tertiary-inverse"
              >
                {formatSubscriberCount(channelDetails?.subscriber_count)} subscribers
              </Text>
            </Skeleton>
          </Box>
          <Box>
            <Skeleton
              isLoading={isLoading}
              height="40px"
            >
              <Text
                variant="bs-regular"
                color="text-tertiary-inverse"
                numberOfLines={2}
              >
                {channelDetails?.info}
              </Text>
            </Skeleton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export { FeaturedChannelsListItem };
