import { iconSemantics } from './semantics.icon';
import { strokeSemantics } from './semantics.stroke';
import { surfaceSemantics } from './semantics.surface';
import { textSemantics } from './semantics.text';

export const notificationsSemantics = {
  'background-default': { light: surfaceSemantics['primary'].light, dark: surfaceSemantics['primary'].dark },
  'stroke-bg': { light: strokeSemantics['secondary'].light, dark: strokeSemantics['secondary'].dark },
  'text-default': {
    light: textSemantics['primary'].light,
    dark: textSemantics['primary'].dark,
  },
  'text-secondary': { light: textSemantics['tertiary'].light, dark: textSemantics['tertiary'].dark },
  'icon-default': { light: iconSemantics['primary'].light, dark: iconSemantics['primary'].dark },
};
