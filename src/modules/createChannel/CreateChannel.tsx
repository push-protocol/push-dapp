// This is the Parent component for the Create Channel flow.
// React + web3 essentials
import { useEffect, useMemo, useState } from "react";

//common
import { Stepper } from "common";

// Components
import { Box, Text } from "blocks";
import { CreateChannelHeader } from "./components/CreateChannelHeader";
import { ChannelInfo } from "./components/ChannelInfo";
import { UploadLogo } from "./components/UploadLogo";
import { StakeFees } from "./components/StakeFees";
import { isEmpty, isValidUrl } from "./CreateChannel.utils";
import { CreateChannelSteps, minStakeFees } from "./CreateChannel.constants";
import { handleLogoSizeLimitation, toDataURL } from "helpers/LogoSizeHelper";
import { CreateChannelProcessingInfo } from "./components/CreateChannelProcessingInfo";
import { abis, addresses, appConfig } from "config";
import { IPFSupload } from "helpers/IpfsHelper";
import { useAccount } from "hooks";
import { ethers } from "ethers";
import { CHANNEL_TYPE } from "helpers/UtilityHelper";

const coreChainId = appConfig.coreContractChain;
const CORE_CHAIN_ID = appConfig.coreContractChain;

const CreateChannel = () => {
  const { account, provider, chainId } = useAccount();

  const onCoreNetwork = CORE_CHAIN_ID === chainId;

  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const [channelStakeFees, setChannelStakeFees] = useState(minStakeFees);
  const [pushTokenAmountVal, setPushTokenAmountVal] = useState(50.0);

  let restrictedForwardSteps = []

  // Channel Info
  const [channelName, setChannelName] = useState('');
  const [channelDesc, setChannelDesc] = useState('');
  const [channelURL, setChannelURL] = useState('');
  const [chainDetails, setChainDetails] = useState(CORE_CHAIN_ID);

  // Upload Logo
  const [view, setView] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);
  const [imageType, setImageType] = useState<string | undefined>(undefined);
  const [croppedImage, setCroppedImage] = useState<string | undefined>(undefined);
  const [channelFile, setChannelFile] = useState<string | undefined>(undefined);

  // Process status
  const [channelInfoDone, setChannelInfoDone] = useState(false);
  const [uploadLogoDone, setUploadLogoDone] = useState(false);
  const [stakeFeesChosen, setStakeFeesChoosen] = useState(false);

  const [progress, setProgress] = useState(0);
  const [progressInfo, setProgressInfo] = useState('');
  const [processingInfo, setProcessingInfo] = useState('');

  const [isChannelCreationStarted, setIsChannelCreationStarted] = useState(false);

  const [errorInfo, setErrorInfo] = useState({
    name: '',
    description: '',
    url: ''
  });

  const handleNextStep = () => {
    if (activeStepIndex < 2) setActiveStepIndex(activeStepIndex + 1);
  };
  restrictedForwardSteps = restrictedForwardSteps.filter((item) => item !== activeStepIndex);
  console.debug(restrictedForwardSteps);


  useEffect(() => {
    if (croppedImage) {
      console.debug('Image cropped', croppedImage);
      toDataURL(croppedImage, function (dataUrl: string) {
        const response = handleLogoSizeLimitation(dataUrl);
        console.debug('response', response);
        if (response.success) {
          console.debug('Cropped Image....', croppedImage);
          setChannelFile(croppedImage);
        }
      });
    }
  }, [croppedImage]);

  const checkPushTokenApprovalFunc = async () => {
    let checkPushTokenApprovedAmount = new ethers.Contract(addresses.pushToken, abis.pushToken, provider);

    let value = await checkPushTokenApprovedAmount.allowance(account, addresses.epnscore);
    value = value?.toString();
    const convertedVal = ethers.utils.formatEther(value);
    console.log("Number value >>>", convertedVal, Number(convertedVal))
    setPushTokenAmountVal(Number(convertedVal));
    return Number(convertedVal)
  };

  // Setting Error Infos for missing Fields
  const checkFormInput = () => {

    setErrorInfo(() => ({
      name: '',
      description: '',
      url: ''
    }))

    if (
      isEmpty(channelName) ||
      isEmpty(channelDesc) ||
      isEmpty(channelURL)
    ) {

      if (isEmpty(channelName)) {
        setErrorInfo((x) => ({
          ...x,
          name: 'Please, enter the channel name.',
        }));
      }

      if (isEmpty(channelDesc)) {
        setErrorInfo((x) => ({
          ...x,
          description: 'Please, enter the channel description',
        }));
      }

      if (isEmpty(channelURL)) {
        setErrorInfo((x) => ({
          ...x,
          url: 'Please, enter the channel url',
        }));
      }

      return false;

    }


    if (!isValidUrl(channelURL)) {
      setErrorInfo((x) => ({
        ...x,
        url: 'Channel URL is invalid! Please enter a valid url!',
      }));
      return false;
    }

    return true;

  }


  const handleCreateChannel = async () => {

    // TODO: Handle all the cases here
    /**
     * Process for the Channel Creation
     * 1. Check if all the Channel Inputs are filled or not
     * 2. Check if the user has uploaded the logo or not
     * 3. Start the progressbar
     * 3. Calculate the approval token amount
     * 4. Upload the stringify input to the IPFS.
     * 5. If the user approval token amount is less than 50, then ask user to approve the token amount
     * 6. Create the channel
     * 
     * 7. If at any state the user rejects the signature then, redirect the user to the Stake Fees Page
     * 8. If the channel Creation is successful then what?
     * 9. What if their is a smart contract error
     * 
     */

    if (!checkFormInput) {
      console.log("Errors are present in channel Info")
      return
    }

    if (!channelFile) {
      console.log("Channel Logo is not correct")
      return
    }

    // Start the progress bar of the channel creation
    setIsChannelCreationStarted(true);

    // Calculate the approval amount of the user
    const approvedTokenAmount = await checkPushTokenApprovalFunc();
    console.log("Approved Token Amount >>", approvedTokenAmount);

    let input = {
      name: channelName,
      info: channelDesc,
      url: channelURL,
      icon: channelFile,
    };

    console.log("Channel Input before  >>", input);

    const ChannelInput = JSON.stringify(input);
    setProgress(0);

    console.log("Channel Input after>>", ChannelInput);

    setProcessingInfo('Loading...');
    setProgressInfo('Please wait, payload is getting uploaded to IPFS.');
    setProgress(5);

    let storagePointer = await IPFSupload(ChannelInput);
    console.log('IPFS storagePointer:', storagePointer);

    setProcessingInfo('Payload Uploaded');
    setProgressInfo('Please complete the transaction in your wallet to continue.');
    setProgress(10);


    var signer = provider.getSigner(account);
    console.debug(signer);
    let pushTokenContract = new ethers.Contract(addresses.pushToken, abis.pushToken, signer);

    // Total fee required to create a channel
    const fees = ethers.utils.parseUnits(channelStakeFees.toString(), 18);

    try {

      // Asking user to approve 50 PUSH token
      if (approvedTokenAmount < 50.0) {
        var sendTransactionPromise = pushTokenContract.approve(addresses.epnscore, fees);
        const tx = await sendTransactionPromise;

        console.debug(tx);
        console.debug('waiting for tx to finish');
        setProgress(30);

        await provider.waitForTransaction(tx.hash);
      }

      let contract = new ethers.Contract(addresses.epnscore, abis.epnscore, signer);

      let channelType = CHANNEL_TYPE['GENERAL']; // Open Channel
      const identity = '1+' + storagePointer; // IPFS Storage Type and HASH
      const identityBytes = ethers.utils.toUtf8Bytes(identity);

      setProgress(50);
      console.log("Processing contract wait ser")

      let timestampIfTimebound = 0;

      const tx = await contract.createChannelWithPUSH(channelType, identityBytes, fees, timestampIfTimebound, {
        gasLimit: 600000,
      });

      console.debug(tx);
      console.debug('Check: ' + account);
      let txCheck = await provider.waitForTransaction(tx.hash);

      console.log("Tx Check >>>", txCheck);

      if (txCheck.status === 0) {
        // Error from the contract side handle it here
        console.log("Channel Not created their is an error>>");
        // setTxStatus(0);
        setActiveStepIndex(1);

      } else {
        // Channel Creation successfull
        setProgress(60);
        setProgressInfo('Please wait while we confirm the transaction.');
        setProcessingInfo('Transaction Confirmed');

        setTimeout(() => {
          setProgress(80);
          setProgressInfo('Creating your channel, Aligning pixels, adjusting padding... This may take some time.');
          setProcessingInfo('Redirecting... Please do not refresh');
          setProgress(90);
        }, 2000);


        //TODO: What to do when the process if completed
        // setTimeout(() => {
        //   setProgress(100);
        //   window.location.reload();
        // }, 2000);


      }


    } catch (error) {
      if (error.code === 4001 || error.code === 'ACTION_REJECTED') {
        // EIP-1193 userRejectedRequest error
        console.log("Signature error ", error);
      } else {
        console.error('Error --> %o', error);
        console.error({ error });
        setProgress(0);
        setProgressInfo('There was an error in creating the Channel');
        setProcessingInfo('Kindly Contact support@epns.io to resolve the issue.');
      }


      console.log("Error in the transaction >>", error);
      // Stop the channel creation flow
      setIsChannelCreationStarted(false);





    }



  }

  return (
    <Box
      padding='s8'
      backgroundColor={{ light: 'white', dark: 'gray-900' }}
      borderRadius="r8"
      width='584px'
      // height='579px'
      display='flex'
      flexDirection='column'
      alignItems='center'
      gap='s10'
    >
      <CreateChannelHeader />

      {/* //TODO: If the transaction fails due to contract errors */}
      {/* {txStatus === 0 && (
      <Box>
        <Text variant="h5-semibold" color='gray-700'>Transaction failed due to one of the following reasons:</Text>
        <Text variant="h5-regular" color='pink-400'>1. There is not enough PUSH in your wallet.</Text>
        <Text variant="h5-regular" color='pink-400'>2. Gas price increased due to network congestion. Adjust gas limit manually.</Text>
      </Box>
      )} */}

      {!isChannelCreationStarted ? (
        <Box
          display='flex'
          flexDirection='column'
          gap='s8'
          alignItems='center'
          alignSelf='stretch'
        >
          <Stepper
            steps={CreateChannelSteps}
            activeStepIndex={activeStepIndex}
            setActiveStepIndex={setActiveStepIndex}
            config={{ restrictedForwardSteps: restrictedForwardSteps }}
          />

          {activeStepIndex == 0 && <ChannelInfo
            channelName={channelName}
            channelDesc={channelDesc}
            channelURL={channelURL}
            errorInfo={errorInfo}
            setChannelName={setChannelName}
            setChannelDesc={setChannelDesc}
            setChannelURL={setChannelURL}
            checkFormInput={checkFormInput}
            setChannelInfoDone={setChannelInfoDone}
            setActiveStepIndex={setActiveStepIndex}
            handleNextStep={handleNextStep}
          />}
          {activeStepIndex === 1 && <UploadLogo
            view={view}
            imageSrc={imageSrc}
            imageType={imageType}
            croppedImage={croppedImage}
            setView={setView}
            setImageSrc={setImageSrc}
            setImageType={setImageType}
            setCroppedImage={setCroppedImage}
            setUploadDone={setUploadLogoDone}
            setActiveStepIndex={setActiveStepIndex}
            handleNextStep={handleNextStep}
          />}
          {activeStepIndex === 2 && <StakeFees
            channelStakeFees={channelStakeFees}
            handleCreateChannel={handleCreateChannel}
            setStakeFeesChoosen={setStakeFeesChoosen}
          />}

        </Box>
      ) : (
        <CreateChannelProcessingInfo
          progress={progress}
          processingInfo={processingInfo}
          progressInfo={progressInfo}
        />
      )}






    </Box>
  );
};

export { CreateChannel };