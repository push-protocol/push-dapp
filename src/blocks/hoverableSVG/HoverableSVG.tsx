import { FC } from 'react';
import styled from 'styled-components';
import { BlocksSpaceType, ModeProp, TransformedHTMLAttributes } from '../Blocks.types';
import { getBlocksBorderRadius } from '../Blocks.utils';
import { IconColors, SurfaceColors, ThemeBorderRadius } from '../theme/Theme.types';

export type HoverableSVGProps = {
  /* Icon component */
  icon: React.ReactNode;
  /* Sets the initial color for SVG */
  defaultColor?: IconColors;
  /* Sets button as disabled */
  disabled?: boolean;
  /* Sets the hover color for SVG */
  hoverColor?: IconColors;
  /* Sets the initial background color for SVG */
  defaultBackground?: SurfaceColors;
  /* Sets the initial background color for SVG */
  hoverBackground?: SurfaceColors;
  /* Sets the padding for SVG button container */
  padding?: BlocksSpaceType;
  /* Sets the margin for SVG button container */
  margin?: BlocksSpaceType;
  /* Sets the margin for SVG button container */
  borderRadius?: ThemeBorderRadius;
} & TransformedHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['mode'].includes(prop) && defaultValidatorFn(prop),
})<Omit<HoverableSVGProps, 'icon'>>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--${(props) => props.padding || 's0'});
  margin: var(--${(props) => props.margin || 's0'});
  border-radius: ${(props) => getBlocksBorderRadius(props.borderRadius)};
  background-color: ${({ defaultBackground }) => defaultBackground || 'transparent'};
  color: ${({ defaultColor }) => defaultColor || 'inherit'};
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s, color 0.3s;
  height: fit-content;
  &:hover {
    background-color: ${({ hoverBackground }) => hoverBackground || 'transparent'};
    color: ${({ hoverColor }) => hoverColor || 'inherit'};
  }
  &:disabled > span {
    color: var(--icon-disabled);
  }
`;
const HoverableSVG: FC<HoverableSVGProps> = ({
  icon,
  defaultColor,
  disabled,
  hoverColor,
  defaultBackground,
  hoverBackground,
  padding,
  margin,
  borderRadius,
  ...props
}) => {
  return (
    <StyledButton
      defaultColor={defaultColor}
      hoverColor={hoverColor}
      defaultBackground={defaultBackground}
      disabled={disabled}
      hoverBackground={hoverBackground}
      padding={padding}
      margin={margin}
      borderRadius={borderRadius}
      {...props}
    >
      {icon}
    </StyledButton>
  );
};
export { HoverableSVG };
