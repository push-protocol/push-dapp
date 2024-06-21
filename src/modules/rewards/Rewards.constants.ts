import { Discord, Twitter } from 'blocks';
import { RewardsTabsList } from './Rewards.types';

export const rewardsTabsList: RewardsTabsList = [
  {
    value: 'dashboard',
    label: 'Dashboard'
  },
  {
    value: 'activities',
    label: 'Reward Activities'
  },
  {
    value: 'leaderboard',
    label: 'Leaderboard'
  }
];

export const ActivityTypeID = {
  DISCORD: {
    Id: '66728043459873cd345735e3',
    image: Discord
  },
  TWITTER: {
    Id: '66728043459873cd345735e1',
    image: Twitter
  }
};
