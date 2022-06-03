import React, { useState } from "react";
import styled from "styled-components";
import { useDeviceWidthCheck } from "hooks";

const DelegateInfo = ({ delegateAddress }) => {
  const [addressText, setAddressText] = useState(delegateAddress);
  const isMobile = useDeviceWidthCheck(700);

  return (
    <Wallet
      onMouseEnter={() => setAddressText("Click to Copy")}
      onMouseLeave={() => setAddressText(delegateAddress)}
      onClick={() => {
        navigator.clipboard.writeText(delegateAddress)
        setAddressText('Copied')
      }}
      minWidth={!isMobile ? '350px' : '120px'}
    >
      {!isMobile && addressText}
      {isMobile &&
        addressText.length > 20 &&
          <>{addressText.substring(0, 6)}.....{addressText.substring(addressText.length - 6)}</>
      }
      {isMobile && addressText.length < 20 && addressText}
    </Wallet>
  )
}

const Wallet = styled.span`
  margin: 0px 10px;
  padding: 8px 15px;
  height: 16px;
  display: flex;
  align-items: baseline;
  justify-content: center;
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