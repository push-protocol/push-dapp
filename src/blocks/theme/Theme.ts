import { colorSemantics } from './colors/colors.semantics';
import { blurVariables } from './variables/variables.blur';
import { borderRadiusVariables } from './variables/variables.borderRadius';
import { borderSizeVariables } from './variables/variables.borderSize';
import { opacityVariables } from './variables/variables.opacity';
import { spacingVariables } from './variables/variables.spacing';

//TODO: fix the colors type
export type Theme = {
  colors: { [key: string]: string };
  blur: typeof blurVariables;
  borderRadius: typeof borderRadiusVariables;
  borderSize: typeof borderSizeVariables;
  opacity: typeof opacityVariables;
  spacing: typeof spacingVariables;
};

const createTheme = (mode: 'light' | 'dark'): Theme => ({
  colors: Object.entries(colorSemantics).reduce((acc, [semanticName, sematicsVariants]) => {
    Object.entries(sematicsVariants).forEach(([variantKey, variantValue]) => {
      acc[`${semanticName}-${variantKey}`] = variantValue[mode];
    });
    return acc;
  }, {} as { [key: string]: string }),
  blur: blurVariables,
  borderRadius: borderRadiusVariables,
  borderSize: borderSizeVariables,
  opacity: opacityVariables,
  spacing: spacingVariables,
});

const blocksTheme = {
  light: createTheme('light'),
  dark: createTheme('dark'),
};

const getBlocksGlobalStyles = (theme: Theme) =>
  Object.values(theme)
    .map((value) =>
      Object.entries(value)
        .map(([key, value]) => `--${key}: ${value};`)
        .join('')
    )
    .join('');

export { blocksTheme, getBlocksGlobalStyles };
