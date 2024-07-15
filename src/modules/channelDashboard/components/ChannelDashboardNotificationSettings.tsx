import { Box, Button, Settings, Text } from 'blocks';

const ChannelDashboardNotificationSettings = () => {
  return (
    <Box
      display='flex'
      padding='spacing-sm'
      gap='spacing-none'
      width='-webkit-fill-available'
      border='1px solid gray-300'
      borderRadius='radius-sm'
      flexDirection='column'
    >
      <Box
        display='flex'
        justifyContent='space-between'
      >
        <Box>
          <Text variant='h5-semibold' color='text-primary'>Notification Settings</Text>
          <Text variant='c-regular' color='text-tertiary'> Manage notification preferences for users</Text>
        </Box>
        <Button size='extraSmall' variant='tertiary' leadingIcon={<Settings />}>
          Manage
        </Button>
      </Box>




    </Box>
  );
};

export { ChannelDashboardNotificationSettings };