import { getResponsiveCSS } from '../Blocks.utils';
import { SeparatorResponsiveCSSPropertiesData, SeparatorResponsiveProps } from './Separator.types';

const getSeparatorResponsiveCSSProperties = (
  props: SeparatorResponsiveProps
): SeparatorResponsiveCSSPropertiesData[] => [
  { propName: 'height', prop: props.height },
  { propName: 'margin', prop: props.margin },
  { propName: 'width', prop: props.width },
];

export const getSeparatorResponsiveCSS = (props: SeparatorResponsiveProps) => {
  const data = getSeparatorResponsiveCSSProperties(props);
  return getResponsiveCSS(data);
};
