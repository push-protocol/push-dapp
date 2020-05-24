import React from "react";
import styled, { keyframes } from 'styled-components';
import { AnimateOnChange } from 'react-animation'

// Create Header
function Bell({ badgeCount, bellPressedCB, width, height }) {
  const [badge, setBadge] = React.useState(0);
  const [ring, setRing] = React.useState(false);

  React.useEffect(() => {
    // Set new badge count and ring the bell
    setBadge(badgeCount);
    setRing(true);
  }, [badgeCount]);

  return (
    <Container
      onClick={() => {
        if (bellPressedCB) {bellPressedCB();}
      }}
      width={width}
      height={height}
    >
      <BellImage ring={ring} src="./bell.png" width={width} height={height} />
      <BellImageAbs src="./bellball.png" width={width} height={height} />
      <BellImageAbs src="./ring.png" width={width} height={height} />
      {badge != 0 &&
        <AnimateOnChange
          animationIn="fadeIn"
          animationOut="fadeOut"
          durationOut={200}
        >
          <Badge>{badge}</Badge>
        </AnimateOnChange>
      }
    </Container>
  );
}

// css styles
const Container = styled.button`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  position: relative;
  height: ${props => props.height || 40}px;
  width: ${props => props.width || 40}px;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
  }
`

const BellImage = styled.img`
  position: absolute;
  height: ${props => props.height || 40}px;
  width: ${props => props.width || 40}px;
`

const BellImageAbs = styled(BellImage)`
  left: 0,
`

const Badge = styled.span`
  position: absolute;
  font-size: 10px;
  color: #fff;
  padding: 2px 4px;
  border-radius: 100%;
  background: rgba(208.0, 44.0, 30.0, 1.0);
  top: 0px;
  left: 5px;
  font-weight: bold;
`

// Export Default
export default Bell;
