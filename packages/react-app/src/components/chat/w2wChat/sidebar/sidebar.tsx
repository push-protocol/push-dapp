import React from 'react';
import SearchBar from '../searchBar/searchBar';
import './sidebar.css';
import { Feeds } from '../w2wIndex'

const Sidebar = (props: { setChat: (text: Feeds) => void; }) => {
    return (
        <div className='sidebar_body'>
            <div className='sidebar_search'>
                <SearchBar setChat = {props.setChat}/>
            </div>
        </div>
    );
}

export default Sidebar;