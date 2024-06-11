import { FC, useState } from 'react';
import { Box, Button, IconWrapper, Text } from 'blocks';
import RecommendedChatLists from 'config/RecommendedChatsList';
import { ChatPreview } from '@pushprotocol/uiweb';
import { css } from 'styled-components';
import { channelListTypeValues } from '../Dashboard.types';
export type TrendingRecommendedProps = {};

const TrendingRecommended: FC<TrendingRecommendedProps> = () => {
  const [selectedListType, setSelectedListType] = useState<(typeof channelListTypeValues)[number]>('trending channels');
  return (
    <Box
      backgroundColor="white"
      borderRadius="var(--r6)"
      padding="s6"
      display="flex"
      // flexDirection="column"
      justifyContent="space-between"
    >
      <Box
        display="flex"
        width="50%"
      >
        <Box
          backgroundColor="gray-100"
          cursor="pointer"
          display="flex"
          css={css`
            padding: 3px;
          `}
          height="fit-content"
          borderRadius="var(--r4)"
        >
          {channelListTypeValues.map((listType) => (
            <Box
              padding="s3"
              borderRadius="var(--r4)"
              backgroundColor={selectedListType === listType ? 'white' : 'transparent'}
              onClick={() => setSelectedListType(listType)}
            >
              <Text
                color="gray-1000"
                variant="h5-semibold"
                transform="capitalize"
              >
                {listType}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        width="50%"
      >
        <Text
          color="gray-1000"
          variant="h4-bold"
        >
          Recommended Chats
        </Text>
        <Box
          display="flex"
          flexDirection="column"
          borderRadius="var(--r6)"
          border="1px solid #E5E5E5"
          padding="s4"
        >
          {RecommendedChatLists.map((item, index) => {
            return (
              <Box
                display="flex"
                width="100%"
              >
                {/* change to different component */}
                <ChatPreview
                  key={index}
                  chatPreviewPayload={item.payload}
                  // selected={item.payload.chatId === chatId ? true : false}
                  // setSelected={(chatId, chatParticipant) => {
                  //   const chatParticipantRemapped = getChatParticipant(chatParticipant);
                  //   setChatId(chatId);
                  //   onChatSelected(chatId, chatParticipantRemapped);
                  // }}
                />
              </Box>
            );
          })}
        </Box>
        <Box
          display="flex"
          borderRadius="var(--r6)"
          border="1px solid #E5E5E5"
          padding="s4"
          alignItems="center"
          justifyContent="space-between"
          css={css`
            background: radial-gradient(174.95% 108.75% at 64.27% 0%, #f2befb 0%, #ffd7c0 100%);
          `}
        >
          <Box display="flex">
            <Box
              width="42px"
              height="39px"
            ></Box>
            <Text variant="h5-semibold">Receive Instant Notifications in Metamask with Push Snap.</Text>
          </Box>
          <Button
            variant="tertiary"
            size="small"
          >
            Get Push Snap
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export { TrendingRecommended };

//gap
//direction
//bg
//icon
