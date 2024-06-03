// React + Web3 Essentials
import { useEffect, useRef, useState } from 'react';

// External Packages
import styled from 'styled-components';

// Internal Compoonents
import Intro from 'components/chat/intro/Intro';
import Recommended from 'components/chat/recommended/Recommended';
import { ItemVV2 } from 'components/reusables/SharedStylingV2';

// Internal Configs
import { device } from 'config/Globals';

// Assets

// Interface

// Constants

// Main Component
const Welcome = ({ recommendedBg, onChatSelected }) => {
  // For ensuring scroll adjusts the display to start else it's centered
  const [isScrollNeeded, setIsScrollNeeded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkScrollNeeded = () => {
      const element = containerRef.current;
      if (element) {
        setIsScrollNeeded(element.scrollHeight > element.clientHeight);
      }
    };

    // Check on mount and updates
    checkScrollNeeded();

    // Optional: Re-check on window resize if your layout is responsive
    window.addEventListener('resize', checkScrollNeeded);
    return () => window.removeEventListener('resize', checkScrollNeeded);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <Container
      ref={containerRef}
      style={{
        justifyContent: isScrollNeeded ? 'flex-start' : 'center',
      }}
    >
      <IntroWrapper>
        <Intro />
      </IntroWrapper>
      <Recommended
        bg={recommendedBg}
        onChatSelected={onChatSelected}
      />
    </Container>
  );
};
export default Welcome;

// css styles
const Container = styled(ItemVV2)`
  padding: 24px;
  gap: 24px;
  height: inherit;
  width: 100%;

  flex-flow: column;

  overflow: auto;
  max-width: 400px;
  align-self: center;
  align-items: center;
`;

const IntroWrapper = styled(ItemVV2)`
  flex: initial;

  @media ${device.tablet} {
    display: none;
  }
`;
