import { css } from 'styled-components';
import { toNumber } from 'lodash';
import { useNavigate } from 'react-router-dom';

import { useDisclosure } from 'common';

import { Box, Button, ProgressBar, Text } from 'blocks';
import CancelPlanModal from './CancelPlanModal';
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
        flexDirection={{ initial: 'row', ml: 'column' }}
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

      {modalControl.isOpen && (
        <CancelPlanModal
          modalControl={modalControl}
          pricingInfoList={pricingInfoList!}
          pricingPlanStatus={pricingPlanStatus!}
        />
      )}
    </Box>
  );
};

export default UserPlanAndBillings;
