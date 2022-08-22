import React from "react";
import styled from "styled-components";
import SpamBox from "segments/spam";

// Create Header
function Spambox(props) {

  // Render
  return (
    <FullWidth>
      <SpamBox currentTab="inbox" showFilter={props.showFilter}/>
    </FullWidth>
  );
}

const FullWidth = styled.div`
  width: 100%;
`;

// Export Default
export default Spambox;
