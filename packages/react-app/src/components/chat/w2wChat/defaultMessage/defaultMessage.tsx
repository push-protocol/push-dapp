import React, { useEffect, useState } from 'react';
import { InboxChat } from '../messageFeed/messageFeed';
import { Feeds } from '../w2wIndex';
import './defaultMessage.css';
import * as IPFSHelper from '../../../../helpers/w2w/IPFS'
import { IPFSHTTPClient } from 'ipfs-http-client';
import { MessageIPFS } from '../../../../helpers/w2w/IPFS';

const DefaultMessage = (props: { inbox: Feeds }) => {
    const [inboxMessage, setInboxMessage] = useState<InboxChat>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function resolveThreadHash() {
            if (props.inbox?.threadhash) {
                const IPFSClient: IPFSHTTPClient = IPFSHelper.createIPFSClient();
                const current = await IPFSHelper.get(props.inbox.threadhash, IPFSClient);
                const msgIPFS: MessageIPFS = current as MessageIPFS
                const msg: InboxChat = {
                    name: props.inbox.name.split('-').toString().replace(/,/g, " ").charAt(0).toUpperCase() + props.inbox.name.split('-').toString().replace(/,/g, " ").slice(1),
                    avatar: props.inbox.profile_picture,
                    lastMessage: msgIPFS.messageContent,
                    timestamp: msgIPFS.timestamp
                };
                console.log(msg);
                setInboxMessage(msg);
                setLoading(false);
            }
        }
        resolveThreadHash()
    }, [])

    return(
        (loading) ?
            (<div>loading</div >) :
            <div className='defaultMessage_body' >
                <div className='defaultMessage_1'>
                    <div className='defaultMessage_2'>
                        <div className='defaultMessage_img'><img src={inboxMessage.avatar}></img></div>

                        <div className='defaultMessage_name'>{inboxMessage.name}</div>
                        <div className='defaultMessage_time'>{inboxMessage.timestamp}</div>
                    </div>
                    <div className='defaultMessage_3'>
                        <div className='defaultMessage_lastMsg'>
                            {inboxMessage.lastMessage}
                        </div>
                    </div>
                </div>
            </div >
    );
}

export default DefaultMessage;