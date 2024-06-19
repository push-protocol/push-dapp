import { FC } from 'react';
import { Box, Button, Copy, Text } from 'blocks';
import { useAccount } from 'hooks';

export type RefferalSectionProps = {};

const RefferalSection: FC<RefferalSectionProps> = () => {
  const { isWalletConnected, connect } = useAccount();

  const handleConnectWallet = () => {
    connect();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="s9"
      padding="s12"
      borderRadius="r6"
      backgroundColor={{ light: 'white', dark: 'gray-900' }}
    >
      <Box>
        <Text
          variant="h3-bold"
          color={{ light: 'gray-1000', dark: 'gray-100' }}
        >
          Onboard Users on Push.
        </Text>
        <Text
          variant="h3-bold"
          color={{ light: 'gray-1000', dark: 'gray-100' }}
        >
          Earn Points.
        </Text>
        <Text
          variant="bm-regular"
          color="gray-500"
        >
          Earn +12% of any Points your invites earn, and +2% of any Points your invite’s invites earn.
        </Text>
      </Box>
      {isWalletConnected && (
        <Box
          display="flex"
          gap="s2"
          flexDirection={{ tb: 'column', initial: 'row' }}
        >
          <Box
            width={{ tb: '-webkit-fill-available', initial: '344px' }}
            display="flex"
            alignItems="center"
            padding="s3"
            borderRadius="r3"
            border={{ light: '1.5px solid gray-200', dark: 'none' }}
            backgroundColor={{ light: 'transparent', dark: 'gray-800' }}
          >
            <Text
              variant="bs-regular"
              color={{ light: 'gray-1000', dark: 'gray-100' }}
            >
              https://app.push.org/ref?123xx
            </Text>
          </Box>
          <Button leadingIcon={<Copy />}>Copy Link</Button>
        </Box>
      )}

      {!isWalletConnected && (
        <Box>
          <Button
            size="small"
            onClick={handleConnectWallet}
          >
            Connect Wallet
          </Button>
        </Box>
      )}
    </Box>
  );
};

export { RefferalSection };
