import { BlocksColors } from '../Blocks.types';

export type IconProps = {
  /** Set icon fill color from design system */
  color?: BlocksColors;
  /** Set width and height of icon in pixels */
  size?: number;
  /** Whether to scale icon according to font-size. Sets width and height to 1em. */
  autoSize?: boolean;
  /** Props to pass directly to svg element */
  svgProps?: React.SVGProps<SVGSVGElement>;
} & Omit<React.HTMLProps<HTMLSpanElement>, 'color' | 'size'>;
