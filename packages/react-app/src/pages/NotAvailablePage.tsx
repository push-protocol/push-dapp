import React from "react";

import styled, { useTheme } from 'styled-components';
import { ThemeProvider } from "styled-components";
import { Section, Content, Item } from 'components/SharedStyling';
import { envConfig } from "@project/contracts";
import { useWeb3React } from '@web3-react/core'

const networkName = {
  42: "Ethereum Kovan",
  1: "Ethereum Mainnet"
}

function NotAvailablePage(props) {
  const themes = useTheme();
  const { chainId } = useWeb3React();
  const onCoreNetwork = chainId === envConfig.coreContractChain;

  React.useEffect(() => {
    if (onCoreNetwork) {
      const url = window.location.origin;
      window.location.replace(`${url}/#/channels`);
    }
  })

  // Render
  return (
    <ThemeProvider theme={themes}>
      <Section style={{minHeight: '60vh'}}>
        <Content padding="0px 20px 0px">
          <Item align="center">
            <Heading color="#333" spacing="0.05em" size="2rem" weight={700}>
              Kindly switch to {networkName[envConfig.coreContractChain]} Network to view this page.
            </Heading>
          </Item>
        </Content>
      </Section>
      </ThemeProvider>
  );
}

const Heading = styled.h2`
  color: ${props => props.theme.scheme === "dark" ? props.theme.color : props.color || "#000"};
  text-shadow: 2px 0 ${props => props.theme.scheme === "dark" ? props.theme.color : props.color || "#000"};
  font-weight: ${props => props.weight || 600};
  font-size: ${props => props.size || "2rem"};
  text-transform: ${props => props.textTransform || "inherit"};
  margin: ${props => props.margin || "20px 0px"};
  padding: ${props => props.padding || "0px"};
  letter-spacing: ${props => props.spacing || "inherit"};
  font-family: ${props => props.family || "'Source Sans Pro', Helvetica, sans-serif"};
  text-align: ${props => props.textAlign || "inherit"};

  @media (max-width: 768px) {
		font-size: 1.5rem;
	}
`

// Export Default
export default NotAvailablePage;