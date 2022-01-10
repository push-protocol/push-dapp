import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector'
import { Web3Provider } from 'ethers/providers'

import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

import styled, { useTheme } from "styled-components";
import {Section, Item, ItemH, Span, Anchor, Image} from 'components/SharedStyling';

import LeftBarList from "config/LeftBarList";

import GLOBALS from "config/Globals";

// Create Header
function LeftBar() {
    const [sectionOverride, setSectionOverride] = useState([])

    const theme = useTheme();
    const location = useLocation();

    let leftBarPrimaryList = [];
    let count = -1;
    Object.entries(LeftBarList.sections).forEach(([key, value]) => {
        count++;
        let identifier = count.toString();

        const section = LeftBarList.sections[key];

        leftBarPrimaryList[identifier] = {};
        leftBarPrimaryList[identifier].active = false;
        leftBarPrimaryList[identifier].isSection = true;
        leftBarPrimaryList[identifier].hasItems = false;

        if (location.pathname === section.href) {
            leftBarPrimaryList[identifier].active = true;
        }
        leftBarPrimaryList[identifier].data = value;

        if (section.hasOwnProperty('drilldown')) {
            Object.entries(section.drilldown).forEach(([drillkey, drillvalue]) => {
                count++;
                let childidentifier = count.toString();

                const item = section.drilldown[drillkey];

                leftBarPrimaryList[childidentifier] = {};
                leftBarPrimaryList[childidentifier].active = false;
                leftBarPrimaryList[childidentifier].isSection = false;
                leftBarPrimaryList[identifier].hasItems = true;

                // Check and expand it if the pathname matches
                if (location.pathname === item.href) {
                    leftBarPrimaryList[identifier].active = true;
                    leftBarPrimaryList[childidentifier].active = true;
                }

                leftBarPrimaryList[childidentifier].data = drillvalue;
            })
        }
    });

    console.log(leftBarPrimaryList);
    

    const renderDrilldownItem = (item) => {
        return (
            <Item>
                <Span>item.name</Span>
            </Item>
        );
    }

    return (
        <Container direction="column" headerHeight={GLOBALS.CONSTANTS.HEADER_HEIGHT}>
            <Primary>
                {Object.keys(leftBarPrimaryList).map(function(key) {
                    // if it's a section
                    if (leftBarPrimaryList[key].isSection) {
                        const section = leftBarPrimaryList[key];
                        const data = section.data;
                        let renderer = (
                            <LeftBarPrimarySection 
                                key={key}
                                flex="1"
                                align="stretch"
                            >
                                <Anchor
                                    flex="1"
                                    title={`${data.title}`}
                                    href={`${data.href ? data.href : '#'}`}
                                    disabled={data.disabled}
                                    target={data.newTab ? "_blank" : "self"}
                                    hoverBG={theme.leftBarHoverColor}
                                    radius="12px"
                                    align="stretch"
                                    margin="10px"
                                >
                                    <ItemH
                                        align="center"
                                    >
                                        <LeftBarPrimarySectionIcon
                                            src={`./${data.src}`}
                                            margin="0 5px"
                                            alt={`${data.alt}`}
                                        />
                                        <Span 
                                            flex="1" 
                                            weight="400"
                                            spacing="0"
                                            margin="0 5px"
                                            color={theme.leftBarFontColor}
                                        >
                                            {data.name}
                                        </Span>
                                        
                                        {section.hasItems && section.active &&
                                            <BiChevronDown
                                                color={theme.leftBarFontColor}
                                            />
                                        }

                                        {section.hasItems && !section.active &&
                                            <BiChevronDown
                                                color={theme.leftBarFontColor}
                                            />
                                        }
                                    </ItemH>
                                </Anchor>
                            </LeftBarPrimarySection>
                        )

                        return renderer;
                    }
                    // if it's items
                    else {
                        const item = leftBarPrimaryList[key];
                        const data = item.data;

                        return (
                            <LeftBarPrimaryItem
                                key={key}
                                flex="1"
                                align="stretch"
                            >
                                <Anchor
                                    flex="1"
                                    title={`${data.title}`}
                                    href={`${data.href ? data.href : '#'}`}
                                    alt={`${data.alt}`}
                                    disabled={data.disabled}
                                    target={data.newTab ? "_blank" : "self"}
                                    hoverBG={theme.leftBarHoverColor}
                                    radius="12px"
                                    align="stretch"
                                    margin="10px"
                                >
                                    <ItemH
                                        align="center"
                                    >
                                        <LeftBarPrimaryItemIcon
                                            src={`./${data.src}`}
                                            margin="0 5px"
                                            alt={`${data.alt}`}
                                        />
                                        <Span 
                                            flex="1" 
                                            weight="400"
                                            spacing="0"
                                            margin="0 5px"
                                            size="14px"
                                            color={theme.leftBarFontColor}
                                        >
                                            {data.name}
                                        </Span>
                                    </ItemH>
                                </Anchor>
                            </LeftBarPrimaryItem>
                        )
                    }
                })}
            </Primary>
            <Secondary>

            </Secondary>
        </Container>
    );
}

// CSS Styles
const Container = styled(Section)`
    background: ${props => props.theme.leftBarBg};
    flex: 1;
    height: 100%;
    padding: ${props => props.headerHeight}px 0px 20px 0px;
    border-right: 1px solid ${props => props.theme.sectionBorderBg};
`

const Primary = styled(Item)`
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
    justify-content: flex-start;
    background: '#fff';
    overflow-y: scroll;
    padding: 0px 0px 20px 0px;
`

const LeftBarPrimarySection = styled(Item)`
    flex: initial;
    align-items: 'center';
    border-bottom: 1px solid ${props => props.theme.sectionBorderBg};
    border-top: 1px solid ${props => props.theme.sectionBorderBg};
    margin-top: -1px;
`

const LeftBarPrimarySectionIcon = styled(Image)`
    height: 32px;
    width: 32px;
    margin: 0 5px;
`

const LeftBarPrimaryItem = styled(Item)`
    flex: initial;
    align-items: 'center';
    padding: 0px 0px 0px 20px;
`

const LeftBarPrimaryItemIcon = styled(Image)`
    height: 16px;
    width: 16px;
    margin: 0 5px;
`

const Secondary = styled(Item)`
    flex: 0;
`
// Export Default
export default LeftBar;
