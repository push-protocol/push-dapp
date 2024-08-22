import { iconSemantics } from './semantics.icon';
import { strokeSemantics } from './semantics.stroke';
import { textSemantics } from './semantics.text';

export const tableSemantics = {
  'stroke-default': { light: strokeSemantics['tertiary'].light, dark: strokeSemantics['tertiary'].dark },

  'text-default': { light: textSemantics['primary'].light, dark: textSemantics['primary'].dark },
  'text-heading': { light: textSemantics['tertiary'].light, dark: textSemantics['tertiary'].dark },
  'text-disabled': { light: textSemantics['state-disabled'].light, dark: textSemantics['state-disabled'].dark },

  'icon-default': { light: iconSemantics['primary'].light, dark: iconSemantics['primary'].dark },
  'icon-disabled': { light: iconSemantics['state-disabled'].light, dark: iconSemantics['state-disabled'].dark },
};
