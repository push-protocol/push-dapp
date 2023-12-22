import React from 'react';
import styled from 'styled-components';
import GLOBALS from 'config/Globals';

const NotFoundPage: React.FC = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <NotFoundTitle> Page Not Found</NotFoundTitle>
        <NotFoundText>The page you are looking for doesn't exist or has been moved.</NotFoundText>
        <HomeLink href="/">Go to Home</HomeLink>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

export default NotFoundPage;

const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px);
  background: ${(props) => props.theme.default.bg};
  box-shadow: ${GLOBALS.ADJUSTMENTS.MODULE_BOX_SHADOW};
  border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
  margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  padding: 20px;
  box-sizing: border-box;
`;

const NotFoundContent = styled.div`
  text-align: center;
`;

const NotFoundTitle = styled.h1`
  color: black;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const NotFoundText = styled.p`
  color: ${(props) => props.theme.default.text};
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

const HomeLink = styled.a`
  color: ${(props) => props.theme.default.link};
  font-size: 1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
