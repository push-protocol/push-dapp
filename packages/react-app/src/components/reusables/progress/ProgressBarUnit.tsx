
import GLOBALS from "config/Globals";
import { Image, Item, Section } from 'primaries/SharedStyling';
import styled, { css, keyframes } from 'styled-components';

interface ProgressBarPropsI {
  percent: number;
  color: string;
}

// Create Progress Bar
const ProgressBar = ({ percent, color }: ProgressBarPropsI) => {
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