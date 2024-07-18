import { Box, Button, Skeleton, Text } from "blocks";
import { useAccount } from "hooks";
import { useGetChannelDetails, useReactivateChannel } from "queries";
import { ChannelDashboardInfo } from "./ChannelDashboardInfo";
import { ChannelAddHeader } from "./ChannelAddHeader";
import { DashboardActiveState } from "../ChannelDashboard.types";
import { FC, useEffect, useMemo, useState } from "react";
import { getPushTokenFromWallet, importPushToken, mintPushToken } from "helpers";
import { ReactivateChannelFaucet } from "./ReactivateChannelFaucet";
import { css } from "styled-components";
import { ethers } from "ethers";
import InlineError from "common/components/InlineError";


const feesRequiredForReactivation = 50;

type ReactivateChannelProps = {
  setActiveState: (activeState: DashboardActiveState) => void;

}
const ReactivateChannel: FC<ReactivateChannelProps> = ({
  setActiveState
}) => {

  const { provider, account } = useAccount();

  const [reactivationError, setReactivationError] = useState('');

  const { data: channelDetails, isLoading: loadingChannelDetails } = useGetChannelDetails(account);
  console.log("Channel Details in reactivate Channnel ", channelDetails);

  const [balance, setBalance] = useState(0);
  const [mintingPush, setMintingPush] = useState(false);
  const [fetchingbalance, setFetchingBalance] = useState(false);

  // Check PUSH Token in wallet
  const pushTokenInWallet = async () => {
    setFetchingBalance(true)
    const amount = await getPushTokenFromWallet({
      address: account,
      provider: provider
    });
    setFetchingBalance(false)
    setBalance(amount);
  };

  useEffect(() => {
    pushTokenInWallet();
  }, [balance, account]);

  // Mint Test PUSH token
  const mintPushTokenHandler = async (noOfTokens: number) => {
    setMintingPush(true);
    try {
      const amount = await mintPushToken({ noOfTokens, provider, account });
      setMintingPush(false)
      setBalance(amount);
    } catch (error) {
      console.log("Error >>", error);
      setMintingPush(false)
    }
  };

  // Import Push Token in Your wallet
  const handlePushTokenImport = async () => {
    await importPushToken();
  };

  // Check if the faucet or swap PUSH token model should be visible or not
  const showFaucet = useMemo(() => {
    if (balance < feesRequiredForReactivation) {
      return true
    } else {
      return false
    }
  }, [balance])

  const { mutate: reactivateChannel, isPending } = useReactivateChannel();

  const handleReactivate = () => {
    const fees = ethers.utils.parseUnits(feesRequiredForReactivation.toString(), 18);
    var signer = provider.getSigner(account);
    console.debug(signer);

    reactivateChannel(
      {
        fees,
        signer
      },
      {
        onSuccess: () => {
          console.log("Channel Reactivated");
          setActiveState('dashboard')

        },
        onError: () => {
          console.log("Error in Reactivating channel");
          setReactivationError('User rejected signature. Please try again.')
        }
      }
    )
  }

  return (
    <Box
      display='flex'
      width={{ initial: '648px', ml: '357px' }}
      padding='s6'
      flexDirection='column'
      alignItems='center'
      gap='spacing-lg'
      backgroundColor='surface-primary'
      borderRadius='radius-lg'
      margin='spacing-none spacing-none spacing-sm spacing-none'
    >
      <ChannelAddHeader
        title="Reactivate Channel"
        description="Performing this action will make your channel visible to users."
      />

      {reactivationError && <InlineError title={reactivationError} />}

      <ChannelDashboardInfo
        channelDetails={channelDetails}
        loadingChannelDetails={loadingChannelDetails}
      />

      {/* //TODO: Change this component to make it common for Create Channel and Reactivate Channel */}
      <Box display="flex" flexDirection="column" gap="spacing-sm" width='-webkit-fill-available'>
        <Box display="flex" flexDirection="column" alignSelf="stretch">
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            backgroundColor='surface-secondary'
            borderRadius={showFaucet ? "radius-sm radius-sm radius-none radius-none" : "radius-sm"}
            padding="spacing-sm spacing-md"
            alignItems="center"
          >
            <Text
              variant="h4-semibold"
              color='text-primary'
              display={{ ml: 'none', dp: 'block' }}
            >
              Channel Reactivation fee
            </Text>

            <Text
              variant="h5-semibold"
              color='text-primary'
              display={{ ml: 'block', dp: 'none' }}
            >
              Channel Reactivation fee
            </Text>
            <Box>
              <Text variant="h4-semibold" color='text-brand-medium'>
                {feesRequiredForReactivation} PUSH
              </Text>
              <Skeleton isLoading={fetchingbalance}>
                <Text variant="bes-semibold" color='text-tertiary'>
                  Balance: {balance?.toLocaleString()}
                </Text>
              </Skeleton>

            </Box>
          </Box>

          {showFaucet && <ReactivateChannelFaucet
            mintPushToken={mintPushTokenHandler}
            noOfPushTokensToCheck={50}
            mintingPush={mintingPush}
          />}

        </Box>

        <Box display="flex" flexDirection="row" gap="s1" justifyContent="center">
          <Text variant="bes-semibold" color='text-tertiary'>
            Don't see Push token in your wallet?
          </Text>
          <Text
            css={css`
              cursor: pointer;
            `}
            variant="bes-semibold"
            color="text-brand-medium"
            onClick={handlePushTokenImport}
          >
            Import Token
          </Text>
        </Box>
      </Box>


      <Box display='flex' gap='spacing-sm' justifyContent='center'>
        <Button size="medium" variant="outline" onClick={() => setActiveState('dashboard')}>Back</Button>
        <Button disabled={isPending} onClick={handleReactivate}>Activate</Button>
      </Box>



    </Box>
  );
};

export { ReactivateChannel };