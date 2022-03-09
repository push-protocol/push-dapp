import React from "react";

import { useTheme } from 'styled-components';
import { Item, ItemH, Span, Anchor} from 'components/SharedStyling';

import { FaGasPump } from 'react-icons/fa';

// Faucet URLs
function Faucets() {
  const themes = useTheme();

  // render
  return (
    <ItemH
      self="flex-end"
      flex="initial"
      bg={`${themes.faucetBg}`}
      radius="8px"
      padding="30px 10px 10px 10px"
      margin="10px"
      border={`1px solid ${themes.faucetBorder}`}
      overflow="hidden"
      align="center"
    >
      <Span
        pos="absolute"
        top="10px"
        right="0px"
        padding="5px 10px"
        bg={`${themes.faucetHeader}`}
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
          <FaGasPump size={30} color={`${themes.faucetIcon}`}/>
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
          <FaGasPump size={30} color={`${themes.faucetIcon}`}/>
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
  );
}

// Export Default
export default Faucets;
