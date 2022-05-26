import React, { useRef, useState } from "react";
import Slider from "@material-ui/core/Slider";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import { useClickAway } from "react-use";
import {
  Section,
  Content,
  Item,
  H3,
  Span,
  Button,
} from "components/SharedStyling";

const MIN_STAKE_FEES = 50;

export default function ActivateChannelModal({
  activateChannel,
  loading,
  setChannelStakeFees,
  channelStakeFees,
  onClose,
}) {
  const popupRef = React.useRef(null);
  useClickAway(popupRef, onClose); //close the popoup when we click away
  return (
    <PopupOverlay>
      <PopupSlider ref={popupRef}>
        <Section>
          <Content padding="50px 0px 0px 0px">
            <Item align="flex-start" margin="0px 20px">
              <H3 color="#e20880">Set your staking fees in DAI</H3>
            </Item>

            <Item
              margin="-10px 20px 20px 20px"
              padding="20px 20px 10px 20px"
              bg="#f1f1f1"
            >
              <Slider
                defaultValue={MIN_STAKE_FEES}
                onChangeCommitted={(_, value) =>
                  setChannelStakeFees(Number(value))
                }
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={MIN_STAKE_FEES}
                marks
                min={MIN_STAKE_FEES}
                max={25000}
              />
              <Span
                weight="400"
                size="1.0em"
                textTransform="uppercase"
                spacing="0.2em"
              >
                Amount Staked: {channelStakeFees} DAI
              </Span>
            </Item>

            <Item self="stretch" align="stretch" margin="20px 0px 0px 0px">
              <Button
                bg="#e20880"
                color="#fff"
                flex="1"
                radius="0px"
                padding="20px 10px"
                onClick={activateChannel}
              >
                {loading ? (
                  <Loader type="Oval" color="#FFF" height={16} width={16} />
                ) : (
                  <Span
                    color="#fff"
                    weight="400"
                    textTransform="uppercase"
                    spacing="0.1em"
                  >
                    Reactivate Channel
                  </Span>
                )}
              </Button>
            </Item>
          </Content>
        </Section>
      </PopupSlider>
    </PopupOverlay>
  );
}

const PopupOverlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  justify-content: center;
  align-items: center;
`;

const PopupSlider = styled.div`
  height: 200px;
  width: 70vw;
  background: white;
`;
