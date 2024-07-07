import { colorSemantics } from './colors/colors.semantics';
import { blurVariables } from './variables/variables.blur';
import { borderRadiusVariables } from './variables/variables.borderRadius';
import { borderSizeVariables } from './variables/variables.borderSize';
import { opacityVariables } from './variables/variables.opacity';
import { spacingVariables } from './variables/variables.spacing';

const createTheme = (mode: 'light' | 'dark') => ({
  colors: Object.entries(colorSemantics).reduce((acc, [semanticName, sematicsVariants]) => {
    Object.entries(sematicsVariants).forEach(([variantKey, variantValue]) => {
      acc[`${semanticName}-${variantKey}`] = variantValue[mode];
    });
    return acc;
  }, {}),
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

const getBlocksGlobalStyles = (theme: any) =>
  Object.values(theme)
    .map((value) =>
      Object.entries(value as any)
        .map(([key, value]) => `--${key}: ${value};`)
        .join('')
    )
    .join('');

export { blocksTheme, getBlocksGlobalStyles };
