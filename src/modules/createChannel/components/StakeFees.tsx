//React + web3 essentials
import { FC, useEffect, useMemo, useState } from 'react';

// Third party libraries
import { css } from 'styled-components';

// Components
import { Box, Button, Skeleton, Text } from 'blocks';
import { CreateChannelFaucet } from './CreateChannelFaucet';
import { getPushTokenFromWallet, importPushToken, mintPushToken } from 'helpers';

// Hooks
import { useAccount } from 'hooks';

// Constans
import { CHANNEL_STAKE_FEES } from '../CreateChannel.constants';

type StakeFeesProps = {
  channelStakeFees: number;
  handleCreateNewChannel: () => void;
};

const StakeFees: FC<StakeFeesProps> = ({
  channelStakeFees,
  handleCreateNewChannel,

}) => {
  const noOfPushTokensToCheck = CHANNEL_STAKE_FEES;
  const { provider, account, isWalletConnected, connect } = useAccount();

  const [balance, setBalance] = useState(0);
  const [mintingPush, setMintingPush] = useState(false);
  const [fetchingbalance, setFetchingBalance] = useState(false);

  // Mint Test PUSH token
  const mintPushTokenHandler = async (noOfTokens: number) => {
    if (!isWalletConnected) {
      connect();
    }
    if (isWalletConnected) {
      setMintingPush(true);
      try {
        const amount = await mintPushToken({ noOfTokens, provider, account });
        setMintingPush(false)
        setBalance(amount);
      } catch (error) {
        console.log("Error >>", error);
        setMintingPush(false)
      }
    }
  };

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

  // Import Push Token in Your wallet
  const handlePushTokenImport = async () => {
    if (!isWalletConnected) {
      return;
    }
    await importPushToken();
  };

  // Check if the faucet or swap PUSH token model should be visible or not
  const showFaucet = useMemo(() => {
    if (balance < noOfPushTokensToCheck) {
      return true
    } else {
      return false
    }
  }, [balance])



  return (
    <Box display="flex" flexDirection="column" alignSelf="stretch" justifyContent="center" gap="spacing-xl">
      <Box display="flex" flexDirection="column" gap="spacing-sm">
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
              Amout For Staking
            </Text>

            <Text
              variant="h5-semibold"
              color='text-primary'
              display={{ ml: 'block', dp: 'none' }}
            >
              Amout For Staking
            </Text>
            <Box>
              <Text variant="h4-semibold" color='text-brand-medium'>
                {channelStakeFees} PUSH
              </Text>
              <Skeleton isLoading={fetchingbalance}>
                <Text variant="bes-semibold" color='text-tertiary'>
                  Balance: {balance?.toLocaleString()}
                </Text>
              </Skeleton>

            </Box>
          </Box>
          <CreateChannelFaucet
            mintPushToken={mintPushTokenHandler}
            noOfPushTokensToCheck={50}
            mintingPush={mintingPush}
          />

          {showFaucet && <CreateChannelFaucet
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

      <Box display="flex" justifyContent="center">
        <Button
          onClick={() => {
            handleCreateNewChannel()
          }}
        >
          Create Channel
        </Button>
      </Box>
    </Box>
  );
};

export { StakeFees };
