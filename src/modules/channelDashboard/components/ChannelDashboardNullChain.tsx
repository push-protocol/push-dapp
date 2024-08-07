import { useNavigate } from 'react-router-dom';

import { Box, Button, PlusCircle, Text } from 'blocks';

import APP_PATHS from 'config/AppPaths';


const ChannelDashboardNullChain = () => {
  const navigate = useNavigate();

  return (
    <Box
      height='380px'
      display='flex'
      flexDirection='column'
      padding='spacing-xl spacing-md'
      gap='spacing-xs'
      justifyContent='center'
      alignItems='center'
      alignSelf='stretch'
    >
      <Box
        display='flex'
        flexDirection='column'
        gap='spacing-xl'
        alignItems='center'
        alignSelf='stretch'
      >
        <Box
          display='flex'
          padding='spacing-none spacing-md'
          flexDirection='column'
          justifyContent='center'
          gap='spacing-sm'
          alignSelf='stretch'
          alignItems='center'
        >
          <Text variant='bs-semibold'>
            Channel does not exist on this chain. Please setup channel on new chain to proceed.
          </Text>
        </Box>
        <Button onClick={() => navigate(APP_PATHS.AddNewChain)} leadingIcon={<PlusCircle />}>
          Add New Chain
        </Button>
      </Box>
    </Box>
  );
};

export { ChannelDashboardNullChain };