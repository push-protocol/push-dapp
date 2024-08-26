import { colorPrimitives } from '../colors/colors.primitives';
import { strokeSemantics } from './semantics.stroke';
import { surfaceSemantics } from './semantics.surface';

export const sliderSemantics = {
  'stroke-default': strokeSemantics.secondary,
  'icon-default': { light: colorPrimitives['white-100'], dark: colorPrimitives['white-100'] },
  'background-default': surfaceSemantics.secondary,
  'background-progress': surfaceSemantics['brand-medium'],
};
