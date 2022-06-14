import React,{useState,useContext,useEffect,useRef,useCallback} from 'react';
import './chatBox.css';
import cn from 'classnames';
import {motion,AnimatePresence} from 'framer-motion';
//@ts-ignore
import defaultChat from '../w2wAsset/default.png';
import { Context } from '../w2wIndex';
import Chats from '../chats/chats';
//@ts-ignore
import test from '../w2wAsset/test.jpg';
import 'font-awesome/css/font-awesome.min.css';
//@ts-ignore
import epnsLogo from '../w2wAsset/epnsLogo.png';

import Picker from 'emoji-picker-react';
import {postMessageToServer,getArrivalMessage} from '../../../../helpers/w2wChatHelper';
import Dropdown from '../dropdown/dropdown';
interface Message {
    time: number,
    text: string,
    wallet: string,
    sent:Boolean
}

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
    const { currentChat, viewChatBox } = useContext(Context);
    const [newMessage, setNewMessage] = useState<string>("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [textAreaDisabled, setTextAreaDisabled] = useState<boolean>(true);
    const [showEmojis, setShowEmojis] = useState<boolean>(false);
    const myDid: string = '0x3efwrff434fsdf3443zxw123';
    const [messages, setMessages] = useState<Message[]>([{ time: Date.now(), text: "hello dfvbv everdtbrdtrbdbrdtbrdbbr ervgervsrgv servesrv ", wallet: "0y03faC3d...743" ,sent:true}
        , { time: Date.now(), text: "hi df erger erffwrf ergegr egevbv e12ewvvrrfetrbdbrdtbrdbbr ervgervsrgv servesrv ", wallet: "0x05faC3d...756",sent:true }
        , { time: Date.now(), text: "hi df erger erffwrf ergegr egevbv e12ewvvrrfetrbdbrdtbrdbbr ervgervsrgv servesrv ", wallet: "0x05faC3d...756",sent:true }
        , { time: Date.now(), text: "hi df erger erffwrf ergegr egevbv e12ewvvrrfetrbdbrdtbrdbbr ervgervsrgv servesrv ", wallet: "0x05faC3d...756",sent:false }
        , { time: Date.now(), text: "hi df erger erffwrf ergegr egevbv e12ewvvrrfetrbdbrdtbrdbbr ervgervsrgv servesrv ", wallet: "0x05faC3d...756" ,sent:false}
        , { time: Date.now(), text: "hi df erger erffwrf ergegr egevbv e12ewvvrrfetrbdbrdtbrdbbr ervgervsrgv servesrv ", wallet: "0x05faC3d...756",sent:false }
        , { time: Date.now(), text: "hi df erger erffwrf ergegr egevbv e12ewvvrrfetrbdbrdtbrdbbr ervgervsrgv servesrv ", wallet: "0x05faC3d...756" ,sent:true}
        , { time: Date.now(), text: "hi df erger erffwrf ergegr egevbv e12ewvvrrfetrbdbrdtbrdbbr ervgervsrgv servesrv ", wallet: "0x05faC3d...756" ,sent:true}
        , { time: Date.now(), text: "hi df erger erffwrf ergegr egevbv e12ewvvrrfetrbdbrdtbrdbbr ervgervsrgv servesrv ", wallet: "0x05faC3d...756",sent:false }
        , { time: Date.now(), text: "hi df erger erffwrf ergegr egevbv e12ewvvrrfetrbdbrdtbrdbbr ervgervsrgv servesrv ", wallet: "0x05faC3d...756",sent:true }
        , { time: Date.now(), text: "hi df erger erffwrf ergegr egevbv e12ewvvrrfetrbdbrdtbrdbbr ervgervsrgv servesrv ", wallet: "0x05faC3d...756",sent:false }
        , { time: Date.now(), text: "hi df erger erffwrf ergegr egevbv e12ewvvrrfetrbdbrdtbrdbbr ervgervsrgv servesrv ", wallet: "0x05faC3d...756" ,sent:true}
    ]);

    const scrollRef: any = useRef();
    /*useEffect(async ()=>{
        //const arrivalMessage = await getArrivalMessage();
        //setArrivalMessage(arrivalMessage.message);
    },[]);*/
    /* const CombinedDid = currentChat.did+myDid;
     
     useEffect( ()=>{
         (
             async ()=>{
                 const data =  await getPrevMessages(CombinedDid);
                 setMessages(data);
             }
         )();
     },[currentChat])
     */
    /*  useEffect(()=>{
         // arrivalMessage && 
         // setMessages((prev)=>[...prev,arrivalMessage]);
      },[arrivalMessage,currentChat])
      */
    useEffect(() => {
        //scrollRef.current?.scrollIntoView({behavior:"smooth"});
    }, [messages])

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (newMessage.trim() !== "") {
            const msg = { time: Date.now(), text: newMessage, wallet: "0y03faC3d...743",sent:true}
            // send msg to server
            const response = await postMessageToServer(Date.now(), newMessage, "0y03faC3d...743")
            console.log(msg);
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
                                messages.map((msg: { time: any; text: string; wallet: string;sent:boolean },i) => {
                                    const isLast = i === messages.length - 1
                                    console.log(isLast);
                                    const noTail = !isLast && messages[i + 1]?.sent === msg.sent
                                    return (
                                        <div ref={scrollRef} className = {cn("w2wmsgshared", msg.sent ? "w2wmsgsent" :"w2wmsgreceived",noTail && "w2wnoTail")}>
                                            <Chats time={msg.time} text={msg.text} wallet={msg.wallet} />
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
                                placeholder={currentChat.intent ? 'write something...' : 'Write message to send intent...'}
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
                            <button className='chatSubmitButton' onClick={handleSubmit} >{currentChat.intent ? 'Send' : 'send Intent'}</button>

                        </div>
                    </>
                )
            }

        </div>
    )

}
export default ChatBox;