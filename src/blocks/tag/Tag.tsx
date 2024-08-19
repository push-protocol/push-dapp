import { getTextVariantStyles } from 'blocks/Blocks.utils';
import { FC } from 'react';
import styled from 'styled-components';

export type TagVariant = 'default' | 'success' | 'danger' | 'warning' | 'info' | 'disabled';

export type TagProps = {
  label: string;
  variant?: TagVariant;
};

const StyledTagContainer = styled.div<{ variant: TagVariant }>`
  align-items: center;
  border-radius: var(--radius-xs);
  background: var(--components-tag-background-${({ variant }) => variant});
  display: flex;
  gap: var(--spacing-xxxs);
  padding: var(--spacing-none) var(--spacing-xxxs);
  width: max-content;
`;

const StyledTagText = styled.span<{ variant: TagVariant }>`
  ${({ variant }) => getTextVariantStyles('bes-semibold', `components-tag-text-${variant}`)}
`;

const StyledTagIcon = styled.div<{ variant: TagVariant }>`
  background: var(--components-tag-icon-${({ variant }) => variant});
  border-radius: var(--radius-lg);
  flex-shrink: 0;
  height: 10px;
  width: 10px;
`;

const Tag: FC<TagProps> = ({ label, variant = 'default' }) => {
  return (
    <StyledTagContainer variant={variant}>
      <StyledTagIcon variant={variant} />
      <StyledTagText variant={variant}>{label}</StyledTagText>
    </StyledTagContainer>
  );
};

export { Tag };
