import { textVariants } from './Text.constants';

export type TextVariants = keyof typeof textVariants;

export type TextHTMLTags =
  | 'span'
  | 'div'
  | 'p'
  | 'b'
  | 'i'
  | 'u'
  | 'abbr'
  | 'cite'
  | 'kbd'
  | 's'
  | 'sample'
  | 'sub'
  | 'sup'
  | 'ins'
  | 'del'
  | 'mark'
  | 'em'
  | 'i'
  | 'strong'
  | 'small'
  | 'label';

export type TextAlign = 'left' | 'center' | 'right';

export type TextTransform = 'lowercase' | 'uppercase' | 'capitalize' | 'inherit';
