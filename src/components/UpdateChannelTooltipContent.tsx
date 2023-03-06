import { useRef } from 'react';
import styled from 'styled-components';
import { H2V2, ImageV2, ItemHV2, ItemVV2 } from './reusables/SharedStylingV2';

type UpdateChannelTooltipContentProps = {
  channelName: string;
  channelDescription: string;
  channelLogoSrc: string;
  height:number
};

const UpdateChannelTooltipContent = ({
  channelName,
  channelDescription,
  channelLogoSrc,
  height
}: UpdateChannelTooltipContentProps) => {

  return (
    <Container style={{borderRadius : height < 250 ? "0.125rem 1rem 1rem 1rem" : "1rem 1rem 1rem 0.125rem"}}>
      <TopHeading>Channel was recently updated</TopHeading>
      <TopSubHeading>Previously</TopSubHeading>
      <Content>
        <ChannelIconContainer>
          <ChannelIcon src={channelLogoSrc} />
        </ChannelIconContainer>
        <ChannelInfoContainer>
          <ChannelName>{channelName}</ChannelName>
          <ChannelDesc>{channelDescription}</ChannelDesc>
        </ChannelInfoContainer>
      </Content>
    </Container>
  );
};

const Container = styled(ItemVV2)`
  box-sizing: border-box;
  width: 18.75rem;
  // height: 7.5rem;
  // max-height: 7.5rem;
  background: ${(props) => props.theme.default.bg};
  // border-radius: 0.125rem 1rem 1rem 1rem;
  justify-content: flex-start;
  border: 1px solid rgba(173, 176, 190, 0.2);
  align-items: flex-start;
  padding: 0.75rem 0.25rem 0.75rem 1rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);

  @media (max-width:400px){
    width:16.75rem;
  }


`;

const TopHeading = styled(H2V2)`
  color: ${(props) => props.theme.tooltipTopHeading};
  font-weight: 500;
  font-size: 0.75rem;
`;

const TopSubHeading = styled(H2V2)`
  color: ${(props) => props.theme.tooltipTopSubHeading};
  font-weight: 300;
  font-size: 0.625rem;
`;

const Content = styled(ItemHV2)`
  align-items: center;
  margin-top:8px;
`;

const ChannelIconContainer = styled(ItemHV2)`
  width: 3rem;
  max-width: 2.94rem;
  height: 3rem;
  margin-right:8px;
`;

const ChannelIcon = styled(ImageV2)`
  height: 100%;
  width: 100%;
  border-radius: 0.6rem;
  border: ${(props) => `0.5px solid ${props.theme.tooltipIconBorderClr}`};
`;

const ChannelInfoContainer = styled(ItemVV2)`
  align-items: flex-start;
`;

const ChannelName = styled(H2V2)`
  color: ${(props) => props.theme.tooltipContentHeading};
  font-weight: 500;
  font-size: 0.75rem;
  text-align: left;
`;

const ChannelDesc = styled(H2V2)`
  color: ${(props) => props.theme.tooltipContentDesc};
  font-weight: 300;
  font-size: 9px;
  text-align: left;
  margin-top: 3px;
`;
export default UpdateChannelTooltipContent;
