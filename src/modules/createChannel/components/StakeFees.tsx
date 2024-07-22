import { FC, useEffect, useState } from 'react';
import { css } from 'styled-components';

import { Box, Button, Skeleton, Text } from 'blocks';

import { getPushTokenFromWallet, importPushToken, mintPushToken } from 'helpers';
import { useAccount } from 'hooks';

import { CHANNEL_STAKE_FEES } from '../CreateChannel.constants';

import { CreateChannelFaucet } from './CreateChannelFaucet';
import { useCreateChannelForm } from '../CreateChannel.form';
import { ActiveStepKey } from '../CreateChannel.types';

type StakeFeesProps = {
  channelStakeFees: number;
  handleNextStep: (key: ActiveStepKey) => void;

};

const StakeFees: FC<StakeFeesProps> = ({ channelStakeFees, handleNextStep }) => {
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
        setMintingPush(false);
        setBalance(amount);
      } catch (error) {
        console.log('Error >>', error);
        setMintingPush(false);
      }
    }
  };

  // Check PUSH Token in wallet
  const pushTokenInWallet = async () => {
    setFetchingBalance(true);
    const amount = await getPushTokenFromWallet({
      address: account,
      provider: provider
    });
    setFetchingBalance(false);
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

  const showFaucet = balance < noOfPushTokensToCheck;

  const { handleSubmit, validateForm } = useCreateChannelForm();

  const handleCreateChannel = () => {
    validateForm().then((errors) => {
      if (errors.channelName || errors.channelDesc || errors.channelURL) {
        handleNextStep('channelInfo')
      }

      if (errors.image) {
        handleNextStep('uploadLogo')
      }

      if (!Object.keys(errors).length) {
        handleSubmit();
      }

    })
  }

  return (
    <Box display="flex" flexDirection="column" alignSelf="stretch" justifyContent="center" gap="spacing-xl">
      <Box display="flex" flexDirection="column" gap="spacing-sm">
        <Box display="flex" flexDirection="column" alignSelf="stretch">
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            backgroundColor="surface-secondary"
            borderRadius={showFaucet ? 'radius-sm radius-sm radius-none radius-none' : 'radius-sm'}
            padding="spacing-sm spacing-md"
            alignItems="center"
          >
            <Text variant="h4-semibold" color="text-primary" display={{ ml: 'none', dp: 'block' }}>
              Amount for Staking
            </Text>

            <Text variant="h5-semibold" color="text-primary" display={{ ml: 'block', dp: 'none' }}>
              Amout For Staking
            </Text>
            <Box>
              <Text variant="h4-semibold" color="text-brand-medium">
                {channelStakeFees} PUSH
              </Text>
              <Skeleton isLoading={fetchingbalance}>
                <Text variant="bes-semibold" color="text-tertiary">
                  Balance: {balance?.toLocaleString()}
                </Text>
              </Skeleton>
            </Box>
          </Box>

          {showFaucet && (
            <CreateChannelFaucet
              mintPushToken={mintPushTokenHandler}
              noOfPushTokensToCheck={50}
              mintingPush={mintingPush}
            />
          )}
        </Box>

        <Box display="flex" flexDirection="row" gap="s1" justifyContent="center">
          <Text variant="bes-semibold" color="text-tertiary">
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
          disabled={mintingPush}
          onClick={() => {
            handleCreateChannel();
          }}
        >
          Create Channel
        </Button>
      </Box>
    </Box>
  );
};

export { StakeFees };
