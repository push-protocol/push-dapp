import { FC } from 'react';

//Components
import { Box, EmptyInbox, Link, Button, Text } from 'blocks';

export type EmptyChannelListProps = {
  heading?: string;
  subHeading?: string;
};
const EmptyChannelList: FC<EmptyChannelListProps> = ({ heading, subHeading }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="s4"
      margin="s9 s0 s0 s0"
    >
      <EmptyInbox
        size={48}
        color="gray-600"
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="s1"
        width={{ initial: '50%', ll: 'auto' }}
      >
        {heading && (
          <Text
            textAlign="center"
            variant="h5-bold"
            color={{ light: 'black', dark: 'white' }}
          >
            {heading}
          </Text>
        )}
        {subHeading && (
          <Text
            textAlign="center"
            variant="bs-regular"
            color={{ light: 'gray-600', dark: 'gray-500' }}
          >
            {subHeading}
          </Text>
        )}
      </Box>
      <Link to={'/channels'}>
        <Button
          variant="tertiary"
          size="small"
        >
          Explore Channels
        </Button>
      </Link>
    </Box>
  );
};

export { EmptyChannelList };
