import React,{useEffect, useState,useCallback,useContext} from 'react';
import './searchBar.css';

import { Web3Provider } from "ethers/providers";
import { useWeb3React } from "@web3-react/core";

// @ts-ignore
import SearchIcon from "@material-ui/icons/Search";

// @ts-ignore
import CloseIcon from "@material-ui/icons/Close";
import MessageFeed from '../messageFeed/messageFeed';
import { getAllWallets } from '../../../../helpers/w2wChatHelper';
import Web3 from 'web3';
import {Context, Feeds} from '../w2wIndex';

const SearchBar = (props: { setChat: any; }) => {
    const { connector, chainId } = useWeb3React<Web3Provider>();
    const { getLinkWallets } = useContext(Context);
    const [wordEntered, setWordEntered] = useState<string>('');
    const [allUsers, setAllUsers] = useState([])
    const [filteredUserData, setFilteredUserData] = useState<any>([]);
    
    const getAllUsers = useCallback(async () => {
        const responseData = await getAllWallets();
        setAllUsers(responseData);
    }, []);

    useEffect(() => {
        // Get all the wallets from server
        getAllUsers();
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
                const did = await getLinkWallets(address);
                if (did === null) {
                    searchFromDb('');
                }
                else {
                    searchFromDb(did);
                }
            }
            else {
                const did = await getLinkWallets(wordEntered);
                searchFromDb(did);
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
            <form onSubmit={submitSearch}>
                <div className="searchInputs">
                    <input
                        type="text"
                        placeholder='Search Addresses/ Ens Names'
                        value={wordEntered}
                        onChange={handleSearch}

                    />
                    <div className="searchIcon">
                        {wordEntered.length === 0 ? (
                            <SearchIcon />
                        ) : (
                            <CloseIcon id="clearBtn" onClick={clearInput} />
                        )}
                    </div>
                </div>
            </form>

            <div className='sidebar_message'>
                {<MessageFeed filteredUserData={filteredUserData} setChat={props.setChat} />}
            </div>
        </div>
    );
};

export default SearchBar;