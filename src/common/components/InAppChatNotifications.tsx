import { Box, Cross, Link, Pin, Text, notification, Image, Ellipse, FillCircle, ChatFilled, EditProfile } from 'blocks';
import { convertTimeStamp } from 'common/Common.utils';
import { AppContext } from 'contexts/AppContext';
import { shortenText } from 'helpers/UtilityHelper';
import { caip10ToWallet } from 'helpers/w2w';
import { useResolveWeb3Name } from 'hooks/useResolveWeb3Name';
import { useGetUserProfileDetails } from 'queries';

import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';
import { AppContextType } from 'types/context';

type InAppChatNotificationsProps = {
  chatDetails: any;
};

//setSelectedChatId
//emoji
const InAppChatNotifications: FC<InAppChatNotificationsProps> = ({ chatDetails }) => {
  console.debug(chatDetails, 'chatDetails');
  const { web3NameList }: AppContextType = useContext(AppContext)!;
  const fromAddress = caip10ToWallet(chatDetails?.from);
  const { data: userProfileDetails } = useGetUserProfileDetails(fromAddress);
  const navigate = useNavigate();
  console.debug(chatDetails?.from, userProfileDetails, 'userProfile');
  useResolveWeb3Name(fromAddress);
  const web3Name = web3NameList[fromAddress];
  const displayName = web3Name ? web3Name : shortenText(fromAddress, 6);

  const getContentText = () => {
    if (chatDetails.message.type === 'Text') return chatDetails.message.content;
    if (chatDetails.message.type === 'Image') return 'Image';
    if (chatDetails.message.type === 'File') return 'File';
    if (chatDetails.message.type === 'GIF') return 'GIF';
  };
  const getContentImage = () => {
    if (chatDetails.message.type === 'Image' || chatDetails.message.type === 'GIF')
      return (
        <Image
          size={16}
          color="icon-tertiary"
        />
      );
    if (chatDetails.message.type === 'File')
      return (
        <Pin
          size={16}
          color="icon-tertiary"
        />
      );
  };

  return (
    <Box
      width="397px"
      display="flex"
    >
      {chatDetails && userProfileDetails && (
        <Box
          padding="spacing-sm"
          display="flex"
          borderRadius="radius-sm"
          flexDirection="column"
          gap="spacing-xxs"
          border="border-sm solid stroke-tertiary"
          backgroundColor="surface-primary"
          width="inherit"
          cursor="pointer"
          onClick={() => navigate(`/chat/chatid:${chatDetails.chatId}`)}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              display="flex"
              gap="spacing-xxs"
              alignItems="center"
            >
              <Box
                width="24px"
                height="24px"
                overflow="hidden"
                borderRadius="radius-round"
                css={css`
                  flex-shrink: 0;
                `}
              >
                {chatDetails.event === 'chat.request' ? (
                  <ChatFilled
                    size={24}
                    color="icon-brand-medium"
                  />
                ) : (
                  <img
                    src={userProfileDetails?.picture || ''}
                    alt={userProfileDetails?.name || ''}
                  />
                )}
              </Box>
              <Text
                color="text-primary"
                variant="bes-semibold"
              >
                {chatDetails.event === 'chat.request' ? 'Push Chat' : displayName}
              </Text>
              <FillCircle
                color="icon-tertiary"
                size={4}
              />
              <Text
                color="text-tertiary"
                variant="c-semibold"
              >
                {convertTimeStamp(chatDetails?.timestamp)}
              </Text>
            </Box>
            <Box
              onClick={() => notification.hide()}
              cursor="pointer"
            >
              <Cross
                color="icon-primary"
                size={16}
              />
            </Box>
          </Box>
          {chatDetails.event === 'chat.request' ? (
            <Box
              display="flex"
              gap="spacing-xxxs"
              alignItems="center"
            >
              <EditProfile
                size={16}
                color="icon-tertiary"
              />
              <Box>
                <Text
                  color="text-primary"
                  variant="bes-bold"
                  as="span"
                >
                  {displayName}{' '}
                </Text>
                <Text
                  color="text-secondary"
                  variant="bes-regular"
                  as="span"
                >
                  has sent you a chat request
                </Text>
              </Box>
            </Box>
          ) : (
            <Box
              display="flex"
              flexDirection="column"
            >
              <Box
                display="flex"
                gap="spacing-xxxs"
                alignItems="center"
              >
                {chatDetails.message.type !== 'Text' ? <Box>{getContentImage()}</Box> : null}
                <Text
                  color="text-secondary"
                  variant="bes-regular"
                  numberOfLines={2}
                >
                  {getContentText()}
                </Text>
              </Box>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export { InAppChatNotifications };
