import { getTextVariantStyles } from 'blocks/Blocks.utils';
import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { sizeMapping } from './Tag.constants';

export type TagVariant = 'default' | 'success' | 'danger' | 'warning' | 'info' | 'disabled';
export type SizeVariant = 'small' | 'medium';

export type TagProps = {
  icon?: ReactNode;
  label: string;
  variant?: TagVariant;
  size?: SizeVariant;
};

const StyledTagContainer = styled.div<{ variant: TagVariant; icon: TagProps['icon']; size: SizeVariant }>`
  align-items: center;
  border-radius: ${({ size }) => sizeMapping[size].borderRadius};
  background: var(--components-tag-background-${({ variant }) => variant});
  display: flex;
  gap: var(--spacing-xxxs);
  padding: ${({ size }) => sizeMapping[size].padding};
  width: max-content;
  height: ${({ size }) => sizeMapping[size].height};

  ${({ icon }) =>
    icon &&
    `
      [role='img'] {
        width: 14px;
        height: 14px;
      };
  `}
`;

const IconContainer = styled.span<{ variant: TagVariant }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--components-tag-text-${({ variant }) => variant});
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

const Tag: FC<TagProps> = ({ icon, label, variant = 'default', size = 'small' }) => {
  return (
    <StyledTagContainer
      variant={variant}
      icon={!!icon}
      size={size}
    >
      {icon ? <IconContainer variant={variant}>{icon}</IconContainer> : <StyledTagIcon variant={variant} />}
      <StyledTagText variant={variant}>{label}</StyledTagText>
    </StyledTagContainer>
  );
};

export { Tag };
