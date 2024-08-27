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
  const isPointsPage = location?.pathname.includes('/points');

  const showNotification = () =>
    notification.show({
      title: 'Push Points are Live',
      description: 'Complete Tasks on Push. Check-in, Earn Push Points, Unlock Rewards and Level up!',
      image: <RewardPoints />,
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
    if (!notificationAlreadyShown && !isPointsPage) {
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
  }, [isPointsPage]);
};
