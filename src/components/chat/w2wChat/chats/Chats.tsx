// React + Web3 Essentials
import React, { useContext, useEffect, useState } from 'react';

// External Packages
import styled from 'styled-components';
import { TwitterTweetEmbed } from 'react-twitter-embed';

// Internal Components
import { ImageV2, ItemHV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import tickIcon from '../../../../assets/chat/tick.svg';
import { MessageIPFSWithCID, TwitterFeedReturnType } from 'types/chat';
import Files, { FileMessageContent } from '../TypeBar/Files/Files';
import Modal from '../Modal/Modal';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { checkTwitterUrl } from 'helpers/w2w/twitter';
import { useResolveEns } from 'hooks/useResolveEns';
import { caip10ToWallet } from 'helpers/w2w';
import { shortenText } from 'helpers/UtilityHelper';
import { AppContext } from 'types/chat';
import { Context } from 'modules/chat/ChatModule';
import { SentMessageWrapper } from './MessageWrappers/SentMessageWrapper';
import { getMemberDetails } from '../../../../helpers/w2w/groupChat';
import { ReceivedMessageWrapper } from './MessageWrappers/ReceivedMessageWrapper';
import * as PushAPI from '@pushprotocol/restapi';

// Internal Configs
import GLOBALS, { device } from 'config/Globals';
import { appConfig } from 'config';


interface ChatProps {
  msg: MessageIPFSWithCID;
  caip10: string;
  messageBeingSent: boolean;
  ApproveIntent?: Function;
  isGroup?: boolean;
}


export default function Chats({ msg, caip10, messageBeingSent, ApproveIntent, isGroup }: ChatProps) {
  const { currentChat }: AppContext = useContext<AppContext>(Context);
  const [showImageModal, setShowImageModal] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [profilePicture, setProfilePicture] = useState<string>('');
  const time: Date = new Date(msg?.timestamp);
  const time1: string = time.toLocaleTimeString('en-US');
  const date: string = time1.slice(0, -6) + time1.slice(-2);
  const { tweetId, messageType }: TwitterFeedReturnType = checkTwitterUrl({ message: msg?.messageContent });
  const walletAddress = shortenText(caip10ToWallet(msg.fromCAIP10)?.toLowerCase(), 6);
  const ensName = useResolveEns(msg.fromCAIP10);
  
  const getProfilePicture = async() =>{
    let member = getMemberDetails(currentChat,msg?.fromCAIP10);
    if(member){
      setProfilePicture(member.image);
    }
    else {
      console.log(msg)
      let user = await PushAPI.user.get({account:msg.fromCAIP10,env:appConfig.appEnv});
      setProfilePicture(user.profilePicture); 
    }
  }

  useEffect(() => {
    if(isGroup && msg && msg.messageType !== 'Intent')
     getProfilePicture();
  }, []);

  return (
    <>
      {messageType === 'TwitterFeedLink' ? (
        <>
          {msg.fromCAIP10 === caip10 ? (
            <SentMessageWrapper align="row-reverse">
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
            </SentMessageWrapper>
          ) : (
            <ReceivedMessageWrapper
              align="row"
              isGroup={isGroup}
              sender={ensName ? ensName : walletAddress}
              profilePicture={profilePicture}
            >
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
            </ReceivedMessageWrapper>
          )}
        </>
      ) : msg.messageType === 'Text' ? (
        <>
          {msg.fromCAIP10 === caip10 ? (
            <SentMessageWrapper align="row-reverse">
              <SenderMessage>
                {msg.messageContent.split('\n').map((str) => (
                  <TextMessage>{str}</TextMessage>
                ))}
                <TimeStamp>{date}</TimeStamp>
              </SenderMessage>
            </SentMessageWrapper>
          ) : (
            <ReceivedMessageWrapper
              align="row"
              isGroup={isGroup}
              sender={ensName ? ensName : walletAddress}
              profilePicture={profilePicture}
              msgType={msg.messageType}
            >
              <ReceivedMessage left={isGroup ? '8px' : '34px'}>
                {msg.messageContent.split('\n').map((str) => (
                  <TextMessage>{str}</TextMessage>
                ))}
                <TimeStamp>{date}</TimeStamp>
              </ReceivedMessage>
            </ReceivedMessageWrapper>
          )}
        </>
      ) : msg.messageType === 'Intent' ? (
        <>
          <ReceivedMessageWrapper
            align="row"
            isGroup={isGroup}
            sender={ensName ? ensName : walletAddress}
            profilePicture={profilePicture}
            msgType={msg.messageType}
          >
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
          </ReceivedMessageWrapper>
        </>
      ) : msg.messageType === 'Image' ? (
        <>
          {msg.fromCAIP10 === caip10 ? (
            <SentMessageWrapper
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
            </SentMessageWrapper>
          ) : (
            <ReceivedMessageWrapper
              height="138px"
              align="row"
              isGroup={isGroup}
              sender={ensName ? ensName : walletAddress}
              profilePicture={profilePicture}
            >
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
            </ReceivedMessageWrapper>
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
            <SentMessageWrapper
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
            </SentMessageWrapper>
          ) : (
            <ReceivedMessageWrapper
              height="170px"
              align="row"
              isGroup={isGroup}
              sender={ensName ? ensName : walletAddress}
              profilePicture={profilePicture}
            >
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
            </ReceivedMessageWrapper>
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
            <SentMessageWrapper align="row-reverse">
              <SenderMessage
                color="transparent"
                padding="0px"
              >
                <FileMessage>
                  <Files msg={msg} />
                </FileMessage>
              </SenderMessage>
            </SentMessageWrapper>
          ) : (
            <ReceivedMessageWrapper
              align="row"
              isGroup={isGroup}
              sender={ensName ? ensName : walletAddress}
              profilePicture={profilePicture}
            >
              <ReceivedMessage
                color="transparent"
                padding="0px"
                left={isGroup ? '8px' : '34px'}
              >
                <FileMessage>
                  <Files msg={msg} />
                </FileMessage>
              </ReceivedMessage>
            </ReceivedMessageWrapper>
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
  font-weight: 400;
  padding: 0px 20px 0px 0px;
  text-align: left;
  color: #000;

  @media ${device.mobileM} {
    padding: 0px 10px 0px 0px;
    max-width: 8rem;
  }
`;

const ReceivedMessage = styled.div`
  box-sizing: border-box;
  position: relative;
  margin-left: ${(props) => props.left || '34px'};
  max-width: 419px;
  padding: ${(props: any): string => props.padding || '5px 11px 10px 15px'};
  background: ${(props: any): string => props.color || '#ffffff'};
  text-align: left;
  border-radius: 2px 16px 16px 16px;
  display: flex;
  justify-content: flex-start;
  color: #000000;
  flex-direction: column;
  align-items: center;
  padding: 9px 17px;
`;

const IntentMessage = styled(ReceivedMessage)`
  flex-direction: row;
  width: 80%;
`;

const SenderMessage = styled.div`
  box-sizing: border-box;
  position: relative;
  margin-right: 34px;
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
