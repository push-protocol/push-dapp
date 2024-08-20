export type ActiveStepKey = 'newaddress' | 'changenetwork' | 'verifyalias';
export type AddNewChainStepsType = Array<{ label: string; value: ActiveStepKey }>;
export type ALIAS_CHAIN =
  | 'POLYGON'
  | 'BSC'
  | 'OPTIMISM'
  | 'POLYGONZKEVM'
  | 'ARBITRUMONE'
  | 'FUSE'
  | 'BERACHAIN'
  | 'LINEA'
  | 'CYBERCONNECT'
  | 'BASE';
