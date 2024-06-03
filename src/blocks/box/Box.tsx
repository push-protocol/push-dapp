import { forwardRef } from 'react';
import styled from 'styled-components';

import { BlockWithoutStyleProp } from '../Blocks.types';
import { getBlocksColor } from '../Blocks.utils';
import { BoxCSSProps, BoxComponentProps } from './Box.types';
import { boxCSSPropsKeys, getBoxResponsiveCSS } from './Box.utils';

export type BoxProps = BoxCSSProps & BoxComponentProps & BlockWithoutStyleProp<HTMLDivElement>;

const StyledBox = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !boxCSSPropsKeys.includes(prop as keyof BoxCSSProps) && defaultValidatorFn(prop),
})<BoxProps>`
  /* Responsive props */
  ${(props) => getBoxResponsiveCSS(props)}

  /* Non-responsive props */
  color: ${(props) => getBlocksColor(props.color)};
  background-color: ${(props) => getBlocksColor(props.backgroundColor)};
  box-shadow: ${(props) => props.boxShadow};
  border-radius: ${(props) => props.borderRadius};
  cursor: ${(props) => props.cursor};
  border: ${(props) => props.border};
  position: ${(props) => props.position};

  /* Extra CSS prop */
  ${(props) => props.css || ''}
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
