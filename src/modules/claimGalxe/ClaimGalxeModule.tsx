// React + Web3 Essentials
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';
import { MdError } from 'react-icons/md';

// Internal Compoonents
import { ImageV2, ItemHV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { Section } from 'primaries/SharedStyling';
import { useAccount } from 'hooks';
import useModalBlur from 'hooks/useModalBlur';
import useToast from 'hooks/useToast';
import AlphaAccessNFTHelper from 'helpers/AlphaAccessNftHelper';
import 'react-toastify/dist/ReactToastify.min.css';
import { NFTSuccessModal } from './NFTSuccessModal';
import { Box, Button } from 'blocks';

// Internal Configs
import { abis, addresses, appConfig, CHAIN_DETAILS } from 'config/index.js';
import GLOBALS, { device, globalsMargin } from 'config/Globals';
import { getPublicAssetPath } from 'helpers/RoutesHelper';

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

  const { isModalOpen: isNFTModalOpen, ModalComponent: NFTModalComponent, showModal: showNFTModal } = useModalBlur();

  const onPolygonChain = chainId === 137 || chainId === 80002;
  const isProdEnv = appConfig?.appEnv === 'prod';

  const polygonChainProvider = onPolygonChain
    ? provider
    : isProdEnv
    ? new ethers.providers.JsonRpcProvider(CHAIN_DETAILS[137].rpcUrl)
    : new ethers.providers.JsonRpcProvider(CHAIN_DETAILS[80002].rpcUrl);

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
          switchChain(isProdEnv ? 137 : 80002);
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

        txToast.hideToast();
        showNFTModal();

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
      {isNFTModalOpen && <NFTModalComponent InnerComponent={NFTSuccessModal} />}
      <ClaimBanner>
        <ImageV2
          src={getPublicAssetPath('svg/claim-galxe-banner.svg')}
          height="18px"
          width="18px"
          padding="0 11px 0 0"
        />
        The Alpha Access NFT Claim Window for "Communicate With Push" Galxe contest winners is now officially OPEN! 🎉
      </ClaimBanner>
      <ClaimInnerContainer>
        <ClaimLeftContainer>
          <GalxeImg
            src={getPublicAssetPath(`svg/${theme.scheme === 'light' ? 'GalxeLight.svg' : 'GalxeDark.svg'}`)}
            height="1.5rem"
            width="9rem"
            padding="0 0 1.5rem 0"
          />

          <SpanText
            fontSize="2rem"
            fontWeight={600}
            padding="0 0 12px 0"
          >
            Claim your Push Alpha Pass NFT Reward
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
          <Box
            width={{
              ml: '9.5rem',
              tb: '13rem',
              initial: '15rem',
            }}
            margin="spacing-none spacing-none spacing-xxxs spacing-none"
          >
            {wallet && wallet?.accounts?.length > 0 ? (
              <Button
                disabled={!submitbtnInfo.enabled}
                onClick={() => {
                  if (submitbtnInfo.enabled) mintNft();
                }}
              >
                {submitbtnInfo.btnText}
              </Button>
            ) : (
              <Button onClick={() => connect()}>Connect Wallet</Button>
            )}
          </Box>
          <SpanText margin="0 0 3rem 0">{submitbtnInfo.info}</SpanText>
        </ClaimLeftContainer>
        <AlphaImageContainer>
          <AlphaImageInnerContainer>
            <AlphaAccessImg src={getPublicAssetPath('svg/AccessNFT.svg')} />
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

  @media ${device.tablet} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    width: calc(
      100% - ${globalsMargin.MINI_MODULES.MOBILE.RIGHT} - ${globalsMargin.MINI_MODULES.MOBILE.LEFT} -
        ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }
`;

const ClaimBanner = styled.div`
  background: ${(props) => props.theme.default.bg};
  border-radius: 20px;
  margin-bottom: 24px;
  padding: 16px;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  width: fill-available;
`;

const ClaimInnerContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-self: flex-start;
  background: ${(props) => props.theme.default.bg};
  border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
  overflow: hidden;
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

const AlphaAccessImg = styled(ImageV2)`
  padding: 0 12px;
`;

const GalxeImg = styled(ImageV2)`
  align-self: flex-start;
`;

const SpanText = styled(SpanV2)`
  display: flex;
  align-self: flex-start;
  text-align: left;
`;
