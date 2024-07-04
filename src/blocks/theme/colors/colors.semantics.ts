import {
  SecondaryButtonSemantics,
  dangerButtonSemantics,
  dangerSecondaryButtonSemantics,
  outlineButtonSemantics,
  primaryButtonSemantics,
  tertiaryButtonSemantics,
} from './semantics/semantics.button';
import { dropdownSemantics } from './semantics/semantics.dropdown';
import { iconSemantics } from './semantics/semantics.icon';
import { inputSemantics } from './semantics/semantics.input';
import { radioSemantics } from './semantics/semantics.radio';
import { strokeSemantics } from './semantics/semantics.stroke';
import { surfaceSemantics } from './semantics/semantics.surface';
import { switchSemantics } from './semantics/semantics.switch';
import { textSemantics } from './semantics/semantics.text';
import { textAreaSemantics } from './semantics/semantics.textarea';
import { tooltipSemantics } from './semantics/semantics.tooltip';

export const colorSemantics = {
  'button-primary': primaryButtonSemantics,
  'button-secondary': SecondaryButtonSemantics,
  'button-tertiary': tertiaryButtonSemantics,
  'button-outline': outlineButtonSemantics,
  'button-danger': dangerButtonSemantics,
  'button-danger-secondary': dangerSecondaryButtonSemantics,
  dropdown: dropdownSemantics,
  icon: iconSemantics,
  'input-field': inputSemantics,
  'radio-button': radioSemantics,
  surface: surfaceSemantics,
  stroke: strokeSemantics,
  text: textSemantics,
  textarea: textAreaSemantics,
  toast: {},
  'toggle-switch': switchSemantics,
  tooltip: tooltipSemantics,
};
