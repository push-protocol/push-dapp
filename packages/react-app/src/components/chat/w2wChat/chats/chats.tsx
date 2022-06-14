import React from 'react';
import './w2wchats.css';
//@ts-ignore
import {format} from 'timeago.js';
//@ts-ignore
import test from '../w2wAsset/test.jpg';

interface chatProps{
    wallet:string,
    time:any,
    text:string
}
export default function Chats(props: chatProps) {
    return (
        <div className = "chat">
            <div className='chatText'>
                <p >{props.text}</p>
            </div>
            
        </div>
    )
}