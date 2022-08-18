import React, { useEffect, useState, useCallback, useContext } from 'react'
import './searchBar.css'
import { Web3Provider } from 'ethers/providers'
import { useWeb3React } from '@web3-react/core'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import MessageFeed from '../messageFeed/messageFeed'
import { AppContext, Context } from '../w2wIndex'
import * as w2wChatHelper from '../../../../helpers/w2w'
import Web3 from 'web3'
import * as PushNodeClient from '../../../../api'
import { User } from '../../../../api'

const SearchBar = () => {
  const { chainId } = useWeb3React<Web3Provider>()
  const [wordEntered, setWordEntered] = useState<string>('')
  const [filteredUserData, setFilteredUserData] = useState<User[]>([])
  const [hasUserBeenSearched, setHasUserBeenSearched] = useState<boolean>(false)
  const [isInValidAddress, setIsInvalidAddress] = useState<boolean>(false)
  const { setSearchedUser }: AppContext = useContext<AppContext>(Context)
  const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/4ff53a5254144d988a8318210b56f47a')

  const searchUser = async (searchedUser: string): Promise<void> => {
    searchedUser = w2wChatHelper.caip10ToWallet(searchedUser)
    let filteredData: User
    setHasUserBeenSearched(true)
    if (searchedUser.length) {
      filteredData = await PushNodeClient.getUser({ did: '', wallet: searchedUser })
      if (filteredData !== null) {
        setFilteredUserData([filteredData])
      }
      // User is not in the protocol. Create new user
      else {
        var web3 = new Web3(provider)
        if (web3.utils.isAddress(wordEntered)) {
          const caip10: string = w2wChatHelper.walletToCAIP10(searchedUser, chainId)
          setSearchedUser(caip10)
          const profilePicture: string = w2wChatHelper.createRandomProfilePicture(caip10)

          const userCreated: User = {
            did: caip10,
            wallets: caip10,
            publicKey: 'temp',
            profilePicture: profilePicture,
            encryptedPrivateKey: 'temp',
            encryptionType: 'temp',
            signature: 'temp',
            sigType: 'temp',
            about: null,
            numMsg: 1,
            allowedNumMsg: 100,
            linkedListHash: null
          }
          setFilteredUserData([userCreated])
        } else {
          setIsInvalidAddress(true)
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
          {
            <MessageFeed
              hasUserBeenSearched={hasUserBeenSearched}
              filteredUserData={filteredUserData}
              isInvalidAddress={isInValidAddress}
            />
          }
        </div>
      </div>
    </>
  )
}

export default SearchBar
