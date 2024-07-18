import { Box, ErrorFilled, Text } from 'blocks';
import { FC } from 'react';

type InlineErrorProp = {
  title: string
}

const InlineError: FC<InlineErrorProp> = ({
  title
}) => {
  return (
    <Box
      display='flex'
      width='-webkit-fill-available'
      padding='s3'
      gap='spacing-xxxs'
      color='text-danger-bold'
      backgroundColor='surface-danger-subtle'
      alignItems='center'
      borderRadius='radius-xs'
    >
      <ErrorFilled size={24} color='icon-danger-bold' />
      <Text variant='bm-semibold'>{title}</Text>
    </Box>
  );
};

export default InlineError;