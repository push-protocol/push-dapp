import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';

import { convertAddressToAddrCaip } from 'helpers/CaipHelper';
import { useAccount, useGetPricingPlanDetails } from 'hooks';
import { useGetPricingPlanStatus } from 'queries';

import { Box, Button, Info, ProgressBar, Sale, Skeleton, Text } from 'blocks';
import { useMigrateToFreePlan } from './hooks/useMigrateToFreePlan';

export const UpgradePlanNavigationItem = () => {
  const navigate = useNavigate();
  const { account, chainId } = useAccount();
  const walletAddress = convertAddressToAddrCaip(account, chainId);

  const {
    data: pricingPlanStatus,
    isLoading: isPricingPlanStatusLoading,
    refetch: refetchPricingPlanStatus,
  } = useGetPricingPlanStatus({
    channelId: walletAddress,
  });
  const { selectedPlan, isUserOnFreePlan } = useGetPricingPlanDetails(pricingPlanStatus);

  useMigrateToFreePlan({
    pricingPlanStatus,
    isLoading: isPricingPlanStatusLoading,
    refetch: refetchPricingPlanStatus,
  });

  const totalQuota =
    (pricingPlanStatus?.email_total_quota ?? 0) +
    (pricingPlanStatus?.discord_total_quota ?? 0) +
    (pricingPlanStatus?.telegram_total_quota ?? 0);

  const totalQuotaUsed =
    (pricingPlanStatus?.email_quota_used ?? 0) +
    (pricingPlanStatus?.discord_quota_used ?? 0) +
    (pricingPlanStatus?.telegram_quota_used ?? 0);

  const totalQuotaRemaining = totalQuota - totalQuotaUsed;

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
            {(pricingPlanStatus && !isUserOnFreePlan && `Push ${selectedPlan?.name}`) || 'Free Plan'}
          </Text>
          <Button
            leadingIcon={<Sale />}
            size="extraSmall"
            variant="secondary"
            onClick={handleGoToPricing}
          >
            Upgrade
          </Button>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-xxs"
          width="100%"
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            width="100%"
            gap="spacing-xxxs"
          >
            {!isUserOnFreePlan && totalQuotaRemaining == 0 && <Info color="icon-state-danger-bold" />}
            <Text
              color="text-secondary"
              variant="c-bold"
            >
              Monthly Web2 Notifications
            </Text>
          </Box>

          <ProgressBar
            progress={totalQuotaUsed}
            max={totalQuota}
          />

          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            width="100%"
          >
            <Text
              color="text-secondary"
              variant="c-regular"
            >
              {!isUserOnFreePlan && totalQuotaRemaining == 0 ? 'Limit reached' : `${totalQuotaRemaining} Remaining`}
            </Text>

            {!isUserOnFreePlan && totalQuotaRemaining == 0 && (
              <Text
                color="text-secondary"
                variant="c-bold"
                onClick={handleGoToPricing}
                css={css`
                  &: hover {
                    text-decoration: underline;
                    cursor: pointer;
                  }
                `}
              >
                Upgrade Plan
              </Text>
            )}
          </Box>
        </Box>
      </Box>
    </Skeleton>
  );
};
