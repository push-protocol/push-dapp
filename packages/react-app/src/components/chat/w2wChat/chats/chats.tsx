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
   
    return (
        <>
        <div className = "chat">
            <div className='chatText'>
                <p >{props.text}</p>
                <span >10:00 PM</span>
            </div>
            
        </div>
        
        </>
    )
}