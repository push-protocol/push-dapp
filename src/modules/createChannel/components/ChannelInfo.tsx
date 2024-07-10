import { Box, Button, Text, TextInput } from "blocks";
import { FC, useMemo } from "react";
import { isEmpty } from "../CreateChannel.utils";

type ErrorInfoType = {
  name: string;
  description: string;
  url: string;
}

type ChannelInfoProps = {
  channelName: string;
  channelDesc: string;
  channelURL: string;
  errorInfo: ErrorInfoType
  setChannelName: (channelName: string) => void;
  setChannelDesc: (channelDesc: string) => void;
  setChannelURL: (channelURL: string) => void;
  checkFormInput: () => boolean;
  setChannelInfoDone: (channelInfoDone: boolean) => void;
  setActiveStepIndex: (stepFlow: number) => void;
  handleNextStep: () => void;

}

const ChannelInfo: FC<ChannelInfoProps> = ({
  channelName,
  channelDesc,
  channelURL,
  errorInfo,
  setChannelName,
  setChannelDesc,
  setChannelURL,
  checkFormInput,
  setChannelInfoDone,
  setActiveStepIndex,
  handleNextStep
}) => {

  const checkButtonStatus = () => {
    if (isEmpty(channelName) || isEmpty(channelDesc) || isEmpty(channelURL)) {
      return true
    } else {
      return false
    }
  }

  const disableButton = useMemo(checkButtonStatus, [channelName, channelDesc, channelURL])

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      gap='s10'
      alignSelf='stretch'
    >

      <Box
        display='flex'
        flexDirection='column'
        alignItems='flex-start'
        gap='s4'
        alignSelf='stretch'
      >
        <Box display='flex' flexDirection='column' width='100%'>
          <Text variant="h6-semibold">Channel Name</Text>
          <TextInput
            value={channelName}
            onChange={(e) => {
              setChannelName(e.target.value)
            }}
            error={!!errorInfo?.name}
            errorMessage={errorInfo.name}
          />
        </Box>
        <Box display='flex' flexDirection='column' width='100%'>
          <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
            <Text variant="h6-semibold">Channel Description</Text>
            <Text variant="c-regular" color='gray-600'>{250 - channelDesc?.length}</Text>
          </Box>
          <TextInput
            required
            value={channelDesc}
            placeholder="Get notified about ..."
            description='Enter a Brief description of the notifications the user will receive'
            onChange={(e) => {
              setChannelDesc(e.target.value.slice(0, 250))
            }}
            error={!!errorInfo?.description}
            errorMessage={errorInfo.description}
          />

          {/* <textarea rows={4} maxLength={250} /> */}


        </Box>
        <Box display='flex' flexDirection='column' width='100%'>
          <Text variant="h6-semibold">Channel Website URL</Text>
          <TextInput
            value={channelURL}
            onChange={(e) => {
              setChannelURL(e.target.value)
            }}
            error={!!errorInfo?.url}
            errorMessage={errorInfo.url}
          />
        </Box>
      </Box>


      <Button
        disabled={disableButton}
        onClick={() => {
          console.log("Next is clicked")
          if (!checkFormInput()) return;
          setChannelInfoDone(true);
          handleNextStep();
          setActiveStepIndex(1);
        }}
      >
        Next
      </Button>


    </Box>
  );
};

export { ChannelInfo };