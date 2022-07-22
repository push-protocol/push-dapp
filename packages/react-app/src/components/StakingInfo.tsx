import React from "react";
import { Button, Content, Item, Section, Span } from "primaries/SharedStyling";

const StakingInfo = ({channelStakeFees, setStakeFeesChoosen, setStepFlow}) => {
  return (
    <Section>
      <Content padding="50px 0px 0px 0px">
        <Item
          margin="-10px 20px 20px 20px"
          padding="20px 20px 10px 20px"
          bg="#f1f1f1"
        >
          <Span
            weight="400"
            size="1.0em"
            textTransform="uppercase"
            spacing="0.2em"
          >
            Amount Need to be Staked: {channelStakeFees} DAI
          </Span>
        </Item>

        <Item self="stretch" align="stretch" margin="20px 0px 0px 0px">
          <Button
            bg="#e20880"
            color="#fff"
            flex="1"
            radius="0px"
            padding="20px 10px"
            onClick={() => {
              setStakeFeesChoosen(true);
              setStepFlow(3);
            }}
          >
            <Span
              color="#fff"
              weight="400"
              textTransform="uppercase"
              spacing="0.1em"
            >
              Continue
            </Span>
          </Button>
        </Item>
      </Content>
    </Section>
  );
};

export default StakingInfo;