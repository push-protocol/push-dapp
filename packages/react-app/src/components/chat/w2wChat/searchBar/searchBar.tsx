import React, { useEffect, useState, useCallback } from 'react'
import './searchBar.css'
import { Web3Provider } from 'ethers/providers'
import { useWeb3React } from '@web3-react/core'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import MessageFeed from '../messageFeed/messageFeed'
import * as w2wChatHelper from '../../../../helpers/w2w'
import Web3 from 'web3'
import { User } from '../../../../components/chat/w2wChat/w2wIndex'
import * as PushNodeClient from '../../../../api'

const SearchBar = () => {
  const { chainId } = useWeb3React<Web3Provider>()
  const [wordEntered, setWordEntered] = useState<string>('')
  const [allUsers, setAllUsers] = useState<User[]>([])
  const [filteredUserData, setFilteredUserData] = useState<any>([])
  const [hasUserBeenSearched, setHasUserBeenSearched] = useState<boolean>(false)
  const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/4ff53a5254144d988a8318210b56f47a')

  const getAllUsers = useCallback(async () => {
    const users = await PushNodeClient.getAllUsers()
    setAllUsers(users)
  }, [])

  useEffect(() => {
    // Get all the users
    getAllUsers()
  }, [])

  const searchUser = async (searchedUser: string) => {
    searchedUser = w2wChatHelper.caip10ToWallet(searchedUser)
    let filteredData = []
    setHasUserBeenSearched(true)
    if (searchedUser.length) {
      loopSearchForUser: for (let userIndex in allUsers) {
        let userWallets: string[] = allUsers[userIndex].wallets.split(',')
        // Convert caip10 addresses to wallets
        userWallets.forEach((userWallet, index) => (userWallets[index] = w2wChatHelper.caip10ToWallet(userWallet)))
        for (let walletUserIndex in userWallets) {
          if (userWallets[walletUserIndex] === searchedUser) {
            filteredData = [allUsers[userIndex]]
            break loopSearchForUser
          }
        }
      }

      if (filteredData.length) {
        setFilteredUserData(filteredData)
      }
      // User is not in the protocol. Create new user
      else {
        var web3 = new Web3(provider)
        if (web3.utils.isAddress(wordEntered)) {
          const caip10: string = w2wChatHelper.walletToCAIP10(searchedUser, chainId)
          const userCreated = await PushNodeClient.createUser({
            wallet: caip10,
            did: caip10,
            pgp_pub: 'temp',
            pgp_priv_enc: 'temp',
            pgp_enc_type: 'pgp',
            signature: 'temp',
            sig_type: 'temp'
          })
          setFilteredUserData([userCreated])
        } else {
          setFilteredUserData([])
        }
      }
    } else {
      setFilteredUserData([])
    }
  }

  const onChangeSearchBox = async (event: React.ChangeEvent<HTMLInputElement>) => {
    let searchAddress = event.target.value
    if (searchAddress === '') {
      clearInput()
    } else {
      setWordEntered(searchAddress)
    }
  }

  // ToDo: users can search for wallet addresses, ENS and DID. As of now it's only possible to search for wallets
  const submitSearch = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      // const provider = await connector.getProvider();
      var web3 = new Web3(provider)
      var ENS = web3.eth.ens
      if (!web3.utils.isAddress(wordEntered)) {
        const address: string = await ENS.getAddress(wordEntered) // if there is no ens domain, it will throw an error
        searchUser(address)
      } else {
        searchUser(wordEntered)
      }
    } catch (err) {
      searchUser(wordEntered)
    }
  }

  const clearInput = () => {
    setFilteredUserData([])
    setWordEntered('')
    setHasUserBeenSearched(false)
  }

  return (
    <>
      <div className="search">
        <form onSubmit={submitSearch}>
          <div className="searchInputs">
            <input
              type="text"
              placeholder="Search for addresses or ENS Domains"
              value={wordEntered}
              onChange={onChangeSearchBox}
            />
            <div className="searchIcon">
              {wordEntered.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput} />}
            </div>
          </div>
        </form>
        <div className="sidebar_message">
          {<MessageFeed hasUserBeenSearched={hasUserBeenSearched} filteredUserData={filteredUserData} />}
        </div>
      </div>
    </>
  )
}

export default SearchBar
