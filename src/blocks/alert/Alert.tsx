import type { ReactNode, FC } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

import type { TransformedHTMLAttributes } from '../Blocks.types';
import type { AlertVariant } from './Alert.types';
import { alertVariants } from './Alert.utils';
import { Cross } from 'blocks/icons';
import { HoverableSVG } from 'blocks/hoverableSVG';
import type { ThemeColors } from 'blocks/theme/Theme.types';
import { getTextVariantStyles } from 'blocks/Blocks.utils';

export type AlertProps = {
  /* Child react nodes rendered by Box */
  children?: ReactNode;
  /* Additional prop from styled components to apply custom css to Alert */
  css?: FlattenSimpleInterpolation;
  /* Sets the variant of the alert */
  variant?: AlertVariant;
  /* Boolean to set the alert as closable */
  closeable?: boolean;
  /* Close function to be called on close button click */
  onClose?: () => void;
  /* Boolean to set the alert as retryable */
  retryable?: boolean;
  /* Retry function to be called on retry button click */
  onRetry?: () => void;
  /* Text to be displayed on the retry button */
  retryText?: string;
  /* Boolean to set the visibility of the icon */
  showIcon?: boolean;
  /* Header text for the alert */
  heading?: string;
  /* Description text for the alert */
  description?: string;
} & TransformedHTMLAttributes<HTMLDivElement>;

const StyledAlert = styled.div<AlertProps & { iconColor: ThemeColors; borderColor: ThemeColors; bgColor: ThemeColors }>`
  /* Common Alert CSS */

  display: flex;
  font-family: var(--font-family);
  border-radius: var(--radius-sm);
  justify-content: center;
  white-space: nowrap;
  padding: 12px;
  justify-content: space-between;
  border: 1px solid var(--${({ borderColor }) => borderColor});
  background-color: var(--${({ bgColor }) => bgColor});

  /* Common icon css added through CSS class */
  .icon {
    display: flex;
    justify-content: center;
    margin-right: var(--spacing-xxxs);
    color: var(--${({ iconColor }) => iconColor});
  }

  /* Custom CSS applied via styled component css prop */
  ${(props) => props.css || ''}
`;

const StyledLink = styled.div<{ ctaColor: ThemeColors }>`
  /* Link CSS */
  text-decoration: none;
  cursor: pointer;
  color: var(--${({ ctaColor }) => ctaColor});
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
  closeable = true,
  description,
  heading,
  onClose,
  onRetry,
  retryable = true,
  retryText = 'Try Again',
  showIcon = true,
  variant = 'info',
  ...props
}) => {
  const { icon: Icon, iconColor, borderColor, bgColor, ctaColor } = alertVariants[variant];

  return (
    <StyledAlert
      role="alert"
      {...{ variant, iconColor, borderColor, bgColor }}
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
        {retryable && (
          <StyledLink
            ctaColor={ctaColor}
            onClick={onRetry}
          >
            {retryText}
          </StyledLink>
        )}
        {closeable && (
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
