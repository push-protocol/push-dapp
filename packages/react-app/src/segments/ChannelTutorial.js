import React from "react";

import styled, { useTheme } from 'styled-components';
import { Item, ItemH, Image, Span, Anchor, Button} from 'components/SharedStyling';

import { FaPlay, FaShareSquare, FaYoutube } from 'react-icons/fa';

import MetaInfoDisplayer from "components/MetaInfoDisplayer";

import channelTuts from "config/channelTuts";

// Check channel has tutorial
export const isChannelTutorialized = (addr) => {
  let keyFound = false;
  Object.entries(channelTuts).forEach(([key, value]) => {
    if (channelTuts[key].maintainer === addr) {
      keyFound = true;
      return;
    }
  });

  return keyFound;
}

// Channel Tutorial
const ChannelTutorial = ({ addr, bgColor, loadTeaser, playTeaser }) => {
  const themes = useTheme();

  // set state
  const [showTuts, setShowTuts] = React.useState(false);

  // helper functions
  const getChannelTutItem = (addr) => {
    let item = null;

    Object.entries(channelTuts).forEach(([key, value]) => {
      if (channelTuts[key].maintainer === addr) {
        item = channelTuts[key];
        return;
      }
    });

    return item;
  }

  const item = getChannelTutItem(addr);

  // render
  return (
    <Item
      flex="initial"
      onMouseEnter={() => {
        setShowTuts(true);
        console.log("enter")
      }}
      onMouseLeave={() => {
        setShowTuts(false);
        console.log("exit")
      }}
      zIndex="10"
    >
      {showTuts &&
        <Item
          position="absolute"
          width="280px"
          bottom="0px"
          padding="0px 0px 40px 0px"
        >
          <TutsInner
            bg={themes.backgroundBG}
            padding="10px"
            border={`1px solid ${themes.borderBg}`}
          >
            {item.userjourneyshort && 
              <Item>
                <Span
                  bg={themes.viewChannelTutsTitleBg}
                  color="#fff"
                  padding="4px 10px"
                  margin="0px 0px 10px 0px"
                  self="flex-end"
                  spacing="0.1em"
                  textTransform="uppercase"
                  size="bold"
                >
                  Opt-in to enable
                </Span>
                <Image
                  src={`./tuts/${item.userjourneyshort}/${item.userjourneyshort}_${themes.scheme}.png`}
                  srcSet={`./tuts/${item.userjourneyshort}/${item.userjourneyshort}_${themes.scheme}@2x.png 2x, ./tuts/${item.userjourneyshort}/${item.userjourneyshort}_${themes.scheme}@3x.png 3x`}
                  alt={`${item.alt}`}
                />
              </Item>
            }

            <ItemH
              padding="10px 0px 0px 0px"
              justify="space-between"
              self="stretch"
            >
              {item.userjourneyyoutube && 
                <Button
                  bg={themes.viewChannelTutsButtonBg}
                  color='#fff'
                  radius="4px"
                  padding="5px 10px"
                  onClick={() => {
                    setShowTuts(false);
                    loadTeaser(item.userjourneyyoutube);
                    playTeaser(true);
                  }}
                >
                  <Span
                    margin="0px 5px 0px 0px"
                    weight="bold"
                    color='#fff'
                  >
                    User Journey
                  </Span>
                  <FaYoutube size="20px" />
                </Button>
              }
              
              {item.article && 
                <Button
                  bg={themes.viewChannelTutsButtonBg}
                  color='#fff'
                  radius="4px"
                  padding="5px 10px"
                  onClick={() => {
                    setShowTuts(false);
                    window.open(`${item.article}`, "_blank") //to open new page
                  }}
                >
                  <FaShareSquare size="20px" />
                </Button>
              }
            </ItemH>
          </TutsInner>
        </Item>
      }

      <MetaInfoDisplayer
        internalIcon={<FaPlay />}
        text="Short Tutorial"
        bgColor={bgColor}
      />
    </Item>
  );
}

// CSS STYLES
const TutsInner = styled(Item)`
  border-radius: 10px;
  box-shadow: 0px 15px 20px -5px rgb(0 0 0 / 10%);
`

// Export Default
export default ChannelTutorial;
