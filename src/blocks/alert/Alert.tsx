import type { FC } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

import type { TransformedHTMLAttributes } from '../Blocks.types';
import type { AlertVariant } from './Alert.types';
import { alertVariants } from './Alert.utils';
import { Cross } from 'blocks/icons';
import { HoverableSVG } from 'blocks/hoverableSVG';
import { getTextVariantStyles } from 'blocks/Blocks.utils';

export type AlertProps = {
  /* Additional prop from styled components to apply custom css to Alert */
  css?: FlattenSimpleInterpolation;
  /* Sets the variant of the alert */
  variant: AlertVariant;
  /* Close function to be called on close button click */
  onClose?: () => void;
  /* Retry function to be called on action button click */
  onAction?: () => void;
  /* Text to be displayed on the action button */
  actionText?: string;
  /* Boolean to set the visibility of the icon */
  showIcon?: boolean;
  /* Header text for the alert */
  heading?: string;
  /* Description text for the alert */
  description?: string;
} & TransformedHTMLAttributes<HTMLDivElement>;

const StyledAlert = styled.div<AlertProps>`
  /* Common Alert CSS */

  display: flex;
  font-family: var(--font-family);
  border-radius: var(--radius-sm);
  justify-content: center;
  white-space: nowrap;
  padding: var(--spacing-xs);
  justify-content: space-between;
  ${({ variant }) => `
    border: var(--border-sm) solid var(--${alertVariants[variant].borderColor});
    background-color: var(--${alertVariants[variant].bgColor});
  `}

  /* Common icon css added through CSS class */
  .icon {
    display: flex;
    justify-content: center;
    margin-right: var(--spacing-xxxs);
    color: var(--${({ variant }) => alertVariants[variant].iconColor});
  }

  /* Custom CSS applied via styled component css prop */
  ${(props) => props.css || ''}
`;

const StyledLink = styled.div<{ variant: AlertVariant }>`
  /* Link CSS */
  text-decoration: none;
  cursor: pointer;
  color: var(--${({ variant }) => alertVariants[variant].ctaColor});
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-xxxs);
  flex: 1 0 0;
`;

const RightContainer = styled.div`
  display: flex;
  gap: var(--spacing-xs, 12px);
  align-items: center;
  height: 24px;
`;

const Heading = styled.p`
  ${() => getTextVariantStyles('h5-semibold', 'components-alert-text-default')}
`;

const Description = styled.p`
  ${() => getTextVariantStyles('bs-regular', 'components-alert-text-body')}
`;

const Alert: FC<AlertProps> = ({
  description,
  heading,
  onClose,
  onAction,
  actionText = 'Try Again',
  showIcon = true,
  variant = 'info',
  ...props
}) => {
  const { icon: Icon } = alertVariants[variant];

  return (
    <StyledAlert
      role="alert"
      {...{ variant }}
      {...props}
    >
      {showIcon && (
        <span className="icon">
          <Icon size={24} />
        </span>
      )}
      <TextContainer>
        {heading && <Heading>{heading}</Heading>}
        {description && <Description>{description}</Description>}
      </TextContainer>
      <RightContainer>
        {onAction && (
          <StyledLink
            variant={variant}
            onClick={onAction}
          >
            {actionText}
          </StyledLink>
        )}
        {onClose && (
          <HoverableSVG
            icon={
              <Cross
                size={24}
                color="icon-primary"
              />
            }
            onClick={onClose}
          />
        )}
      </RightContainer>
    </StyledAlert>
  );
};

Alert.displayName = 'Alert';

export { Alert };
