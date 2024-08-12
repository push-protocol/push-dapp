import { PushAlpha, PushBot, PushDev } from 'blocks';

import { ChatType, EnvKeys, SourceKeys } from './Dashboard.types';

export const recommendedChatList: ChatType[] = [
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

export const hottestChannels: Record<EnvKeys, Array<string>> = {
  prod: [
    '0x90A48D5CF7343B08dA12E067680B4C6dbfE551Be',
    '0xe56f1D3EDFFF1f25855aEF744caFE7991c224FFF',
    '0x983110309620D911731Ac0932219af06091b6744',
    '0x8Cd0ad5C55498Aacb72b6689E1da5A284C69c0C7',
    '0x57cD6665e725232123F5250328E35Db6ABf6d80C',
  ],
  alpha: [
    '0x90A48D5CF7343B08dA12E067680B4C6dbfE551Be',
    '0xe56f1D3EDFFF1f25855aEF744caFE7991c224FFF',
    '0x983110309620D911731Ac0932219af06091b6744',
    '0x8Cd0ad5C55498Aacb72b6689E1da5A284C69c0C7',
    '0x57cD6665e725232123F5250328E35Db6ABf6d80C',
  ],
  staging: [
    '0xB88460Bb2696CAb9D66013A05dFF29a28330689D',
    '0x9601f08b9EcB981D273B72e7f33964Cb98f977fe',
    '0x94c3016ef3e503774630fC71F59B8Da9f7D470B7',
    '0xa1016081D6Da53b4246178eD83922C55F7171e54',
    '0x08D77bD7500a07d791dD1323919C22e1FDb72224',
  ],
  dev: [
    '0xf9dF4b44Bb6BAf88074bb97C654bec0e4f137fE6',
    '0x778D3206374f8AC265728E18E3fE2Ae6b93E4ce4',
    '0x35B84d6848D16415177c64D64504663b998A6ab4',
    '0x74415Bc4C4Bf4Baecc2DD372426F0a1D016Fa924',
    '0xD8634C39BBFd4033c0d3289C4515275102423681',
  ],
};

export const trendingSource: Record<EnvKeys, SourceKeys> = {
  prod: 'ETH_MAINNET',
  alpha: 'ETH_MAINNET',
  staging: 'All',
  dev: 'All',
};

//last 7 days and move to conifg

export const firstEndDate = new Date(Date.now()).toISOString().split('T')[0];
export const secondEndDate = new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0];
export const startDate = new Date(Date.now() - 14 * 86400000).toISOString().split('T')[0];
