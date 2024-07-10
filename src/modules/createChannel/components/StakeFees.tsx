import { Box, Button, Text } from 'blocks';
import { FC, useEffect, useMemo, useState } from 'react';
import { css } from 'styled-components';
import { CreateChannelFaucet } from './CreateChannelFaucet';
import { getHasEnoughPushToken, getPushTokenFromWallet, importPushToken, mintPushToken } from 'helpers';
import { useAccount, useAsyncOperation } from 'hooks';

type StakeFeesProps = {
  channelStakeFees: number;
  handleCreateChannel: () => void;
  setStakeFeesChoosen: (stakeFeesChosen: boolean) => void;
};

const StakeFees: FC<StakeFeesProps> = ({
  channelStakeFees,
  handleCreateChannel,
  setStakeFeesChoosen

}) => {
  const noOfPushTokensToCheck = 50;
  const { provider, account, isWalletConnected, connect } = useAccount();
  const { loading, error, executeAsyncFunction: executeImportPushTokenFunc } = useAsyncOperation(importPushToken);

  const [balance, setBalance] = useState(0);

  const [mintingPush, setMintingPush] = useState(false);

  const mintPushTokenHandler = async (noOfTokens: number) => {
    if (!isWalletConnected) {
      connect();
    }
    if (isWalletConnected) {
      setMintingPush(true);
      try {
        const amount = await mintPushToken({ noOfTokens, provider, account });
        console.log('Token Minted >>>', amount);
        setMintingPush(false)
        setBalance(amount);

      } catch (error) {
        console.log("Error >>", error);
        setMintingPush(false)

      }
    }
  };

  //check Push token in wallet
  const pushTokenInWallet = async () => {
    console.log("Fetching token")
    const amount = await getPushTokenFromWallet({
      address: account,
      provider: provider
    });
    console.log('Amount in the wallet >>', amount);
    setBalance(amount);
  };

  useEffect(() => {
    console.log("Balance useEffect is called", balance);
    pushTokenInWallet();
    checkSetFaucetVisibility();
  }, [balance, account]);


  const handlePushTokenImport = async () => {
    if (!isWalletConnected) {
      return;
    }
    await executeImportPushTokenFunc();
  };

  const [isFaucetVisible, setIsFaucetVisible] = useState<boolean>(false);

  const checkSetFaucetVisibility = async () => {
    console.log("Checking if faucet should be displayed");

    const hasEnoughPushToken = await getHasEnoughPushToken({
      address: account,
      provider: provider,
      noOfPushTokensToCheck,
    });
    console.log("Has Enough Push Token >>>", hasEnoughPushToken);
    setIsFaucetVisible(!hasEnoughPushToken);
  }

  return (
    <Box display="flex" flexDirection="column" alignSelf="stretch" justifyContent="center" gap="s10">
      <Box display="flex" flexDirection="column" gap="s4">
        <Box display="flex" flexDirection="column" alignSelf="stretch">
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            backgroundColor={{ light: "gray-100", dark: 'gray-1000' }}
            borderRadius={isFaucetVisible ? "r4 r4 r0 r0" : "r4"}
            padding="s4 s6"
            alignItems="center"
          >
            <Text
              variant="h4-semibold"
              color={{ light: 'gray-1000', dark: 'gray-100' }}
            >
              Amout For Staking
            </Text>
            <Box>
              <Text variant="h4-semibold" color={{ light: "pink-500", dark: 'pink-400' }}>
                {channelStakeFees} PUSH
              </Text>
              <Text variant="bes-semibold" color="gray-500">
                Balance: {balance?.toLocaleString()}
              </Text>
            </Box>
          </Box>
          {isFaucetVisible && <CreateChannelFaucet
            mintPushToken={mintPushTokenHandler}
            noOfPushTokensToCheck={50}
            mintingPush={mintingPush}
          />}
        </Box>

        <Box display="flex" flexDirection="row" gap="s1" justifyContent="center">
          <Text variant="bes-semibold" color="gray-500">
            Don't see Push token in your wallet?
          </Text>
          <Text
            css={css`
              cursor: pointer;
            `}
            variant="bes-semibold"
            color="pink-500"
            onClick={handlePushTokenImport}
          >
            Import Token
          </Text>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center">
        <Button
          onClick={() => {
            setStakeFeesChoosen(true)
            handleCreateChannel()
          }}
        >
          Create Channel
        </Button>
      </Box>
    </Box>
  );
};

export { StakeFees };
