import { FC, useEffect, useState } from 'react';

import { Box, Button } from 'blocks';

import { CHANNEL_STAKE_FEES } from '../CreateChannel.constants';

import { useCreateChannelForm } from '../CreateChannel.form';
import { ActiveStepKey } from '../CreateChannel.types';
import { StakingVariant } from 'common';
import { ImportPushTokenMessage } from 'common/components/ImportPushTokenMessage';
import { useAccount } from 'hooks';
import { getPushTokenFromWallet } from 'helpers';

type StakeFeesProps = {
  handleNextStep: (key: ActiveStepKey) => void;
};

const StakeFees: FC<StakeFeesProps> = ({ handleNextStep }) => {

  const { provider, account } = useAccount();

  const [balance, setBalance] = useState(0);
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
    if (!account || !provider) return;
    pushTokenInWallet();
  }, [balance, account]);

  const { handleSubmit, validateForm } = useCreateChannelForm();

  const handleCreateChannel = () => {
    validateForm().then((errors) => {
      if (errors.channelName || errors.channelDesc || errors.channelURL) {
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
    <Box display="flex" flexDirection="column" alignSelf="stretch" justifyContent="center" gap="spacing-xl">
      <Box display="flex" flexDirection="column" gap="spacing-sm">
        <Box display="flex" flexDirection="column" gap="spacing-sm" width="-webkit-fill-available">
          <StakingVariant
            title="Amount for Staking"
            fees={CHANNEL_STAKE_FEES}
            showFaucet
            showBalance
            balance={balance}
            setBalance={setBalance}
          />
          <ImportPushTokenMessage title="Don’t see Push token in your wallet?" />
        </Box>
      </Box>

      <Box display="flex" justifyContent="center">
        <Button
          disabled={balance < CHANNEL_STAKE_FEES || fetchingbalance}
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
