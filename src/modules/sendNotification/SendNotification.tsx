import { Box, Button, Text, ToggleSwitch } from 'blocks';
import { FC } from 'react';
import { FormFields } from './components/FormFields';
import { useGetChannelDetails } from 'queries';
import { useAccount } from 'hooks';

//add formik
//add conditon for /send url

const SendNotification: FC = () => {
  return (
    <Box
      padding={{ dp: 'spacing-lg', ml: 'spacing-sm' }}
      display="flex"
      flexDirection="column"
      gap={{ dp: 'spacing-xl', ml: 'spacing-md' }}
      alignSelf="center"
      width={{ dp: '648px', ml: '357px' }}
      //this has to be responsive
      borderRadius="radius-lg"
      alignItems="center"
      backgroundColor="surface-primary"
      margin={{ dp: 'spacing-lg', ml: 'spacing-sm' }}
    >
      <Text
        color="text-primary"
        variant="h3-semibold"
        display={{ dp: 'block', ml: 'none' }}
      >
        Send Notification
      </Text>
      <Text
        color="text-primary"
        variant="h5-semibold"
        display={{ dp: 'none', ml: 'block' }}
      >
        Send Notification
      </Text>
      <FormFields />
    </Box>
  );
};

export { SendNotification };
