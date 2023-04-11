import { device } from 'config/Globals';
import * as React from 'react';
import styled from 'styled-components';

type TooltipProps = {
  tooltipContent: any;
  isDisabled?: boolean; // if isDisabled is undefined -> Tooltip doesnt have undefined behavior
  // for aligning the tooltip acc. to requirement
  placementProps?: {
    bottom?: string,
    right?:string,
    transform?: string,
    borderRadius?: string,
    width?: string,
    padding?:string
  },
  wrapperProps?: {},
  key?:any,
};

const Tooltip: React.FC<TooltipProps> = ({ children, tooltipContent, isDisabled, placementProps, wrapperProps }) => {
  let timeoutId: NodeJS.Timeout;
  const [active, setActive] = React.useState(false);

  const showTip = () => {
    if (!active) {
      // show the tooltip after 500ms
      timeoutId = setTimeout(() => {
        setActive(true);
      }, 500);
    }
  };

  const hideTip = () => {
    clearInterval(timeoutId);
    setActive(false);
  };

  React.useEffect(() => {
    if (isDisabled === false) {
      // if isDisabled has been changed to false then show the tooltip
      return showTip();
    }
  }, [isDisabled]);

return (
  <Wrapper
    style={wrapperProps}
    onMouseEnter={isDisabled ? () => { } : showTip}
    onFocus={isDisabled ? () => { } : showTip}
    onMouseLeave={isDisabled ? () => { } : hideTip}
    onBlur={isDisabled ? () => { } : hideTip}
  >
    <div>
      {children}

    </div>
    {!isDisabled && active && <Content id="channel" style={placementProps}>{tooltipContent}</Content>}
  </Wrapper>

);
};

const Wrapper = styled.div`
  width: 34%;
  min-width: 34%;
  max-width: 34%;
  height: fit-content;
  display: inline-block;
  position: relative;
  @media ${device.tablet} {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
  }
`;

const Content = styled.div`
  position: absolute;
  border-radius: 2px 12px 12px 12px;
  
  // padding: 0.5rem 1rem;
  color: #fff;
  background: #131313;
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  line-height: 21px;
  z-index: 10;
  &::before {
    bottom: 100%;
    border-bottom-color: #131313;
  }
`;

export default Tooltip;
