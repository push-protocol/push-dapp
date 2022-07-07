import { ethers } from "ethers";
import EPNSCoreHelper from "helpers/EPNSCoreHelper";
import { toast } from 'react-toastify';
import {toolingPostReq} from "api/index"
import { envConfig } from "@project/contracts";
const GAS_LIMIT = 50;

const ERROR_TOAST_DEFAULTS = {
    type: toast.TYPE.ERROR,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  };

const checkForDelegateError = async(gasEstimate,library) => {
    // return false if no error
    // otherwise return error message
    // get gas price

    const gasPrice = await EPNSCoreHelper.getGasPriceInDollars(library);
    const totalCost = gasPrice * gasEstimate;
    if(totalCost > GAS_LIMIT){
      return "Gas Price is too high, Please try again in a while." 
    }
    return false
  }


export const createTransactionObject = async (newDelegatee,account,epnsToken,addresses,signerObject,library,setTxLoading) => {
    

    console.log("🚀 ~ file: ViewDelegateeItem.js ~ line 63 ~ createTransactionObject ~ newDelegatee", newDelegatee)
      const contractName = await epnsToken.name()
      const nonce = await epnsToken.nonces(account)
      const chainId = envConfig.coreContractChain
      const contractAddress = addresses.epnsToken
      const now = new Date()
      const secondsSinceEpoch = Math.round(now.getTime() / 1000)
      const expiry = (secondsSinceEpoch + 10800).toString()
      console.log(expiry)
  
      const domain = {
        name: contractName,
        chainId: chainId,
        verifyingContract: contractAddress
      }
  
      const types = {
        Delegation: [
          { name: "delegatee", type: "address" },
          { name: "nonce", type: "uint256" },
          { name: "expiry", type: "uint256" },
        ]
      }
  
      const value = {
        'delegatee': newDelegatee.toString(),
        'nonce': nonce.toString(),
        'expiry': expiry.toString()
      }
      let signature;
      try{
      signature=await signerObject._signTypedData(domain, types, value);
      var {r, s, v} = ethers.utils.splitSignature(signature);
      const gasEstimate = await epnsToken.estimateGas.delegateBySig(newDelegatee, nonce, expiry, v, r, s);
        
      const errorMessage = await checkForDelegateError(gasEstimate,library);
      if(errorMessage){
        return toast.dark(errorMessage, {
          position: "bottom-right",
          ...ERROR_TOAST_DEFAULTS
        });
      }
      try{
        await callDelegateAPI(signature, newDelegatee, nonce, expiry, account)
         toast.dark("Successfully Delegated", {
        position: "bottom-right",
        type: toast.TYPE.SUCCESS,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      }catch(err){
        toast.dark(err.message, {
          position: "bottom-right",
          ...ERROR_TOAST_DEFAULTS
        });
      }
      finally{
        setTxLoading(false);
      }
     }
      catch(e){
        console.log("error",e);
        toast.dark(e.message, {
          position: "bottom-right",
          ...ERROR_TOAST_DEFAULTS
        });
        setTxLoading(false);
      }
      
  
    }
  
    const callDelegateAPI = async (signature, delegatee, nonce, expiry,account) => {
      console.log(`🚀 ~ file: PushGovernance.tsx ~ line 271 ~ callDelegateAPI ~ signature obj delegator: ${account} signature: ${signature} delegatee: ${delegatee} nonce: ${nonce} expiry: ${expiry}  `)
      await toolingPostReq("/gov/gasless_delegate", { delegator: account, signature: signature, delegatee: delegatee, nonce: nonce.toString(), expiry: expiry })
    }
  