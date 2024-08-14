// React and other libraries
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// components
import { notification, RewardPoints } from 'blocks';

export const useRewardsNotification = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const notificationAlreadyShown = localStorage.getItem('notificationShown') === 'true';
  const isPointsPage = location?.pathname.includes('/points');

  const showNotification = () => {
    notification.show({
      title: 'Push Points are Live',
      description: 'Complete Tasks on Push. Check-in, Earn Push Points, Unlock Rewards and Level up!',
      image: <RewardPoints />,
      onClick: () => {
        navigate('/points');
        localStorage.setItem('notificationShown', 'true');
        notification.hide();
      },
      onClose: () => {
        localStorage.setItem('notificationShown', 'true');
      },
    });
  };

  useEffect(() => {
    if (!isPointsPage && !notificationAlreadyShown) {
      showNotification();
    } else {
      notification.hide();
    }
  }, [isPointsPage]);
};
