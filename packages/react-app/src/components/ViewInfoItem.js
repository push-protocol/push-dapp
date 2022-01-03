import React from "react";
import styled, { css } from 'styled-components';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Loader from 'react-loader-spinner';

import { useWeb3React } from '@web3-react/core';


// Other Information URLs
function ViewInfoItem() {
  // render
  return (
    <>
    <Container >
      <ChannelInfo>
        <ChannelTitle>
          <>
          <AppLinkText>
            <AppLink href={`${process.env.REACT_APP_BROWSER_EXTENSION_URL}`} target="_blank" rel="nofollow">
              Download EPNS Browser Extension
            </AppLink>
          </AppLinkText>
          
          </>
        </ChannelTitle>
      </ChannelInfo>
    </Container>
    <Container >
      <ChannelInfo>
        <ChannelTitle>
          <>
          <AppLinkText>
            <AppLink href={`${process.env.REACT_APP_IOS_STAGING_DAPP_URL}`} target="_blank" rel="nofollow">
              Download EPNS App (iOS)
            </AppLink>
          </AppLinkText>
           For iOS Users
          </>
        </ChannelTitle>
      </ChannelInfo>
    </Container>
    <Container >
      <ChannelInfo>
        <ChannelTitle>
          <>
          <AppLinkText>
            <AppLink href={`${process.env.REACT_APP_ANDROID_STAGING_DAPP_URL}`} target="_blank" rel="nofollow">
              Download EPNS App (Android)
            </AppLink>
          </AppLinkText>
           For Android Users
          </>
        </ChannelTitle>
      </ChannelInfo>
    </Container>
    <Container >
      <ChannelInfo>
        <ChannelTitle>
          <ChannelTitleLink href= "#" target="_blank" rel="nofollow">
            Click here for our How to Guides
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

  background: #fff;
  border-radius: 10px;
  border: 1px solid rgb(237, 237, 237);

  margin: 15px 0px;
  justify-content: center;
  padding: 10px;
`

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
`
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
`
const AppLinkText = styled.div`
  text-decoration: none;
  font-weight: 600;
  color: #e20880;
  font-size: 20px;
`
const ChannelInfo = styled.div`
  flex: 1;
  margin: 5px 10px;
  min-width: 120px;
  flex-grow: 4;
  flex-direction: column;
  display: flex;
`

const ChannelTitle = styled.div`
  margin-bottom: 5px;
`

// Export Default
export default ViewInfoItem;
