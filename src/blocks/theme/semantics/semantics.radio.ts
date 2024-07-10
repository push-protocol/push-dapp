import { strokeSemantics } from './semantics.stroke';
import { surfaceSemantics } from './semantics.surface';
import { textSemantics } from './semantics.text';

export const radioSemantics = {
  'background-default': { light: surfaceSemantics['primary'].light, dark: surfaceSemantics['primary'].dark },
  'background-selected': { light: surfaceSemantics['brand-medium'].light, dark: surfaceSemantics['brand-medium'].dark },
  'background-disabled': { light: surfaceSemantics['disabled'].light, dark: surfaceSemantics['disabled'].dark },

  'text-default': { light: textSemantics['primary'].light, dark: textSemantics['primary'].dark },
  'text-secondary': { light: textSemantics['secondary'].light, dark: textSemantics['secondary'].dark },
  'text-disabled': { light: textSemantics['disabled'].light, dark: textSemantics['disabled'].dark },

  'stroke-default': { light: strokeSemantics['brand-medium'].light, dark: strokeSemantics['brand-medium'].dark },
  'stroke-disabled': { light: strokeSemantics['disabled'].light, dark: strokeSemantics['disabled'].dark },
};
