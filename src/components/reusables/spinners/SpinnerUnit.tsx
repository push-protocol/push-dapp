// React + Web3 Essentials
import React from "react";

// External Packages
import styled, { css, keyframes } from 'styled-components';

// Internal Compoonents
import { ReactComponent as CheckmarkSVG } from 'assets/reusables/spinners/checkmark.svg';
import { ReactComponent as SpinnerSVG } from 'assets/reusables/spinners/spinner.svg';
import { ItemVV2 } from 'components/reusables/SharedStylingV2';

// Internal Configs
import GLOBALS from 'config/Globals';

interface SpinnerPropsI {
  size?: number;
  color?: color;
  completed: boolean;
}

// Create Spinner
export default function Spinner({ size = 42, color =  GLOBALS.COLORS.PRIMARY_PINK, completed = false }: SpinnerPropsI) {
  return (
    <SpinLoader flex="initial" alignSelf="center" color={color} width={`${size}px`} completed={completed}>
      {!completed && 
        <SpinnerSVG />
      }
      {completed && 
        <CheckmarkSVG />
      }
    </SpinLoader>
  );
}

const spinAnimation = keyframes`
  from { transform:rotate(0deg); }
  to { transform:rotate(360deg); }
`;

const SpinLoader = styled(ItemVV2)<{completed: boolean}>`
  color: ${props => props.color};
  ${props => !props.completed && css`
    animation-name: ${spinAnimation};
    animation-duration: 2500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  `}
`;
