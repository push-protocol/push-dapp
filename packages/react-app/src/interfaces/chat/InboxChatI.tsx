export interface InboxChatI {
  name: string
  profilePicture: string
  timestamp: number
  fromDID: string
  toDID: string
  lastMessage: string
  messageType: string
  encType: string
  signature: string
  signatureType: string
  encryptedSecret: string
}
