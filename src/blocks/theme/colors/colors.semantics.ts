import {
  SecondaryButtonSemantics,
  dangerButtonSemantics,
  dangerSecondaryButtonSemantics,
  outlineButtonSemantics,
  primaryButtonSemantics,
  tertiaryButtonSemantics,
} from './semantics/semantics.button';
import { iconSemantics } from './semantics/semantics.icon';
import { strokeSemantics } from './semantics/semantics.stroke';
import { surfaceSemantics } from './semantics/semantics.surface';
import { textSemantics } from './semantics/semantics.text';

export const colorSemantics = {
  'button-primary': primaryButtonSemantics,
  'button-secondary': SecondaryButtonSemantics,
  'button-tertiary': tertiaryButtonSemantics,
  'button-outline': outlineButtonSemantics,
  'button-danger': dangerButtonSemantics,
  'button-danger-secondary': dangerSecondaryButtonSemantics,
  dropdown: {},
  icon: iconSemantics,
  'input-field': {},
  'radio-button': {},
  surface: surfaceSemantics,
  stroke: strokeSemantics,
  text: textSemantics,
  textarea: {},
  toast: {},
  'toggle-switch': {},
  tooltip: {},
};
