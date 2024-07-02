import { ThemeModeColors } from 'blocks/Blocks.types';

export type InputFieldStates = 'error' | 'disabled' | 'default';
export type InputFieldStyles = Record<InputFieldStates, ThemeModeColors>;
