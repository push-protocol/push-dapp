// External Packages
import styled from 'styled-components';

// Internal Components
import { ButtonV2, ImageV2, SpanV2 } from './reusables/SharedStylingV2';
import swapIcon from '../assets/icons/swapIcon.svg';

// Internal Configs
import { appConfig } from 'config';
import { device } from 'config/Globals';
import { useEffect, useState } from 'react';
import { getHasEnoughPushToken } from 'helpers';
import { useWeb3React } from '@web3-react/core';
import useModalBlur, {MODAL_POSITION} from 'hooks/useModalBlur';
import { UniswapWidgetModal } from './UniswapWidget';

type FaucetInfoType = {
  onMintPushToken: (noOfTokens: number) => Promise<void>;
  noOfPushTokensToCheck: number;
  containerProps?: {};
};

const FaucetInfo = ({ onMintPushToken, noOfPushTokensToCheck, containerProps }: FaucetInfoType) => {
  const { account, library } = useWeb3React();
  const isProd = appConfig.appEnv === 'prod';

  const [isFaucetVisible, setIsFaucetVisible] = useState<boolean>(false);

  /* 
    checks whether address has enough PUSH or not
    if yes then hide the faucet component
    otherwise we show it
  */
  const checkSetFaucetVisibility = async () => {
    const hasEnoughPushToken = await getHasEnoughPushToken({
      address: account,
      provider: library,
      noOfPushTokensToCheck,
    });
    setIsFaucetVisible(!hasEnoughPushToken);
  };

  const {
    isModalOpen: isUniswapWidgetModalOpen,
    showModal: showUniswapWidgetModal,
    ModalComponent: UniswapWidgetModalComponent,
  } = useModalBlur();

  useEffect(() => {
    (async () => {
      await checkSetFaucetVisibility();
    })()
  }, [noOfPushTokensToCheck]);

  return (
    <Container>
      {isFaucetVisible ? (
        <TextSpace style={containerProps}>
          <InfoText>
            {isProd
              ? 'You do not have sufficient PUSH Tokens. Swap to add more PUSH.'
              : 'Follow these steps to ensure you have enough Testnet Push to proceed.'}
          </InfoText>
          {isProd ? (
            <SwapTokensButton onClick={showUniswapWidgetModal}>
              <ImageV2
                width="12px"
                height="12px"
                margin="0 0.5rem 0 0"
                src={swapIcon}
              />
              <ButtonLabel>Swap Tokens for PUSH</ButtonLabel>
            </SwapTokensButton>
          ) : (
            <ItemBody>
              <AnchorLink
                href="https://chaindrop.org/?chainid=5&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
                target="_blank"
              >
                <NumberIcon>1</NumberIcon>
                <PoolShare>Goerli ETH Faucet</PoolShare>
              </AnchorLink>
              <Minter
                onClick={async () => {
                  await onMintPushToken(1000);
                  await checkSetFaucetVisibility();
                }}
              >
                <NumberIcon>2</NumberIcon>
                <PoolShare>Get Testnet PUSH</PoolShare>
              </Minter>
            </ItemBody>
          )}
        </TextSpace>
      ) : (
        ''
      )}
      {isUniswapWidgetModalOpen &&
        <UniswapWidgetModalComponent
          InnerComponent={UniswapWidgetModal}
          InnerComponentProps={{ defaultPushTokenAmount: noOfPushTokensToCheck }}
          modalPadding="0px"
          modalPosition={MODAL_POSITION.ON_ROOT}
        />
      }
    </Container>


  );
};

const Container = styled.div`
width:100%;
`

const TextSpace = styled.div`
  box-sizing: border-box;
  width: 97%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background: #f4dcea;
  border-radius: 0px 0px 28px 28px;
  padding: 32px 32px 20px 32px;
  margin-top:24px;
  @media ${device.tablet} {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 24px 24px 16px 24px;
  }
`;

const InfoText = styled(SpanV2)`
    color:#D53A94;
    font-size:15px
    font-weight:400;
    line-height:21px;
    text-align: left;
    margin:0 2rem 0 0;
    max-width: 45%;
    @media ${device.laptop} {
        max-width: 55%;
    }
    @media ${device.tablet} {
        max-width: 100%;
        margin: 0;
        margin-bottom: 0.8rem;
    }
`;

const ItemBody = styled.div`
  display: flex;
  flex-direction: row;
`;

const SwapTokensButton = styled(ButtonV2)`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  background-color: #d53a94;
  width: fit-content;
  min-width: fit-content;
  max-width: fit-content;
  padding: 8px 12px;
  border-radius: 31px;
  margin-right: 1.2rem;
  @media ${device.laptop} {
    margin-right: 0.6rem;
  }
`;

const ButtonLabel = styled(SpanV2)`
  color: white;
  font-size: 14px;
  font-weight: 500;
`;

const AnchorLink = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: none;
  color: #cf1c84;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  white-space: nowrap;
  margin: 0 1rem;
  @media ${device.laptop} {
    margin: 0 1.5rem 0 0;
  }
`;

const NumberIcon = styled(SpanV2)`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 10px;
  border: 1.5px solid #d53a94;
  color: #cf1c84;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  max-width: 18px;
  max-height: 18px;
  margin-right: 0.6rem;
`;

const Minter = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  @media ${device.laptop} {
    margin: 0;
  }
`;

const PoolShare = styled.label`
  color: #fff;
  text-decoration: none;
  text-transform: none;
  color: #cf1c84;
  line-height: 24px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
`;

export default FaucetInfo;
