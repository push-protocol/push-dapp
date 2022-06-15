import React, { useState, useContext, useEffect, useRef } from 'react';
import './chatBox.css';
import cn from 'classnames';
// import {motion,AnimatePresence} from 'framer-motion';
//@ts-ignore
// @ts-ignore
import defaultChat from '../w2wAsset/default.png';
import { Context } from '../w2wIndex';
import Chats from '../chats/chats';
// @ts-ignore
import 'font-awesome/css/font-awesome.min.css';
// @ts-ignore
import epnsLogo from '../w2wAsset/epnsLogo.png';

import Picker from 'emoji-picker-react';
import { postMessage } from '../../../../helpers/w2wChatHelper';
import Dropdown from '../dropdown/dropdown';

import * as IPFSHelper from '../../../../helpers/w2w/IPFS'
import { IPFSHTTPClient } from 'ipfs-http-client';
import { MessageIPFS } from '../../../../helpers/w2w/IPFS';

import { Web3Provider } from "ethers/providers";
import { useWeb3React } from "@web3-react/core";

const transition = {
    type: 'spring',
    stiffness: 200,
    mass: 0.2,
    damping: 20,
  }
  
  const variants = {
    initial: {
      opacity: 0,
      y: 300,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition,
    },
  }

const ChatBox = () => {
    const { account } = useWeb3React<Web3Provider>();
    const { currentChat, viewChatBox, did } = useContext(Context);
    const [newMessage, setNewMessage] = useState<string>("");
    const [textAreaDisabled, setTextAreaDisabled] = useState<boolean>(true);
    const [showEmojis, setShowEmojis] = useState<boolean>(false);
    const [messages, setMessages] = useState<IMessage[]>([]);

    interface IMessage {
        sent: boolean,
        fromWallet: string,
        time: number,
        content: string
    }

    const getMessagesFromCID = async (messageCID: string, ipfs: IPFSHTTPClient): Promise<void> => {
        if (!messageCID) {
            return;
        }
        setMessages([]);
        while (messageCID) {
            const current = await IPFSHelper.get(messageCID, ipfs);
            const msgIPFS: MessageIPFS = current as MessageIPFS
            const msg: IMessage = {
                content: msgIPFS.messageContent, fromWallet: msgIPFS.fromWallet, time: msgIPFS.timestamp,
                sent: false
            };

            setMessages(m => [...m, msg])
            const link = msgIPFS.link;
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
            try {
                //await postMessage(account, did.id, currentChat.did, newMessage, 'Text', 'signature');
                const msg: IMessage = {
                    time: Date.now(), content: newMessage, fromWallet: account,
                    sent: false
                };
                setMessages([...messages, msg]);
            }
            catch (error) {
                console.log(error)
            }
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
                                        src = {currentChat.profile_picture}
                                        alt=""
                                    />
                                    <div className='chatBoxNavDetail'>
                                        <p className='chatBoxWallet'>{currentChat.name}</p>
                                        <div>
                                            {currentChat.intent ? (
                                                <Dropdown/>
                                            ):
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
                                messages.map((msg,i) => {
                                    const isLast = i === messages.length - 1
                                    console.log(isLast);
                                    const noTail = !isLast && messages[i + 1]?.sent === msg.sent
                                    return (
                                        <div ref={scrollRef} className = {cn("w2wmsgshared", msg.sent ? "w2wmsgsent" :"w2wmsgreceived",noTail && "w2wnoTail")}>
                                            <Chats time={msg.time} text={msg.content} wallet={msg.fromWallet} />
                                        </div>
                                    )
                                })
                            )
                                :
                                (
                                    <div className='askForIntent'>
                                        <p>
                                            Ask for Intent to send messages
                                        </p>
                                    </div>
                                )
                            }
                        </div>

                        <div className='chatBoxBottom'>
                            <textarea
                                className='chatMessageInput'
                                placeholder={currentChat.intent ? 'Text Message' : 'Write message to send intent...'}
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
                            <button className='chatSubmitButton' onClick={handleSubmit}>{currentChat.intent ? 'Send' : 'Send Intent'}</button>
                        </div>
                    </>
                )
            }
        </div>
    )
}
export default ChatBox;