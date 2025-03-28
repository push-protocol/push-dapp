// React and other libraries
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// components
import { notification, RewardPointsS2 } from 'blocks';
import { CommonLocalStorageKeys } from 'common';

export const useRewardsNotification = () => {
  const location = useLocation();
  const [hasMounted, setHasMounted] = useState(false);

  const notificationAlreadyShown = localStorage.getItem('notificationShown') === 'true';
  const isRewardsRelatedPage = location?.pathname.includes('/points') || location?.pathname.includes('/discord');

  const showNotification = () =>
    notification.show({
      title: 'Devnet Drop S2 is Live!',
      description: 'Explore Push Chain Devnet, complete quests, bang out multipliers, and earn airdrops.',
      image: <RewardPointsS2 />,
      position: 'bottom-left',
      onClick: () => {
        window.open('https://portal.push.org/rewards', '_blank');
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
