import React from "react";
import styled from "styled-components";
import SpamBox from "segments/spam";

// Create Header
function Spambox() {

  // Render
  return (
    <FullWidth>
      <SpamBox currentTab="inbox" />
    </FullWidth>
  );
}

const FullWidth = styled.div`
  width: 100%;
`;

// Export Default
export default Spambox;
