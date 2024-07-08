import { ThemeModeColors } from 'blocks/Blocks.types';

export type TextInputStates = 'error' | 'disabled' | 'default';
export type TextInputStyles = Record<TextInputStates, ThemeModeColors>;
