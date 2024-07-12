// React + web3 essentials
import { FC } from "react";

// Components
import { Box, Text } from "blocks";
import ProgressBar from "components/reusables/progress/ProgressBarUnit";
import Spinner, { SPINNER_TYPE } from "components/reusables/spinners/SpinnerUnit";

// Types
import { CreateChannelProgressType } from "../CreateChannel.types";

type CreateChannelProcessingInfoProps = {
  progressState: CreateChannelProgressType
}

const CreateChannelProcessingInfo: FC<CreateChannelProcessingInfoProps> = ({
  progressState
}) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignSelf='stretch'
      gap='s10'
      alignItems='center'
    >
      <Box
        padding='s6'
        backgroundColor={{ light: 'gray-100', dark: 'gray-1000' }}
        borderRadius="r4"
        width='-webkit-fill-available'
      >
        <Text textAlign='center' variant='h5-semibold' color='pink-600'>
          {progressState.progressInfo}
        </Text>
      </Box>

      <Box width='400px'>
        <ProgressBar
          percent={progressState.progress}
          color='#D548EC'
          backgroundColor="#F3AEFF"
          height='4px'
        />
      </Box>

      <Box display='flex' flexDirection='row' alignItems='center' gap='s1'>
        <Spinner type={SPINNER_TYPE.PROCESSING} size={16} color="#D548EC" />
        <Text variant="bs-semibold" color={{ light: 'gray-800', dark: 'gray-300' }}>
          {progressState.processingInfo}
        </Text>
      </Box>



    </Box>
  );
};

export { CreateChannelProcessingInfo };