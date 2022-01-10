import React from "react";

import styled, { css } from 'styled-components';
import {Section, Content, Item, ItemH, Span, Anchor} from 'components/SharedStyling';

import { FaGasPump } from 'react-icons/fa';

// Faucet URLs
function Faucets() {
  // render
  return (
    <Section margin="5px 0px 0px 0px">
      <Content>
        <ItemH
          self="flex-end"
          bg="#fff"
          radius="8px"
          padding="30px 10px 10px 10px"
          border="1px solid #ededed"
          overflow="hidden"
          align="stretch"
        >
          <Span
            pos="absolute"
            top="10px"
            right="0px"
            padding="5px 10px"
            bg="#e20880"
            color="#fff"
            size="12px"
            weight="600"
          >
            Get Free Kovan Ether
          </Span>

          <Item margin="5px">
            <Anchor
              direction="column"
              href="https://faucet.metamask.io/"
              target="_blank"
              rel="nofollow"
            >
              <FaGasPump size={30} color="#674c9f"/>
              <Span
                bg="#000"
                color="#fff"
                size="10px"
                weight="600"
                spacing="0.1em"
                textAlign="center"
                padding="5px 10px"
                margin="10px 0px 0px 0px"
                textTransform="uppercase"
                radius="8px"
              >
                Metamask Faucet
              </Span>
            </Anchor>
          </Item>
          <Item margin="5px">
            <Anchor
              direction="column"
              href="https://gitter.im/kovan-testnet/faucet"
              target="_blank"
              rel="nofollow"
            >
              <FaGasPump size={30} color="#674c9f"/>
              <Span
                bg="#000"
                color="#fff"
                size="10px"
                weight="600"
                spacing="0.1em"
                textAlign="center"
                padding="5px 10px"
                margin="10px 0px 0px 0px"
                textTransform="uppercase"
                radius="8px"
              >
                Faucet Kovan
              </Span>
            </Anchor>
          </Item>

        </ItemH>
      </Content>
    </Section>
  );
}

// Export Default
export default Faucets;
