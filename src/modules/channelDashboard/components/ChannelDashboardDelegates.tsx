import { Add, Box, Button, Separator, Text } from 'blocks';
import { ChannelDelegate } from './ChannelDelegate';

const ChannelDashboardDelegates = () => {
  return (
    <Box
      display='flex'
      padding='spacing-sm'
      gap='s3'
      border='1px solid gray-300'
      borderRadius='radius-sm'
      width='-webkit-fill-available'
      flexDirection='column'

    >
      <Box
        display='flex'
        justifyContent='space-between'
      >
        <Box>
          <Text variant='h5-semibold' color='text-primary'>Channel Delegates</Text>
          <Text variant='c-regular' color='text-tertiary'> Delegates can send channel notifications </Text>
        </Box>
        <Button size='extraSmall' variant='tertiary' leadingIcon={<Add />}>
          Add
        </Button>
      </Box>

      <Separator />


      <Box display='flex' flexDirection='column' gap='s3'>
        <ChannelDelegate />
        <ChannelDelegate />
        <ChannelDelegate />
        <ChannelDelegate />
      </Box>
    </Box>
  );
};

export { ChannelDashboardDelegates };