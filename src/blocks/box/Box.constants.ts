import { ModeProp } from '../Blocks.types';
import { BoxCSSProps } from './Box.types';

export const boxRestrictedCSSPropKeys: (keyof BoxCSSProps | keyof ModeProp)[] = [
  'border',
  'borderRadius',
  'backgroundColor',
  'color',
  'cursor',
  'position',
  'boxShadow',
  'alignItems',
  'display',
  'flexDirection',
  'gap',
  'height',
  'justifyContent',
  'margin',
  'maxHeight',
  'minHeight',
  'maxWidth',
  'minWidth',
  'overflow',
  'padding',
  'width',
  'mode',
];
