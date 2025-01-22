import { css } from 'styled-components';
import { toNumber } from 'lodash';
import { useNavigate } from 'react-router-dom';

import { useDisclosure } from 'common';

import { Box, Button, ProgressBar, Text } from 'blocks';
import UpgradePlanModal from './UpgradePlanModal';
import { useGetPricingInfo, useGetPricingPlanStatus } from 'queries';
import { useAccount } from 'hooks';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';

const UserPlanAndBillings = () => {
  const modalControl = useDisclosure();
  const { account, chainId } = useAccount();
  const navigate = useNavigate();
  const walletAddress = convertAddressToAddrCaip(account, chainId);

  const { data: pricingInfoList } = useGetPricingInfo();
  const { data: pricingPlanStatus } = useGetPricingPlanStatus({
    channelId: walletAddress,
  });

  // const pricingPlanStatus = {
  //   id: 1,
  //   channel: 'eip155:11155111:0xD8634C39BBFd4033c0d3289C4515275102423681',
  //   email_quota_used: 0,
  //   telegram_quota_used: 0,
  //   discord_quota_used: 0,
  //   pricing_plan_id: '2',
  //   email_total_quota: 2000,
  //   telegram_total_quota: 2000,
  //   discord_total_quota: 0,
  //   expirationTimestamp: 1767961517282,
  // };

  const selectedPlan = pricingInfoList?.find(
    (planItem: { id: number }) =>
      planItem?.id == toNumber(pricingPlanStatus?.pricing_plan_id ? pricingPlanStatus?.pricing_plan_id : '1'),
  );

  const planNotifications = [
    {
      title: 'Email Notification Delivery',
      subtitle: `${(pricingPlanStatus?.email_total_quota ?? 0) - (pricingPlanStatus?.email_quota_used ?? 0)} remaining`,
      progress: pricingPlanStatus?.email_quota_used ?? 0,
      max: pricingPlanStatus?.email_total_quota ?? 0,
    },
    {
      title: 'Telegram Notification Delivery',
      subtitle: `${(pricingPlanStatus?.telegram_total_quota ?? 0) - (pricingPlanStatus?.telegram_quota_used ?? 0)} remaining`,
      progress: pricingPlanStatus?.telegram_quota_used ?? 0,
      max: pricingPlanStatus?.telegram_total_quota ?? 0,
    },
    {
      title: 'Discord Notification Delivery',
      subtitle: `${(pricingPlanStatus?.discord_total_quota ?? 0) - (pricingPlanStatus?.discord_quota_used ?? 0)} remaining`,
      progress: pricingPlanStatus?.discord_quota_used ?? 0,
      max: pricingPlanStatus?.discord_total_quota ?? 0,
    },
  ];

  const navigateToPricing = () => {
    navigate('/pricing');
  };

  return (
    <Box width="100%">
      <Text
        variant="bs-regular"
        color="text-tertiary"
      >
        Take full control of your Push Notification plan, manage and stay up to date with your plan usage
      </Text>

      {pricingPlanStatus?.pricing_plan_id ? (
        <Box
          backgroundColor="surface-secondary"
          margin="spacing-lg spacing-none spacing-none spacing-none"
          padding="spacing-md"
          borderRadius="radius-md"
        >
          <Box
            display="flex"
            width="100%"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Text
              variant="h2-semibold"
              color="text-primary"
            >
              {selectedPlan?.name} Plan
            </Text>
            <Text
              variant="h2-semibold"
              color="text-primary"
            >
              ${selectedPlan?.value}/mo
            </Text>
          </Box>

          <Box
            display="flex"
            width="100%"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Text
              variant="bm-regular"
              color="text-tertiary"
            >
              For individuals
            </Text>
            <Text
              variant="bm-regular"
              color="text-tertiary"
            >
              billed yearly
            </Text>
          </Box>

          <Box
            margin="spacing-lg spacing-none spacing-none spacing-none"
            display="flex"
            width="100%"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              variant="tertiary"
              size="small"
              onClick={navigateToPricing}
            >
              Upgrade Plan
            </Button>

            <Text
              variant="bs-semibold"
              color="text-primary"
              css={css`
                cursor: pointer;
              `}
              onClick={() => modalControl.open()}
            >
              Cancel Plan
            </Text>
          </Box>
        </Box>
      ) : (
        <Box
          backgroundColor="surface-secondary"
          margin="spacing-lg spacing-none spacing-none spacing-none"
          padding="spacing-md"
          borderRadius="radius-md"
        >
          <Box
            display="flex"
            width="100%"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Text
              variant="h2-semibold"
              color="text-primary"
            >
              Free Plan
            </Text>
          </Box>

          <Box
            display="flex"
            width="100%"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Text
              variant="bm-regular"
              color="text-tertiary"
            >
              For individuals
            </Text>
          </Box>

          <Box
            margin="spacing-lg spacing-none spacing-none spacing-none"
            display="flex"
            width="100%"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              variant="primary"
              size="small"
              onClick={navigateToPricing}
            >
              Upgrade Plan
            </Button>
          </Box>
        </Box>
      )}

      <Box margin="spacing-xl spacing-none spacing-none spacing-none">
        <Text
          variant="h4-semibold"
          color="text-primary"
        >
          Plan Usage
        </Text>
        <Text
          variant="bs-regular"
          color="text-tertiary"
        >
          Keep track of usage in your current cycle
        </Text>
      </Box>

      <Box
        margin="spacing-lg spacing-none spacing-none spacing-none"
        display="flex"
        flexDirection="row"
        width="100%"
        justifyContent="space-between"
        gap="spacing-md"
      >
        {planNotifications?.map((item) => (
          <Box
            display="flex"
            flexDirection="column"
            gap="spacing-xxs"
            width="100%"
          >
            <Text
              color="text-secondary"
              variant="c-bold"
            >
              {item.title}
            </Text>

            <ProgressBar
              progress={item?.progress}
              max={item?.max}
            />

            <Text
              color="text-secondary"
              variant="c-regular"
            >
              {item.subtitle}
            </Text>
          </Box>
        ))}
      </Box>

      {modalControl.isOpen && <UpgradePlanModal modalControl={modalControl} />}
    </Box>
  );
};

export default UserPlanAndBillings;
