import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Constants
import { rewardsTabsList } from '../Rewards.constants';

// Types
import { RewardsTabs } from '../Rewards.types';

const useRewardsTabs = () => {
  const [activeTab, setActiveTab] = useState(rewardsTabsList[0].value);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const locationArray = location.pathname.split('/');
    const currentTab = locationArray[2];
    if (currentTab && currentTab !== activeTab) {
      setActiveTab(currentTab as RewardsTabs);
    } else if (!currentTab && activeTab !== rewardsTabsList[0].value) {
      setActiveTab(rewardsTabsList[0].value);
    }
  }, [location, activeTab]);

  const handleSetActiveTab = (tab: RewardsTabs) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
      if (tab == 'dashboard') {
        navigate(`/points`);
      } else {
        navigate(`/points/${tab}`);
      }
    }
  };
  return { activeTab, handleSetActiveTab };
};
export { useRewardsTabs };
