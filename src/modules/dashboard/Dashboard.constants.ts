import { PushAlpha, PushBot, PushDev } from 'blocks';

export const RecommendedChatList = [
  {
    chatParticipantAlias: 'eip155:0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666',
    payload: {
      chatId: '0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666',
      chatPic: PushBot,
      chatParticipant: 'Push Bot',
      chatGroup: true,
      chatTimestamp: null,
      chatMsg: {
        messageType: 'Text',
        messageContent: 'Chat with your sassy sidekick!',
      },
    },
  },
  {
    chatParticipantAlias: 'eip155:0x71Ffa5771E8019787190D098586EFe02026a3c8C',
    payload: {
      chatId: '0x71Ffa5771E8019787190D098586EFe02026a3c8C',
      chatPic: PushDev,
      chatParticipant: 'Push Dev Buddy',
      chatGroup: true,
      chatTimestamp: null,
      chatMsg: {
        messageType: 'Text',
        messageContent: 'Chat with your coding companion!',
      },
    },
  },
  {
    chatParticipantAlias: 'chatid:37799f9cb3ffd83eff4d2dc18913a3d9607f9c787a4374a7b3259bda28242cd6',
    payload: {
      chatId: '37799f9cb3ffd83eff4d2dc18913a3d9607f9c787a4374a7b3259bda28242cd6',
      chatPic: PushAlpha,
      chatParticipant: 'Push Alpha Comm',
      chatGroup: true,
      chatTimestamp: null,
      chatMsg: {
        messageType: 'Text',
        messageContent: 'VIP group for Push Fam!',
      },
    },
  },
];
