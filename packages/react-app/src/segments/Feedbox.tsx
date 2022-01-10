import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import { Waypoint } from "react-waypoint";
import { useWeb3React } from "@web3-react/core";
import { useSelector, useDispatch } from "react-redux";
import { envConfig } from "@project/contracts";
import DisplayNotice from "components/DisplayNotice";
import {
  api,
  utils,
  NotificationItem,
} from "@epnsproject/frontend-sdk-staging";
import {
  addPaginatedNotifications,
  incrementPage,
  setFinishedFetching,
  resetState
} from "redux/slices/notificationSlice";

const NOTIFICATIONS_PER_PAGE = 10;
// Create Header
function Feedbox() {
  const dispatch = useDispatch();
  const { account } = useWeb3React();
  const { epnsCommReadProvider } = useSelector((state: any) => state.contracts);
  const { notifications, page, finishedFetching } = useSelector(
    (state: any) => state.notifications
  );

  const [loading, setLoading] = React.useState(false);

  const loadNotifications = async () => {
    if (loading || finishedFetching) return;
    setLoading(true);
    try {
      const { count, results } = await api.fetchNotifications(
        account,
        NOTIFICATIONS_PER_PAGE,
        page,
        envConfig.apiUrl
      );
      const parsedResponse = utils.parseApiResponse(results);
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

  React.useEffect(() => {
    if (account) {
      loadNotifications();
      return () => {
        dispatch(resetState());
      }
    }
  }, [account]);

  //function to query more notifications
  const handlePagination = async () => {
    loadNotifications();
    dispatch(incrementPage());
  };

  const showWayPoint = (index: any) => {
    return Number(index) === notifications.length - 1 && !finishedFetching;
  };

  // Render
  return (
    <>
      <Container>
        {notifications && (
          <Items id="scrollstyle-secondary">
            {notifications.map((oneNotification, index) => {
              const { cta, title, message, app, icon, image } = oneNotification;

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
                  />
                </div>
              );
            })}
          </Items>
        )}
        {loading && (
          <Loader type="Oval" color="#35c5f3" height={40} width={40} />
        )}
        {!notifications.length && !loading && (
          <CenteredContainerInfo>
            <DisplayNotice
              title="You currently have no notifications, try subscribing to some channels."
              theme="third"
            />
          </CenteredContainerInfo>
        )}
      </Container>
    </>
  );
}

const EmptyWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
`;
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
export default Feedbox;
