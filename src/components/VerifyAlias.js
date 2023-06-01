// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import React, { useRef, useState } from 'react';

// External Packages
import { useTheme } from 'styled-components';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import FadeLoader from 'react-spinners/FadeLoader';

// Internal Components
import { SpanV2 } from 'components/reusables/SharedStylingV2';
import { setProcessingState } from 'redux/slices/channelCreationSlice';
import { A, Button, Item, Span } from '../primaries/SharedStyling';
import { getAliasDetails } from 'services';

// Internal Configs
import { abis, appConfig, CHAIN_DETAILS } from 'config';
import GLOBALS from "config/Globals";

const VerifyAlias = ({ aliasEthAccount, setAliasVerified }) => {
  const theme = useTheme();
  const { account, library, chainId } = useWeb3React();
  const signer = library.getSigner(account);
  const dispatch = useDispatch();

  // const modalRef = useRef(null);
  const commContract = new ethers.Contract(CHAIN_DETAILS[chainId].commAddress, abis.epnsComm, signer);
  const [loading, setLoading] = useState('');
  const [success, setSuccess] = useState(false);
  const mainAddress = aliasEthAccount;

  const Faucets = {
    80001: {
      label: "Mumbai MATIC",
      url: "https://faucet.polygon.technology/"
    },
    97: {
      label: "Testnet BNB",
      url: "https://testnet.bnbchain.org/faucet-smart"
    },
    420: {
      label: "Goerli OpETH",
      url: "https://faucet.quicknode.com/optimism/goerli"
    },
    1442: {
      label: "Polygon zkEVM ETH",
      url: "https://public.zkevm-test.net/"
    }
  }

  const checkAlias = async () => {
    if (mainAddress == aliasEthAccount) {
      submitAlias();
    }
  };

  const checkAliasVerification = async () => {
    const { aliasVerified } = await getAliasDetails({account,chainId}).then(( data ) => {
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
        console.log(tx);
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
    <Item margin="15px 20px 15px 20px" flex="1" display="flex" direction="column">
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
          <A href={Faucets[chainId].url} target="_blank">
            {Faucets[chainId].label}
          </A>{' '}
          to proceed.
        </SpanV2>
      )}

      {!success &&
        (loading ? (
          <Item display="flex" direction="row" align="center" margin="60px 0px 0px 0px">
            <FadeLoader color="#cf1c84" loading={true} height={13} width={4} />

            <Span color={theme.color} weight="600" textTransform="none" line="22px" size="16px" margin="0px 10px">
              {loading}
            </Span>
          </Item>
        ) : (
          <Item width="15em" self="center" align="center" margin="60px auto 0px auto">
            <Button bg="#e20880" color="#fff" radius="15px" padding="20px 10px" onClick={checkAlias}>
              <Span color="#fff" weight="600" textTransform="none" line="22px" size="16px">
                Verify Alias Address
              </Span>
            </Button>
          </Item>
        ))}

      {success && (
        <Item display="flex" direction="row" align="center" margin="60px 0px 0px 0px">
          <BsFillCheckCircleFill color="#30CC8B" size={30} />
          <Span color={theme.color} weight="600" textTransform="none" line="22px" size="16px" margin="0px 10px">
            Verification Complete
          </Span>
        </Item>
      )}
    </Item>
  );
};

export default VerifyAlias;
