// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import React, { useRef, useState } from 'react';

// External Packages
import styled, { css, useTheme } from 'styled-components';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import FadeLoader from 'react-spinners/FadeLoader';
import { useClickAway } from 'react-use';

// Internal Components
import { SpanV2 } from 'components/reusables/SharedStylingV2';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';
import { setProcessingState } from 'redux/slices/channelCreationSlice';
import { getReq, postReq } from '../api';
import { A, Button, H3, Item, Section, Span } from '../primaries/SharedStyling';

// Internal Configs
import { abis, addresses, appConfig } from 'config';
import GLOBALS from "config/Globals";

const VerifyAlias = ({ aliasEthAccount, setAliasVerified }) => {
  const theme = useTheme();
  const { account, library, chainId } = useWeb3React();
  const signer = library.getSigner(account);
  const dispatch = useDispatch();

  // const modalRef = useRef(null);
  const polygonCommsContract = new ethers.Contract(addresses.epnsPolyComm, abis.epnsComm, signer);
  const [loading, setLoading] = useState('');
  const [success, setSuccess] = useState(false);
  const mainAddress = aliasEthAccount;

  // Form signer and contract connection
  // useClickAway(modalRef, () => onClose(loading !== ""));

  const checkAlias = async () => {
    if (mainAddress == aliasEthAccount) {
      submitAlias();
    }
  };

  const checkAliasVerification = async () => {
    const userAddressInCaip = convertAddressToAddrCaip(account, chainId);
    const { aliasVerified } = await getReq(`/v1/alias/${userAddressInCaip}/channel`).then(({ data }) => {
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
    const anotherSendTxPromise = polygonCommsContract.verifyChannelAlias(mainAddress);
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
          <A href="https://faucet.polygon.technology/" target="_blank">
            testnet mumbai matic
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
          <Item width="15em" self="stretch" align="stretch" margin="60px auto 0px auto">
            <Button bg="#e20880" color="#fff" flex="1" radius="15px" padding="20px 10px" onClick={checkAlias}>
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
