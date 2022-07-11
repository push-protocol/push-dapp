import React, { useState, useContext, useEffect, useRef, ChangeEvent, FC } from 'react';
import './chatBox.css';
import cn from 'classnames';
// @ts-ignore
import epnsLogo from '../w2wAsset/epnsLogo.png';
import { Context } from '../w2wIndex';
import Chats from '../chats/chats';
import { CID } from 'ipfs-http-client';
// @ts-ignore
import 'font-awesome/css/font-awesome.min.css';
import Picker from 'emoji-picker-react';
import { postMessage, getIntent, getDidLinkWallets, getLatestThreadhash, createIntent } from '../../../../helpers/w2wChatHelper';
import Dropdown from '../dropdown/dropdown';
import { intitializeDb } from '../w2wIndexeddb';
import * as IPFSHelper from '../../../../helpers/w2w/IPFS';
import { IPFSHTTPClient } from 'ipfs-http-client';
import { MessageIPFS } from '../../../../helpers/w2w/IPFS';
import Loader from "react-loader-spinner";
import GifIcon from '../W2WIcons/GifIcon';
import { Web3Provider } from "ethers/providers";
import { useWeb3React } from "@web3-react/core";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { fetchInbox, fetchIntent } from '../w2wUtils';
import GifPicker from '../Gifs/gifPicker';
import * as PGP from '../../../../helpers/w2w/PGP';
import * as DIDHelper from '../../../../helpers/w2w/Did';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ChatBox = () => {
    const { account } = useWeb3React<Web3Provider>();
    const { currentChat, viewChatBox, did, renderInbox, connectedUser } = useContext(Context);
    const [newMessage, setNewMessage] = useState<string>("");
    const [textAreaDisabled, setTextAreaDisabled] = useState<boolean>(false);
    const [showEmojis, setShowEmojis] = useState<boolean>(false);
    const [messages, setMessages] = useState<MessageIPFS[]>([]);
    const [imageSource, setImageSource] = useState<string>('');
    const [hasIntent, setHasIntent] = useState<boolean>(true);
    const [wallets, setWallets] = useState<string[]>([]);
    const [blockUserOpt, setBlockUserOpt] = useState<boolean>(false);
    const [filesUploading, setFileUploading] = useState<boolean>(false);
    const imageInputRef = useRef<HTMLInputElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isGifPickerOpened, setIsGifPickerOpened] = useState<boolean>(false);
    const [intentSentandPending, setIntentSentandPending] = useState<string>("");
    const [openReprovalSnackbar, setOpenSuccessSnackBar] = useState<boolean>(false);
    let showTime = false;
    let time: string = "";
    const getMessagesFromCID = async (messageCID: string, ipfs: IPFSHTTPClient): Promise<void> => {
        if (!messageCID) {
            return;
        }
        setMessages([]);
        while (messageCID) {
            const getMessage:any = await intitializeDb<string>('Read', 2, 'CID_store', messageCID, '', 'cid');

            let msgIPFS: MessageIPFS;
            if (getMessage !== undefined) {
                msgIPFS = getMessage.body;
            }
            else {
                const current = await IPFSHelper.get(messageCID, ipfs);//{}
                console.log(current);
                await intitializeDb<MessageIPFS>('Insert', 2, 'CID_store', messageCID, current, 'cid');
                msgIPFS = current as MessageIPFS
            }
            setMessages(m => [msgIPFS, ...m])

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
            setNewMessage("");
            let hasintent = false;
            if (currentChat) {
                try {
                    const cid = CID.parse(currentChat.profile_picture);
                    setImageSource(`https://ipfs.infura.io/ipfs/${currentChat.profile_picture}`)
                }
                catch (err) {
                    setImageSource(currentChat.profile_picture);
                }
                if (currentChat?.did === did.id) {
                    setHasIntent(true);
                }
                else {
                    const intentStatus = await getIntent(currentChat.did, did.id);
                    setIntentSentandPending(intentStatus.intent);
                    console.log(intentStatus);
                    hasintent = intentStatus.hasIntent;
                    setHasIntent(intentStatus.hasIntent);
                }
                if (currentChat?.threadhash && hasintent) {

                    const IPFSClient: IPFSHTTPClient = IPFSHelper.createIPFSClient();
                    await getMessagesFromCID(currentChat.threadhash, IPFSClient);
                }
                else {
                    setMessages([]);
                }
                const res = await getDidLinkWallets(currentChat.did);
                setWallets(res);
            }
        }
        getMessagesFromIPFS().catch(err => console.error(err));
    }, [currentChat]);

    const sendMessage = async (account: string, fromDid: string, toDid: string, message: string, messageType: string, signature: string) => {
        try {
            console.log('connectedUser', connectedUser);
            console.log('currentChat', currentChat);
            console.log('Public Key from Current Chat: ', currentChat.public_key);
            // const fromPGPPrivateKey: string = await DIDHelper.decrypt(JSON.parse(connectedUser.pgp_priv_enc), did);
            // const cipherText: string = await PGP.encryptMessage(message, currentChat.public_key, fromPGPPrivateKey) as string;
            const cipherText = message;
            const msg = await postMessage(account, fromDid, toDid, cipherText, messageType, signature);
            setMessages([...messages, msg]);
            setNewMessage("");
            const threadhash = await getLatestThreadhash(currentChat.did, did.id);
            await intitializeDb<MessageIPFS>('Insert', 2, 'CID_store', threadhash, msg, 'cid');
            const inbox = await fetchInbox(did);
            renderInbox(inbox);
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (newMessage.trim() !== "") {
            if (hasIntent && intentSentandPending === 'Approved') {
                sendMessage(account, did.id, currentChat.did, newMessage, 'Text', 'signature');
            }
            else {
                sendIntent();
            }
        }
    }

    const sendIntent = async () => {
        try {
            if (!hasIntent && intentSentandPending === "Pending") {
                const msg = await createIntent(currentChat.did, did.id, account, newMessage, 'signature');
                console.log(msg);
                setHasIntent(true);
                setMessages([...messages, msg]);
                setNewMessage("");
                const intent = fetchIntent(did);
                console.log(intent);
            }
            else {
                setNewMessage("");
                setOpenSuccessSnackBar(true);
            }
        }
        catch (error) {
            console.log(error)
        }

    }
    const handleKeyPress = (e) => {
        const x = e.keyCode;
        if (x === 13) {
            handleSubmit(e);
        }
    }

    const textOnChange = (e) => {
        setNewMessage(e.target.value);

    }
    const uploadFile = async (file: File) => {
        try {
            const TWENTY_MB = 1024 * 1024 * 20;
            if (file.size > TWENTY_MB) {
                return;
            }
            setFileUploading(true);
            const IPFSClient: IPFSHTTPClient = IPFSHelper.createIPFSClient();
            const type = file.type.startsWith("image") ? "Image" : "File";
            let content: string;
            console.log(file);
            if (type === 'File') {
                let reader = new FileReader();
                let resultingfile;
                reader.readAsDataURL(file);
                reader.onloadend = async (e) => {

                    resultingfile = { content: e.target.result, name: file.name, type: file.type, size: file.size }
                    console.log(resultingfile);
                    sendMessage(account, did.id, currentChat.did, JSON.stringify(resultingfile), type, 'sig');
                    setFileUploading(false);
                }
            }
            else {
                const cid = await IPFSHelper.uploadImage(file, IPFSClient);
                content = cid;
                sendMessage(account, did.id, currentChat.did, content.toString(), type, 'sig');
                setFileUploading(false);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file)
            uploadFile(file);
    }
    const addEmoji = (e, emojiObject: { emoji: any }) => {
        setNewMessage(newMessage + emojiObject.emoji);
        setShowEmojis(false);
    }

    const sendGif = (url: string) => {
        console.log(url);
        sendMessage(account, did.id, currentChat.did, url, 'Gif', 'signature');
    }
    const handleCloseSuccessSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSuccessSnackBar(false);
    };
    const placeholderTextArea = () => {
        if (intentSentandPending === "Pending" && hasIntent === true)
            return "Can't send any messages until intent is accepted !";
        if (hasIntent === true && intentSentandPending === 'Approved')
            return "New Text Message";
        else
            return "Intent Message";
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
                        <Snackbar open={openReprovalSnackbar} autoHideDuration={6000} onClose={handleCloseSuccessSnackbar}>
                            <Alert onClose={handleCloseSuccessSnackbar} severity="error" sx={{ width: '100%' }}>
                                Cannot send message, Intent is not approved!
                            </Alert>
                        </Snackbar>
                        <div className='chatBoxNavBar'>
                            <div className='chatBoxUserName'>
                                <img
                                    src={imageSource}
                                    alt=""
                                />
                                <div className='chatBoxNavDetail'>
                                    <p className='chatBoxWallet'>{currentChat.msg.name.split(':').at(-1)}</p>
                                    <div>
                                        {hasIntent ? (
                                            <Dropdown wallets={wallets} />
                                        ) :
                                            null
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='chatBoxEpnsLogo'>
                                <i className="fa fa-ellipsis-v" aria-hidden="true" onClick={() => setBlockUserOpt(!blockUserOpt)}></i>
                                {blockUserOpt
                                    ?
                                    <div className="blockUserDropdown">
                                        Block User
                                    </div>
                                    :
                                    null
                                }
                            </div>
                        </div>

                        <div className='chatBoxTop' ref={scrollRef}>
                            {hasIntent ? (
                                messages.map((msg, i) => {
                                    const isLast = i === messages.length - 1
                                    const noTail = !isLast && messages[i + 1]?.fromDID === msg.fromDID
                                    let time1: string = "";
                                    if (i > 0) {
                                        time1 = time
                                    }
                                    showTime = false;
                                    if (i >= 0) {
                                        let duration = new Date(messages[i]?.timestamp);
                                        let dateString = duration.toDateString();
                                        if (dateString !== time || i === 0) {
                                            showTime = true;
                                            time = dateString;
                                        }
                                    }
                                    return (
                                        <>
                                            {!showTime ? null : <div className='showDateInChat'><span>{time}</span></div>}
                                            <Chats msg={msg} did={did} noTail={noTail} />
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
                            {intentSentandPending === 'Approved' && hasIntent
                                ?
                                (
                                    <>
                                        <label>
                                            <i className="fa fa-2x fa-camera"></i>
                                            <input
                                                type="file"
                                                id="inputTag"
                                                className="chatBoxBottomInput"
                                                ref={imageInputRef}
                                                accept="image/*"
                                                onChange={handleFileInputChange}
                                            />
                                        </label>
                                        <label>
                                            <i className="fa fa-link" aria-hidden="true"></i>
                                            <input
                                                type="file"
                                                id="inputTag"

                                                className="chatBoxBottomInput"
                                                ref={fileInputRef}
                                                onChange={handleFileInputChange}
                                            />
                                        </label>

                                        <div className='gifPicker'>
                                            {isGifPickerOpened ? (
                                                <GifPicker
                                                    setIsOpened={setIsGifPickerOpened}
                                                    onSelect={sendGif}
                                                />
                                            )
                                                :
                                                null
                                            }
                                            <button
                                                className='GifIcon_btn'
                                                onClick={() => setIsGifPickerOpened(true)}
                                            >
                                                <GifIcon />
                                            </button>
                                        </div>
                                    </>
                                )
                                :
                                (
                                    null
                                )
                            }
                            <textarea
                                disabled={textAreaDisabled}
                                className='chatMessageInput'
                                placeholder={placeholderTextArea()}
                                onKeyDown={handleKeyPress}
                                onChange={textOnChange}
                                value={newMessage}
                            >
                            </textarea>
                            {
                                hasIntent ? (
                                    <button disabled={textAreaDisabled} className='emojiButton' onClick={() => setShowEmojis(!showEmojis)}>
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
