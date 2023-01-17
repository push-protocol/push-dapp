
export interface IVerifyAddressReturnType {
    index?: string;
    account?: string;
    amount?: number;
    proof?: any;
    merkleRoot?: Buffer;
    verified: boolean;
    claimable?: boolean;
  }