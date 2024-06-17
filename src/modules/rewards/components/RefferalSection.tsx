import { FC } from 'react';
import { css } from 'styled-components';
import { Box, Button, Copy, Text } from 'blocks';

export type RefferalSectionProps = {};

const RefferalSection: FC<RefferalSectionProps> = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="s9"
      padding="s12"
      borderRadius="var(--s6)"
      backgroundColor="white"
    >
      <Box>
        <Text variant="h3-bold">Onboard Users on Push.</Text>
        <Text variant="h3-bold">Earn Points.</Text>
        <Text
          variant="bm-regular"
          color="gray-500"
        >
          Earn +12% of any Points your invites earn, and +2% of any Points your invite’s invites earn.
        </Text>
      </Box>
      <Box
        display="flex"
        gap="s2"
      >
        <Box
          width="344px"
          display="flex"
          alignItems="center"
          padding="s3"
          borderRadius="var(--r3)"
          border="1.5px solid gray-200"
        >
          <Text variant="bs-regular">https://app.push.org/ref?123xx</Text>
        </Box>
        <Button leadingIcon={<Copy />}>Copy Link</Button>
      </Box>
    </Box>
  );
};

export { RefferalSection };
