import React from "react";
import { AnimateOnChange } from 'react-animation';
import styled, { css } from 'styled-components';

// Create Header
const DisplayNotice = ({ title }) => {
  return (
    <Container>
      <AnimateOnChange
        animationIn="fadeIn"
        animationOut="fadeOut"
        durationOut={200}
      >
        <Notice>{title}</Notice>
      </AnimateOnChange>
    </Container>
  );
}
export default DisplayNotice;

// css styles
const Container = styled.div`

`

const Notice = styled.span`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  margin: 10px;
  color: ${props => props.theme.default.color};
  border-radius: 10px;
  font-size: 14px;
  font-weight: 400;
  background: ${props => props.theme.default.secondaryBg};
`

