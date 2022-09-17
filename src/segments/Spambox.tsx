import React from "react";
import styled from "styled-components";
import SpamBox from "segments/spam";

// Create Header
function Spambox(props) {

  // Render
  return (
    <FullWidth>
      <SpamBox showFilter={props.showFilter} setShowFilter={props.setShowFilter} search={props.search}
          setSearch={props.setSearch} />
    </FullWidth>
  );
}

const FullWidth = styled.div`
  width: 100%;
`;

// Export Default
export default Spambox;
