// React and other libraries
import { FC, useState } from 'react';

// Components
import { Box, Button, NotificationMobile, Skeleton, Text, TickCircleFilled } from 'blocks';
import { useBlocksTheme } from 'blocks/Blocks.hooks';
import { css } from 'styled-components';
import { useGetChannelDetails } from 'queries';
import UnsubscribeChannelDropdown from 'common/components/UnsubscribeChannelDropdown';
import { UserSetting } from '@pushprotocol/restapi';
import TickDecoratedCircleFilled from 'blocks/icons/components/TickDecoratedCircleFilled';
import Ethereum from 'blocks/illustrations/components/Ethereum';
import { LOGO_ALIAS_CHAIN } from '../configs/ChainDetails';

export type ChannelItemProps = {
  channelAddress: string;
  userSetting?: UserSetting[];
  setSubscribed?: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading?: boolean;
  isPending?: boolean;
};
const ChannelItem: FC<ChannelItemProps> = ({
  channelAddress,
  userSetting = undefined,
  setSubscribed,
  isLoading,
  isPending,
}) => {
  const { mode } = useBlocksTheme();
  const { data: channelDetails } = useGetChannelDetails(channelAddress);
  console.log("Channel Details >>>", channelDetails);
  const [subscriberCount, setSubscriberCount] = useState(channelDetails?.subscriber_count || 0);

  const AliasChain = channelDetails?.alias_blockchain_id && LOGO_ALIAS_CHAIN[+channelDetails.alias_blockchain_id];


  console.debug(userSetting, 'user');
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      margin="s2 s0"
    >
      <Box
        display="flex"
        gap="s3"
      >
        <Skeleton isLoading={isLoading || isPending}>
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
        </Skeleton>
        <Box
          display="flex"
          flexDirection="column"
        >
          <Skeleton isLoading={isLoading || isPending}>
            <Box
              display="flex"
              gap="s1"
              alignItems="center"
            >
              <Text
                variant="h5-semibold"
                color={{ light: 'gray-1000', dark: 'white' }}
              >
                {channelDetails?.name}
              </Text>
              {!!channelDetails?.verified_status && (
                <TickDecoratedCircleFilled color={{ light: 'gray-300', dark: 'gray-700' }} />
              )}
              <Ethereum
                width={16}
                height={16}
              />
              {channelDetails && channelDetails?.alias_address != null &&
                channelDetails?.alias_address != 'NULL' && AliasChain && <AliasChain width={16} height={16} />}

            </Box>
          </Skeleton>
          <Skeleton isLoading={isLoading || isPending}>
            <Text
              variant="c-regular"
              color={{ light: 'gray-600', dark: 'gray-500' }}
            >
              {channelDetails?.subscriber_count} subscribers
            </Text>
          </Skeleton>
        </Box>
      </Box>

      {channelDetails && setSubscribed && (
        <UnsubscribeChannelDropdown
          channelDetail={channelDetails}
          setSubscribed={setSubscribed}
          setSubscriberCount={setSubscriberCount}
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
  );
};

export { ChannelItem };
