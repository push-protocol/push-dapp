import React from "react";
import styled, { css, useTheme } from "styled-components";
import { H3, Section, Item, Span, Button } from "../primaries/SharedStyling";
import { useWeb3React } from "@web3-react/core";
import AliasVerificationModal from "./AliasVerificationModal";

const VerifyAlias = ({ aliasVerified, aliasEthAccount, setAliasVerified }) => {
  const themes = useTheme();
  const [modalOpen, setModalOpen] = React.useState(false);
  const { account, chainId } = useWeb3React();
  console.log({ aliasVerified, aliasEthAccount });

  return (
    <Item
      margin="15px 20px 15px 20px"
      flex="1"
      display="flex"
      direction="column"
    >
      <Span
        textAlign="center"
        margin="60px 0px 0px 0px"
        color={themes.color}
        size="16px"
        textTransform="none"
        weight="500"
        line="24px"
      >
        You’re almost there! Verify the Channel Alias to enable sending
        <br></br>
        Notifications from it.
      </Span>

      <Span
        textAlign="center"
        margin="60px 0px 0px 0px"
        color={"#CF1C84"}
        size="16px"
        textTransform="none"
        weight="500"
        line="24px"
      >
        {account}
      </Span>

      <Item
        width="15em"
        self="stretch"
        align="stretch"
        margin="60px auto 0px auto"
      >
        <Button
          bg="#e20880"
          color="#fff"
          flex="1"
          radius="15px"
          padding="20px 10px"
          onClick={() => setModalOpen(true)}
        >
          <Span
            color="#fff"
            weight="600"
            textTransform="none"
            line="22px"
            size="16px"
          >
            Verify Alias Address
          </Span>
        </Button>
      </Item>

      {modalOpen && (
        <AliasVerificationModal
          onClose={(val) => setModalOpen(val)}
          onSuccess={() => setAliasVerified(true)}
          verificationStatus={aliasVerified}
          aliasEthAccount={aliasEthAccount}
        />
      )}
    </Item>
  );
};

export default VerifyAlias;
