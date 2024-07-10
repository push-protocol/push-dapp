// React+web3 essentials
import { FC } from "react";

// Components
import { Box, Button, Link, Swap, Text } from "blocks";
import { UniswapWidgetModal } from "components/UniswapWidget";

// Hooks
import useModalBlur, { MODAL_POSITION } from "hooks/useModalBlur";

// Config
import { appConfig } from "config";

type CreateChannelFaucetProps = {
  mintPushToken: (noOfTokens: number) => void;
  noOfPushTokensToCheck: number;
}

const CreateChannelFaucet: FC<CreateChannelFaucetProps> = ({
  mintPushToken,
  noOfPushTokensToCheck
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
      padding='s4 s6'
      backgroundColor='pink-200'
      borderRadius="r0 r0 r4 r4"
      justifyContent='space-between'
      alignItems='center'
    >
      <Text variant="c-regular" color='gray-1000'>
        {isProd ?
          'Your balance is low. Swap to get PUSH Tokens.' :
          'Follow these steps to get Testnet PUSH.'}
      </Text>

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
          <Link to='https://chaindrop.org/?chainid=11155111&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' target="_blank">
            <Box
              display='flex'
              gap='s2'
              alignItems='baseline'
              color='pink-600'
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

          <Box
            display='flex'
            gap='s2'
            alignItems='baseline'
            color='pink-600'
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

export { CreateChannelFaucet };