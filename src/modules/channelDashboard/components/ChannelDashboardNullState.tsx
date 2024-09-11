import { FC } from 'react';

import { Box, Button, CrownSimple, ReceiveNotification, Text } from 'blocks';

type ChannelDashboardNullStateProps = {
  state: 'notificationSettings' | 'delegatee';
  title: string;
  subTitle: string;
  onClick?: any;
};

const ChannelDashboardNullState: FC<ChannelDashboardNullStateProps> = ({ state, title, subTitle, onClick }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="spacing-sm"
      height="200px"
    >
      {state == 'delegatee' && (
        <CrownSimple
          size={48}
          color="icon-tertiary"
        />
      )}
      {state == 'notificationSettings' && (
        <ReceiveNotification
          size={48}
          color="icon-tertiary"
        />
      )}

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Text
          textAlign="center"
          variant="h6-semibold"
          color="text-secondary"
        >
          {title}
        </Text>

        <Text
          textAlign="center"
          variant="bes-regular"
          color="text-tertiary"
        >
          {subTitle}
        </Text>
      </Box>

      {onClick && (
        <Button
          variant="primary"
          size="small"
          onClick={onClick}
        >
          Add Setting
        </Button>
      )}
    </Box>
  );
};

export { ChannelDashboardNullState };
