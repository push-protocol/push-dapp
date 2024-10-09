import { FC } from 'react';

import { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { ChannelDetails } from 'queries';

import { LOGO_ALIAS_CHAIN, formatSubscriberCount, VerifiedChannelTooltipContent } from 'common';

import {
  Box,
  Button,
  ButtonProps,
  CaretDown,
  NotificationMobile,
  ResponsiveProp,
  Skeleton,
  Text,
  TickDecoratedCircleFilled,
  Tooltip,
} from 'blocks';
import APP_PATHS from 'config/AppPaths';
import { SubscribeChannelDropdown } from 'common/components/SubscribeChannelDropdown';
import { UnsubscribeChannelDropdown } from 'common/components/UnsubscribeChannelDropdown';
import { UserSetting } from 'helpers/channel/types';
import { appConfig } from 'config';

export type ChannelDetailsCardProps = {
  channelDetails: ChannelDetails | undefined;
  isLoading: boolean;
  isSubscribed: boolean;
  isSubscriptionLoading: boolean;
  handleRefetch: () => void;
  userSettings: UserSetting[];
  width?: ResponsiveProp<string>;
  subscribeButtonVariant?: ButtonProps['variant'];
};

const ChannelDetailsCard: FC<ChannelDetailsCardProps> = ({
  channelDetails,
  isLoading,
  isSubscribed,
  isSubscriptionLoading,
  handleRefetch,
  userSettings,
  width,
  subscribeButtonVariant = 'tertiary',
}) => {
  let verifiedAliasChainIds = [
    appConfig.coreContractChain,
    ...(channelDetails?.aliases
      ?.filter((item) => item.is_alias_verified)
      .map((item) => parseInt(item.alias_blockchain_id)) || []),
  ];
  return (
    <Box
      display="flex"
      flexDirection="column"
      border="border-sm solid stroke-secondary"
      padding={{ initial: 'spacing-md', ml: 'spacing-md spacing-sm', tb: 'spacing-sm', lp: 'spacing-sm' }}
      borderRadius="radius-md"
      gap="spacing-xs"
      width={{
        initial: '290px',
        mm: '258px',
        ml: 'auto',
        tb: '278px',
        lp: '278px',
        ...(typeof width !== 'string' && width),
      }}
      css={css`
        flex-shrink: 0;
      `}
      minHeight={{ initial: 'auto', tb: '180px' }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        css={css`
          .channel-card-icon {
            border: var(--border-sm) solid rgba(0, 0, 0, 0.05);
            border-radius: var(--radius-sm);
            height: 52px;
            width: 52px;
          }
        `}
      >
        <Skeleton isLoading={isLoading}>
          <Link
            to={APP_PATHS.ChannelDetails(channelDetails?.channel)}
            style={{ textDecoration: 'none' }}
          >
            <img
              className="channel-card-icon"
              src={channelDetails?.iconV2}
              alt={channelDetails?.name}
            />
          </Link>
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
                variant={subscribeButtonVariant}
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
                to={APP_PATHS.ChannelDetails(channelDetails?.channel)}
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

              {verifiedAliasChainIds?.length > 0 && (
                <Box
                  display="flex"
                  alignItems="center"
                  margin="spacing-none spacing-none spacing-none spacing-xxxs"
                >
                  {verifiedAliasChainIds.map((aliasChainId: number, index) => {
                    const LogoComponent = LOGO_ALIAS_CHAIN[aliasChainId];
                    return LogoComponent ? (
                      <Box
                        display="flex"
                        css={css`
                          margin-left: -5px;
                        `}
                        key={`${index}`}
                      >
                        <LogoComponent
                          key={aliasChainId}
                          width={16}
                          height={16}
                        />
                      </Box>
                    ) : null;
                  })}
                </Box>
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
