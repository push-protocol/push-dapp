import { colorPrimitives } from '../colors/colors.primitives';
import { strokeSemantics } from './semantics.stroke';
import { surfaceSemantics } from './semantics.surface';

export const sliderSemantics = {
  'stroke-default': { light: strokeSemantics.secondary.light, dark: strokeSemantics.secondary.dark },
  'icon-default': { light: colorPrimitives['white-100'], dark: colorPrimitives['white-100'] },
  'background-default': { light: surfaceSemantics.secondary.light, dark: surfaceSemantics.secondary.dark },
  'background-progress': { light: surfaceSemantics['brand-medium'].light, dark: surfaceSemantics['brand-medium'].dark },
};
