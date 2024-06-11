import { ModeProp } from 'blocks/Blocks.types';
import { SeparatorProps } from './Separator.types';

export const separatorRestrictedPropsKeys: (keyof SeparatorProps | keyof ModeProp)[] = [
  'height',
  'margin',
  'width',
  'orientation',
  'mode',
];
