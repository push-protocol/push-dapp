import { FC } from 'react';

import {
  Discord,
  RewardsActivity,
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
  Twitter,
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

  if (type === 'stake_1_uni_v2_lp_epoch' || type === 'stake_1k_push_epoch') {
    return (
      <StakePushGreyCoin
        width={48}
        height={48}
      />
    );
  }

  if (type === 'stake_10_uni_v2_lp_epoch' || type === 'stake_10k_push_epoch') {
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

  if (type === 'stake_10_uni_v2_lp_one_time' || type === 'stake_10k_push_one_time') {
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
