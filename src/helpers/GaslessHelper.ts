// React + Web3 Essentials
import { ethers } from 'ethers';

// External Packages
import { toast, ToastContent, ToastOptions } from 'react-toastify';

// Internal Components
import { toolingPostReq } from '../api/index';
import EPNSCoreHelper from './EPNSCoreHelper';

// Internal Configs
import { appConfig } from '../config';

// Constants
const GAS_LIMIT = 50;

const ERROR_TOAST_DEFAULTS = {
  type: toast.TYPE.ERROR,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};
interface ICreateTransactionObjectProps {
  delegateeAddress: string;
  account: string;
  epnsToken: ethers.Contract;
  addresses: any;
  signerObject: any;
  library: any;
  setTxLoading: (value: React.SetStateAction<boolean>) => void;
}

interface ICallDelegateAPIProps {
  signature: any;
  delegatee: string;
  nonce: number;
  expiry: string;
  account: string;
}

const checkForDelegateError = async (gasEstimate: any, library: any): Promise<string | boolean> => {
  // return false if no error
  // otherwise return error message
  // get gas price

  const gasPrice: number = await EPNSCoreHelper.getGasPriceInDollars(library);
  const totalCost: number = gasPrice * gasEstimate;
  if (totalCost > GAS_LIMIT) {
    return 'Gas Price is too high, Please try again in a while.';
  }
  return false;
};

export const createTransactionObject = async ({
  delegateeAddress,
  account,
  epnsToken,
  addresses,
  signerObject,
  library,
  setTxLoading,
}: ICreateTransactionObjectProps): Promise<any> => {
  console.log('🚀 ~ file: ViewDelegateeItem.js ~ line 63 ~ createTransactionObject ~ delegateeAddress', delegateeAddress);
  const contractName: string = await epnsToken.name();
  const nonce: any = await epnsToken.nonces(account);
  const chainId: number = appConfig.coreContractChain;
  const contractAddress: string = addresses.epnsToken;
  const now: Date = new Date();
  const secondsSinceEpoch: number = Math.round(now.getTime() / 1000);
  const expiry: string = (secondsSinceEpoch + 10800).toString();
  console.log(expiry);

  const domain = {
    name: contractName,
    chainId: chainId,
    verifyingContract: contractAddress,
  };

  const types = {
    Delegation: [
      { name: 'delegatee', type: 'address' },
      { name: 'nonce', type: 'uint256' },
      { name: 'expiry', type: 'uint256' },
    ],
  };

  const value: {
    delegatee: string;
    nonce: any;
    expiry: string;
  } = {
    delegatee: delegateeAddress?.toString(),
    nonce: nonce.toString(),
    expiry: expiry.toString(),
  };
  let signature: any;
  try {
    signature = await signerObject._signTypedData(domain, types, value);
    var { r, s, v } = ethers.utils.splitSignature(signature);
    const gasEstimate = await epnsToken.estimateGas.delegateBySig(delegateeAddress, nonce, expiry, v, r, s);

    const errorMessage = await checkForDelegateError(gasEstimate, library);
    if (errorMessage) {
      return toast.dark(errorMessage, {
        position: 'bottom-right',
        ...ERROR_TOAST_DEFAULTS,
      });
    }
    try {
      await callDelegateAPI({ signature, delegatee: delegateeAddress, nonce, expiry, account });
      toast.dark('Successfully Delegated', {
        position: 'bottom-right',
        type: toast.TYPE.SUCCESS,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      toast.dark(err.message, {
        position: 'bottom-right',
        ...ERROR_TOAST_DEFAULTS,
      });
    } finally {
      setTxLoading(false);
    }
  } catch (e) {
    console.log('error', e);
    toast.dark(e.message, {
      position: 'bottom-right',
      ...ERROR_TOAST_DEFAULTS,
    });
    setTxLoading(false);
  }
};

const callDelegateAPI = async ({
  signature,
  delegatee,
  nonce,
  expiry,
  account,
}: ICallDelegateAPIProps): Promise<void> => {
  console.log(
    `🚀 ~ file: PushGovernance.tsx ~ line 271 ~ callDelegateAPI ~ signature obj delegator: ${account} signature: ${signature} delegatee: ${delegatee} nonce: ${nonce} expiry: ${expiry}  `
  );
  await toolingPostReq('/gov/gasless_delegate', {
    delegator: account,
    signature: signature,
    delegatee: delegatee,
    nonce: nonce.toString(),
    expiry: expiry,
  });
};
