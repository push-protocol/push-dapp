import { AddNewChainStepsType } from './AddNewChain.types';

export const addNewChainSteps: AddNewChainStepsType = [
  { label: 'New Address' },
  { label: 'Change Network' },
  { label: 'Verify Alias Chain' },
];

export const chainLabels: { [key: number]: string } = {
  1: 'Ethereum',
  11155111: 'Ethereum Testnet',
  137: 'Polygon',
  80002: 'Polygon Testnet',
  97: 'BNB Testnet',
  56: 'BNB',
  42161: 'Arbitrum',
  421614: 'Arbitrum Testnet',
  11155420: 'Optimisim Testnet',
  10: 'Optimisim',
  2442: 'PolygonZK',
  1101: 'PolygonZK Mainnet',
  111557560: 'Cyber',
  7560: 'Cyber Testnet',
  122: 'Fuse',
  123: 'Fuse Testnet',
};
