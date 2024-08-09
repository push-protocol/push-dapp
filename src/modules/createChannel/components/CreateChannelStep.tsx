// React + web3 essentials
import { FC } from 'react';

// Components
import { Box, Text } from 'blocks';

type CreateChannelStepsProps = {
  stepFlow: number;
  setStepFlow: (stepFlow: number) => void;
};

const CreateChannelStep: FC<CreateChannelStepsProps> = ({
  stepFlow,
  setStepFlow
}) => {
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      gap="s8"
      alignSelf="stretch"

    >
      <Box
        display="flex"
        flexDirection="column"
        gap="s3"
        width="180px"
        cursor='pointer'
        color={stepFlow == 0 ? 'pink-500' : 'gray-500'}
        onClick={() => setStepFlow(0)}
      >
        <Text textAlign="center" variant="h5-semibold">
          Channel Info
        </Text>
        <Box height="4px" backgroundColor={stepFlow == 0 ? "pink-500" : "gray-500"}></Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap="s3"
        width="180px"
        cursor='pointer'
        color={stepFlow == 1 ? 'pink-500' : 'gray-500'}
        onClick={() => setStepFlow(1)}
      >
        <Text textAlign="center" variant="h5-semibold">
          Upload Logo
        </Text>
        <Box height="4px" backgroundColor={stepFlow == 1 ? "pink-500" : "gray-500"}></Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap="s3"
        width="180px"
        cursor='pointer'
        color={stepFlow == 2 ? 'pink-500' : 'gray-500'}
        onClick={() => setStepFlow(2)}
      >
        <Text textAlign="center" variant="h5-semibold">
          Stake Fees
        </Text>
        <Box height="4px" backgroundColor={stepFlow == 2 ? "pink-500" : "gray-500"}></Box>
      </Box>
    </Box>
  );
};

export { CreateChannelStep };
