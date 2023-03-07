import React from 'react';
import styled from 'styled-components';
import { H2V2, ItemVV2 } from './reusables/SharedStylingV2';

type VerifiedTooltipContentType = {
  verifierIcon: string;
  verifierName: string;
  height: number;
};

const VerifiedTooltipContent = ({ verifierIcon, verifierName, height }: VerifiedTooltipContentType) => {
  const displayedVerifierName = verifierName.length > 15 ? verifierName.substring(0, 15) + '...' : verifierName;
  return (
    <Container
      style={{
        width: 212 + displayedVerifierName.length*2 + 'px',
        borderRadius: height < 160 ? '0.125rem 1rem 1rem 1rem' : '1rem 1rem 1rem 0.125rem',
      }}
    >
      <Heading>Verified By:</Heading>
      <VerifierIcon src={verifierIcon} />
      <Heading>{displayedVerifierName}</Heading>
    </Container>
  );
};

export default VerifiedTooltipContent;

const Container = styled(ItemVV2)`
  box-sizing: border-box;
  height: 37px;
  max-height: 37px;
  background: #131313;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8px 16px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
`;

const Heading = styled(H2V2)`
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #ffffff;
  margin-right: 7px;
`;

const VerifierIcon = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 6px;
`;
