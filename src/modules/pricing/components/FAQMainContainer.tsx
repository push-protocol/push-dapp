import { FC } from 'react';
import { ArrowUpRight, Box, Button, Link, Text } from 'blocks';
import { FAQContentContainer } from './FAQContentContainer';

export type FAQMainContainerProps = {};

const FAQMainContainer: FC<FAQMainContainerProps> = ({}) => {
  return (
    <Box
      flexDirection="row"
      display="flex"
      width="100%"
      gap="spacing-md"
    >
      {/* Render FAQ left side container */}
      <Box
        flexDirection="column"
        display="flex"
        gap="spacing-md"
        alignItems="flex-start"
        width="30%"
      >
        <Text
          color="text-primary"
          variant="h2-semibold"
        >
          Frequently Asked Questions
        </Text>
        <Link
          target="_blank"
          to={'#'}
        >
          <Button
            size="large"
            trailingIcon={<ArrowUpRight size={24} />}
          >
            Ask us on Discord
          </Button>
        </Link>
      </Box>

      {/* Render FAQ Content container */}
      <FAQContentContainer />
    </Box>
  );
};

export { FAQMainContainer };
