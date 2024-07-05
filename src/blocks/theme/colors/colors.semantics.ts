import {
  secondaryButtonSemantics,
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
import { toastSemantics } from './semantics/semantics.toast';
import { tooltipSemantics } from './semantics/semantics.tooltip';

export const colorSemantics = {
  'components-button-primary': primaryButtonSemantics,
  'components-button-secondary': secondaryButtonSemantics,
  'components-button-tertiary': tertiaryButtonSemantics,
  'components-button-outline': outlineButtonSemantics,
  'components-button-danger': dangerButtonSemantics,
  'components-button-danger-secondary': dangerSecondaryButtonSemantics,
  'components-dropdown': dropdownSemantics,
  icon: iconSemantics,
  'components-input-field': inputSemantics,
  'components-radio-button': radioSemantics,
  surface: surfaceSemantics,
  stroke: strokeSemantics,
  text: textSemantics,
  'components-textarea': textAreaSemantics,
  'components-toast': toastSemantics,
  'components-toggle-switch': switchSemantics,
  'components-tooltip': tooltipSemantics,
};
