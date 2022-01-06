import React from "react";
import styled, { css } from 'styled-components';

import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

import Loader from 'react-loader-spinner';

import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'

import { addresses, abis } from "@project/contracts";
const ethers = require('ethers');

const ipfs = require('ipfs-api')()

// Create Header
function CreateChannel() {
  const { active, error, account, library, chainId } = useWeb3React();

  const [processing, setProcessing] = React.useState(false);
  const [uploadDone, setUploadDone] = React.useState(false);
  const [file, setFile] = React.useState(undefined);

  const [name, setName] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [url, setURL] = React.useState('');

  React.useEffect(() => {

  });

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

  const onDropHandler=(files) =>{
    //   var file = files[0]
    //   const reader = new FileReader();
    //   reader.onload = (event) => {
    //     console.log(event.target.result);
    //   };
    //   reader.readAsDataURL(file);
    // setFile(file);
    // console.log("Drop Handler");
    // console.log(file);
  }

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    setUploadDone(true);

    console.log(files.map(f => f.meta))
    allFiles.forEach(f => {
      var file = f.file;
      var reader = new FileReader();
      reader.readAsDataURL(file);
      console.log(f.file);
      reader.onloadend = function (e) {
        console.log(reader.result);
        setFile(reader.result);
      }
    })
    console.log("andle Submit");
  }

  const handleCreateChannel = async () => {
    // Check everything in order
    // skip this for now
    setProcessing(true);

    console.log(file);
    console.log(name);
    console.log(desc);
    console.log(url);

    const input = JSON.stringify(
      {
        "name": name,
        "info": desc,
        "url": url,
        "icon": file
      }
    )
    const ipfs = require("nano-ipfs-store").at("https://ipfs.infura.io:5001");

    console.log("sending payload");
    const cid = await ipfs.add(input);
    console.log("IPFS cid:", cid);
    //console.log(await ipfs.cat(cid));

    // Send Transaction
    // First Approve DAI
    var signer = library.getSigner(account);

    let daiContract = new ethers.Contract(addresses.dai, abis.erc20, signer);

    // Pick between 50 DAI AND 25K DAI
    let randomNumber = Math.ceil(Math.random() * 24949) + 50;
    const fees = parseUnits(randomNumber.toString(), 18);

    var sendTransactionPromise = daiContract.approve(addresses.epnscore, fees);
    const tx = await sendTransactionPromise;

    console.log(tx);
    console.log("waiting for tx to finish");
    await library.waitForTransaction(tx.hash);

    let contract = new ethers.Contract(addresses.epnscore, abis.epnscore, signer);
    var anotherSendTxPromise = contract.createChannelWithFees(cid);

    anotherSendTxPromise.then(function(tx) {
      console.log(tx);
      console.log("Check: " + account);

    });
  }

  return (
    <Container>
      <Channel>
        <Notice>
          <Title>Create your Channel!</Title>

          {uploadDone && !processing &&
            <Info>Image Verified! Just fill in your other information and hit <b>Beam me up</b> to create your channel... literal goosebumps!!!</Info>
          }
          {!uploadDone &&
            <>
            <Info><b>Ethereum Push Notification Service</b> (EPNS) makes it extremely easy to open and maintain a genuine channel of communication with your users.</Info>
            <Info>The only step for <b>You</b> or your <b>dApp</b> or even your <b>Smart Contract</b> is opening up the channel.</Info>
            <Info>Rest of the heavy lifting of securely connecting users, wallets, device tokens, listening to and ensuring sent events, forming and delivering payload to each mobile or destop devices and informing them and you about it is done automagically by EPNS.</Info>
            </>
          }
        </Notice>

        {!processing && uploadDone &&
          <FormSubmision>
            <Name placeholder="Your Channel Name" maxlength = "40" value={name} onChange={(e) => {setName(e.target.value)}}/>
            <ShortInfo placeholder="Your Channel's Short Description" maxlength = "200" value={desc} onChange={(e) => {setDesc(e.target.value)}}/>
            <Url placeholder="Your website" maxlength = "200" value={url} onChange={(e) => {setURL(e.target.value)}}/>
          </FormSubmision>
        }

          <>
          {!uploadDone &&
            <DropzoneContainer>
              <Info>Drop in your channel <b>(dApp or Website) official logo</b> here and submit first.</Info>
              <Dropzone
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                onDrop={onDropHandler}
                maxFiles={1}
                multiple={false}
                accept="image/jpeg,image/png"
              />
            </DropzoneContainer>
          }
          </>

        {uploadDone &&
          <Continue theme={processing ? '#674c9f' : '#e20880'} disabled={processing} onClick={handleCreateChannel}>
            {processing &&
              <Loader
               type="Oval"
               color="#FFF"
               height={16}
               width={16}
              />
            }
            {!processing &&
              <Text>Beam me up!</Text>
            }
          </Continue>
        }

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

const Info2 = styled(Info)`

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

const Text = styled.span`

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
  margin: 30px 0px 0px 0px;
  border-radius: 8px;
  padding: 16px;
  font-size: 16px;
  font-weight: 400;
`


// Export Default
export default CreateChannel;
