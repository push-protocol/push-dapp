import { FC } from 'react';
import { Box } from 'blocks';
import { RewardsActivitiesListItem } from './RewardsActivitiesListItem';
import { useSelector } from 'react-redux';
import { useGenerateUserId, useGetRewardsActivities } from 'queries/hooks/rewards';
import { Activity } from 'queries';
import * as openpgp from 'openpgp';

export type RewardActivitiesProps = {
};

const RewardsActivitiesList: FC<RewardActivitiesProps> = () => {

  const {
    data: rewardActivitiesResponse,
    isLoading: loadingActivities,
    isSuccess,
    refetch,
    error
  } = useGetRewardsActivities();

  const rewardActivities = rewardActivitiesResponse?.activities;
  const allActivities = [...(rewardActivities ?? [])];

  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });


  const { mutate: createUser } = useGenerateUserId();

  //TODO: Moved this to best place Generating User by Wallet Address
  const generateUserIdByWalletAddress = async () => {
    const sigingingMessage = JSON.stringify({
      userWallet: `eip155:${userPushSDKInstance.account}`,
    });

    console.log("---------------- MEESGAE TO BE SIGNED ----------------");
    console.log(sigingingMessage);

    const messageObject: openpgp.Message<string> = await openpgp.createMessage({
      text: sigingingMessage,
    });
    const privateKey: openpgp.PrivateKey = await openpgp.readPrivateKey({
      armoredKey: userPushSDKInstance.decryptedPgpPvtKey,
    });
    const verificationProof = await openpgp.sign({
      message: messageObject,
      signingKeys: privateKey,
      detached: true,
    });

    console.log("Sign", verificationProof);

    createUser({
      pgpPublicKey: userPushSDKInstance.pgpPublicKey,
      userWallet: `eip155:${userPushSDKInstance.account}`,
      verificationProof: verificationProof as string,
    }, {
      onSuccess: (response) => {
        console.log("User Generated >>", response);
      }
    })


  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={{ ml: "s4", initial: "s1" }}
    >
      {allActivities.map((activity: Activity) => (
        <RewardsActivitiesListItem
          activity={activity}
          loadingActivities={loadingActivities}
        />
      ))}
    </Box>
  );
};

export { RewardsActivitiesList };
