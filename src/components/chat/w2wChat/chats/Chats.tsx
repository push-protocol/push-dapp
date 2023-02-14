// React + Web3 Essentials
import React, { useContext, useState } from 'react';

// External Packages
import styled from 'styled-components';
import { TwitterTweetEmbed } from 'react-twitter-embed';

// Internal Components
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import tickIcon from '../../../../assets/chat/tick.svg';
import { MessageIPFS, TwitterFeedReturnType } from 'types/chat';
import Files, { FileMessageContent } from '../TypeBar/Files/Files';
import Modal from '../Modal/Modal';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { checkTwitterUrl } from 'helpers/w2w/twitter';
import { useResolveEns } from 'hooks/useResolveEns';
import { caip10ToWallet } from 'helpers/w2w';
import { shortenText } from 'helpers/UtilityHelper';
import Profile from 'assets/chat/group-chat/profile.svg';
import { AppContext } from 'types/chat';
import { Context } from 'modules/chat/ChatModule';

// Internal Configs
import { appConfig } from 'config';
import GLOBALS, { device } from 'config/Globals';

interface ChatProps {
  msg: MessageIPFS;
  caip10: string;
  messageBeingSent: boolean;
  ApproveIntent?: Function;
  isGroup?: boolean;
}

// Constants
const infura_URL = appConfig.infuraApiUrl;

const getProfilePicture = (currentChat, address) => {
  const senderProfile = currentChat?.groupInformation?.groupMembers?.filter((chat) => chat.wallets == address);
  return senderProfile[0]?.image;
};

export default function Chats({ msg, caip10, messageBeingSent, ApproveIntent, isGroup }: ChatProps) {
  const { currentChat }: AppContext = useContext<AppContext>(Context);
  const [showImageModal, setShowImageModal] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>('');
  const time: Date = new Date(msg?.timestamp);
  const time1: string = time.toLocaleTimeString('en-US');
  const date: string = time1.slice(0, -6) + time1.slice(-2);
  const { tweetId, messageType }: TwitterFeedReturnType = checkTwitterUrl({ message: msg?.messageContent });
  const walletAddress = shortenText(caip10ToWallet(msg.fromCAIP10).toLowerCase(), 6);
  const ensName = useResolveEns(msg.fromCAIP10);
  const profilePicture = isGroup ? getProfilePicture(currentChat, msg.fromCAIP10) : null;

  return (
    <>
      {messageType === 'TwitterFeedLink' ? (
        <>
          {msg.fromCAIP10 === caip10 ? (
            <MessageWrapper align="row-reverse">
              <SenderMessage
                color="transparent"
                padding="0px"
              >
                <TwitterTweetEmbed
                  placeholder={
                    <LoaderSpinner
                      type={LOADER_TYPE.SEAMLESS}
                      spinnerSize={20}
                    />
                  }
                  tweetId={tweetId}
                />
              </SenderMessage>
            </MessageWrapper>
          ) : (
            <MessageWrapper align="row">
              <ItemHV2
                position="relative"
                left={isGroup ? '34px' : '0px'}
              >
                {isGroup && (
                  <ItemVV2
                    height="100%"
                    maxWidth="36px"
                    justifyContent="flex-start"
                    borderRadius="100%"
                  >
                    <ItemVV2 height="36px" width="36px" borderRadius="100%" overflow="hidden">
                    <ImageV2
                      width="36px"
                      height="36px"
                      src={profilePicture}
                      alt="Sender Profile"
                    />
                    </ItemVV2>
                  </ItemVV2>
                )}
                <ItemVV2 alignItems="flex-start">
                  {isGroup && (
                    <SpanV2
                      position="relative"
                      fontSize="15px"
                      fontWeight="500"
                      left="34px"
                      margin="0px 0px 7px 0px"
                    >
                      {ensName ? ensName : walletAddress}
                    </SpanV2>
                  )}
                  <ReceivedMessage
                    color="transparent"
                    padding="0px"
                    left={isGroup ? '8px' : '34px'}
                  >
                    <TwitterTweetEmbed
                      placeholder={
                        <LoaderSpinner
                          type={LOADER_TYPE.SEAMLESS}
                          spinnerSize={20}
                        />
                      }
                      tweetId={tweetId}
                    />
                  </ReceivedMessage>
                </ItemVV2>
              </ItemHV2>
            </MessageWrapper>
          )}
        </>
      ) : msg.messageType === 'Text' ? (
        <>
          {msg.fromCAIP10 === caip10 ? (
            <MessageWrapper align="row-reverse">
              <SenderMessage>
                {msg.messageContent.split('\n').map((str) => (
                  <TextMessage>{str}</TextMessage>
                ))}
                <TimeStamp>{date}</TimeStamp>
                {/* {messageBeingSent ? (
                  <p>✔️</p>
                ) : (
                  <p>✔️ ✔️</p>
                )} */}
              </SenderMessage>
            </MessageWrapper>
          ) : (
            <MessageWrapper align="row">
              <ItemHV2
                position="relative"
                left={isGroup ? '34px' : '0px'}
              >
                {isGroup && (
                  <ItemVV2
                    height="100%"
                    maxWidth="36px"
                    justifyContent="flex-start"
                  >
                    <ImageV2
                      width="36px"
                      height="36px"
                      src={profilePicture}
                      alt="Sender Profile"
                    />
                  </ItemVV2>
                )}
                <ItemVV2 alignItems="flex-start">
                  {isGroup && (
                    <SpanV2
                      position="relative"
                      fontSize="15px"
                      fontWeight="500"
                      left="8px"
                      margin="0px 0px 7px 0px"
                    >
                      {ensName ? ensName : walletAddress}
                    </SpanV2>
                  )}
                  <ReceivedMessage left={isGroup ? '8px' : '34px'}>
                    {msg.messageContent.split('\n').map((str) => (
                      <TextMessage>{str}</TextMessage>
                    ))}
                    <TimeStamp>{date}</TimeStamp>
                  </ReceivedMessage>
                </ItemVV2>
              </ItemHV2>
            </MessageWrapper>
          )}
        </>
      ) : msg.messageType === 'Intent' ? (
        <>
          <MessageWrapper align="row">
            <ItemHV2
              position="relative"
              left={isGroup ? '34px' : '0px'}
            >
              {isGroup && (
                <ItemVV2
                  height="100%"
                  maxWidth="36px"
                  justifyContent="flex-start"
                  borderRadius="100%"
                >
                  <ImageV2
                    width="36px"
                    height="36px"
                    src={profilePicture}
                    alt="Sender Profile"
                  />
                </ItemVV2>
              )}
              <ItemVV2 alignItems="flex-start">
                {isGroup && (
                  <SpanV2
                    position="relative"
                    fontSize="15px"
                    fontWeight="500"
                    left="34px"
                    margin="0px 0px 7px 0px"
                  >
                    {ensName ? ensName : walletAddress}
                  </SpanV2>
                )}
                <IntentMessage left={isGroup ? '8px' : '34px'}>
                  <MessageText>
                    {msg.messageContent.split('\n').map((str) => (
                      <p>{str}</p>
                    ))}
                  </MessageText>
                  {messageBeingSent ? (
                    <SpanV2 margin="-5px 0 0 0">
                      <LoaderSpinner
                        type={LOADER_TYPE.SEAMLESS}
                        spinnerSize={40}
                      />
                    </SpanV2>
                  ) : (
                    <ImageV2
                      src={tickIcon}
                      alt="tick"
                      width="39px"
                      height="39px"
                      cursor="pointer"
                      onClick={() => ApproveIntent()}
                      margin="-5px 0 0 0"
                    />
                  )}
                </IntentMessage>
              </ItemVV2>
            </ItemHV2>
          </MessageWrapper>
        </>
      ) : msg.messageType === 'Image' ? (
        <>
          {msg.fromCAIP10 === caip10 ? (
            <MessageWrapper
              height="138px"
              align="row-reverse"
            >
              <SenderMessage
                color="transparent"
                padding="0px"
              >
                <ImageMessage
                  src={(JSON.parse(msg.messageContent) as FileMessageContent).content}
                  onClick={() => {
                    setShowImageModal(true);
                    setImageUrl((JSON.parse(msg.messageContent) as FileMessageContent).content);
                  }}
                />
              </SenderMessage>
            </MessageWrapper>
          ) : (
            <MessageWrapper
              height="138px"
              align="row"
            >
              <ItemHV2
                position="relative"
                left={isGroup ? '34px' : '0px'}
              >
                {isGroup && (
                  <ItemVV2
                    height="100%"
                    maxWidth="36px"
                    justifyContent="flex-start"
                    borderRadius="100%"
                  >
                    <ImageV2
                      width="36px"
                      height="36px"
                      src={profilePicture}
                      alt="Sender Profile"
                    />
                  </ItemVV2>
                )}
                <ItemVV2 alignItems="flex-start">
                  {isGroup && (
                    <SpanV2
                      position="relative"
                      fontSize="15px"
                      fontWeight="500"
                      left="34px"
                      margin="0px 0px 7px 0px"
                    >
                      {ensName ? ensName : walletAddress}
                    </SpanV2>
                  )}
                  <ReceivedMessage
                    color="transparent"
                    padding="0px"
                    left={isGroup ? '8px' : '34px'}
                  >
                    <ImageMessage
                      src={(JSON.parse(msg.messageContent) as FileMessageContent).content}
                      onClick={() => {
                        setShowImageModal(true);
                        setImageUrl((JSON.parse(msg.messageContent) as FileMessageContent).content);
                      }}
                    />
                  </ReceivedMessage>
                </ItemVV2>
              </ItemHV2>
            </MessageWrapper>
          )}

          {showImageModal && (
            <Modal
              showImageModal={showImageModal}
              onClose={() => setShowImageModal(false)}
              src={imageUrl}
              time={msg.timestamp}
            />
          )}
        </>
      ) : msg.messageType === 'GIF' ? (
        <>
          {msg.fromCAIP10 === caip10 ? (
            <MessageWrapper
              height="170px"
              align="row-reverse"
            >
              <SenderMessage
                color="transparent"
                padding="0px"
              >
                <ImageMessage
                  src={msg.messageContent}
                  borderRadius={`${GLOBALS.ADJUSTMENTS.RADIUS.SMALL} 0 ${GLOBALS.ADJUSTMENTS.RADIUS.SMALL} ${GLOBALS.ADJUSTMENTS.RADIUS.SMALL}`}
                  onClick={() => {
                    setShowImageModal(true);
                    setImageUrl(msg.messageContent);
                  }}
                />
              </SenderMessage>
            </MessageWrapper>
          ) : (
            <MessageWrapper
              height="170px"
              align="row"
            >
              <ItemHV2
                position="relative"
                left={isGroup ? '34px' : '0px'}
              >
                {isGroup && (
                  <ItemVV2
                    height="100%"
                    maxWidth="36px"
                    justifyContent="flex-start"
                    borderRadius="100%"
                  >
                    <ImageV2
                      width="36px"
                      height="36px"
                      src={profilePicture}
                      alt="Sender Profile"
                    />
                  </ItemVV2>
                )}
                <ItemVV2 alignItems="flex-start">
                  {isGroup && (
                    <SpanV2
                      position="relative"
                      fontSize="15px"
                      fontWeight="500"
                      left="34px"
                      margin="0px 0px 7px 0px"
                    >
                      {ensName ? ensName : walletAddress}
                    </SpanV2>
                  )}
                  <ReceivedMessage
                    color="transparent"
                    padding="0px"
                    left={isGroup ? '8px' : '34px'}
                  >
                    <ImageMessage
                      src={msg.messageContent}
                      borderRadius={`0 ${GLOBALS.ADJUSTMENTS.RADIUS.SMALL} ${GLOBALS.ADJUSTMENTS.RADIUS.SMALL} ${GLOBALS.ADJUSTMENTS.RADIUS.SMALL}`}
                      onClick={() => {
                        setShowImageModal(true);
                        setImageUrl(msg.messageContent);
                      }}
                    />
                  </ReceivedMessage>
                </ItemVV2>
              </ItemHV2>
            </MessageWrapper>
          )}
          {showImageModal && (
            <Modal
              showImageModal={showImageModal}
              onClose={() => setShowImageModal(false)}
              src={imageUrl}
              time={msg.timestamp}
            />
          )}
        </>
      ) : msg.messageType === 'File' ? (
        <>
          {msg.fromCAIP10 === caip10 ? (
            <MessageWrapper align="row-reverse">
              <SenderMessage
                color="transparent"
                padding="0px"
              >
                <FileMessage>
                  <Files msg={msg} />
                </FileMessage>
              </SenderMessage>
            </MessageWrapper>
          ) : (
            <MessageWrapper align="row">
              <ItemHV2
                position="relative"
                left={isGroup ? '34px' : '0px'}
              >
                {isGroup && (
                  <ItemVV2
                    height="100%"
                    maxWidth="36px"
                    justifyContent="flex-start"
                    borderRadius="100%"
                  >
                    <ImageV2
                      width="36px"
                      height="36px"
                      src={profilePicture}
                      alt="Sender Profile"
                    />
                  </ItemVV2>
                )}
                <ItemVV2 alignItems="flex-start">
                  {isGroup && (
                    <SpanV2
                      position="relative"
                      fontSize="15px"
                      fontWeight="500"
                      left="34px"
                      margin="0px 0px 7px 0px"
                    >
                      {ensName ? ensName : walletAddress}
                    </SpanV2>
                  )}
                  <ReceivedMessage
                    color="transparent"
                    padding="0px"
                    left={isGroup ? '8px' : '34px'}
                  >
                    <FileMessage>
                      <Files msg={msg} />
                    </FileMessage>
                  </ReceivedMessage>
                </ItemVV2>
              </ItemHV2>
            </MessageWrapper>
          )}
        </>
      ) : null}
    </>
  );
}

const FileMessage = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const ImageMessage = styled.img`
  max-height: 170px;
  max-width: 300px;
  object-fit: contain;
  border-radius: ${(props) => props.borderRadius || '0px'};
  &:hover {
    cursor: pointer;
  }
`;

const TextMessage = styled.p`
  max-width: 300px;
  padding: 7px 44px 10px 0px;
  font-size: 14px;
  word-wrap: break-word;
  text-align: left;
  font-weight: 400;
  margin: 0px;
`;

const TimeStamp = styled(ItemHV2)`
  min-width: 44px;
  font-size: 11px;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 5px 0px 0px 5px;
  position: absolute;
  right: 10px;
  bottom: 5px;
`;

const MessageText = styled(SpanV2)`
  font-size: 14px;
  // max-width : 13rem;
  font-weight: 400;
  padding: 0px 20px 0px 0px;
  text-align: left;
  color: #000;

  @media ${device.mobileM} {
    padding: 0px 10px 0px 0px;
    max-width: 8rem;
  }
`;

const MessageWrapper = styled.div`
  width: 100%;
  min-height: ${(props: any): string => props.height || '48px'};
  padding: 0;
  margin-bottom: 5px;
  display: flex;
  flex-direction: ${(props: any): string => props.align || 'row'};
`;

const ReceivedMessage = styled.div`
  box-sizing: border-box;
  position: relative;
  left: ${(props) => props.left || '34px'};
  max-width: 419px;
  padding: ${(props: any): string => props.padding || '5px 11px 10px 15px'};
  background: ${(props: any): string => props.color || '#ffffff'};
  text-align: left;
  border-radius: 2px 16px 16px 16px;
  display: flex;
  justify-content: flex-start;
  color: #000000;
  // flex-direction: column;
  // align-items: baseline;
  flex-direction: row;
  align-items: center;
  padding: 9px 17px;
`;

const IntentMessage = styled(ReceivedMessage)`
  width: 80%;
`;

const SenderMessage = styled.div`
  box-sizing: border-box;
  position: relative;
  right: 34px;
  max-width: 419px;
  text-align: left;
  padding: ${(props: any): string => props.padding || '11px 11px 5px 15px'};
  background: ${(props: any): string => props.color || '#ca599b'};
  border-radius: 16px 2px 16px 16px;
  display: flex;
  justify-content: flex-start;
  color: #ffffff;
  flex-direction: column;
  align-items: baseline;
`;
