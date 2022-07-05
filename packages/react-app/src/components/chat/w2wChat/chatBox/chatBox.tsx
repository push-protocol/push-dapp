import React, { useState, useContext, useEffect, useRef, ChangeEvent,FC } from 'react';
import './chatBox.css';
import cn from 'classnames';
// @ts-ignore
import epnsLogo from '../w2wAsset/epnsLogo.png';
import { Context } from '../w2wIndex';
import Chats from '../chats/chats';
import {CID} from 'ipfs-http-client';
// @ts-ignore
import 'font-awesome/css/font-awesome.min.css';
import Picker from 'emoji-picker-react';
import { postMessage, getIntent, getDidLinkWallets, getLatestThreadhash } from '../../../../helpers/w2wChatHelper';
import Dropdown from '../dropdown/dropdown';
import { intitializeDb } from '../w2wIndexeddb';
import * as IPFSHelper from '../../../../helpers/w2w/IPFS';
import { IPFSHTTPClient } from 'ipfs-http-client';
import { MessageIPFS } from '../../../../helpers/w2w/IPFS';
import Loader from "react-loader-spinner";
import GifIcon from '../W2WIcons/GifIcon';
import { Web3Provider } from "ethers/providers";
import { useWeb3React } from "@web3-react/core";
import { fetchInbox } from '../w2wUtils';
import GifPicker from '../Gifs/gifPicker';

interface chatBoxProps{
    renderInbox:(args:Array<{}>)=>void;
}
const ChatBox:FC<chatBoxProps> = (props:chatBoxProps) => {
    const { account } = useWeb3React<Web3Provider>();
    const { currentChat, viewChatBox, did } = useContext(Context);
    const [newMessage, setNewMessage] = useState<string>("");
    const [textAreaDisabled, setTextAreaDisabled] = useState<boolean>(true);
    const [showEmojis, setShowEmojis] = useState<boolean>(false);
    const [messages, setMessages] = useState<MessageIPFS[]>([]);
    const [imageSource,setImageSource] = useState<string>('');
    const [hasIntent,setHasIntent] = useState<boolean>(true);
    const [wallets,setWallets] = useState<string[]>([]);
    const [blockUserOpt,setBlockUserOpt] = useState<boolean>(false);
    const [filesUploading,setFileUploading] = useState<boolean>(false);
    const imageInputRef = useRef<HTMLInputElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isGifPickerOpened,setIsGifPickerOpened] = useState<boolean>(false);
    
    let time:string="";
    let showTime = false;
    const getMessagesFromCID = async (messageCID: string, ipfs: IPFSHTTPClient): Promise<void> => {
        if (!messageCID) {
            return;
        }
        setMessages([]);
        while (messageCID) {
            const getMessage = await intitializeDb('Read', 2, 'CID_store', messageCID, '', 'cid');

            let msgIPFS: MessageIPFS;
            if (getMessage !== undefined) {
                msgIPFS = getMessage.body;
            }
            else {
                const current = await IPFSHelper.get(messageCID, ipfs);//{}
                console.log(current);
                await intitializeDb('Insert', 2, 'CID_store', messageCID, current, 'cid');
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
    const scrollToBottom = () => {
        scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
    }
    useEffect(() => {
        const getMessagesFromIPFS = async () => {
            let intent = false;
            try{
    
                const cid = CID.parse(currentChat.profile_picture);
                setImageSource(`https://ipfs.infura.io/ipfs/${currentChat.profile_picture}`)
            }
            catch(err)
            {
                setImageSource(currentChat.profile_picture);
            }
            if(currentChat)
            {
                if(currentChat?.did===did.id)
                {
                    setHasIntent(true);
                }
                else{
                    intent = await getIntent(currentChat?.did,did.id);
                    console.log(intent)
                    setHasIntent(intent);
                }
                if (currentChat?.threadhash && intent) {

                    const IPFSClient: IPFSHTTPClient = IPFSHelper.createIPFSClient();
                    await getMessagesFromCID(currentChat.threadhash, IPFSClient);
                }
                else {
                    setMessages([]);
                }
            }
            const res = await getDidLinkWallets(currentChat.did);
            setWallets(res);  
        }
        getMessagesFromIPFS().catch(err => console.error(err));
    }, [currentChat]);

    const sendMessage = async (account:string,fromDid:string,toDid:string,message:string,messageType:string,signature:string)=>{
        try {
            console.log(typeof message);
            const msg =  await postMessage(account, fromDid, toDid, message, messageType, signature);
            console.log(msg);
            setMessages([...messages,msg ]);
            setNewMessage("");
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
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (newMessage.trim() !== "") {
            sendMessage(account,did.id,currentChat.did,newMessage,'Text','signature');
        }
    }
    const handleKeyPress = (e) => {
        const x = e.keyCode;
        if (x === 13) {
            handleSubmit(e);
        }
    }
    const textOnChange = (e)=>{
        setNewMessage(e.target.value);
    }
    const uploadFile = async (file:File)=>{
        try{
            const TWENTY_MB = 1024*1024*20;
            if (file.size > TWENTY_MB) {
                return;
            }
            setFileUploading(true);
            const IPFSClient: IPFSHTTPClient = IPFSHelper.createIPFSClient();
            const type = file.type.startsWith("image") ? "Image" : "File";
            let content:string;
            console.log(file);
            if(type==='File')
            {
                let reader = new FileReader();
                let resultingfile;
                reader.readAsDataURL(file);
                reader.onloadend =  async(e)=>{
                    
                    resultingfile = {content:e.target.result,name:file.name,type:file.type,size:file.size}
                    console.log(resultingfile);
                    sendMessage(account,did.id,currentChat.did,JSON.stringify(resultingfile),type,'sig');
                    setFileUploading(false);
                }
            }
            else{
                const cid = await IPFSHelper.uploadImage(file,IPFSClient);
                content = cid;
                sendMessage(account,did.id,currentChat.did,content.toString(),type,'sig');
                setFileUploading(false);
            }
        }
        catch(err)
        {
            console.log(err);
        }
    }
    const handleFileInputChange = (e:ChangeEvent<HTMLInputElement>)=>{
        const file = e.target.files?.[0];
        if(file)
        uploadFile(file);
    }
    const addEmoji = (e, emojiObject:{emoji:any}) => {
        setNewMessage(newMessage + emojiObject.emoji);
        setShowEmojis(false);
    }
    
    const sendGif = (url:string)=>{
        console.log(url);
        sendMessage(account,did.id,currentChat.did,url,'Gif','signature');

    }
    return (
        <div className='chatBox_body'>
            {!viewChatBox ? (
                <div className="defaultChatPage">    
                   <div className='defaultChatPageText'>
                        <img src={epnsLogo} alt="" />
                        <p>W2W DAPP</p>
                        <span>Start a conversation by clicking  on any dicussion!</span>
                   </div>
                </div>
                )
                :
                (
                    <>
                        <div className='chatBoxNavBar'>
                            <div className='chatBoxUserName'>
                                    <img
                                        src = {imageSource}
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
                            <i className="fa fa-ellipsis-v" aria-hidden="true" onClick={()=>setBlockUserOpt(!blockUserOpt)}></i>
                            { blockUserOpt
                                ?
                                <div className = "blockUserDropdown">
                                    Block User
                                </div>
                                :
                                null
                            }
                            </div>
                        </div>
                        
                        <div className='chatBoxTop' ref = {scrollRef}>
                            {hasIntent ? (
                                messages.map((msg,i) => {
                                    const isLast = i === messages.length-1
                                    const noTail = !isLast && messages[i + 1]?.fromDID === msg.fromDID
                                    let time1:string = "";
                                    if(i>0)
                                    {
                                        time1 = time
                                    }
                                    showTime = false;
                                    if(i>=0)
                                    {
                                        let duration = new Date(messages[i]?.timestamp);
                                        let dateString = duration.toDateString();
                                        if(dateString!==time || i===0)
                                        {
                                            showTime = true;
                                            time = dateString;
                                        }
                                    }
                                    return (
                                        <>
                                         {!showTime ? null:<div className='showDateInChat'><span>{time}</span></div>}
                                         <Chats msg = {msg} did = {did} noTail = {noTail} />
                                         
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
                            <label>
                                <i className="fa fa-2x fa-camera"></i>
                                <input
                                 type="file" 
                                 id = "inputTag"
                                 className = "chatBoxBottomInput"
                                 ref = {imageInputRef}
                                 accept="image/*"
                                 onChange = {handleFileInputChange}
                                 />
                            </label>
                            <label>
                                <i className="fa fa-link" aria-hidden="true"></i>
                                <input
                                 type="file" 
                                 id = "inputTag"
                                
                                 className = "chatBoxBottomInput"
                                 ref = {fileInputRef}
                                 onChange = {handleFileInputChange}
                                 />
                            </label>
                            
                            <div className='gifPicker'>
                                {isGifPickerOpened ?(
                                    <GifPicker
                                    setIsOpened = {setIsGifPickerOpened}
                                    onSelect = {sendGif}
                                    />
                                )
                                :
                                null
                                }
                                <button
                                    className='GifIcon_btn'
                                    onClick = {()=>setIsGifPickerOpened(true)}
                                    >
                                    <GifIcon/>
                                </button>
                            </div>
                            <textarea
                                className='chatMessageInput'
                                placeholder={hasIntent ? 'Text Message' : 'Write message to send intent...'}
                                onKeyDown =  {handleKeyPress}
                                onChange = {textOnChange}
                                value={newMessage}
                            >
                            </textarea>
                            {
                                hasIntent ? (
                                    <button className='emojiButton' onClick={() => setShowEmojis(!showEmojis)}>
                                        <i className="fa fa-smile" aria-hidden="true" ></i>
                                    </button>
                                ) :
                                    null
                            }
                            {showEmojis && hasIntent && <Picker
                                onEmojiClick={addEmoji}
                                pickerStyle={{ width: '20%', position: 'absolute', top: '13rem', zindex: '700', left: '60vw' }}
                            />}
                            {filesUploading ? (
                                <div className="imageloader">
                                <Loader type="Oval" color="#3467eb" height={20} width={20} />
                                </div>
                            ) : (
                                <button className='chatSubmitButton' onClick={handleSubmit}>
                                    <i className="fa fa-paper-plane" aria-hidden="true"></i>    
                                </button>
                            )}
                            
                        </div>
                    </>
                )
            }
        </div>
    )
}
export default ChatBox;
/*

 <InfiniteScroll
                            dataLength={messages.length as number}
                            next = {()=>setLimitCount((prev)=>prev+10)}
                            inverse
                            hasMore = {(messages.length as number) >= limitCount}
                            loader = {
                                <div className='beforeMessageLoader'>
                                    <Loader/>
                                </div>
                            }  
                            style = {{display:"flex" ,flexDirection:"column-reverse"}}
                             
                        >

                        </InfiniteScroll>
*/