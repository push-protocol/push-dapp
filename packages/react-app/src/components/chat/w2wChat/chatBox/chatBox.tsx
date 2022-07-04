import React, { useState, useContext, useEffect, useRef } from 'react';
import './chatBox.css';
import cn from 'classnames';
//@ts-ignore
// @ts-ignore
import epnsLogo from '../w2wAsset/epnsLogo.png';
import { Context } from '../w2wIndex';
import Chats from '../chats/chats';
// @ts-ignore
import 'font-awesome/css/font-awesome.min.css';
// @ts-ignore
import Picker from 'emoji-picker-react';
import { postMessage,getIntent,getDidLinkWallets,getLatestThreadhash,createIntent, getIntentStatus } from '../../../../helpers/w2wChatHelper';
import Dropdown from '../dropdown/dropdown';
import {intitializeDb} from '../w2wIndexeddb';
import * as IPFSHelper from '../../../../helpers/w2w/IPFS';
import { IPFSHTTPClient } from 'ipfs-http-client';
import { MessageIPFS } from '../../../../helpers/w2w/IPFS';

import { Web3Provider } from "ethers/providers";
import { useWeb3React } from "@web3-react/core";
import { fetchInbox } from '../w2wUtils';

const ChatBox = (props) => {
    const { account } = useWeb3React<Web3Provider>();
    const { currentChat, viewChatBox, did } = useContext(Context);
    const [newMessage, setNewMessage] = useState<string>("");
    const [textAreaDisabled, setTextAreaDisabled] = useState<boolean>(false);
    const [showEmojis, setShowEmojis] = useState<boolean>(false);
    const [messages, setMessages] = useState<MessageIPFS[]>([]);
    const [hasIntent,setHasIntent] = useState<boolean>(true);
    const [wallets,setWallets] = useState<string[]>([]);
    const [intentSentandPending, setIntentSentandPending] = useState<boolean>(false);

    let time;
    let showTime = false;

    const getMessagesFromCID = async (messageCID: string, ipfs: IPFSHTTPClient): Promise<void> => {
        if (!messageCID) {
            return;
        }
        setMessages([]);
        while (messageCID) { 
            const getMessage = await intitializeDb('Read',2,'CID_store',messageCID,'','cid');
           
            let msgIPFS:MessageIPFS;
            if(getMessage!==undefined)
            {
                msgIPFS = getMessage.body;  
            }
            else{
                const current = await IPFSHelper.get(messageCID, ipfs);//{}
                console.log(current);
                await intitializeDb('Insert',2,'CID_store',messageCID,current,'cid');
                msgIPFS = current as MessageIPFS 
            }
            setMessages(m => [msgIPFS,...m ])
            
            const link = msgIPFS.link;
            if (link) {
                messageCID = link;
            } else {
                break;
            }
        }
        
    }

    const scrollRef: any = useRef();
    const scrollToBottom = ()=>{
        scrollRef.current?.scrollIntoView({behaviour:"smooth"});
    }
    useEffect(() => {

        const getMessagesFromIPFS = async () => {
            setNewMessage("");
            let intent = false;
            console.log("PRINTING CURRENT CHAT");
            console.log(currentChat);
            if(currentChat)
            {   
                setIntentSentandPending(false);
                setTextAreaDisabled(false);
                if(currentChat?.did===did.id)
                {
                    setHasIntent(true);
                }
                else{
                    intent = await getIntent(currentChat.did,did.id);
                    if(intent==true){
                        var intentStatusValue = await getIntentStatus(currentChat.did, did.id);
                        if(intentStatusValue=="Pending"){
                            setIntentSentandPending(true);
                            setTextAreaDisabled(true);
                        }
                    }
                    console.log(intent)
                    setHasIntent(intent);
                }
                if (currentChat?.threadhash && intent) {
                   
                    const IPFSClient: IPFSHTTPClient = IPFSHelper.createIPFSClient();
                    await getMessagesFromCID(currentChat.threadhash, IPFSClient);
                }
                else{
                    setMessages([]);
                }
            }
            const res = await getDidLinkWallets(currentChat.did);
            setWallets(res);
           

            
        }
        getMessagesFromIPFS().catch(err => console.error(err));
        

        
    }, [currentChat]);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (newMessage.trim() !== "") {
            try {
               const msg =  await postMessage(account, did.id, currentChat.did, newMessage, 'Text', 'signature');
               console.log(msg);
               setMessages([...messages, msg]);
               const threadhash = await getLatestThreadhash(currentChat.did,did.id);
               await intitializeDb('Insert',2,'CID_store',threadhash,msg,'cid');
               const inbox = await fetchInbox(did);
               console.log(inbox);
               props.renderInbox(inbox);
            }
            catch (error) {
                console.log(error)
            }
        }
        setNewMessage("");

    }

    const sendIntent = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (newMessage.trim() !== "") {
            try {
               const msg = await createIntent(currentChat.did, did.id, account, newMessage, 'signature');
               console.log(msg);
               const inbox = await fetchInbox(did);
               console.log(inbox);
               props.renderInbox(inbox);
            }
            catch (error) {
                console.log(error)
            }
        }
        setNewMessage("");
    }

    const handleKeyPress = (e)=>{
        const x = e.keyCode;
        if(x===13)
        {
            handleSubmit(e);
        }
    }
    const changeHandler = (e) => {
        setNewMessage(e.target.value);
        if (newMessage === "") {
            // setTextAreaDisabled(true);
        }
        else {
            // setTextAreaDisabled(false);
        }
        if(e.key === 'Enter')
        {   
            handleSubmit(e);
        }
        
    }

    const addEmoji = (e, emojiObject) => {
        setNewMessage(newMessage + emojiObject.emoji);
        setShowEmojis(false);
    }

    const placeholderTextArea = ()=>{
        if(intentSentandPending==true)
            return "Can't send any messages until intent is accepted !";
        if(hasIntent==true)
            return "New Text Message";
        else
            return "Intent Message";
    }

    return (
        <div className='chatBox_body'>
            {!viewChatBox ? (
                <div className="defaultChatPage">
                </div>
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
                                        <p className='chatBoxWallet'>{currentChat.msg.name}</p>
                                        <div>
                                            {hasIntent? (
                                                <Dropdown wallets = {wallets} />
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
                
                            {hasIntent ? (
                                messages.map((msg,i) => {
                                    const isLast = i === messages.length - 1
                                    const noTail = !isLast && messages[i + 1]?.fromDID === msg.fromDID
                                    showTime = false;
                                    
                                    if(i===1)
                                    {
                                        time = messages[1].timestamp;
                                        let date = new Date(time);
                                        time = date.toDateString();
                                        showTime = true;
                                        
                                    }
                                    if(i>=1)
                                    {
                                        let duration = new Date(messages[i]?.timestamp);
                                        let dateString = duration.toDateString();
                                        if(dateString!==time)
                                        {
                                            showTime = true;
                                            time = dateString;
                                        }  
                                    }
                                    return (
                                        <>
                                        {!showTime?null:<div className='showDateInChat'><span>{time}</span></div>}
                                        <div ref={scrollRef} key = {msg.link} className = {cn("w2wmsgshared", msg.fromDID===did.id ? "w2wmsgsent" :"w2wmsgreceived",noTail && "w2wnoTail")}>
                                            
                                            <Chats time={msg.timestamp} text={msg.messageContent}  />
                                        </div>
                                        </>
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
                                disabled = {textAreaDisabled}
                                className='chatMessageInput'
                                placeholder={placeholderTextArea()}
                                onChange={changeHandler}
                                onKeyDown =  {handleKeyPress}
                                value={newMessage}
                            >
                            </textarea>
                            {
                                hasIntent ? (
                                    <button disabled = {textAreaDisabled} className='emojiButton' onClick={() => setShowEmojis(!showEmojis)}>
                                        <i className="fa fa-smile" aria-hidden="true" ></i>
                                    </button>
                                ) :
                                    null
                            }
                            {showEmojis && hasIntent && <Picker
                                onEmojiClick={addEmoji}
                                pickerStyle={{ width: '20%', position: 'absolute', top: '13rem', zindex: '700', left: '60vw' }}
                            />}
                              {
                                hasIntent ? (
                                    <button disabled = {textAreaDisabled} className='chatSubmitButton' onClick={handleSubmit}>Send</button>
                                ) :
                                <button className='chatSubmitButton' onClick={sendIntent}>Send Intent</button>
                            }
                        </div>
                    </>
                )
            }
        </div>
    )
}
export default ChatBox;