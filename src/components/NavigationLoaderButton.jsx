// React + Web3 Essentials
import React from "react";

// External Packages
import { useTheme } from "styled-components";

// Internal Components
import { ItemH, Span } from 'primaries/SharedStyling';

function NavigationLoaderButton() {
  const theme = useTheme();
  return (
    <div
      flex="1"
      radius="12px"
      align="stretch"
      padding="10px"
      style={{ cursor: 'pointer' }}
    >
      <ItemH align="center" style={{ marginLeft: '10px', padding: '2px 6px' }}>
        <img src="/loading.gif" style={{ margin: "0 5px", width: '20px' }} alt="Loader Button" />
        <Span
          flex="1"
          weight="400"
          spacing="normal"
          margin="0 4px"
          color={theme.leftBarFontColor}
        >
          Loading
        </Span>

      </ItemH>
    </div>
  );
}

export { NavigationLoaderButton };