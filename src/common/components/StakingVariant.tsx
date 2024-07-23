import { FC, useEffect, useState } from "react";

import { Box, Skeleton, Text, TickCircleFilled } from "blocks";

import { useAccount } from "hooks";
import { getPushTokenFromWallet, mintPushToken } from "helpers";

import TokenFaucet from "./TokenFaucet";

type StakingVariantProps = {
  fees: number;
  pushApprovalAmount?: number;
  title: string;
  description?: string;
  showFaucet?: boolean;
  showBalance?: boolean;
  showImportTokenMessage?: boolean;
}

const StakingVariant: FC<StakingVariantProps> = ({
  fees,
  pushApprovalAmount,
  title,
  description,
  showFaucet = false,
  showBalance = false,
}) => {
  const { provider, account } = useAccount();

  const [balance, setBalance] = useState(0);
  const [fetchingbalance, setFetchingBalance] = useState(false);

  const [mintingPush, setMintingPush] = useState(false);

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
    if (!account || !provider) return;
    // Checking Push Token in wallet and how much user has approved PUSH Tokens
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

  return (
    <Box display="flex" flexDirection="column" gap="spacing-sm" width='-webkit-fill-available'>
      <Box display="flex" flexDirection="column" alignSelf="stretch">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          backgroundColor='surface-secondary'
          borderRadius={balance < fees ? "radius-sm radius-sm radius-none radius-none" : "radius-sm"}
          padding="spacing-sm spacing-md"
          alignItems="center"
        >
          <Box>
            <Text
              variant="h4-semibold"
              color='text-primary'
              display={{ ml: 'none', dp: 'block' }}
            >
              {title}
            </Text>
            <Text
              variant="h5-semibold"
              color='text-primary'
              display={{ ml: 'block', dp: 'none' }}
            >
              {title}
            </Text>


            <Text
              variant="c-regular"
              color='text-tertiary'
              display={{ ml: 'none', dp: 'block' }}
            >
              {description}
            </Text>

            <Text
              variant="c-regular"
              color='text-tertiary'
              display={{ ml: 'block', dp: 'none' }}
            >
              {description}
            </Text>
          </Box>

          <Box display='flex'>
            {!!pushApprovalAmount && pushApprovalAmount >= fees && <TickCircleFilled color='text-brand-medium' size={27} />}

            <Box>
              <Text variant="h4-semibold" color='text-brand-medium'>
                {fees} PUSH
              </Text>
              {showBalance && <Skeleton isLoading={fetchingbalance}>
                <Text variant="bes-semibold" color='text-tertiary'>
                  Balance:
                  {balance?.toLocaleString()}
                </Text>
              </Skeleton>}
            </Box>

          </Box>
        </Box>

        {balance < fees && showFaucet && <TokenFaucet
          mintPushToken={mintPushTokenHandler}
          noOfPushTokensToCheck={50}
          mintingPush={mintingPush}
        />}
      </Box>

    </Box>
  );
};

export { StakingVariant };