import { getResponsiveCSS } from '../Blocks.utils';
import { BoxCSSProps, BoxResponsiveCSSPropertiesData, BoxResponsiveProps } from './Box.types';

const getBoxResponsiveCSSProperties = (props: BoxResponsiveProps): BoxResponsiveCSSPropertiesData[] => [
  { propName: 'align-items', prop: props.alignItems },
  { propName: 'display', prop: props.display },
  { propName: 'flex-direction', prop: props.flexDirection },
  { propName: 'height', prop: props.height },
  { propName: 'justify-content', prop: props.justifyContent },
  { propName: 'margin', prop: props.margin },
  { propName: 'max-height', prop: props.maxHeight },
  { propName: 'min-height', prop: props.minHeight },
  { propName: 'max-width', prop: props.maxWidth },
  { propName: 'min-width', prop: props.minWidth },
  { propName: 'padding', prop: props.padding },
  { propName: 'width', prop: props.width },
];

export const getBoxResponsiveCSS = (props: BoxResponsiveProps) => {
  const data = getBoxResponsiveCSSProperties(props);
  return getResponsiveCSS(data);
};

export const boxCSSPropsKeys: (keyof BoxCSSProps)[] = [
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
  'height',
  'justifyContent',
  'margin',
  'maxHeight',
  'minHeight',
  'maxWidth',
  'minWidth',
  'padding',
  'width',
];
