import React from "react";

import styled, { css } from 'styled-components';
import {Section, Content, Item, ItemH, ItemBreak, WaveOuter, WaveInner, Arc, H1, H2, H3, Image, P, Span, Anchor, Button, Showoff, FormSubmision, Input, TextField, HideAt} from 'components/SharedStyling';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import Loader from 'react-loader-spinner'
import Switch from 'components/Switch'

import { bigNumberify } from 'ethers/utils'

import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'

import { addresses, abis } from "@project/contracts";
import EPNSCoreHelper from 'helpers/EPNSCoreHelper';
import CryptoHelper from 'helpers/CryptoHelper';
const ethers = require('ethers');

const ipfs = require('ipfs-api')()

// Set Message Type
const contactFormTopics = [
  { value: 0, label: 'Broadcast' },
  { value: 1, label: 'Secret' },
  { value: 2, label: 'Targetted' },
];

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

  // For the contact form
  const [contactFormProcessing, setContactFormProcessing] = React.useState(0);
  const [contactFormName, setContactFormName] = React.useState('');
  const [contactFormEmail, setContactFormEmail] = React.useState('');
  const [contactFormTopic, setContactFormTopic] = React.useState(contactFormTopics[0]);
  const [contactFormSub, setContactFormSub] = React.useState('');
  const [contactFormMsg, setContactFormMsg] = React.useState('');
  const [contactFormError, setContactFormError] = React.useState('');

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
      //console.log("This is public Key: " + publickey);

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
    var anotherSendTxPromise = contract.sendNotification(recipient, type + "+" + cid);

    anotherSendTxPromise.then(function(tx) {
      console.log(tx);
      console.log("Check: " + account);

    });
  }

  return (
    <>
      <Section>
        <Content className="contentBox">
          <Item>
            <H2 textTransform="uppercase" spacing="0.1em">
              <Span weight="200">Send </Span><Span bg="#674c9f" color="#fff" weight="600" padding="0px 8px">Notification</Span>
            </H2>
            <H3>EPNS supports three types of messages (for now!). <b>Groups</b>, <b>Secrets</b> and <b>Targetted</b>.</H3>
            <Span>Group messages go to all people subscribed in the group. Secrets are encrypted and go to a specific subscriber (no one else can view it, thanks crypto!), Targetted are non-encrypted secrets mostly sent from the EPNS group to channel owners.</Span>
          </Item>
        </Content>
      </Section>

        <ItemH>
          <FormSubmision
            flex="1"
            direction="row"
            margin="20px 0px"
            justify="center"
            size="1.1rem"
            onSubmit={handleSendMessage}
          >
            <ItemH>
              <Header>Message Type</Header>
              <Item flex="5" justify="flex-start" align="stretch" minWidth="280px" margin="15px">
                <DropdownStyled options={contactFormTopics} onChange={(option) => {setType(option.value); console.log(option)}} value={contactFormTopic} placeholder="Select an option" />
              </Item>
              <Input placeholder=" (1 for Normal, 2 for Secret)" value={type} onChange={(e) => {setType(e.target.value)}} />
                <Span
                                    padding="4px 10px"
                                    right="0px"
                                    top="0px"
                                    pos="absolute"
                                    color="#fff"
                                    bg="#000"
                                    size="0.7rem"
                                    z="1"
                                  >
                                    Name
                                  </Span>
            </ItemH>

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
        </ItemH>

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
    </>
  );
}

// css styles

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

const DropdownStyled = styled(Dropdown)`
  .Dropdown-control {
    background-color: #000;
    color: #fff;
    padding: 12px 52px 12px 10px;
    border: 1px solid #000;
    border-radius: 4px;
  }

  .Dropdown-placeholder {
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.2em;
    font-size: 0.8em;
  }

  .Dropdown-arrow {
    top: 18px;
    bottom: 0;
    border-color: #fff transparent transparent;
  }

  .Dropdown-menu {
    border: 1px solid #000;
    box-shadow: none;
    background-color: #000;
    border-radius: 0px;
    margin-top: -3px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .Dropdown-option {
    background-color: rgb(35 35 35);
    color: #ffffff99;

    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 0.7em;
    padding: 15px 20px;
  }

  .Dropdown-option:hover {
    background-color: #000000;
    color: #fff;
  }
`


// Export Default
export default ChannelDashboard;
