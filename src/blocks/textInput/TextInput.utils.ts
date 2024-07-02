import { ThemeMode } from 'blocks/Blocks.types';
import { getBlocksColor } from 'blocks/Blocks.utils';

import { backgroundColor, borderColor, placeholderColor, textColor } from './TextInput.constants';
import { TextInputStates } from './TextInput.types';

export const getTextInputState = ({ error, disabled }: { error: boolean; disabled: boolean }): TextInputStates => {
  if (error) {
    return 'error';
  } else if (disabled) {
    return 'disabled';
  }
  return 'default';
};

export const getTextInputStateStyles = ({ mode, state }: { mode: ThemeMode; state: TextInputStates }) => {
  /*check all dark mode , label ,count and icon and placeholder colors
  add success state
  */
  return `
  
  .input-container {
     background-color:   ${getBlocksColor(mode, backgroundColor[state])};
 
     border: 1.5px solid ${getBlocksColor(mode, borderColor[state])};


     &:hover {
          border: 1.5px solid ${getBlocksColor(mode, {
            light: 'gray-300',
            dark: 'gray-700',
          })};
        };
   
     &:focus-within {
         border: 1.5px solid ${getBlocksColor(
           mode,
           state === 'error' ? borderColor.error : { light: 'pink-300', dark: 'pink-300' }
         )};
        };
    
    .icon,.clear {
         color: ${getBlocksColor(mode, {
           light: 'gray-300',
           dark: 'gray-100',
         })};
        };
    
    & input{
         color: ${getBlocksColor(mode, textColor[state])};
         ::placeholder {
           color: ${getBlocksColor(mode, placeholderColor[state])};

        };
  }
    
}`;
};
