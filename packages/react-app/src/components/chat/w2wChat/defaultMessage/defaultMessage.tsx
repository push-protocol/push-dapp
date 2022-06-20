import React, { useEffect, useState } from 'react';
import { InboxChat } from '../messageFeed/messageFeed';
import { Feeds } from '../w2wIndex';
import './defaultMessage.css';

const DefaultMessage = (props: { inbox: Feeds }) => {
    let date=null;
    if(props.inbox?.msg.timestamp!==null)
    {
        let time = new Date(props.inbox?.msg?.timestamp);
        date = time.toLocaleTimeString('en-US').slice(0,-6);
    }

    return(
            <div className='defaultMessage_body' >
                <div className='defaultMessage_1'>
                    <div className='defaultMessage_2'>
                        <div className='defaultMessage_img'><img src={props.inbox.profile_picture}></img></div>

                        <div className='defaultMessage_name'>{props.inbox.msg.name}</div>
                        <div className='defaultMessage_time'>{date}</div>
                    </div>
                    <div className='defaultMessage_3'>
                        <div className='defaultMessage_lastMsg'>
                            {props.inbox.msg.lastMessage}
                        </div>
                    </div>
                </div>
            </div >
    );
}

export default DefaultMessage;