import { getResponsiveCSS } from '../Blocks.utils';
import { SeparatorCSSProps, SeparatorResponsiveCSSPropertiesData, SeparatorResponsiveProps } from './Separator.types';

const getSeparatorResponsiveCSSProperties = (
  props: SeparatorResponsiveProps
): SeparatorResponsiveCSSPropertiesData[] => [
  { propName: 'height', prop: props.height },
  { propName: 'margin', prop: props.margin },
  { propName: 'max-height', prop: props.maxHeight },
  { propName: 'min-height', prop: props.minHeight },
  { propName: 'max-width', prop: props.maxWidth },
  { propName: 'min-width', prop: props.minWidth },
  { propName: 'padding', prop: props.padding },
  { propName: 'width', prop: props.width },
];

export const getSeparatorResponsiveCSS = (props: SeparatorResponsiveProps) => {
  const data = getSeparatorResponsiveCSSProperties(props);
  return getResponsiveCSS(data);
};

export const separatorCSSPropsKeys: (keyof SeparatorCSSProps)[] = [
  'border',
  'borderRadius',
  'position',
  'height',
  'margin',
  'maxHeight',
  'minHeight',
  'maxWidth',
  'minWidth',
  'padding',
  'width',
  'backgroundColor',
  'boxShadow',
];
