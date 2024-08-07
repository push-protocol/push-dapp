import { colorBrands } from '../colors/colors.brands';
import { colorPrimitives } from '../colors/colors.primitives';
import { iconSemantics } from './semantics.icon';
import { strokeSemantics } from './semantics.stroke';
import { surfaceSemantics } from './semantics.surface';
import { textSemantics } from './semantics.text';

export const primaryButtonSemantics = {
  'background-default': { light: colorBrands['primary-500'], dark: colorBrands['primary-500'] },
  'background-hover': { light: colorBrands['primary-400'], dark: colorBrands['primary-400'] },
  'background-pressed': { light: colorBrands['primary-800'], dark: colorBrands['primary-600'] },
  'background-focus': { light: colorBrands['primary-500'], dark: colorBrands['primary-400'] },
  'background-loading': { light: colorBrands['primary-400'], dark: colorBrands['primary-400'] },
  'background-disabled': {
    light: surfaceSemantics['state-disabled'].light,
    dark: surfaceSemantics['state-disabled'].dark,
  },

  'text-default': { light: colorPrimitives['white-100'], dark: colorPrimitives['white-100'] },
  'text-disabled': { light: textSemantics['state-disabled'].light, dark: textSemantics['state-disabled'].dark },

  'icon-default': { light: colorPrimitives['white-100'], dark: colorPrimitives['white-100'] },
  'icon-disabled': { light: iconSemantics['state-disabled'].light, dark: iconSemantics['state-disabled'].dark },

  'stroke-focus': { light: colorBrands['primary-700'], dark: colorBrands['primary-200'] },
};

export const secondaryButtonSemantics = {
  'background-default': { light: colorBrands['neutral-100'], dark: colorBrands['neutral-800'] },
  'background-hover': { light: colorBrands['neutral-200'], dark: colorBrands['neutral-700'] },
  'background-pressed': { light: colorBrands['neutral-300'], dark: colorBrands['neutral-1000'] },
  'background-focus': { light: colorBrands['neutral-100'], dark: colorBrands['neutral-800'] },
  'background-loading': { light: colorBrands['neutral-100'], dark: colorBrands['neutral-800'] },
  'background-disabled': {
    light: surfaceSemantics['state-disabled'].light,
    dark: surfaceSemantics['state-disabled'].dark,
  },

  'text-default': { light: colorBrands['neutral-1000'], dark: colorPrimitives['white-100'] },
  'text-disabled': { light: textSemantics['state-disabled'].light, dark: textSemantics['state-disabled'].dark },

  'icon-default': { light: colorBrands['neutral-800'], dark: colorPrimitives['white-60'] },
  'icon-disabled': { light: iconSemantics['state-disabled'].light, dark: iconSemantics['state-disabled'].dark },

  'stroke-focus': { light: colorBrands['primary-300'], dark: colorBrands['primary-400'] },
};

export const tertiaryButtonSemantics = {
  'background-default': { light: colorBrands['neutral-1000'], dark: colorBrands['neutral-700'] },
  'background-inverse': { light: colorPrimitives['white-100'], dark: colorBrands['neutral-800'] },
  'background-hover': { light: colorBrands['neutral-900'], dark: colorBrands['neutral-300'] },
  'background-pressed': { light: colorBrands['neutral-100'], dark: colorPrimitives['gray-1000'] },
  'background-focus': { light: colorBrands['neutral-1000'], dark: colorBrands['neutral-700'] },
  'background-loading': { light: colorBrands['neutral-900'], dark: colorBrands['neutral-700'] },
  'background-disabled': {
    light: surfaceSemantics['state-disabled'].light,
    dark: surfaceSemantics['state-disabled'].dark,
  },

  'text-default': { light: colorPrimitives['white-100'], dark: colorPrimitives['gray-200'] },
  'text-disabled': { light: textSemantics['state-disabled'].light, dark: textSemantics['state-disabled'].dark },

  'icon-default': { light: colorBrands['neutral-300'], dark: colorPrimitives['white-50'] },
  'icon-disabled': { light: iconSemantics['state-disabled'].light, dark: iconSemantics['state-disabled'].dark },

  'stroke-focus': { light: colorBrands['primary-400'], dark: colorBrands['primary-400'] },
};

export const outlineButtonSemantics = {
  'background-default': { light: colorPrimitives['transparent'], dark: colorPrimitives['transparent'] },
  'background-hover': { light: colorPrimitives['transparent'], dark: colorPrimitives['transparent'] },
  'background-pressed': { light: colorPrimitives['transparent'], dark: colorPrimitives['transparent'] },
  'background-focus': { light: colorPrimitives['transparent'], dark: colorPrimitives['transparent'] },
  'background-disabled': {
    light: surfaceSemantics['state-disabled'].light,
    dark: surfaceSemantics['state-disabled'].dark,
  },

  'text-default': { light: textSemantics['primary'].light, dark: textSemantics['primary'].dark },
  'text-disabled': { light: textSemantics['state-disabled'].light, dark: textSemantics['state-disabled'].dark },

  'icon-default': { light: iconSemantics['primary'].light, dark: iconSemantics['secondary'].dark },
  'icon-disabled': { light: iconSemantics['state-disabled'].light, dark: iconSemantics['state-disabled'].dark },

  'stroke-default': { light: strokeSemantics['tertiary'].light, dark: strokeSemantics['tertiary'].dark },
  'stroke-focus': { light: colorBrands['primary-300'], dark: colorBrands['primary-400'] },
  'stroke-loading': { light: colorBrands['neutral-200'], dark: colorBrands['primary-400'] },
  'stroke-hover': { light: strokeSemantics['brand-subtle'].light, dark: strokeSemantics['secondary'].dark },
  'stroke-pressed': { light: colorBrands['neutral-600'], dark: colorBrands['neutral-300'] },
};

export const dangerButtonSemantics = {
  'background-default': { light: colorBrands['danger-600'], dark: colorBrands['danger-500'] },
  'background-hover': { light: colorBrands['danger-500'], dark: colorBrands['danger-400'] },
  'background-pressed': { light: colorBrands['danger-800'], dark: colorBrands['danger-700'] },
  'background-focus': { light: colorBrands['danger-500'], dark: colorBrands['danger-400'] },
  'background-loading': { light: colorBrands['danger-500'], dark: colorBrands['danger-400'] },
  'background-disabled': {
    light: surfaceSemantics['state-disabled'].light,
    dark: surfaceSemantics['state-disabled'].dark,
  },

  'text-default': { light: colorPrimitives['white-100'], dark: colorPrimitives['white-100'] },
  'text-disabled': { light: textSemantics['state-disabled'].light, dark: textSemantics['state-disabled'].dark },

  'icon-default': { light: colorPrimitives['white-70'], dark: colorPrimitives['white-70'] },
  'icon-disabled': { light: iconSemantics['state-disabled'].light, dark: iconSemantics['state-disabled'].dark },

  'stroke-focus': { light: colorBrands['danger-800'], dark: colorBrands['danger-600'] },
};

export const dangerSecondaryButtonSemantics = {
  'background-default': { light: colorBrands['danger-200'], dark: colorBrands['danger-800'] },
  'background-hover': { light: colorBrands['danger-100'], dark: colorBrands['danger-700'] },
  'background-pressed': { light: colorBrands['danger-500'], dark: colorBrands['danger-1000'] },
  'background-focus': { light: colorBrands['danger-100'], dark: colorBrands['danger-700'] },
  'background-loading': { light: colorBrands['danger-100'], dark: colorBrands['danger-700'] },
  'background-disabled': {
    light: surfaceSemantics['state-disabled'].light,
    dark: surfaceSemantics['state-disabled'].dark,
  },

  'text-default': { light: colorBrands['danger-700'], dark: colorPrimitives['white-100'] },
  'text-disabled': { light: textSemantics['state-disabled'].light, dark: textSemantics['state-disabled'].dark },

  'icon-default': { light: colorBrands['danger-400'], dark: colorPrimitives['white-70'] },
  'icon-disabled': { light: iconSemantics['state-disabled'].light, dark: iconSemantics['state-disabled'].dark },

  'stroke-focus': { light: colorBrands['danger-800'], dark: colorBrands['danger-400'] },
};
