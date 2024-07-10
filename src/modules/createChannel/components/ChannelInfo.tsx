import { Box, Button, Text, TextArea, TextInput } from "blocks";
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
        <Box width='100%'>
          <TextInput
            required
            label="Channel Name"
            value={channelName}
            onChange={(e) => {
              setChannelName(e.target.value.slice(0, 32))
            }}
            error={!!errorInfo?.name}
            errorMessage={errorInfo.name}
            totalCount={32}
          />
        </Box>

        <Box width='100%'>

          <TextArea
            required
            label="Channel Description"
            placeholder="Get notified about ..."
            description='Enter a Brief description of the notifications the user will receive'
            error={!!errorInfo?.description}
            errorMessage={errorInfo.description}
            totalCount={250}
            value={channelDesc}
            onChange={(e) => {
              setChannelDesc(e.target.value.slice(0, 250))
            }}
          />

        </Box>

        <Box width='100%'>
          <TextInput
            label="Channel Website URL"
            required
            value={channelURL}
            onChange={(e) => {
              setChannelURL(e.target.value.slice(0, 32))
            }}
            error={!!errorInfo?.url}
            errorMessage={errorInfo.url}
            totalCount={32}
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