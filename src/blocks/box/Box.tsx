import { forwardRef, ReactNode, HTMLAttributes } from 'react';
import styled from 'styled-components';

import { BoxCSSProps } from './Box.types';
import { boxCSSPropsKeys, getBoxResponsiveCSS } from './Box.utils';

export type BoxProps = {
  as?: 'div' | 'span';
  children?: ReactNode;
} & BoxCSSProps &
  HTMLAttributes<HTMLDivElement>;

const StyledBox = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !boxCSSPropsKeys.includes(prop as keyof BoxCSSProps) && defaultValidatorFn(prop),
})<BoxProps>`
  /* Responsive props */
  ${(props) => getBoxResponsiveCSS(props)}

  /* Non-responsive props */
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
  box-shadow: ${(props) => props.shadow};
  border-radius: ${(props) => props.borderRadius};
  cursor: ${(props) => props.cursor};
  border: ${(props) => props.border};
  position: ${(props) => props.position};
`;

const Box = forwardRef<HTMLElement, BoxProps>(({ as = 'div', ...props }, ref) => {
  return (
    <StyledBox
      as={as}
      ref={ref}
      {...props}
    />
  );
});

Box.displayName = 'Box';

export { Box };
