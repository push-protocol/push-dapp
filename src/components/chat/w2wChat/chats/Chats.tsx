// React + Web3 Essentials
import React, { useState } from 'react';

// External Packages
import cn from 'classnames';
import styled from 'styled-components';

// Internal Compoonents
import { ImageV2, ItemHV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { DID } from 'dids';
import tickIcon from '../../../../assets/chat/tick.svg';
import { MessageIPFS } from '../../../../helpers/w2w/ipfs';
import Files, { FileMessageContent } from '../TypeBar/Files/Files';
import Modal from '../Modal/Modal';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';

// Internal Configs
import { appConfig } from 'config';
import GLOBALS from 'config/Globals';

const infura_URL = appConfig.infuraApiUrl;
interface ChatProps {
  msg: MessageIPFS;
  caip10: string;
  messageBeingSent: boolean;
  ApproveIntent?: Function;
}
interface TextProps {
  content: string;
}
const URL_REGEX =
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;

const Text = ({ content }: TextProps) => {
  const words = content.split(' ');
  return (
    <p>
      {words.map((word: string) => {
        return word.match(URL_REGEX) ? (
          <>
            <a
              href={word}
              target="_blank"
              rel="noreferrer"
            >
              {word}
            </a>{' '}
          </>
        ) : (
          word + ' '
        );
      })}
    </p>
  );
};
export default function Chats({ msg, caip10, messageBeingSent, ApproveIntent }: ChatProps) {
  const [showImageModal, setShowImageModal] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>('');
  const time: Date = new Date(msg?.timestamp);
  const time1 = time.toLocaleTimeString('en-US');
  const date = time1.slice(0, -6) + time1.slice(-2);

  return (
    <>
      {msg.messageType === 'Text' ? (
        <>
          {msg.fromCAIP10 === caip10 ? (
            <MessageWrapper align="row-reverse">
              <SenderMessage>
                <TextMessage>{msg.messageContent}</TextMessage>
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
              <ReceivedMessage>
                <TextMessage>{msg.messageContent}</TextMessage>
                <TimeStamp>{date}</TimeStamp>
              </ReceivedMessage>
            </MessageWrapper>
          )}
        </>
      ) : msg.messageType === 'Intent' ? (
        <>
          <MessageWrapper align="row">
            <ReceivedMessage>
              <SpanV2
                fontSize="14px"
                maxWidth="13rem"
                fontWeight="400"
                padding="0px 44px 10px 0px"
                textAlign="left"
                color="#000"
              >
                {msg.messageContent}
              </SpanV2>
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
            </ReceivedMessage>
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
              <ReceivedMessage
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
              </ReceivedMessage>
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
              <ReceivedMessage
                color="transparent"
                padding="0px"
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
              <ReceivedMessage
                color="transparent"
                padding="0px"
              >
                <FileMessage>
                  <Files msg={msg} />
                </FileMessage>
              </ReceivedMessage>
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
  padding: 0px 44px 10px 0px;
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
  left: 34px;
  max-width: 419px;
  padding: ${(props: any): string => props.padding || '11px 11px 5px 24px'};
  background: ${(props: any): string => props.color || '#ffffff'};
  text-align: left;
  border-radius: 2px 16px 16px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000000;
`;

const SenderMessage = styled.div`
  box-sizing: border-box;
  position: relative;
  right: 34px;
  max-width: 419px;
  text-align: left;
  padding: ${(props: any): string => props.padding || '11px 11px 5px 24px'};
  background: ${(props: any): string => props.color || '#ca599b'};
  border-radius: 16px 2px 16px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #ffffff;
`;
