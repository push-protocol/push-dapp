import { device } from 'config/Globals';
import * as React from 'react';
import styled from 'styled-components';

type TooltipProps = {
  tooltipContent: string;
  isDisabled?: false; // by default tooltip is not diabled
  // for aligning the tooltip acc. to requirement
  placementProps?: {
    bottom?: string,
    right?:string,
    transform?: string
  },
  wrapperProps?:{}
};

const Tooltip: React.FC<TooltipProps> = ({ children, tooltipContent, isDisabled, placementProps, wrapperProps }) => {
  let timeoutId: NodeJS.Timeout;
  const [active, setActive] = React.useState(false);

  const showTip = () => {
    if(!active){
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

  React.useEffect(()=>{
    if(!isDisabled){
        // if isDisabled has been changed to false then show the tooltip
        return showTip();
    }
  }, [isDisabled]);

  return (
    <Wrapper
      style={wrapperProps}
      onMouseEnter={isDisabled ? () => {} : showTip}
      onFocus={isDisabled ? () => {} : showTip}
      onMouseLeave={isDisabled ? () => {} : hideTip}
      onBlur={isDisabled ? () => {} : hideTip}
    >
      {children}
      {!isDisabled && active && <Content style={placementProps}>{tooltipContent}</Content>}
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
  width: 200px;
  position: absolute;
  border-radius: 2px 12px 12px 12px;
  padding: 0.5rem 1rem;
  color: #fff;
  background: #131313;
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 21px;
  z-index: 2;
  &::before {
    bottom: 100%;
    border-bottom-color: #131313;
  }
`;

export default Tooltip;
