import { colorBrands } from '../colors/colors.brands';
import { colorPrimitives } from '../colors/colors.primitives';
import { textSemantics } from './semantics.text';

export const alertSemantics = {
  'text-default': { light: textSemantics['primary'].light, dark: textSemantics['primary'].dark },
  'text-body': { light: textSemantics['tertiary'].light, dark: textSemantics['tertiary'].dark },
  'icon-success': { light: colorBrands['success-500'], dark: colorBrands['success-300'] },
  'icon-warning': { light: colorBrands['warning-700'], dark: colorBrands['warning-100'] },
  'icon-error': { light: colorBrands['danger-600'], dark: colorBrands['danger-500'] },
  'icon-info': { light: colorPrimitives['blue-700'], dark: colorPrimitives['blue-100'] },
  'text-cta-success': { light: colorBrands['success-500'], dark: colorBrands['success-300'] },
  'text-cta-warning': { light: colorBrands['warning-700'], dark: colorBrands['warning-100'] },
  'text-cta-error': { light: colorBrands['danger-600'], dark: colorBrands['danger-500'] },
  'text-cta-info': { light: colorPrimitives['blue-700'], dark: colorPrimitives['blue-100'] },
  'background-success': { light: colorBrands['success-100'], dark: colorBrands['success-900'] },
  'background-warning': { light: colorBrands['warning-100'], dark: colorBrands['warning-900'] },
  'background-error': { light: colorBrands['danger-100'], dark: colorBrands['danger-900'] },
  'background-info': { light: colorPrimitives['blue-100'], dark: colorPrimitives['blue-900'] },
  'stroke-success': { light: colorBrands['success-300'], dark: colorBrands['success-700'] },
  'stroke-warning': { light: colorBrands['warning-300'], dark: colorBrands['warning-700'] },
  'stroke-error': { light: colorBrands['danger-300'], dark: colorBrands['danger-700'] },
  'stroke-info': { light: colorPrimitives['blue-300'], dark: colorPrimitives['blue-700'] },
};
