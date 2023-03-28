import { useWeb3React } from "@web3-react/core";
import { ChatGlobalContextNew } from "contexts/ChatGlobalContextNew";
import { getInboxFromIndexedDB, getRequestsFromIndexedDB } from "helpers";
import ChatLocalContextProviderNew from "contexts/ChatLocalContextNew";
import React, { useContext, useEffect, useState } from "react";
import { ChatBoxSectionNew } from "sections/chat/ChatBoxSectionNew";
import { ChatSidebarSectionNew } from "sections/chat/ChatSidebarSectionNew";
import { getConnectedUser, getDecryptedInbox, getDecryptedRequests } from "services";
import ChatSidebarSection from "sections/chat/ChatSidebarSection";
import { ItemHV2, ItemVV2 } from "components/reusables/SharedStylingV2";
import styled from "styled-components";

// Internal Configs
import GLOBALS, { device, globalsMargin } from 'config/Globals';
import LoaderSpinner, { LOADER_TYPE } from "components/reusables/loaders/LoaderSpinner";

export const ChatModuleNew = () => {
  const { account, library } = useWeb3React();
  const { connectedUser, setConnectedUser,setInbox,setRequests,userFeeds } = useContext(ChatGlobalContextNew);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if(connectedUser || !account || !library) return;
    (async function () {
      try {
        const signer = await library.getSigner();
        const connectedUserResponse = await getConnectedUser(account, signer);
        setConnectedUser(connectedUserResponse);
      } catch (err) {
        console.log(err);
      }
    })()
  }, [account, library]);

  useEffect(() => {
    if(!connectedUser) return;
    (async function () {
      try {
        if(!userFeeds[account]?.inbox){
        const inboxes = await getInboxFromIndexedDB(connectedUser);
        console.log(inboxes)
        getDecryptedInbox({connectedUser,setResult:setInbox});
        setInbox(inboxes,account);
        }
        if(!userFeeds[account]?.requests){
        const requests = await getRequestsFromIndexedDB(connectedUser);
        getDecryptedRequests({connectedUser,setResult:setRequests});
        setRequests(requests,account);
        }
      } catch (err) {
        console.log(err);
      }
    })()
  },[connectedUser]);

  return (
    <Container>
      {!isLoading ? 
        <ChatLocalContextProviderNew>
          <ChatSidebarSectionNew /> 
          <ChatBoxSectionNew />
        </ChatLocalContextProviderNew>
        : 
        <LoaderSpinner type={LOADER_TYPE.SEAMLESS} />  
      } 
    </Container>
  );
}


const Container = styled(ItemHV2)`
  align-items: stretch;
  background: ${(props) => props.theme.default.bg};
  border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${GLOBALS.ADJUSTMENTS.MODULE_BOX_SHADOW};
  flex: initial;
  overflow: hidden;
  box-sizing: border-box;
  border: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};

  margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.MINI_MODULES.DESKTOP.TOP} - ${
  globalsMargin.MINI_MODULES.DESKTOP.BOTTOM});

  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.MINI_MODULES.TABLET.TOP} - ${
    globalsMargin.MINI_MODULES.TABLET.BOTTOM});
  }

  @media ${device.mobileL} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.MINI_MODULES.MOBILE.TOP} - ${
    globalsMargin.MINI_MODULES.MOBILE.BOTTOM}
  );
  
`
