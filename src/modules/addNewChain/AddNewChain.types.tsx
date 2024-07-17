export type ActiveStepKey = 'newaddress' | 'changenetwork' | 'verifyalias';
export type AddNewChainStepsType = Array<{ label: string; key: ActiveStepKey }>;
export type NewChainAddressValue = {
  alias: string;
  chainId: string;
};
