import React  from 'react';

export const executeDelegateTx = async (delegateeAddress,epnsToken,toast,setTxInProgress,library,LoaderToast) => {
    console.log("delegateeAddress", delegateeAddress)
    let sendWithTxPromise;
    sendWithTxPromise = epnsToken.delegate(delegateeAddress);
    sendWithTxPromise
      .then(async tx => {

        let txToast = toast.dark(<LoaderToast msg="Waiting for Confirmation..." color="#35c5f3"/>, {
          position: "bottom-right",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        try {
          await library.waitForTransaction(tx.hash);

          toast.update(txToast, {
            render: "Transaction Completed!",
            type: toast.TYPE.SUCCESS,
            autoClose: 5000
          });

          setTxInProgress(false);
        }
        catch(e) {
          toast.update(txToast, {
            render: "Transaction Failed! (" + e.name + ")",
            type: toast.TYPE.ERROR,
            autoClose: 5000
          });

          setTxInProgress(false);
        }
      })
      .catch(err => {
        toast.dark('Transaction Cancelled!', {
          position: "bottom-right",
          type: toast.TYPE.ERROR,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setTxInProgress(false);
      })

  }