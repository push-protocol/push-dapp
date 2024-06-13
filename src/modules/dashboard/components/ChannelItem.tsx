// React and other libraries
import { FC } from 'react';

import { css } from 'styled-components';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { UserSetting } from '@pushprotocol/restapi';

//Hooks
import { useBlocksTheme } from 'blocks/Blocks.hooks';

// Components
import { Box, Button, NotificationMobile, Skeleton, Text } from 'blocks';
import UnsubscribeChannelDropdown from 'common/components/UnsubscribeChannelDropdown';
import TickDecoratedCircleFilled from 'blocks/icons/components/TickDecoratedCircleFilled';
import Ethereum from 'blocks/illustrations/components/Ethereum';

//Queries
import { UserSubscriptionsResponse, useGetChannelDetails } from 'queries';
import { Link } from 'react-router-dom';

export type ChannelItemProps = {
  channelAddress: string;
  userSetting?: UserSetting[];
  isListLoading?: boolean;
  refetchUserSubscriptions?: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<UserSubscriptionsResponse, Error>>;
};
const ChannelItem: FC<ChannelItemProps> = ({
  channelAddress,
  userSetting = undefined,
  refetchUserSubscriptions,
  isListLoading,
}) => {
  const { mode } = useBlocksTheme();
  const { data: channelDetails, isLoading: isChannelLoading } = useGetChannelDetails(channelAddress);

  return (
    <Skeleton isLoading={isChannelLoading || isListLoading}>
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
              src={channelDetails?.icon}
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
                style={{ textDecoration: 'none' }}
              >
                <Text
                  variant="h5-semibold"
                  color={{ light: 'gray-1000', dark: 'white' }}
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
              {/* {
                channelDetails?.alias_blockchain_id && 
                
              } */}
            </Box>
            <Text
              variant="c-regular"
              color={{ light: 'gray-600', dark: 'gray-500' }}
            >
              {channelDetails?.subscriber_count} subscribers
            </Text>
          </Box>
        </Box>

        {channelDetails && refetchUserSubscriptions && (
          <UnsubscribeChannelDropdown
            channelDetail={channelDetails}
            onSuccess={refetchUserSubscriptions}
            userSetting={userSetting}
          >
            <Button
              size="small"
              iconOnly={<NotificationMobile />}
              variant={'tertiary'}
              css={css`
                background-color: ${mode === 'dark' ? '#484d58' : ''};
              `}
            />
          </UnsubscribeChannelDropdown>
        )}
      </Box>
    </Skeleton>
  );
};

export { ChannelItem };
