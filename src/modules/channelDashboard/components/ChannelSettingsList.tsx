import { FC } from "react";

import { Box, Lozenge, Separator, Text } from "blocks";

type ChannelSettingsListProps = {
  settingName: string;
  type: number;
}

const ChannelSettingsList: FC<ChannelSettingsListProps> = ({
  settingName,
  type
}) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      height='43px'
    >
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        height='100%'

      >
        <Text variant='bs-semibold' color='text-primary'>
          {settingName}
        </Text>

        {/* //TODO: Lozenge will be given for this in blue color */}
        {type == 2 && <Lozenge >Range</Lozenge>}
        {type == 3 && <Lozenge >Multi-Range</Lozenge>}


      </Box>

      <Separator />
    </Box >
  );
};

export { ChannelSettingsList };