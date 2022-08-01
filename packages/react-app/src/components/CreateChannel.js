import React, { useState, useEffect } from "react";
import styled, { css, useTheme } from "styled-components";
import "react-dropdown/style.css";
import {
  Section,
  Content,
  Item,
  ItemH,
  H2,
  H3,
  Span,
} from "../primaries/SharedStyling";
import "react-dropzone-uploader/dist/styles.css";
import Loader from "react-loader-spinner";
import UploadLogo from "./UploadLogo";
import StakingInfo from "./StakingInfo";
import ChannelInfo from "./ChannelInfo";

import { envConfig } from "@project/contracts";

import { useWeb3React } from "@web3-react/core";
import { ThemeProvider } from "styled-components";
import { addresses, abis } from "@project/contracts";
import "./createChannel.css";
import { getCAIP } from "helpers/UtilityHelper";

const ethers = require("ethers");

const minStakeFees = 50;

const networkName = {
  42: "Ethereum Kovan",
  1: "Ethereum Mainnet"
}

const coreChain = "Ethereum Kovan";
const CORE_CHAIN_ID = envConfig.coreContractChain;

// Create Header
function CreateChannel() {
  const { account, library, chainId } = useWeb3React();

  const themes = useTheme();

  const onCoreNetwork = CORE_CHAIN_ID === chainId;

  const [processing, setProcessing] = React.useState(0);
  const [processingInfo, setProcessingInfo] = React.useState("");

  const [uploadDone, setUploadDone] = React.useState(false);
  const [stakeFeesChoosen, setStakeFeesChoosen] = React.useState(false);
  const [channelInfoDone, setChannelInfoDone] = React.useState(false);

  const [chainDetails, setChainDetails] = React.useState(coreChain);
  const [channelName, setChannelName] = React.useState("");
  const [channelAlias, setChannelAlias] = React.useState("");
  const [channelInfo, setChannelInfo] = React.useState("");
  const [channelURL, setChannelURL] = React.useState("");
  const [channelFile, setChannelFile] = React.useState(undefined);
  const [channelStakeFees, setChannelStakeFees] = React.useState(minStakeFees);
  const [daiAmountVal, setDaiAmountVal] = useState("");
  const [txStatus, setTxStatus] = useState(2);

  //image upload states
  const [view, setView] = useState(false);
  const [imageSrc, setImageSrc] = useState(undefined);
  const [croppedImage, setCroppedImage] = useState(undefined);

  const [stepFlow, setStepFlow] = React.useState(1);

  //checking DAI for user
  React.useEffect(() => {
    if (!onCoreNetwork) return;
    const checkDaiFunc = async () => {
      let checkDaiAmount = new ethers.Contract(
        addresses.dai,
        abis.dai,
        library
      );

      let value = await checkDaiAmount.allowance(account, addresses.epnscore);
      value = value?.toString();
      const convertedVal = ethers.utils.formatEther(value);
      setDaiAmountVal(convertedVal);
      if (convertedVal >= 50.0) {
        setChannelStakeFees(convertedVal);
      }
    };
    checkDaiFunc();
  }, []);

  const proceed = () => {
    setStepFlow(3);
    setProcessing(0);
    setUploadDone(true);
  };

  const handleLogoSizeLimitation = (base64) => {
    // Setup Error on higher size of 128px
    var sizeOf = require("image-size");
    var base64Data = base64.split(";base64,").pop();
    var img = Buffer.from(base64Data, "base64");
    var dimensions = sizeOf(img);

    // Only proceed if image is equal to or less than 128
    if (dimensions.width > 128 || dimensions.height > 128) {
      console.log("Image size check failed... returning");
      return {
        success: 0,
        info: "Image size check failed, Image should be 128X128PX",
      };
    }

    let fileext;
    console.log(base64Data.charAt(0));
    if (base64Data.charAt(0) == "/") {
      return {
        success: 1,
        info: "Image checks passed",
      };
    } else if (base64Data.charAt(0) == "i") {
      return {
        success: 1,
        info: "Image checks passed",
      };
    } else {
      return {
        success: 0,
        info: "Image extension should be jpg or png",
      };
    }
  };

  const handleCreateChannel = async (e) => {
    // Check everything in order
    // skip this for now

    e.preventDefault();

    if (!channelFile) {
      setProcessing(3);
      setProcessingInfo("Please upload logo of the channel");

      return false;
    }

    // Check complete, start logic
    // setChannelInfoDone(true);
    proceed();
    setProcessing(1);

    const chainDetailsSplit = chainDetails.split(":");
    const chain_id = parseInt(chainDetailsSplit[1]);
    const aliasAddress = channelAlias;

    let input = {
      name: channelName,
      info: channelInfo,
      url: channelURL,
      icon: channelFile,
      aliasDetails: getCAIP({chainId: chain_id, address: aliasAddress})
    };

    console.log(input);

    input = JSON.stringify(input);

    console.log(`input is ${input}`);
    const ipfs = require("nano-ipfs-store").at("https://ipfs.infura.io:5001");

    setProcessingInfo("Uploading Payload...");
    var storagePointer = (storagePointer = await ipfs.add(input));
    console.log("IPFS storagePointer:", storagePointer);
    setProcessingInfo("Payload Uploaded, Approval to transfer DAI...");
    //console.log(await ipfs.cat(storagePointer));

    // Send Transaction
    // First Approve DAI
    var signer = library.getSigner(account);

    let daiContract = new ethers.Contract(addresses.dai, abis.erc20, signer);

    // Pick between 50 DAI AND 25K DAI
    const fees = ethers.utils.parseUnits(channelStakeFees.toString(), 18);

    if(daiAmountVal < 50.0){
      var sendTransactionPromise = daiContract.approve(addresses.epnscore, fees);
      const tx = await sendTransactionPromise;
  
      console.log(tx);
      console.log("waiting for tx to finish");
      setProcessingInfo("Waiting for Approval TX to finish...");
      await library.waitForTransaction(tx.hash);
    }

    let contract = new ethers.Contract(
      addresses.epnscore,
      abis.epnscore,
      signer
    );

    const channelType = 2; // Open Channel
    const identity = "1+" + storagePointer; // IPFS Storage Type and HASH
    const identityBytes = ethers.utils.toUtf8Bytes(identity);

    var anotherSendTxPromise = contract.createChannelWithFees(
      channelType,
      identityBytes,
      fees,
      {
        gasLimit: 1000000,
      }
    );

    setProcessingInfo("Creating Channel TX in progress");
    anotherSendTxPromise
      .then(async function(tx) {
        console.log(tx);
        console.log("Check: " + account);
        let txCheck = await library.waitForTransaction(tx.hash);

        if(txCheck.status === 0){
          setProcessing(3);
          setTxStatus(0);
          setProcessingInfo("Transaction Failed due to some error! Try again");
          setTimeout(() => {
            setProcessing(0);
            setTxStatus(2);
            setChannelInfoDone(false);
          }, 10000);
        }
        else {
          setProcessing(3);
          setProcessingInfo("Channel Created! Reloading...");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      })
      .catch((err) => {
        console.log("Error --> %o", err);
        console.log({ err });
        setProcessing(3);
        setProcessingInfo(
          "!!!PRODUCTION ENV!!! Contact support@epns.io to whitelist your wallet"
        );
      });
  };

  useEffect(() => {
    if (croppedImage) {
      toDataURL(croppedImage, function(dataUrl) {
        const response = handleLogoSizeLimitation(dataUrl);
        if (response.success) {
          setChannelFile(croppedImage);
        }
      });
    } else {
      return "Nothing";
    }
  }, [croppedImage]);

  function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  }

  return (
    <ThemeProvider theme={themes}>
      <Section>
        <Content padding="10px 20px 20px">
          <Item align="flex-start">
            <H2 textTransform="uppercase" spacing="0.1em">
              <Span bg="#674c9f" color="#fff" weight="600" padding="0px 8px">
                Create
              </Span>
              <Span weight="200" color={themes.color}>
                {" "}
                Your Channel!
              </Span>
            </H2>
            <H3 color={themes.createColor}>
              <b color={themes.createColor}>
                Ethereum Push Notification Service
              </b>{" "}
              (EPNS) makes it extremely easy to open and maintain a genuine
              channel of communication with your users.
            </H3>
          </Item>
        </Content>
      </Section>

      {!onCoreNetwork ? (
        <>
          <Section>
            <Content padding="50px 20px 20px">
              <Item align="flex-start">
                <H3 color="#e20880" weight={700}>
                  Channels can only be created on {networkName[envConfig.coreContractChain]} Network and not on Alias chains. Please switch to {networkName[envConfig.coreContractChain]} Network to create a channel.
                </H3>
              </Item>
            </Content>
          </Section>
        </>
      ) : (
        <>
          <Section>
            <Content padding="0px 20px 20px">
              <ItemH justify="space-between">
                <Step
                  bg="#fff"
                  activeBG="#e20880"
                  type={stepFlow >= 1 ? "active" : "inactive"}
                />
                <Step
                  bg="#fff"
                  activeBG="#e20880"
                  type={stepFlow >= 2 ? "active" : "inactive"}
                />
                <Step
                  bg="#fff"
                  activeBG="#e20880"
                  type={stepFlow >= 3 ? "active" : "inactive"}
                />
                <Line />
              </ItemH>
            </Content>
          </Section>
 
          {/* Stake Fees Section */}
          {!stakeFeesChoosen && (
            <StakingInfo
              channelStakeFees={channelStakeFees}
              setStakeFeesChoosen={setStakeFeesChoosen}
              setStepFlow={setStepFlow}
            />
          )}

          {/* Channel Entry */}
          {stakeFeesChoosen && !channelInfoDone && (
            <ChannelInfo
              setStepFlow={setStepFlow}
              channelName={channelName}
              channelAlias={channelAlias}
              channelInfo={channelInfo}
              channelURL={channelURL}
              chainDetails={chainDetails}
              setChannelAlias={setChannelAlias}
              setChainDetails={setChainDetails}
              setChannelInfo={setChannelInfo}
              setChannelName={setChannelName}
              setChannelURL={setChannelURL}
              setProcessing={setProcessing}
              setProcessingInfo={setProcessingInfo}
              setChannelInfoDone={setChannelInfoDone}
            />
          )}
            
          {/* Image Upload Section */}
          {!uploadDone && channelInfoDone && stakeFeesChoosen && (
            <UploadLogo
              croppedImage={croppedImage}
              view={view}
              imageSrc={imageSrc}
              processing={processing}
              setCroppedImage={setCroppedImage}
              setView={setView}
              setImageSrc={setImageSrc}
              setProcessingInfo={setProcessingInfo}
              handleCreateChannel={handleCreateChannel}
            />
          )}

          {/* Channel Setup Progress */}
          {(processing == 1 || processing == 3) && (
            <Section>
              <Content padding="0px 0px 0px 0px">
                {processing == 1 && (
                  <Item margin="20px 0px 10px 0px">
                    <Loader type="Oval" color="#000" height={24} width={24} />
                  </Item>
                )}

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
                    {txStatus === 0 &&
                      <div
                        style={{
                          textTransform: "none",
                          padding: "10px 0px"
                        }}
                      >
                        <div style={{paddingBottom: "5px"}}>It may be possible due to one of the following reasons:</div>
                        <div>1. There is not enough DAI in your wallet.</div>
                        <div>2. Network may be congested, due to that gas price increased. Try by increasing gas limit manually.</div> 
                      </div>
                    }  
                  </Span>
                </Item>
              </Content>
            </Section>
          )}
        </>
      )}
    </ThemeProvider>
  );
}

// css styles
const Step = styled.div`
  height: 12px;
  width: 12px;
  background: ${(props) => props.bg || "#fff"};
  border: 4px solid ${(props) => props.activeBG || "#000"};
  border-radius: 100%;

  ${({ type }) =>
    type == "active" &&
    css`
      background: ${(props) => props.activeBG || "#ddd"};
      border: 4px solid #00000022;
    `};
`;

const Line = styled.div`
  position: absolute;
  height: 5px;
  background: #f1f1f1;
  right: 0;
  left: 0;
  margin: 0px 10px;
  z-index: -1;
`;

export default CreateChannel;