import { FC } from "react";
import { Box, Text } from "blocks";

type ModalHeaderProps = {
  title: string;
  description: string;
}

const ModalHeader: FC<ModalHeaderProps> = ({
  title,
  description
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="spacing-xxxs"
      alignSelf="stretch"
    >

      <Text
        variant="h3-semibold"
        color='text-primary'
        display={{ ml: 'none', dp: 'block' }}
      >
        {title}
      </Text>

      <Text
        variant="bs-regular"
        color='text-tertiary'
        display={{ ml: 'none', dp: 'block' }}
        textAlign="center"
      >
        {description}
      </Text>


      <Text
        variant={"h4-semibold"}
        color='text-primary'
        display={{ ml: 'block', dp: 'none' }}
      >
        {title}
      </Text>

      <Text
        variant="bes-regular"
        color='text-tertiary'
        display={{ ml: 'block', dp: 'none' }}
        textAlign='center'
      >
        {description}
      </Text>

    </Box>
  );
};

export { ModalHeader };