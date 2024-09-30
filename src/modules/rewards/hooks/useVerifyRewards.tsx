// react and other libraries
import { useEffect, useState } from 'react';

// third party libraries
import { useSelector } from 'react-redux';

// helpers
import { generateVerificationProof } from '../utils/generateVerificationProof';
import {
  useClaimRewardsActivity,
  useGetPushStakeEpoch,
  useGetUniV2StakeEpoch,
  useGetUserRewardsDetails,
} from 'queries';
import { walletToCAIP10 } from 'helpers/w2w';
import { useAccount } from 'hooks/useAccount';

// types
import { UserStoreType } from 'types';
import { getActivityData } from '../utils/stakeRewardUtilities';

export type UseVerifyRewardsParams = {
  activityTypeId: string;
  setErrorMessage: (errorMessage: string) => void;
  refetchActivity: () => void;
  activityTypeIndex?: string;
};

const useVerifyRewards = ({
  activityTypeId,
  setErrorMessage,
  refetchActivity,
  activityTypeIndex,
}: UseVerifyRewardsParams) => {
  const [verifyingRewards, setVerifyingRewards] = useState(false);
  const [rewardsActivityStatus, setRewardsActivityStatus] = useState<'Claimed' | 'Pending' | null>(null);
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);
  const [updatedId, setUpdatedId] = useState<string | null>(null);

  const { account } = useAccount();

  const caip10WalletAddress = walletToCAIP10({ account });

  useEffect(() => {
    setErrorMessage('');
  }, [setErrorMessage]);

  const handleRewardsVerification = (userId: string) => {
    setUpdatedId(userId);
    setVerifyingRewards(true);
    handleVerify(userId);
  };

  const { data: pushStakeData } = useGetPushStakeEpoch();
  const { data: uniV2StakeData } = useGetUniV2StakeEpoch();

  const { refetch: refetchUserDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  const { mutate: claimRewardsActivity } = useClaimRewardsActivity({
    userId: updatedId as string,
    activityTypeId,
  });

  const handleVerify = async (userId: string | null) => {
    setErrorMessage('');

    const data = getActivityData(activityTypeIndex, pushStakeData, uniV2StakeData);

    const verificationProof = await generateVerificationProof(data, userPushSDKInstance);

    if (verificationProof == null || verificationProof == undefined) {
      if (userPushSDKInstance && userPushSDKInstance.readmode()) {
        setVerifyingRewards(false);
        setErrorMessage('Please Enable Push profile');
      }
      return;
    }

    claimRewardsActivity(
      {
        userId: updatedId || (userId as string),
        activityTypeId,
        pgpPublicKey: userPushSDKInstance.pgpPublicKey as string,
        data: data,
        verificationProof: verificationProof as string,
      },
      {
        onSuccess: (response) => {
          if (response.status === 'COMPLETED') {
            setRewardsActivityStatus('Claimed');
            refetchActivity();
            refetchUserDetails();
            setVerifyingRewards(false);
          }
          if (response.status === 'PENDING') {
            setRewardsActivityStatus('Pending');
            refetchActivity();
            setVerifyingRewards(false);
          }
        },
        onError: (error: any) => {
          console.log('Error in creating activity', error);
          setVerifyingRewards(false);
          if (error.name) {
            setErrorMessage(error.response.data.error);
          }
        },
      }
    );
  };

  return {
    verifyingRewards,
    rewardsActivityStatus,
    handleRewardsVerification,
  };
};

export { useVerifyRewards };
