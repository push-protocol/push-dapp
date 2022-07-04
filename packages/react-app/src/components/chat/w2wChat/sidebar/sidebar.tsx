import React, { useState } from 'react';
import SearchBar from '../searchBar/searchBar';
import IntentBar from '../intentBar/intentBar';
import './sidebar.css';
import { Feeds } from '../w2wIndex';
import ProfileHeader from '../ProfileSection/ProfileHeader';
import Profile from '../ProfileSection/Profile';
import {
    Button,
  } from "components/SharedStyling";

interface sideBarPropsType{
  userProfile:string,
  userWallets:string,
  renderInbox:(args:Array<{}>)=>void,
  setChat:(text:Feeds)=>void
} 
const Sidebar = (props:sideBarPropsType) => {
    const [chatselected, setChatselected] = useState(true);
    const [showProfile,setShowProfile] = useState(false);
    const  [updateProfileImage,setUserProfileImage] = useState(props.userProfile);
    const updateProfile =(image:string)=>{
        setUserProfileImage(image);
    }
    function renderselected(){
        
        if(chatselected){
            return (
                <>
                <div className='userProfileBar'>
                    <ProfileHeader 
                        setProfile = {setShowProfile} 
                        profile_picture = {updateProfileImage} 
                    />
                </div>
                {
                    !showProfile 
                    ?
                    (
                        <div className='sidebar_search'>
                            <SearchBar 
                                setChat = {props.setChat} 
                                renderInbox = {props.renderInbox}
                            />
                        </div>
                    )
                    :
                    (
                        <div  className='sidebar_profile'>
                            <Profile 
                                profile_picture = {updateProfileImage} 
                                wallets = {props.userWallets} 
                                updateProfile = {updateProfile}
                            />
                        </div>
                    )
                }
                </>
            )
        }
        else {
            return (
                <>
                <div className='userProfileBar'>
                    <ProfileHeader
                        setProfile = {setShowProfile} 
                        profile_picture = {updateProfileImage} 
                    />
                </div>
                <div className='sidebar_search'>
                    <IntentBar setChat = {props.setChat}/>
                </div>
                </>
            )
        }
    }

    function showChats() {
        setChatselected(true);
    }

    function showIntents() {
        setChatselected(false);
    }

    return (
        <>
            <div className='sidebar_body'>
                {renderselected()}
                <div className='sidebar_bottom'>
                    <Button style={{ color: "black" }} className="sidebar_bottom_button" onClick={showChats}>Chats</Button>
                    <Button style={{ color: "black" }} className="sidebar_bottom_button" onClick={showIntents}>Intents</Button>
                </div>
            </div>
        </>
    );
}

export default Sidebar;