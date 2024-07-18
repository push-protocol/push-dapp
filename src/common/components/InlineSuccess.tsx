import { Box, Text, TickCircleFilled } from 'blocks';

const InlineSuccess = () => {
  return (
    <Box
      display='flex'
      width='-webkit-fill-available'
      padding='s3'
      gap='spacing-xxxs'
      color='text-success-bold'
      backgroundColor='surface-success-subtle'
      alignItems='center'
      borderRadius='radius-xs'
    >
      <TickCircleFilled size={24} color='icon-success-bold' />
      <Text variant='bm-semibold'>Channel created successfully</Text>
    </Box>
  );
};

export { InlineSuccess };