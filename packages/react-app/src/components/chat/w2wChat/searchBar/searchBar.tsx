import CloseIcon from '@material-ui/icons/Close'
import SearchIcon from '@material-ui/icons/Search'
import { useWeb3React } from '@web3-react/core'
import * as PushNodeClient from 'api'
import { User } from 'api'
import { ethers } from 'ethers'
import { Web3Provider } from 'ethers/providers'
import * as w2wChatHelper from 'helpers/w2w'
import FadeLoader from "react-spinners/FadeLoader";
import React, { useContext, useState } from 'react'
import MessageFeed from '../messageFeed/messageFeed'
import { AppContext, Context } from '../w2wIndex'
import './searchBar.css'
// @ts-ignore
import Box from '@mui/material/Box'
import { ColorRing as Loader } from 'react-loader-spinner'
import styled from 'styled-components'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const TabPanel = (props: TabPanelProps): JSX.Element => {
  const { children, value, index, ...other } = props

  return (
    <div role="tabpanel" hidden={value !== index} id={`${index}`} {...other}>
      {value === index && <Box sx={{ p: 3, padding: '0px' }}>{children}</Box>}
    </div>
  )
}

const SearchBar = () => {
  const { setSearchedUser, searchedUser, hasUserBeenSearched, setHasUserBeenSearched }: AppContext = useContext<AppContext>(Context)
  const { chainId } = useWeb3React<Web3Provider>()
  const [filteredUserData, setFilteredUserData] = useState<User[]>([])
  const [isInValidAddress, setIsInvalidAddress] = useState<boolean>(false)
  const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(false)
  const provider = ethers.getDefaultProvider()
  const [value, setValue] = React.useState(0)

  const onChangeSearchBox = async (event: React.ChangeEvent<HTMLInputElement>) => {
    let searchAddress = event.target.value
    if (searchAddress === '') {
      clearInput()
    } else {
      setSearchedUser(searchAddress)
    }
  }

  const displayDefaultUser = ({ caip10 }: { caip10: string }): User => {
    const profilePicture = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAvklEQVR4AcXBsW2FMBiF0Y8r3GQb6jeBxRauYRpo4yGQkMd4A7kg7Z/GUfSKe8703fKDkTATZsJsrr0RlZSJ9r4RLayMvLmJjnQS1d6IhJkwE2bT13U/DBzp5BN73xgRZsJMmM1HOolqb/yWiWpvjJSUiRZWopIykTATZsJs5g+1N6KSMiO1N/5DmAkzYTa9Lh6MhJkwE2ZzSZlo7xvRwson3txERzqJhJkwE2bT6+JhoKTMJ2pvjAgzYSbMfgDlXixqjH6gRgAAAABJRU5ErkJggg==`
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
      name: null,
      numMsg: 1,
      allowedNumMsg: 100,
      linkedListHash: null
    }
    return userCreated
  }

  const submitSearch = async (event: React.FormEvent) => {
    console.log("Searched happen")

    //!There is a case when the user enter a wallet Address less than the fixed length of the wallet address

    event.preventDefault()
    if (!ethers.utils.isAddress(searchedUser)) {
      setIsLoadingSearch(true)
      const ens: string = await provider.resolveName(searchedUser)
      let resolvedENS: string
      try {
        resolvedENS = await provider.resolveName(ens)
      } catch (error) {
        setIsInvalidAddress(true)
        setFilteredUserData([])
        setHasUserBeenSearched(true)
      }
      if (resolvedENS) {
        const caip10 = w2wChatHelper.walletToCAIP10({ account: resolvedENS, chainId })
        const displayUser = displayDefaultUser({ caip10 })
        setHasUserBeenSearched(true)
        setFilteredUserData([displayUser])
      }
    } else {
      setIsLoadingSearch(true)
      const caip10 = w2wChatHelper.walletToCAIP10({ account: searchedUser, chainId })
      let filteredData: User
      setHasUserBeenSearched(true)
      if (searchedUser.length) {
        filteredData = await PushNodeClient.getUser({ caip10 })
        if (filteredData !== null) {
          setFilteredUserData([filteredData])
        }
        // User is not in the protocol. Create new user
        else {
          if (ethers.utils.isAddress(searchedUser)) {
            const displayUser = displayDefaultUser({ caip10 })
            setHasUserBeenSearched(true)
            setFilteredUserData([displayUser])
          } else {
            setIsInvalidAddress(true)
            setFilteredUserData([])
          }
        }
      } else {
        setFilteredUserData([])
      }
    }
    setIsLoadingSearch(false)
  }

  const clearInput = () => {
    setFilteredUserData([])
    setSearchedUser('')
    setHasUserBeenSearched(false)
    setIsLoadingSearch(false)
  }

  return (
    <TabPanel value={value} index={0}>
      <SearchBarContainer>
        <form onSubmit={submitSearch}>
          <Input
            type="text"
            value={searchedUser}
            onChange={onChangeSearchBox}
            placeholder="Search name.eth or 0x123..."
          />
          
        </form>
        {searchedUser.length > 0 && <Close onClick={clearInput} />}
        
        {isLoadingSearch ? (
          <SearchLoader><Loader
            visible={true}
            height="30"
            width="30"
            ariaLabel="blocks-loading"
            colors={['#979292','#979292','#979292','#979292','#979292']}
          /></SearchLoader>
        ) : (
          <Image src="/svg/chats/search.svg" />
        )}
      </SearchBarContainer>
      <MessageFeed
        hasUserBeenSearched={hasUserBeenSearched}
        filteredUserData={filteredUserData}
        isInvalidAddress={isInValidAddress}
      />
    </TabPanel>
  )
}

const Close = styled(CloseIcon)`
  position: absolute;
  top: 50px;
  right: 55px;
  cursor: pointer;
`

const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`

const SearchLoader = styled.div`
position: absolute;
  top: 46px;
  right: 37px;
  height: 25px;
  width: 20px;
`

const Image = styled.img`
  position: absolute;
  top: 48px;
  right: 35px;
  height: 25px;
  width: 20px;
  &:hover {
    cursor: pointer;
  }
`

const Input = styled.input`
  box-sizing: border-box;
  width: 294px;
  height: 48px;
  padding: 13px 60px 13px 21px;
  margin: 37px 0px 17px 0px;
  border-radius: 99px;
  border: 1px solid transparent !important;
  background-color: #f4f5fa;
  &:focus {
    outline: none;
    background-image: linear-gradient(#f4f5fa, #f4f5fa), linear-gradient(to right, #cf1c84, #8ed6ff);
    background-origin: border;
    border: 1px solid transparent !important;
    background-clip: padding-box, border-box;
  }
`

export default SearchBar
