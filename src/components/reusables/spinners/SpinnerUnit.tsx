// React + Web3 Essentials
import React from "react";

// External Packages
import styled, { css, keyframes } from 'styled-components';

// Internal Compoonents
import { ReactComponent as CheckmarkSVG } from 'assets/reusables/spinners/checkmark.svg';
import { ReactComponent as ErrorSVG } from 'assets/reusables/spinners/error.svg';
import { ReactComponent as SpinnerSVG } from 'assets/reusables/spinners/spinner.svg';
import { ReactComponent as WarningSVG } from 'assets/reusables/spinners/warning.svg';
import { ReactComponent as WhitelistSVG } from 'assets/reusables/spinners/whitelist.svg';
import { ItemVV2 } from 'components/reusables/SharedStylingV2';

// Internal Configs
import GLOBALS from 'config/Globals';

// Interfaces
interface SpinnerPropsI {
  size?: number;
  color?: string;
  type: number;
}

// Constants
export const SPINNER_TYPE = {
  PROCESSING: 1,
  WARNING: 2,
  ERROR: 3,
  COMPLETED: 4,
  WHITELIST: 5,
}

// Create Spinner
export default function Spinner({ size = 42, color =  GLOBALS.COLORS.PRIMARY_PINK, type = SPINNER_TYPE.PROCESSING }: SpinnerPropsI) {
  return (
    <SpinLoader flex="initial" alignSelf="center" color={color} width={`${size}px`} completed={type == SPINNER_TYPE.PROCESSING ? false : true}>
      {type == SPINNER_TYPE.PROCESSING && 
        <SpinnerSVG />
      }
      {type == SPINNER_TYPE.ERROR && 
        <ErrorSVG />
      }
      {type == SPINNER_TYPE.WARNING && 
        <WarningSVG />
      }
      {type == SPINNER_TYPE.COMPLETED && 
        <CheckmarkSVG />
      }
      {type == SPINNER_TYPE.WHITELIST && 
        <WhitelistSVG />
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
