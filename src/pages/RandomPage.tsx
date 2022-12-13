import React, { useContext, useEffect, useState } from "react";
import usePeer from "hooks/usePeer";
import { useSelector } from "react-redux";
import { QRCodeCanvas } from "qrcode.react";
import CryptoHelper from 'helpers/CryptoHelper';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { useWeb3React } from "@web3-react/core";
import { ChatTempContext } from "contexts/ChatTempContext";

const RandomPage = () => {
  const { account } = useWeb3React();
  const { pgpPvtKey } = useContext(ChatTempContext);
  const [myPeer, myPeerID] = usePeer();
  const [qrCodeText, setQrCodeText] = useState('');
  const [loading, setLoading] = useState(true);
  const [encryptedKey, setEncryptedKey] = useState('');
  const { connectedPeerID } = useSelector((state: any) => state.peer);

  console.log(myPeerID, myPeer, connectedPeerID);

  const generateQRCodeText = () => {
    const secret = CryptoHelper.makeid(10);
    const encryptedPvtKey = CryptoHelper.encryptWithAES(pgpPvtKey, secret);
    const qrCodeData = {
      aesSecret: secret,
      peerId: myPeerID,
      account: account
    }
    setQrCodeText(JSON.stringify(qrCodeData));
    setEncryptedKey(encryptedPvtKey);
    setLoading(false);
    console.log(secret);
  }

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={qrCodeText}
      size={264}
      bgColor={"#fff"}
      level={"H"}
      imageSettings={{
        src: "./icon.jpg",
        height: 64,
        width: 64,
        excavate: false
      }}
    />
  );

  useEffect(() => {
    if (!myPeerID) return;
    generateQRCodeText();
  }, [myPeerID]);

  useEffect(() => {
    if (!connectedPeerID) return;
    try {
      const conn = myPeer.connect(connectedPeerID);
      conn.on("open", () => {
        conn.send({ encryptedPgpKey: encryptedKey });
      });
    } catch (error) {
      console.log("got error", error);
    }
  }, [connectedPeerID]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Scan for using Push Chat in Mobile</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {loading ?
          <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={120} />
          :
          <>{qrcode}</>
        }
      </div>
      {/* <button onClick={() => setHello(hello + 1)}>Random Page</button> */}
    </>);
}

export default RandomPage;