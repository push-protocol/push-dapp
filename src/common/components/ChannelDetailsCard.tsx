import { FC } from 'react';

import { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { ChannelDetails } from 'queries';

import { LOGO_ALIAS_CHAIN, formatSubscriberCount, VerifiedChannelTooltipContent } from 'common';

import {
  Box,
  Button,
  CaretDown,
  Ethereum,
  NotificationMobile,
  Skeleton,
  Text,
  TickDecoratedCircleFilled,
  Tooltip,
} from 'blocks';
import { SubscribeChannelDropdown } from 'common/components/SubscribeChannelDropdown';
import { UnsubscribeChannelDropdown } from 'common/components/UnsubscribeChannelDropdown';
import { UserSetting } from 'helpers/channel/types';

export type ChannelDetailsCardProps = {
  channelDetails: ChannelDetails | undefined;
  isLoading: boolean;
  isSubscribed: boolean;
  isSubscriptionLoading: boolean;
  handleRefetch: () => void;
  userSettings: UserSetting[];
};

const ChannelDetailsCard: FC<ChannelDetailsCardProps> = ({
  channelDetails,
  isLoading,
  isSubscribed,
  isSubscriptionLoading,
  handleRefetch,
  userSettings,
}) => {
  const AliasChain = channelDetails?.alias_blockchain_id && LOGO_ALIAS_CHAIN[+channelDetails.alias_blockchain_id];

  const hasAliasAddress =
    channelDetails && channelDetails?.alias_address != null && channelDetails?.alias_address != 'NULL';
  return (
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
          <img
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
              onSuccess={handleRefetch}
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
              onSuccess={handleRefetch}
              userSetting={userSettings}
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
  );
};

export { ChannelDetailsCard };
