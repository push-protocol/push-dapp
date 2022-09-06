import React, { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import styled, { ThemeProvider, useTheme } from 'styled-components';
import { useWeb3React } from '@web3-react/core';
import { addresses, abis } from "@project/contracts";
import { Oval } from 'react-loader-spinner';
import { postReq } from "../api";
import { Item, H2, H3, Span, Button, Input } from '../primaries/SharedStyling';

const ethers = require("ethers");

export default function AliasVerificationModal({
  onClose,
  onSuccess,
  verificationStatus,
  aliasEthAccount,
}) {
  const { account, library } = useWeb3React();
  const signer = library.getSigner(account);

  const themes = useTheme();

  const modalRef = useRef(null);
  const polygonCommsContract = new ethers.Contract(
    addresses.epnsPolyComm,
    abis.epnsComm,
    signer
  );
  const [loading, setLoading] = useState("");
  const mainAddress = aliasEthAccount;

  // Form signer and contract connection
  useClickAway(modalRef, () => onClose(loading !== ""));

  const checkAlias = async () => {
    if (mainAddress == aliasEthAccount) {
      submitAlias();
    } else {
      setLoading("Enter Correct Eth Channel Address");
      setTimeout(() => {
        setLoading("");
      }, 4000);
    }

    const submitAlias = () => {
      setLoading("loading");
      const anotherSendTxPromise = polygonCommsContract.verifyChannelAlias(
        mainAddress
      );
      anotherSendTxPromise
        .then(async (tx) => {
          console.log(tx);
          setLoading("Transaction Sent! It usually takes 5mins to verify.");

          await tx.wait(1);
          setTimeout(() => {
            setLoading("Transaction Mined!");
          }, 2000);

          setTimeout(() => {
            setLoading("Loading...");
          }, 2000);

          const intervalId = setInterval(async () => {
            const response = await postReq("/channels/getAliasVerification", {
              aliasAddress: account,
              op: "read",
            });
            const status = response?.data?.status;
            if (status == true) {
              clearInterval(intervalId);
              onSuccess();
              onClose();
            }
          }, 5000);
        })
        .catch(() => {
          setLoading("There was an error");
          setTimeout(() => {
            setLoading("");
          }, 2000);
        });
    };

    return (
        <ThemeProvider theme={themes}>
            <Overlay>
                <AliasModal ref={modalRef}>
                    <Item align="flex-start">
                        <H2 textTransform="uppercase" spacing="0.1em">
                            <Span weight="200" color={themes.color}> Verify</Span><Span bg="#674c9f" color="#fff" weight="600" padding="0px 8px">
                                Alias
                            </Span>
                        </H2>
                        {
                            verificationStatus === null ?
                                (
                                    <H3 color={themes.color}>There has been an error in the verification of your alias, Please contact the admin</H3>
                                ) : (
                                    <H3 color={themes.color}>Before you can use this channel on this chain, you first need to verify your Alias.</H3>
                                )
                        }
                    </Item>
                    {
                        verificationStatus !== null && (
                            <>
                                <Item align="flex-start">
                                    <CustomInput
                                        placeholder={aliasEthAccount}
                                        radius="4px"
                                        padding="12px"
                                        border="1px solid #674c9f"
                                        bg="#fff"
                                        disabled
                                        readOnly={true}
                                    />
                                </Item>
                                {loading && (
                                    <Item margin="20px 0px 10px 0px">
                                        <Oval
                                            color="black"
                                            height={16}
                                            width={16}
                                        />
                                    </Item>
                                )}
                                <Item margin="15px 0px 0px 0px" flex="1" self="stretch" align="stretch">
                                    <Button
                                        bg='#e20880'
                                        color='#fff'
                                        flex="1"
                                        radius="0px"
                                        padding="20px 10px"
                                        disabled={mainAddress.length !== 42 || loading !== ''}
                                        onClick={checkAlias}
                                    >
                                        <StyledInput
                                            cursor="hand"
                                            textTransform="uppercase"
                                            color="#fff" weight="400"
                                            size="0.8em" spacing="0.2em"
                                            value={loading ? loading : "Verify Alias"}
                                        />
                                    </Button>
                                </Item>
                            </>
                        )
                    }
                </AliasModal>
            </Overlay>
        </ThemeProvider>
    )
}

const StyledInput = styled(Input)`
    width: 100%;
    text-align: center;
    caret-color: transparent;
  `;

  const CustomInput = styled(Input)`
    box-sizing: border-box;
    width: 100%;
    margin: 20px 0px;
  `;

  const Overlay = styled.div`
    top: 0;
    left: 0;
    right: 0;
    background: ${(props) => props.theme.scrollBg};
    height: 100%;
    width: 100%;
    z-index: 1000;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
  `;

  const AliasModal = styled.div`
    padding: 20px 30px;
    background: ${(props) => props.theme.backgroundBG};
  `;
}
