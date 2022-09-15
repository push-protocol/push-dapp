import Typography from '@mui/material/Typography';
import { Feeds, User } from 'api';
import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import DefaultMessage from '../defaultMessage/defaultMessage';
import Loader from '../Loader/Loader';
import ReactSnackbar from '../ReactSnackbar/ReactSnackbar';
import { AppContext, Context } from '../w2wIndex';
import { intitializeDb } from '../w2wIndexeddb';
import { decryptFeeds, fetchInbox, fetchIntent } from '../w2wUtils';
import './messageFeed.css';

interface MessageFeedProps {
  filteredUserData: User[];
  hasUserBeenSearched: boolean;
  isInvalidAddress: boolean;
}

const MessageFeed = (props: MessageFeedProps): JSX.Element => {
  const { did, setChat, connectedUser, setIntents, setInbox }: AppContext = useContext<AppContext>(Context);
  const [feeds, setFeeds] = useState<Feeds[]>([]);
  const [messagesLoading, setMessagesLoading] = useState<boolean>(true);
  const [isSameUser, setIsSameUser] = useState<boolean>(false);
  const [isInValidAddress, setIsInvalidAddress] = useState<boolean>(false);
  const [openReprovalSnackbar, setOpenReprovalSnackBar] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [stopApi, setStopApi] = useState<boolean>(true);
  const [isSelected, setIsSelected] = useState<boolean>(false);

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
      setErrorMessage("You can't send intent to yourself");
    },
    retry: 3,
    refetchInterval: 1000 * 5,
    retryDelay: 1000 * 5
  });

  const updateInboxAndIntents = async (): Promise<void> => {
    if (did) {
      await getInbox();
      setIntents(await fetchIntent({ did: did.id }));
    }
  };

  useEffect(() => {
    if (!props.hasUserBeenSearched) {
      updateInboxAndIntents();
    } else {
      const searchFn = async (): Promise<void> => {
        if (props.filteredUserData.length) {
          if (Object(props.filteredUserData[0]).did === did?.id) {
            setIsSameUser(true);
            setOpenReprovalSnackBar(true);
            setErrorMessage("You can't send intent to yourself");
            setFeeds([]);
          } else {
            // When searching as of now the search will always result in only one user being displayed.
            // There is no multiple users appearing on the sidebar when a search is done. The wallets must match exactly.
            const user: User = props.filteredUserData[0];
            const inbox: Feeds = {
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
                toDID: null
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
              cid: null
            };
            setFeeds([inbox]);
          }
        } else {
          if (props.isInvalidAddress) {
            setIsInvalidAddress(true);
            setOpenReprovalSnackBar(true);
            setErrorMessage('Invalid Address');
          }
          setFeeds([]);
        }
      };
      searchFn();
    }

    setMessagesLoading(false);
  }, [props.hasUserBeenSearched, props.filteredUserData]);

  const handleCloseReprovalSnackbar = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenReprovalSnackBar(false);
  };

  return (
    <SidebarWrapper className="messageFeed_body">
      <DisplayText color="#6D6B7A" size="14px" weight="700" ml={3}>
        CHAT
      </DisplayText>
      <UserProfileContainer>
        {!feeds?.length && messagesLoading && (
          <div style={{ position: 'relative', textAlign: 'center', width: '100%', height: '100%' }}>
            <Loader />
          </div>
        )}
        {!feeds?.length && isSameUser ? (
          <InfoMessage>You can&apos;t send intent to yourself</InfoMessage>
        ) : !feeds?.length && isInValidAddress ? (
          <InfoMessage>Invalid Address</InfoMessage>
        ) : !feeds?.length && !messagesLoading ? (
          <InfoMessage>No Address found.</InfoMessage>
        ) : !messagesLoading ? (
          feeds.map((feed: Feeds, i) => (
            <div
              key={feed.threadhash || i}
              onClick={(): void => {
                setChat(feed);
              }}
            >
              <DefaultMessage inbox={feed} isSelected={isSelected} />
            </div>
          ))
        ) : null}

        <ReactSnackbar
          text={errorMessage}
          open={openReprovalSnackbar}
          handleClose={handleCloseReprovalSnackbar}
          severity={'error'}
        />
      </UserProfileContainer>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.section`
  position: relative;
`;

const InfoMessage = styled.p`
  position: relative;
  text-align: center;
  width: 80%;
  background: #d2cfcf;
  padding: 10px;
  margin: 0;
`

const DisplayText = styled(Typography)`
  && {
    color: ${(props): string => props.color || '#000000'};
    font-size: ${(props): string => props.size || '14px'};
    font-weight: ${(props): string => props.weight || '500'};
  }
`;
const UserProfileContainer = styled.div`
  margin-top: 14px;
  width: 100%;
  height: calc(83.6vh - ${(props) => props.height || 238}px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
  &&::-webkit-scrollbar {
    width: 4px;
  }
  &&::-webkit-scrollbar-thumb {
    background: #cf1c84;
  }
`;

export default MessageFeed;
