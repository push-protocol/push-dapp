import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import { Waypoint } from "react-waypoint";
import { useWeb3React } from "@web3-react/core";
import { useSelector, useDispatch } from "react-redux";
import { envConfig } from "@project/contracts";
import DisplayNotice from "components/DisplayNotice";
import SpamBox from "./spam";
import {
  api,
  utils,
  NotificationItem,
} from "@epnsproject/frontend-sdk-staging";
import {
  addPaginatedNotifications,
  incrementPage,
  setFinishedFetching,
  resetState,
  updateTopNotifications,
} from "redux/slices/notificationSlice";

const NOTIFICATIONS_PER_PAGE = 10;
// Create Header
function Feedbox() {
  const dispatch = useDispatch();
  const { account } = useWeb3React();
  const { epnsCommReadProvider } = useSelector((state: any) => state.contracts);
  const { notifications, page, finishedFetching, toggle } = useSelector(
    (state: any) => state.notifications
  );

  const [bgUpdateLoading, setBgUpdateLoading] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [currentTab, setCurrentTab] = React.useState("inbox");

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
  const fetchLatestNotifications = async () => {
    if (loading || bgUpdateLoading) return;
    setBgUpdateLoading(true);
    setLoading(true);
    try {
      const { count, results } = await api.fetchNotifications(
        account,
        NOTIFICATIONS_PER_PAGE,
        1,
        envConfig.apiUrl
      );
      if (!notifications.length) {
        dispatch(incrementPage());
      }
      const parsedResponse = utils.parseApiResponse(results);
      // replace the first 20 notifications with these
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
    if (account && currentTab === "inbox") {
      fetchLatestNotifications();
    }
  }, [account, currentTab]);

  React.useEffect(() => {
    fetchLatestNotifications();
  }, [toggle]);

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

  // Render
  return (
    <FullWidth>
      <Wrapper>
        <Button active={currentTab == "inbox"} onClick={() => setCurrentTab("inbox")}>Inbox</Button>
        <Button active={currentTab == "spambox"} onClick={() => setCurrentTab("spambox")} spam>
          Spam
        </Button>
      </Wrapper>
      {currentTab == "spambox" ? (
        <SpamBox currentTab={currentTab} />
      ) : (
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
                    />
                  </div>
                );
              })}
            </Items>
          )}
          {loading && !bgUpdateLoading && (
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
      )}
    </FullWidth>
  );
}

const FullWidth = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: space-between;
`;

const Button = styled.div`
  border: 0;
  outline: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 8px 15px;
  margin: 10px;
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  background: ${(props: any) => (props.spam ? "#e20880" : "#674C9F")};
  min-width: 100px;
  width: 45%;
  cursor: ${(props: any) => (props.active ? "not-allowed" : "pointer")};
  opacity: ${(props: any) => (props.active ? 0.5 : 1)};

  &:hover {
    opacity: ${(props: any) => (props.active ? 0.5 : 0.8)};
  }
`;

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
