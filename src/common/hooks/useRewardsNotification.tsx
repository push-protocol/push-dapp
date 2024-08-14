// React and other libraries
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// components
import { notification, RewardPoints } from 'blocks';

export const useRewardsNotification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [hasMounted, setHasMounted] = useState(false);

  const notificationAlreadyShown = localStorage.getItem('notificationShown') === 'true';
  const isPointsPage = location?.pathname.includes('/points');

  const notificationItem = () => {
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

  const showNotification = () => {
    if (!isPointsPage && !notificationAlreadyShown) {
      notificationItem();
    } else {
      notification.hide();
    }
  };

  useEffect(() => {
    if (!hasMounted) {
      // do componentDidMount logic
      setHasMounted(true);
      showNotification();
    }
  }, [isPointsPage]);
};
