import React, { useEffect, useState, useCallback, useContext } from 'react';
import './searchBar.css';
import { Web3Provider } from "ethers/providers";
import { useWeb3React } from "@web3-react/core";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import MessageFeed from '../messageFeed/messageFeed';
import * as w2wChatHelper from '../../../../helpers/w2wChatHelper';
import Web3 from 'web3';
import { Context } from '../w2wIndex';
import { User } from '../../../../helpers/w2wChatHelper';

const SearchBar = () => {
    const { connector, chainId } = useWeb3React<Web3Provider>();
    const {userWallets} = useContext(Context);
    const [wordEntered, setWordEntered] = useState<string>('');
    const [allUsers, setAllUsers] = useState<User[]>([])
    const [filteredUserData, setFilteredUserData] = useState<any>([]);
    const [isValid, setIsValid] = useState<boolean>(false);
    const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/4ff53a5254144d988a8318210b56f47a');
    const getAllUsers = useCallback(async () => {
        const users = await w2wChatHelper.getAllUsers();
        setAllUsers(users);
    }, []);

    useEffect(() => {
        // Get all the wallets from server
        getAllUsers();
    }, []);

    const searchUser = async (wallet: string) => {
        let filteredData = [];
        if (wallet.length) {
            for (let i in allUsers) {
                const wallets = allUsers[i].wallets.split(' ');
                let found = false;
                for (let j in wallets) {
                    if (wallets[j] === wordEntered) {
                        found = true;
                        break;
                    }
                }
                if (found) {
                    filteredData = [allUsers[i]];
                    break
                }
            }
            console.log(filteredData);
            setIsValid(true);

            if (filteredData.length) {
                setFilteredUserData(filteredData);
            }
            else {
                var web3 = new Web3(provider);
                if(web3.utils.isAddress(wordEntered))
                {
                    const caip10: string = w2wChatHelper.walletToCAIP10(wallet, chainId);
                    const userCreated = await w2wChatHelper.createUser({wallet:caip10,did:caip10,pgp_pub:"toBeFilled",pgp_priv_enc:"toBeFilled", pgp_enc_type: 'pgp', signature: 'xyz', sig_type: 'a'});
                    console.log(userCreated);
                    setFilteredUserData([userCreated]);
                }
                else{
                    setFilteredUserData([]);
                }
                
            }
        }
        else {
            setIsValid(true);
            setFilteredUserData([]);
            //setWordEntered("");
        }
    }

    const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
        let searchAddress = event.target.value;
        if(searchAddress==="")
        {
            clearInput();
        }
        else{
            setWordEntered(searchAddress);
        }
    }

    // users can search for wallet addresses, ENS and DID
    const submitSearch = async (event) => {
        event.preventDefault();
        try {
            // const provider = await connector.getProvider();
            var web3 = new Web3(provider);
            var ENS = web3.eth.ens;
            console.log(web3.utils.isAddress(wordEntered));
            if (!web3.utils.isAddress(wordEntered)) {
                const address: string = await ENS.getAddress(wordEntered); // if there is no ens domain, it will throw an error
                console.log('ola');
                console.log(address);
                searchUser(address);
            }
            else {
                searchUser(wordEntered);
            }
        }
        catch (err) {
            searchUser('');
        }
    }

    const clearInput = () => {
        setFilteredUserData([]);
        setWordEntered("");
        setIsValid(false);
    };

    return (
        <>
        <div className="search" >
            <form onSubmit={submitSearch}>
                <div className="searchInputs">
                    <input
                        type="text"
                        placeholder='Search for addresses or ENS Domains'
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
                {<MessageFeed isValid={isValid} filteredUserData={filteredUserData} />}
            </div>
        </div>
    </>
    );
};

export default SearchBar;