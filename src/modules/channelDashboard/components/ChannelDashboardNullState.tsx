import { Box, Button, CrownSimple, ReceiveNotification, Text } from 'blocks';
import { FC } from 'react';

type ChannelDashboardNullStateProps = {
  state: 'notification_settings' | 'delegatee';
  title: string;
  subTitle: string;
  onClick?: any;
};

const ChannelDashboardNullState: FC<ChannelDashboardNullStateProps> = ({
  state,
  title,
  subTitle,
  onClick
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="s4"
      height="200px"
    >
      {state == 'delegatee' && <CrownSimple size={48} color="gray-300" />}
      {state == 'notification_settings' && <ReceiveNotification size={48} color="gray-300" />}

      <Box display="flex" flexDirection="column" alignItems="center" gap="s1">
        {/* {heading && ( */}
        <Text textAlign="center" variant="h6-semibold" color='text-secondary'>
          {title}
        </Text>

        {/* {subHeading && ( */}
        <Text textAlign="center" variant="bes-regular" color='text-tertiary'>
          {subTitle}
        </Text>

      </Box>

      {onClick && (
        <Button variant="primary" size="small" onClick={onClick}>
          Add Setting
        </Button>
      )}
    </Box>
  );
};

export default ChannelDashboardNullState;
