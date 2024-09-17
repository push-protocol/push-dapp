import { FC, useState } from 'react';

//Components
import { Box, Link, Button, Text, Back, Tag, Copy, Skeleton, CaretDown } from 'blocks';
import { ChannelDetails, useGetChannelNotifications, useGetUserSubscriptions } from 'queries';
import { css } from 'styled-components';
import { copyToClipboard, shortenText } from 'helpers/UtilityHelper';
import { useNavigate } from 'react-router-dom';
import APP_PATHS from 'config/AppPaths';
import { appConfig } from 'config';
import { LOGO_ALIAS_CHAIN, SubscribeChannelDropdown, UnsubscribeChannelDropdown } from 'common';
import { NotificationItem, chainNameType } from '@pushprotocol/uiweb';
import { useBlocksTheme } from 'blocks/Blocks.hooks';
import { useAccount } from 'hooks';
import { UserSetting } from 'helpers/channel/types';
import { ChannelDetailSubscribe } from './ChannelDetailSubscribe';

export type ChannelDetailProps = { channel: ChannelDetails; isLoading: boolean };
const ChannelDetail: FC<ChannelDetailProps> = ({ channel, isLoading }) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const navigate = useNavigate();
  const { mode } = useBlocksTheme();

  const {
    data: notificationsData,
    isLoading: isNotificationsLoading,
    isSuccess,
  } = useGetChannelNotifications(channel?.channel, 1, 20);

  const notifications = isNotificationsLoading ? Array(10).fill(0) : notificationsData;
  //notification component doesnot update in sdk
  //copy color
  //manage button color
  let verifiedAliasChainIds =
    channel?.aliases?.filter((item) => item.is_alias_verified).map((item) => parseInt(item.alias_blockchain_id)) || [];

  if (verifiedAliasChainIds.length > 0) {
    verifiedAliasChainIds.unshift(appConfig.coreContractChain);
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      gap="spacing-xl"
      padding="spacing-none spacing-xxs"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-sm"
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-xs"
          width="100%"
        >
          <Box
            onClick={() => navigate(APP_PATHS.Channels)}
            cursor="pointer"
          >
            <Back size={24} />
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
          >
            <Box
              display="flex"
              gap="spacing-sm"
              alignItems="center"
            >
              <Skeleton isLoading={isLoading}>
                <Box
                  width={{ dp: '90px', ml: '52px' }}
                  height={{ dp: '90px', ml: '52px' }}
                  borderRadius="radius-md"
                  css={css`
                    overflow: hidden;
                  `}
                >
                  <img
                    width="100%"
                    height="100%"
                    src={channel?.iconV2 || ''}
                    alt={channel?.name || ''}
                  />
                </Box>
              </Skeleton>
              <Box
                display="flex"
                flexDirection="column"
                gap="spacing-xs"
              >
                <Skeleton isLoading={isLoading}>
                  <Box
                    display="flex"
                    flexDirection="column"
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                    >
                      <Text
                        color="text-primary"
                        variant="h4-semibold"
                      >
                        {channel?.name || ''}
                      </Text>
                      {verifiedAliasChainIds.length > 0 && (
                        <Box
                          display="flex"
                          alignItems="center"
                          margin="spacing-none spacing-none spacing-none spacing-xs"
                        >
                          {verifiedAliasChainIds.map((aliasChainId: number) => {
                            const LogoComponent = LOGO_ALIAS_CHAIN[aliasChainId];
                            return LogoComponent ? (
                              <Box
                                display="flex"
                                css={css`
                                  margin-left: -4px;
                                `}
                              >
                                <LogoComponent
                                  key={aliasChainId}
                                  width={18}
                                  height={18}
                                />
                              </Box>
                            ) : null;
                          })}
                        </Box>
                      )}
                    </Box>
                    <Box
                      display="flex"
                      gap="spacing-xxxs"
                      alignItems="center"
                    >
                      <Text
                        color="text-tertiary"
                        variant="bs-regular"
                      >
                        {shortenText(channel?.channel || '', 10, 10) || ''}
                      </Text>
                      <Box
                        cursor="pointer"
                        onClick={() => copyToClipboard(channel?.channel || '')}
                      >
                        <Copy
                          color="icon-tertiary"
                          size={12}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Skeleton>
                <Skeleton isLoading={isLoading}>
                  <Box
                    display="flex"
                    gap="spacing-xs"
                  >
                    <Text
                      color="text-tertiary-inverse"
                      variant="c-regular"
                    >
                      {channel?.subscriber_count} subscribers
                    </Text>
                    <Text
                      color="text-tertiary-inverse"
                      variant="c-regular"
                    >
                      Tutotrial
                    </Text>
                    {/* fetch from api */}
                    <Tag
                      label="Defi"
                      variant="info"
                    />
                  </Box>
                </Skeleton>
              </Box>
            </Box>
            <Box display={{ dp: 'flex', ml: 'none' }}>
              <ChannelDetailSubscribe channel={channel} />
            </Box>
          </Box>
        </Box>
        <Skeleton isLoading={isLoading}>
          <Box>
            <Text
              variant="bs-regular"
              color="text-tertiary"
              as="span"
            >
              {!showMore ? (channel?.info || '').substring(0, 231) : channel?.info || ''}
            </Text>
            <Box
              as="span"
              cursor="pointer"
              onClick={() => setShowMore(!showMore)}
            >
              <Text
                color="text-brand-medium"
                as="span"
              >
                {' '}
                {`Show ${!showMore ? 'More' : 'Less'}`}
              </Text>
            </Box>
          </Box>
        </Skeleton>
        <Box
          display={{ dp: 'none', ml: 'flex' }}
          width="100%"
        >
          <ChannelDetailSubscribe channel={channel} />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        overflow="hidden"
      >
        <Text
          color="text-primary"
          variant="h4-semibold"
        >
          Recent Notifications
        </Text>
        <Box
          display="flex"
          width="100%"
          flexDirection="column"
          overflow="auto"
          justifyContent="flex-start"
          customScrollbar={true}
        >
          {isSuccess && !isNotificationsLoading && !notifications?.length && (
            <Box
              display="flex"
              alignSelf="center"
              width="fit-content"
              borderRadius="radius-xl"
              backgroundColor="surface-secondary"
              padding="spacing-xxs spacing-sm"
            >
              <Text
                color="text-primary"
                variant="bs-regular"
              >
                {' '}
                No notifications to show yet
              </Text>
            </Box>
          )}
          {notifications?.map((item) => {
            const payload = item?.message?.payload;
            return (
              <Skeleton isLoading={isNotificationsLoading}>
                <Box key={item.payload_id}>
                  <NotificationItem
                    notificationTitle={payload?.title}
                    notificationBody={payload?.body}
                    cta={payload?.cta}
                    image={payload?.embed}
                    app={item?.channel?.name}
                    icon={item?.channel?.icon}
                    url={item?.channel?.url}
                    chainName={item?.source as chainNameType}
                    theme={mode}
                  />
                </Box>
              </Skeleton>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export { ChannelDetail };
