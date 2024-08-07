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
      gap="spacing-sm"
      margin="spacing-xl spacing-none spacing-none spacing-none"
    >
      <EmptyInbox
        size={48}
        color="icon-primary"
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="spacing-xs"
      >
        {heading && (
          <Text
            textAlign="center"
            variant="h5-bold"
            color="text-primary"
          >
            {heading}
          </Text>
        )}
        {subHeading && (
          <Text
            textAlign="center"
            variant="bs-regular"
            color="text-tertiary-inverse"
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
