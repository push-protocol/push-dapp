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
}: {
  onSuccess: (userDetails: UserRewardsDetailResponse) => void;
  isLoading: boolean;
}) => {
  const [isWalletConnectedAndProfileUnlocked, setIsWalletConnectedAndProfileUnlocked] = useState(false);
  const [showAuth, setShowAuth] = useState(false); // Track button click

  const { isWalletConnected } = useAccount();
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);

  const { isAuthModalVisible, connectWallet, handleVerify, userDetails, hideAuthModal } = useRewardsAuth();
  const { isSuccess, isUserProfileUnlocked } = useCreateRewardsUser();

  const handleAuthModal = async () => {
    setShowAuth(true);
    connectWallet();
  };

  const isAuthenticated = useMemo(() => {
    return (
      isSuccess ||
      (userDetails && isUserProfileUnlocked && handleVerify && userPushSDKInstance && !userPushSDKInstance.readmode())
    );
  }, [isSuccess, userDetails, isUserProfileUnlocked, handleVerify, userPushSDKInstance]);

  const handleSuccess = (userDetails: UserRewardsDetailResponse) => {
    setIsWalletConnectedAndProfileUnlocked(true);
    onSuccess(userDetails);
    setShowAuth(false);
  };

  useEffect(() => {
    if (showAuth && isAuthenticated && userDetails) {
      handleSuccess(userDetails);
      console.log('handle Success');
    }
  }, [isAuthenticated, userDetails]);

  const authButton = useMemo(
    () => (
      <>
        <Button
          variant="tertiary"
          size="small"
          onClick={handleAuthModal}
          disabled={isLoading}
        >
          Verify
        </Button>
      </>
    ),
    [isWalletConnected, isAuthModalVisible, isLoading]
  );

  return {
    authButton,
    isAuthenticated: isWalletConnectedAndProfileUnlocked,
    isAuthModalVisible,
    hideAuthModal,
  };
};
