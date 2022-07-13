import React, { useState, useEffect, useCallback, useContext } from 'react';
import './messageFeed.css';
import DefaultMessage from '../defaultMessage/defaultMessage';
import Loader from '../Loader/Loader';
import { getLatestThreadhash } from '../../../../api/w2w';
import { Context, Feeds } from '../w2wIndex';
import { fetchMessagesFromIpfs, fetchInbox } from '../w2wUtils'
import { intitializeDb } from '../w2wIndexeddb';
import { useQuery } from "react-query";
import { useQuery } from "react-query";


interface messageFeedProps {
    filteredUserData: {}[],
    hasUserBeenSearched: boolean
}

export interface InboxChat {
    name: string,
    profile_picture: string,
    timestamp: number,
    lastMessage: string,
    messageType: string
}

const MessageFeed = (props: messageFeedProps) => {
    const { did, renderInboxFeed, setChat, currentChat } = useContext(Context);
    const [feeds, setFeeds] = useState<Array<{}>>([]);
    const [messagesLoading, setMessagesLoading] = useState<boolean>(true);

    const getInbox = useCallback(async () => {
        const getInbox: any = await intitializeDb<string>('Read', 2, 'Inbox', did.id, '', 'did');
        if (getInbox !== undefined) {
            setFeeds(getInbox.body);
            const inbox: Feeds[] = await fetchInbox(did);
            setFeeds(inbox);
            return inbox
        }
        else {
            const inbox: Feeds[] = await fetchInbox(did);
            setFeeds(inbox);
            return inbox
        }
    }, []);


    // const { data, error, isError, isLoading } = useQuery('current', getInbox, {
    //     refetchInterval: 5000,
    // })


    useEffect(() => {
        setFeeds(renderInboxFeed);
    }, [renderInboxFeed]);

    useEffect(() => {
        if (!props.hasUserBeenSearched) {
            getInbox();
        }
        else {
            const searchFn = async () => {
                if (props.filteredUserData.length) {
                    let inbox = await fetchMessagesFromIpfs(props.filteredUserData);
                    const threadhash = await getLatestThreadhash(inbox[0].did, did.id);
                    inbox = [{ ...inbox[0], threadhash }]
                    setFeeds(inbox);
                }
                else {
                    setFeeds([]);
                    console.log(props.filteredUserData, feeds);
                }
            }
            searchFn();
        }

        setMessagesLoading(false);
        // if (!props.hasUserBeenSearched) {
        //     const interval = setInterval(() => getInbox(), 5000)
        //     return () => {
        //         clearInterval(interval)
        //     }
        // }
    }, [props.hasUserBeenSearched, props.filteredUserData]);

    const setCurrentChat = (feed: any) => {
        setChat(feed);
    }




    return (
        <>
            <section className='messageFeed_body'>
                {!feeds?.length && (messagesLoading) && (
                    <div style={{ position: 'relative', textAlign: 'center', width: '100%', height: '100%' }}>
                        <Loader />
                    </div>
                )}
                {
                    (!feeds?.length && !messagesLoading)
                        ?
                        (
                            <p style={{ position: 'relative', textAlign: 'center', width: '100%', background: '#d2cfcf', padding: '10px' }}>
                                No Address found.
                            </p>
                        )
                        :
                        (
                            !messagesLoading ?
                                <div>
                                    {feeds.map((feed: Feeds) => (
                                        <div key={feed.threadhash} onClick={() => { setCurrentChat(feed) }}>
                                            <DefaultMessage inbox={feed} />
                                        </div>
                                    ))}
                                </div>
                                :
                                null
                        )
                }
            </section>
        </>
    )
}

export default MessageFeed;