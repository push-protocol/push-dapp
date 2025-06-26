import { surfaceSemantics } from './semantics.surface';

export const progressBarSemantics = {
  'background-default': { light: surfaceSemantics['secondary'].light, dark: surfaceSemantics['secondary'].dark },
  'background-progress': { light: surfaceSemantics['brand-medium'].light, dark: surfaceSemantics['brand-medium'].dark },
  'background-complete': {
    light: surfaceSemantics['state-danger-bold'].light,
    dark: surfaceSemantics['state-danger-bold'].light,
  },
};
