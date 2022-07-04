import React from 'react';
import { Feeds } from '../w2wIndex';
import './defaultIntent.css';

const DefaultIntent = (props: any) => {
    // printing default message props
    console.log("Printing Default intent props");
    console.log(props);
    
    let date=null;
   
    if(props.inbox?.intent_timestamp!==null)
    {
        let time = new Date(props.inbox?.intent_timestamp);
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

export default DefaultIntent;