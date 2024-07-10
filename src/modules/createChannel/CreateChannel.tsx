// This is the Parent component for the Create Channel flow.
// React + web3 essentials
import { useEffect, useState } from "react";

//common
import { Stepper } from "common";

// Components
import { Box } from "blocks";
import { CreateChannelHeader } from "./components/CreateChannelHeader";
import { ChannelInfo } from "./components/ChannelInfo";
import { UploadLogo } from "./components/UploadLogo";
import { StakeFees } from "./components/StakeFees";
import { isEmpty, isValidUrl } from "./CreateChannel.utils";
import { CreateChannelSteps, minStakeFees } from "./CreateChannel.constants";
import { handleLogoSizeLimitation, toDataURL } from "helpers/LogoSizeHelper";
import { CreateChannelProcessingInfo } from "./components/CreateChannelProcessingInfo";

const CreateChannel = () => {

  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);


  const [channelStakeFees, setChannelStakeFees] = useState(minStakeFees);

  let restrictedForwardSteps = [1, 2]

  // Channel Info
  const [channelName, setChannelName] = useState('');
  const [channelDesc, setChannelDesc] = useState('');
  const [channelURL, setChannelURL] = useState('');

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

  const [errorInfo, setErrorInfo] = useState({
    name: '',
    description: '',
    url: ''
  });

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

  const handleNextStep = () => {
    if (activeStepIndex < 2) setActiveStepIndex(activeStepIndex + 1);
  };
  restrictedForwardSteps = restrictedForwardSteps.filter((item) => item !== activeStepIndex);
  console.debug(restrictedForwardSteps);

  const handleCreateChannel = () => {

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

      {/* <CreateChannelProcessingInfo
        progress={10}
        processingInfo="Payload uploaded"
      /> */}


    </Box>
  );
};

export { CreateChannel };