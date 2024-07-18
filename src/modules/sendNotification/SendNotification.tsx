import { Box, Button, Text, ToggleSwitch } from 'blocks';
import { FC } from 'react';
import { FormFields } from './components/FormFields';

//add formik
//add conditon for /send url
const SendNotification: FC = () => {
  return (
    <Box
      padding="spacing-lg"
      display="flex"
      flexDirection="column"
      gap="spacing-xl"
      width="648px"
      borderRadius="radius-lg"
      alignItems="center"
      backgroundColor="surface-primary"
      margin="spacing-lg spacing-none spacing-none spacing-none"
    >
      <Text
        color="text-primary"
        variant="h3-semibold"
      >
        Send Notification
      </Text>
      <FormFields />
      <Button> Send Notification</Button>
    </Box>
  );
};

export { SendNotification };
