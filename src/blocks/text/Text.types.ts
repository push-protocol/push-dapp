import { CSSProperties } from 'react';
import { ResponsiveProp, ValueOf } from '../Blocks.types';
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

export type TextResponsiveProps = {
  /* Used to decide the visibility of text component for different screen sizes */
  display?: ResponsiveProp<CSSProperties['display']>;
};

export type TextResponsiveCSSProperties = 'display';

export type TextResponsivePropValues = ValueOf<TextResponsiveProps>;

export type TextResponsiveCSSPropertiesData = { propName: TextResponsiveCSSProperties; prop: TextResponsivePropValues };
