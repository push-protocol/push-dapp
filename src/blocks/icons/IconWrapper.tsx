import { FC, ReactNode } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { IconProps } from './Icons.types';

type IconWrapperProps = Omit<IconProps, 'as' | 'ref'> & {
  /* Name of the component to be used as aria-label for accessibility */
  componentName: string;
  /* css prop provided by styled components to provide additional css to icon */
  css?: FlattenSimpleInterpolation;
  /* The svg contents of the icon */
  icon: ReactNode;
};

type StyledIconWrapperProps = {
  /* Color to be applied to the svg */
  color: string;
  /* css prop provided by styled components to provide additional css to icon */
  css?: FlattenSimpleInterpolation;
  /* Child react nodes rendered by Wrapper */
  children: ReactNode;
  /* height and width to b applied to the svg */
  size: string;
};

const StyledIconWrapper = styled.span<StyledIconWrapperProps>`
  /* Common Wrapper CSS */
  color: ${({ color }) => color};
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  display: inline-flex;
  font-size: inherit;

  /* Custom CSS applied via styled component css prop */
  ${(props) => props.css || ''}
`;

const IconWrapper: FC<IconWrapperProps> = ({
  autoSize,
  color: colorProp,
  componentName,
  icon,
  size: sizeProp,
  ...restProps
}) => {
  const color = colorProp ? `var(--${colorProp})` : 'currentColor';
  const size = sizeProp ? `${sizeProp}px` : autoSize ? '1em' : '16px';
  return (
    <StyledIconWrapper
      aria-hidden="true"
      aria-label={componentName}
      color={color}
      role="img"
      size={size}
      {...restProps}
    >
      {icon}
    </StyledIconWrapper>
  );
};

export { IconWrapper };
