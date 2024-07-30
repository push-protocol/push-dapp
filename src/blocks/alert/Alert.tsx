import { ResponsiveProp } from 'blocks/Blocks.types';
import { FC, ReactNode } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { AlertVariant } from './Alert.types';

export type AlertProps = {
  /* Children pass to the Text component */
  children?: ReactNode;
  /* Extra css prop from styled components to apply custom css not supported by Text component */
  css?: FlattenSimpleInterpolation;
  /* Variant of the Alert */
  variant: AlertVariant;
  /*Alert Message */
  message: string;
  /* Render an alert Icon */
  icon?: ReactNode;
  /* Sets width css property */
  width?: ResponsiveProp<string>;
};

const AlertContainer = styled.div<{ width: AlertProps['width'] }>`
  display: flex;
  align-items: center;
  background: var(--surface-state-danger-subtle);
  border-radius: var(--radius-xs);
  padding: var(--spacing-xxs);

  width: ${({ width }) => width || 'inherit'};

  .message {
    color: var(--text-state-danger-bold);
    font-family: var(--font-family);
  }
`;

const Alert: FC<AlertProps> = ({ icon, message, width }) => {
  return (
    <AlertContainer width={width}>
      {icon && <span className="icon">{icon}</span>}
      {message && <span className="message">{message}</span>}
    </AlertContainer>
  );
};

export { Alert };
