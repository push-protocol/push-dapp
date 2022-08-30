import { networkName, CORE_CHAIN_ID, aliasChainIdsMapping } from "helpers/UtilityHelper";
import React from "react";
import styled, { useTheme } from "styled-components";
import { Item, Span, Button } from "../primaries/SharedStyling";

const ChangeNetwork = () => {
  const themes = useTheme();

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
        Change your wallet network to <TextPink>{networkName[aliasChainIdsMapping[CORE_CHAIN_ID]]}</TextPink> to
        start <br></br>
        verifying your Channel Alias.
      </Span>

      <Item
        width="12.2em"
        self="stretch"
        align="stretch"
        margin="100px auto 50px auto"
      >
        <Button
          bg="#e20880"
          color="#fff"
          flex="1"
          radius="15px"
          padding="20px 20px"
          onClick={() => {
            //   setStakeFeesChoosen(true);
            //   setStepFlow(2);
          }}
        >
          <Span
            color="#fff"
            weight="600"
            textTransform="none"
            line="22px"
            size="16px"
          >
            Change Network
          </Span>
        </Button>
      </Item>
    </Item>
  );
};

const TextPink = styled.b`
  color: #cf1c84;
`;

export default ChangeNetwork;
