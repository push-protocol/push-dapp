import { css } from 'styled-components';
import { toNumber } from 'lodash';
import { useNavigate } from 'react-router-dom';

import { useGetPricingInfo, useGetPricingPlanStatus } from 'queries';
import { useAccount } from 'hooks';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';

import { Box, Button, Info, ProgressBar, Text } from 'blocks';

const UserPlanAndBillings = () => {
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

  const isUserOnFreePlan = selectedPlan?.id == 1;
  const navigateToPricing = () => {
    navigate('/pricing');
  };

  const pricingListDescriptions = [
    {
      id: 1,
      description: 'For casual degens',
    },
    {
      id: 2,
      description: 'For individuals',
    },
    {
      id: 3,
      description: 'For growing apps',
    },
    {
      id: 4,
      description: 'For advanced solutions',
    },
  ];

  // console.log(selectedPlan, 'check check');

  return (
    <Box width="100%">
      <Text
        variant="bs-regular"
        color="text-tertiary"
      >
        Take full control of your Push Notification plan, manage and stay up to date with your plan usage
      </Text>

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
            {(pricingPlanStatus && !isUserOnFreePlan && `Push ${selectedPlan?.name}`) || 'Free Plan'}
          </Text>
          {!isUserOnFreePlan && (
            <Text
              variant="h2-semibold"
              color="text-primary"
            >
              ${selectedPlan?.value}/mo
            </Text>
          )}
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
            {pricingListDescriptions?.find((desc) => desc.id === selectedPlan?.id)?.description}
          </Text>
          {!isUserOnFreePlan && (
            <Text
              variant="bm-regular"
              color="text-tertiary"
            >
              billed yearly
            </Text>
          )}
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
            variant={!isUserOnFreePlan ? 'tertiary' : 'primary'}
            size="small"
            onClick={navigateToPricing}
          >
            Upgrade Plan
          </Button>
        </Box>
      </Box>

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
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              width="100%"
              gap="spacing-xxxs"
            >
              {!isUserOnFreePlan && item?.progress - item?.max == 0 && <Info color="icon-state-danger-bold" />}
              <Text
                color="text-secondary"
                variant="c-bold"
              >
                {item.title}
              </Text>
            </Box>

            <ProgressBar
              progress={item?.progress}
              max={item?.max}
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
                {!isUserOnFreePlan && item?.progress - item?.max == 0 ? 'Limit reached' : item.subtitle}
              </Text>

              {!isUserOnFreePlan && item?.progress - item?.max == 0 && (
                <Text
                  color="text-secondary"
                  variant="c-bold"
                  onClick={navigateToPricing}
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
        ))}
      </Box>
    </Box>
  );
};

export default UserPlanAndBillings;
