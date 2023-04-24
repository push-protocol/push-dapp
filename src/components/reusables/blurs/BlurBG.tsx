// External Packages
import styled from 'styled-components';

// Internal Components
import { ItemVV2 } from 'components/reusables/SharedStylingV2';

// Internal Configs

// Interfaces
interface BlurBGPropsI {
  blur: number,
  zIndex: number | string;
  additionalStyles?: {}
}

// Create Blur BG
const BlurBG = ({ blur = 5, zIndex = "auto", additionalStyles = {} }: BlurBGPropsI) => {
  return (
    <>
      {blur > 0 &&
        <Blurry
          position="absolute"
          top="0" bottom="0" left="0" right="0"
          overflow="hidden"
          blur={blur}
          zIndex={zIndex}
          style={additionalStyles}
        />
      }
    </>
  );
}
export default BlurBG;

const Blurry = styled(ItemVV2)`
  backdrop-filter: blur(${props => props.blur || '10'}px);
  z-index: ${props => props.zIndex}
`