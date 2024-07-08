// React and other libraries
import { useEffect, useMemo, useState } from 'react';

// third party libraries
import { useSelector } from 'react-redux';

//Hooks
import { useAccount } from 'hooks';
import { handleRewardsAuth } from './handleRewardsAuth';
import { handleCreateRewardsUser } from './handleCreateUser';

// types
import { UserStoreType } from 'types';

// components
import { Button } from 'blocks';

export const useAuthWithButton = ({ onSuccess }: { onSuccess: () => void }) => {
  const [isWalletConnectedAndProfileUnlocked, setIsWalletConnectedAndProfileUnlocked] = useState(false);
  const [showAuth, setShowAuth] = useState(false); // Track button click

  const { isWalletConnected } = useAccount();
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);

  const { showConnectModal, connectWallet, handleVerify, userDetails } = handleRewardsAuth();
  const { isSuccess, isUserProfileUnlocked } = handleCreateRewardsUser();

  const showAuthModal = async () => {
    setShowAuth(true);
    connectWallet();
  };

  useEffect(() => {
    if (
      showAuth &&
      (isSuccess ||
        (userDetails &&
          isUserProfileUnlocked &&
          handleVerify &&
          userPushSDKInstance &&
          !userPushSDKInstance.readmode()))
    ) {
      handleSuccess();
    }
  }, [isSuccess, isUserProfileUnlocked, handleVerify, userPushSDKInstance]);

  const handleSuccess = () => {
    setIsWalletConnectedAndProfileUnlocked(true);
    onSuccess();
    setShowAuth(false);
  };

  const authButton = useMemo(
    () => (
      <>
        <Button
          variant="tertiary"
          size="small"
          onClick={showAuthModal}
        >
          Verifyyy
        </Button>
      </>
    ),
    [showConnectModal, isWalletConnected]
  );

  return {
    authButton,
    isAuthenticated: isWalletConnectedAndProfileUnlocked,
    showConnectModal: showConnectModal,
  };
};
