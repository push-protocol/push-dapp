
import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import GLOBALS from "config/Globals";
import { Image, Item, Section } from 'primaries/SharedStyling';
import styled, { css } from 'styled-components';

interface BlurBGPropsI {
  blur: number
}

// Create Blur BG
const BlurBG = ({ blur }: BlurBGPropsI) => {
  return (
    <>
      {blur > 0 &&
        <Blurry
          position="absolute"
          top="0" bottom="0" left="0" right="0"
          overflow="hidden"
          blur={blur}
        />
      }
    </>
  );
}
export default BlurBG;

const Blurry = styled(ItemVV2)`
  backdrop-filter: blur(${props => props.blur || '10'}px);
`