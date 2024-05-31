import { getResponsiveCSS } from '../Blocks.utils';
import { BoxCSSProps, BoxResponsiveCSSPropertiesData, BoxResponsiveProps } from './Box.types';

const getBoxResponsiveCSSProperties = (props: BoxResponsiveProps): BoxResponsiveCSSPropertiesData[] => [
  { propName: 'align-items', prop: props.alignItems },
  { propName: 'display', prop: props.display },
  { propName: 'flex-direction', prop: props.direction },
  { propName: 'height', prop: props.height },
  { propName: 'justify-content', prop: props.justifyContent },
  { propName: 'margin', prop: props.m },
  { propName: 'max-height', prop: props.maxH },
  { propName: 'min-height', prop: props.minH },
  { propName: 'max-width', prop: props.maxW },
  { propName: 'min-width', prop: props.minW },
  { propName: 'padding', prop: props.p },
  { propName: 'width', prop: props.width },
];

export const getBoxResponsiveCSS = (props: BoxResponsiveProps) => {
  const data = getBoxResponsiveCSSProperties(props);
  return getResponsiveCSS(data);
};

export const boxCSSPropsKeys: (keyof BoxCSSProps)[] = [
  'border',
  'borderRadius',
  'bg',
  'color',
  'cursor',
  'position',
  'shadow',
  'alignItems',
  'display',
  'direction',
  'height',
  'justifyContent',
  'm',
  'maxH',
  'minH',
  'maxW',
  'minW',
  'p',
  'width',
];
