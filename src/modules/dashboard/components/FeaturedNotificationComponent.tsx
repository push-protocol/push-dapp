// React + Web3 Essentials
import { FC, useEffect } from 'react';

// External Packages
import { useDispatch, useSelector } from 'react-redux';
import { updateBulkSubscriptions, updateBulkUserSettings } from 'redux/slices/channelSlice';

// Internal Components
import { useAccount } from 'hooks';
import { useSmoothHorizontalScroll } from 'common';
import { useBlocksTheme } from 'blocks/Blocks.hooks';
import FeaturedChannelListItem from './FeaturedChannelListItem';
import PrevIconSlider from 'blocks/icons/components/PrevIconSlider';
import NextIconSlider from 'blocks/icons/components/NextIconSlider';
import { Box, HoverableSVG, Text, Link } from 'blocks';

// Internal Configs
import { FeaturedNotificationChannelsList } from '../configs';
import { appConfig } from 'config';

export type FeaturedNotificationComponentProps = {};

const itemsPerPage = 3;

const FeaturedNotificationComponent: FC<FeaturedNotificationComponentProps> = () => {
  const { mode } = useBlocksTheme();
  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });
  const { account } = useAccount();
  const dispatch = useDispatch();

  const itemsPerPage = 3;

  const FeaturedChannelsList = FeaturedNotificationChannelsList[appConfig.appEnv];

  const { currentIndex, handleNext, handlePrevious, listRef } = useSmoothHorizontalScroll({
    items: FeaturedChannelsList,
    itemsPerPage,
    itemGap: 24, // Gap provided in between the list items
  });

  const handleClick: VoidFunction = () => {
    handleNext();
  };

  useEffect(() => {
    if (!account || !userPushSDKInstance) return;
    (async function () {
      const subscriptionsArr: {
        channel: string;
        user_settings: string | null;
      }[] = await userPushSDKInstance.notification.subscriptions();
      const subscriptionsMapping: { [channel: string]: boolean } = {};
      const userSettings: { [channel: string]: { [key: string]: any } | null } = {};

      subscriptionsArr.forEach(({ channel, user_settings }) => {
        subscriptionsMapping[channel] = true;
        userSettings[channel] = user_settings ? JSON.parse(user_settings) : null;
      });

      dispatch(updateBulkSubscriptions(subscriptionsMapping));
      dispatch(updateBulkUserSettings(userSettings));
    })();
  }, [account, userPushSDKInstance]);

  return (
    <Box
      borderRadius="24px"
      padding={{ ml: 's6 s4', initial: 's6' }}
      display="flex"
      flexDirection="column"
      backgroundColor={{ light: 'dark-white', dark: 'gray-900' }}
      gap={{ ml: 's4', initial: 's2' }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection={{ tb: 'column' }}
        gap={{ tb: 's3' }}
      >
        <Text
          variant="h4-bold"
          color={{ light: 'black', dark: 'white' }}
        >
          Featured Notification Channels
        </Text>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="s4"
        >
          <Link
            to="/channels"
            textProps={{
              variant: 'h5-semibold',
              color: { light: 'black', dark: 'white' },
            }}
          >
            View All
          </Link>

          <Box
            display="flex"
            flexDirection="row"
          >
            <HoverableSVG
              onClick={handlePrevious}
              defaultColor={mode === 'dark' ? 'gray-400' : 'gray-900'}
              disabled={currentIndex === 0}
              icon={<PrevIconSlider size={24} />}
            ></HoverableSVG>
            <HoverableSVG
              onClick={handleClick}
              defaultColor={mode === 'dark' ? 'gray-400' : 'gray-900'}
              disabled={currentIndex + itemsPerPage >= FeaturedChannelsList.length}
              icon={<NextIconSlider size={24} />}
            ></HoverableSVG>
          </Box>
        </Box>
      </Box>

      <Box
        ref={listRef}
        display="flex"
        flexDirection={{ initial: 'row', tb: 'column' }}
        gap="s6"
        overflow="scroll"
        width={{ initial: 'calc(100vw - 346px)' }}
      >
        {FeaturedChannelsList.map((channel) => {
          return <FeaturedChannelListItem channel={channel} />;
        })}
      </Box>
    </Box>
  );
};

export { FeaturedNotificationComponent };
