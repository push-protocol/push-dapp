import { FC } from 'react';
import styled from 'styled-components';

import type { MenuProps } from './Menu.types';
import { menuCSSPropsKeys } from './Menu.constants';

const StyledMenu = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !menuCSSPropsKeys.includes(prop as keyof MenuProps) && defaultValidatorFn(prop),
})<MenuProps>`
  display: flex;
  flex-direction: column;
  background-color: var(--surface-primary);
  border: var(--border-sm) solid var(--stroke-secondary);
  border-radius: var(--radius-xs);
  padding: var(--spacing-xxs);
  margin: var(--spacing-none);
  gap: var(--spacing-xs);

  /* Menu non-responsive styles */
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth || '145px'};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};

  /* Extra CSS props */
  ${(props) => props.css || ''}
`;

const Menu: FC<MenuProps> = ({ children, ...props }) => <StyledMenu {...props}>{children}</StyledMenu>;

Menu.displayName = 'Menu';

export { Menu };
