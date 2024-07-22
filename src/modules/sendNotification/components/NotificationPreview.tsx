import { NotificationItem, chainNameType } from '@pushprotocol/uiweb';
import { Box, Text } from 'blocks';
import { useBlocksTheme } from 'blocks/Blocks.hooks';
import { chainNameBackendStandard } from 'helpers/UtilityHelper';
import { FC } from 'react';

type NotificationPreviewProps = {
  title: string;
  body: string;
  cta: string;
  channelName: string;
  icon: string;
  image: string;
  chainId: number;
};

const NotificationPreview: FC<NotificationPreviewProps> = ({ title, body, cta, channelName, icon, image, chainId }) => {
  const theme = useBlocksTheme();
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-none"
    >
      <Text
        variant="h6-semibold"
        color="components-inputs-text-default"
        textTransform="uppercase"
      >
        Preview Notification
      </Text>
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
    </Box>
  );
};

export { NotificationPreview };
