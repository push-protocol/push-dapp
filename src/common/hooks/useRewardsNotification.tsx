// React and other libraries
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// components
import { notification, RewardPoints } from 'blocks';
import { CommonLocalStorageKeys } from 'common';

export const useRewardsNotification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [hasMounted, setHasMounted] = useState(false);

  const notificationAlreadyShown = localStorage.getItem('notificationShown') === 'true';
  const isRewardsRelatedPage = location?.pathname.includes('/points') || location?.pathname.includes('/discord');

  const showNotification = () =>
    notification.show({
      title: 'Push Points are Live',
      description: 'Earn Push Points to unlock exclusive rewards on completing exciting activities',
      image: <RewardPoints />,
      position: 'bottom-left',
      onClick: () => {
        navigate('/points');
        localStorage.setItem(CommonLocalStorageKeys.notificationShown, 'true');
        notification.hide();
      },
      onClose: () => {
        localStorage.setItem(CommonLocalStorageKeys.notificationShown, 'true');
      },
    });

  const showNotificationFn = () => {
    if (!notificationAlreadyShown && !isRewardsRelatedPage) {
      // include componentDidMount logic
      if (!hasMounted) {
        showNotification();
        setHasMounted(true);
      }
    } else {
      notification.hide();
      setHasMounted(false);
    }
  };

  useEffect(() => {
    showNotificationFn();
  }, [isRewardsRelatedPage]);
};
