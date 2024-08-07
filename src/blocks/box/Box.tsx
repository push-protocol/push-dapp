import { forwardRef } from 'react';
import styled from 'styled-components';

import { TransformedHTMLAttributes } from '../Blocks.types';
import { getBlocksBorder, getBlocksBorderRadius } from '../Blocks.utils';
import { BoxCSSProps, BoxComponentProps } from './Box.types';
import { getBoxResponsiveCSS } from './Box.utils';
import { boxRestrictedCSSPropKeys } from './Box.constants';
import { colorBrands } from 'blocks/theme/colors/colors.brands';

export type BoxProps = BoxCSSProps & BoxComponentProps & TransformedHTMLAttributes<HTMLDivElement>;

const StyledBox = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !boxRestrictedCSSPropKeys.includes(prop as keyof BoxCSSProps) && defaultValidatorFn(prop),
})<BoxProps>`
  /* Responsive props */
  ${(props) => getBoxResponsiveCSS(props)}

  /* Non-responsive props */
  color: ${(props) => (props?.color ? `var(--${props.color})` : ``)};
  background-color: ${(props) => (props?.backgroundColor ? `var(--${props.backgroundColor})` : ``)};
  box-shadow: ${(props) => props.boxShadow};
  border-radius: ${(props) => getBlocksBorderRadius(props.borderRadius)};
  cursor: ${(props) => props.cursor};
  overflow: ${(props) => props.overflow};
  border: ${(props) => getBlocksBorder(props.border)};
  position: ${(props) => props.position};

  // push custom scroll
  ${(props) =>
    props.customScrollbar &&
    `
    &::-webkit-scrollbar-track {
      background-color: none;
      border-radius: 9px;
    }

    &::-webkit-scrollbar {
      background-color: none;
      width: 4px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: ${colorBrands[`primary-500`]};
    }
  `}

  /* Extra CSS prop */
  ${(props) => props.css || ''}
`;
const Box = forwardRef<HTMLElement, BoxProps>(({ as = 'div', ...props }, ref) => (
  <StyledBox
    as={as}
    ref={ref}
    {...props}
  />
));

Box.displayName = 'Box';

export { Box };
