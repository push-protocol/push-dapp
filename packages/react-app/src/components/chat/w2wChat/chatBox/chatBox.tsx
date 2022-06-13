import React, { useState, useContext, useEffect, useRef } from 'react';
import './chatBox.css';
// @ts-ignore
import defaultChat from '../w2wAsset/default.png';
import { Context } from '../w2wIndex';
import Chats from '../chats/chats';
// @ts-ignore
import test from '../w2wAsset/test.jpg';
import 'font-awesome/css/font-awesome.min.css';
// @ts-ignore
import epnsLogo from '../w2wAsset/epnsLogo.png';

import Picker from 'emoji-picker-react';
import { postMessageToServer } from '../../../../helpers/w2wChatHelper';
import Dropdown from '../dropdown/dropdown';

import * as IPFSHelper from '../../../../helpers/w2w/IPFS'
import { IPFSHTTPClient } from 'ipfs-http-client';
import { MessageIPFS } from '../../../../helpers/w2w/IPFS';

const ChatBox = () => {
    const { currentChat, viewChatBox } = useContext(Context);
    const [newMessage, setNewMessage] = useState<string>("");
    const [textAreaDisabled, setTextAreaDisabled] = useState<boolean>(true);
    const [showEmojis, setShowEmojis] = useState<boolean>(false);
    const [messages, setMessages] = useState<Message[]>([]);

    interface Message {
        time: number,
        text: string,
        wallet: string
    };

    const getMessagesFromCID = async (messageCID: string, ipfs: IPFSHTTPClient): Promise<void> => {
        if (!messageCID) {
            return;
        }

        while (messageCID) {
            const current = await IPFSHelper.get(messageCID, ipfs);
            const msg: MessageIPFS = JSON.parse(new TextDecoder('utf-8').decode(current));
            const messageChat: Message = { time: msg.timestamp, text: msg.messageContent, wallet: msg.fromWallet }
            const updateMessage = [...messages, messageChat];
            setMessages(updateMessage);
            const link = msg.link;
            if (link) {
                messageCID = link;
            } else {
                break;
            }
        }
    }

    const scrollRef: any = useRef();

    useEffect(() => {
        const getMessagesFromIPFS = async () => {
            if (currentChat?.threadhash) {
                const IPFSClient: IPFSHTTPClient = IPFSHelper.createIPFSClient();
                await getMessagesFromCID(currentChat.threadhash, IPFSClient);
            }
        }
        getMessagesFromIPFS().catch(err => console.error(err));
    }, [currentChat]);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (newMessage.trim() !== "") {
            const msg = { time: Date.now(), text: newMessage, wallet: "0y03faC3d...743" }
            // Send messages to server
            const response = await postMessageToServer(Date.now(), newMessage, "0y03faC3d...743")
            setMessages([...messages, msg]);
        }
        setNewMessage("");
    }

    const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessage(e.target.value);
        if (newMessage === "") {
            setTextAreaDisabled(true);
        }
        else {
            setTextAreaDisabled(false);
        }
    }

    const addEmoji = (e, emojiObject) => {
        setNewMessage(newMessage + emojiObject.emoji);
        setShowEmojis(false);
    }

    return (
        <div className='chatBox_body'>
            {!viewChatBox ? (
                <img src={defaultChat}></img>
            )
                :
                (
                    <>
                        <div className='chatBoxNavBar'>
                            <div className='chatBoxUserName'>
                                <img
                                    src={test}
                                    alt=""
                                />
                                <div className='chatBoxNavDetail'>
                                    <p className='chatBoxWallet'>0x03faC3dB99f382ffF7c796ccec63CC9360250743</p>
                                    <div>
                                        {currentChat.intent !== 'Pending' ? (
                                            <Dropdown />
                                        ) :
                                            null
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='chatBoxEpnsLogo'>
                                <img src={epnsLogo} alt="" />
                            </div>
                        </div>
                        <div className='chatBoxTop'>
                            {currentChat.intent ? (
                                messages.map((msg: { time: any; text: string; wallet: string; }) => (
                                    <div ref={scrollRef} >
                                        <Chats time={msg.time} text={msg.text} wallet={msg.wallet} />
                                    </div>
                                ))
                            )
                                :
                                (
                                    <div className='askForIntent'>
                                        <p>
                                            Click here to send intent
                                        </p>
                                    </div>
                                )
                            }
                        </div>

                        <div className='chatBoxBottom'>
                            <textarea
                                className='chatMessageInput'
                                placeholder={currentChat.intent == 'Pending' ? 'Text Message' : 'Write message to send intent...'}
                                onChange={changeHandler}
                                value={newMessage}
                            >
                            </textarea>
                            {
                                currentChat.intent ? (
                                    <button className='emojiButton' onClick={() => setShowEmojis(!showEmojis)}>
                                        <i className="fa fa-smile" aria-hidden="true" ></i>
                                    </button>
                                ) :
                                    null
                            }
                            {showEmojis && currentChat.intent && <Picker
                                onEmojiClick={addEmoji}
                                pickerStyle={{ width: '20%', position: 'absolute', top: '13rem', zindex: '700', left: '60vw' }}
                            />}
                            <button className='chatSubmitButton' onClick={handleSubmit} >{currentChat.intent ? 'Send' : 'Send Intent'}</button>
                        </div>
                    </>
                )
            }
        </div>
    )
}
export default ChatBox;