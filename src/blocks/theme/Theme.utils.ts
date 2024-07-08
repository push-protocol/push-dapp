import { Theme, ThemeMode } from './Theme.types';
import { colorSemantics } from './colors/colors.semantics';
import { blurVariables } from './variables/variables.blur';
import { borderRadiusVariables } from './variables/variables.borderRadius';
import { borderSizeVariables } from './variables/variables.borderSize';
import { opacityVariables } from './variables/variables.opacity';
import { spacingVariables } from './variables/variables.spacing';

const getThemeColors = (mode: ThemeMode) =>
  Object.entries(colorSemantics).reduce((acc, [semanticName, sematicsVariants]) => {
    Object.entries(sematicsVariants).forEach(([variantKey, variantValue]) => {
      acc[`${semanticName}-${variantKey}` as keyof Theme['colors']] = variantValue[mode];
    });
    return acc;
  }, {} as Theme['colors']);

export const createTheme = (mode: ThemeMode): Theme => ({
  colors: getThemeColors(mode),
  blur: blurVariables,
  borderRadius: borderRadiusVariables,
  borderSize: borderSizeVariables,
  opacity: opacityVariables,
  spacing: spacingVariables,
});

export const getBlocksCSSVariables = (theme: Theme) =>
  Object.values(theme)
    .map((value) =>
      Object.entries(value)
        .map(([key, value]) => `--${key}: ${value};`)
        .join('')
    )
    .join('');
