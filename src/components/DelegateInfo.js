import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDeviceWidthCheck } from "hooks";
import { AiFillCopy, AiOutlineCopy } from "react-icons/ai";
import { Item } from "primaries/SharedStyling";

const DelegateInfo = ({ delegateAddress, isDelegate, maxWidth }) => {
  const [addressText, setAddressText] = useState(delegateAddress);
  const [isCopied, setIsCopied] = useState(false);
  const isMobile = useDeviceWidthCheck(1200);

  useEffect(() => {
    if (!isMobile) {
      setAddressText(delegateAddress);
    } else {
      // clip address
      const clippedAddrs = `${delegateAddress.substring(
        0,
        5
      )}.....${delegateAddress.substring(delegateAddress.length - 5)}`;
      setAddressText(clippedAddrs);
    }
  }, [isMobile]);

  return (
    <>
      {!isDelegate ? (
        <Wallet
          onMouseLeave={() => setIsCopied(false)}
          minWidth={!isMobile ? "350px" : "120px"}
        >
          <WalletInfoContent
            {...{ addressText, isCopied, setIsCopied, delegateAddress }}
          />
        </Wallet>
      ) : (
        <HoverWallet
          onMouseLeave={() => setIsCopied(false)}
          minWidth={!isMobile ? "350px" : "120px"}
        >
          <WalletInfoContent
            {...{ addressText, isCopied, setIsCopied, delegateAddress }}
          />
        </HoverWallet>
      )}
    </>
  );
};

const WalletInfoContent = ({
  addressText,
  isCopied,
  setIsCopied,
  delegateAddress,
}) => {
  const isMobile = useDeviceWidthCheck(1000);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div style={{ paddingTop: 3 }}>{addressText}</div>
      <ItemHere
        isMobile={isMobile ? "10px" : "50px"}
        onClick={() => {
          navigator.clipboard.writeText(delegateAddress);
          setIsCopied(true);
        }}
      >
        {isCopied ? (
          <AiFillCopy size={18} color="white" style={{ paddingTop: 6 }} />
        ) : (
          <AiOutlineCopy size={18} color="white" style={{ paddingTop: 6 }} />
        )}
      </ItemHere>
    </div>
  );
};

const ItemHere = styled.div`
  cursor: pointer;
  margin-left: ${(props) => props.isMobile || ""};
`;

const WalletAddressDisplay = styled.span`
  flex: 3;
  // margin-right: 30px;
  // margin-left: 10px;
  padding: 6px 25px;
  max-height: 30px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  max-width: ${(props) => props.maxWidth || "fit-content"};

  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 164%;
  border-radius: 13px;

  &:active {
    opacity: 0.75;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    padding: 4px 15px;
  }
`;

const HoverWallet = styled(WalletAddressDisplay)`
  color: ${(props) => props.theme.color};

  &:hover {
    background: rgb(226, 8, 128);
    background: linear-gradient(
      107deg,
      rgba(226, 8, 128, 1) 30%,
      rgba(103, 76, 159, 1) 70%,
      rgba(53, 197, 243, 1) 100%
    );
    opacity: 0.9;
    color: #fff;
    cursor: pointer;
    pointer: hand;
  }
`;

const Wallet = styled(WalletAddressDisplay)`
  color: #fff;
  background: rgb(226, 8, 128);
  background: linear-gradient(
    107deg,
    rgba(226, 8, 128, 1) 30%,
    rgba(103, 76, 159, 1) 70%,
    rgba(53, 197, 243, 1) 100%
  );
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
`;

export default DelegateInfo;
