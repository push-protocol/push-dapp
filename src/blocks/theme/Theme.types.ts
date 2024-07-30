import { colorSemantics, semanticKeys } from './colors/colors.semantics';
import { blurVariables } from './variables/variables.blur';
import { borderRadiusVariables } from './variables/variables.borderRadius';
import { borderSizeVariables } from './variables/variables.borderSize';
import { opacityVariables } from './variables/variables.opacity';
import { spacingVariables } from './variables/variables.spacing';

export type ThemeMode = 'light' | 'dark';

type ColorSemantics = typeof colorSemantics;

type StringKeys<T> = Extract<keyof T, string>;

type ThemeColorsConfig<T> = {
  [K1 in StringKeys<T> as `${K1}-${StringKeys<T[K1]>}`]: string;
};

export type ThemeColors = keyof ThemeColorsConfig<ColorSemantics>;

export type Theme = {
  colors: ThemeColorsConfig<ColorSemantics>;
  blur: typeof blurVariables;
  borderRadius: typeof borderRadiusVariables;
  borderSize: typeof borderSizeVariables;
  opacity: typeof opacityVariables;
  spacing: typeof spacingVariables;
};

export type ThemeBorderRadius = keyof Theme['borderRadius'];

export type ThemeBorderSize = keyof Theme['borderSize'];

export type ThemeSpacing = keyof Theme['spacing'];

export type SurfaceColors = keyof ThemeColorsConfig<{ [semanticKeys.surface]: ColorSemantics['surface'] }>;

export type TextColors = keyof ThemeColorsConfig<{ [semanticKeys.text]: ColorSemantics['text'] }>;

export type IconColors = keyof ThemeColorsConfig<{ [semanticKeys.icon]: ColorSemantics['icon'] }>;

export type StrokeColors = keyof ThemeColorsConfig<{ [semanticKeys.stroke]: ColorSemantics['stroke'] }>;
