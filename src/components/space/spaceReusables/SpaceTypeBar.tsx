import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import Picker from 'emoji-picker-react';
import GifPicker from 'components/chat/w2wChat/TypeBar/Gifs/GifPicker';
import { ItemHV2 } from 'components/reusables/SharedStylingV2';

const SpaceTypeBar = () => {
    const theme = useTheme();
    const [isGifPickerOpened, setIsGifPickerOpened] = useState<boolean>(false);
    const [showEmojis, setShowEmojis] = useState<boolean>(false);

    const addEmoji = (e: any, emojiObject: { emoji: any }): void => {
        setShowEmojis(false);
    };

    return (
        <Container>
            <Icon
                // onClick={(): void => setShowEmojis(!showEmojis)}
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

            <TextInput
                placeholder="Type your message..."
                // onKeyDown={handleKeyPress}
                // onChange={textOnChange}
                // value={newMessage}
                rows={1}
                // ref={textAreaRef}
                autoFocus="autoFocus"
            />

            <GifDiv>
                <label>
                    {isGifPickerOpened && (
                        <GifPicker
                            setIsOpened={setIsGifPickerOpened}
                            isOpen={isGifPickerOpened}
                        // onSelect={sendGif}
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

        </Container>
    );
};

export default SpaceTypeBar;

const Container = styled.div`
background: ${(props) => props.theme.chat.sendMesageBg};
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
`

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