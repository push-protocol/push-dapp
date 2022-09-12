import React, { ChangeEvent, useContext, useEffect, useRef, useState } from 'react'
import './chatBox.css'
// @ts-ignore
//import epnsLogo from '../w2wAsset/epnsLogo.png'
import Chats from '../chats/chats'
import { Context, ToastPosition } from '../w2wIndex'
// @ts-ignore
import { envConfig } from '@project/contracts'
import Picker from 'emoji-picker-react'
import 'font-awesome/css/font-awesome.min.css'
import * as PushNodeClient from '../../../../api'
//import Dropdown from '../dropdown/dropdown'
import { CID } from 'ipfs-http-client'
import { caip10ToWallet, decryptAndVerifySignature, encryptAndSign, walletToCAIP10 } from '../../../../helpers/w2w'
import { MessageIPFS } from '../../../../helpers/w2w/ipfs'
import { intitializeDb } from '../w2wIndexeddb'
// @ts-ignore
import MoreVertIcon from '@mui/icons-material/MoreVert'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Snackbar from '@mui/material/Snackbar'
import Typography from '@mui/material/Typography'
import { useWeb3React } from '@web3-react/core'
import { Content } from 'components/SharedStyling'
import { DID } from 'dids'
import { Web3Provider } from 'ethers/providers'
import * as w2wHelper from 'helpers/w2w/'
import * as DIDHelper from 'helpers/w2w/did'
import { generateKeyPair } from 'helpers/w2w/pgp'
import { Oval as Loader } from 'react-loader-spinner'
import { useQuery } from 'react-query'
import ScrollToBottom from 'react-scroll-to-bottom'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { Feeds, MessageIPFSWithCID, User } from '../../../../api'
import { AppContext } from '../../../../components/chat/w2wChat/w2wIndex'
import { FileMessageContent } from '../Files/Files'
import GifPicker from '../Gifs/gifPicker'
import IntentCondition from '../IntentCondition/IntentCondition'
import { decryptFeeds, fetchInbox } from '../w2wUtils'

const INFURA_URL = envConfig.infuraApiUrl

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const ChatBox = (): JSX.Element => {
  const {
    currentChat,
    viewChatBox,
    did,
    searchedUser,
    connectedUser,
    inbox,
    setConnectedUser,
    connectAndSetDID,
    setDID,
    setChat,
    setInbox
  }: AppContext = useContext<AppContext>(Context)
  const [newMessage, setNewMessage] = useState<string>('')
  const [textAreaDisabled, setTextAreaDisabled] = useState<boolean>(false)
  const [showEmojis, setShowEmojis] = useState<boolean>(false)
  const { chainId, account } = useWeb3React<Web3Provider>()
  const [Loading, setLoading] = useState<boolean>(true)
  const [messageBeingSent, setMessageBeingSent] = useState<boolean>(false)
  const [messages, setMessages] = useState<MessageIPFSWithCID[]>([])
  const [imageSource, setImageSource] = useState<string>('')
  const [filesUploading, setFileUploading] = useState<boolean>(false)
  const imageInputRef = useRef<HTMLInputElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isGifPickerOpened, setIsGifPickerOpened] = useState<boolean>(false)
  const [openReprovalSnackbar, setOpenSuccessSnackBar] = useState<boolean>(false)
  const [SnackbarText, setSnackbarText] = useState<string>('')
  const [chatCurrentCombinedDID, setChatCurrentCombinedDID] = useState<string>('')
  const [showOption, setShowOption] = useState<boolean>(false)
  let showTime = false
  let time = ''

  const getMessagesFromCID = async (): Promise<void> => {
    setLoading(true)
    if (currentChat) {
      const latestThreadhash: string = inbox.find((x) => x.combinedDID === currentChat.combinedDID)?.threadhash
      let messageCID = latestThreadhash
      if (latestThreadhash) {
        // Check if cid is present in messages state. If yes, ignore, if not, append to array
        while (messageCID) {
          if (messages.filter((msg) => msg.cid === messageCID).length > 0) {
            break
          } else {
            const messageFromIndexDB: any = await intitializeDb<string>('Read', 2, 'CID_store', messageCID, '', 'cid')

            let msgIPFS: MessageIPFSWithCID
            if (messageFromIndexDB !== undefined) {
              msgIPFS = messageFromIndexDB.body
            } else {
              const messageFromIPFS: MessageIPFSWithCID = await PushNodeClient.getFromIPFS(messageCID)
              await intitializeDb<MessageIPFS>('Insert', 2, 'CID_store', messageCID, messageFromIPFS, 'cid')
              msgIPFS = messageFromIPFS
            }

            // Decrypt message
            if (msgIPFS.encType !== 'PlainText' && msgIPFS.encType !== null) {
              // To do signature verification it depends on who has sent the message
              let signatureValidationPubliKey: string
              if (msgIPFS.fromDID === connectedUser.did) {
                signatureValidationPubliKey = connectedUser.publicKey
              } else {
                signatureValidationPubliKey = currentChat.publicKey
              }
              msgIPFS.messageContent = await decryptAndVerifySignature({
                cipherText: msgIPFS.messageContent,
                encryptedSecretKey: msgIPFS.encryptedSecret,
                did: did,
                encryptedPrivateKeyArmored: connectedUser.encryptedPrivateKey,
                publicKeyArmored: signatureValidationPubliKey,
                signatureArmored: msgIPFS.signature
              })
            }

            const messagesSentInChat: MessageIPFS = messages.find(
              (msg) =>
                msg.link === '' &&
                msg.encType === '' &&
                msg.cid === '' &&
                msg.messageContent === msgIPFS.messageContent &&
                msg.messageType === msgIPFS.messageType
            )
            // Replace message that was inserted when sending a message
            if (messagesSentInChat) {
              const newMessages = messages.map((x) => x)
              const index = newMessages.findIndex(
                (msg) =>
                  msg.link === '' &&
                  msg.encType === '' &&
                  msg.cid === '' &&
                  msg.messageContent === msgIPFS.messageContent &&
                  msg.messageType === msgIPFS.messageType
              )
              newMessages[index] = msgIPFS
              setMessages(newMessages)
            }
            // Display messages for the first time
            else if (messages.length === 0 || msgIPFS.timestamp < messages[0].timestamp) {
              setMessages((m) => [msgIPFS, ...m])
            }
            // Messages got from useQuery
            else {
              setMessages((m) => [...m, msgIPFS])
            }
            const link = msgIPFS.link
            if (link) {
              messageCID = link
            } else {
              break
            }
          }
        }
      } else {
        setMessages([])
      }
      setLoading(false)
    }
  }

  useQuery<any>('chatbox', getMessagesFromCID, { refetchInterval: 3000 })

  useEffect(() => {
    if (currentChat) {
      if (currentChat.combinedDID !== chatCurrentCombinedDID) {
        setChatCurrentCombinedDID(currentChat.combinedDID)
        // We only delete the messages once the user clicks on another chat. The user could click multiple times on the same chat and it would delete the previous messages
        // even though the user was still on the same chat.
        setMessages([])
        try {
          CID.parse(currentChat.profilePicture) // Will throw exception if invalid CID
          setImageSource(INFURA_URL + `${currentChat.profilePicture}`)
        } catch (err) {
          setImageSource(currentChat.profilePicture)
        }
      }
      // Fetch new messages
      getMessagesFromCID().catch((err) => console.error(err))
    }
  }, [currentChat])

  const sendMessage = async ({ message, messageType }: { message: string; messageType: string }): Promise<void> => {
    setMessageBeingSent(true)
    let msg: MessageIPFSWithCID
    let messageContent: string, encryptionType: string, aesEncryptedSecret: string, signature: string, sigType: string
    try {
      msg = {
        fromCAIP10: walletToCAIP10({ account, chainId }),
        fromDID: did.id,
        toDID: currentChat.did,
        messageContent: message,
        messageType,
        signature: '',
        encType: '',
        sigType: '',
        timestamp: Date.now(),
        encryptedSecret: '',
        link: '',
        cid: ''
      }
      setNewMessage('')
      setMessages([...messages, msg])
      if (!currentChat.publicKey.includes('-----BEGIN PGP PUBLIC KEY BLOCK-----')) {
        messageContent = message
        encryptionType = 'PlainText'
        aesEncryptedSecret = ''
        signature = ''
        sigType = ''
      } else {
        const {
          cipherText,
          encryptedSecret,
          signature: pgpSignature,
          sigType: pgpSignatureType,
          encType: pgpEncryptionType
        } = await encryptAndSign({
          plainText: message,
          fromEncryptedPrivateKeyArmored: connectedUser.encryptedPrivateKey,
          fromPublicKeyArmored: connectedUser.publicKey,
          toPublicKeyArmored: currentChat.publicKey,
          did
        })
        messageContent = cipherText
        encryptionType = pgpEncryptionType
        aesEncryptedSecret = encryptedSecret
        signature = pgpSignature
        sigType = pgpSignatureType
      }
      const savedMsg: MessageIPFSWithCID | string = await PushNodeClient.postMessage({
        fromCAIP10: walletToCAIP10({ account, chainId }),
        fromDID: did.id,
        toDID: currentChat.did,
        messageContent,
        messageType,
        signature,
        encType: encryptionType,
        sigType,
        encryptedSecret: aesEncryptedSecret
      })

      if (typeof savedMsg === 'string') {
        toast.error(savedMsg, ToastPosition)
      } else {
        await intitializeDb<MessageIPFS>('Insert', 2, 'CID_store', savedMsg.cid, savedMsg, 'cid')
      }
    } catch (error) {
      console.log(error)
      toast.error('Cannot send Message, Try again later', ToastPosition)
    }
    setMessageBeingSent(false)
  }

  const handleSubmit = (e: { preventDefault: () => void }): void => {
    e.preventDefault()

    if (newMessage.trim() !== '') {
      if (currentChat.threadhash) {
        sendMessage({
          message: newMessage,
          messageType: 'Text'
        })
      } else {
        sendIntent({ message: newMessage, messageType: 'Text' })
      }
    }
  }

  const createUserIfNecessary = async (): Promise<{ didCreated: DID; createdUser: User }> => {
    try {
      if (!did) {
        const createdDID: DID = await connectAndSetDID()
        // This is a new user
        const keyPairs = await generateKeyPair()
        const encryptedPrivateKey = await DIDHelper.encrypt(keyPairs.privateKeyArmored, createdDID)
        const caip10: string = w2wHelper.walletToCAIP10({ account, chainId })
        const createdUser = await PushNodeClient.createUser({
          caip10,
          did: createdDID.id,
          publicKey: keyPairs.publicKeyArmored,
          encryptedPrivateKey: JSON.stringify(encryptedPrivateKey),
          encryptionType: 'pgp',
          signature: 'xyz',
          sigType: 'a'
        })
        setConnectedUser(createdUser)
        setDID(createdDID)
        return { didCreated: createdDID, createdUser }
      } else {
        return { didCreated: did, createdUser: connectedUser }
      }
    } catch (e) {
      console.log(e)
    }
  }

  const sendIntent = async ({ message, messageType }: { message: string; messageType: string }): Promise<void> => {
    try {
      setMessageBeingSent(true)
      const { didCreated, createdUser } = await createUserIfNecessary()
      if (currentChat.intent === null || currentChat.intent === '' || currentChat.intent === 'Pending') {
        const user: User = await PushNodeClient.getUser({ did: currentChat.did })
        let messageContent: string, encryptionType: string, aesEncryptedSecret: string, signature: string
        if (!user) {
          const caip10: string = walletToCAIP10({ account: searchedUser, chainId })
          await PushNodeClient.createUser({
            caip10,
            did: caip10,
            publicKey: '',
            encryptedPrivateKey: '',
            encryptionType: '',
            signature: 'pgp',
            sigType: 'pgp'
          })
          // If the user is being created here, that means that user don't have a PGP keys. So this intent will be in plaintext
          messageContent = message
          encryptionType = 'PlainText'
          aesEncryptedSecret = ''
          signature = ''
        } else {
          // It's possible for a user to be created but the PGP keys still not created
          if (!user.publicKey.includes('-----BEGIN PGP PUBLIC KEY BLOCK-----')) {
            messageContent = message
            encryptionType = 'PlainText'
            aesEncryptedSecret = ''
            signature = ''
          } else {
            const { cipherText, encryptedSecret, signature: pgpSignature } = await encryptAndSign({
              plainText: message,
              fromEncryptedPrivateKeyArmored: createdUser.encryptedPrivateKey,
              toPublicKeyArmored: currentChat.publicKey,
              fromPublicKeyArmored: createdUser.publicKey,
              did: didCreated
            })
            messageContent = cipherText
            encryptionType = 'pgp'
            aesEncryptedSecret = encryptedSecret
            signature = pgpSignature
          }
        }

        const msg: MessageIPFSWithCID | string = await PushNodeClient.createIntent({
          toDID: currentChat.did,
          fromDID: didCreated.id,
          fromCAIP10: walletToCAIP10({ account, chainId }),
          messageContent,
          messageType,
          signature,
          encType: encryptionType,
          sigType: signature,
          encryptedSecret: aesEncryptedSecret
        })
        if (typeof msg === 'string') {
          // Display toaster
          toast.error(msg, ToastPosition)
        } else {
          // We store the message in state decrypted so we display to the user the intent message
          msg.messageContent = message
          setMessages([...messages, msg])
          setNewMessage('')
          // Update inbox. We do this because otherwise the currentChat.threadhash after sending the first intent
          // will be undefined since it was not updated right after the intent was sent
          let inboxes: Feeds[] = await fetchInbox(didCreated)
          inboxes = await decryptFeeds({ feeds: inboxes, connectedUser: createdUser, did: didCreated })
          setInbox(inboxes)
          const result = inboxes.find((x) => x.did === currentChat.did)
          setChat(result)
          toast.success('Intent sent!', ToastPosition)
        }
      } else {
        setNewMessage('')
        setOpenSuccessSnackBar(true)
        setSnackbarText('Cannot send message, Intent is not approved!')
      }
    } catch (error) {
      console.log(error)
    }
    setMessageBeingSent(false)
  }

  const handleKeyPress = (e: any): void => {
    const x = e.keyCode
    if (x === 13) {
      handleSubmit(e)
    }
  }

  const textOnChange = (e: any): void => {
    setNewMessage(e.target.value)
  }

  const uploadFile = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file: File = e.target.files?.[0]
    if (file) {
      try {
        const TWO_MB = 1024 * 1024 * 2
        if (file.size > TWO_MB) {
          setOpenSuccessSnackBar(true)
          setSnackbarText('Files larger than 2mb is now allowed')
          return
        }
        setFileUploading(true)
        const messageType = file.type.startsWith('image') ? 'Image' : 'File'
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
          if (currentChat.intent === 'Pending') {
            sendIntent({ message: JSON.stringify(fileMessageContent), messageType: messageType })
          } else {
            sendMessage({
              message: JSON.stringify(fileMessageContent),
              messageType
            })
          }
          setFileUploading(false)
        }
      } catch (err) {
        console.log(err)
      }
    }
  }

  const addEmoji = (e: any, emojiObject: { emoji: any }): void => {
    setNewMessage(newMessage + emojiObject.emoji)
    setShowEmojis(false)
  }

  const sendGif = (url: string): void => {
    if (currentChat.intent === 'Pending') {
      sendIntent({ message: url, messageType: 'GIF' })
    } else {
      sendMessage({
        message: url,
        messageType: 'GIF'
      })
    }
  }
  const handleCloseSuccessSnackbar = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return
    }
    setOpenSuccessSnackBar(false)
  }

  return (
    <Container>
      {!viewChatBox ? (
        <Box>
          <HelloBox>
            <Typography>Say Hello to Push Chat</Typography>
          </HelloBox>
          <HelloText>You haven’t started a conversation yet.</HelloText>
          <HelloText>Begin by searching name.eth or 0x123...</HelloText>
        </Box>
      ) : (
        <>
          <Snackbar open={openReprovalSnackbar} autoHideDuration={10000} onClose={handleCloseSuccessSnackbar}>
            <Alert onClose={handleCloseSuccessSnackbar} severity="error" sx={{ width: '100%' }}>
              {SnackbarText}
            </Alert>
          </Snackbar>

          <ChatHeader>
            <UserInfo>
              <Avatar alt="Profile Picture" src={imageSource} />
              <Typography variant="body1" ml={1}>
                {caip10ToWallet(currentChat.msg.name)}
              </Typography>
            </UserInfo>
            <MoreOptions>
              <IconButton aria-label="more" onClick={(): void => setShowOption((option) => !option)}>
                <MoreVertIcon />
              </IconButton>
              {showOption && (
                <OptionContainer>
                  <Option>
                    <Icon>
                      <img src="/svg/chats/nickname.svg" height="24px" width="24px" alt="nickname" />
                    </Icon>
                    <Typography ml={1} variant="subtitle2">
                      Give Nickname
                    </Typography>
                  </Option>
                  <Option>
                    <Icon>
                      <img src="/svg/chats/block.svg" height="24px" width="24px" alt="block" />
                    </Icon>
                    <Typography ml={1} variant="subtitle2">
                      Block User
                    </Typography>
                  </Option>
                </OptionContainer>
              )}
            </MoreOptions>
          </ChatHeader>

          <MessageContainer>
            <ScrollToBottom>
              {Loading ? (
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                  <Loader type="Oval" color="#34C5F3" height={40} width={40} />
                </div>
              ) : (
                <>
                  {messages?.map((msg, i) => {
                    //const isLast = i === messages.length - 1
                    //const noTail = !isLast && messages[i + 1]?.fromDID === msg.fromDID

                    showTime = false
                    if (i >= 0) {
                      const duration = new Date(messages[i]?.timestamp)
                      const dateString = duration.toDateString()
                      if (dateString !== time || i === 0) {
                        showTime = true
                        time = dateString
                      }
                    }
                    return (
                      <div key={i}>
                        {!showTime ? null : <MessageTime>{time}</MessageTime>}
                        <Chats msg={msg} did={did} />
                        {/* {messages.length === 1 ? (
                          <FirstConversation>
                            This is your first conversation with the receipent, you will be able to continue the
                            conversation once the receipent accepts the intent
                          </FirstConversation>
                        ) : null} */}
                      </div>
                    )
                  })}
                </>
              )}
            </ScrollToBottom>
          </MessageContainer>

          {messageBeingSent ? (
            <Loader type="Oval" />
          ) : (
            <TypeBarContainer>
              {currentChat.intent === 'Pending' || currentChat.intent === 'Approved' ? (
                <Icon onClick={(): void => setShowEmojis(!showEmojis)}>
                  <img src="/svg/chats/smiley.svg" height="24px" width="24px" alt="" />
                </Icon>
              ) : null}
              {showEmojis && (
                <Picker
                  onEmojiClick={addEmoji}
                  pickerStyle={{
                    width: '300px',
                    position: 'absolute',
                    bottom: '2.5rem',
                    zindex: '700',
                    left: '2.5rem'
                  }}
                />
              )}
              {
                <TextInput
                  placeholder="Type your message"
                  onKeyDown={handleKeyPress}
                  onChange={textOnChange}
                  value={newMessage}
                />
              }
              <>
                {currentChat.intent === 'Pending' || currentChat.intent === 'Approved' ? (
                  <>
                    <label>
                      <Icon onClick={() => setIsGifPickerOpened(true)}>
                        <img src="/svg/chats/gif.svg" height="18px" width="22px" alt="" />
                      </Icon>
                      {isGifPickerOpened && <GifPicker setIsOpened={setIsGifPickerOpened} onSelect={sendGif} />}
                    </label>
                    <label>
                      <Icon>
                        <img src="/svg/chats/attachment.svg" height="24px" width="20px" alt="" />
                      </Icon>
                      <FileInput type="file" ref={fileInputRef} onChange={uploadFile} />
                    </label>
                  </>
                ) : null}

                {filesUploading ? (
                  <div className="imageloader">
                    <Loader type="Oval" color="#3467eb" height={20} width={20} />
                  </div>
                ) : (
                  <Icon onClick={handleSubmit}>
                    <img src="/svg/chats/send.svg" height="27px" width="27px" alt="" />
                  </Icon>
                )}
              </>
            </TypeBarContainer>
          )}
        </>
      )}
    </Container>
  )
}

const FirstConversation = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #657795;
  margin: 59px 0px 0px 0px;
`

const FileInput = styled.input`
  display: none;
`

const MessageTime = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #000000;
  margin: 15px 0px;
`

const MessageContainer = styled.div`
  position: absolute;
  top: 65px;
  left: 0;
  right: 0;
  margin: 0;
  width: 100%;
  max-height: calc(83.6vh - 130px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  &&::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`

const UserInfo = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
`

const ChatHeader = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 9px;
  left: 9px;
  right: 9px;
  height: 55px;
  border-radius: 29px;
  color: black;
  background: #ffffff;
  padding: 6px;
  font-weight: 500;
`

const Option = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const OptionContainer = styled.div`
  position: absolute;
  top: 55px;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 19px;
  width: 193px;
  background: #ffffff;
  border-radius: 16px;
  z-index: 100;
`

const MoreOptions = styled.div`
  position: relative;
`

const Icon = styled.i`
  padding: 0px;
  &:hover {
    cursor: pointer;
  }
`

const TextInput = styled.textarea`
  font-size: 16px;
  width: 75%;
  height: 25px;
  outline: none;
  border: none;
  resize: none;
  background: transparent;
`

const TypeBarContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  bottom: 9px;
  left: 9px;
  right: 9px;
  height: 55px;
  padding: 16px;
  border-radius: 13px;
  color: black;
  background: #ffffff;
`

const Container = styled(Content)`
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(179.97deg, #eef5ff 0.02%, rgba(236, 239, 255, 0) 123.25%);
  border-radius: 13px;
  height: inherit;
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: 400;
  justify-content: center;
  position: relative;
`

const HelloBox = styled(Box)`
  width: 333px;
  height: 75px;
  background: #ffffff;
  border-radius: 2px 16px 16px 16px;
  color: #000000;
  font-size: 24px;
  font-weight: 400;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: 10px;
`

const HelloText = styled(Typography)`
  color: #657795;
  font-size: 14px;
  margin-bottom: 5px;
`

export default ChatBox
