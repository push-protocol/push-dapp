import React, { ChangeEvent, useContext, useEffect, useRef, useState } from 'react'
import './chatBox.css'
// @ts-ignore
import Chats from '../chats/chats'
import epnsLogo from '../w2wAsset/epnsLogo.png'
import { Context, ToastPosition } from '../w2wIndex'
// @ts-ignore
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { envConfig } from '@project/contracts'
import { useWeb3React } from '@web3-react/core'
import * as PushNodeClient from 'api'
import { MessageIPFSWithCID, User } from 'api'
import { AppContext } from 'components/chat/w2wIndex'
import Picker from 'emoji-picker-react'
import { Web3Provider } from 'ethers/providers'
import 'font-awesome/css/font-awesome.min.css'
import { caip10ToWallet, decryptAndVerifySignature, encryptAndSign, walletToCAIP10 } from 'helpers/w2w'
import { MessageIPFS } from 'helpers/w2w/ipfs'
import { CID } from 'ipfs-http-client'
import Loader from 'react-loader-spinner'
import { useQuery } from 'react-query'
import ScrollToBottom from 'react-scroll-to-bottom'
import { toast } from 'react-toastify'
import Dropdown from '../dropdown/dropdown'
import { FileMessageContent } from '../Files/Files'
import GifPicker from '../Gifs/gifPicker'
import GifIcon from '../W2WIcons/GifIcon'
import { intitializeDb } from '../w2wIndexeddb'

const INFURA_URL = envConfig.infuraApiUrl

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const ChatBox = (): JSX.Element => {
  const { account } = useWeb3React<Web3Provider>()
  const { currentChat, viewChatBox, did, searchedUser, connectedUser, inbox }: AppContext = useContext<AppContext>(
    Context
  )
  const [newMessage, setNewMessage] = useState<string>('')
  const [textAreaDisabled, setTextAreaDisabled] = useState<boolean>(false)
  const [showEmojis, setShowEmojis] = useState<boolean>(false)
  const { chainId } = useWeb3React<Web3Provider>()
  const [Loading, setLoading] = useState<boolean>(true)
  const [messages, setMessages] = useState<MessageIPFSWithCID[]>([])
  const [imageSource, setImageSource] = useState<string>('')
  const [filesUploading, setFileUploading] = useState<boolean>(false)
  const imageInputRef = useRef<HTMLInputElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isGifPickerOpened, setIsGifPickerOpened] = useState<boolean>(false)
  const [openReprovalSnackbar, setOpenSuccessSnackBar] = useState<boolean>(false)
  const [SnackbarText, setSnackbarText] = useState<string>('')
  const [chatCurrentCombinedDID, setChatCurrentCombinedDID] = useState<string>('')
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

  const sendMessage = async ({
    account,
    fromDid,
    toDid,
    message,
    messageType
  }: {
    account: string
    fromDid: string
    toDid: string
    message: string
    messageType: string
  }): Promise<void> => {
    if (
      !connectedUser.publicKey.includes('-----BEGIN PGP PUBLIC KEY BLOCK-----') ||
      !currentChat.publicKey.includes('-----BEGIN PGP PUBLIC KEY BLOCK-----')
    ) {
      throw "User doesn't have public key"
    }
    let msg: MessageIPFSWithCID
    try {
      msg = {
        fromCAIP10: walletToCAIP10({ account, chainId }),
        fromDID: fromDid,
        toDID: toDid,
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
      const { cipherText, encryptedSecret, signature, sigType, encType } = await encryptAndSign({
        plainText: message,
        fromEncryptedPrivateKeyArmored: connectedUser.encryptedPrivateKey,
        fromPublicKeyArmored: connectedUser.publicKey,
        toPublicKeyArmored: currentChat.publicKey,
        did
      })
      const savedMsg: MessageIPFSWithCID | string = await PushNodeClient.postMessage({
        fromCAIP10: walletToCAIP10({ account, chainId }),
        fromDID: fromDid,
        toDID: toDid,
        messageContent: cipherText,
        messageType,
        signature,
        encType,
        sigType,
        encryptedSecret
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
  }

  const handleSubmit = (e: { preventDefault: () => void }): void => {
    e.preventDefault()

    if (newMessage.trim() !== '') {
      if (currentChat.intent === 'Approved') {
        sendMessage({
          account,
          fromDid: did.id,
          toDid: currentChat.did,
          message: newMessage,
          messageType: 'Text'
        })
      } else {
        sendIntent({ message: newMessage, messageType: 'Text' })
      }
    }
  }

  const sendIntent = async ({ message, messageType }: { message: string; messageType: string }): Promise<void> => {
    try {
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
              fromEncryptedPrivateKeyArmored: connectedUser.encryptedPrivateKey,
              toPublicKeyArmored: currentChat.publicKey,
              fromPublicKeyArmored: connectedUser.publicKey,
              did
            })
            messageContent = cipherText
            encryptionType = 'pgp'
            aesEncryptedSecret = encryptedSecret
            signature = pgpSignature
          }
        }

        const msg: MessageIPFSWithCID | string = await PushNodeClient.createIntent({
          toDID: currentChat.did,
          fromDID: did.id,
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
  }

  const handleKeyPress = (e): void => {
    const x = e.keyCode
    if (x === 13) {
      handleSubmit(e)
    }
  }

  const textOnChange = (e): void => {
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
              account,
              fromDid: did.id,
              toDid: currentChat.did,
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

  const addEmoji = (e, emojiObject: { emoji: any }): void => {
    setNewMessage(newMessage + emojiObject.emoji)
    setShowEmojis(false)
  }

  const sendGif = (url: string): void => {
    if (currentChat.intent === 'Pending') {
      sendIntent({ message: url, messageType: 'GIF' })
    } else {
      sendMessage({
        account,
        fromDid: did.id,
        toDid: currentChat.did,
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
  const placeholderTextArea = (): string => {
    if (currentChat.intent === 'Pending') {
      return "Can't send any messages until intent is accepted !"
    }
    if (currentChat.intent === 'Approved') return 'New Text Message'
    else return 'Intent Message'
  }

  return (
    <div className="chatBox_body">
      {!viewChatBox ? (
        <div className="defaultChatPage">
          <div className="defaultChatPageText">
            <img src={epnsLogo} alt="" />
            <p>W2W DAPP</p>
            <span>Start a conversation by clicking on any dicussion!</span>
          </div>
        </div>
      ) : (
        <>
          <Snackbar open={openReprovalSnackbar} autoHideDuration={10000} onClose={handleCloseSuccessSnackbar}>
            <Alert onClose={handleCloseSuccessSnackbar} severity="error" sx={{ width: '100%' }}>
              {SnackbarText}
            </Alert>
          </Snackbar>

          <div className="chatBoxNavBar">
            <div className="chatBoxUserName">
              <img src={imageSource} alt="" />
              <div className="chatBoxNavDetail">
                <p className="chatBoxWallet">{caip10ToWallet(currentChat.msg.name)}</p>
                <div>
                  <Dropdown wallets={currentChat.wallets.split(',')} />{' '}
                </div>
              </div>
            </div>
          </div>

          <ScrollToBottom className="chatBoxTop">
            {Loading ? (
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <Loader type="Oval" color="#34C5F3" height={40} width={40} />
              </div>
            ) : (
              <>
                {currentChat.intent === 'Approved' || currentChat.threadhash ? (
                  messages?.map((msg, i) => {
                    const isLast = i === messages.length - 1
                    const noTail = !isLast && messages[i + 1]?.fromDID === msg.fromDID

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
                        {!showTime ? null : (
                          <div className="showDateInChat">
                            <span>{time}</span>
                          </div>
                        )}
                        <Chats msg={msg} did={did} noTail={noTail} />
                      </div>
                    )
                  })
                ) : (
                  <div className="askForIntent">
                    <p>Ask for Intent to send messages</p>
                  </div>
                )}
              </>
            )}
          </ScrollToBottom>

          <div className="chatBoxBottom">
            {currentChat.intent === 'Pending' || currentChat.intent === 'Approved' ? (
              <>
                <label>
                  <i className="fa fa-link" aria-hidden="true"></i>
                  <input
                    type="file"
                    id="inputTag"
                    className="chatBoxBottomInput"
                    ref={fileInputRef}
                    onChange={uploadFile}
                  />
                </label>

                <div className="gifPicker">
                  {isGifPickerOpened ? <GifPicker setIsOpened={setIsGifPickerOpened} onSelect={sendGif} /> : null}
                  <button className="GifIcon_btn" onClick={() => setIsGifPickerOpened(true)}>
                    <GifIcon />
                  </button>
                </div>
              </>
            ) : null}
            {currentChat.intent === 'Pending' ? (
              <textarea
                disabled
                className="chatMessageInput"
                placeholder={placeholderTextArea()}
                onKeyDown={handleKeyPress}
                onChange={textOnChange}
                value={newMessage}
              ></textarea>
            ) : (
              <>
                <textarea
                  disabled={textAreaDisabled}
                  className="chatMessageInput"
                  placeholder={placeholderTextArea()}
                  onKeyDown={handleKeyPress}
                  onChange={textOnChange}
                  value={newMessage}
                  autoFocus
                ></textarea>
              </>
            )}
            {currentChat.intent === 'Pending' || currentChat.intent === 'Approved' ? (
              <button
                disabled={textAreaDisabled}
                className="emojiButton"
                onClick={(): void => setShowEmojis(!showEmojis)}
              >
                <i className="fa fa-smile" aria-hidden="true"></i>
              </button>
            ) : null}
            {showEmojis && (
              <Picker
                onEmojiClick={addEmoji}
                pickerStyle={{ width: '20%', position: 'absolute', top: '13rem', zindex: '700', left: '60vw' }}
              />
            )}
            {filesUploading ? (
              <div className="imageloader">
                <Loader type="Oval" color="#3467eb" height={20} width={20} />
              </div>
            ) : (
              <button className="chatSubmitButton" onClick={handleSubmit}>
                <i className="fa fa-paper-plane" aria-hidden="true"></i>
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}
export default ChatBox
