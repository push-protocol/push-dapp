// React and Styles
import React, { useState } from "react";
import styled from "styled-components";
import { Content, Item, ItemH, H2, H3, Span, Button, Input } from "components/SharedStyling";

// Helpers
import { createCeramic, getDIDFromWallet } from '../../helpers/w2w/Ceramic'
import * as DIDHelpers from '../../helpers/w2w/Did'

// DID and Ceramic
import { ThreeIdConnect } from '@3id/connect'
import { DID } from 'dids'
import { JWE } from 'did-jwt';
import { getResolver as threeIDDIDGetResolver } from '@ceramicnetwork/3id-did-resolver';
import { getResolver as keyDIDGetResolver } from 'key-did-resolver'
import { Caip10Link } from '@ceramicnetwork/stream-caip10-link'

// Web3
import { Web3Provider } from "ethers/providers";
import { useWeb3React } from "@web3-react/core";
import { CeramicClient } from "@ceramicnetwork/http-client";
import { CeramicApi } from "@ceramicnetwork/common";

function LoginIDX() {
  const { connector, account, chainId } = useWeb3React<Web3Provider>();

  const [did, setDid] = useState<DID>();
  const [content, setContent] = useState<string>("");
  const [encryptedData, setEncryptedData] = useState<JWE>();
  const [decryptedData, setDecryptedData] = useState<string>();
  const [ceramicInstance, setCeramicInstance] = useState<CeramicClient>();

  // Temporary
  const [link, setLink] = useState<string>();
  // Temporary

  const connectToCeramic = async () => {
    const provider: Promise<any> = await connector.getProvider()
    const threeID: ThreeIdConnect = new ThreeIdConnect()
    const ceramic: CeramicClient = createCeramic();
    const didProvider = await DIDHelpers.Get3IDDIDProvider(threeID, provider, account);
    const did: DID = await DIDHelpers.CreateDID(keyDIDGetResolver, threeIDDIDGetResolver, ceramic, didProvider);

    setDid(did);
    setCeramicInstance(ceramic);
  };

  const decrypt = async () => {
    // @ts-ignore
    const cleartext: string = await DIDHelpers.decrypt(encryptedData, did);
    setDecryptedData(cleartext);
  };

  const getLinkWallets = async () => {
    try {
      // Using the Ceramic client instance, we can load the link for a given CAIP-10 account
      const link = await getDIDFromWallet(ceramicInstance, account, chainId);
      console.log(link,'link');
      // The `did` property of the loaded link will contain the DID string value if set
      setLink(link);
    }
    catch(e) {
      console.log(e);
    }
  };

  const encrypt = async () => {
    const jwe: JWE = await DIDHelpers.encrypt(content, did);
    setEncryptedData(jwe);
  };

  return (
    <Content padding="20px">
      <Item justify="flex-start" align="flex-start">
        <H2 textTransform="uppercase" spacing="0.1em">
          <Span weight="200">Send </Span>
          <Span bg="#674c9f" color="#fff" weight="600" padding="0px 8px">
            Chats
          </Span>
        </H2>
        <H3>Send Chat Test</H3>
      </Item>
      <Item justify="flex-start" align="flex-start" margin="20px">
        <Button bg="#1C4ED8" onClick={connectToCeramic}>Connect to Ceramic</Button>
        {did &&
          <p>{did.id}</p>
        }
        <ItemH>
          <label>
            Enter your text to be added to Ceramic:
          </label>

          <InputStyled
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </ItemH>

        <H2 textTransform="uppercase" spacing="0.1em">
          Encrypt data
        </H2>
        <Button bg="#1C4ED8" onClick={encrypt}>Encrypt</Button>
        {
          (!encryptedData) ? (
            <p>Please submit text to encrypt</p>
          ) : (
            <div>
              <p>{JSON.stringify(encryptedData)}</p>
            </div>
          )
        }
        <H2 textTransform="uppercase" spacing="0.1em">
          Decrypt data
        </H2>
        <Button bg="#1C4ED8" onClick={decrypt}>Decrypt</Button>
        <p>{decryptedData}</p>


        <H2 textTransform="uppercase" spacing="0.1em">
          Get Linked Wallets to this DID
        </H2>
        <Button bg="#1C4ED8" onClick={getLinkWallets}>Get Links</Button>
        {(!link) ? <p>nothing</p> : (<p>{link}</p>)}
      </Item>
    </Content>
  );
}

const InputStyled = styled(Input)`
  border: 1px solid #000 !important;
  flex: 1;
`

export default LoginIDX;