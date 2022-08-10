import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDeviceWidthCheck } from "hooks";
import {AiFillCopy,AiOutlineCopy } from 'react-icons/ai';

const DelegateInfo = ({ delegateAddress, isDelegate }) => {
  const [addressText,setAddressText] = useState(delegateAddress);
  const [isCopied, setIsCopied] = useState(false)
  const isMobile = useDeviceWidthCheck(700);

  useEffect(()=>{
    if(!isMobile){
      setAddressText(delegateAddress)
    }else{
      // clip address
      const clippedAddrs = `${delegateAddress.substring(0, 6)}.....${delegateAddress.substring(delegateAddress.length - 6)}`
      setAddressText(clippedAddrs)
    }
  },[isMobile])

  return (
    <>
    {!isDelegate ? 
      <Wallet
        onMouseLeave={() => setIsCopied(false)}
        minWidth={!isMobile ? '350px' : '120px'}
      >
        <WalletInfoContent {...{addressText,isCopied,setIsCopied,delegateAddress}}/>
      </Wallet>
    :
      <HoverWallet
        onMouseLeave={() => setIsCopied(false)}
        minWidth={!isMobile ? '350px' : '120px'}
      >
        <WalletInfoContent {...{addressText,isCopied,setIsCopied,delegateAddress}}/>
      </HoverWallet>
    }
    </>
  )
}

const WalletInfoContent = ({addressText,isCopied,setIsCopied,delegateAddress})=>{
  return(
    <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
      <div style={{paddingTop:3}}> 
        {addressText}  
      </div>
      <div 
        style={{marginLeft:'10px',cursor:'pointer'}} 
        onClick={() => {
          navigator.clipboard.writeText(delegateAddress)
          setIsCopied(true)
        }}>
        {
          isCopied ? 
          <AiFillCopy size={18} color="white" style={{paddingTop:6}}/>
          :  
          <AiOutlineCopy size={18} color="white" style={{paddingTop:6}}/>
        }
      </div>
    </div>
  )
}

const WalletAddressDisplay = styled.span`
  flex: 3;
  margin-right:30px;
  margin-left: 10px;
  padding: 8px 30px;
  max-height: 30px; 
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  min-width: ${props => props.minWidth || 'fit-content'};
  
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 164%;
  border-radius: 13px;

  &:active {
    opacity: 0.75;
    cursor: pointer;
  }

`

const HoverWallet = styled(WalletAddressDisplay)`
  color: ${props => props.theme.color};

  &:hover {
    background: rgb(226,8,128);
    background: linear-gradient(107deg, rgba(226,8,128,1) 30%, rgba(103,76,159,1) 70%, rgba(53,197,243,1) 100%);
    opacity: 0.9;
    color: #fff;
    cursor: pointer;
    pointer: hand;
  }
  
`

const Wallet = styled(WalletAddressDisplay)`
  color: #fff;
  background: rgb(226,8,128);
  background: linear-gradient(107deg, rgba(226,8,128,1) 30%, rgba(103,76,159,1) 70%, rgba(53,197,243,1) 100%);
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
`

export default DelegateInfo;