import { H3, Item, Section } from "primaries/SharedStyling";
import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import FadeLoader from "react-spinners/FadeLoader";
import styled, { css, useTheme } from "styled-components";
import { themeDark } from "config/Themization";

const ProcessingInfo = ({ progress, processingInfo, progressInfo }) => {
  const themes = useTheme();

  return (
    <Section>
      <TabSpace>
        <p>{progressInfo}</p>
      </TabSpace>

      <LinearProgress
        sx={{
          width: "30em",
          margin: "50px auto",
          color: "#cf1c84",
          height: "6px",
          borderRadius: "20px",
          ["@media (max-width:600px)"]: {
            width: "10em",
          },
        }}
        color="inherit"
        variant="determinate"
        value={progress}
      />

      <Item display="flex" direction="row" align="center" margin="20px 0px">
        <FadeLoader color="#cf1c84" loading={true} height={13} width={2.5} />
        <H3
          margin="auto 15px"
          family="Manrope"
          textTransform="none"
          color={themes.color}
          size="16px"
          weight="500"
        >
          {processingInfo}
        </H3>
      </Item>
    </Section>
  );
};

const TabSpace = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  height: 167px;
  border-radius: 20px;
  background-color: #f4f5fa;
  margin: 0 auto;
  text-transform: none;
  margin-top: 60px;
  color: #cf1c84;
  align-items: center;
  line-height: 24px;
  font-size: 18px;
  font-weight: 500;
  p {
    padding: 0 200px;
    text-align: center;
    @media (max-width: 600px) {
      padding: 0 10px;
    }
    @media (max-width: 1224px) {
      padding: 0 50px;
    }
  }
  @media (max-width: 600px) {
    font-size: 12px;
    height: auto;
  }
  @media (max-width: 1224px) {
    font-size: 16px;
  }
`;

export default ProcessingInfo;
