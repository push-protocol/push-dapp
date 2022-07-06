import React, { useState,useContext} from 'react';
import SearchBar from '../searchBar/searchBar';
import IntentBar from '../intentBar/intentBar';
import './sidebar.css';
import { Feeds,Context } from '../w2wIndex';
import ProfileHeader from '../ProfileSection/ProfileHeader';
import Profile from '../ProfileSection/Profile';
import {
    Button,
  } from "components/SharedStyling";


const Sidebar = () => {
    const [chatselected, setChatselected] = useState(true);
    const {userProfile} = useContext(Context);
    const [showProfile,setShowProfile] = useState(false);
    const  [updateProfileImage,setUserProfileImage] = useState(userProfile);
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
                            <SearchBar/>
                        </div>
                    )
                    :
                    (
                        <div  className='sidebar_profile'>
                            <Profile 
                                profile_picture = {updateProfileImage} 
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
                {
                !showProfile 
                    ?
                    (
                        <div className='sidebar_search'>
                            <IntentBar />
                        </div>
                    )
                    :
                    (
                        <div  className='sidebar_profile'>
                            <Profile 
                                profile_picture = {updateProfileImage} 
                                updateProfile = {updateProfile}
                            />
                        </div>
                    )
                }
                
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