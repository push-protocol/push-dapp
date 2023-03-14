// React + Web3 Essentials
import React, { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';
import Picker from 'emoji-picker-react';

// Internal Components
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ItemHV2 } from 'components/reusables/SharedStylingV2';
import { VideoCallInfoI } from 'sections/video/VideoCallSection';
import { Context } from 'modules/chat/ChatModule';
import { FileMessageContent } from './Files/Files';
import GifPicker from './Gifs/GifPicker';
import { AppContext } from 'types/chat';

// Internal Configs
import { caip10ToWallet } from 'helpers/w2w';
import { ChatUserContext } from 'contexts/ChatUserContext';
import { MessagetypeType } from '../../../../types/chat';

interface ITypeBar {
  isGroup: boolean;
  messageBeingSent: boolean;
  newMessage: string;
  setNewMessage: (newMessage: string) => void;
  setVideoCallInfo?: (videoCallInfo: VideoCallInfoI) => void;
  videoCallInfo?: VideoCallInfoI;
  sendMessage: ({ message, messageType }: { message: string; messageType: MessagetypeType}) => void;
  sendIntent: ({ message, messageType }: { message: string; messageType: MessagetypeType }) => void;
  setOpenSuccessSnackBar: (openReprovalSnackbar: boolean) => void;
  openReprovalSnackbar?: boolean;
  setSnackbarText: (SnackbarText: string) => void;
}

const Typebar = ({
  isGroup,
  messageBeingSent,
  setNewMessage,
  newMessage,
  setVideoCallInfo,
  sendMessage,
  sendIntent,
  setOpenSuccessSnackBar,
  setSnackbarText,
}: ITypeBar) => {
  const { currentChat }: AppContext = useContext<AppContext>(Context);
  const {connectedUser} = useContext(ChatUserContext);
  const [showEmojis, setShowEmojis] = useState<boolean>(false);
  const [isGifPickerOpened, setIsGifPickerOpened] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [filesUploading, setFileUploading] = useState<boolean>(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState('');

  const theme = useTheme();
  const isDarkMode = theme.scheme === 'dark';

  useEffect(() => {
    if (textAreaRef?.current?.style) {
      textAreaRef.current.style.height = 25 + 'px';
      const scrollHeight = textAreaRef.current?.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + 'px';
    }
  }, [textAreaRef, value]);

  const addEmoji = (e: any, emojiObject: { emoji: any }): void => {
    setNewMessage(newMessage + emojiObject.emoji);
    setShowEmojis(false);
  };

  const handleSubmit = (e: { preventDefault: () => void }): void => {
    e.preventDefault();
    if (newMessage.trim() !== '') {
      if (currentChat.threadhash || isGroup) {
        sendMessage({
          message: newMessage,
          messageType: 'Text',
        });
      } else {
        sendIntent({ message: newMessage, messageType: 'Text' });
      }
    }
  };

  const handleKeyPress = (e: any): void => {
    const x = e.keyCode;

    // Send video request only when two users are chatting
    if (e.target.value === '/video' && currentChat.threadhash) {
      setVideoCallInfo({
        address: caip10ToWallet(currentChat.wallets.toString()),
        fromPublicKeyArmored: connectedUser.publicKey,
        toPublicKeyArmored: currentChat.publicKey,
        privateKeyArmored: connectedUser.privateKey,
        establishConnection: 1,
      });
      setNewMessage('');
      return;
    }

    if (x === 13 && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  const textOnChange = (e: any): void => {
    const val = e.target?.value;
    setValue(val);
    if (!messageBeingSent) {
      setNewMessage(e.target.value);
    }
  };

  const sendGif = (url: string): void => {
    if (currentChat.threadhash || isGroup) {
      sendMessage({
        message: url,
        messageType: 'GIF',
      });
     
    } else {
      sendIntent({ message: url, messageType: 'GIF' });
    }
  };

  const uploadFile = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file: File = e.target.files?.[0];
    if (file) {
      try {
        const TWO_MB = 1024 * 1024 * 2;
        if (file.size > TWO_MB) {
          setOpenSuccessSnackBar(true);
          setSnackbarText('Files larger than 2mb is now allowed');
          return;
        }
        setFileUploading(true);
        const messageType = file.type.startsWith('image') ? 'Image' : 'File';
        const reader = new FileReader();
        let fileMessageContent: FileMessageContent;
        reader.readAsDataURL(file);
        reader.onloadend = async (e): Promise<void> => {
          fileMessageContent = {
            content: e.target.result as string,
            name: file.name,
            type: file.type,
            size: file.size,
          };
          if (currentChat.threadhash || isGroup) {

            sendMessage({
              message: JSON.stringify(fileMessageContent),
              messageType,
            });
          } else {
            sendIntent({ message: JSON.stringify(fileMessageContent), messageType: messageType });

          }
          setFileUploading(false);
        };
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <TypeBarContainer background={messageBeingSent ? 'transparent' : theme.chat.sendMesageBg}>
      {messageBeingSent ? (
        <SpinnerContainer>
          <ItemHV2
            position="absolute"
            top="0"
            right="10px"
            bottom="0"
            justifyContent="flex-end"
            background="transparent"
          >
            <LoaderSpinner
              type={LOADER_TYPE.SEAMLESS}
              spinnerSize={40}
              width="100%"
            />
          </ItemHV2>
        </SpinnerContainer>
      ) : (
        <>
          <Icon
            onClick={(): void => setShowEmojis(!showEmojis)}
            filter={theme.snackbarBorderIcon}
          >
            <img
              src="/svg/chats/smiley.svg"
              height="24px"
              width="24px"
              alt=""
            />
          </Icon>
          {showEmojis && (
            <Picker
              onEmojiClick={addEmoji}
              pickerStyle={{
                width: '300px',
                position: 'absolute',
                bottom: '2.5rem',
                zindex: '700',
                left: '2.5rem',
              }}
            />
          )}
          {
            <TextInput
              placeholder="Type your message..."
              onKeyDown={handleKeyPress}
              onChange={textOnChange}
              value={newMessage}
              rows={1}
              ref={textAreaRef}
              autoFocus="autoFocus"
            />
          }

          <>
            <GifDiv>
              <label>
                {isGifPickerOpened && (
                  <GifPicker
                    setIsOpened={setIsGifPickerOpened}
                    isOpen={isGifPickerOpened}
                    onSelect={sendGif}
                  />
                )}
                <Icon
                  onClick={() => setIsGifPickerOpened(!isGifPickerOpened)}
                  filter={theme.snackbarBorderIcon}
                >
                  <img
                    src="/svg/chats/gif.svg"
                    height="18px"
                    width="22px"
                    alt=""
                  />
                </Icon>
              </label>
            </GifDiv>
            <label>
              <Icon filter={theme.snackbarBorderIcon}>
                <img
                  src="/svg/chats/attachment.svg"
                  height="24px"
                  width="20px"
                  alt=""
                />
              </Icon>
              <FileInput
                type="file"
                ref={fileInputRef}
                onChange={uploadFile}
              />
            </label>

            {filesUploading ? (
              <div className="imageloader">
                <LoaderSpinner
                  type={LOADER_TYPE.SEAMLESS}
                  spinnerSize={20}
                />
              </div>
            ) : (
              <>
                <Icon onClick={handleSubmit}>
                  <img
                    src={`/svg/chats/send${isDarkMode ? '_dark' : ''}.svg`}
                    height="27px"
                    width="27px"
                    alt=""
                  />
                </Icon>
              </>
            )}
          </>
        </>
      )}
    </TypeBarContainer>
  );
};

export default Typebar;

const TypeBarContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  bottom: 9px;
  left: 9px;
  right: 9px;

  height: auto;
  padding: 13px 16px 13px 16px;
  border-radius: 13px;
  background: ${(props) => (props.background ? props.background : props.theme.chat.sendMesageBg)};
`;

const SpinnerContainer = styled.div`
  height: 35px;
`;

const Icon = styled.i`
  filter: ${(props) => props.filter};
  padding: 0px;
  display: flex;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const TextInput = styled.textarea`
  font-size: 16px;
  width: 100%;
  height: 25px;
  max-height: 75px;
  outline: none;
  padding-top: 4px;
  border: none;
  resize: none;
  background: transparent;
  color: ${(props) => props.theme.chat.sendMessageFontColor || 'black'};
  &&::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #cf1c84;
    border-radius: 10px;
    height: 50px;
  }
  ::placeholder {
    color: ${(props) => props.theme.chat.sendMessageFontColor || 'black'};
    padding-top: 5px;
  }
`;

const GifDiv = styled.div`
  background: ${(props) => props.theme.chat.gifContainerBg || '#F7F8FF'};
  padding: 5px 8px 5px 6px;
  border-radius: 7px;
`;

const FileInput = styled.input`
  display: none;
`;
