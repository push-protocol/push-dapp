import React from "react";
import ReactGA from "react-ga";
import styled from "styled-components";
import Spambox from "segments/Spambox";

// Create Header
function InboxPage() {
  ReactGA.pageview("/spam");

  // Render
  return (
    <Container>
      <Interface>
        <Spambox />
      </Interface>
    </Container>
  );
}

// css style
const Container = styled.div`
  flex: 1;
  display: block;
  flex-direction: column;
  min-height: calc(100vh - 100px);
`;

const Interface = styled.div`
  flex: 1;
  display: flex;

  margin-bottom: 15px;
  overflow: hidden;
`;

// Export Default
export default InboxPage;
