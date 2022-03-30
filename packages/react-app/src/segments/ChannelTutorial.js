import React from "react";

import { useTheme } from 'styled-components';
import { Item, ItemH, Span, Anchor} from 'components/SharedStyling';

import { FaPlay } from 'react-icons/fa';

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
const ChannelTutorial = ({ addr, bgColor }) => {
  const themes = useTheme();
  
  const [show, setShow] = React.useState(true);

  // render
  return (
    <MetaInfoDisplayer
      internalIcon={<FaPlay />}
      text="Short Tutorial"
      bgColor={bgColor}
      onClick={() => {
      }}
      onMouseEnter={() => {
      }}
      onMouseLeave={() => {
      }}
    />
  );
}

// Export Default
export default ChannelTutorial;
