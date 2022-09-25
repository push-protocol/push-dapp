// React + Web3 Essentials
import React from 'react';

// External Packages
import styled from 'styled-components';

// Internal Configs
import { appConfig } from 'config';

// Other Information URLs
function ViewInfoItem() {
  // render
  return (
    <>
      <Container id="epns-browser">
        <ChannelInfo>
          <ChannelTitle>
            <>
              <AppLinkText>
                <AppLink href={`${appConfig.links.extension}`} target="_blank" rel="nofollow">
                  Download Push (EPNS) Browser Extension
                </AppLink>
              </AppLinkText>
            </>
          </ChannelTitle>
        </ChannelInfo>
      </Container>
      <Container id="epns-app-ios">
        <ChannelInfo>
          <ChannelTitle>
            <>
              <AppLinkText>
                <AppLink href={`${appConfig.links.ios}`} target="_blank" rel="nofollow">
                  {appConfig.appEnv !== 'prod'
                    ? 'Request Push (EPNS) Staging App (iOS)'
                    : 'Download Push (EPNS) App (iOS)'}
                </AppLink>
              </AppLinkText>
              {appConfig.appEnv !== 'prod' ? 'For iOS Users -> Hit CM on Dscord' : 'For iOS Users'}
            </>
          </ChannelTitle>
        </ChannelInfo>
      </Container>
      <Container id="epns-app">
        <ChannelInfo>
          <ChannelTitle>
            <>
              <AppLinkText>
                <AppLink href={`${appConfig.links.android}`} target="_blank" rel="nofollow">
                  {appConfig.appEnv !== 'prod'
                    ? 'Download Staging Push (EPNS) App (Android)'
                    : 'Download Push (EPNS) App (Android)'}
                </AppLink>
              </AppLinkText>
              For Android Users
            </>
          </ChannelTitle>
        </ChannelInfo>
      </Container>
      <Container>
        <ChannelInfo>
          <ChannelTitle>
            <ChannelTitleLink href={appConfig.links.howto} target="_blank" rel="nofollow">
              👉 Visit our docs for how to guides, developer docs and more 👈
            </ChannelTitleLink>
          </ChannelTitle>
        </ChannelInfo>
      </Container>
    </>
  );
}

// css styles
const Container = styled.div`
  flex: 1;
  // display: flex;
  // flex-wrap: wrap;

  background: ${(props) => props.theme.default.secondaryBg};

  color: ${(props) => props.theme.color};
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.default.border};

  margin: 15px 0px;
  justify-content: center;
  padding: 10px;
`;

const ChannelTitleLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: #e20880;
  font-size: 20px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    pointer: hand;
  }
`;
const AppLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: #e20880;
  font-size: 20px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    pointer: hand;
  }
`;
const AppLinkText = styled.div`
  text-decoration: none;
  font-weight: 600;
  color: #e20880;
  font-size: 20px;
`;
const ChannelInfo = styled.div`
  flex: 1;
  margin: 5px 10px;
  min-width: 120px;
  flex-grow: 4;
  flex-direction: column;
  display: flex;
`;

const ChannelTitle = styled.div`
  margin-bottom: 5px;
`;

// Export Default
export default ViewInfoItem;
