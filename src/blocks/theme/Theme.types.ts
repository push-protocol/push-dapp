import { colorSemantics } from './colors/colors.semantics';
import { blurVariables } from './variables/variables.blur';
import { borderRadiusVariables } from './variables/variables.borderRadius';
import { borderSizeVariables } from './variables/variables.borderSize';
import { opacityVariables } from './variables/variables.opacity';
import { spacingVariables } from './variables/variables.spacing';

export type ThemeMode = 'light' | 'dark';

type ColorSemantics = typeof colorSemantics;

type StringKeys<T> = Extract<keyof T, string>;

type ThemeColorsConfig = {
  [K1 in StringKeys<ColorSemantics> as `${K1}-${StringKeys<ColorSemantics[K1]>}`]: string;
};

export type ThemeColors = keyof ThemeColorsConfig;

export type Theme = {
  colors: ThemeColorsConfig;
  blur: typeof blurVariables;
  borderRadius: typeof borderRadiusVariables;
  borderSize: typeof borderSizeVariables;
  opacity: typeof opacityVariables;
  spacing: typeof spacingVariables;
};

export type Spacing = keyof Theme['spacing'];
export type Radius = keyof Theme['borderRadius'];
