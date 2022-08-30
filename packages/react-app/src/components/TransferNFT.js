import React from "react";

import styled, { css } from 'styled-components';
import { Section, Content, Item, H2, Span, Button, FormSubmision, Input } from '../primaries/SharedStyling';

import 'react-dropzone-uploader/dist/styles.css'
import { Oval } from 'react-loader-spinner';

import { useWeb3React } from '@web3-react/core'

import { addresses, abis } from "@project/contracts";
const ethers = require('ethers');

// Create Header
function TransferNFT({ tokenId }) {
  const { account, library } = useWeb3React();

  const [nftWriteProvider, setNftWriteProvider] = React.useState(null);
  const [toAddress, setToAddress] = React.useState('');

  const [processing, setProcessing] = React.useState(0);
  const [processingInfo, setProcessingInfo] = React.useState('');

  React.useEffect(() => {
    if (!!(library && account)) {
      let signer = library.getSigner(account);
      const signerInstance = new ethers.Contract(addresses.rockstar, abis.rockstar, signer);
      setNftWriteProvider(signerInstance);
    }
  }, [account]);

  const handleTransferNFT = async (e) => {
    if (nftWriteProvider) {
      console.log("🚀 ~ file: TransferNFT.js ~ line 64 ~ handleTransferNFT ~ nftWriteProvider", nftWriteProvider)
      e.preventDefault();

      if (isEmpty(toAddress)) {
        setProcessing(3);
        setProcessingInfo("Recipient address field is empty! Please retry!");

        return false;
      }
      setProcessing(1);
      setProcessingInfo("Transferring NFT...")
      let signer = library.getSigner(account);
      const signerInstance = new ethers.Contract(addresses.rockstar, abis.rockstar, signer)
      var txPromise = nftWriteProvider['safeTransferFrom(address,address,uint256)'](account, toAddress, tokenId);
      const tx = await txPromise;
      console.log(tx);
      console.log("waiting for tx to finish");
      setProcessingInfo("Waiting for Transfer tx to finish...");
      await library.waitForTransaction(tx.hash);
      setProcessingInfo("Transfer successfull! ");
      setProcessing(3);
    }
  }

  const isEmpty = (field) => {
    if (field.trim().length == 0) {
      return true;
    }
    return false;
  }

  return (
    <>
      <Section>
        <Content padding="10px 20px 20px">
          <Item align="flex-start">
            <H2 textTransform="uppercase" spacing="0.1em">
              <Span weight="200">Transfer Your NFT!</Span>
            </H2>
            <H2 textTransform="uppercase" spacing="0.1em">
              <Span bg="#674c9f" color="#fff" weight="600" padding="0px 8px">Token #{tokenId}</Span>
            </H2>
          </Item>
        </Content>
      </Section>

      <Section>
        <Content padding="50px 0px 0px 0px">
          <FormSubmision
            flex="1"
            direction="column"
            margin="0px"
            justify="center"
            size="1.1rem"
            onSubmit={handleTransferNFT}
          >

            <Item margin="-10px 20px 15px 20px" flex="1" self="stretch" align="stretch">
              <Input
                required
                placeholder="Recipient Address"
                maxlength="40"
                padding="12px"
                borderBottom="1px solid #000"
                weight="400"
                size="1.2em"
                bg="#fff"
                value={toAddress}
                onChange={(e) => { setToAddress(e.target.value) }}
              />
              {toAddress.trim().length == 0 &&
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
                  Recipient Address
                </Span>
              }
            </Item>
            <Item margin="15px 0px 0px 0px" flex="1" self="stretch" align="stretch">
              <Button
                bg='#674c9f'
                color='#fff'
                flex="1"
                radius="0px"
                padding="20px 10px"
                disabled={processing == 1 ? true : false}
              >
                {processing == 1 &&
                  <Oval
                    color="#fff"
                    height={24}
                    width={24}
                  />
                }
                {processing != 1 &&
                  <Input cursor="hand" textTransform="uppercase" color="#fff" weight="400" size="0.8em" spacing="0.2em" type="submit" value="Transfer" />
                }
              </Button>
            </Item>
          </FormSubmision>
        </Content>
      </Section>

      {(processing == 1 || processing == 3) &&
        <Section>
          <Content padding="0px 0px 0px 0px">
            <Item
              color="#fff"
              bg={processing == 1 ? "#e1087f" : "#000"}
              padding="10px 15px"
              margin="15px 0px"
            >
              <Span
                color="#fff"
                textTransform="uppercase"
                spacing="0.1em"
                weight="400"
                size="1em"
              >
                {processingInfo}
              </Span>
            </Item>

          </Content>
        </Section>
      }
    </>
  );
}

// Export Default
export default TransferNFT;
