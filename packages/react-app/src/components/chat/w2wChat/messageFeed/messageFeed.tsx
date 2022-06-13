import React, { useState, useEffect, useCallback, useContext } from 'react';
import './messageFeed.css';
import DefaultMessage from '../defaultMessage/defaultMessage';
import Loader from '../Loader/Loader';
//@ts-ignore
import { getInbox } from '../../../../helpers/w2wChatHelper';
import { createIPFSClient, get, store } from '../../../../helpers/w2w/IPFS';
import { DID } from 'dids';
import { Context } from '../w2wIndex';

interface messageFeedProps {
    filteredUserData: {}[],
    setChat: (arg0: any) => void
}

interface Feeds {
    name: string,
    lastMessage: string,
    profile_picture: string,
    time: string,
    intent: Boolean
}

const MessageFeed = (props: messageFeedProps) => {
    const { did } = useContext(Context);
    const [feeds, setFeeds] = useState([]);
    const [messagesLoading, setMessagesLoading] = useState<boolean>(true);

    const fetchMyApi = useCallback(async () => {
        const response = await getInbox(did.id);
        setFeeds(response);
        setMessagesLoading(true);
    }, [])

    useEffect(() => {
        if (!props.filteredUserData?.length) {
            fetchMyApi();
        }
        else {
            setFeeds(props.filteredUserData);
        }
        setMessagesLoading(false);

    }, [props.filteredUserData]);

    const setCurrentChat = (feed: any) => {
        feed = { ...feed, intent: true }
        props.setChat(feed);
    }

    return (
        <>
            <section className='messageFeed_body'>
                {(!messagesLoading) ? (
                    <div style={{ position: 'relative', textAlign: 'center', width: '100%', height: '100%' }}>
                        <Loader />
                    </div>
                ) :
                    (
                        (!feeds?.length) ? (
                            <p style={{ position: 'relative', textAlign: 'center', width: '100%', background: '#d2cfcf', padding: '10px' }}>
                                No Address found.
                            </p>
                        ) :
                            (
                                <div>
                                    {feeds.map((feed: Feeds) => (
                                        <div onClick={() => { setCurrentChat(feed) }} >
                                            <DefaultMessage
                                                name={feed.name.split('-').toString().replace(/,/g, " ").charAt(0).toUpperCase() + feed.name.split('-').toString().replace(/,/g, " ").slice(1)}
                                                lastMessage={feed.lastMessage}
                                                time={feed.time}
                                                avatar={feed.profile_picture}
                                            />
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
export default MessageFeed;