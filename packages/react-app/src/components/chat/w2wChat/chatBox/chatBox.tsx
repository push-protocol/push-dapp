import React, { useState, useContext, useEffect, useRef, ChangeEvent } from 'react'
import './chatBox.css'
// @ts-ignore
import epnsLogo from '../w2wAsset/epnsLogo.png'
import { Context, ToastPosition } from '../w2wIndex'
import Chats from '../chats/chats'
// @ts-ignore
import { envConfig } from '@project/contracts'
import 'font-awesome/css/font-awesome.min.css'
import Picker from 'emoji-picker-react'
import * as PushNodeClient from '../../../../api'
import Dropdown from '../dropdown/dropdown'
import { intitializeDb } from '../w2wIndexeddb'
import * as IPFSHelper from '../../../../helpers/w2w/ipfs'
import { encryptAndSign, decryptAndVerifySignature, caip10ToWallet, walletToCAIP10 } from '../../../../helpers/w2w'
import { CID } from 'ipfs-http-client'
import { MessageIPFS } from '../../../../helpers/w2w/ipfs'
import Loader from 'react-loader-spinner'
import GifIcon from '../W2WIcons/GifIcon'
import { Web3Provider } from 'ethers/providers'
import { useWeb3React } from '@web3-react/core'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import GifPicker from '../Gifs/gifPicker'
import { useQuery } from 'react-query'
import ScrollToBottom from 'react-scroll-to-bottom'
import { AppContext } from '../../../../components/chat/w2wChat/w2wIndex'
import { toast } from 'react-toastify'
import { DID } from 'dids'
import { User } from '../../../../api'

const INFURA_URL = envConfig.infuraApiUrl

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const ChatBox = (): JSX.Element => {
  const { account } = useWeb3React<Web3Provider>()
  const { currentChat, viewChatBox, did, setChat, searchedUser, connectedUser }: AppContext = useContext<AppContext>(
    Context
  )
  const [newMessage, setNewMessage] = useState<string>('')
  const [textAreaDisabled, setTextAreaDisabled] = useState<boolean>(false)
  const [showEmojis, setShowEmojis] = useState<boolean>(false)
  const { chainId } = useWeb3React<Web3Provider>()
  const [Loading, setLoading] = useState<boolean>(true)
  const [messages, setMessages] = useState<MessageIPFS[]>([])
  const [imageSource, setImageSource] = useState<string>('')
  const [hasIntent, setHasIntent] = useState<boolean>(true)
  const [wallets, setWallets] = useState<string[]>([])
  const [filesUploading, setFileUploading] = useState<boolean>(false)
  const imageInputRef = useRef<HTMLInputElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isGifPickerOpened, setIsGifPickerOpened] = useState<boolean>(false)
  const [intentSentandPending, setIntentSentandPending] = useState<string>('')
  const [openReprovalSnackbar, setOpenSuccessSnackBar] = useState<boolean>(false)
  const [SnackbarText, setSnackbarText] = useState<string>('')
  let showTime = false
  let time = ''

  const getMessagesFromCID = async ({ messageCID, did }: { messageCID: string; did: DID }): Promise<void> => {
    if (!messageCID) {
      return
    }

    setMessages([])

    while (messageCID) {
      const messageFromIndexDB: any = await intitializeDb<string>('Read', 2, 'CID_store', messageCID, '', 'cid')

      let msgIPFS: MessageIPFS
      if (messageFromIndexDB !== undefined) {
        msgIPFS = messageFromIndexDB.body
      } else {
        const messageFromIPFS: MessageIPFS = await IPFSHelper.get(messageCID)
        await intitializeDb<MessageIPFS>('Insert', 2, 'CID_store', messageCID, messageFromIPFS, 'cid')
        msgIPFS = messageFromIPFS
      }

      // Decrypt message
      if (msgIPFS.enc_type !== 'PlainText' && msgIPFS.enc_type !== null) {
        // To do signature verification it depends on who has sent the message
        let signatureValidationPubliKey: string
        if (msgIPFS.fromDID === connectedUser.did) {
          signatureValidationPubliKey = connectedUser.pgp_pub
        } else {
          signatureValidationPubliKey = currentChat.pgp_pub
        }
        msgIPFS.messageContent = await decryptAndVerifySignature({
          cipherText: msgIPFS.messageContent,
          encryptedSecretKey: msgIPFS.encryptedSecret,
          did: did,
          encryptedPrivateKeyArmored: connectedUser.pgp_priv_enc,
          publicKeyArmored: signatureValidationPubliKey,
          signatureArmored: msgIPFS.signature
        })
      }

      setMessages((m) => [msgIPFS, ...m])

      const link = msgIPFS.link
      if (link) {
        messageCID = link
      } else {
        break
      }
    }
  }

  const getMessagesFromIPFS = async (): Promise<void> => {
    setNewMessage('')
    setLoading(true)
    let hasintent = false
    if (currentChat) {
      try {
        CID.parse(currentChat.profile_picture) // Will throw exception if invalid CID
        setImageSource(INFURA_URL + `${currentChat.profile_picture}`)
      } catch (err) {
        setImageSource(currentChat.profile_picture)
      }
      const intentStatus = await PushNodeClient.getIntent(currentChat.did, did.id)
      setIntentSentandPending(intentStatus.intent)
      hasintent = intentStatus.hasIntent
      setHasIntent(intentStatus.hasIntent)

      if (currentChat?.threadhash && hasintent) {
        await getMessagesFromCID({
          messageCID: currentChat.threadhash,
          did
        })
      } else {
        setMessages([])
      }
      const walletsResult: string[] = await PushNodeClient.getDidLinkWallets(currentChat.did)
      setWallets(walletsResult)
      setLoading(false)
    }
  }

  // const { data } = useQuery<any>('current', getMessagesFromIPFS, { refetchInterval: 5000 })

  // useEffect(() => {
  //   function updateData(): void {
  //     if (data !== undefined && currentChat?.wallets) {
  //       const newData = data?.filter((x: any) => x?.wallets === currentChat?.wallets)[0]
  //       if (newData?.intent === 'Approved') {
  //         setChat(newData)
  //       }
  //     }
  //   }
  //   const interval = setInterval(() => updateData(), 2000)
  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [data, currentChat?.wallets])

  useEffect(() => {
    getMessagesFromIPFS().catch((err) => console.error(err))
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
      !connectedUser.pgp_pub.includes('-----BEGIN PGP PUBLIC KEY BLOCK-----') ||
      !currentChat.pgp_pub.includes('-----BEGIN PGP PUBLIC KEY BLOCK-----')
    ) {
      throw "User doesn't have public key"
    }
    let msg: MessageIPFS
    try {
      msg = {
        fromWallet: account,
        fromDID: fromDid,
        toDID: toDid,
        messageContent: message,
        messageType,
        signature: '',
        enc_type: '',
        sigType: '',
        timestamp: Date.now(),
        encryptedSecret: '',
        link: ''
      }
      setNewMessage('')
      setMessages([...messages, msg])
      const { cipherText, encryptedSecret, signature, sigType, encType } = await encryptAndSign({
        plainText: message,
        fromEncryptedPrivateKeyArmored: connectedUser.pgp_priv_enc,
        fromPublicKeyArmored: connectedUser.pgp_pub,
        toPublicKeyArmored: currentChat.pgp_pub,
        did
      })
      const savedMsg: MessageIPFS = await PushNodeClient.postMessage({
        fromWallet: account,
        fromDID: fromDid,
        toDID: toDid,
        messageContent: cipherText,
        messageType,
        signature,
        encType,
        sigType,
        encryptedSecret
      })
      // const inbox = await fetchInbox(did)
      // renderInbox(inbox)
      const latesThreadhash: string = await PushNodeClient.getLatestThreadhash({
        firstDID: currentChat.did,
        secondDID: did.id
      })
      await intitializeDb<MessageIPFS>('Insert', 2, 'CID_store', latesThreadhash, savedMsg, 'cid')
    } catch (error) {
      console.log(error)
      toast.error('Cannot send Message, Try again later', ToastPosition)
    }
  }

  const handleSubmit = (e: { preventDefault: () => void }): void => {
    e.preventDefault()

    if (newMessage.trim() !== '') {
      if (hasIntent && intentSentandPending === 'Approved') {
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
      if (!hasIntent && intentSentandPending === 'Pending') {
        const user: User = await PushNodeClient.getUser({ did: currentChat.did, wallet: '' })
        let messageContent: string, encryptionType: string, aesEncryptedSecret: string, signature: string
        if (!user) {
          const caip10: string = walletToCAIP10(searchedUser, chainId)
          await PushNodeClient.createUser({
            wallet: caip10,
            did: caip10,
            pgp_pub: '',
            pgp_priv_enc: '',
            pgp_enc_type: '',
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
          if (!user.pgp_pub.includes('-----BEGIN PGP PUBLIC KEY BLOCK-----')) {
            messageContent = message
            encryptionType = 'PlainText'
            aesEncryptedSecret = ''
            signature = ''
          } else {
            const { cipherText, encryptedSecret, signature: pgpSignature } = await encryptAndSign({
              plainText: message,
              fromEncryptedPrivateKeyArmored: connectedUser.pgp_priv_enc,
              toPublicKeyArmored: currentChat.pgp_pub,
              fromPublicKeyArmored: connectedUser.pgp_pub,
              did
            })
            messageContent = cipherText
            encryptionType = 'pgp'
            aesEncryptedSecret = encryptedSecret
            signature = pgpSignature
          }
        }

        const msg: MessageIPFS = await PushNodeClient.createIntent({
          toDID: currentChat.did,
          fromDID: did.id,
          fromWallet: account,
          message: messageContent,
          messageType,
          signature: signature,
          encType: encryptionType,
          sigType: signature,
          encryptedSecret: aesEncryptedSecret
        })
        // We store the message in state decrypted so we display to the user the intent message
        msg.messageContent = message
        setHasIntent(true)
        setMessages([...messages, msg])
        setNewMessage('')
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

  const uploadFile = async (file: File): Promise<void> => {
    try {
      const TWO_MB = 1024 * 1024 * 2
      if (file.size > TWO_MB) {
        setOpenSuccessSnackBar(true)
        setSnackbarText('Files larger than 2mb is now allowed')
        return
      }
      setFileUploading(true)
      const type = file.type.startsWith('image') ? 'Image' : 'File'
      let content: string
      if (type === 'File') {
        const reader = new FileReader()
        let resultingfile
        reader.readAsDataURL(file)
        reader.onloadend = async (e): Promise<void> => {
          resultingfile = { content: e.target.result, name: file.name, type: file.type, size: file.size }
          if (!hasIntent && intentSentandPending === 'Pending') {
            sendIntent({ message: JSON.stringify(resultingfile), messageType: type })
          } else {
            sendMessage({
              account,
              fromDid: did.id,
              toDid: currentChat.did,
              message: JSON.stringify(resultingfile),
              messageType: type
            })
          }
          setFileUploading(false)
        }
      } else {
        const cid = await IPFSHelper.uploadImage(file)
        content = cid
        if (!hasIntent && intentSentandPending === 'Pending') {
          sendIntent({ message: content.toString(), messageType: type })
        } else {
          sendMessage({
            account,
            fromDid: did.id,
            toDid: currentChat.did,
            message: content.toString(),
            messageType: type
          })
        }
        setFileUploading(false)
      }
    } catch (err) {
      console.log(err)
    }
  }
  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0]
    if (file) uploadFile(file)
  }
  const addEmoji = (e, emojiObject: { emoji: any }): void => {
    setNewMessage(newMessage + emojiObject.emoji)
    setShowEmojis(false)
  }

  const sendGif = (url: string): void => {
    if (!hasIntent && intentSentandPending === 'Pending') {
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
    if (intentSentandPending === 'Pending' && hasIntent === true) {
      return "Can't send any messages until intent is accepted !"
    }
    if (hasIntent === true && intentSentandPending === 'Approved') return 'New Text Message'
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
                <div>{hasIntent ? <Dropdown wallets={wallets} /> : null}</div>
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
                {hasIntent ? (
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
            {(!hasIntent && intentSentandPending === 'Pending') ||
            (hasIntent && intentSentandPending === 'Approved') ? (
              <>
                <label>
                  <i className="fa fa-2x fa-camera"></i>
                  <input
                    type="file"
                    id="inputTag"
                    className="chatBoxBottomInput"
                    ref={imageInputRef}
                    accept="image/*"
                    onChange={handleFileInputChange}
                  />
                </label>
                <label>
                  <i className="fa fa-link" aria-hidden="true"></i>
                  <input
                    type="file"
                    id="inputTag"
                    className="chatBoxBottomInput"
                    ref={fileInputRef}
                    onChange={handleFileInputChange}
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
            {hasIntent && intentSentandPending === 'Pending' ? (
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
            {(!hasIntent && intentSentandPending === 'Pending') ||
            (hasIntent && intentSentandPending === 'Approved') ? (
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
