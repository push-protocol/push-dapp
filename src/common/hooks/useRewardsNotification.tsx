// React and other libraries
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// components
import { notification, RewardPoints } from 'blocks';

export const useRewardsNotification = () => {
  const navigate = useNavigate();
  const [showNotif, setShowNotif] = useState(false);

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
    setShowNotif(true);
  };

  useEffect(() => {
    if (!isPointsPage && !notificationAlreadyShown) {
      if (!showNotif) showNotification();
    } else {
      notification.hide();
      setShowNotif(false);
    }
  }, [location?.pathname]);
};
