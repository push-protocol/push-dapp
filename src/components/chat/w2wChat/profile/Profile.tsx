import React, { useContext } from 'react'

import MoreVertIcon from '@mui/icons-material/MoreVert'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { caip10ToWallet } from 'helpers/w2w'
import { Context } from 'sections/chat/ChatMainSection'
import styled from 'styled-components'
import styles from './styles'

const Profile = ({ setValue }: any): JSX.Element => {
  const { connectedUser } = useContext(Context)

  return (
    <>
      <Tooltip title="Profile" placement="top-start">
        <WalletDetailsContainer direction="row" spacing={2} onClick={(): void => setValue(2)}>
          <Avatar alt="Profile Image" src={connectedUser.profilePicture} />
          <DisplayText color="#1E1E1E" size="16px" weight="600">
            {caip10ToWallet(connectedUser.wallets).slice(0, 8) +
              '...' +
              caip10ToWallet(connectedUser.wallets).slice(-7)}
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
