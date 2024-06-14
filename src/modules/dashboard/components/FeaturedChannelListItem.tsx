// React + Web3 Essentials
import { FC, useMemo, useState, useEffect } from 'react';

// External Packages
import { useSelector } from 'react-redux';
import { cloneDeep } from 'lodash';

// Internal Components
import { Box, Button, CaretDown, NotificationMobile, Skeleton, Text } from 'blocks';
import SubscribeChannelDropdown from 'common/components/SubscribeChannelDropdown';
import UnsubscribeChannelDropdown from 'common/components/UnsubscribeChannelDropdown';

// Internal Configs
import { ChannelDetailsProps } from '../configs/DashboardFeaturedChannels.config';
import { useGetChannelDetails } from 'queries';
import { css } from 'styled-components';
import Ethereum from 'blocks/illustrations/components/Ethereum';
import { LOGO_ALIAS_CHAIN } from '../configs/ChainDetails';
import TickDecoratedCircleFilled from 'blocks/icons/components/TickDecoratedCircleFilled';
import { Link } from 'react-router-dom';

type FeaturedChannelListItemProps = {
  channel: ChannelDetailsProps;
};

const FeaturedChannelListItem: FC<FeaturedChannelListItemProps> = (props) => {
  const { channel } = props;

  const { subscriptionStatus, userSettings: currentUserSettings } = useSelector((state) => state.channels);

  const userSettings = useMemo(() => {
    return cloneDeep(currentUserSettings);
  }, [currentUserSettings]);

  const formatSubscriberCount = (count: number) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    } else {
      return count;
    }
  };

  const { data: channelDetails, isLoading } = useGetChannelDetails(channel.channel);

  const [subscribed, setSubscribed] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(0);

  useEffect(() => {
    if (channelDetails) {
      setSubscribed(subscriptionStatus[channel.channel]);
      setSubscriberCount(channelDetails.subscriber_count);
    }
  }, [subscriptionStatus, channelDetails]);

  const [loading, setLoading] = useState(false);

  const AliasChain = channelDetails?.alias_blockchain_id && LOGO_ALIAS_CHAIN[+channelDetails.alias_blockchain_id];

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        border={{ light: '1px solid gray-200', dark: '1px solid gray-800' }}
        padding="s6"
        borderRadius="24px"
        gap="s3"
        width={{ initial: '27.68%' }}
        css={css`
          flex-shrink: 0;
        `}
      >
        <Box
          display="flex"
          justifyContent="space-between"
        >
          <Skeleton isLoading={isLoading}>
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
          </Skeleton>

          {!subscribed && !isLoading && channelDetails && (
            <SubscribeChannelDropdown
              channelDetails={channelDetails}
              setLoading={setLoading}
              setSubscribed={setSubscribed}
              setSubscriberCount={setSubscriberCount}
            >
              <Button
                disabled={isLoading}
                variant="tertiary"
                size="small"
              >
                Subscribe
              </Button>
            </SubscribeChannelDropdown>
          )}

          {subscribed && !isLoading && channelDetails && (
            <UnsubscribeChannelDropdown
              channelDetail={channelDetails}
              onSuccess={() => {
                setSubscribed(false);
                setSubscriberCount((prevSubscriberCount: number) => prevSubscriberCount - 1);
              }}
              userSetting={userSettings[channelDetails.channel]}
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
                  <TickDecoratedCircleFilled color={{ light: 'gray-300', dark: 'gray-700' }} />
                )}

                <Ethereum
                  width={16}
                  height={16}
                />

                {channelDetails &&
                  channelDetails?.alias_address != null &&
                  channelDetails?.alias_address != 'NULL' &&
                  AliasChain && (
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
                {formatSubscriberCount(subscriberCount)} subscribers
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

export default FeaturedChannelListItem;
