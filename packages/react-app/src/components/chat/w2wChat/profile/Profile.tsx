import React, { useContext } from 'react'

import { Context } from '../w2wIndex'
import styles from './styles'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'

const Profile = ({ setValue }: any): JSX.Element => {
  const { connectedUser } = useContext(Context)

  return (
    <Box sx={styles.container} onClick={(): void => setValue(2)}>
      <Tooltip title="Profile" placement="top-start">
        <Avatar alt="profile image" src={connectedUser.profilePicture} sx={styles.profileImage} />
      </Tooltip>
    </Box>
  )
}

export default Profile
