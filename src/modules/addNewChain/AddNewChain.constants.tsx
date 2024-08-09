import { AddNewChainStepsType } from './AddNewChain.types';
import { appConfig } from 'config';

export const addNewChainSteps: AddNewChainStepsType = [
  { label: 'New Address', value: 'newaddress' },
  { label: 'Change Network', value: 'changenetwork' },
  { label: 'Verify Alias Chain', value: 'verifyalias' },
];
export const allowedNetworks = appConfig.allowedNetworks.filter(
  (chain: number) => chain != appConfig.coreContractChain
);
