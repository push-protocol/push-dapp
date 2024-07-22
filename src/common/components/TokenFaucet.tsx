import { Box, Button, Link, Skeleton, Swap, Text } from "blocks";
import { UniswapWidgetModal } from "components/UniswapWidget";
import { appConfig } from "config";
import useModalBlur, { MODAL_POSITION } from "hooks/useModalBlur";
import { FC } from "react";

type TokenFaucetProps = {
  noOfPushTokensToCheck: number;
  mintPushToken: (noOfTokens: number) => void;
  mintingPush: boolean;
}

const TokenFaucet: FC<TokenFaucetProps> = ({
  noOfPushTokensToCheck,
  mintPushToken,
  mintingPush
}) => {
  const isProd = appConfig.appEnv === 'prod';

  const {
    isModalOpen: isUniswapWidgetModalOpen,
    showModal: showUniswapWidgetModal,
    ModalComponent: UniswapWidgetModalComponent,
  } = useModalBlur();

  return (
    <Box
      display='flex'
      padding='spacing-sm spacing-md'
      backgroundColor='surface-brand-subtle'
      borderRadius="radius-none radius-none radius-sm radius-sm"
      justifyContent='space-between'
      alignItems='center'
      flexDirection={{ ml: 'column', initial: 'row' }}
      gap='s3'
    >
      <Skeleton
        isLoading={mintingPush}
      >
        <Text variant="c-regular" color='text-primary'>
          {isProd ?
            'Your balance is low. Swap to get PUSH Tokens.' :
            'Follow these steps to get Testnet PUSH.'}
        </Text>
      </Skeleton>

      {isProd ? (
        <Button
          size="extraSmall"
          leadingIcon={<Swap />}
          onClick={showUniswapWidgetModal}
        >
          Swap PUSH Token
        </Button>
      ) : (
        <Box display='flex' gap='s3'>
          <Skeleton
            isLoading={mintingPush}
          >
            <Link to='https://chaindrop.org/?chainid=11155111&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' target="_blank">
              <Box
                display='flex'
                gap='s2'
                alignItems='baseline'
                color='text-brand-medium'
                cursor='pointer'
              >
                <Box
                  border='1px solid pink-600'
                  width='16px'
                  height='15px'
                  borderRadius="r10"
                  display='flex'
                  justifyContent='center'

                >
                  <Text variant="c-regular">1</Text>
                </Box>
                <Text>Sepolia ETH Faucet</Text>
              </Box>
            </Link>
          </Skeleton>

          <Skeleton
            isLoading={mintingPush}
          >
            <Box
              display='flex'
              gap='s2'
              alignItems='baseline'
              color='text-brand-medium'
              cursor='pointer'
              onClick={() => mintPushToken(1000)}
            >
              <Box
                border='1px solid pink-600'
                width='16px'
                height='15px'
                borderRadius="r10"
                display='flex'
                justifyContent='center'

              >
                <Text variant="c-regular">2</Text>
              </Box>
              <Text>Get Testnet Push</Text>
            </Box>
          </Skeleton>
        </Box>
      )}

      {isUniswapWidgetModalOpen && (
        <UniswapWidgetModalComponent
          InnerComponent={UniswapWidgetModal}
          InnerComponentProps={{ defaultPushTokenAmount: noOfPushTokensToCheck }}
          modalPadding="0px"
          modalPosition={MODAL_POSITION.ON_ROOT}
        />
      )}
    </Box >
  );
};

export default TokenFaucet;