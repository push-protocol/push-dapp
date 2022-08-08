import React, { useEffect } from "react";
import styled, { css, useTheme } from "styled-components";
import { H3, Section, Item, Span, Button } from "../primaries/SharedStyling";
import AliasSetup from "./AliasSetup";
import ChangeNetwork from "./ChangeNetwork";
import VerifyAlias from "./VerifyAlias";

const AliasProcessing = ({
  aliasVerified,
  aliasEthAccount,
  setAliasVerified,
}) => {
  const [stepFlow, setStepFlow] = React.useState(1);
  const themes = useTheme();

  return (
    <Section>
      <ItemHere>
        <Tab type={stepFlow >= 1 ? "active" : "inactive"}>
          <div>Waiting for Setup</div>
          <Step type={stepFlow >= 1 ? "active" : "inactive"} />
        </Tab>
        <Tab type={stepFlow >= 2 ? "active" : "inactive"}>
          <div>Change Network</div>
          <Step type={stepFlow >= 2 ? "active" : "inactive"} />
        </Tab>
        <Tab type={stepFlow >= 3 ? "active" : "inactive"}>
          <div>Verify Alias Network</div>
          <Step type={stepFlow >= 3 ? "active" : "inactive"} />
        </Tab>
        <Line />
      </ItemHere>

      {stepFlow === 1 && <AliasSetup />}
      {stepFlow === 2 && <ChangeNetwork />}
      {stepFlow === 3 && (
        <VerifyAlias
          aliasVerified={aliasVerified}
          aliasEthAccount={aliasEthAccount}
          setAliasVerified={setAliasVerified}
        />
      )}
    </Section>
  );
};

const ItemHere = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 50px 0px 0px 0px;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 1224px) {
    display: flex;
    flex-direction: row;
  }
`;

const Step = styled.div`
  height: 5px;
  width: 100%;
  background: #cfd7e4;
  border-radius: 13px;

  ${({ type }) =>
    type === "active" &&
    css`
      background: #e20880;
    `};
`;

const Line = styled.div`
  position: absolute;
  height: 5px;
  background: #f1f1f1;
  right: 0;
  left: 0;
  margin: 0px 10px;
  z-index: -1;
`;

const Tab = styled.div`
  position: relative;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 10px;
  color: #657795;
  div {
    margin: 5px 0px;
    font-family: "Manrope";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  ${({ type }) =>
    type === "active" &&
    css`
      color: #e20880;
    `};
`;

export default AliasProcessing;
