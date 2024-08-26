// React + Web3 Essentials
import { ethers } from 'ethers';
import { useState } from 'react';

// External Packages
import { useTheme } from 'styled-components';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import FadeLoader from 'react-spinners/FadeLoader';

// Internal Components
import { SpanV2 } from 'components/reusables/SharedStylingV2';
import { setProcessingState } from 'redux/slices/channelCreationSlice';
import { A, Item, Span } from '../primaries/SharedStyling';
import { Button } from 'blocks';
import { getAliasDetails } from 'services';
import { useAccount } from 'hooks';

// Internal Configs
import { abis, appConfig, CHAIN_DETAILS } from 'config/index.js';
import GLOBALS from 'config/Globals';

type FaucetType = {
  label: string;
  url: string;
};

type FaucetsInfo = {
  [key: number]: FaucetType;
};

const VerifyAlias = ({ aliasEthAccount, setAliasVerified }) => {
  const theme = useTheme();
  const { account, provider, chainId } = useAccount();
  const signer = provider.getSigner(account);
  const dispatch = useDispatch();

  // const modalRef = useRef(null);
  const commContract = new ethers.Contract(CHAIN_DETAILS[chainId].commAddress, abis.epnsComm, signer);
  const [loading, setLoading] = useState('');
  const [success, setSuccess] = useState(false);
  const mainAddress = aliasEthAccount;

  const Faucets: FaucetsInfo = {
    80002: {
      label: 'Amoy MATIC',
      url: 'https://faucet.polygon.technology/',
    },
    97: {
      label: 'Testnet BNB',
      url: 'https://testnet.bnbchain.org/faucet-smart',
    },
    11155420: {
      label: 'Sepolia OpETH',
      url: 'https://faucet.quicknode.com/optimism/sepolia',
    },
    2442: {
      label: 'Polygon zkEVM ETH',
      url: 'https://faucet.polygon.technology/',
    },
    421614: {
      label: 'Sepolia ArbETH',
      url: 'https://faucet.quicknode.com/arbitrum/sepolia',
    },
    123: {
      label: 'Fuse SPARK',
      url: 'https://chaindrop.org/?chainid=123&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    },
    111557560: {
      label: 'Cyber ETH',
      url: 'https://cyber-testnet.testnets.rollbridge.app/',
    },
    84532: {
      label: 'Base Sepolia',
      url: 'https://www.alchemy.com/faucets/base-sepolia',
    },
    59141: {
      label: 'Linea Sepolia',
      url: 'https://www.infura.io/faucet/linea',
    },
  };

  const checkAlias = async () => {
    if (mainAddress == aliasEthAccount) {
      submitAlias();
    }
  };

  const checkAliasVerification = async () => {
    const { aliasVerified } = await getAliasDetails({ account, chainId }).then((data) => {
      if (data) {
        dispatch(setAliasVerified(data.is_alias_verified));
        return { aliasVerified: data['is_alias_verified'] };
      }
      return { aliasVerified: null };
    });
    return { aliasVerified };
  };

  const submitAlias = () => {
    setLoading('Processing');
    const anotherSendTxPromise = commContract.verifyChannelAlias(mainAddress);
    anotherSendTxPromise
      .then(async (tx) => {
        console.debug(tx);
        setLoading('Transaction Sent! It usually takes 5mins to verify.');
        await tx.wait(1);
        setTimeout(() => {
          setLoading('Transaction Mined!');
        }, 2000);
        setTimeout(() => {
          setLoading('Loading...');
        }, 2000);
        const intervalId = setInterval(async () => {
          const { aliasVerified } = await checkAliasVerification();
          if (aliasVerified) {
            setTimeout(() => {
              setSuccess(true);
            }, 1000);
            clearInterval(intervalId);
            dispatch(setProcessingState(0));
          }
        }, 5000);
      })
      .catch(() => {
        setLoading('There was an error');
        setTimeout(() => {
          setLoading('');
        }, 2000);
      });
  };

  return (
    <Item
      margin="15px 20px 15px 20px"
      flex="1"
      display="flex"
      direction="column"
    >
      <SpanV2
        textAlign="center"
        margin="60px 0px 0px 0px"
        color={theme.color}
        fontSize="16px"
        textTransform="none"
        fontWeight="500"
        lineHeight="24px"
        maxWidth="400px"
      >
        You’re almost there! Verify the Channel Alias to enable sending notifications from it.
      </SpanV2>

      {loading === '' && (
        <Span
          textAlign="center"
          margin="60px 0px 0px 0px"
          color={'#CF1C84'}
          size="16px"
          textTransform="none"
          weight="500"
          line="24px"
        >
          {account}
        </Span>
      )}

      {loading === '' && appConfig.appEnv !== 'prod' && (
        <SpanV2
          padding="10px"
          margin="10px"
          borderRadius={GLOBALS.ADJUSTMENTS.RADIUS.SMALL}
          background={theme.default.secondaryBg}
          color={theme.default.secondaryColor}
        >
          You will need{' '}
          <A
            href={Faucets[chainId]?.url}
            target="_blank"
          >
            {Faucets[chainId]?.label}
          </A>{' '}
          to proceed.
        </SpanV2>
      )}

      {!success &&
        (loading ? (
          <Item
            display="flex"
            direction="row"
            align="center"
            margin="60px 0px 0px 0px"
          >
            <FadeLoader
              color="#cf1c84"
              loading={true}
              height={13}
              width={4}
            />

            <Span
              color={theme.color}
              weight="600"
              textTransform="none"
              line="22px"
              size="16px"
              margin="0px 10px"
            >
              {loading}
            </Span>
          </Item>
        ) : (
          <Item
            width="15em"
            self="center"
            align="center"
            margin="60px auto 0px auto"
          >
            <Button
              variant="primary"
              size="medium"
              onClick={checkAlias}
            >
              Verify Alias Address
            </Button>
          </Item>
        ))}

      {success && (
        <Item
          display="flex"
          direction="row"
          align="center"
          margin="60px 0px 0px 0px"
        >
          <BsFillCheckCircleFill
            color="#30CC8B"
            size={30}
          />
          <Span
            color={theme.color}
            weight="600"
            textTransform="none"
            line="22px"
            size="16px"
            margin="0px 10px"
          >
            Verification Complete
          </Span>
        </Item>
      )}
    </Item>
  );
};

export default VerifyAlias;
