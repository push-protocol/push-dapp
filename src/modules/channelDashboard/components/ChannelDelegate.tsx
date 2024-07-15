import { Box, Button, OptOut, Separator, Text } from "blocks";
import { shortenText } from "helpers/UtilityHelper";
import { css } from "styled-components";

const ChannelDelegate = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
    >
      <Box
        display='flex'
        justifyContent='space-between'
      >
        <Text variant='bs-semibold' color='text-primary'>
          {shortenText('0x9452BCAf507CD6547574b78B810a723d8868C85a', 5)}
        </Text>


        <Button
          size="extraSmall"
          variant="outline"
          leadingIcon={<OptOut size={16} />}
          css={css`border:none;`}
        >
          <Text color='gray-600'>Remove</Text>
        </Button>
      </Box>

      <Separator />
    </Box>
  );
};

export { ChannelDelegate };