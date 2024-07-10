import { ThemeMode } from 'blocks/Blocks.types';
import { getBlocksColor } from 'blocks/Blocks.utils';

import { textInputColor } from './TextInput.constants';
import { TextInputStates } from './TextInput.types';

export const getTextInputState = ({
  error,
  disabled,
  success,
}: {
  error: boolean;
  disabled: boolean;
  success: boolean;
}): TextInputStates => {
  if (error) {
    return 'error';
  } else if (disabled) {
    return 'disabled';
  } else if (success) {
    return 'success';
  }
  return 'default';
};

export const getTextInputStateStyles = ({ mode, state }: { mode: ThemeMode; state: TextInputStates }) => {
  /*check all dark mode , label ,count and icon and placeholder colors
  add success state
  */
  return `
  
  .input-container {
     background-color:   ${getBlocksColor(mode, textInputColor.backgroundColor[state])};
 
     border: 1.5px solid ${getBlocksColor(mode, textInputColor.borderColor[state])};


     &:hover {
          border: 1.5px solid ${getBlocksColor(mode, {
            light: 'gray-300',
            dark: 'gray-700',
          })};
        };
   
     &:focus-within {
         border: 1.5px solid ${getBlocksColor(
           mode,
           state === 'error' ? textInputColor.borderColor.error : { light: 'pink-300', dark: 'pink-300' }
         )};
        };
    
    [role='img'] {
         color: ${getBlocksColor(mode, textInputColor.iconColor[state])};
        };
    
    & input{
         color: ${getBlocksColor(mode, textInputColor.textColor[state])};
         ::placeholder {
           color: ${getBlocksColor(mode, {
             light: 'gray-400',
             dark: 'gray-600',
           })};

        };
  }
    
}`;
};
