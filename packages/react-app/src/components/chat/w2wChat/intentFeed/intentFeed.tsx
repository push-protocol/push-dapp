import React, { useState, useEffect, useCallback, useContext } from 'react';
import './intentFeed.css';
import DefaultMessage from '../defaultMessage/defaultMessage';
import Loader from '../Loader/Loader';
import { getInbox } from '../../../../helpers/w2wChatHelper';
import { Context, Feeds } from '../w2wIndex';
import {
    Section,
    Content,
    Item,
    H3,
    Span,
    Button,
  } from "components/SharedStyling";


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
    console.log("Printing props data");
    console.table(props.filteredUserData);
    const { did } = useContext(Context);
    const [feeds, setFeeds] = useState([]);
    const [inboxMessages, setInboxMessages] = useState<InboxChat[]>()
    const [messagesLoading, setMessagesLoading] = useState<boolean>(true);

    const fetchMyApi = useCallback(async () => {
        const inbox: Feeds[] = await getInbox(did.id);
        console.log("Printing inbox");
        console.table(inbox);
        // filter out the feeds which have intent as approved
        const filteredFeeds = inbox.filter(feed => feed.intent === 'Pending');
        setFeeds(filteredFeeds);
        setMessagesLoading(true);
    }, [])

    useEffect(() => {
        if (!props.filteredUserData?.length) {
            fetchMyApi();
        }
        else {  
            console.log("Setting through props");
            setFeeds(props.filteredUserData);
        }
        setMessagesLoading(false);
    }, [props.filteredUserData]);

    const setCurrentChat = (feed: any) => {
        props.setChat(feed);
    }

    return (
        <>
            <section className='messageFeed_body'>
            <div className='intentFilter_buttons' style={{width:"100%"}}>
                <Button style={{width:"50%", display:"inline-block", color:"black"}}> Sent </Button>
                <Button style={{width:"50%", display:"inline-block", color:"black"}}> Received </Button>
            </div>
                {(!messagesLoading) ? (
                    <div style={{ position: 'relative', textAlign: 'center', width: '100%', height: '100%' }}>
                        <Loader />
                    </div>
                ) :
                    (
                        (!feeds?.length) ? (
                            <p style={{ position: 'relative', textAlign: 'center', width: '100%', background: '#d2cfcf', padding: '10px' }}>
                                No intents found from given address.
                            </p>
                        ) :
                            (
                                <div>
                                    {feeds.map((feed: Feeds) => (
                                        <div key={feed.threadhash} onClick={() => { setCurrentChat(feed) }} >
                                            <DefaultMessage inbox={feed}/>
                                        </div>
                                    ))}
                                </div>
                            )
                    )
                }
            </section>

        </>
    )

}

export default IntentFeed;