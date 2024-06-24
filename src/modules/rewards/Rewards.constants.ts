import { Discord, IllustrationProps, Twitter } from 'blocks';
import { RewardsTabsList } from './Rewards.types';
import { FC } from 'react';

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

interface Illustration {
  JoinURL: string;
  name: string;
}

interface Illustrations {
  [key: string]: Illustration;
}

export const ActivityConfig: Illustrations = {
  '66728043459873cd345735e3': {
    JoinURL: 'https://discord.gg/pushprotocol',
    name: 'Discord'
  },
  '66728043459873cd345735e1': {
    JoinURL: 'https://twitter.com/pushprotocol',
    name: 'Twitter'
  },
  '667572cd5456140b26e1e3b8': {
    JoinURL: '',
    name: ''
  }
};
