import React,{useEffect, useState,useCallback,useContext} from 'react';
import './intentBar.css';
import IntentFeed from '../intentFeed/intentFeed';
import { getIntents } from '../../../../helpers/w2wChatHelper';
import {Context} from '../w2wIndex';

const IntentBar = () => {
    const { did } = useContext(Context);
    const [allIntents, setAllIntents] = useState([]);
    const [filteredUserData, setFilteredUserData] = useState<any>([]);
    

    const getAllIntents = useCallback(async() => {
        const responseData = await getIntents(did.id);
        setAllIntents(responseData);
        setFilteredUserData(responseData);
    }, []);

    useEffect(() => {
        getAllIntents()
    }, []);


    return (
        <div className="search" >
            <div className='intentsidebar_message'>
                {<IntentFeed filteredUserData={filteredUserData} />}
            </div>
        </div>
    );
};

export default IntentBar;