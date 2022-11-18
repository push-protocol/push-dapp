// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';

// Internal Configs
import GLOBALS from 'config/Globals';

// Interfaces
interface ProgressBarPropsI {
  percent: number;
  color?: string;
  notice?: string;
  noticePositioning?: number;
}

// Constants
export const NOTICE_POSITIONING = {
  TOP: 1,
  BOTTOM: 2
}

// Create Progress Bar
const ProgressBar = ({ percent, color = GLOBALS.COLORS.PRIMARY_PINK, notice = null, noticePositioning = NOTICE_POSITIONING.BOTTOM }: ProgressBarPropsI) => {
  const theme = useTheme();

  return (
    <ItemVV2
      flexDirection={noticePositioning == NOTICE_POSITIONING.BOTTOM ? "column" : "column-reverse"}
    >
      <Progress
        percent={percent}
        color={color}
      />

      {notice &&
        <SpanV2
          color={theme.default.secondaryColor}
          fontWeight="400"
          fontSize="12px"
          textTransform="none"
          textAlign="center"
          letterSpacing="0.03em"
          margin={`${noticePositioning == NOTICE_POSITIONING.BOTTOM ? "5px" : 0} 0 ${noticePositioning == NOTICE_POSITIONING.TOP ? "5px" : 0} 0`}
        >
          {notice}
        </SpanV2>
      }
    </ItemVV2>
  );
};
export default ProgressBar;

const Progress = styled.div`
  background: ${GLOBALS.COLORS.PLACEHOLDER_DARK_GRAY};
  border-radius: 18px;
  height: 8px;
  overflow: hidden;
  width: 100%;
  position: relative;

  &:after {
    width: ${(props) => (props.percent ? props.percent : 0)}%;
    background: ${(props) => (props.color ? props.color : GLOBALS.COLORS.PRIMARY_PINK)};
    transition: width 0.25s;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    border-radius: 18px;
  }
`;
