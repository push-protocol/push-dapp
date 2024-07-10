export type IllustrationProps = {
  /** Set height of icon in pixels */
  height?: number;
  /** Set  height of icon in pixels */
  width?: number;
  /** Props to pass directly to svg element */
  svgProps?: React.SVGProps<SVGSVGElement>;
} & Omit<React.HTMLProps<HTMLSpanElement>, 'color' | 'size'>;
