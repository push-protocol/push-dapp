import { FC, useEffect, useState } from 'react';

import { Box, Button } from 'blocks';

import { StakingVariant } from 'common';

import { getPushTokenFromWallet, importPushToken, mintPushToken } from 'helpers';
import { useAccount } from 'hooks';

import { CHANNEL_STAKE_FEES } from '../CreateChannel.constants';
import { useCreateChannelForm } from '../CreateChannel.form';
import { ImportPushTokenMessage } from 'common/components/ImportPushTokenMessage';

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

  // Check PUSH Token in wallet
  const pushTokenInWallet = async () => {
    setFetchingBalance(true);
    const amount = await getPushTokenFromWallet({
      address: account,
      provider: provider,
    });
    setFetchingBalance(false);
    setBalance(amount);
  };

  useEffect(() => {
    pushTokenInWallet();
  }, [balance, account]);

  const { handleSubmit, validateForm } = useCreateChannelForm();

  const handleCreateChannel = () => {
    validateForm().then((errors) => {
      if (errors.channelName || errors.channelDesc || errors.channelURL || errors.channelCategory) {
        handleNextStep('channelInfo');
      }

      if (errors.image) {
        handleNextStep('uploadLogo');
      }

      if (!Object.keys(errors).length) {
        handleSubmit();
      }
    });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignSelf="stretch"
      justifyContent="center"
      gap="spacing-xl"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-sm"
      >
        <StakingVariant
          fees={noOfPushTokensToCheck}
          title="Amount for Staking"
          balance={balance}
          setBalance={setBalance}
          showFaucet
          showBalance
        />

        <ImportPushTokenMessage title="Don’t see Push token in your wallet?" />
      </Box>

      <Box
        display="flex"
        justifyContent="center"
      >
        <Button
          disabled={mintingPush || balance < noOfPushTokensToCheck}
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
