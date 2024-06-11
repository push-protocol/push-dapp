import { Box, Button, InboxBell, Text } from 'blocks';
import { FeaturedNotificationChannels } from '../configs/DashboardFeaturedChannels.config';
import { useSelector } from 'react-redux';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';
import { useAccount } from 'hooks';


const ScrollAnimationComponent = () => {

  const { chainId } = useAccount();
  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });

  const handleOptIn = async (channelAddress: string) => {

    console.log("Channel Address: ", channelAddress, userPushSDKInstance);

    try {
      await userPushSDKInstance.notification.subscribe(convertAddressToAddrCaip(channelAddress, chainId))

    } catch (error) {
      console.log("Error", error);
    }


  }

  return (
    <Box borderRadius="24px" padding="s6" display="flex" flexDirection="column" backgroundColor="dark-white" gap='s2'>
      <Box display="flex" justifyContent="space-between">
        <Text variant="h4-bold">Featured Notification Channels</Text>
        <Box>
          <Text variant="h5-semibold">View All</Text>
        </Box>
      </Box>

      <Box display="flex" flexDirection="row" gap="s6">

        {FeaturedNotificationChannels.map((channel) => {
          return (
            <Box
              display="flex"
              flexDirection="column"
              border="1px solid var(--gray-200)"
              padding="s6"
              borderRadius="24px"
              gap="s3"
            >
              <Box onClick={() => handleOptIn(channel.channelAddress)} display="flex" justifyContent="space-between">
                <InboxBell color="primaryPink" size={52} />
                <Button size="small" variant="tertiary" leadingIcon={<InboxBell size={20} />}>
                  Subscribe
                </Button>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap="s2"
              >
                <Box>
                  <Text variant="h5-semibold" color="gray-1000">
                    {channel.channelName}
                  </Text>
                  <Text variant="c-regular" color="gray-600">
                    {channel.subscribersCount} subscribers
                  </Text>
                </Box>
                <Box>
                  <Text variant="bs-regular" color="gray-600">
                    {channel.channelDescription}
                  </Text>
                </Box>
              </Box>
            </Box>

          )
        })}




      </Box>


    </Box>
  );
};

export default ScrollAnimationComponent;