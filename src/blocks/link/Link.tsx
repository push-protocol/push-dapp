import { FC } from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

import { useBlocksTheme } from '../Blocks.hooks';
import { TransformedHTMLAttributes, ModeProp } from '../Blocks.types';
import { getBlocksColor } from '../Blocks.utils';
import { Text, TextProps } from '../text';

export type LinkProps = RouterLinkProps & {
  css?: FlattenSimpleInterpolation;
  textProps?: TextProps;
  isText?: boolean;
} & TransformedHTMLAttributes<HTMLAnchorElement>;

const StyledLink = styled(RouterLink).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['mode'].includes(prop) && defaultValidatorFn(prop),
})<LinkProps & ModeProp>`
  /* Link CSS */

  text-decoration: none;

  &:hover > * {
    color: ${({ mode, isText }) => (isText ? getBlocksColor(mode, { light: 'pink-600', dark: 'pink-400' }) : '')};
  }

  /* Extra CSS props */
  ${(props) => props.css || ''}
`;

const Link: FC<LinkProps> = ({ textProps, isText = true, ...props }) => {
  const { mode } = useBlocksTheme();
  return (
    <StyledLink
      mode={mode}
      isText={isText}
      {...props}
    >
      {isText ? <Text {...textProps}>{props?.children}</Text> : props.children}
    </StyledLink>
  );
};

Link.displayName = 'Link';

export { Link };
