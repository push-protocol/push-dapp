import React,{useEffect, useState,useCallback,useContext} from 'react';
import './searchBar.css';
// @ts-ignore
import SearchIcon from "@material-ui/icons/Search";
// @ts-ignore
import CloseIcon from "@material-ui/icons/Close";
import MessageFeed from '../messageFeed/messageFeed';
import { getAllWallets } from '../../../../helpers/w2wChatHelper';
import Web3 from 'web3';
import {Context} from '../w2wIndex';

interface Feeds{
    name:string,
    lastMessage:string | null,
    profile_picture:string,
    time?:string,
    did?:string,
    intent?:boolean
}

const SearchBar = (props: { setChat: any; })=>{
    const {getLinkWallets} = useContext(Context);
    const [wordEntered,setWordEntered] = useState<string>('');
    const [data,setData] = useState<Feeds[]>([])
    const [error,setError] = useState<string>(null);
    const [filteredUserData,setFilteredUserData] = useState<any>([]);
    const [isValid,setIsValid] = useState<boolean>(false);
    const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/4ff53a5254144d988a8318210b56f47a');
    var web3 = new Web3(provider);
    var ENS = web3.eth.ens;
    const getAllUsers = useCallback(async ()=>{
        const responseData = await getAllWallets();
        setData(responseData);
    },[])
    useEffect(()=>{
        //getting all the wallets from server
        getAllUsers();
        
    },[]);
    const searchFromDb = (address:string)=>{
            let filteredData = [];
            if(address.length)
            {
                filteredData = data.filter(details=>{
                    return (
                        details.did.trim().includes(address.trim())
                    )
                });
                setIsValid(true);
                if(filteredData.length)
                {
                    
                    setFilteredUserData(filteredData);
                }
                else{
                    
                    setFilteredUserData([]);
                    
                }
                }        
            else
            {
                setIsValid(false);
                setFilteredUserData([]);
                setWordEntered("");
            }
            
    }
    const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
        let searchAddress = event.target.value;
       
        setWordEntered(searchAddress);
        searchFromDb(searchAddress);
        
        
    }
    const submitSearch = async (event) => {
        event.preventDefault();
        try{
            if(!web3.utils.isAddress(wordEntered))
            {
                const address:string = await ENS.getAddress(wordEntered);
                console.log(address);
                const did = await getLinkWallets(address);
                if(did===null)
                {
                    searchFromDb('');
                }
                else{
                    searchFromDb(did);
                }
            }
            else{
                const did = await getLinkWallets(wordEntered);
                searchFromDb(did);
            }   
        }
        catch(err)
        {
            setFilteredUserData([]);
            console.log(err,"hello");
        }
    }

    const clearInput = () => {
        setFilteredUserData([]);
        setWordEntered("");

        setIsValid(false);
    };
    return (
        <div className="search" >
            <form onSubmit = {submitSearch}>
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
                {<MessageFeed isValid={isValid} filteredUserData={filteredUserData} setChat={props.setChat} />}
            </div>
        </div>
    );
};
export default SearchBar;