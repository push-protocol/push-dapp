import CloseIcon from '@material-ui/icons/Close'
import SearchIcon from '@material-ui/icons/Search'
import { useWeb3React } from '@web3-react/core'
import * as PushNodeClient from 'api'
import { User } from 'api'
import { ethers } from 'ethers'
import { Web3Provider } from 'ethers/providers'
import * as w2wChatHelper from 'helpers/w2w'
import React, { useContext, useState } from 'react'
import MessageFeed from '../messageFeed/messageFeed'
import { AppContext, Context } from '../w2wIndex'
import './searchBar.css'
// @ts-ignore
import Box from '@mui/material/Box'
import { Oval as Loader } from 'react-loader-spinner'
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
  const { setSearchedUser, searchedUser }: AppContext = useContext<AppContext>(Context)
  const { chainId } = useWeb3React<Web3Provider>()
  const [filteredUserData, setFilteredUserData] = useState<User[]>([])
  const [hasUserBeenSearched, setHasUserBeenSearched] = useState<boolean>(false)
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
    // <>
    //   <div className="search">
    //     <form onSubmit={submitSearch}>
    //       <div className="searchInputs">
    //         <input
    //           type="text"
    //           placeholder="Search for addresses or ENS Domains"
    //           value={searchedUser}
    //           onChange={onChangeSearchBox}
    //         />
    //         <div className="searchIcon">
    //           {searchedUser.length === 0 ? (
    //             <SearchIcon />
    //           ) : isLoadingSearch ? (
    //             <div className="search-user-loader">
    //               <Loader type="Oval" color="#000" height={25} width={25} />
    //               <CloseIcon id="clearBtn" onClick={clearInput} />
    //             </div>
    //           ) : (
    //             <CloseIcon id="clearBtn" onClick={clearInput} />
    //           )}
    //         </div>
    //       </div>
    //     </form>
    //     <div className="sidebar_message">
    //       {
    //         <MessageFeed
    //           hasUserBeenSearched={hasUserBeenSearched}
    //           filteredUserData={filteredUserData}
    //           isInvalidAddress={isInValidAddress}
    //         />
    //       }
    //     </div>
    //   </div>
    // </>
    <TabPanel value={value} index={0}>
      <SearchBarContainer>
        <form onSubmit={submitSearch}>
          <Input type="text" onChange={onChangeSearchBox} placeholder="Search name.eth or 0x123..." />
        </form>
        <Image src="/svg/chats/search.svg" />
      </SearchBarContainer>
      <MessageFeed
        hasUserBeenSearched={hasUserBeenSearched}
        filteredUserData={filteredUserData}
        isInvalidAddress={isInValidAddress}
      />
    </TabPanel>
  )
}

const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
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
  padding: 13px 74px 13px 21px;
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
