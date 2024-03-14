// React + Web3 Essentials
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';
import { MdCheckCircle, MdError } from 'react-icons/md';

// Internal Compoonents
import { ImageV2, ItemHV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { Section } from 'primaries/SharedStyling';
import { useAccount } from 'hooks';
import useToast from 'hooks/useToast';
import AlphaAccessNFTHelper from 'helpers/AlphaAccessNftHelper';
import 'react-toastify/dist/ReactToastify.min.css';

// Internal Configs
import { abis, addresses, appConfig, CHAIN_DETAILS } from 'config';
import GLOBALS, { device, globalsMargin } from 'config/Globals';

const ClaimGalxeModule = () => {
  const theme = useTheme();
  const { account, wallet, connect, provider, chainId, switchChain } = useAccount();
  const [submitbtnInfo, setSubmitbtnInfo] = useState<{
    btnText: string;
    enabled: boolean;
    info: string;
  }>({
    btnText: 'Connect Wallet',
    enabled: false,
    info: '',
  });
  const [nftRevealContract, setNftRevealContract] = useState(null);
  const [loading, setLoading] = useState(false);

  const onPolygonChain = chainId === 137 || chainId === 80001;
  const isProdEnv = appConfig?.appEnv === 'prod';

  const polygonChainProvider = onPolygonChain
    ? provider
    : isProdEnv
    ? new ethers.providers.JsonRpcProvider(CHAIN_DETAILS[137].rpcUrl)
    : new ethers.providers.JsonRpcProvider(CHAIN_DETAILS[80001].rpcUrl);

  // Transaction Toast
  const txToast = useToast(5000);

  useEffect(() => {
    if (!!(provider && wallet && wallet?.accounts?.length && account)) {
      let signer = onPolygonChain ? provider.getSigner(account) : polygonChainProvider;
      const signerInstance = new ethers.Contract(addresses.alphaAccessNft, abis.pushReveal, signer);
      setNftRevealContract(signerInstance);
    }
  }, [wallet, account, provider]);

  useEffect(() => {
    if (nftRevealContract) {
      checkClaim();
    }
  }, [account, nftRevealContract]);

  // to check whitelist status
  const checkClaim = async () => {
    setSubmitbtnInfo({
      btnText: 'Checking Eligibility...',
      enabled: false,
      info: '',
    });
    const isWhitelisted = await AlphaAccessNFTHelper.verify(account);

    if (isWhitelisted) {
      const isClaimed = await nftRevealContract.claimed(account);
      if (isClaimed) {
        setSubmitbtnInfo({
          btnText: 'Claimed',
          enabled: false,
          info: 'Congratulations! Your NFT has been successfully minted.',
        });
      } else {
        setSubmitbtnInfo({
          btnText: 'Claim NFT',
          enabled: true,
          info: '',
        });
      }
    } else {
      setSubmitbtnInfo({
        btnText: 'Not Eligible',
        enabled: false,
        info: 'Sorry, your wallet is not whitelisted for claiming this NFT. Please use a whitelisted address.',
      });
    }
  };

  const mintNft = async () => {
    if (nftRevealContract && account) {
      try {
        if (!onPolygonChain) {
          switchChain(isProdEnv ? 137 : 80001);
          return;
        }
        setLoading(true);
        const proof = await AlphaAccessNFTHelper.getProof(account);
        txToast.showLoaderToast({
          loaderMessage: 'Waiting for confirmation',
        });
        const sendWithTxPromise = await nftRevealContract.mint(proof);
        const tx = await sendWithTxPromise;
        console.debug(tx);
        console.debug('waiting for tx to finish');

        await provider.waitForTransaction(tx.hash);

        txToast.showMessageToast({
          toastTitle: 'Success',
          toastMessage: 'NFT successfully minted!',
          toastType: 'SUCCESS',
          getToastIcon: (size) => (
            <MdCheckCircle
              size={size}
              color="green"
            />
          ),
        });
        setSubmitbtnInfo({
          btnText: 'Claimed',
          enabled: false,
          info: 'Congratulations! Your NFT has been successfully minted.',
        });
      } catch (e) {
        txToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: 'Transaction Failed! (' + e.name + ')',
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });
      }
      setLoading(false);
    }
  };

  return (
    <Container>
      <ClaimInnerContainer>
        <ClaimLeftContainer>
          <GalxeImg
            src={`./svg/${theme.scheme === 'light' ? 'GalxeLight.svg' : 'GalxeDark.svg'}`}
            height="1.5rem"
            width="9rem"
            padding="0 0 1.5rem 0"
          />

          <SpanText
            fontSize="2rem"
            fontWeight={600}
            padding="0 0 12px 0"
          >
            Claim your reward for Decentralize with Push quest
          </SpanText>
          <SpanText
            fontSize="1rem"
            padding="0 0 90px 0"
            color={theme.default.secondaryColor}
          >
            Sign in to mint your free NFT and claim your reward. Only one Push Alpha Access Pass NFT can be claimed per
            whitelisted account.
          </SpanText>
          <SpanText
            padding="0 0 12px 0"
            color={theme.default.secondaryColor}
          >
            Please ensure you are using the same address used on Galxe. In-case of any issues please reach out on our
            community Discord.
          </SpanText>
          {wallet && wallet?.accounts?.length > 0 ? (
            <SubmitButton
              disabled={!submitbtnInfo.enabled}
              onClick={() => {
                if (submitbtnInfo.enabled) mintNft();
              }}
            >
              {submitbtnInfo.btnText}
            </SubmitButton>
          ) : (
            <SubmitButton onClick={() => connect()}>Connect Wallet</SubmitButton>
          )}
          <SpanText margin="0 0 3rem 0">{submitbtnInfo.info}</SpanText>
        </ClaimLeftContainer>
        <AlphaImageContainer>
          <AlphaImageInnerContainer>
            <AlphaAccessTextImg src={'./svg/AccessNFTText.svg'} />
            <AlphaAccessImg src={'./svg/AccessNFT.svg'} />
          </AlphaImageInnerContainer>
        </AlphaImageContainer>
      </ClaimInnerContainer>
    </Container>
  );
};
export default ClaimGalxeModule;

// Define how the module is fitted, define it align-self to strect to fill entire bounds
// Define height: inherit to cover entire height
const Container = styled(Section)`
  align-items: center;
  align-self: center;
  background: ${(props) => props.theme.default.bg};
  border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${GLOBALS.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  overflow: hidden;
  max-width: 1200px;
  width: calc(
    100% - ${globalsMargin.MINI_MODULES.DESKTOP.RIGHT} - ${globalsMargin.MINI_MODULES.DESKTOP.LEFT} -
      ${GLOBALS.ADJUSTMENTS.PADDING.BIG} - ${GLOBALS.ADJUSTMENTS.PADDING.BIG}
  );
  position: relative;
  margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    width: calc(
      100% - ${globalsMargin.MINI_MODULES.TABLET.RIGHT} - ${globalsMargin.MINI_MODULES.TABLET.LEFT} -
        ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }

  @media ${device.mobileM} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    width: calc(
      100% - ${globalsMargin.MINI_MODULES.MOBILE.RIGHT} - ${globalsMargin.MINI_MODULES.MOBILE.LEFT} -
        ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }
`;

const ClaimInnerContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-self: flex-start;
  @media ${device.tablet} {
    flex-direction: column-reverse;
  }
`;

const ClaimLeftContainer = styled.div`
  display: flex;
  width: 60%;
  align-self: flex-start;
  padding: 3rem 2.5rem;
  flex-direction: column;
  @media ${device.tablet} {
    width: auto;
    padding: 2rem;
  }
`;

const AlphaImageContainer = styled.div`
  background: linear-gradient(0deg, #9448ea 0%, #3322a0 18.84%, #0c0c0d 50.7%);
  width: 40%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  @media ${device.tablet} {
    width: auto;
  }
`;

const AlphaImageInnerContainer = styled(ItemHV2)`
  gap: 3rem;
  padding: 1.5rem 0;
  align-content: center;
  max-width: 280px;
  @media ${device.tablet} {
    gap: 2rem;
  }
`;

const AlphaAccessTextImg = styled(ImageV2)``;

const AlphaAccessImg = styled(ImageV2)`
  padding: 0 12px;
`;

const GalxeImg = styled(ImageV2)`
  align-self: flex-start;
`;

const SubmitButton = styled.button`
  width: 15rem;
  padding: 16px 32px;
  border-radius: 15px;
  background: ${(props) => (props.disabled ? props.theme.btn.disabledBg : '#cf1c84')};
  color: ${(props) => (props.disabled ? props.theme.btn.disabledColor : '#fff')};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};

  align-self: flex-start;
  flex: none;
  margin-bottom: 1rem;
  :hover {
    opacity: 0.8;
  }

  @media ${device.tablet} {
    margin-bottom: 1rem;
  }
  @media (max-width: 640px) {
    width: 13rem;
  }
  @media (max-width: 380px) {
    width: 9.5rem;
  }
`;

const SpanText = styled(SpanV2)`
  display: flex;
  align-self: flex-start;
  text-align: left;
`;
