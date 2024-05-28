import { forwardRef, ElementRef, ReactNode } from 'react';
import styled, { css } from 'styled-components';

type BoxElement = ElementRef<'div'>;

type DisplayProps = 'none' | 'inline' | 'inline-block' | 'block';

type ResponsiveDisplay = {
  [key in 'initial' | 'xs' | 'sm' | 'md' | 'lg' | 'xl']?: DisplayProps;
};

type PaddingValue = `s${number}`;

type ResponsivePadding = {
  [key in 'initial' | 'xs' | 'sm' | 'md' | 'lg' | 'xl']?: PaddingValue;
};
type PaddingProps = {
  p?: PaddingValue | ResponsivePadding;
  px?: PaddingValue | ResponsivePadding;
  py?: PaddingValue | ResponsivePadding;
  pt?: PaddingValue | ResponsivePadding;
  pr?: PaddingValue | ResponsivePadding;
  pb?: PaddingValue | ResponsivePadding;
  pl?: PaddingValue | ResponsivePadding;
};
type BoxProps = {
  as?: 'div' | 'span';
  display?: DisplayProps | ResponsiveDisplay;
  children: ReactNode;
} & PaddingProps;

const breakpoints = {
  initial: 0,
  xs: 520,
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1640,
};

type Breakpoint = keyof typeof breakpoints;
const generateResponsiveStyles = (prop: string, value: any) => {
  if (typeof value === 'object') {
    return Object.keys(value)
      .map(
        (key) =>
          `@media (max-width: ${breakpoints[key as Breakpoint]}px) {
            ${prop}: var(--${value[key as Breakpoint]});
          }`
      )
      .join('\n');
  }

  if (prop.includes('padding')) return `${prop}: var(--${value});`;

  return `${prop}: ${value};`;
};

export const responsiveDisplay = (display: any) => (display ? generateResponsiveStyles('display', display) : '');

export const responsivePadding = (padding: any, side: string) =>
  padding ? generateResponsiveStyles(`padding${side ? `-${side}` : ''}`, padding) : '';

const boxStyles = (props: BoxProps) => css`
  ${props ? responsiveDisplay(props.display) : ''}
  ${props ? responsivePadding(props.p, '') : ''}
  ${props ? responsivePadding(props.px, 'left') + responsivePadding(props.px, 'right') : ''}
  ${props ? responsivePadding(props.py, 'top') + responsivePadding(props.py, 'bottom') : ''}
  ${props ? responsivePadding(props.pt, 'top') : ''}
  ${props ? responsivePadding(props.pr, 'right') : ''}
  ${props ? responsivePadding(props.pb, 'bottom') : ''}
  ${props ? responsivePadding(props.pl, 'left') : ''}
`;

const DivBase = styled.div<BoxProps>`
  ${(props) => boxStyles(props)}
`;

const SpanBase = styled.span<BoxProps>`
  ${(props) => boxStyles(props)}
`;

// Wrap BoxBase with forwardRef
const Box = forwardRef<HTMLDivElement, BoxProps>(({ as = 'div', ...props }, ref) => {
  if (as === 'div')
    return (
      <DivBase
        ref={ref}
        {...props}
      />
    );

  return (
    <SpanBase
      ref={ref}
      {...props}
    />
  );
});

Box.displayName = 'Box';

export { Box };
