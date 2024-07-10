// react and other libraries
import { useEffect, useState } from 'react';

// third party libraries
import { useSelector } from 'react-redux';

// helpers
import { walletToCAIP10 } from 'helpers/w2w';
import { useAccount } from 'hooks';
import { generateVerificationProof } from '../utils/generateVerificationProof';
import { useRewardsTabs } from './useRewardsTabs';

// hooks
import { useGetUserRewardsDetails } from 'queries/hooks/rewards';

// types
import { AxiosError } from 'axios';
import { UserStoreType } from 'types';

const useRewardsAuth = () => {
  const { account, isWalletConnected, connect } = useAccount();
  const caip10WalletAddress = walletToCAIP10({ account });
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);

  const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);

  const [isVerifyClicked, setIsVerifyClicked] = useState(false);
  const [isDashClicked, setIsDashClicked] = useState(false);
  const [handleVerify, setHandleVerify] = useState(false);
  const { activeTab } = useRewardsTabs();

  const {
    data: userDetails,
    status,
    error,
  } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  // error responses
  const errorMessage = 'Failed to retrieve user';

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
    setIsDashClicked(true);
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
      if (userPushSDKInstance && userPushSDKInstance.readmode()) {
        setIsAuthModalVisible(true);
      }
    }

    // if verify is clicked as an existing user, or verificationProof is present, handle verification
    if ((isVerifyClicked && userDetails) || verificationProof) {
      setHandleVerify(true);
    }
    setIsVerifyClicked(false);
    setIsDashClicked(false);
  };

  useEffect(() => {
    // dashboard connect wallet flow
    if (status === 'error' && activeTab == 'dashboard' && !isVerifyClicked && !!userPushSDKInstance?.errors) {
      if (error instanceof AxiosError && error?.response?.data?.error === errorMessage) {
        unlockProfile();
      }
    }

    // user disconnects while modal is open
    if (status === 'pending' && !isWalletConnected) {
      setIsAuthModalVisible(false);
    }

    // rewards activity first user
    if (isVerifyClicked && status === 'error') {
      if (error instanceof AxiosError && error?.response?.data?.error === errorMessage) {
        unlockProfile();
      }
    }

    // rewards activity existing user
    if (isVerifyClicked && userDetails && !handleVerify) {
      unlockProfile();
    }

    // referral section click
    if (isDashClicked && status == 'error') {
      unlockProfile();
    }
  }, [status, isVerifyClicked, isDashClicked]);

  return {
    caip10WalletAddress,
    status,
    unlockProfile,
    isAuthModalVisible,
    setIsAuthModalVisible,
    connectWallet,
    handleVerify,
    userDetails,
    isVerifyClicked,
    connectUserWallet,
    isDashClicked,
    hideAuthModal,
    showAuthModal,
  };
};

export { useRewardsAuth };
