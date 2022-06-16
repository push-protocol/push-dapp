import React, { useState, useEffect, useCallback, useContext } from 'react';
import './messageFeed.css';
import DefaultMessage from '../defaultMessage/defaultMessage';
import Loader from '../Loader/Loader';
import { getInbox } from '../../../../helpers/w2wChatHelper';
import { Context, Feeds } from '../w2wIndex';

interface messageFeedProps {
    filteredUserData: {}[],
    isValid:boolean,
    setChat: (arg0: any) => void
}

export interface InboxChat {
    name: string,
    avatar: string,
    timestamp: number,
    lastMessage: string
}

const MessageFeed = (props: messageFeedProps) => {
    const { did } = useContext(Context);
    const [feeds, setFeeds] = useState([]);
    const [inboxMessages, setInboxMessages] = useState<InboxChat[]>()
    const [messagesLoading, setMessagesLoading] = useState<boolean>(true);

    const fetchMyApi = useCallback(async () => {
        const inbox: Feeds[] = await getInbox(did.id);
        console.log(inbox);
        // filter out the feeds which have intent as approved
        const filteredFeeds = inbox.filter(feed => feed.intent === 'Approved');
        setFeeds(filteredFeeds);
    }, [])
    /*setInterval(()=>{
        const fetchMyApi = async () => {
            const inbox: Feeds[] = await getInbox(did.id);
            console.log(inbox,'hi');
            setFeeds(inbox);
        };
        fetchMyApi();
        
    },10000);*/
    useEffect(() => {
        console.log(props);
        if (!props.isValid) {
            fetchMyApi();
        }
        else {
            setFeeds(props.filteredUserData);
        }
        setMessagesLoading(false);
    }, [props.isValid,props.filteredUserData]);

    const setCurrentChat = (feed: any) => {
        props.setChat(feed);
    }

    return (
        <>
            <section className='messageFeed_body'>
                {(messagesLoading) && (
                    <div style={{ position: 'relative', textAlign: 'center', width: '100%', height: '100%' }}>
                        <Loader />
                    </div>
                ) }
                    {
                        (!feeds?.length && !messagesLoading) ? (
                            <p style={{ position: 'relative', textAlign: 'center', width: '100%', background: '#d2cfcf', padding: '10px' }}>
                                No Address found.
                            </p>
                        ) :
                            (!messagesLoading &&
                                <div>
                                    {feeds.map((feed: Feeds) => (
                                        <div key={feed.threadhash} onClick={() => { setCurrentChat(feed) }} >
                                            <DefaultMessage inbox={feed}/>
                                        </div>
                                    ))}
                                </div>
                            )
                    }
                
                
            </section>

        </>
    )

}

export default MessageFeed;