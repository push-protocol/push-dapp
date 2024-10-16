// react and other libraries
import { useEffect, useState } from 'react';

// third party libraries
import { useSelector } from 'react-redux';

// helpers
import { walletToCAIP10 } from 'helpers/w2w';
import { useAccount } from 'hooks';
import { generateVerificationProof } from '../utils/generateVerificationProof';
import { useRewardsTabs } from './useRewardsTabs';
import { isUserNotFound } from '../utils/resolveError';

// hooks
import { useGetUserRewardsDetails } from 'queries/hooks/rewards';

// types
import { UserStoreType } from 'types';
import { useRewardsContext } from 'contexts/RewardsContext';
import { checkUnlockProfileErrors } from 'components/chat/unlockProfile/UnlockProfile.utils';

const useRewardsAuth = () => {
  const { account, isWalletConnected, connect } = useAccount();
  const caip10WalletAddress = walletToCAIP10({ account });
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);

  const { isAuthModalVisible, setIsAuthModalVisible } = useRewardsContext();

  const [isVerifyClicked, setIsVerifyClicked] = useState(false);
  const [handleVerify, setHandleVerify] = useState(false);
  const { activeTab } = useRewardsTabs();

  const {
    data: userDetails,
    status,
    error,
  } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  // rewards activity connect function
  const connectWallet = () => {
    setHandleVerify(false);
    setIsVerifyClicked(true);
    setIsAuthModalVisible(false);

    if (!isWalletConnected) {
      connect();
    }
  };

  // dashboard referral section unlock profile
  const connectUserWallet = () => {
    setIsAuthModalVisible(false);
    unlockProfile();
  };

  const showAuthModal = () => {
    setIsAuthModalVisible(true);
  };

  const hideAuthModal = () => {
    setIsAuthModalVisible(false);
  };

  // unlock profile function
  const unlockProfile = async () => {
    // get ref, send with user wallet. if ref is null, send only user wallet
    const ref = sessionStorage.getItem('ref');
    const data = {
      ...(ref && { refPrimary: ref }),
      userWallet: caip10WalletAddress,
    };

    // generate verification proof
    const verificationProof = await generateVerificationProof(data, userPushSDKInstance);

    //if verification proof is null, unlock push profile update to update userPUSHSDKInstance
    if (verificationProof === null || verificationProof === undefined) {
      if (isWalletConnected && userPushSDKInstance && userPushSDKInstance.readmode()) {
        console.log('open modal');
        setIsAuthModalVisible(true);
      }
    }

    // if verify is clicked as an existing user, or verificationProof is present, handle verification
    if ((isVerifyClicked && userDetails) || verificationProof) {
      setHandleVerify(true);
    }
    setIsVerifyClicked(false);
  };

  useEffect(() => {
    if (!isWalletConnected || !userPushSDKInstance) return;

    // dashboard connect wallet flow
    if (status === 'error' && activeTab == 'dashboard' && !isVerifyClicked) {
      if (isUserNotFound(error)) {
        const errorExistsInUnlockProfile = checkUnlockProfileErrors(userPushSDKInstance);
        if (errorExistsInUnlockProfile || !isWalletConnected) return;
        unlockProfile();
      }
    }

    // user disconnects while modal is open
    if (status === 'pending' && !isWalletConnected) {
      setIsAuthModalVisible(false);
    }

    // rewards activity first user
    if (isVerifyClicked && status === 'error') {
      if (isUserNotFound(error)) {
        unlockProfile();
      }
    }

    // rewards activity existing user
    if (isVerifyClicked && userDetails && !handleVerify) {
      unlockProfile();
    }
  }, [status, isVerifyClicked, userPushSDKInstance]);

  useEffect(() => {
    if (!isWalletConnected || activeTab == 'activity') hideAuthModal();
  }, [isWalletConnected, account]);

  return {
    status,
    isAuthModalVisible,
    connectWallet,
    handleVerify,
    userDetails,
    connectUserWallet,
    hideAuthModal,
    showAuthModal,
  };
};

export { useRewardsAuth };
