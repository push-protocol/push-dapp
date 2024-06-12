import { Box, Button, InboxBell, Text } from 'blocks';
import { FeaturedNotificationChannels } from '../configs/DashboardFeaturedChannels.config';
import { useSelector } from 'react-redux';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';
import { useAccount } from 'hooks';
import { useSmoothCarousel } from 'common';
import styled from 'styled-components';


const ScrollAnimationComponent = () => {

  const { chainId } = useAccount();
  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });

  const itemsPerPage = 3;
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
    { id: 6, name: "Item 6" },
  ];

  const { currentIndex, handleNext, handlePrevious, listRef, visibleItems } =
    useSmoothCarousel({
      items: FeaturedNotificationChannels,
      itemsPerPage,
    });

  // const handleOptIn = async (channelAddress: string) => {

  //   console.log("Channel Address: ", channelAddress, userPushSDKInstance);

  //   try {
  //     await userPushSDKInstance.notification.subscribe(convertAddressToAddrCaip(channelAddress, chainId))

  //   } catch (error) {
  //     console.log("Error", error);
  //   }


  // }


  const formatSubscriberCount = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    } else {
      return count;
    }
  }


  return (
    <Box borderRadius="24px" padding="s6" display="flex" flexDirection="column" backgroundColor="dark-white" gap='s2'>
      <Box display="flex" justifyContent="space-between">
        <Text variant="h4-bold">Featured Notification Channels</Text>
        <Box display='flex' flexDirection='row'>

          <Button onClick={handlePrevious} variant="tertiary" size='extraSmall' disabled={currentIndex === 0}>Prev</Button>
          <Text variant="h5-semibold">View All</Text>
          <Button onClick={handleNext} variant="tertiary" size='extraSmall'
            disabled={currentIndex + itemsPerPage >= items.length}
          >
            Next
          </Button>
        </Box>
      </Box>

      {/* <Box display="flex" flexDirection="row" gap="s6"> */}

      {/* {FeaturedNotificationChannels.map((channel) => {
        return (
          <Box
            display="flex"
            flexDirection="column"
            border="1px solid var(--gray-200)"
            padding="s6"
            borderRadius="24px"
            gap="s3"
          >
            <Box display="flex" justifyContent="space-between">
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
      })} */}

      <Box display="flex" flexDirection="row" gap="s6"
        ref={listRef}
      >
        {/* {visibleItems.map((item) => (
              <ListItem key={item.id} >
                {item.name}
              </ListItem>
            ))} */}

        {visibleItems.map((channel) => {
          return (
            <Box
              display="flex"
              flexDirection="column"
              border="1px solid var(--gray-200)"
              padding="s6"
              borderRadius="24px"
              gap="s3"
              minWidth='100px'
              maxWidth='290px'
            >
              <Box display="flex" justifyContent="space-between">
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
                    {formatSubscriberCount(channel.subscribersCount)} subscribers

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

      {/* </Box> */}


    </Box>
  );
};

export default ScrollAnimationComponent;

const Container = styled.div`
  display: flex;
  align-items: center;
`

const ListContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  width: 100%; /* Adjust width as needed */
  scrollbar-width: none; /* For Firefox */

  &::-webkit-scrollbar {
  display: none; /* For Chrome, Safari, and Opera */
  }

  will-change: transform;
  transition: transform 0.5s ease-in-out; /* Add transition effect */

`


const ListItem = styled.div`
  min-width: 100px; /* Adjust width as needed */
  margin: 5px;
  padding: 10px;
  background-color: lightgray;
  text-align: center;
`