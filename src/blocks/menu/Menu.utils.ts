import { getResponsiveCSS } from '../Blocks.utils';

export const getMenuResponsiveCSS = (props: MenuResponsiveProps) => {
  const data = getMenuResponsiveCSSProperties(props);
  return getResponsiveCSS(data);
};
