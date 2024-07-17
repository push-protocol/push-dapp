import { forwardRef } from 'react';
import styled from 'styled-components';

import { useBlocksTheme } from '../Blocks.hooks';
import { TransformedHTMLAttributes, ModeProp } from '../Blocks.types';
import { getBlocksColor, getBlocksBorder, getBlocksBorderRadius } from '../Blocks.utils';
import { BoxCSSProps, BoxComponentProps } from './Box.types';
import { getBoxResponsiveCSS } from './Box.utils';
import { boxRestrictedCSSPropKeys } from './Box.constants';
import { colorBrands } from 'blocks/theme/colors/colors.brands';

export type BoxProps = BoxCSSProps & BoxComponentProps & TransformedHTMLAttributes<HTMLDivElement>;

const StyledBox = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !boxRestrictedCSSPropKeys.includes(prop as keyof BoxCSSProps) && defaultValidatorFn(prop),
})<BoxProps & ModeProp>`
  /* Responsive props */
  ${(props) => getBoxResponsiveCSS(props)}

  /* Non-responsive props */
  color: ${(props) => getBlocksColor(props.mode, props.color)};
  background-color: ${(props) => getBlocksColor(props.mode, props.backgroundColor)};
  box-shadow: ${(props) => props.boxShadow};
  border-radius: ${(props) => getBlocksBorderRadius(props.borderRadius)};
  cursor: ${(props) => props.cursor};
  overflow: ${(props) => props.overflow};
  border: ${(props) => getBlocksBorder(props.mode, props.border)};
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
const Box = forwardRef<HTMLElement, BoxProps>(({ as = 'div', ...props }, ref) => {
  const { mode } = useBlocksTheme();
  // TODO: We need to remove color dependency from BlocksColors | ThemeModeColors to fix this error
  return (
    <StyledBox
      as={as}
      mode={mode}
      ref={ref}
      {...props}
    />
  );
});

Box.displayName = 'Box';

export { Box };
