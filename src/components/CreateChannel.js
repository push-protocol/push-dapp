// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';

// External Packages
import 'react-dropdown/style.css';
import 'react-dropzone-uploader/dist/styles.css';
import { MdCallMade, MdError } from 'react-icons/md';
import styled, { css, ThemeProvider, useTheme } from 'styled-components';

// Internal Compoonents
import LoaderSpinner, { LOADER_OVERLAY, LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import { getCAIPObj } from 'helpers/CaipHelper';
import { IPFSupload } from 'helpers/IpfsHelper';
import { isLengthValid, isValidAddress, isValidUrl, networkName } from 'helpers/UtilityHelper';
import useToast from 'hooks/useToast';
import { Content, H2, H3, Item, Section, Span } from 'primaries/SharedStyling';
import ChannelInfo from './ChannelInfo';
import './createChannel.css';
import ProcessingInfo from './ProcessingInfo';
import StakingInfo from './StakingInfo';
import UploadLogo from './UploadLogo';

// Internal Configs
import { abis, addresses, appConfig } from 'config';

// Constants
const minStakeFees = 50;
const coreChainId = appConfig.coreContractChain;
const CORE_CHAIN_ID = appConfig.coreContractChain;

// Create Header
function CreateChannel() {
  const { account, library, chainId } = useWeb3React();
  const theme = useTheme();
  const onCoreNetwork = CORE_CHAIN_ID === chainId;
  const [processing, setProcessing] = React.useState(0);
  const [processingInfo, setProcessingInfo] = React.useState('');

  const [uploadDone, setUploadDone] = React.useState(false);
  const [stakeFeesChoosen, setStakeFeesChoosen] = React.useState(false);
  const [channelInfoDone, setChannelInfoDone] = React.useState(false);
  const [chainDetails, setChainDetails] = React.useState(CORE_CHAIN_ID);
  const [channelName, setChannelName] = React.useState('');
  const [channelAlias, setChannelAlias] = React.useState('');
  const [channelInfo, setChannelInfo] = React.useState('');
  const [channelURL, setChannelURL] = React.useState('');
  const [channelFile, setChannelFile] = React.useState(undefined);
  const [channelStakeFees, setChannelStakeFees] = React.useState(minStakeFees);
  const [daiAmountVal, setDaiAmountVal] = useState('');
  const [txStatus, setTxStatus] = useState(2);
  const [progress, setProgress] = React.useState(0);
  const [progressInfo, setProgressInfo] = React.useState('');
  const [logoInfo, setLogoInfo] = React.useState('');
  const [errorInfo, setErrorInfo] = useState('');

  //image upload states
  const [view, setView] = useState(false);
  const [imageSrc, setImageSrc] = useState(undefined);
  const [croppedImage, setCroppedImage] = useState(undefined);

  const [stepFlow, setStepFlow] = React.useState(0);
  const channelToast = useToast();

  //checking DAI for user
  React.useEffect(() => {
    if (!onCoreNetwork) return;
    const checkDaiFunc = async () => {
      let checkDaiAmount = new ethers.Contract(addresses.dai, abis.dai, library);

      let value = await checkDaiAmount.allowance(account, addresses.epnscore);
      value = value?.toString();
      const convertedVal = ethers.utils.formatEther(value);
      setDaiAmountVal(convertedVal);
      if (convertedVal >= minStakeFees) {
        setChannelStakeFees(convertedVal);
      }
    };
    checkDaiFunc();
  }, []);

  // timer
  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((oldProgress) => {
  //       if (oldProgress === 100) {
  //         return 0;
  //       }
  //       const diff = Math.random() * 10;
  //       return Math.min(oldProgress + diff, 100);
  //     });
  //   }, 500);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  const proceed = () => {
    setStepFlow(3);
    setProcessing(0);
    setUploadDone(true);
  };

  const handleLogoSizeLimitation = (base64) => {
    // Setup Error on higher size of 128px
    var sizeOf = require('image-size');
    var base64Data = base64.split(';base64,').pop();
    var img = Buffer.from(base64Data, 'base64');
    var dimensions = sizeOf(img);

    // Only proceed if image is equal to or less than 128
    if (dimensions.width > 128 || dimensions.height > 128) {
      console.log('Image size check failed... returning');
      return {
        success: 0,
        info: 'Image size check failed, Image should be 128X128PX',
      };
    }

    console.log(base64Data.charAt(0));
    if (base64Data.charAt(0) === '/') {
      return {
        success: 1,
        info: 'Image checks passed',
      };
    } else if (base64Data.charAt(0) === 'i') {
      return {
        success: 1,
        info: 'Image checks passed',
      };
    } else {
      return {
        success: 0,
        info: 'Image extension should be jpg or png',
      };
    }
  };

  const isEmpty = (field) => {
    if (field.trim().length == 0) {
      return true;
    }

    return false;
  };

  const isAllFilledAndValid = () => {
    setErrorInfo('');
    if (
      isEmpty(channelName) ||
      isEmpty(channelInfo) ||
      isEmpty(channelURL) ||
      (isEmpty(channelAlias) && chainDetails !== coreChainId)
    ) {
      setErrorInfo('Please enter the channel fields to continue.');
      return false;
    }
    if (!isLengthValid(channelName, 125)) {
      setErrorInfo('Channel Name should not exceed 125 characters! Please retry!');
      return false;
    }
    if (!isLengthValid(channelURL, 125)) {
      setErrorInfo('Channel Url should not exceed 125 characters! Please retry!');
      return false;
    }
    if(chainDetails !== coreChainId && !isValidAddress(channelAlias)) {
      setErrorInfo('Channel Alias address is invalid! Please enter a valid address!');
      return false;
    }
    if (!isValidUrl(channelURL)) {
      setErrorInfo('Channel URL is invalid! Please enter a valid url!');
      return false;
    }

    return true;
  };

  const handleCreateChannel = async (e) => {
    // Check everything in order
    // skip this for now

    e.preventDefault();

    if (!isAllFilledAndValid()) {
      channelToast.showMessageToast({
        toastTitle: 'Error',
        toastMessage: `${errorInfo}`,
        toastType: 'ERROR',
        getToastIcon: (size) => <MdError size={size} color="red" />,
      });

      return false;
    }

    if (!channelFile) {
      setLogoInfo('Please upload logo of the channel');

      return false;
    }

    // Check complete, start logic
    setChannelInfoDone(true);
    proceed();
    setProcessing(1);

    const aliaschainId = chainDetails;
    const aliasAddress = channelAlias;

    let input = {
      name: channelName,
      info: channelInfo,
      url: channelURL,
      icon: channelFile,
      aliasDetails: getCAIPObj({
        chainId: aliaschainId,
        address: aliasAddress,
      }),
    };

    console.log(input);

    input = JSON.stringify(input);
    setProgress(0);
    console.log(`input is ${input}`);
    // const ipfs = require("nano-ipfs-store").at("https://ipfs.infura.io:5001");

    setProcessingInfo('Loading...');
    setProgressInfo('Please wait, payload is getting uploaded to IPFS.');
    setProgress(5);

    // var storagePointer = (storagePointer = await ipfs.add(input));
    let storagePointer = await IPFSupload(input);
    console.log('IPFS storagePointer:', storagePointer);
    // setProcessingInfo("Payload Uploaded, Approval to transfer DAI...");
    //console.log(await ipfs.cat(storagePointer));

    channelToast.showLoaderToast({ loaderMessage: 'Waiting for Confirmation...' });
    setProcessingInfo('Payload Uploaded');
    setProgressInfo('Please complete the transaction in your wallet to continue.');

    setProgress(10);

    // Send Transaction
    // First Approve DAI
    var signer = library.getSigner(account);
    console.log(signer);

    let daiContract = new ethers.Contract(addresses.dai, abis.erc20, signer);

    // Pick between 50 DAI AND 25K DAI
    const fees = ethers.utils.parseUnits(channelStakeFees.toString(), 18);

    try {
      if (daiAmountVal < 50.0) {
        var sendTransactionPromise = daiContract.approve(addresses.epnscore, fees);
        const tx = await sendTransactionPromise;

        console.log(tx);
        console.log('waiting for tx to finish');
        setProgress(30);

        await library.waitForTransaction(tx.hash);
      }

      let contract = new ethers.Contract(addresses.epnscore, abis.epnscore, signer);

      const channelType = 2; // Open Channel
      const identity = '1+' + storagePointer; // IPFS Storage Type and HASH
      const identityBytes = ethers.utils.toUtf8Bytes(identity);

      setProgress(50);

      const tx = await contract.createChannelWithFees(channelType, identityBytes, fees, {
        gasLimit: 1000000,
      });

      console.log(tx);
      console.log('Check: ' + account);
      let txCheck = await library.waitForTransaction(tx.hash);

      if (txCheck.status === 0) {
        channelToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: `There was an error in creating the channel`,
          toastType: 'ERROR',
          getToastIcon: (size) => <MdError size={size} color="red" />,
        });

        setProcessing(3);
        setTxStatus(0);
        setStepFlow(1);
        setChannelInfoDone(false);
        setUploadDone(false);
        setTimeout(() => {
          setProcessing(0);
        }, 500);
      } else {
        setProcessing(3);
        setProgress(60);
        setProgressInfo('Please wait while we confirm the transaction.');
        setProcessingInfo('Transaction Confirmed');
        setTimeout(() => {
          setProgress(80);
          setProgressInfo('Creating your channel, Aligning pixels, adjusting padding... This may take some time.');
          setProcessingInfo('Redirecting... Please do not refresh');
          setProgress(90);
        }, 2000);
        setTimeout(() => {
          setProgress(100);
          window.location.reload();
        }, 2000);
      }
    } catch (err) {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        channelToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: `User denied message signature.`,
          toastType: 'ERROR',
          getToastIcon: (size) => <MdError size={size} color="red" />,
        });
        setStepFlow(2);
        setProcessing(0);
        setUploadDone(false);
      } else {
        channelToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: `There was an error in creating the channel`,
          toastType: 'ERROR',
          getToastIcon: (size) => <MdError size={size} color="red" />,
        });

        console.log('Error --> %o', err);
        console.log({ err });
        setProcessing(3);
        setProgress(0);
        setProgressInfo('There was an error in creating the Channel');
        setProcessingInfo('Kindly Contact support@epns.io to resolve the issue.');
      }
    }
  };

  useEffect(() => {
    if (croppedImage) {
      toDataURL(croppedImage, function (dataUrl) {
        const response = handleLogoSizeLimitation(dataUrl);
        if (response.success) {
          setChannelFile(croppedImage);
        }
      });
    } else {
      return 'Nothing';
    }
  }, [croppedImage]);

  function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

  return (
    <ThemeProvider theme={theme}>
      <Section margin="0px 0px 40px">
        <Content padding="10px 20px 10px">
          <Item align="center">
            <H2 textTransform="uppercase" spacing="0.075em">
              <Span weight="400" size="32px" color={theme.color}>
                Create Your Channel
              </Span>
            </H2>
            <Span
              color={theme.default.secondaryColor}
              weight="400"
              size="16px"
              textTransform="none"
              textAlign="center"
              spacing="0.03em"
              margin="0px 0px">
              Push (EPNS) makes it extremely easy to open and maintain a genuine channel of communication with your
              users.
            </Span>
          </Item>
          {txStatus === 0 && (
            <Body>
              <div>Transaction failed due to one of the following reasons:</div>
              <p>1. There is not enough DAI in your wallet.</p>
              <p>2. Gas price increased due to network congestion. Adjust gas limit manually.</p>
            </Body>
          )}
        </Content>
      </Section>

      {!onCoreNetwork ? (
        <>
          <TabSpace>
            <p>Please select {networkName[appConfig.coreContractChain]} Network in your Wallet to create a channel.</p>
          </TabSpace>

          <TextLine text-align="center">
            You will be asked to change your network to the Alias Network after <br></br>
            channel creation is complete.
          </TextLine>

          <TextLink
            href="https://docs.epns.io/developers/developer-zone/create-your-notif-channel/alias-on-polygon-network"
            target="_blank">
            <p>What is an Alias Network?</p>
            <MdCallMade />
          </TextLink>
        </>
      ) : (
        <>
          <Section>
            <ItemHere>
              <Tab type={stepFlow >= 0 ? 'active' : 'inactive'} onClick={() => setStepFlow(0)}>
                <div>Staking Info</div>
                <Step type={stepFlow >= 0 ? 'active' : 'inactive'} />
              </Tab>
              <Tab type={stepFlow >= 1 ? 'active' : 'inactive'} onClick={() => setStepFlow(1)}>
                <div>Channel Info</div>
                <Step type={stepFlow >= 1 ? 'active' : 'inactive'} />
              </Tab>
              <Tab type={stepFlow >= 2 ? 'active' : 'inactive'} onClick={() => setStepFlow(2)}>
                <div>Upload Logo</div>
                <Step type={stepFlow >= 2 ? 'active' : 'inactive'} />
              </Tab>
              <Line />
            </ItemHere>
          </Section>

          {/* Stake Fees Section */}
          {stepFlow === 0 && (
            <ItemVV2>
              <StakingInfo
                channelStakeFees={channelStakeFees}
                setStakeFeesChoosen={setStakeFeesChoosen}
                setStepFlow={setStepFlow}
                setProcessingInfo={setProcessingInfo}
              />

              {processing === 1 ? (
                <LoaderSpinner
                  type={LOADER_TYPE.STANDALONE}
                  overlay={LOADER_OVERLAY.ONTOP}
                  blur={5}
                  title="Channel Creation in Progress"
                  completed={false}
                />
              ) : null}
            </ItemVV2>
          )}

          {/* Channel Entry */}
          {stepFlow === 1 && (
            <ItemVV2>
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
                setChannelInfoDone={setChannelInfoDone}
                setTxStatus={setTxStatus}
                errorInfo={errorInfo}
                isAllFilledAndValid={isAllFilledAndValid}
              />

              {processing === 1 ? (
                <LoaderSpinner
                  type={LOADER_TYPE.STANDALONE}
                  overlay={LOADER_OVERLAY.ONTOP}
                  blur={5}
                  title="Channel Creation in Progress"
                  completed={false}
                />
              ) : null}
            </ItemVV2>
          )}

          {/* Image Upload Section */}
          {stepFlow === 2 && (
            <ItemVV2>
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
                logoInfo={logoInfo}
              />

              {processing === 1 ? (
                <LoaderSpinner
                  type={LOADER_TYPE.STANDALONE}
                  overlay={LOADER_OVERLAY.ONTOP}
                  blur={5}
                  title="Channel Creation in Progress"
                  completed={false}
                />
              ) : null}
            </ItemVV2>
          )}

          {/* Channel Setup Progress */}
          {(processing === 1 || processing === 3) && (
            <ProcessingInfo progress={progress} progressInfo={progressInfo} processingInfo={processingInfo} />
          )}
        </>
      )}
    </ThemeProvider>
  );
}

// css styles
const Step = styled.div`
  height: 5px;
  width: 100%;
  background: #cfd7e4;
  border-radius: 13px;

  ${({ type }) =>
    type === 'active' &&
    css`
      background: #e20880;
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

const TabSpace = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  height: 167px;
  border-radius: 20px;
  background-color: #f4f5fa;
  margin: 0 auto;
  text-transform: none;
  margin-top: 60px;
  color: #cf1c84;
  align-items: center;
  line-height: 24px;
  font-size: 18px;
  font-weight: 500;
  p {
    padding: 0 200px;
    text-align: center;
    @media (max-width: 600px) {
      padding: 0 10px;
    }
    @media (max-width: 1224px) {
      padding: 0 50px;
    }
  }
  @media (max-width: 600px) {
    font-size: 12px;
    height: auto;
  }
  @media (max-width: 1224px) {
    font-size: 16px;
  }
`;

const TextLine = styled.p`
  text-transform: none;
  margin-top: 60px;
  color: #657795;
  line-height: 21px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;

const TextLink = styled.a`
  text-transform: none;
  margin-top: 30px;
  color: #cf1c84;
  line-height: 21px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Tab = styled.div`
  position: relative;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 0px 10px;
  color: #657795;
  div {
    margin: 5px 0px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  ${({ type }) =>
    type === 'active' &&
    css`
      color: #e20880;
    `};
`;

const ItemHere = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 1224px) {
    display: flex;
    flex-direction: row;
  }
`;

const Body = styled.div`
  margin: 10px auto 0px auto;
  width: 55%;
  padding: 30px;
  background-color: #f5f5fa;
  border-radius: 20px;
  div {
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    color: #657795;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #cf1c84;
  }
  @media (max-width: 600px) {
    width: 95%;
  }
  @media (max-width: 1224px) {
    width: 75%;
  }
`;
export default CreateChannel;
