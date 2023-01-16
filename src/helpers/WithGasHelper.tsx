// React + Web3 Essentials
import React from 'react';
import { ethers } from 'ethers';

interface IExecuteDelegateTxProps {
  delegateeAddress: string;
  epnsToken: ethers.Contract;
  toast: any;
  setTxInProgress: React.Dispatch<React.SetStateAction<boolean>>;
  library: any;
  LoaderToast: ({ msg, color }: { msg: string; color: string }) => JSX.Element;
}

export const executeDelegateTx = async ({
  delegateeAddress,
  epnsToken,
  toast,
  setTxInProgress,
  library,
  LoaderToast,
}: IExecuteDelegateTxProps): Promise<void> => {
  console.log('delegateeAddress', delegateeAddress);
  let sendWithTxPromise: any;
  sendWithTxPromise = epnsToken.delegate(delegateeAddress);
  sendWithTxPromise
    .then(async (tx: any) => {
      let txToast = toast.dark(
        <LoaderToast
          msg="Waiting for Confirmation..."
          color="#35c5f3"
        />,
        {
          position: 'bottom-right',
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );

      try {
        await library.waitForTransaction(tx.hash);

        toast.update(txToast, {
          render: 'Transaction Completed!',
          type: toast.TYPE.SUCCESS,
          autoClose: 5000,
        });

        setTxInProgress(false);
      } catch (e) {
        toast.update(txToast, {
          render: 'Transaction Failed! (' + e.name + ')',
          type: toast.TYPE.ERROR,
          autoClose: 5000,
        });

        setTxInProgress(false);
      }
    })
    .catch((err: any) => {
      toast.dark('Transaction Cancelled!', {
        position: 'bottom-right',
        type: toast.TYPE.ERROR,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTxInProgress(false);
    });
};
