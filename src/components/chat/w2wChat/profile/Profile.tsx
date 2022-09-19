import React, { useContext, useEffect, useState } from 'react'

import { Context } from '../w2wIndex'
import styles from './styles'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import styled from 'styled-components'
import { caip10ToWallet } from 'helpers/w2w'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { ethers } from 'ethers'

const Profile = ({ setValue }: any): JSX.Element => {
  const { connectedUser } = useContext(Context)
  const provider = ethers.getDefaultProvider()
  const [ensName,setENSName] = useState<String>('')

  const getENSName = async(walletAddress)=>{
    const ens: string = await provider.lookupAddress(walletAddress)
    if(ens){
      setENSName(ens)
    }else{
      setENSName('')
    }
  }

  useEffect(()=>{
    getENSName(caip10ToWallet(connectedUser.wallets))
    // console.log(connectedUser)
  },[connectedUser?.wallets])

  return (
    <>
      <Tooltip title="Profile" placement="top-start">
        <WalletDetailsContainer direction="row" spacing={2} onClick={(): void => setValue(2)}>
          <Avatar alt="Profile Image" src={connectedUser.profilePicture} />
          <DisplayText color="#1E1E1E" size="16px" weight="600">
            {ensName ? ensName : (
              <>
              {caip10ToWallet(connectedUser.wallets).slice(0, 8) +
              '...' +
              caip10ToWallet(connectedUser.wallets).slice(-7)}
              </>
            )}
            
          </DisplayText>
        </WalletDetailsContainer>
      </Tooltip>
      <IconButton aria-label="more">
        <MoreVertIcon />
      </IconButton>
    </>
  )
}

const WalletDetailsContainer = styled(Stack)`
  display: flex;
  align-items: center;
  displaytext-align: center;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`
const DisplayText = styled(Typography)`
  && {
    color: ${(props): string => props.color || '#000000'};
    font-size: ${(props): string => props.size || '14px'};
    font-weight: ${(props): string => props.weight || '500'};
  }
`

export default Profile
