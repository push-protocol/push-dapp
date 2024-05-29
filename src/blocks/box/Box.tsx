import { forwardRef } from 'react';
import styled from 'styled-components';

import { BoxCSSProps, BoxExtraProps } from './Box.types';
import { boxCSSPropsKeys, getBoxResponsiveCSS } from './Box.utils';
import { BlockWithoutStyleProp } from 'blocks/Blocks.types';

export type BoxProps = BoxCSSProps & BoxExtraProps & BlockWithoutStyleProp<HTMLDivElement>;

const StyledBox = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !boxCSSPropsKeys.includes(prop as keyof BoxCSSProps) && defaultValidatorFn(prop),
})<BoxProps>`
  /* Responsive props */
  ${(props) => getBoxResponsiveCSS(props)}

  /* Extra CSS props */
  ${(props) => props.css || ''}

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
