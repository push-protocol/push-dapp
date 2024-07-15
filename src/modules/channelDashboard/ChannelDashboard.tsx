import { Box } from "blocks";
import { ChannelDashboardHeader } from "./components/ChannelDashboardHeader";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { ChannelDashboardNotificationSettings } from "./components/ChannelDashboardNotificationSettings";
import { ChannelDashboardDelegates } from "./components/ChannelDashboardDelegates";

const ChannelDashboard = () => {
  return (
    <Box
      display='flex'
      width='846px'
      padding='s6'
      flexDirection='column'
      alignItems='center'
      gap='spacing-lg'
      backgroundColor='surface-primary'
      borderRadius='radius-lg'
    >
      <ChannelDashboardHeader />

      <Box
        display='flex'
        gap='spacing-md'
        width='100%'
      >
        <ChannelDashboardNotificationSettings />
        <ChannelDashboardDelegates />
      </Box>

      <PrivacyPolicy />

    </Box>
  );
};

export { ChannelDashboard };