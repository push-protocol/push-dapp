import React from 'react';
import './defaultMessage.css';

interface defaultMessageProp{
    name: string;
    avatar: string;
    time: string;
    lastMessage: string;
}
const DefaultMessage = (props: defaultMessageProp)=>{
    
    return(
        <div className='defaultMessage_body'>
            <div className='defaultMessage_1'>
                <div className='defaultMessage_2'>
                    <div className='defaultMessage_img'><img src={props.avatar}></img></div>
                    
                    <div className='defaultMessage_name'>{props.name}</div>
                    <div className='defaultMessage_time'>{props.time}</div>
                </div>
                <div className='defaultMessage_3'>
                    <div className='defaultMessage_lastMsg'>
                        {props.lastMessage}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DefaultMessage;