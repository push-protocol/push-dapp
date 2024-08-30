import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { ContentLayout } from 'common';
import APP_PATHS from 'config/AppPaths';

import { useAccount } from 'hooks';

import { NotificationSettings } from 'modules/notifSettings/NotificationSettings';

import { useGetChannelDetails } from 'queries';

const NotificationSettingsPage = () => {

  const { account } = useAccount();
  const navigate = useNavigate();

  const { data: channelDetails, isLoading: loadingChannelDetails } = useGetChannelDetails(account)

  useEffect(() => {
    if (!loadingChannelDetails && !channelDetails) {
      navigate(`${APP_PATHS.Channels}`);
    }
  }, [channelDetails, loadingChannelDetails]);


  return (
    <ContentLayout>
      <NotificationSettings />
    </ContentLayout>
  );
};

export default NotificationSettingsPage;
