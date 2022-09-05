import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Section = styled.section`
  display: flex;
  align-self: stretch;
  justify-content: center;
  align-items: ${(props) => props.align || "initial"};
  flex-direction: ${(props) => props.direction || "column"};
  background: ${(props) => props.theme || "transparent"};
  background: ${(props) => props.gradient || "undefined"};
  margin: ${(props) => props.margin || "0px"};
  padding: ${(props) => props.padding || "0px"};
  overflow: ${(props) => props.overflow || "initial"};
  flex: 1;
  position: relative;
`;