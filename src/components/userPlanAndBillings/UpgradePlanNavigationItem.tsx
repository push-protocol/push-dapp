import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';
import { toNumber } from 'lodash';

import { convertAddressToAddrCaip } from 'helpers/CaipHelper';
import { useAccount } from 'hooks';
import { useGetPricingInfo, useGetPricingPlanStatus } from 'queries';

import { Box, Button, ProgressBar, Sale, Skeleton, Text } from 'blocks';

export const UpgradePlanNavigationItem = () => {
  const navigate = useNavigate();
  const { account, chainId } = useAccount();
  const walletAddress = convertAddressToAddrCaip(account, chainId);

  const { data: pricingInfoList } = useGetPricingInfo();
  const { data: pricingPlanStatus, isLoading: isPricingPlanStatusLoading } = useGetPricingPlanStatus({
    channelId: walletAddress,
  });

  const selectedPlan = pricingInfoList?.find(
    (planItem: { id: number }) =>
      planItem?.id == toNumber(pricingPlanStatus?.pricing_plan_id ? pricingPlanStatus?.pricing_plan_id : '1'),
  );

  const totalQuota =
    (pricingPlanStatus?.email_total_quota ?? 0) +
    (pricingPlanStatus?.discord_total_quota ?? 0) +
    (pricingPlanStatus?.telegram_total_quota ?? 0);

  const totalQuotaUsed =
    (pricingPlanStatus?.email_quota_used ?? 0) +
    (pricingPlanStatus?.discord_quota_used ?? 0) +
    (pricingPlanStatus?.telegram_quota_used ?? 0);

  const handleGoToPricing = () => {
    navigate('/pricing');
  };
  return (
    <Skeleton isLoading={isPricingPlanStatusLoading}>
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        backgroundColor="surface-primary"
        padding="spacing-xs"
        borderRadius="radius-xs"
        gap="spacing-xs"
        css={css`
          box-sizing: border-box;
        `}
      >
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text
            color="text-primary"
            variant="h6-bold"
          >
            Push {(pricingPlanStatus && selectedPlan?.name) || 'Free Plan'}
          </Text>
          {pricingPlanStatus?.pricing_plan_id !== '3' && (
            <Button
              leadingIcon={<Sale />}
              size="extraSmall"
              variant="secondary"
              onClick={handleGoToPricing}
            >
              Upgrade
            </Button>
          )}
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-xxs"
          width="100%"
        >
          <Text
            color="text-secondary"
            variant="c-regular"
          >
            Monthly Web2 Notifications
          </Text>

          <ProgressBar
            progress={totalQuota - totalQuotaUsed}
            max={totalQuota}
          />

          <Text
            color="text-secondary"
            variant="c-regular"
          >
            {totalQuota - totalQuotaUsed} remaining
          </Text>
        </Box>
      </Box>
    </Skeleton>
  );
};
