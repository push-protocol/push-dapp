import { surfaceSemantics } from './semantics.surface';
import { textSemantics } from './semantics.text';

export const tooltipSemantics = {
  'background-default': { light: surfaceSemantics['primary'].light, dark: surfaceSemantics['primary'].dark },
  'text-default': { light: textSemantics['primary'].light, dark: textSemantics['primary'].dark },
  'text-primary': { light: textSemantics['secondary'].light, dark: textSemantics['secondary'].dark },
};
