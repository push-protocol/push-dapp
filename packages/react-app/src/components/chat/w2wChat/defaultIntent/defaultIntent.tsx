import React from 'react';
import { Feeds } from '../w2wIndex';
import './defaultIntent.css';

const DefaultIntent = (props: any) => {
    // printing default message props
    console.log("Printing Default intent props");
    console.log(props);

    let date = null;

    if (props.inbox?.intent_timestamp !== null) {
        let time = new Date(props.inbox?.intent_timestamp);
        date = time.toLocaleTimeString('en-US').slice(0, -6) + time.toLocaleTimeString('en-US').slice(-2,);
    }


    let walletAddress = props.inbox.msg.name.split(':').at(-1).slice(0, 19)
    let fh = walletAddress.slice(0, 6);
    let sh = walletAddress.slice(-6);
    let final = fh + "...." + sh;

    return (
        <div className='message_body' >
            <div className='message_content'>
                <img src={props.inbox.profile_picture} className='message_content_img'></img>

                <div className='message_content_body'>
                    <div className='message_name'>{final}</div>

                    <div className='message_lastMsg'>
                        {props.inbox.msg.lastMessage}
                    </div>
                </div>

                <div className='message_content_time'>{date}</div>
            </div>

            {/* <div className='defaultMessage_1'>
                <div className='defaultMessage_2'>
                    <div className='defaultMessage_img'><img src={props.inbox.profile_picture}></img></div>

                    <div className='defaultMessage_name'>{props.inbox.msg.name.split(':').at(-1).slice(0, 19) + '...'}</div>
                    <div className='defaultMessage_time'>{date}</div>
                </div>
                <div className='defaultMessage_3'>
                    <div className='defaultMessage_lastMsg'>
                        {props.inbox.msg.lastMessage}
                    </div>
                </div>
            </div> */}
        </div >
    );
}

export default DefaultIntent;