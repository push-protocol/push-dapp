import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDeviceWidthCheck } from "hooks";
import { RiFileCopyFill, RiFileCopyLine } from "react-icons/ri";
import { Image, Item, Span } from "primaries/SharedStyling";
import UtilityHelper from "helpers/UtilityHelper";

const DelegateInfo = ({ delegateAddress, isDelegate, maxWidth, delegateChainId }) => {
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
            {...{ addressText, isCopied, setIsCopied, delegateAddress, delegateChainId }}
          />
        </Wallet>
      ) : (
        <HoverWallet
          onMouseLeave={() => setIsCopied(false)}
          minWidth={!isMobile ? "350px" : "120px"}
        >
          <WalletInfoContent
            {...{ addressText, isCopied, setIsCopied, delegateAddress, delegateChainId }}
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
  delegateChainId
}) => {
  const isMobile = useDeviceWidthCheck(1000);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Span padding="0 5px 0 0">
        <Image 
          src={UtilityHelper.isPolygon(parseInt(delegateChainId)) ? `./svg/Polygon.svg` : './svg/Ethereum.svg'} 
          alt="Delegatee Network Id" 
          width="25px" 
          height="25px" 
        />
      </Span>
      <div style={{ paddingTop: 3 }}>{addressText}</div>
      <ItemHere
        marginLeft={isMobile ? "10px" : "50px"}
        onClick={() => {
          navigator.clipboard.writeText(delegateAddress);
          setIsCopied(true);
        }}
      >
        {isCopied ? (
          <RiFileCopyFill size={18} color="white" style={{ paddingTop: 6 }} />
        ) : (
          <RiFileCopyLine size={18} color="white" style={{ paddingTop: 6 }} />
        )}
      </ItemHere>
    </div>
  );
};

const ItemHere = styled.div`
  cursor: pointer;
  margin-left: ${(props) => props.marginLeft || ""};
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
