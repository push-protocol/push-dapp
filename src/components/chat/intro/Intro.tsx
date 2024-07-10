// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { introMsgs } from './Intro.config';

// Internal Configs

// Assets
import HandwaveIcon from 'assets/chat/handwave.svg?react';
import { introIcons } from 'assets/chat/intro';

// Interface

// Constants

// Main Component
const Intro = () => {
  // Get Theme
  const theme = useTheme();

  return (
    <Container>
      <ItemHV2 gap="5px">
        <WelcomeText>Say</WelcomeText>
        <HandwaveIcon size="32px" />
        <WelcomeText>to Push Chat!</WelcomeText>
      </ItemHV2>
      <ItemVV2 gap="24px">
        {introMsgs.map((item) => (
          <ItemHV2
            key={item.id}
            gap="12px"
          >
            <ImageV2
              src={introIcons[item.image]}
              alt="wave"
              display="inline"
              width="auto"
              verticalAlign="middle"
            />
            <ItemVV2 alignItems="baseline">
              <SpanV2
                fontSize="17px"
                color={theme.default.color}
                fontWeight="500"
                lineHeight="22px"
              >
                {item.heading}
              </SpanV2>
              <SpanV2
                fontSize="15px"
                color={theme.default.secondaryColor}
                fontWeight="400"
                lineHeight="19px"
                textAlign="left"
              >
                {item.subHeading}
              </SpanV2>
            </ItemVV2>
          </ItemHV2>
        ))}
      </ItemVV2>
    </Container>
  );
};
export default Intro;

// css styles
const Container = styled(ItemVV2)`
  background: ${(props) => props.theme.chat.modulesBg || 'transparent'};
  padding: 24px;
  gap: 24px;
  flex: none;
  border-radius: 4px 24px 24px 24px;
`;

const WelcomeText = styled(SpanV2)`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: ${(props) => props.theme.default.color};
  letter-spacing: normal;
  line-height: 141%;
`;
