import { FC } from 'react';

import {
  ActivePushPoints,
  AlphaAccessNFT,
  BlueBonusActivitySubscribers,
  CreateChannelPoints,
  Discord,
  GatedGroupPoints,
  GradientBonusActivitySubscribers,
  GreyBonusActivitySubscribers,
  OrangeBonusActivitySubscribers,
  RewardsActivity,
  RockstarNFT,
  SetupProfilePoints,
  StakePushBlueCoin,
  StakePushBlueMultiplier,
  StakePushGradientCoin,
  StakePushGradientMultiplier,
  StakePushGreyCoin,
  StakePushGreyMultiplier,
  StakePushOrangeCoin,
  StakePushOrangeMultiplier,
  StakePushYellowCoin,
  StakePushYellowMultiplier,
  SubscribePoints,
  Twitter,
  YellowBonusActivitySubscribers,
} from 'blocks';
import { ActvityType } from 'queries';

type RewardsActivityIconProp = {
  type: ActvityType;
};

const RewardsActivityIcon: FC<RewardsActivityIconProp> = ({ type }) => {
  if (type === 'follow_push_on_discord') {
    return (
      <Discord
        width={48}
        height={48}
      />
    );
  }

  if (type === 'follow_push_on_twitter') {
    return (
      <Twitter
        width={48}
        height={48}
      />
    );
  }

  if (type === 'create_gated_group_push_chat') {
    return (
      <GatedGroupPoints
        width={48}
        height={48}
      />
    );
  }

  if (type === 'subscribe_5_channels_push' || type === 'subscribe_20_channels_push') {
    return (
      <SubscribePoints
        width={48}
        height={48}
      />
    );
  }

  if (type === 'setup_push_user_profile') {
    return (
      <SetupProfilePoints
        width={48}
        height={48}
      />
    );
  }

  if (type === 'active_push_chat_user') {
    return (
      <ActivePushPoints
        width={48}
        height={48}
      />
    );
  }

  if (type === 'hold_push_alpha_access_nft') {
    return (
      <AlphaAccessNFT
        width={48}
        height={48}
      />
    );
  }

  if (type === 'hold_push_rockstar_nft') {
    return (
      <RockstarNFT
        width={48}
        height={48}
      />
    );
  }

  if (type === 'create_channel_push') {
    return (
      <CreateChannelPoints
        width={48}
        height={48}
      />
    );
  }

  if (type === 'reach_100_subscribers') {
    return (
      <GreyBonusActivitySubscribers
        width={48}
        height={48}
      />
    );
  }

  if (type === 'reach_500_subscribers' || type === 'reach_1000_subscribers') {
    return (
      <OrangeBonusActivitySubscribers
        width={48}
        height={48}
      />
    );
  }

  if (type === 'reach_5000_subscribers') {
    return (
      <BlueBonusActivitySubscribers
        width={48}
        height={48}
      />
    );
  }

  if (type === 'reach_10000_subscribers') {
    return (
      <YellowBonusActivitySubscribers
        width={48}
        height={48}
      />
    );
  }

  if (type === 'reach_50000_subscribers' || type === 'reach_100000_subscribers') {
    return (
      <GradientBonusActivitySubscribers
        width={48}
        height={48}
      />
    );
  }

  if (type === 'stake_1_uni_v2_lp_epoch' || type === 'stake_1k_push_epoch') {
    return (
      <StakePushGreyCoin
        width={48}
        height={48}
      />
    );
  }

  if (
    type === 'stake_10_uni_v2_lp_epoch' ||
    type === 'stake_10k_push_epoch' ||
    type === 'stake_5_uni_v2_lp_epoch' ||
    type === 'stake_5k_push_epoch'
  ) {
    return (
      <StakePushOrangeCoin
        width={48}
        height={48}
      />
    );
  }

  if (type === 'stake_50_uni_v2_lp_epoch' || type === 'stake_50k_push_epoch') {
    return (
      <StakePushBlueCoin
        width={48}
        height={48}
      />
    );
  }

  if (type === 'stake_100_uni_v2_lp_epoch' || type === 'stake_100k_push_epoch') {
    return (
      <StakePushYellowCoin
        width={48}
        height={48}
      />
    );
  }

  if (type === 'stake_500_uni_v2_lp_epoch' || type === 'stake_500k_push_epoch') {
    return (
      <StakePushGradientCoin
        width={48}
        height={48}
      />
    );
  }

  if (type === 'stake_1_uni_v2_lp_one_time' || type === 'stake_1k_push_one_time') {
    return (
      <StakePushGreyMultiplier
        width={48}
        height={48}
      />
    );
  }

  if (
    type === 'stake_10_uni_v2_lp_one_time' ||
    type === 'stake_10k_push_one_time' ||
    type === 'stake_5_uni_v2_lp_one_time' ||
    type === 'stake_5k_push_one_time'
  ) {
    return (
      <StakePushOrangeMultiplier
        width={48}
        height={48}
      />
    );
  }

  if (type === 'stake_50_uni_v2_lp_one_time' || type === 'stake_50k_push_one_time') {
    return (
      <StakePushBlueMultiplier
        width={48}
        height={48}
      />
    );
  }

  if (type === 'stake_100_uni_v2_lp_one_time' || type === 'stake_100k_push_one_time') {
    return (
      <StakePushYellowMultiplier
        width={48}
        height={48}
      />
    );
  }

  if (type === 'stake_500_uni_v2_lp_one_time' || type === 'stake_500k_push_one_time') {
    return (
      <StakePushGradientMultiplier
        width={48}
        height={48}
      />
    );
  }

  return <RewardsActivity />;
};
export { RewardsActivityIcon };
