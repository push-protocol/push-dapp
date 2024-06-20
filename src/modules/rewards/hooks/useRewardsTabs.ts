import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

//Constants
import { rewardsTabsList } from '../Rewards.constants';

//Types
import { RewardsTabs } from '../Rewards.types';

const useRewardsTabs = () => {
  const [activeTab, setActiveTab] = useState(rewardsTabsList[0].value);

  const location = useLocation();
  const navigate = useNavigate();

  const locationArray = location.pathname.split('/');

  const handleSetActiveTab = (tab: RewardsTabs) => {
    setActiveTab(tab);
    navigate(`/rewards/${tab}`);
  };

  useEffect(() => {
    if (locationArray.length === 3 && locationArray[2]) handleSetActiveTab(locationArray[2] as RewardsTabs);
    else handleSetActiveTab(rewardsTabsList[0].value);
  }, [location]);

  return { activeTab, handleSetActiveTab };
};

export { useRewardsTabs };
