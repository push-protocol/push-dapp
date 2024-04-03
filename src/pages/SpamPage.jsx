// React + Web3 Essentials
import React from "react";

// External Packages
import ReactGA from "react-ga";
import styled from "styled-components";

// Internal Components
import Spambox from "segments/Spambox";
import APP_PATHS from "config/AppPaths";

// Create Header
function InboxPage() {
  ReactGA.pageview(APP_PATHS.Spam);

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
