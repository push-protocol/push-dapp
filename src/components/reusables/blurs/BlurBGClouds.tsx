
import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import GLOBALS from "config/Globals";
import { Image, Item, Section } from 'primaries/SharedStyling';
import styled, { css, keyframes } from 'styled-components';

// Create Blur BG Clouds
const BlurBGClouds = () => {
  return (
    <Blurry
      position="absolute"
      top="0" bottom="0" left="0" right="0"
      overflow="hidden"
    />
  );
}
export default BlurBGClouds;

const Blurry = styled(ItemVV2)`
  background: ${(props) => props.theme.login.bg};
  
  &:before {
    content: '';
    position: absolute;
    top: 5%;
    left: -5%;
    width: 40%;
    min-width: 812px;
    height: auto;
    background: ${(props) => props.theme.login.blur1};
    border-radius: 100%;
    aspect-ratio: 1;
    filter: blur(5pc);
  }

  &:after {
    content: '';
    position: absolute;
    top: -35%;
    right: -15%;
    width: 50%;
    min-width: 812px;
    height: auto;
    background: ${(props) => props.theme.login.blur2};
    border-radius: 100%;
    aspect-ratio: 1;
    filter: blur(5pc);
  }
`