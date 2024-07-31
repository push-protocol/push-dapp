import { FC } from "react";

import { Box, Text } from "blocks";
import ProgressBar from "components/reusables/progress/ProgressBarUnit";
import Spinner, { SPINNER_TYPE } from "components/reusables/spinners/SpinnerUnit";

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
      gap='spacing-xl'
      alignItems='center'
    >
      <Box
        padding='spacing-md'
        backgroundColor='surface-secondary'
        borderRadius="radius-sm"
        width='-webkit-fill-available'
      >
        <Text textAlign='center' variant='h5-semibold' color='text-brand-medium'>
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

      <Box display='flex' flexDirection='row' alignItems='center' gap='spacing-xxxs'>
        <Spinner type={SPINNER_TYPE.PROCESSING} size={16} color="#D548EC" />
        <Text variant="bs-semibold" color='text-secondary'>
          {progressState.processingInfo}
        </Text>
      </Box>

    </Box>
  );
};

export { CreateChannelProcessingInfo };