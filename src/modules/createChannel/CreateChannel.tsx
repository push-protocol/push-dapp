// This is the Parent component for the Create Channel flow.

// Components
import { Box } from "blocks";
import { CreateChannelHeader } from "./components/CreateChannelHeader";
import { CreateChannelStep } from "./components/CreateChannelStep";
import { ChannelInfo } from "./components/ChannelInfo";
import { useState } from "react";
import { UploadLogo } from "./components/UploadLogo";
import { StakeFees } from "./components/StakeFees";
import { isEmpty, isValidUrl } from "./CreateChannel.utils";

const CreateChannel = () => {

  const [stepFlow, setStepFlow] = useState(0);

  const [channelName, setChannelName] = useState('');
  const [channelDesc, setChannelDesc] = useState('');
  const [channelURL, setChannelURL] = useState('');

  const [channelInfoDone, setChannelInfoDone] = useState(false);
  const [uploadLogoDone, setUploadLogoDone] = useState(false);

  const [errorInfo, setErrorInfo] = useState({
    name: '',
    description: '',
    url: ''
  });

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

  return (
    <Box
      padding='s8'
      backgroundColor='white'
      borderRadius="r8"
      width='584px'
      height='579px'
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
        <CreateChannelStep
          stepFlow={stepFlow}
          setStepFlow={setStepFlow}
        />
        {stepFlow == 0 && <ChannelInfo
          channelName={channelName}
          channelDesc={channelDesc}
          channelURL={channelURL}
          errorInfo={errorInfo}
          setChannelName={setChannelName}
          setChannelDesc={setChannelDesc}
          setChannelURL={setChannelURL}
          checkFormInput={checkFormInput}
          setChannelInfoDone={setChannelInfoDone}
          setStepFlow={setStepFlow}
        />}
        {stepFlow === 1 && <UploadLogo />}
        {stepFlow === 2 && <StakeFees />}
      </Box>

    </Box>
  );
};

export { CreateChannel };