import { FC } from 'react';

import { Discord, RewardsActivity, Twitter } from 'blocks';
import { ActvityType } from 'queries';

type RewardsActivityIconProp = {
  type: ActvityType
}

const RewardsActivityIcon: FC<RewardsActivityIconProp> = ({ type }) => {

  if (type === 'follow_push_on_discord') {
    return <Discord width={48} height={48} />;
  }

  if (type === 'follow_push_on_twitter') {
    return <Twitter width={48} height={48} />;
  }

  return <RewardsActivity />;
};
export { RewardsActivityIcon };