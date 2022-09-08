import React from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { H3, Section, Item, Span, Button } from "../primaries/SharedStyling";
import styled, { css, useTheme } from "styled-components";

const AliasSetup = () => {
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
      >
        We’re setting up your channel on the Polygon Alias Network.
      </Span>{" "}
      <Span
        textAlign="center"
        margin="5px 0px 60px 0px"
        color={themes.color}
        size="16px"
        textTransform="none"
        weight="500"
      >
        This usually takes around 5 minutes.
      </Span>
      <Item display="flex" direction="row" align="center" margin="50px 0px">
        <FadeLoader color="#cf1c84" loading={true} height={13} width={4} />
        <H3
          margin="auto 15px"
          family="Manrope"
          textTransform="none"
          color={themes.color}
          size="16px"
          weight="600"
        >
          Processing
        </H3>
      </Item>
    </Item>
  );
};

export default AliasSetup;
