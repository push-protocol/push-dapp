import { ReactComponent as CheckmarkSVG } from 'assets/reusables/loaders/checkmark.svg';

import Spinner from 'components/reusables/spinners/SpinnerUnit';
import { Image, Item, ItemH, Section, Span } from 'components/SharedStyling';
import styled, { css, keyframes } from 'styled-components';

import GLOBALS from "config/Globals";

export const LOADERTYPE = {
  STANDALONE: 1,
  SEAMLESS: 2
}

interface LoaderSpinnerI {
  type: number;
  title: string;
  completed: boolean;
}

// Create Progress Bar
const LoaderSpinner = ({ type, title, completed }: LoaderSpinnerI) => {
  return (
    <ItemH>
      {!completed && 
        <Spinner />
      }
      {completed &&
        <CheckmarkSVG />
      }
      <Span 
        padding="10px"
        weight="500"
      >{title}</Span>
    </ItemH>
  );
}
export default LoaderSpinner;

const Progress = styled.div`
	background: ${GLOBALS.COLORS.PLACEHOLDER_DARK_GRAY};
	border-radius: 18px;
	height: 8px;
	overflow: hidden;
	width: 100%;
  position: relative;

  &:after {
    width: ${(props) => props.percent ? props.percent : 0}%;
    background: ${(props) => props.color ? props.color : GLOBALS.COLORS.PRIMARY_PINK};
    transition: width 0.25s;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    border-radius: 18px;
  }
`