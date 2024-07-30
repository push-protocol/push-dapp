import { FC } from 'react';

import { Box, OptOut, Separator, Text } from 'blocks';

import { shortenText } from 'helpers/UtilityHelper';

type ChannelDelegateListProps = {
  delegate_address: string;
}
const ChannelDelegateList: FC<ChannelDelegateListProps> = ({
  delegate_address
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="43px"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
      >
        <Box
          display="flex"
          alignItems="center"
          gap="spacing-xxxs"
        >
          <Text
            variant="bs-semibold"
            color="text-primary"
          >
            {shortenText(delegate_address, 7)}
          </Text>
          {/* <Tooltip description={tooltipText}> */}
          {/* <Box cursor="pointer">
            <Copy
              onClick={copyWalletAddress}
              size={14}
              color="icon-tertiary"
            />
          </Box> */}
          {/* </Tooltip> */}
        </Box>

        <Box
          display="flex"
          cursor="pointer"
          gap="spacing-xxxs"
        // onClick={handleRemoveDelegate}
        >
          <OptOut
            size={16}
            color="icon-primary"
          />
          <Text color="text-tertiary-inverse">Remove</Text>
        </Box>
      </Box>

      <Separator />
    </Box>
  );
};

export { ChannelDelegateList };