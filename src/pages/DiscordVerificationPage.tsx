import { Box } from 'blocks';
import { DiscordVerification } from 'modules/discordVerification';

const DiscordVerificationPage = () => {
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignSelf="center"
      maxWidth="1200px"
      backgroundColor="transparent"
      width="calc(100% - (var(--s4) * 2))"
    >
      <DiscordVerification />
    </Box>
  );
};

export default DiscordVerificationPage;