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
    const [wordEntered, setWordEntered] = useState<string>('');
    const [allUsers, setAllUsers] = useState([]);
    const [allIntents, setAllIntents] = useState([]);
    const [filteredUserData, setFilteredUserData] = useState<any>([]);
    
    const getAllUsers = useCallback(async () => {
        const responseData = await getAllWallets();
        setAllUsers(responseData);
        console.log("printing users");
        console.table(responseData);
    }, []);

    const getAllIntents = useCallback(async() => {
        const responseData = await getIntents(did.id);
        setAllIntents(responseData);
        console.log("Printing intents");
        console.table(responseData);
    }, []);

    const getAllUserDatafromIntents = useCallback(async() => {
        var filteredUsers = [];
        allUsers.forEach(user => {
            allIntents.forEach(intent => {
                if (user.did == intent.intent_sent_by && intent.intent=='Pending') {
                    console.log("Found a valid intent");
                    filteredUsers.push(user);
                }
            });
        });
        // setFilteredUserData(filteredUsers);
    }, []);

    useEffect(() => {
        getAllUsers();
        getAllIntents();
        getAllUserDatafromIntents();
    }, []);

    const searchFromDb = (did: string) => {
        let filteredData = [];
        if (did.length) {
            filteredData = allUsers.filter(details => {
                return (
                    details.did.trim().includes(did.trim())
                )
            });
            if (filteredData.length) {
                setFilteredUserData(filteredData);
            }
            else {
                setFilteredUserData([]);
            }
        }
        else {
            setFilteredUserData([]);
            setWordEntered("");
        }
    }

    const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
        let searchAddress = event.target.value;
        setWordEntered(searchAddress);
    }

    const submitSearch = async (event) => {
        event.preventDefault();
        try {
            const provider = await connector.getProvider();
            var web3 = new Web3(provider);
            var ENS = web3.eth.ens;
            if (!web3.utils.isAddress(wordEntered)) {
                const address: string = await ENS.getAddress(wordEntered);
               // const did = await getLinkWallets(address);
                if (did === null) {
                    searchFromDb('');
                }
                else {
                //    searchFromDb(did);
                }
            }
            else {
              //  const did = await getLinkWallets(wordEntered);
                //searchFromDb(did);
            }
        }
        catch (err) {
            setFilteredUserData([]);
            console.log(err, "hello");
        }
    }

    const clearInput = () => {
        setFilteredUserData([]);
        setWordEntered("");
    };

    return (
        <div className="search" >
            <div className='intentFilter_buttons' style={{color:"black", width:"100%", fontSize:"20px"}}>
                <h1 style={{color:"black", fontSize:"medium"}}>Intents</h1>
            </div>
            
            <div className='sidebar_message'>
                {<IntentFeed filteredUserData={filteredUserData} setChat={props.setChat} />}
            </div>
        </div>
    );
};

export default IntentBar;