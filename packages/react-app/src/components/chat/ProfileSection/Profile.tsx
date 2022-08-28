import React, { useContext, useState, useEffect } from 'react'
import './Profile.css'
import { AppContext, Context } from '../w2wIndex'
import { updateUser } from 'api/w2w'
import { CID } from 'ipfs-http-client'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import Tooltip from '@mui/material/Tooltip'
import { CardActionArea } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import CheckIcon from '@mui/icons-material/Check'
import { showCharacters } from './helpers'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { postIPFS } from 'api'

import styles from './styles'
import { FileMessageContent } from '../Files/Files'
import { ChangeEvent } from 'react'

interface ProfilePropsType {
  profilePicture: string
  updateProfile: (image: string) => void
  setValue: (number: number) => void
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const Profile = (props: ProfilePropsType): JSX.Element => {
  const { did, connectedUser }: AppContext = useContext<AppContext>(Context)

  const wallets = connectedUser.wallets.split(',')
  const [copiedDid, setCopiedDid] = useState<boolean>(false)
  const [copiedWallet, setCopiedWallet] = useState<boolean>(false)
  const [profile, setProfile] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    try {
      CID.parse(props.profilePicture)
      setProfile(props.profilePicture)
    } catch (err) {
      setProfile(props.profilePicture)
    }
  }, [props.profilePicture])

  async function copyTextToClipboard(text: string) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text)
    } else {
      return document.execCommand('copy', true, text)
    }
  }

  const handleClickDid = async (wallet: string) => {
    copyTextToClipboard(wallet).then(() => {
      setCopiedDid(true)
      setTimeout(() => {
        setCopiedDid(false)
      }, 3000)
    })
    setMessage('DID copied successfully')
  }

  const handleClickWallet = async (wallet: string) => {
    copyTextToClipboard(wallet).then(() => {
      setCopiedWallet(true)
      setTimeout(() => {
        setCopiedWallet(false)
      }, 3000)
    })
    setMessage('Wallet copied successfully')
  }

  const changeHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    const file: File = event.target.files[0]
    const reader = new FileReader()
    let fileMessageContent: FileMessageContent
    reader.readAsDataURL(file)
    reader.onloadend = async (e): Promise<void> => {
      fileMessageContent = {
        content: e.target.result as string,
        name: file.name,
        type: file.type,
        size: file.size
      }
      const cid: string = await postIPFS(JSON.stringify(fileMessageContent))
      setProfile(fileMessageContent.content)
      props.updateProfile(cid)
      await updateUser({ did: did.id, profilePictureCID: cid })
    }
  }

  return (
    <>
      <Card sx={styles.container} elevation={0}>
        <Box sx={styles.header}>
          <IconButton aria-label="back" onClick={() => props.setValue(0)} sx={styles.backButtonHolder}>
            <KeyboardBackspaceIcon sx={styles.backButton} />
          </IconButton>
        </Box>

        <CardActionArea sx={{ position: 'relative', background: 'lightgrey' }}>
          <CardMedia component="img" height="140" image={profile} alt="profile" />
        </CardActionArea>

        <Tooltip title="Change profile picture" placement="top-start">
          <div className="changeProfilePicture">
            <img src={profile} alt="profile" />

            <section>
              <IconButton color="primary" aria-label="upload picture" component="label" sx={styles.uploadIcon}>
                <input
                  hidden
                  onChange={changeHandler}
                  accept="image/png, image/jpg, image/gif, image/jpeg"
                  type="file"
                />
                <PhotoCamera />
              </IconButton>
            </section>
          </div>
        </Tooltip>

        <Box sx={styles.detailsContainer}>
          <Typography component="legend" sx={styles.detailsHeader}>
            Details
          </Typography>

          <Box sx={styles.detailsCard}>
            <Typography component="legend" sx={styles.label}>
              DID:
            </Typography>

            <Box sx={{ display: 'flex' }}>
              <Typography component="legend" sx={styles.value}>
                {showCharacters(did?.id)}
              </Typography>

              {!copiedDid ? (
                <IconButton aria-label="back" onClick={() => handleClickDid(did.id)}>
                  <ContentCopyIcon sx={styles.copyIcon} />
                </IconButton>
              ) : (
                <IconButton aria-label="back">
                  <CheckIcon sx={styles.copyIcon} />
                </IconButton>
              )}
            </Box>
          </Box>

          <Box sx={styles.detailsCard}>
            <Typography component="legend" sx={styles.label}>
              Wallets:
            </Typography>

            {wallets.map((wallet) => (
              <Box sx={{ display: 'flex', marginBottom: 1 }}>
                <Typography component="legend" sx={styles.value}>
                  {showCharacters(wallet)}
                </Typography>

                {!copiedWallet ? (
                  <IconButton aria-label="back" onClick={() => handleClickWallet(wallet)}>
                    <ContentCopyIcon sx={styles.copyIcon} />
                  </IconButton>
                ) : (
                  <IconButton aria-label="back">
                    <CheckIcon sx={styles.copyIcon} />
                  </IconButton>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Card>

      <Snackbar
        open={copiedDid || copiedWallet}
        autoHideDuration={3000}
        onClose={() => {
          setCopiedWallet(false)
          setCopiedDid(false)
        }}
      >
        <Alert
          onClose={() => {
            setCopiedWallet(false)
            setCopiedDid(false)
          }}
          severity="success"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  )
}
export default Profile
