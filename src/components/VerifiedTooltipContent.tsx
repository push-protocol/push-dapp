import React from 'react';
import styled from 'styled-components';
import { H2V2, ItemVV2 } from './reusables/SharedStylingV2';
import PushLogo from "../assets/PushLogo.svg";

const VerifiedTooltipContent = ({
  height
}) => {
    return (
        <Container style={{borderRadius: height < 160 ? "0.125rem 1rem 1rem 1rem" : "1rem 1rem 1rem 0.125rem"}}>
            <Heading>Verified By</Heading>
            <Logo src={PushLogo}/>
        </Container>
    );
};

export default VerifiedTooltipContent;


const Container = styled(ItemVV2)`
  box-sizing: border-box;
  width: 124px;
  height: 37px;
  max-height: 37px;
  background: #131313;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  // border-radius: 1rem 1rem 1rem 0.125rem; //above one
  // border-radius: 0.125rem 1rem 1rem 1rem; //below displaying
  justify-content: flex-start;
  align-items: flex-start;
  padding:8px 16px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);

`;

const Heading = styled(H2V2)`
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #FFFFFF;
  margin-right:7px;
`;

const Logo = styled.img``;