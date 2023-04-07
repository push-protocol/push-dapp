import React from 'react';

import styled, { useTheme } from 'styled-components';
import { BsDashLg } from 'react-icons/bs';

import { ImageV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import PushSpaceIcon from 'assets/space/push-space.svg';

export const WelcomeSpaceContentBox = () => {
  const theme = useTheme();

  const InfoMessages = [
    { id: 1, content: 'Spaces are public and visible to everyone' },
    {
      id: 2,
      content: 'You can add upto 3 co-hosts, assign up to 10 speakers during alpha',
    },
    { id: 3, content: 'You can schedule spaces, add co-hosts and allow listeners to speack while spaces are active' },
  ];

  return (
    <WelcomeItem gap="25px">
      <WelcomeMainText theme={theme}>
        <ImageV2
          src={PushSpaceIcon}
          alt="spaceIcon"
          display="inline"
          width="auto"
          verticalAlign="middle"
          margin="0px 13px 0px 0px"
        />
        <WelcomeText>Welcome to Push Spaces</WelcomeText>
      </WelcomeMainText>

      <SpanV2
        color={theme.default.secondaryColor}
        fontSize="15px"
        fontWeight="400"
      >
        Spaces enable you to have live conversations with listeners
      </SpanV2>

      <WelcomeInfo>
        <SpanV2
          fontWeight="500"
          fontSize="15px"
          lineHeight="130%"
        >
          Push Space is in alpha and things might break.
        </SpanV2>

        <Atag
          href={'https://discord.gg/pushprotocol'}
          target="_blank"
        >
          We would love to hear your feedback
        </Atag>

        <ItemBody>
          {InfoMessages.map((item) => (
            <WelcomeContent key={item.id}>
              <BsDashLg className="icon" />
              <TextInfo>{item.content}</TextInfo>
            </WelcomeContent>
          ))}
        </ItemBody>
      </WelcomeInfo>
    </WelcomeItem>
  );
};

const WelcomeItem = styled(ItemVV2)`
  width: 395px;
  display: flex;
  justify-content: center;
  margin: auto auto;
  @media (max-width: 768px) {
    width: auto;
  }

  @media (min-width: 1000px) and (max-width: 1060px) {
    width: 95%;
  }
`;

const WelcomeContent = styled.div`
  width: 304px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  .icon {
    transform: rotate(-60deg);
    color: #d53893;
    min-width: 17px;
  }
`;

const ItemBody = styled.div`
  @media (min-width: 768px) and (max-height: 1080px) {
    overflow-y: scroll;
    height: 300px;
  }

  @media (min-width: 768px) and (max-height: 768px) {
    overflow-y: scroll;
    height: 150px;
  }

  @media (min-width: 768px) and (max-height: 500px) {
    overflow-y: scroll;
    height: 100px;
  }
`;

const TextInfo = styled.div`
  align-items: center;
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  color: ${(props) => props.theme.default.secondaryColor};
  width: 274px;
`;

const WelcomeMainText = styled(SpanV2)`
  background: ${(props) => props.theme.default.bg};
  box-sizing:border-box;
  padding: 20px;
  border-radius: 2px 28px 28px 28px;
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  width: 100%;
  color: ${(props) => props.theme.default.color};
  letter-spacing: -0.03em;
  @media only screen and (max-width: 1115px) and (min-width: 991px) {
    font-size: 26px;
    padding: 16px 33px;
    & img {
      width: 2rem;
    }
  }
  @media only screen and (max-width: 771px) and (min-width: 711px) {
    font-size: 23px;
    padding: 16px 30px;
    & img {
      width: 1.8rem;
    }
  }
`;

const WelcomeText = styled(SpanV2)`
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  width: 100%;
  color: ${(props) => props.theme.default.color};
  letter-spacing: -0.03em;
  @media (max-width: 768px) {
    display: none;
  }
`;

const WelcomeInfo = styled.div`
  background: ${(props) => props.theme.default.bg};
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 0px;
  border-radius: 28px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Atag = styled.a`
  font-weight: 500;
  font-size: 15px;
  line-height: 130%;
  text-align: center;
  color: #d53893;
  cursor: pointer;
  margin-bottom: 20px;
`;
