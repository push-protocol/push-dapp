import React from "react";
import styled, { css } from 'styled-components';

import Loader from 'react-loader-spinner'
import Switch from 'components/Switch'

import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'

import { addresses, abis } from "@project/contracts";
import EPNSCoreHelper from 'helpers/EPNSCoreHelper';
import CryptoHelper from 'helpers/CryptoHelper';
const ethers = require('ethers');

const ipfs = require('ipfs-api')()

// Create Header
function ChannelDashboard() {
  const { active, error, account, library, chainId } = useWeb3React();

  const [processing, setProcessing] = React.useState(false);

  const [recipient, setRecipient] = React.useState('');
  const [secret, setSecret] = React.useState('');
  const [type, setType] = React.useState('');
  const [sub, setSub] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const [cta, setCTA] = React.useState('');
  const [img, setImg] = React.useState('');

  React.useEffect(() => {

  });

  const handleSendMessage = async () => {
    // Check everything in order
    // skip this for now
    setProcessing(true);

    var signer = library.getSigner(account);
    let contract = new ethers.Contract(addresses.epnscore, abis.epnscore, signer);

    let nsub = sub;
    let nmsg = msg;
    let secretEncrypted;

    let esub = sub;
    let emsg = msg;
    let ecta = cta;
    let eimg = img;

    if (type === "2" || parseInt(type) == 2) {
      // Create secret
      let secret = CryptoHelper.makeid(14);

      // Encrypt payload and change sub and msg in notification
      nsub = "You have a secret message!";
      nmsg = "Open the app to see your secret message!";

      // get public key from EPNSCoreHelper
      let k = await EPNSCoreHelper.getPublicKey(recipient, contract);

      let publickey = k.toString().substring(2);
      console.log("This is public Key: " + publickey);

      secretEncrypted = await CryptoHelper.encryptWithECIES(secret, publickey);
      esub = CryptoHelper.encryptWithAES(sub, secret);
      emsg = CryptoHelper.encryptWithAES(msg, secret);
      ecta = CryptoHelper.encryptWithAES(cta, secret);
      eimg = CryptoHelper.encryptWithAES(img, secret);
    }

    const input = JSON.stringify(
      {
        "notification": {
          "title": nsub,
          "body": nmsg
        },
        "data": {
          "type": type,
          "secret": secretEncrypted,
          "asub": esub,
          "amsg": emsg,
          "acta": ecta,
          "aimg": eimg
        }
      }
    )
    const ipfs = require("nano-ipfs-store").at("https://ipfs.infura.io:5001");

    console.log("sending payload");
    const cid = await ipfs.add(input);
    console.log("IPFS cid:", cid);
    //console.log(await ipfs.cat(cid));

    // Send Transaction
    // First Approve DAI
    var anotherSendTxPromise = contract.sendMessage(recipient, type, cid, 1);

    anotherSendTxPromise.then(function(tx) {
      console.log(tx);
      console.log("Check: " + account);

    });
  }

  return (
    <Container>
      <Channel>
        <Notice>
          <Title>Send Message!</Title>
          <Info>EPNS supports three types of messages (for now!). <b>Groups</b>, <b>Secrets</b> and <b>Targetted</b>.</Info>
          <Info>Group messages go to all people subscribed in the group. Secrets are encrypted and go to a specific subscriber (no one else can view it, thanks crypto!), Targetted are non-encrypted secrets mostly sent from the EPNS group to channel owners.</Info>
        </Notice>

        <FormSubmision>
          <Row>
            <Header>Message Type</Header>
            <Input placeholder=" (1 for Normal, 2 for Secret)" value={type} onChange={(e) => {setType(e.target.value)}} />
          </Row>

          <Row>
            <Header>Recipient</Header>
            <Input placeholder="Channel Address for msg type 1, recipient for 2" value={recipient} onChange={(e) => {setRecipient(e.target.value)}} />
          </Row>

          <Row>
            <Header>Subject</Header>
            <Input placeholder="The subject of the topic" value={sub} onChange={(e) => {setSub(e.target.value)}} />
          </Row>

          <Row>
            <Header>Message</Header>
            <ShortInfo placeholder="The message to deliver" maxlength = "500" value={msg} onChange={(e) => {setMsg(e.target.value)}}/>
          </Row>

          <Row>
            <Header>Call to Action</Header>
            <Input placeholder="Call to action url if any" maxlength = "200" value={cta} onChange={(e) => {setCTA(e.target.value)}} />
          </Row>

          <Row>
            <Header>Image url</Header>
            <Input placeholder="Image url if any" maxlength = "200" value={img} onChange={(e) => {setImg(e.target.value)}} />
          </Row>
        </FormSubmision>

        <Buttons>
          <Continue theme='#674c9f' disabled={processing} onClick={handleSendMessage}>
            {processing &&
              <Loader
               type="Oval"
               color="#FFF"
               height={16}
               width={16}
              />
            }
            {!processing &&
              <Text>Group Message</Text>
            }
          </Continue>
          <Continue theme='#e20880' disabled={processing} onClick={handleSendMessage}>
            {processing &&
              <Loader
               type="Oval"
               color="#FFF"
               height={16}
               width={16}
              />
            }
            {!processing &&
              <Text>Secret Message</Text>
            }
          </Continue>
        </Buttons>


      </Channel>
    </Container>
  );
}

// css styles
const Container = styled.div`
  flex: 1;
  display: flex;
  padding: 20px;
  width: '100%';
`

const Channel = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Notice = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  color: #674c9f;
  font-size: 30px;
  font-weight: 300;
  margin-top: 0px;
  margin-bottom: 30px;
`

const Info = styled.label`
  padding-bottom: 20px;
  font-size: 14px;
  color: #000;
`

const Buttons = styled(Info)`
  display: flex;
    justify-content: space-around;
`

const FormSubmision = styled.div`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  border: 0px;
  outline: 0px;
  border-bottom: 1px solid #ddd;
  margin: 25px 10px;
  padding: 5px;
  flex: 1;
`

const Name = styled(Input)`
  border-bottom: 1px solid #e20880;
  font-size: 24px;
`

const ShortInfo = styled.textarea`
  outline: 0;
  border: 0;
  border-bottom: 1px solid #35c5f3;
  margin: 10px;
  font-size: 18px;
  min-height: 80px;
  color: #111;
  flex: 1;
`

const Url = styled(Input)`
  border-bottom: 1px solid #674c9f;
  font-size: 1=8px;
`

const DropzoneContainer = styled.div`
  margin: 20px 20px 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Text = styled.span`

`

const Header = styled.span`
  width: 150px;
`

const Continue = styled.button`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 20px;
  font-size: 14px;
  background: ${props => props.theme || '#674c9f'};
  border-radius: 8px;
  padding: 16px;
  font-size: 16px;
  font-weight: 400;
  flex: 1;
  margin: 10px 20px;
`


// Export Default
export default ChannelDashboard;
