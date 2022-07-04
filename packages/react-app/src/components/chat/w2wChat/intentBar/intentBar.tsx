import React,{useEffect, useState,useCallback,useContext} from 'react';
import './intentBar.css';

import { Web3Provider } from "ethers/providers";
import { useWeb3React } from "@web3-react/core";

// @ts-ignore
import SearchIcon from "@material-ui/icons/Search";

// @ts-ignore
import CloseIcon from "@material-ui/icons/Close";
import IntentFeed from '../intentFeed/intentFeed';
import { getAllWallets } from '../../../../helpers/w2wChatHelper';
import { getIntents } from '../../../../helpers/w2wChatHelper';
import Web3 from 'web3';
import {Context, Feeds} from '../w2wIndex';
import {
    Section,
    Content,
    Item,
    H3,
    Span,
    Button,
  } from "components/SharedStyling";


const IntentBar = (props: { setChat: any; }) => {
    const { did } = useContext(Context);
    const { connector, chainId } = useWeb3React<Web3Provider>();
    const { getLinkWallets } = useContext(Context);
    const [wordEntered, setWordEntered] = useState<string>('');
    const [allUsers, setAllUsers] = useState([]);
    const [allIntents, setAllIntents] = useState([]);
    const [filteredUserData, setFilteredUserData] = useState<any>([]);
    

    const getAllIntents = useCallback(async() => {
        const responseData = await getIntents(did.id);
        setAllIntents(responseData);
        setFilteredUserData(responseData);
    }, []);

    useEffect(() => {
    }, []);


    return (
        <div className="search" >
            <div className='intentFilter_buttons' style={{color:"black", width:"100%", fontSize:"20px"}}>
                <h1 style={{color:"black", fontSize:"large", padding:"2%"}}>Intents</h1>
            </div>
            
            <div className='sidebar_message'>
                {<IntentFeed filteredUserData={filteredUserData} setChat={props.setChat} />}
            </div>
        </div>
    );
};

export default IntentBar;