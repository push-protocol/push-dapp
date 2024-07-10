import { ThemeModeColors } from 'blocks/Blocks.types';

export type TextInputStates = 'error' | 'disabled' | 'default' | 'success';
export type TextInputStyles = Record<TextInputStates, ThemeModeColors>;
