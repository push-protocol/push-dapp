import { themeDark, themeLight } from 'config/Themization';
import { useTheme } from 'styled-components';
import { ThemeMode } from './Blocks.types';

// TODO: Improve this approach in future

type ThemeData = typeof themeLight | typeof themeDark;

export const useBlocksTheme = () => {
  const { scheme } = useTheme() as ThemeData;

  return { mode: scheme as ThemeMode };
};
