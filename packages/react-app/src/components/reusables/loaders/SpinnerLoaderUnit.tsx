
import { Image, Item, Section } from 'components/SharedStyling';
import GLOBALS from "config/Globals";
import styled, { css, keyframes } from 'styled-components';

export const LOADERTYPE = {
  STANDALONE: 1,
  SEAMLESS: 2
}

interface SpinnerLoaderI {
  loading: boolean;
  title: string;
}

// Create Progress Bar
const ProgressBar = ({ loading, title }: SpinnerLoaderI) => {
  console.log(percent, color);
  return (
    <Progress 
      percent={percent}
      color={color}
    />
  );
}
export default ProgressBar;

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