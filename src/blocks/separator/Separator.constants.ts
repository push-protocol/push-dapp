import { ModeProp } from '../Blocks.types';
import { SeparatorProps } from './Separator.types';

export const separatorRestrictedPropsKeys: (keyof SeparatorProps | keyof ModeProp)[] = [
  'height',
  'margin',
  'width',
  'orientation',
];
