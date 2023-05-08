// React + Web3 Essentials
import React, { useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';

// External Packages
import { TwitterTweetEmbed } from 'react-twitter-embed';
import styled from 'styled-components';

// Internal Components
import * as PushAPI from '@pushprotocol/restapi';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { shortenText } from 'helpers/UtilityHelper';
import { caip10ToWallet } from 'helpers/w2w';
import { checkTwitterUrl } from 'helpers/w2w/twitter';
import { useResolveWeb3Name } from 'hooks/useResolveWeb3Name';
import { Context } from 'modules/chat/ChatModule';
import { AppContext as ContextType, MessageIPFSWithCID, TwitterFeedReturnType } from 'types/chat';
import tickIcon from '../../../../assets/chat/tick.svg';
import { getMemberDetails } from '../../../../helpers/w2w/groupChat';
import Modal from '../Modal/Modal';
import Files, { FileMessageContent } from '../TypeBar/Files/Files';
import { ReceivedMessageWrapper } from './MessageWrappers/ReceivedMessageWrapper';
import { SentMessageWrapper } from './MessageWrappers/SentMessageWrapper';
import { AppContext } from 'contexts/AppContext';
import { AppContextType } from 'types/context';

// Internal Configs
import { appConfig } from 'config';
import GLOBALS, { device } from 'config/Globals';

interface ChatProps {
  msg: MessageIPFSWithCID;
  caip10: string;
  messageBeingSent: boolean;
  ApproveIntent?: Function;
  isGroup?: boolean;
}

export default function Chats({ msg, caip10, messageBeingSent, ApproveIntent, isGroup }: ChatProps) {
  const { currentChat }: ContextType = useContext<ContextType>(Context);
  const { web3NameList }: AppContextType = useContext(AppContext);
  const [showImageModal, setShowImageModal] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [profilePicture, setProfilePicture] = useState<string>('');
  const time: Date = new Date(msg?.timestamp);
  const time1: string = time.toLocaleTimeString('en-US');
  const date: string = time1.slice(0, -6) + ' ' + time1.slice(-2)?.toLowerCase();
  const { tweetId, messageType }: TwitterFeedReturnType = checkTwitterUrl({ message: msg?.messageContent });
  if (messageType === 'TwitterFeedLink') {
    msg.messageType = 'TwitterFeedLink';
  }
  const walletAddress = shortenText(caip10ToWallet(msg?.fromCAIP10)?.toLowerCase(), 6);
  useResolveWeb3Name(msg?.fromCAIP10);

  const walletLowercase = caip10ToWallet(msg?.fromCAIP10)?.toLowerCase();
  const checksumWallet = walletLowercase ? ethers.utils.getAddress(walletLowercase) : null;
  const ensName = web3NameList[checksumWallet];

  const getProfilePicture = async () => {
    let member = getMemberDetails(currentChat, msg?.fromCAIP10);
    if (member) {
      setProfilePicture(member.image);
    } else {
      // console.log(msg)
      let user = await PushAPI.user.get({ account: msg.fromCAIP10, env: appConfig.appEnv });
      setProfilePicture(user.profilePicture);
    }
  };

  useEffect(() => {
    if (isGroup && msg && msg.messageType !== 'Intent') getProfilePicture();
  }, []);

  return (
    <ItemVV2>
      {/* Support Msg Type = TwitterFeedLink */}
      {msg.messageType === 'TwitterFeedLink' && (
        <ItemVV2>
          {msg.fromCAIP10?.toLowerCase() === caip10?.toLowerCase() ? (
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
        </ItemVV2>
      )}

      {/* Support Msg Type = Text */}
      {msg.messageType === 'Text' && (
        <ItemVV2>
          {msg.fromCAIP10?.toLowerCase() === caip10?.toLowerCase() ? (
            <SentMessageWrapper align="row-reverse">
              <SenderMessage>
                {msg.messageContent.split('\n').map((str) => (
                  <TextMessage key={Math.random().toString()}>{str}</TextMessage>
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
                  <TextMessage key={Math.random().toString()}>{str}</TextMessage>
                ))}
                <TimeStamp>{date}</TimeStamp>
              </ReceivedMessage>
            </ReceivedMessageWrapper>
          )}
        </ItemVV2>
      )}

      {/* Support Msg Type = Intent */}
      {msg.messageType === 'Intent' && (
        <ItemVV2>
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
        </ItemVV2>
      )}

      {/* Support Msg Type = Image */}
      {msg.messageType === 'Image' && (
        <ItemVV2>
          {msg.fromCAIP10?.toLowerCase() === caip10?.toLowerCase() ? (
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
        </ItemVV2>
      )}

      {/* Support Msg Type = GIF OR Support Msg Type = MediaEmbed */}
      {(msg.messageType === 'GIF' || msg.messageType === 'MediaEmbed') && (
        <ItemVV2>
          {msg.fromCAIP10?.toLowerCase() === caip10?.toLowerCase() ? (
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
        </ItemVV2>
      )}

      {/* Support Msg Type = GIF OR Support Msg Type = MediaEmbed */}
      {msg.messageType === 'File' && (
        <ItemVV2>
          {msg.fromCAIP10?.toLowerCase() === caip10?.toLowerCase() ? (
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
        </ItemVV2>
      )}
    </ItemVV2>
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
  max-width: 475px;
  padding: 7px 44px 10px 0px;
  font-size: 14px;
  word-wrap: break-word;
  text-align: left;
  font-weight: 400;
  margin: 0px;
  @media(${device.tablet}){
    max-width:70vw;
  }
  @media(${device.mobileL}){
    max-width:65vw;
  }
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
`

const MessageWrapper = styled.div`
  width: 100%;
  min-height: ${(props: any): string => props.height || '48px'};
  padding: 0;
  margin-bottom: 20px;
  display: flex;
  flex-direction: ${(props: any): string => props.align || 'row'};
`;

const ReceivedMessage = styled.div`
  box-sizing: border-box;
  position: relative;
  max-width: 525px;
  left: ${(props:any) => props.left || '34px'};
  padding: ${(props: any): string => props.padding || '5px 11px 10px 15px'};
  background: ${(props: any): string => props.color || '#ffffff'};
  text-align: left;
  border-radius: 2px 16px 16px 16px;
  display: flex;
  justify-content: flex-start;
  color: #000000;
  flex-direction: column;
  align-items: center;
  @media(${device.tablet}){
    max-width:80vw;
  }
  @media(${device.mobileL}){
    max-width: 75vw;
  }
`;

const IntentMessage = styled(ReceivedMessage)`
  flex-direction: row;
  @media(${device.laptop}){
    width:80%;
  }
  @media(${device.laptopL}){
    width:70%;
  }
  @media(${device.tablet}){
    width:65%;
  }
`;

const SenderMessage = styled.div`
  box-sizing: border-box;
  position: relative;
  right: 34px;
  max-width: 525px;
  text-align: left;
  padding: ${(props: any): string => props.padding || '11px 11px 5px 15px'};
  background: ${(props: any): string => props.color || '#ca599b'};
  border-radius: 16px 2px 16px 16px;
  display: flex;
  justify-content: flex-start;
  color: #ffffff;
  flex-direction: column;
  align-items: baseline;
  @media(${device.tablet}){
    max-width:80vw;
  }
  @media(${device.mobileL}){
    max-width: 75vw;
  }
`;
