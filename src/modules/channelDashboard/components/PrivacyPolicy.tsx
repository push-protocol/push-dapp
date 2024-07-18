import { Box, Text } from "blocks";

const PrivacyPolicy = () => {
  return (
    <Box
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      alignSelf='stretch'
      padding='spacing-none spacing-sm'
      color='text-tertiary'
    >
      <Box
        display='flex'
        flexDirection={{ initial: 'row', ml: 'column' }}
        gap={{ initial: 's4', ml: 's0' }}
      >
        <Text variant='bes-semibold'>Privacy Policy</Text>
        <Text variant='bes-semibold'>Terms and Conditions</Text>
      </Box>
      <Box
        display='flex'
        alignItems='center'
        gap='s2'

      >
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="4" fill="#008769" />
        </svg>

        <Text variant='bes-semibold'>All systems operational</Text>
      </Box>
    </Box>
  );
};

export { PrivacyPolicy };