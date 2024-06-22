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
    if (location.pathname === '/rewards' || location.pathname === '/rewards/') {
      setActiveTab('dashboard');
      navigate(`/rewards/dashboard`);
    }
  }, []);

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
      navigate(`/rewards/${tab}`);
    }
  };
  return { activeTab, handleSetActiveTab };
};
export { useRewardsTabs };
