import { ReactNode, forwardRef } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { BlockWithoutStyleProp, BlocksColors } from '../Blocks.types';
import { getBlocksColor } from '../Blocks.utils';
import { TextAlign, TextHTMLTags, TextTransform, TextVariants } from './Text.types';
import { getVariantStyles } from './Text.utils';

export type TextProps = {
  /* Sets the html tag for Text component */
  as?: TextHTMLTags;
  /* Sets css property for the content alignment */
  align?: TextAlign;
  /* Children pass to the Text component */
  children?: ReactNode;
  /* Sets the css property for text color */
  color?: BlocksColors;
  /* Extra css prop from styled components to apply custom css not supported by Text component */
  css?: FlattenSimpleInterpolation;
  /* For truncating the contents with ... when there's container overflow */
  ellipsis?: boolean;
  /* For taking max available width of parent container */
  fullWidth?: boolean;
  /* To limit the number of lines the Text component will show */
  numberOfLines?: number;
  /* Sets the text-transform css property */
  transform?: TextTransform;
  /* Design system variant of the Text component */
  variant?: TextVariants;
  /* Sets the css wrap property to move the text to next line in case of overflow */
  wrap?: boolean;
} & BlockWithoutStyleProp<HTMLParagraphElement | HTMLSpanElement>;

const StyledText = styled.p<TextProps>`
  /* Variant CSS */
  ${({ variant }) => getVariantStyles(variant)}

  color: ${({ color }) => getBlocksColor(color)};
  font-family: var(--font-family);
  margin: 0px;
  text-align: ${({ align }) => align};
  text-transform: ${({ transform }) => transform};

  /* Ellipsis for single line overflow */
  ${({ ellipsis }) =>
    ellipsis &&
    `
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `}

  /* Text wrapping */
  ${({ wrap }) =>
    wrap &&
    `
    white-space: normal;
    word-wrap: break-word;
  `}

  /* Limit number of lines */
  ${({ numberOfLines }) =>
    numberOfLines &&
    `
    display: -webkit-box;
    -webkit-line-clamp: ${numberOfLines};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `}

  /* Full width of parent container */
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  /* Extra CSS props */
  ${(props) => props.css || ''}
`;

const Text = forwardRef<HTMLElement, TextProps>(({ as = 'p', ...props }, ref) => {
  return (
    <StyledText
      as={as}
      ref={ref}
      {...props}
    />
  );
});

Text.displayName = 'Text';

export { Text };
