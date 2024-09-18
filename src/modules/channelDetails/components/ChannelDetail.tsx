import { FC, useState } from 'react';

import { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { NotificationItem, chainNameType } from '@pushprotocol/uiweb';

import { ChannelDetailSubscribe } from './ChannelDetailSubscribe';
import { Box, Text, Back, Tag, Copy, Skeleton, Tutorial } from 'blocks';
import { LOGO_ALIAS_CHAIN } from 'common';

import { useBlocksTheme } from 'blocks/Blocks.hooks';
import { ChannelDetails, useGetChannelNotifications } from 'queries';

import { copyToClipboard, shortenText } from 'helpers/UtilityHelper';

import APP_PATHS from 'config/AppPaths';
import { appConfig } from 'config';

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
  //fetch channel category
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
        width="100%"
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
              gap={{ dp: 'spacing-sm', ml: 'spacing-xs' }}
              alignItems={{ dp: 'center', ml: 'flex-start' }}
            >
              <Skeleton isLoading={isLoading}>
                <Box
                  width="90px"
                  height="90px"
                  borderRadius="radius-md"
                  display={{ dp: 'flex', ml: 'none' }}
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
                <Box
                  width="52px"
                  height="52px"
                  borderRadius="radius-sm"
                  display={{ dp: 'none', ml: 'flex' }}
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
                    <Box
                      display="flex"
                      gap="spacing-xxxs"
                    >
                      <Tutorial
                        size={16}
                        color="icon-tertiary"
                      />
                      <Text
                        color="text-tertiary-inverse"
                        variant="c-regular"
                      >
                        Tutotrial
                      </Text>
                    </Box>
                    <Tag
                      label="Defi"
                      variant="info"
                    />
                  </Box>
                </Skeleton>
              </Box>
            </Box>
            <Box display={{ dp: 'inline', ml: 'none' }}>
              <ChannelDetailSubscribe channel={channel} />
            </Box>
          </Box>
        </Box>

        <Skeleton isLoading={isLoading}>
          <Box>
            <Text
              display={{ dp: 'inline', ml: 'none' }}
              variant="bs-regular"
              color="text-tertiary"
              as="span"
            >
              {!showMore ? (channel?.info || '').substring(0, 231) : channel?.info || ''}
            </Text>
            <Text
              display={{ dp: 'none', ml: 'inline' }}
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
                display={{ dp: 'inline', ml: 'none' }}
                color="text-brand-medium"
                as="span"
              >
                {' '}
                {`Show ${!showMore ? 'More' : 'Less'}`}
              </Text>
              <Text
                display={{ dp: 'none', ml: 'inline' }}
                color="text-brand-medium"
                as="span"
              >
                {' '}
                {`Show ${!showMore ? 'More' : 'Less'}`}
              </Text>
            </Box>
          </Box>
        </Skeleton>
        <Box display={{ dp: 'none', ml: 'block' }}>
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
