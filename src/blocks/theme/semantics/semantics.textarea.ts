import { colorBrands } from '../colors/colors.brands';
import { colorPrimitives } from '../colors/colors.primitives';
import { iconSemantics } from './semantics.icon';
import { strokeSemantics } from './semantics.stroke';
import { surfaceSemantics } from './semantics.surface';
import { textSemantics } from './semantics.text';

export const textAreaSemantics = {
  'background-default': { light: colorPrimitives['white-100'], dark: colorBrands['neutral-800'] },
  'background-hover': { light: colorPrimitives['white-100'], dark: colorBrands['neutral-800'] },
  'background-pressed': { light: colorPrimitives['white-100'], dark: colorBrands['neutral-800'] },
  'background-focus': { light: colorPrimitives['white-100'], dark: colorBrands['neutral-800'] },
  'background-disabled': {
    light: surfaceSemantics['state-disabled'].light,
    dark: surfaceSemantics['state-disabled'].dark,
  },
  'background-success': { light: colorBrands['success-100'], dark: colorBrands['success-200'] },
  'background-danger': { light: colorBrands['danger-100'], dark: colorBrands['danger-200'] },

  'text-default': { light: textSemantics['primary'].light, dark: textSemantics['primary'].dark },
  'text-placeholder': { light: colorBrands['neutral-400'], dark: colorBrands['neutral-600'] },
  'text-secondary': { light: colorBrands['neutral-600'], dark: colorBrands['neutral-500'] },
  'text-disabled': { light: textSemantics['state-disabled'].light, dark: textSemantics['state-disabled'].dark },
  'text-success': {
    light: textSemantics['state-success-bold'].light,
    dark: textSemantics['state-success-subtle'].dark,
  },
  'text-danger': { light: textSemantics['state-danger-bold'].light, dark: textSemantics['state-danger-subtle'].dark },

  'icon-default': { light: iconSemantics['tertiary'].light, dark: iconSemantics['secondary'].dark },
  'icon-disabled': { light: iconSemantics['state-disabled'].light, dark: iconSemantics['state-disabled'].dark },
  'icon-success': {
    light: iconSemantics['state-success-bold'].light,
    dark: iconSemantics['state-success-subtle'].dark,
  },
  'icon-danger': { light: iconSemantics['state-danger-bold'].light, dark: iconSemantics['state-danger-subtle'].dark },

  'stroke-default': { light: strokeSemantics['secondary'].light, dark: strokeSemantics['secondary'].dark },
  'stroke-hover': { light: strokeSemantics['tertiary'].light, dark: strokeSemantics['tertiary'].dark },
  'stroke-focus': { light: colorBrands['primary-300'], dark: colorBrands['primary-300'] },
  'stroke-pressed': { light: strokeSemantics['tertiary'].light, dark: strokeSemantics['tertiary'].dark },
  'stroke-disabled': { light: colorBrands['neutral-300'], dark: colorBrands['neutral-900'] },
  'stroke-success': { light: colorBrands['success-500'], dark: colorBrands['success-400'] },
  'stroke-danger': { light: colorBrands['danger-400'], dark: colorBrands['danger-400'] },
};
