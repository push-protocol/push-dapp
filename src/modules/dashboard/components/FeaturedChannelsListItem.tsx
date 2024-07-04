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
import { Box, Button, CaretDown, NotificationMobile, Skeleton, Text } from 'blocks';
import { SubscribeChannelDropdown } from 'common/components/SubscribeChannelDropdown';
import { UnsubscribeChannelDropdown } from 'common/components/UnsubscribeChannelDropdown';
import TickDecoratedCircleFilled from 'blocks/icons/components/TickDecoratedCircleFilled';
import { VerifiedToolTipComponent } from './VerifiedToolTipComponent';
import Ethereum from 'blocks/illustrations/components/Ethereum';
import { UserSetting } from 'helpers/channel/types';

// Internal Configs
import { LOGO_ALIAS_CHAIN } from '../configs/chainDetails.config';

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
        border={{ light: '1px solid gray-200', dark: '1px solid gray-800' }}
        padding="s6"
        borderRadius="r6"
        gap="s3"
        width={{ initial: '27.35%', tb: 'fit-content', ml: '75%' }}
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
          gap="s2"
        >
          <Box
            display="flex"
            flexDirection="column"
            gap="s1"
          >
            <Skeleton
              isLoading={isLoading}
              height="20px"
            >
              <Box
                display="flex"
                flexDirection="row"
                gap="s1"
                alignItems="center"
              >
                <Link
                  to={`/channels/${channelDetails?.channel}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Text
                    variant="h5-semibold"
                    color={{ light: 'gray-1000', dark: 'gray-100' }}
                  >
                    {channelDetails?.name}
                  </Text>
                </Link>

                {!!channelDetails?.verified_status && (
                  <VerifiedToolTipComponent>
                    <TickDecoratedCircleFilled
                      size={16}
                      color={{ light: 'gray-300', dark: 'gray-700' }}
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
                color={{ light: 'gray-600', dark: 'gray-500' }}
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
                color={{ light: 'gray-600', dark: 'gray-500' }}
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
