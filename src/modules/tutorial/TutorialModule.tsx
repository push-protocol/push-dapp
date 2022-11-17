// React + Web3 Essentials
import React from "react";

// External Packages
import { useDispatch, useSelector } from "react-redux";
import styled, { useTheme } from 'styled-components';
import { BsChevronExpand } from 'react-icons/bs';

// Internal Components
import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import { setRun } from "redux/slices/userJourneySlice";
import { B, Button, Content, H2, H3, Item, Section, Span } from '../../primaries/SharedStyling';

// Internal Configs
import GLOBALS, { device, globalsMargin } from "config/Globals";

function TutorialModule() {
  const dispatch = useDispatch();
  const theme = useTheme();

  const { run } = useSelector((state: any) => state.userJourney);

  const onStart = () => {
    if (run === false) {
      dispatch(setRun(true));
      // dispatch(incrementStepIndex());
    }
  }

  // Render
  return (
    <Container>
      <ItemVV2>

        <ItemVV2 align="stretch" justify="flex-start" margin="0px 0px 40px 0px">
          <H2>
            <Span weight="400" size="32px" color={theme.color}>
              Live Walkthrough
            </Span>
          </H2>
          <Span
            color={theme.default.secondaryColor}
            weight="400"
            size="16px"
            textTransform="none"
            textAlign="center"
            spacing="0.03em"
            margin="0px 0px"
          >
            Let's walk you through the core functions of Push (EPNS), the communication protocol of Web3!
          </Span>
        </ItemVV2>

        <ItemVV2 justify="flex-start">
          <QnAItem>
            <Question
              onClick={() => { onStart() }}
              hover="#e20880"
            >
              <Span color={theme.color}>
              👉 Show me everything!
              </Span>
              <BsChevronExpand size={20} color={"#ddd"} />
            </Question>
          </QnAItem>
        </ItemVV2>

      </ItemVV2>
    </Container>
  );
}

// css style
const Container = styled(Section)`
	align-items: center;
	align-self: center;
	background: ${(props) => props.theme.default.bg};
	border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
	box-shadow: ${GLOBALS.ADJUSTMENTS.MODULE_BOX_SHADOW};
	display: flex;
	flex-direction: column;
	flex: initial;
	justify-content: center;
  max-width: 1200px;
  width: calc(100% - ${globalsMargin.MINI_MODULES.DESKTOP.RIGHT} - ${globalsMargin.MINI_MODULES.DESKTOP.LEFT} - ${GLOBALS.ADJUSTMENTS.PADDING.BIG} - ${GLOBALS.ADJUSTMENTS.PADDING.BIG});
  padding: ${GLOBALS.ADJUSTMENTS.PADDING.BIG};
	position: relative;
  margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(100% - ${globalsMargin.MINI_MODULES.TABLET.RIGHT} - ${globalsMargin.MINI_MODULES.TABLET.LEFT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT});
  }

  @media ${device.mobileM} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(100% - ${globalsMargin.MINI_MODULES.MOBILE.RIGHT} - ${globalsMargin.MINI_MODULES.MOBILE.LEFT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT});
  }
`;

const Question = styled(Button)`
  align-items: stretch;
  align-self: stretch;
`

const Answer = styled(Item)`
  align-items: stretch;
  align-self: stretch;

`

const QnAItem = styled(Item)`
  align-items: stretch;
  align-self: stretch;
  flex: auto;
  margin: 15px 0px;
  border: 1px solid ${props => props.theme.qnaBgBorder};
  border-radius: 10px;
  box-shadow: 0px 5px 20px -10px rgb(0 0 0 / 0.20);
  overflow: hidden;

  & ${Question} {
    background: ${props => props.theme.qnaBg};
    justify-content: flex-start;
    text-transform: uppercase;

    & ${Span} {
      font-weight: 400;
      letter-spacing: 0.2em;
      margin-left: 10px;
      flex: 1;
    }

    &:hover {
      & ${Span} {
        color: #fff;
      }
    }
  }

  & ${Answer} {
    border: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px 15px;
    align-items: flex-start;
    background: #fff;

    & ${Span} {
      line-height: 1.5em;
      margin: 10px;
      color: #000 ;
      font-size: 1.05em;
    }
  }
`

// Export Default
export default TutorialModule;