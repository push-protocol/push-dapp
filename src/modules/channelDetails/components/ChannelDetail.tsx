import { FC, useState } from 'react';

import { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';

// import { ChannelTutorialContent } from './ChannelTutorialContent';
import { ChannelDetailSubscribe } from './ChannelDetailSubscribe';
import { RecentNotifications } from './RecentNotifications';
import { Box, Text, Back, Tag, Skeleton, Tooltip, TickDecoratedCircleFilled } from 'blocks';
import {
  CopyButton,
  LOGO_ALIAS_CHAIN,
  VerifiedChannelTooltipContent,
  channelCategoriesMap,
  formatSubscriberCount,
} from 'common';

import { ChannelDetails } from 'queries';

import { shortenText } from 'helpers/UtilityHelper';

import APP_PATHS from 'config/AppPaths';
import { appConfig } from 'config';

// import { getChannelTutorialDetails } from '../ChannelDetails.utils';

export type ChannelDetailProps = { channel: ChannelDetails; isLoading: boolean };
const ChannelDetail: FC<ChannelDetailProps> = ({ channel, isLoading }) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const navigate = useNavigate();
  const isInfoMore = (channel?.info || '').length > 250;
  const channelInfo = isInfoMore
    ? !showMore
      ? (channel?.info || '').substring(0, 250)
      : channel?.info || ''
    : channel?.info || '';

  let verifiedAliasChainIds = [
    appConfig.coreContractChain,
    ...(channel?.aliases?.filter((item) => item.is_alias_verified).map((item) => parseInt(item.alias_blockchain_id)) ||
      []),
  ];

  // const tutotrialDetails = getChannelTutorialDetails(channel?.channel);

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height="100%"
      gap="spacing-xl"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-sm"
        width="-webkit-fill-available"
        padding={{ initial: 'spacing-none spacing-md spacing-none spacing-none', ml: 'spacing-sm' }}
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
            <Back
              size={24}
              color="icon-primary"
            />
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
          >
            <Box
              display="flex"
              gap={{ initial: 'spacing-sm', ml: 'spacing-xs' }}
              alignItems={{ initial: 'center', ml: 'flex-start' }}
            >
              <Skeleton isLoading={isLoading}>
                <Box
                  width="90px"
                  height="90px"
                  borderRadius="radius-md"
                  overflow="hidden"
                  border="border-sm solid stroke-secondary"
                  display={{ initial: 'flex', ml: 'none' }}
                  css={css`
                    flex-shrink: 0;
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
                  border="border-sm solid stroke-secondary"
                  display={{ initial: 'none', ml: 'flex' }}
                  overflow="hidden"
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
                      gap="spacing-xxxs"
                    >
                      <Text
                        color="text-primary"
                        variant="h4-semibold"
                      >
                        {channel?.name || ''}
                      </Text>
                      {!!channel?.verified_status && (
                        <Tooltip overlay={<VerifiedChannelTooltipContent />}>
                          <Box
                            cursor="pointer"
                            display="flex"
                          >
                            <TickDecoratedCircleFilled
                              color="icon-tertiary"
                              size={18}
                            />
                          </Box>
                        </Tooltip>
                      )}
                      {verifiedAliasChainIds.length > 0 && (
                        <Box
                          display="flex"
                          alignItems="center"
                          margin="spacing-none spacing-none spacing-none spacing-xxxs"
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

                      <CopyButton
                        tooltipTitle="Copy Address"
                        content={channel?.channel || ''}
                      />
                    </Box>
                  </Box>
                </Skeleton>
                <Skeleton isLoading={isLoading}>
                  <Box
                    display="flex"
                    gap="spacing-xs"
                    css={css`
                      flex-wrap: wrap;
                    `}
                    alignItems="center"
                  >
                    <Text
                      color="text-tertiary-inverse"
                      variant="c-regular"
                    >
                      {formatSubscriberCount(channel?.subscriber_count)} subscribers
                    </Text>

                    {/* {tutotrialDetails && <ChannelTutorialContent tutotrialDetails={tutotrialDetails} />} */}
                    {channel?.tags?.[0] && (
                      <Tag
                        label={channel.tags[0]}
                        variant="info"
                      />
                    )}
                    {!channel?.tags?.[0] && channelCategoriesMap?.[channel?.channel] && (
                      <Tooltip title="Suggested by Push">
                        <Box cursor="pointer">
                          <Tag label={channelCategoriesMap[channel.channel]} />
                        </Box>
                      </Tooltip>
                    )}
                  </Box>
                </Skeleton>
              </Box>
            </Box>
            <Box display={{ initial: 'inline', ml: 'none' }}>
              <ChannelDetailSubscribe channel={channel} />
            </Box>
          </Box>
        </Box>

        <Skeleton isLoading={isLoading}>
          <Box>
            <Text
              display={{ initial: 'inline', ml: 'none' }}
              variant="bs-regular"
              color="text-tertiary"
              as="span"
            >
              {channelInfo}
            </Text>
            <Text
              display={{ initial: 'none', ml: 'inline' }}
              variant="bs-regular"
              color="text-tertiary"
              as="span"
            >
              {channelInfo}
            </Text>
            {isInfoMore && (
              <Box
                as="span"
                cursor="pointer"
                onClick={() => setShowMore(!showMore)}
              >
                <Text
                  display={{ initial: 'inline', ml: 'none' }}
                  color="text-brand-medium"
                  as="span"
                >
                  {' '}
                  {`Show ${!showMore ? 'More' : 'Less'}`}
                </Text>
                <Text
                  display={{ initial: 'none', ml: 'inline' }}
                  color="text-brand-medium"
                  as="span"
                >
                  {' '}
                  {`Show ${!showMore ? 'More' : 'Less'}`}
                </Text>
              </Box>
            )}
          </Box>
        </Skeleton>
        <Box display={{ initial: 'none', ml: 'block' }}>
          <ChannelDetailSubscribe channel={channel} />
        </Box>
      </Box>

      <RecentNotifications channelAddress={channel?.channel} />
    </Box>
  );
};

export { ChannelDetail };
