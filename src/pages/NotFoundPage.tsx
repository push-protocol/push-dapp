// React + Web3 Essentials
import React from "react";
import { useNavigate } from 'react-router-dom';

// External Packages
import styled from 'styled-components';
import ErrorGraphic from "../assets/404Graphic.svg";
// Internal Configs
import GLOBALS from "config/Globals";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <NotFoundContainer>
      <PageNotFoundWrapper>
        <PageNotFoundImg src={ErrorGraphic} alt="Page not found" />
        <PageNotFoundSubContainer>
          <OopsTitle>Oops...</OopsTitle>
          <PageNotFoundText>The page you're trying to reach doesn't exist.</PageNotFoundText>
        </PageNotFoundSubContainer>
        <PageNotFoundButton onClick={() => navigate("/channels")}>Go to Home</PageNotFoundButton>
      </PageNotFoundWrapper>
    </NotFoundContainer>
  );
};

export default NotFoundPage;

const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px);
  width: 80%;
  border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
  padding: 20px;
  box-sizing: border-box;
  // margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  margin: auto;
  `;

const NotFoundText = styled.p`
  color: ${(props) => props.theme.default.text};
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

const OopsTitle = styled.p`
    font-size: 48px;
    font-weight: 500;
    margin: 0;
    text-align: center;
    color: black;
`;



const PageNotFoundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
`;

const PageNotFoundImg = styled.img`
    width: 355.7px;
    height: 205.79px;
    border-radius: 16px;
    margin: 0 auto;
`;

const PageNotFoundText = styled.p`
    font-size: 24px;
    font-weight: 400;
    width: 100%;
    text-align: center;
`;

const PageNotFoundButton = styled.button`
    padding: 14px 24px 14px 24px;
    border-radius: 16px;
    background-color: #DD44B9;
    color: #FFFFFF;
    border: none;
    height: 54px;
    width: 201px;
    font-size: 18px;
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content: center;
`;

const PageNotFoundSubContainer = styled.div`
    gap: 16px;
`;