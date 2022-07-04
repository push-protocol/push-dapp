import React, { useState, useEffect, useCallback, useContext } from 'react';
import './intentFeed.css';
import DefaultIntent from '../defaultIntent/defaultIntent';
import Loader from '../Loader/Loader';
import { getInbox } from '../../../../helpers/w2wChatHelper';
import { Context, Feeds } from '../w2wIndex';
import {fetchMessagesFromIpfs,fetchInbox} from '../w2wUtils';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { approveIntent } from '../../../../helpers/w2wChatHelper';
import {
    Section,
    Content,
    Item,
    H3,
    Span,
  } from "components/SharedStyling";
import { varint } from 'multiformats';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface intentFeedProps {
    filteredUserData: {}[],
    setChat: (arg0: any) => void
}

export interface InboxChat {
    name: string,
    avatar: string,
    timestamp: number,
    lastMessage: string
}

const IntentFeed = (props: intentFeedProps) => {
    console.log("Printing filtered user data in intentfeed component");
    console.log(props.filteredUserData);
    const { did } = useContext(Context);
    const [feeds, setFeeds] = useState([]);
    const [inboxMessages, setInboxMessages] = useState<InboxChat[]>()
    const [messagesLoading, setMessagesLoading] = useState<boolean>(false);
    const [showSentIntent, setShowSentIntent] = useState(true);
    const [showReceivedIntent, setShowReceivedIntent] = useState(false);
    const [sentIntents, setSentIntents] = useState([]);
    const [receivedIntents, setReceivedIntents] = useState([]);
    const [open, setOpen] = useState(false);
    const [receivedIntentFrom, setReceivedIntentFrom] = useState();
    const [intentMessage, setIntentMessage] = useState();

    const [toDID, settoDID] = useState();
  
    const handleClose = () => {
        setOpen(false);
    };
        
    const handleOpen = () => {
        setOpen(true);
    };

    async function resolve_threadhash(intents){
        var updated_intents = await fetchMessagesFromIpfs(intents);
        var allIntents:any = updated_intents;
        var sentIntents=[], receivedIntents = [];
        for(var i=0; i<allIntents.length; i++){
            if(allIntents[i].intent_sent_by === did.id){
                sentIntents.push(allIntents[i]);
            }
            else{
                receivedIntents.push(allIntents[i]);
            }
        }
        setSentIntents(sentIntents);
        setReceivedIntents(receivedIntents);
        console.log("Sent intents");
        console.log(sentIntents);
        console.log("Received Intents");
        console.log(receivedIntents);
    }
    
    useEffect(() => {
        var allIntents:any = props.filteredUserData;
        resolve_threadhash(allIntents); 
    }, [props.filteredUserData]);

    const setCurrentChat = (feed: any) => {
        props.setChat(feed);
    }

    function showModal(intentFrom, intentMsg, todid){
        setReceivedIntentFrom(intentFrom);
        setIntentMessage(intentMsg);
        settoDID(todid);
        handleOpen();
    }

    async function ApproveIntent(status){
        var fromDID = did.id;
        const res =  await approveIntent(toDID, fromDID, status, "signature");
        console.log(res);
        handleClose();
    }

    function displaySentIntents(){
        if(showSentIntent==true){
            return (
                <>
                    {
                        (!sentIntents?.length) ? (
                            <p style={{ position: 'relative', textAlign: 'center', width: '100%', background: '#d2cfcf', padding: '10px' }}>
                                No sent intents !
                            </p>
                        ) :
                            (
                                <>
                                <div> 
                                    <h1 style={{color:"black", fontSize:"smaller", padding:"2%"}}>Displaying Sent intents</h1>
                                    <hr/>
                                </div>

                                <div>
                                    {sentIntents.map((intent: any) => (
                                        <div key={intent.threadhash} onClick={() => { setCurrentChat(intent) }} >
                                            <DefaultIntent inbox={intent}/>
                                        </div>
                                    ))}
                                </div>
                                </>
                            )
                    }

                </>
            )
        }
    }

    function displayReceivedIntents(){
        if(showReceivedIntent==true){
            return (
                <>
                    {
                        (!receivedIntents?.length) ? (
                            <p style={{ position: 'relative', textAlign: 'center', width: '100%', background: '#d2cfcf', padding: '10px' }}>
                                No received intents !
                            </p>
                        ) :
                            (
                                <>
                                <div> 
                                    <h1 style={{color:"black", fontSize:"smaller", padding:"2%"}}>Displaying Received intents</h1>
                                    <hr/>
                                </div>

                                <div>
                                    {receivedIntents.map((intent: any) => (
                                        <div key={intent.threadhash} onClick={() => {showModal(intent.wallets, intent.msg.lastMessage, intent.intent_sent_by)}} >
                                            <DefaultIntent inbox={intent}/>
                                        </div>
                                    ))}
                                </div>
                                </>
                            )
                    }

                </>
            )
        }
    }

    function viewSentIntents(){
        setShowReceivedIntent(false);
        setShowSentIntent(true);
    }

    function viewReceivedIntents(){
        setShowSentIntent(false);
        setShowReceivedIntent(true);
    }

    return (
        <>
            <section className='messageFeed_body'>
            <div className='intentFilter_buttons' style={{width:"100%"}}>
                <Button style={{width:"50%", display:"inline-block", color:"black"}} onClick={viewSentIntents}> Sent </Button>
                <Button style={{width:"50%", display:"inline-block", color:"black"}} onClick={viewReceivedIntents}> Received </Button>
            </div>

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Approve or Reject your Intent
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                You have received an intent from {receivedIntentFrom}. Intent Message: {intentMessage}.
            </Typography>
            <Button onClick={()=>{ApproveIntent("Approved")}}>Approve</Button>
            <Button onClick={()=>{ApproveIntent("Rejected")}}>Reject</Button>
            </Box>
        </Modal>

            {displaySentIntents()}
            {displayReceivedIntents()}
            </section>
        </>
    )

}

export default IntentFeed;