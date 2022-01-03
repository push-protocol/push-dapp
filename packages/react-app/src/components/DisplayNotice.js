import React from "react";
import styled, { css } from 'styled-components';
import { AnimateOnChange } from 'react-animation';

import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'

// Create Header
function DisplayNotice({ title, theme }) {
  React.useEffect(() => {

  }, [title, theme]);

  // to create blockies

  return (
    <Container>
      <AnimateOnChange
        animationIn="fadeIn"
        animationOut="fadeOut"
        durationOut={200}
      >
        <Notice theme={theme}>{title}</Notice>
      </AnimateOnChange>
    </Container>
  );
}

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
  color: #fff;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 400;

  ${props => props.theme === 'primary' && css`
    background: #e20880;
  `};

  ${props => props.theme === 'secondary' && css`
    background: #35c5f3;
  `};

  ${props => props.theme === 'third' && css`
    background: #674c9f;
  `};
`

// Export Default
export default DisplayNotice;
