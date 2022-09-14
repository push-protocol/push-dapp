import { ReactComponent as CheckmarkSVG } from 'assets/reusables/loaders/checkmark.svg';

import BlurBG from 'components/reusables/blurs/BlurBG';
import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import Spinner from 'components/reusables/spinners/SpinnerUnit';

import styled, { useTheme } from 'styled-components';

import GLOBALS from "config/Globals";

export const LOADER_TYPE = {
  STANDALONE: 1,
  SEAMLESS: 2
}

export const LOADER_OVERLAY = {
  NORMAL: 1,
  ONTOP: 2,
}

interface LoaderSpinnerI {
  type?: number;
  overlay?: number;
  blur?: number;
  title?: string;
  completed?: boolean;
}

// Create Progress Bar
const LoaderSpinner = ({ type = LOADER_TYPE.STANDALONE, overlay = LOADER_OVERLAY.NORMAL, blur = 0, title = null, completed = false }: LoaderSpinnerI) => {
  const theme = useTheme();

  return (
    <ItemVV2
      position={overlay == LOADER_OVERLAY.ONTOP ? "absolute" : "relative"}
      top="0" right="0" bottom="0" left="0"
      zIndex="99"
    >
      {overlay === LOADER_OVERLAY.ONTOP && 
        <BlurBG blur={blur} />
      }
      
      <ItemHV2 
        flex="initial"
        alignSelf={type == LOADER_TYPE.STANDALONE ? "center" : "auto"}
        width={type == LOADER_TYPE.STANDALONE ? "50%" : "auto"}
        padding={type == LOADER_TYPE.STANDALONE ? GLOBALS.ADJUSTMENTS.PADDING.DEFAULT : "0px"}
        borderRadius={type == LOADER_TYPE.STANDALONE ? GLOBALS.ADJUSTMENTS.RADIUS.SMALL : "0px"}
        border={type == LOADER_TYPE.STANDALONE ? `1px solid ${theme.default.border}` : "transparent"}
        background={type == LOADER_TYPE.STANDALONE ? theme.default.bg : "initial"}
      >
        {!completed && 
          <Spinner />
        }
        {completed &&
          <CheckmarkSVG />
        }

        {title && 
          <SpanV2 
            padding="10px"
            fontWeight="500"
            color={theme.default.color}
          >{title}</SpanV2>
        }
      </ItemHV2>
    </ItemVV2>
  );
}
export default LoaderSpinner;