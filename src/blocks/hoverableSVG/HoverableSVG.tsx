import { FC } from 'react';
import styled from 'styled-components';
import { useBlocksTheme } from '../Blocks.hooks';
import {
  BlocksColors,
  ThemeModeColors,
  SpaceType,
  ModeProp,
  TransformedHTMLAttributes,
  RadiusType,
} from '../Blocks.types';
import { getBlocksColor, getBlocksBorderRadius } from '../Blocks.utils';
export type HoverableSVGProps = {
  /* Icon component */
  icon: React.ReactNode;
  /* Sets the initial color for SVG */
  defaultColor?: BlocksColors | ThemeModeColors;
  /* Sets button as disabled */
  disabled?: boolean;
  /* Sets the hover color for SVG */
  hoverColor?: BlocksColors | ThemeModeColors;
  /* Sets the initial background color for SVG */
  defaultBackground?: BlocksColors | ThemeModeColors;
  /* Sets the initial background color for SVG */
  hoverBackground?: BlocksColors | ThemeModeColors;
  /* Sets the padding for SVG button container */
  padding?: SpaceType;
  /* Sets the margin for SVG button container */
  margin?: SpaceType;
  /* Sets the margin for SVG button container */
  borderRadius?: RadiusType;
} & TransformedHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['mode'].includes(prop) && defaultValidatorFn(prop),
})<Omit<HoverableSVGProps, 'icon'> & ModeProp>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--${(props) => props.padding || 's0'});
  margin: var(--${(props) => props.margin || 's0'});
  border-radius: ${(props) => getBlocksBorderRadius(props.borderRadius)};
  background-color: ${({ defaultBackground, mode }) => getBlocksColor(mode, defaultBackground) || 'transparent'};
  color: ${({ mode, defaultColor }) => getBlocksColor(mode, defaultColor) || 'inherit'};
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s, color 0.3s;
  height: fit-content;
  &:hover {
    background-color: ${({ mode, hoverBackground }) => getBlocksColor(mode, hoverBackground) || 'transparent'};
    color: ${({ mode, hoverColor }) => getBlocksColor(mode, hoverColor) || 'inherit'};
  }
  &:disabled > span {
    color: var(--${({ mode }) => (mode === 'dark' ? 'gray-700' : 'gray-300')});
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
  const { mode } = useBlocksTheme();
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
      mode={mode}
      {...props}
    >
      {icon}
    </StyledButton>
  );
};
export { HoverableSVG };
