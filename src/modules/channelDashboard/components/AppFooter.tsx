import { Box, Link } from 'blocks';

const AppFooter = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignSelf="stretch"
      padding="spacing-none spacing-sm"
      color="text-tertiary"
    >
      <Box
        display="flex"
        flexDirection={{ initial: 'row', ml: 'column' }}
        gap={{ initial: 'spacing-sm', ml: 'spacing-none' }}
      >
        <Link
          to="https://push.org/privacy/"
          target="_blank"
          textProps={{
            variant: 'bes-semibold',
            color: 'text-tertiary'
          }}
        >
          Privacy Policy
        </Link>
        <Link
          to="https://push.org/tos/"
          target="_blank"
          textProps={{
            variant: 'bes-semibold',
            color: 'text-tertiary'
          }}
        >
          Terms and Conditions
        </Link>
      </Box>
      {/* <Box display="flex" alignItems="center" gap="s2">
        <CircleFilled color="icon-success-bold" size={9} />
        <Text variant="bes-semibold" color='text-tertiary'>All systems operational</Text>
      </Box> */}
    </Box>
  );
};

export { AppFooter };
