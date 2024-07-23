import { useBlocksTheme } from "blocks/Blocks.hooks";
import { BlocksColors, ModeProp, ResponsiveProp, ThemeModeColors } from "blocks/Blocks.types";
import { forwardRef, ReactNode } from "react";
import styled, { FlattenSimpleInterpolation } from "styled-components";
import { AlertHTMLTags, AlertVariant } from "./Alert.types";
import { ThemeColors } from "blocks/theme/Theme.types";


type AlertProps = {
  /* Sets the html tag for Text component */
  as?: AlertHTMLTags;
  /* Children pass to the Text component */
  children?: ReactNode;
  /* Sets the css property for text color */
  color?: BlocksColors | ThemeModeColors | ThemeColors;
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
}

const AlertContainer = styled.div<AlertProps & ModeProp>`
  display:flex;
  align-items:center;
  background: var(--surface-state-danger-subtle, #FFECEC);
  border-radius: var(--radius-xs, 12px);
 padding: var(--s2);

  width: ${({ width }) => width || 'inherit'};



  .message{
    color: var(--text-state-danger-bold, #F11F1F);
     font-family: var(--font-family);
  }

`

const Alert = forwardRef<HTMLElement, AlertProps>(({ message, icon, ...props }, ref) => {
  const { mode } = useBlocksTheme();
  return (
    // TODO: We need to remove color dependency from BlocksColors | ThemeModeColors to fix this error
    <AlertContainer
      mode={mode}
      ref={ref}
      {...props}
    >
      {icon && <span className="icon">{icon}</span>}
      {message && <span className="message">{message}</span>}
    </AlertContainer>
  );
});

export { Alert };

