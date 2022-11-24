import React, { useEffect, useState } from "react";
import usePeer from "hooks/usePeer";
import { useSelector } from "react-redux";
import { QRCodeCanvas } from "qrcode.react";
import CryptoHelper from 'helpers/CryptoHelper';

const pvtKey = `
-----BEGIN PGP PRIVATE KEY BLOCK-----
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
rax1ZpPOJVJej3iBGmrmBQThYw==
=VzBT
-----END PGP PRIVATE KEY BLOCK-----`;

const RandomPage = () => {
  const [myPeer, myPeerID] = usePeer();
  const [hello, setHello] = useState(0);
  const [qrCodeText, setQrCodeText] = useState('');
  const [encryptedKey, setEncryptedKey] = useState('');
  const { connectedPeerID } = useSelector((state: any) => state.peer);

  console.log(hello, myPeerID, myPeer, connectedPeerID);

  const generateQRCodeText = () => {
    const secret = CryptoHelper.makeid(10);
    const encryptedPvtKey = CryptoHelper.encryptWithAES(pvtKey, secret);
    setQrCodeText(`${secret}+${myPeerID}`);
    setEncryptedKey(encryptedPvtKey);
    console.log(secret);
  }

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={qrCodeText}
      size={300}
      bgColor={"#00ff00"}
      level={"H"}
    />
  );

  useEffect(() => {
    if(!myPeerID) return;
    generateQRCodeText();
  }, [myPeerID]);

  useEffect(() => {
    if (!connectedPeerID) return;
    try {
      const conn = myPeer.connect(connectedPeerID);
      conn.on("open", () => {
        // here you have conn.id
        conn.send(`Hello There - ${encryptedKey}`);
      });
    } catch (error) {
      console.log("got error", error);
    }
  }, [connectedPeerID]);

  return (
  <>
    <div>{qrcode}</div>
    <button onClick={() => setHello(hello + 1)}>Random Page</button>
  </>);
}

export default RandomPage;