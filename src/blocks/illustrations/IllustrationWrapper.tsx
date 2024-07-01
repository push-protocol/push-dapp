import { FC, ReactNode } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { IllustrationProps } from './Illustrations.types';

type IconWrapperProps = Omit<IllustrationProps, 'as' | 'ref'> & {
  /* Name of the component to be used as aria-label for accessibility */
  componentName: string;
  /* css prop provided by styled components to provide additional css to icon */
  css?: FlattenSimpleInterpolation;
  /* The svg contents of the icon */
  illustration: ReactNode;
};

type StyledIllustrationWrapperProps = {
  /* css prop provided by styled components to provide additional css to icon */
  css?: FlattenSimpleInterpolation;
  /* Child react nodes rendered by Wrapper */
  children: ReactNode;
  /** Set height of icon in pixels */
  height?: number;
  /** Set  height of icon in pixels */
  width?: number;
};

const StyledIllustrationWrapper = styled.span<StyledIllustrationWrapperProps>`
  /* Common Wrapper CSS */
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  display: inline-flex;
  font-size: inherit;

  /* Custom CSS applied via styled component css prop */
  ${(props) => props.css || ''}
`;

const IllustrationWrapper: FC<IconWrapperProps> = ({ componentName, illustration, height, width, ...restProps }) => {
  return (
    <StyledIllustrationWrapper
      aria-hidden="true"
      aria-label={componentName}
      height={height}
      role="img"
      width={width}
      {...restProps}
    >
      {illustration}
    </StyledIllustrationWrapper>
  );
};

export { IllustrationWrapper };
