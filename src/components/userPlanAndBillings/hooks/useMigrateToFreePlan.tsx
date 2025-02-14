import { useEffect } from 'react';
import { useInitiatePaymentInfo } from 'queries';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';
import { useAccount } from 'hooks';

interface UseMigrateToFreePlanProps {
  pricingPlanStatus: any; // Replace with proper type if available
  isLoading: boolean;
  refetch: () => void;
}

export const useMigrateToFreePlan = ({ pricingPlanStatus, isLoading, refetch }: UseMigrateToFreePlanProps) => {
  const { account, chainId, isWalletConnected } = useAccount();
  const walletAddress = convertAddressToAddrCaip(account, chainId);

  const { mutate: handleInitatePayment } = useInitiatePaymentInfo();

  const handleMigrateToFreePlan = () => {
    handleInitatePayment(
      {
        channel: walletAddress,
        pricingPlanId: '1',
        currency: 'USDC',
        network: chainId,
        verificationProof: 'test',
        email: '',
        duration: '1',
      },
      {
        onSuccess: (response) => {
          console.log(response);
          refetch();
        },
        onError: (error) => {
          console.error(error);
        },
      },
    );
  };

  useEffect(() => {
    if (isWalletConnected && pricingPlanStatus === null) {
      handleMigrateToFreePlan();
    }
  }, [isWalletConnected, pricingPlanStatus, account]);

  return { pricingPlanStatus, isLoading };
};
