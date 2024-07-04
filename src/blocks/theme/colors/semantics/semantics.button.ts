import { colorBrands } from '../colors.brands';
import { colorPrimitives } from '../colors.primitives';
import { iconSemantics } from './semantics.icon';
import { surfaceSemantics } from './semantics.surface';
import { textSemantics } from './semantics.text';

export const primaryButtonSemantics = {
  'background-default': { light: colorBrands['primary-500'], dark: colorBrands['primary-500'] },
  'background-hover': { light: colorBrands['primary-400'], dark: colorBrands['primary-400'] },
  'background-pressed': { light: colorBrands['primary-800'], dark: colorBrands['primary-600'] },
  'background-focus': { light: colorBrands['primary-500'], dark: colorBrands['primary-400'] },
  'background-disabled': { light: surfaceSemantics['disabled'].light, dark: surfaceSemantics['disabled'].dark },

  'text-default': { light: colorPrimitives['white-100'], dark: colorPrimitives['white-100'] },
  'text-disabled': { light: textSemantics['disabled'].light, dark: textSemantics['disabled'].dark },

  'icon-default': { light: colorPrimitives['white-100'], dark: colorPrimitives['white-100'] },
  'icon-disabled': { light: iconSemantics['disabled'].light, dark: iconSemantics['disabled'].dark },

  'stroke-focus': { light: colorBrands['primary-700'], dark: colorBrands['primary-200'] },
};

export const SecondaryButtonSemantics = {
  'background-default': { light: colorBrands['neutral-100'], dark: colorBrands['neutral-800'] },
  'background-hover': { light: colorBrands['neutral-200'], dark: colorBrands['neutral-700'] },
  'background-pressed': { light: colorBrands['neutral-300'], dark: colorBrands['neutral-1000'] },
  'background-focus': { light: colorBrands['neutral-100'], dark: colorBrands['neutral-800'] },
  'background-disabled': { light: surfaceSemantics['disabled'].light, dark: surfaceSemantics['disabled'].dark },

  'text-default': { light: colorBrands['neutral-1000'], dark: colorPrimitives['white-100'] },
  'text-disabled': { light: textSemantics['disabled'].light, dark: textSemantics['disabled'].dark },

  'icon-default': { light: colorBrands['neutral-800'], dark: colorPrimitives['white-60'] },
  'icon-disabled': { light: iconSemantics['disabled'].light, dark: iconSemantics['disabled'].dark },

  'stroke-focus': { light: colorBrands['primary-300'], dark: colorBrands['primary-400'] },
};

export const tertiaryButtonSemantics = {
  'background-default': { light: colorBrands['neutral-1000'], dark: colorBrands['neutral-700'] },
  'background-inverse': { light: colorPrimitives['white-100'], dark: colorBrands['neutral-800'] },
  'background-hover': { light: colorBrands['neutral-900'], dark: colorBrands['neutral-300'] },
  'background-pressed': { light: colorBrands['neutral-100'], dark: colorPrimitives['gray-1000'] },
  'background-focus': { light: colorBrands['neutral-1000'], dark: colorBrands['neutral-700'] },
  'background-disabled': { light: surfaceSemantics['disabled'].light, dark: surfaceSemantics['disabled'].dark },

  'text-default': { light: colorPrimitives['white-100'], dark: colorPrimitives['gray-200'] },
  'text-disabled': { light: textSemantics['disabled'].light, dark: textSemantics['disabled'].dark },

  'icon-default': { light: colorPrimitives['white-100'], dark: colorPrimitives['white-100'] },
  'icon-disabled': { light: iconSemantics['disabled'].light, dark: iconSemantics['disabled'].dark },

  'stroke-focus': { light: colorBrands['primary-700'], dark: colorBrands['primary-200'] },
};

export const outlineButtonSemantics = {};

export const dangerButtonSemantics = {};

export const dangerSecondaryButtonSemantics = {};
