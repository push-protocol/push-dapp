// React and other libraries
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

// Components
import { Alert, Box } from 'blocks';
import { ChannelAddSubgraph } from './components/ChannelAddSubgraph';
import { ChannelAddDelegate } from './components/ChannelAddDelegate';
import { ReactivateChannel } from './components/ReactivateChannel';
import { DeactivateChannel } from './components/DeactivateChannel';
import { UserChannelDashboard } from './components/UserChannelDashboard';

// Hooks
import useFetchChannelDetails from 'common/hooks/useFetchUsersChannelDetails';
import { useGetChannelCategories, useGetPaymentDetails, useGetPricingPlanStatus } from 'queries';
import { PurchasePlanAlert, useDisclosure } from 'common';
import { useAccount, useGetPricingPlanDetails } from 'hooks';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';

// Types
import { DashboardActiveState } from './ChannelDashboard.types';
import { EditChannelV2 } from 'modules/editChannel/EditChannelV2';
import { calculateExpirationDetails } from 'components/userSettings/utils';
import { UpgradePlanModal } from './components/UpgradePlanModal';

const ChannelDashboard = () => {
  const [activeState, setActiveState] = useState<DashboardActiveState>('dashboard');

  const [searchParams] = useSearchParams();
  const paymentId = searchParams.get('paymentId');
  const { account, chainId } = useAccount();
  const walletAddress = convertAddressToAddrCaip(account, chainId);
  const navigate = useNavigate();
  const modalControl = useDisclosure();

  const { data: pricingPlanStatus } = useGetPricingPlanStatus({
    channelId: walletAddress,
  });
  const { selectedPlan, isUserOnFreePlan } = useGetPricingPlanDetails(pricingPlanStatus, walletAddress);

  const { data: paymentDetails } = useGetPaymentDetails({ paymentId: paymentId! });

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

  const isAnyAlertShowing =
    paymentDetails?.payment_status == 'SUCCESS' ||
    (pricingPlanStatus && !isUserOnFreePlan && expiryDetails?.isExpired) ||
    (pricingPlanStatus && !isUserOnFreePlan && parseInt(expiryDetails?.timeRemaining!) < 7) ||
    (isUserOnFreePlan && totalQuota - totalQuotaUsed < 100);

  // show the Go Pro alert when no other Alert is showing and user is on Free Plan
  const showGoProAlert = isUserOnFreePlan && !isAnyAlertShowing && activeState === 'dashboard';

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-sm"
    >
      {activeState === 'dashboard' && (
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
          {pricingPlanStatus && !isUserOnFreePlan && expiryDetails?.isExpired && (
            <PurchasePlanAlert
              variant="expired"
              purchasedPlan={{ planName: selectedPlan?.name! }}
              onAction={() => {
                navigate('/pricing');
              }}
            />
          )}

          {/* Expiry notice alert when expiry is less than 7 days */}
          {pricingPlanStatus && !isUserOnFreePlan && parseInt(expiryDetails?.timeRemaining!) < 7 && (
            <PurchasePlanAlert
              variant="renewalReminder"
              purchasedPlan={{ planName: selectedPlan?.name!, daysRemaining: parseInt(expiryDetails?.timeRemaining!) }}
              onAction={() => {
                navigate('/pricing');
              }}
            />
          )}

          {/* Alert when user is on free plan, and notification limit is already reached */}
          {isUserOnFreePlan && totalQuota - totalQuotaUsed < 100 && (
            <PurchasePlanAlert
              variant="notificationLimit"
              onAction={() => {
                navigate('/pricing');
              }}
            />
          )}
        </Box>
      )}

      {showGoProAlert && (
        <Alert
          showIcon={false}
          heading="Go Pro for $11.99/mo and unlock access to more features"
          onAction={() => modalControl.open()}
          actionText="Upgrade Plan"
          variant="basic"
        />
      )}

      {modalControl.isOpen && <UpgradePlanModal modalControl={modalControl} />}

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
