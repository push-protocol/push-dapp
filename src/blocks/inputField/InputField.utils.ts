import { ThemeMode } from 'blocks/Blocks.types';
import { getBlocksColor } from 'blocks/Blocks.utils';

import { backgroundColor, borderColor, descriptionColor, textColor } from './InputField.constants';
import { InputFieldStates } from './InputField.types';

export const getInputFieldState = ({ error, disabled }: { error: boolean; disabled: boolean }): InputFieldStates => {
  if (error) {
    return 'error';
  } else if (disabled) {
    return 'disabled';
  }
  return 'default';
};

export const getInputFieldStateStyles = ({ mode, state }: { mode: ThemeMode; state: InputFieldStates }) => {
  //add for dark mode, label count  icon colors and placeholder color
  return `
  
  .input-container {
     background-color:   ${getBlocksColor(mode, backgroundColor[state])};
 
     border: 1.5px solid ${getBlocksColor(mode, borderColor[state])};


     &:hover {
          border: 1.5px solid ${getBlocksColor(mode, { light: 'gray-300', dark: 'gray-700' })};
        };
   
     &:focus-within {
         border: 1.5px solid ${getBlocksColor(
           mode,
           state === 'error' ? borderColor.error : { light: 'pink-300', dark: 'pink-300' }
         )};
        };
    
    .icon,.clear {
         color: ${getBlocksColor(mode, { light: 'gray-300', dark: 'gray-100' })};
        };
    
    & input{
         color: ${getBlocksColor(mode, textColor[state])};
         ::placeholder {
           color: ${getBlocksColor(mode, { light: 'gray-400', dark: 'gray-100' })};

        };
  }
    
}`;
};
