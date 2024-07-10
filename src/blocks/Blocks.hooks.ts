import { themeDark, themeLight } from 'config/Themization';
import { useTheme } from 'styled-components';
import { ThemeMode } from './Blocks.types';

// TODO: Remove this when we remove dependency from this hook

type ThemeData = typeof themeLight | typeof themeDark;

export const useBlocksTheme = () => {
  const { scheme } = useTheme() as ThemeData;

  return { mode: scheme as ThemeMode };
};
