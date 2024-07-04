import { colorBrands } from '../colors.brands';
import { colorPrimitives } from '../colors.primitives';
import { iconSemantics } from './semantics.icon';
import { strokeSemantics } from './semantics.stroke';
import { surfaceSemantics } from './semantics.surface';
import { textSemantics } from './semantics.text';

export const inputSemantics = {
  'background-default': { light: colorPrimitives['white-100'], dark: colorBrands['neutral-800'] },
  'background-hover': { light: colorPrimitives['white-100'], dark: colorBrands['neutral-800'] },
  'background-pressed': { light: colorPrimitives['white-100'], dark: colorBrands['neutral-800'] },
  'background-focus': { light: colorPrimitives['white-100'], dark: colorBrands['neutral-800'] },
  'background-disabled': { light: surfaceSemantics['disabled'].light, dark: surfaceSemantics['disabled'].dark },
  'background-success': { light: colorBrands['success-100'], dark: colorBrands['success-200'] },
  'background-danger': { light: colorBrands['danger-100'], dark: colorBrands['danger-200'] },

  'text-default': { light: textSemantics['primary'].light, dark: textSemantics['primary'].dark },
  'text-placeholder': { light: colorBrands['neutral-400'], dark: colorBrands['neutral-600'] },
  'text-secondary': { light: colorBrands['neutral-600'], dark: colorBrands['neutral-500'] },
  'text-disabled': { light: textSemantics['disabled'].light, dark: textSemantics['disabled'].dark },
  'text-success': { light: textSemantics['success-bold'].light, dark: textSemantics['success-subtle'].dark },
  'text-danger': { light: textSemantics['danger-bold'].light, dark: textSemantics['danger-subtle'].dark },

  'icon-default': { light: iconSemantics['tertiary'].light, dark: iconSemantics['secondary'].dark },
  'icon-disabled': { light: iconSemantics['disabled'].light, dark: iconSemantics['disabled'].dark },
  'icon-success': { light: iconSemantics['success-bold'].light, dark: iconSemantics['success-subtle'].dark },
  'icon-danger': { light: iconSemantics['danger-bold'].light, dark: iconSemantics['danger-subtle'].dark },

  'stroke-default': { light: strokeSemantics['secondary'].light, dark: strokeSemantics['secondary'].dark },
  'stroke-hover': { light: strokeSemantics['tertiary'].light, dark: strokeSemantics['tertiary'].dark },
  'stroke-focus': { light: colorBrands['primary-300'], dark: colorBrands['primary-300'] },
  'stroke-pressed': { light: strokeSemantics['tertiary'].light, dark: strokeSemantics['tertiary'].dark },
  'stroke-disabled': { light: colorBrands['neutral-300'], dark: colorBrands['neutral-900'] },
  'stroke-success': { light: colorBrands['success-500'], dark: colorBrands['success-400'] },
  'stroke-danger': { light: colorBrands['danger-400'], dark: colorBrands['danger-400'] },
};
