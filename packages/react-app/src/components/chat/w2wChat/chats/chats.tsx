import React from 'react';
import './w2wchats.css';
import { format } from 'timeago.js';
//@ts-ignore
import test from '../w2wAsset/test.jpg';

interface chatProps {
    time: any,
    text: string
}

export default function Chats(props: chatProps) {
    let time:Date = new Date(props?.time);
    let time1 = time.toLocaleTimeString('en-US');
    let date = time1.slice(0,-6)
    return (
        <>
        <div className = "chat">
            <div className='chatText'>
                <p >{props.text}</p>
                <span >{date}</span>
            </div>
            
        </div>
        
        </>
    )
}