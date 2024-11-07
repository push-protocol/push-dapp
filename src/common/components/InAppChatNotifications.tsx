import { FC, useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';

import { Box, Cross, Pin, Text, Image, FillCircle, ChatFilled, EditProfile } from 'blocks';

import { AppContextType } from 'types/context';
import { AppContext } from 'contexts/AppContext';

import { convertTimeStamp } from 'common/Common.utils';
import { shortenText } from 'helpers/UtilityHelper';
import { caip10ToWallet } from 'helpers/w2w';

import { useResolveWeb3Name } from 'hooks/useResolveWeb3Name';
import { useGetGroupInfo, useGetUserProfileDetails } from 'queries';

type InAppChatNotificationsProps = {
  chatDetails: Array<any>;
  onClose: () => void;
};

const getContentText = (chatDetail: any) => {
  if (chatDetail.message.type === 'Text') return chatDetail.message.content;
  if (chatDetail.message.type === 'Image') return 'Image';
  if (chatDetail.message.type === 'File') return 'File';
  if (chatDetail.message.type === 'MediaEmbed' || chatDetail.message.type === 'GIF') return 'GIF';
};
const getContentImage = (chatDetail: any) => {
  if (
    chatDetail.message.type === 'Image' ||
    chatDetail.message.type === 'MediaEmbed' ||
    chatDetail.message.type === 'GIF'
  )
    return (
      <Image
        size={16}
        color="icon-tertiary"
      />
    );
  if (chatDetail.message.type === 'File')
    return (
      <Pin
        size={16}
        color="icon-tertiary"
      />
    );
};

const InAppChatNotifications: FC<InAppChatNotificationsProps> = ({ chatDetails, onClose }) => {
  const { web3NameList }: AppContextType = useContext(AppContext)!;
  const fromAddress = caip10ToWallet(chatDetails[0]?.from);
  const { data: userProfileDetails } = useGetUserProfileDetails(fromAddress, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    refetchInterval: 3600000, // 1 hour,
  });
  const { data: groupInfo } = useGetGroupInfo(chatDetails[0]?.meta?.group ? chatDetails[0].chatId : '', {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    refetchInterval: 3600000, // 1 hour,
  });

  const navigate = useNavigate();

  useResolveWeb3Name(fromAddress);
  const web3Name = web3NameList[fromAddress];
  const sender = web3Name ? web3Name : shortenText(fromAddress, 6);
  const displayName = chatDetails[0]?.meta?.group
    ? groupInfo?.groupName || shortenText(chatDetails[0]?.chatId, 6)
    : web3Name || shortenText(fromAddress, 6);

  const latestTimestamp = convertTimeStamp(chatDetails[chatDetails.length - 1]?.timestamp);

  //optimise it and fix the close button z-index
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
          onClick={() => navigate(`/chat/chatid:${chatDetails[0].chatId}`)}
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
                {chatDetails[0].event === 'chat.request' ? (
                  <ChatFilled
                    size={24}
                    color="icon-brand-medium"
                  />
                ) : (
                  <img
                    width="100%"
                    height="100%"
                    src={userProfileDetails?.picture || groupInfo?.groupImage || ''}
                    alt={displayName}
                  />
                )}
              </Box>
              <Text
                color="text-primary"
                variant="bes-semibold"
              >
                {chatDetails[0].event === 'chat.request' ? 'Push Chat' : displayName}
              </Text>
              <FillCircle
                color="icon-tertiary"
                size={4}
              />
              <Text
                color="text-tertiary"
                variant="c-semibold"
              >
                {latestTimestamp}
              </Text>
            </Box>
            <Box
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              cursor="pointer"
            >
              <Cross
                color="icon-primary"
                size={16}
              />
            </Box>
          </Box>
          {chatDetails.map((chatDetail: any) =>
            chatDetail.event === 'chat.request' ? (
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
                  {chatDetails[0]?.meta?.group && (
                    <Text
                      color="text-primary"
                      variant="bes-bold"
                      as="span"
                    >
                      {sender}{' '}
                    </Text>
                  )}
                  {chatDetail.message.type !== 'Text' ? <Box>{getContentImage(chatDetail)}</Box> : null}
                  <Text
                    color="text-secondary"
                    variant="bes-regular"
                    numberOfLines={2}
                  >
                    {getContentText(chatDetail)}
                  </Text>
                </Box>
              </Box>
            )
          )}
        </Box>
      )}
    </Box>
  );
};

export { InAppChatNotifications };
