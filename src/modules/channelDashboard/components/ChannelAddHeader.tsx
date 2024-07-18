import { Box, Text } from "blocks";
import { FC } from "react";

type ChannelAddHeaderProps = {
  title: string;
  description: string;
}

const ChannelAddHeader: FC<ChannelAddHeaderProps> = ({
  title,
  description
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="s1"
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

export { ChannelAddHeader };