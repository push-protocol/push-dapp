// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { ThemeProvider, useTheme } from 'styled-components';

// Internal Components
import { Content, Item, Section } from '../primaries/SharedStyling';

function ComingSoonPage(props) {
  const themes = useTheme();

  // Render
  return (
    <ThemeProvider theme={themes}>
      <Section style={{ minHeight: '60vh' }}>
        <Content padding="0px 20px 0px">
          <Item align="center">
            {console.info(props.theme)}
            <Heading
              color="#333"
              spacing="normal"
              size="4rem"
              weight={700}
            >
              Coming soon.
            </Heading>
          </Item>
        </Content>
      </Section>
    </ThemeProvider>
  );
}

const Heading = styled.h2`
  color: ${(props) => (props.theme.scheme === 'dark' ? props.theme.color : props.color || '#000')};
  text-shadow: 2px 0 ${(props) => (props.theme.scheme === 'dark' ? props.theme.color : props.color || '#000')};
  font-weight: ${(props) => props.weight || 600};
  font-size: ${(props) => props.size || '2rem'};
  text-transform: ${(props) => props.textTransform || 'inherit'};
  margin: ${(props) => props.margin || '20px 0px'};
  padding: ${(props) => props.padding || '0px'};
  letter-spacing: ${(props) => props.spacing || 'normal'};
  font-family: ${(props) => props.family || "'FK Grotesk Neu', 'Source Sans Pro', Helvetica, sans-serif"};
  text-align: ${(props) => props.textAlign || 'inherit'};

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

// Export Default
export default ComingSoonPage;
