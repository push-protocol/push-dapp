import { FC, ReactNode } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { TransformedHTMLAttributes } from '../Blocks.types';
import { getTextVariantStyles } from '../Blocks.utils';

export type PillProps = {
  /* Child react nodes rendered by Pill */
  children?: ReactNode;
  /* Additional prop from styled components to apply custom css to Lozenge */
  css?: FlattenSimpleInterpolation;
  /* Decides the UI state of the component */
  isActive?: boolean;
} & TransformedHTMLAttributes<HTMLDivElement>;

const StyledPill = styled.div<PillProps>`
  align-items: center;
  border-radius: var(--radius-xl);
  background: var(--components-pill-background-${({ isActive }) => (isActive ? 'selected' : 'default')});
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 40px;
  justify-content: center;
  max-width: max-content;
  padding: var(--spacing-none) var(--spacing-sm);

  ${({ isActive }) =>
    getTextVariantStyles('bs-semibold', isActive ? 'components-pill-text-selected' : 'components-pill-text-default')}

  &:hover {
    ${({ isActive }) =>
      !isActive &&
      `background: var(--components-pill-background-hover);
    color: var(--components-pill-text-default);`}
  }

  /* Custom CSS applied via styled component css prop */
  ${(props) => props.css || ''}
`;

const Pill: FC<PillProps> = ({ children, isActive = false, onClick, ...props }) => {
  return (
    <StyledPill
      isActive={isActive}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledPill>
  );
};

export { Pill };
