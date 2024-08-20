import { FC } from 'react';

import { NotificationItem, chainNameType } from '@pushprotocol/uiweb';

import { useBlocksTheme } from 'blocks/Blocks.hooks';

import { Box, Text } from 'blocks';

import { chainNameBackendStandard } from 'helpers/UtilityHelper';

type NotificationPreviewProps = {
  title: string;
  body: string;
  cta: string;
  channelName: string;
  icon: string;
  image: string;
  chainId: number;
};

const NotificationPreview: FC<NotificationPreviewProps> = (props) => {
  const theme = useBlocksTheme();

  const NotifItem = ({ title, body, cta, channelName, icon, image, chainId }: NotificationPreviewProps) => {
    return (
      <NotificationItem
        notificationTitle={title}
        notificationBody={body}
        cta={cta}
        app={channelName}
        icon={icon}
        image={image}
        chainName={chainNameBackendStandard[chainId as keyof typeof chainNameBackendStandard] as chainNameType}
        theme={theme.mode}
        url={''}
      />
    );
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-none"
    >
      <Text
        variant="h6-semibold"
        color="text-primary"
        textTransform="uppercase"
      >
        Preview Notification
      </Text>
      <NotifItem {...props} />
    </Box>
  );
};

export { NotificationPreview };
