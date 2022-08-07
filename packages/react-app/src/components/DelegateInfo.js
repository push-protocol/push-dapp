import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDeviceWidthCheck } from "hooks";
import {AiFillCopy,AiOutlineCopy } from 'react-icons/ai';

const DelegateInfo = ({ delegateAddress }) => {
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
    <Wallet
      // onMouseEnter={() => setAddressText("Click to Copy")}
      onMouseLeave={() => setIsCopied(false)}
      minWidth={!isMobile ? '350px' : '120px'}
    >
        <div> 
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
              <AiFillCopy size={18} color="white"/>
            :  
              <AiOutlineCopy size={18} color="white"/>
          }
        </div>
    </Wallet>
  )
}

const Wallet = styled.span`
  flex: 3;
  margin-right:30px;
  margin-left: 10px;
  padding: 16px 30px;
  max-height: 30px; 
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-weight: bold;
  min-width: ${props => props.minWidth || 'fit-content'};
  font-size: 16px;
  color: #fff;
  border-radius: 15px;
  background: rgb(226,8,128);
  background: linear-gradient(107deg, rgba(226,8,128,1) 30%, rgba(103,76,159,1) 70%, rgba(53,197,243,1) 100%);
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
  }
`

export default DelegateInfo;