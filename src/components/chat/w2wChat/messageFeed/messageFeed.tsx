
// React + Web3 Essentials
import React, { useContext, useEffect, useState } from 'react';

// External Packages
import Typography from '@mui/material/Typography';
import { useQuery } from 'react-query';
import styled, { useTheme } from 'styled-components';

// Internal Components
import { Feeds, User } from 'api';
import ChatSnap from "components/chat/chatsnap/ChatSnap";
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ItemVV2, SpanV2 } from "components/reusables/SharedStylingV2";
import useToast from 'hooks/useToast';
import { AppContext, Context } from 'sections/chat/ChatMainSection';
import DefaultMessage from '../defaultMessageDeprecated/defaultMessage.deprecated';
import Loader from '../Loader/Loader';
import ReactSnackbar from '../ReactSnackbar/ReactSnackbar';
import { intitializeDb } from '../w2wIndexeddb';
import { decryptFeeds, fetchInbox, fetchIntent } from '../w2wUtils';
import './messageFeed.css';

// Internal Configs

interface MessageFeedProps {
  filteredUserData: User[];
  hasUserBeenSearched: boolean;
  isInvalidAddress: boolean;
}

const MessageFeed = (props: MessageFeedProps): JSX.Element => {
  const theme = useTheme();

  const { did, setChat, connectedUser, setIntents, setInbox, inbox }: AppContext = useContext<AppContext>(Context);
  const [feeds, setFeeds] = useState<Feeds[]>([]);
  const [messagesLoading, setMessagesLoading] = useState<boolean>(true);
  const [isSameUser, setIsSameUser] = useState<boolean>(false);
  const [isInValidAddress, setIsInvalidAddress] = useState<boolean>(false);
  const [stopApi, setStopApi] = useState<boolean>(true);
  const [selectedChatSnap, setSelectedChatSnap] = useState<string>();
  const messageFeedToast = useToast();

  const getInbox = async (): Promise<Feeds[]> => {
    if (did) {
      const getInbox = await intitializeDb<string>('Read', 'Inbox', did.id, '', 'did');
      if (getInbox !== undefined) {
        let inboxes: Feeds[] = await fetchInbox(did);
        inboxes = await decryptFeeds({ feeds: inboxes, connectedUser, did });
        setFeeds(inboxes);
        setInbox(inboxes);
        return inboxes;
      } else {
        let inboxes: Feeds[] = await fetchInbox(did);
        inboxes = await decryptFeeds({ feeds: inboxes, connectedUser, did });
        setFeeds(inboxes);
        setInbox(inboxes);
        return inboxes;
      }
    }
  };

  useQuery('inbox', getInbox, {
    enabled: !props.hasUserBeenSearched && stopApi,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
    suspense: false,
    onError: () => {
      setStopApi(false);
    },
    retry: 3,
    refetchInterval: 1000 * 5,
    retryDelay: 1000 * 5,
  });

  const updateInboxAndIntents = async (): Promise<void> => {
    if (did) {
      await getInbox();
      setIntents(await fetchIntent({ did: did.id }));
    }
    setMessagesLoading(false);
  };

  useEffect(() => {
    if (!props.hasUserBeenSearched) {
      updateInboxAndIntents();
    } else {
      const searchFn = async (): Promise<void> => {
        if (props.filteredUserData.length) {
          if (Object(props.filteredUserData[0]).did === did?.id) {
            setIsSameUser(true);
            setFeeds([]);
          } else {
            // When searching as of now the search will always result in only one user being displayed.
            // There is no multiple users appearing on the sidebar when a search is done. The wallets must match exactly.
            const user: User = props.filteredUserData[0];
            let feed: Feeds;
            const desiredUser = inbox.filter((inb) => inb.did === user.did);
            if (desiredUser.length) {
              feed = desiredUser[0];
            } else {
              feed = {
                msg: {
                  name: user.wallets.split(',')[0].toString(),
                  profilePicture: user.profilePicture,
                  lastMessage: null,
                  timestamp: null,
                  messageType: null,
                  signature: null,
                  signatureType: null,
                  encType: null,
                  encryptedSecret: null,
                  fromDID: null,
                  toDID: null,
                },
                wallets: user.wallets,
                did: user.did,
                threadhash: null,
                profilePicture: user.profilePicture,
                about: user.about,
                intent: null,
                intentSentBy: null,
                intentTimestamp: null,
                publicKey: user.publicKey,
                combinedDID: null,
                cid: null,
              };
            }
            setFeeds([feed]);
          }
        } else {
          if (props.isInvalidAddress) {
              messageFeedToast.showMessageToast({
              toastTitle: 'Error',
              toastMessage: 'Invalid Address',
              toastType: 'ERROR',
              getToastIcon: (size) => (
                <MdError
                  size={size}
                  color="red"
                />
              ),
            });
            setIsInvalidAddress(true);
          }
          setFeeds([]);
        }
        setMessagesLoading(false);
      };
      searchFn();
    }
  }, [props.hasUserBeenSearched, props.filteredUserData]);

  return (
    <ItemVV2 alignItems="flex-start" justifyContent="flex-start">
      <SpanV2
        fontWeight="700"
        fontSize="12px"
        textAlign="start"
        margin="10px 0 0 0"
        color={theme.default.secondaryColor}
      >
        CHATS
      </SpanV2>
      <UserChats flexFlow="column">
        {messagesLoading ? (
          <LoaderSpinner
            type={LOADER_TYPE.SEAMLESS}
            spinnerSize={40}
          />
        ) : (
          <>
            {!feeds?.length && isSameUser ? (
              <InfoMessage>You can&apos;t send intent to yourself</InfoMessage>
            ) : !feeds?.length && isInValidAddress ? (
              <InfoMessage>Invalid Address</InfoMessage>
            ) : !feeds?.length && !messagesLoading ? (
              <EmptyConnection>
                Start a new chat by using the + button <ArrowBend src="/svg/chats/arrowbendup.svg" />
              </EmptyConnection>
            ) : !messagesLoading ? (
              feeds.map((feed: Feeds, i) => (
                // To Test
                // <ItemVV2
                //   key={feed.threadhash || i}
                //   onClick={(): void => {
                //     setChat(feed);
                //   }}
                //   background="red"
                //   margin="10px"
                //   height="80px"
                //   flex="initial"
                // >
                // </ItemVV2>
                <ItemVV2
                  alignSelf="stretch"
                  flex="initial"
                  key={feed.threadhash || i}
                >
                  <ChatSnap
                    pfp={feed.profilePicture}
                    username={feed.msg.name}
                    chatSnapMsg={
                      {
                        type: feed.msg.messageType,
                        message: feed.msg.lastMessage,
                      }
                    }
                    timestamp={feed.msg.timestamp}
                    selected={feed.threadhash == selectedChatSnap ? true : false}
                    onClick={(): void => {
                      setChat(feed);
                      setSelectedChatSnap(feed.threadhash)
                    }}
                  />
                </ItemVV2>
              ))
            ) : null}
          </>
        )}
      </UserChats>
    </ItemVV2>
  );
};

const SidebarWrapper = styled.section`
  position: relative;
`;

const ArrowBend = styled.img`
  position: absolute;
  right: -23px;
  top: -30px;
`;

const EmptyConnection = styled.div`
  position: relative;
  width: 80%;
  text-align: center;
  color: #657795;
  font-size: 15px;
  margin-top:25px;
`;

const InfoMessage = styled.p`
  position: relative;
  text-align: center;
  width: 80%;
  background: #d2cfcf;
  padding: 10px;
  margin: 0;
`;

const DisplayText = styled(Typography)`
  && {
    color: ${(props): string => props.color || '#000000'};
    font-size: ${(props): string => props.size || '14px'};
    font-weight: ${(props): string => props.weight || '500'};
  }
`;

const UserChats = styled(ItemVV2)`
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: auto;
  height: 0px;
  flex-flow: column;

  &&::-webkit-scrollbar {
    width: 4px;
  }
  &&::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.default.secondaryBg || '#000000'};
  }
`;

export default MessageFeed;
