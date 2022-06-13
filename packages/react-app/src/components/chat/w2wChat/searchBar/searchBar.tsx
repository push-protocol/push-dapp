import React,{useEffect, useState} from 'react';
import './searchBar.css';
// @ts-ignore
import SearchIcon from "@material-ui/icons/Search";
// @ts-ignore
import CloseIcon from "@material-ui/icons/Close";
import MessageFeed from '../messageFeed/messageFeed';
import { getAllWallets } from '../../../../helpers/w2wChatHelper';
import Web3 from 'web3';

interface Feeds {
    wallet: string,
    lastMessage: string,
    avatar: string,
    time: string,
    did?: string,
    intent?: boolean
}

const SearchBar = (props: { setChat: any; })=>{
    const [wordEntered, setWordEntered] = useState<string>('');
    const [data, setData] = useState<Feeds[]>([{ wallet: '0xb4aB2...702e1', lastMessage: 'Hello, how are u? wefwf ervesrv', avatar: 's', time: `5/27/2022` }]);
    const [error, setError] = useState<string>(null);
    const [filteredUserData, setFilteredUserData] = useState<any>([]);
    const [isValid, setIsValid] = useState<boolean>(false);
    const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/4ff53a5254144d988a8318210b56f47a');
    var web3 = new Web3(provider);
    var ENS = web3.eth.ens;
    /*useEffect(()=>{
        //getting all the wallets from server
        //const responseData = await getAllWallets();
        //setData(responseData);
        
    },[]);*/
    const searchFromDb = (address: string) => {
        let filteredData = [];
        if (address.length) {
            filteredData = data.filter(details => {
                return (
                    details.wallet.trim().includes(address.trim())
                )
            });

        }
        else {
            setIsValid(false);
            setFilteredUserData([]);
            setWordEntered("");
        }
        if (filteredData.length) {
            setIsValid(true);
            setFilteredUserData(filteredData);
        }
        else {

            setFilteredUserData([]);

        }
    }
    const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
        let searchAddress = event.target.value;
        setWordEntered(searchAddress);
        searchFromDb(searchAddress);

    }
    const submitSearch = async (event) => {
        event.preventDefault();
        try {
            console.log(event, wordEntered);
            if (!web3.utils.isAddress(wordEntered)) {
                const address: string = await ENS.getAddress(wordEntered);

                searchFromDb(address);
            }
            else {
                searchFromDb(wordEntered);
            }
        }
        catch (err) {

            console.log(err);
        }
    }

    const clearInput = () => {
        setFilteredUserData([]);
        setWordEntered("");

        setIsValid(false);
    };
    return (
        <div role="search" >
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
                {<MessageFeed isValid={isValid} filteredUserData={filteredUserData} setChat={props.setChat} />}
            </div>
        </div>
    );
};
export default SearchBar;