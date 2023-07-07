import { H2V2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import React from 'react';
import styled from 'styled-components';

const StakingToolTipContent = ({
    title,
    body,
}) => {
    return (
        <Container>
            <TopHeading>{title}</TopHeading>
            <TopSubHeading >{body}</TopSubHeading>
        </Container>
    );
};

export default StakingToolTipContent;

const Container = styled(ItemVV2)`
  box-sizing: border-box;
  width: 16rem;
  background: ${(props) => props.theme.default.bg};
  justify-content: flex-start;
  border: 1px solid rgba(173, 176, 190, 0.2);
  align-items: flex-start;
  padding: 0.75rem 0.75rem 0.75rem 1rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius:1rem 1rem 1rem 0.125rem;

  @media (max-width:400px){
    width:16.75rem;
  }


`;

const TopHeading = styled(H2V2)`
  color: ${(props) => props.theme.tooltipTopHeading};
  font-weight: 500;
  font-size: 0.75rem;
`;

const TopSubHeading = styled(H2V2)`
  color: ${(props) => props.theme.tooltipTopSubHeading};
  font-weight: 300;
  font-size: 0.625rem;
`;
