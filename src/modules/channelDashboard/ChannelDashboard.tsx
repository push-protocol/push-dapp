// React and other libraries
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

// Components
import { Box } from 'blocks';
import { ChannelAddSubgraph } from './components/ChannelAddSubgraph';
import { ChannelAddDelegate } from './components/ChannelAddDelegate';
import { ReactivateChannel } from './components/ReactivateChannel';
import { DeactivateChannel } from './components/DeactivateChannel';
import { UserChannelDashboard } from './components/UserChannelDashboard';

// Hooks
import useFetchChannelDetails from 'common/hooks/useFetchUsersChannelDetails';
import { useGetChannelCategories, useGetPaymentDetails, useGetPricingInfo, useGetPricingPlanStatus } from 'queries';
import { PurchasePlanAlert } from 'common';
import { useAccount } from 'hooks';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';

// Types
import { DashboardActiveState } from './ChannelDashboard.types';
import { EditChannelV2 } from 'modules/editChannel/EditChannelV2';
import { calculateExpirationDetails } from 'components/userSettings/utils';

const ChannelDashboard = () => {
  const [activeState, setActiveState] = useState<DashboardActiveState>('dashboard');

  const [searchParams] = useSearchParams();
  const paymentId = searchParams.get('paymentId');
  const { account, chainId } = useAccount();
  const walletAddress = convertAddressToAddrCaip(account, chainId);
  const navigate = useNavigate();

  const { data: pricingInfoList } = useGetPricingInfo();
  const { data: pricingPlanStatus } = useGetPricingPlanStatus({
    channelId: walletAddress,
  });

  const selectedPlan = pricingInfoList?.find(
    (planItem: { id: number }) =>
      planItem?.id == parseInt(pricingPlanStatus?.pricing_plan_id ? pricingPlanStatus?.pricing_plan_id : '1'),
  );
  const { data: paymentDetails } = useGetPaymentDetails({ paymentId: paymentId! });
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
  // expirationTimestamp: 1715515200000,
  // expirationTimestamp: 1739152965000,
  // };

  // const paymentDetails = {
  //   id: 6,
  //   channel: 'eip155:11155111:0xd8634c39bbfd4033c0d3289c4515275102423681',
  //   payment_id: '3idbuzrWTW8w13XwJDQK72',
  //   pricing_plan_id: '2',
  //   amount: 1,
  //   currency: 'USDC',
  //   created_at: 1736856636,
  //   payment_network: '11155111',
  //   payment_status: 'SUCCESS',
  //   transaction_hash: '0xe1134ad134ccb9247ee9dd4c1b47fad4d9e814bc848fd8a25829d8e17a97a978',
  //   expires_at: 1736863836,
  //   message: '',
  //   durationInMonths: 12,
  // };

  const { channelDetails, loadingChannelDetails, refetchChannelDetails } = useFetchChannelDetails();
  useGetChannelCategories();

  const expiryDetails = calculateExpirationDetails(pricingPlanStatus!);

  const totalQuota =
    (pricingPlanStatus?.email_total_quota ?? 0) +
    (pricingPlanStatus?.discord_total_quota ?? 0) +
    (pricingPlanStatus?.telegram_total_quota ?? 0);

  const totalQuotaUsed =
    (pricingPlanStatus?.email_quota_used ?? 0) +
    (pricingPlanStatus?.discord_quota_used ?? 0) +
    (pricingPlanStatus?.telegram_quota_used ?? 0);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-sm"
    >
      <Box>
        {/* Payment success alert after redirecting from purchase plan page */}
        {paymentDetails?.payment_status == 'SUCCESS' && (
          <PurchasePlanAlert
            variant="success"
            purchasedPlan={{ planName: selectedPlan?.name! }}
            onAction={() => {
              window.open(`https://sepolia.etherscan.io/tx/${paymentDetails?.transaction_hash}`, '_blank');
            }}
          />
        )}

        {/* Expiry notice alert after plan has expired */}
        {pricingPlanStatus && expiryDetails?.isExpired && (
          <PurchasePlanAlert
            variant="expired"
            purchasedPlan={{ planName: selectedPlan?.name! }}
            onAction={() => {
              navigate('/pricing');
            }}
          />
        )}

        {/* Expiry notice alert when expiry is less than 7 days */}
        {pricingPlanStatus && parseInt(expiryDetails?.timeRemaining!) < 7 && (
          <PurchasePlanAlert
            variant="renewalReminder"
            purchasedPlan={{ planName: selectedPlan?.name!, daysRemaining: parseInt(expiryDetails?.timeRemaining!) }}
            onAction={() => {
              navigate('/pricing');
            }}
          />
        )}

        {/* Alert when user is on free plan, and notification limit is already reached */}
        {pricingPlanStatus?.pricing_plan_id == '1' && totalQuota - totalQuotaUsed < 100 && (
          <PurchasePlanAlert
            variant="notificationLimit"
            onAction={() => {
              navigate('/pricing');
            }}
          />
        )}
      </Box>

      {activeState === 'dashboard' && (
        <UserChannelDashboard
          setActiveState={setActiveState}
          channelDetails={channelDetails}
          loadingChannelDetails={loadingChannelDetails}
        />
      )}

      {activeState === 'addDelegate' && <ChannelAddDelegate setActiveState={setActiveState} />}
      {activeState === 'addSubgraph' && <ChannelAddSubgraph setActiveState={setActiveState} />}

      {activeState === 'deactivateChannel' && (
        <DeactivateChannel
          setActiveState={setActiveState}
          channelDetails={channelDetails}
          refetchChannelDetails={refetchChannelDetails}
        />
      )}
      {activeState === 'reactivateChannel' && (
        <ReactivateChannel
          setActiveState={setActiveState}
          channelDetails={channelDetails}
          refetchChannelDetails={refetchChannelDetails}
        />
      )}

      {activeState === 'editChannel' && channelDetails && (
        <EditChannelV2
          setActiveState={setActiveState}
          channelDetails={channelDetails}
        />
      )}
    </Box>
  );
};

export { ChannelDashboard };
