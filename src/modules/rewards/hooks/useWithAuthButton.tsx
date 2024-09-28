// React and other libraries
import { useEffect, useMemo, useState } from 'react';

// third party libraries
import { useSelector } from 'react-redux';

//Hooks
import { useAccount } from 'hooks';
import { useRewardsAuth } from './useRewardsAuth';
import { useCreateRewardsUser } from './useCreateRewardsUser';
import { UserRewardsDetailResponse } from 'queries';

// types
import { UserStoreType } from 'types';

// components
import { Button } from 'blocks';

export const useAuthWithButton = ({
  onSuccess,
  isLoading,
  label = 'verify',
}: {
  onSuccess: (userDetails: UserRewardsDetailResponse) => void;
  isLoading: boolean;
  label?: string;
}) => {
  const [isWalletConnectedAndProfileUnlocked, setIsWalletConnectedAndProfileUnlocked] = useState(false);
  const [showAuth, setShowAuth] = useState(false); // Track button click

  const { isWalletConnected } = useAccount();
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);

  const { isAuthModalVisible, connectWallet, handleVerify, userDetails, hideAuthModal } = useRewardsAuth();
  const { isSuccess, setIsSuccess, isUserProfileUnlocked } = useCreateRewardsUser();

  const handleAuthModal = async () => {
    setShowAuth(true);
    connectWallet();
  };

  const isAuthenticated = useMemo(() => {
    return (
      userDetails && isUserProfileUnlocked && handleVerify && userPushSDKInstance && !userPushSDKInstance.readmode()
    );
  }, [userDetails, isUserProfileUnlocked, handleVerify, userPushSDKInstance]);

  const handleSuccess = (userDetails: UserRewardsDetailResponse) => {
    setIsWalletConnectedAndProfileUnlocked(true);
    onSuccess(userDetails);
    setIsSuccess(false);
    setShowAuth(false);
  };

  useEffect(() => {
    if ((showAuth && isAuthenticated && userDetails) || (isSuccess && userDetails)) {
      handleSuccess(userDetails);
      console.log('handle Success');
    }
  }, [isAuthenticated, userDetails, isSuccess]);

  const authButton = useMemo(
    () => (
      <>
        <Button
          variant="tertiary"
          size="small"
          onClick={handleAuthModal}
          disabled={isLoading}
        >
          {label}
        </Button>
      </>
    ),
    [isWalletConnected, isLoading]
  );

  return {
    authButton,
    isAuthenticated: isWalletConnectedAndProfileUnlocked,
    isAuthModalVisible,
    hideAuthModal,
  };
};
