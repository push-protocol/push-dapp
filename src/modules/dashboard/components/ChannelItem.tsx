// React and other libraries
import { FC, useState } from 'react';

// Components
import { Box, Button, InboxBell, Skeleton, Text } from 'blocks';
import { useBlocksTheme } from 'blocks/Blocks.hooks';
import { css } from 'styled-components';
import { useGetChannelDetails } from 'queries';
import UnsubscribeChannelDropdown from 'common/components/UnsubscribeChannelDropdown';
import { UserSetting } from '@pushprotocol/restapi';

export type ChannelItemProps = {
  channelAddress: string;
  userSetting?: UserSetting[];
  isSubscribed?: boolean;
  setSubscribed?: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading?: boolean;
  isPending?: boolean;
};
const ChannelItem: FC<ChannelItemProps> = ({
  channelAddress,
  userSetting = undefined,
  isSubscribed = false,
  setSubscribed,
  isLoading,
  isPending,
}) => {
  const { mode } = useBlocksTheme();
  const { data: channelDetails } = useGetChannelDetails(channelAddress);
  const [subscriberCount, setSubscriberCount] = useState(channelDetails?.subscriber_count || 0);
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
            <Text
              variant="h5-semibold"
              color={{ light: 'gray-1000', dark: 'white' }}
            >
              {channelDetails?.name}
            </Text>
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
            iconOnly={<InboxBell />}
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
