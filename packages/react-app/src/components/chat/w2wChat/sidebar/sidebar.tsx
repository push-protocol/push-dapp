import React,{useState} from 'react';
import SearchBar from '../searchBar/searchBar';
import './sidebar.css';

const Sidebar = (props)=>{
    
   // const [searching,setIsSearching] = useState(false);
    //const [walletsData,setWalletData] = useState([]);
    /*const searchWallets = (data: string | any[])=>{
       
        if(data.length)
        {
            setIsSearching(true);
        }
        else{
            setIsSearching(false);
        }
       
       
    }*/
    return (
        <div className='sidebar_body'>
            <div className='sidebar_search'>
                <SearchBar setChat = {props.setChat}/>
            </div>
        </div>
    );
}

export default Sidebar;