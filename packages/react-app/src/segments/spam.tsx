import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import { Waypoint } from "react-waypoint";
import { useWeb3React } from "@web3-react/core";
import { useSelector, useDispatch } from "react-redux";
import { envConfig } from "@project/contracts";
import {
  api,
  utils,
  NotificationItem,
} from "@epnsproject/frontend-sdk-staging";
import {
  addPaginatedNotifications,
  incrementPage,
  setFinishedFetching,
} from "redux/slices/spamSlice";
import { postReq } from "api";
import DisplayNotice from "components/DisplayNotice";
import { updateTopNotifications } from "redux/slices/notificationSlice";

const NOTIFICATIONS_PER_PAGE = 10;
// Create Header
function SpamBox({ currentTab }) {
  const dispatch = useDispatch();
  const { account, chainId, library } = useWeb3React();
  const { epnsCommReadProvider } = useSelector(
    (state: any) => state.contracts
  );

  const { notifications, page, finishedFetching } = useSelector((state: any) => state.spam);
  const { toggle } = useSelector(
    (state: any) => state.notifications
  );
  const EPNS_DOMAIN = {
    name: "EPNS COMM V1",
    chainId: chainId,
    verifyingContract: epnsCommReadProvider?.address,
  };

  const [bgUpdateLoading, setBgUpdateLoading] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const loadNotifications = async () => {
    if (loading || finishedFetching) return;
    setLoading(true);
    try {
      const { count, results } = await api.fetchSpamNotifications(
        account,
        NOTIFICATIONS_PER_PAGE,
        page,
        envConfig.apiUrl
      );
      const parsedResponsePromise = utils
        .parseApiResponse(results)
        .map(async (elem: any, i: any) => {
          elem.channel = results[i].channel;
          const {
            data: { subscribers },
          } = await postReq("/channels/get_subscribers", {
            channel: results[i].channel,
            op: "read",
          });
          elem.subscribers = subscribers;
          return { ...elem };
        });
      const parsedResponse = await Promise.all(parsedResponsePromise);
      // get all the subsc
      dispatch(addPaginatedNotifications(parsedResponse));
      if (count === 0) {
        dispatch(setFinishedFetching());
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchLatestNotifications = async () => {
    if (loading || bgUpdateLoading) return;
    setBgUpdateLoading(true);
    setLoading(true);

    try {
      const { count, results } = await api.fetchSpamNotifications(
        account,
        NOTIFICATIONS_PER_PAGE,
        1,
        envConfig.apiUrl
      );
      if (!notifications.length) {
        dispatch(incrementPage());
      }
      const parsedResponsePromise = utils
        .parseApiResponse(results)
        .map(async (elem: any, i: any) => {
          elem.channel = results[i].channel;
          const {
            data: { subscribers },
          } = await postReq("/channels/get_subscribers", {
            channel: results[i].channel,
            op: "read",
          });
          elem.subscribers = subscribers;
          return { ...elem };
        });
      const parsedResponse = await Promise.all(parsedResponsePromise);
      dispatch(
        updateTopNotifications({
          notifs: parsedResponse,
          pageSize: NOTIFICATIONS_PER_PAGE,
        })
      );
      if (count === 0) {
        dispatch(setFinishedFetching());
      }
    } catch (err) {
      console.log(err);
    } finally {
      setBgUpdateLoading(false);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (account && currentTab === "spambox") {
      fetchLatestNotifications();
    }
  }, [account, currentTab]);

  React.useEffect(() => {
    if (epnsCommReadProvider) {
      loadNotifications();
    }
  }, [epnsCommReadProvider, account]);

  //function to query more notifications
  const handlePagination = async () => {
    loadNotifications();
    dispatch(incrementPage());
  };

  const showWayPoint = (index: any) => {
    return (
      Number(index) === notifications.length - 1 &&
      !finishedFetching &&
      !bgUpdateLoading
    );
  };

  const onSubscribeToChannel = async (channelAddress) => {
    let txToast;
    const type = {
      Subscribe: [
        { name: "channel", type: "address" },
        { name: "subscriber", type: "address" },
        { name: "action", type: "string" },
      ],
    };
    const message = {
      channel: channelAddress,
      subscriber: account,
      action: "Subscribe",
    };

    const signature = await library
      .getSigner(account)
      ._signTypedData(EPNS_DOMAIN, type, message);

    return postReq("/channels/subscribe_offchain", {
      signature,
      message,
      op: "write",
      chainId,
      contractAddress: epnsCommReadProvider.address,
    });
  };

  const isSubscribedFn = async (subscribers: any) => {
    return subscribers
      .map((a) => a.toLowerCase())
      .includes(account.toLowerCase());
  };

  // Render
  return (
    <>
      <Container>
        {bgUpdateLoading && (
          <div style={{ marginTop: "10px" }}>
            <Loader type="Oval" color="#35c5f3" height={40} width={40} />
          </div>
        )}
        {notifications && (
          <Items id="scrollstyle-secondary">
            {notifications.map((oneNotification, index) => {
              const {
                cta,
                title,
                message,
                app,
                icon,
                image,
                channel,
                subscribers,
              } = oneNotification;
              // render the notification item
              return (
                <div key={`${message}+${title}`}>
                  {showWayPoint(index) && !loading && (
                    <Waypoint onEnter={() => handlePagination()} />
                  )}
                  <NotificationItem
                    notificationTitle={title}
                    notificationBody={message}
                    cta={cta}
                    app={app}
                    icon={icon}
                    image={image}
                    subscribeFn={(e) => {
                      e?.stopPropagation();
                      onSubscribeToChannel(channel);
                    }}
                    isSpam
                    isSubscribedFn={async () => isSubscribedFn(subscribers)}
                  />
                </div>
              );
            })}
          </Items>
        )}
        {loading && !bgUpdateLoading && (
          <Loader type="Oval" color="#35c5f3" height={40} width={40} />
        )}
        {!loading && !notifications.length && (
          <CenteredContainerInfo>
            <DisplayNotice
              title="You currently have no spam notifications."
              theme="third"
            />
          </CenteredContainerInfo>
        )}
      </Container>
    </>
  );
}

const CenteredContainerInfo = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.div`
  display: block;
  align-self: stretch;
  padding: 10px 20px;
  overflow-y: scroll;
  background: #fafafa;
`;
// css styles
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  font-weight: 200;
  align-content: center;
  align-items: center;
  justify-content: center;
  max-height: 100vh;

  // padding: 20px;
  // font-size: 16px;
  // display: flex;
  // font-weight: 200;
  // align-content: center;
  // align-items: center;
  // justify-content: center;
  // width: 100%;
  // min-height: 40vh;
`;

// Export Default
export default SpamBox;
