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
} from "redux/slices/notificationSlice";
import { postReq } from "api";
import DisplayNotice from "components/DisplayNotice";

const NOTIFICATIONS_PER_PAGE = 10;
// Create Header
function SpamBox() {
  const dispatch = useDispatch();
  const { account, chainId, library } = useWeb3React();
  const { epnsCommReadProvider } = useSelector((state: any) => state.contracts);
  const [spams, setSpams] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [finishedFetching, setFinishedFetching] = React.useState(false);
  const { notifications } = useSelector((state: any) => state.notifications);
  const [counter, setCounter] = React.useState(0);
  const EPNS_DOMAIN = {
    name: "EPNS COMM V1",
    chainId: chainId,
    verifyingContract: epnsCommReadProvider.address,
  };

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
      const parsedResponse = utils
        .parseApiResponse(results)
        .map((elem: any, i: any) => {
          elem.channel = results[i].channel;
          return { ...elem };
        });
      setSpams((s) => [...s, ...parsedResponse]);
      if (count === 0) {
        setFinishedFetching(true);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (epnsCommReadProvider) {
      loadNotifications();
    }
  }, [epnsCommReadProvider, account]);

  //function to query more notifications
  const handlePagination = async () => {
    loadNotifications();
    setPage((p) => p + 1);
  };

  const showWayPoint = (index: any) => {
    return Number(index) === notifications.length - 1 && !finishedFetching;
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

  const isSubscribedFn = async (channelAddr: any) => {
    return await postReq("/channels/get_subscribers", {
      channel: channelAddr,
      op: "read",
    })
      .then(({ data }) => {
        const subs = data.subscribers;
        const subscribed = subs.includes(account);
        if (!subscribed) {
          setCounter((c) => c + 1);
        }
        return subscribed;
      })
      .catch((err) => {
        console.log(`getChannelSubscribers => ${err.message}`);
        return [];
      });
  };

  // Render
  return (
    <>
      <Container>
        {spams && (
          <Items id="scrollstyle-secondary">
            {spams.map((oneNotification, index) => {
              const {
                cta,
                title,
                message,
                app,
                icon,
                image,
                channel,
              } = oneNotification;
              // render the notification item
              return (
                <div key={`${message}+${title}`}>
                  {showWayPoint(index) && (
                    <Waypoint onEnter={() => handlePagination()} />
                  )}
                  <NotificationItem
                    notificationTitle={title}
                    notificationBody={message}
                    cta={cta}
                    app={app}
                    icon={icon}
                    image={image}
                    subscribeFn={() => onSubscribeToChannel(channel)}
                    isSpam
                    isSubscribedFn={async () => isSubscribedFn(channel)}
                  />
                </div>
              );
            })}
          </Items>
        )}
        {loading && (
          <Loader type="Oval" color="#35c5f3" height={40} width={40} />
        )}
        {!loading && (!counter || !spams.length) && (
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
