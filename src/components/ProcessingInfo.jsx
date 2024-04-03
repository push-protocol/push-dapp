// React + Web3 Essentials
import React from "react";

// External Packages
import LinearProgress from "@mui/material/LinearProgress";
import styled, { css, useTheme } from "styled-components";
import FadeLoader from "react-spinners/FadeLoader";

// Internal Components
import { H3, Item, Section } from "primaries/SharedStyling";

// Internal Configs
import { themeDark } from "config/Themization";

const ProcessingInfo = ({ progress, processingInfo, progressInfo }) => {
  const themes = useTheme();

  return (
    <Section>
      <TabSpace>
        <ItemSpace>
        {progressInfo}
        </ItemSpace>
      </TabSpace>


      <LinearProgress
        sx={{
          width: "30em",
          margin: "50px auto",
          color: "#cf1c84",
          height: "6px",
          borderRadius: "20px",
          ["@media (max-width:600px)"]: {
            width: "100%",
          },
        }}
        color="inherit"
        variant="determinate"
        value={progress}
      />

      <Item display="flex" direction="row" align="center" margin="0px 0px">
        <FadeLoader color="#cf1c84" loading={true} height={13} width={2.5} />
        <H3
          margin="auto 15px"
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


  @media (max-width: 768px) {
    min-width: 100%;
    font-size: 12px;
    height: auto;
    text-align: center;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
    width: 75%;
    text-align: center;
  }
`;

const ItemSpace = styled.div`
  padding: 0px 0px;
  @media (max-width: 768px) {
    padding: 50px 30px;
  }

  @media (min-width: 768px) and (max-width: 1700px) {
    padding: 10px 40px;
  }
`

export default ProcessingInfo;
