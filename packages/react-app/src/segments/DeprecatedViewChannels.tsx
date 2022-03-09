
import React from 'react';
import styled from "styled-components";
import Loader from "react-loader-spinner";
import { Waypoint } from "react-waypoint";
import { useDispatch, useSelector } from "react-redux";
import { postReq } from "api";
import { useWeb3React } from "@web3-react/core";
import { envConfig } from "@project/contracts";

import { AiOutlineSearch } from "react-icons/ai";

import DisplayNotice from "components/DisplayNotice";
import ViewChannelItem from "components/ViewChannelItem";
import Faucets from "components/Faucets";
import ChannelsDataStore from "singletons/ChannelsDataStore";
import { setChannelMeta, incrementPage } from "redux/slices/channelSlice";

import {ThemeProvider} from "styled-components";
import { themeLight, themeDark } from "config/Themization";
import queryString from 'query-string';



const CHANNELS_PER_PAGE = 10; //pagination parameter which indicates how many channels to return over one iteration
const SEARCH_TRIAL_LIMIT = 5; //ONLY TRY SEARCHING 5 TIMES BEFORE GIVING UP
const DEBOUNCE_TIMEOUT = 500; //time in millisecond which we want to wait for then to finish typing
const ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/;
const SEARCH_DELAY = 1500;



// Create Header
function ViewChannels() {
  const dispatch = useDispatch();
  const { account, chainId } = useWeb3React();
  const { channels, page, ZERO_ADDRESS } = useSelector(
    (state: any) => state.channels
  );

  const [loading, setLoading] = React.useState(false);
  const [moreLoading, setMoreLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [channelToShow, setChannelToShow] = React.useState([]);
  const [loadingChannel, setLoadingChannel] = React.useState(false);
  const [trialCount, setTrialCount] = React.useState(0);

  const channelsVisited = page * CHANNELS_PER_PAGE;
  const isMainnet = chainId == 1;

  // fetch channel data if we are just getting to this pae
  React.useEffect(() => {
    setLoading(!channels.length); //if there are no channels initially then, set the loader
    fetchInitialsChannelMeta();
  }, [account, chainId]);

  // to update a page
  const updateCurrentPage = () => {
    if (loading || moreLoading) return;
    // fetch more channel information
    setMoreLoading(true);
    dispatch(incrementPage());
    loadMoreChannelMeta(page + 1); //load the meta for the next page
  };

  // to fetch initial channels and logged in user data
  const fetchInitialsChannelMeta = async () => {
    // fetch the meta of the first `CHANNELS_PER_PAGE` channels
    const channelsMeta = await ChannelsDataStore.instance.getChannelFromApi(
      channelsVisited,
      CHANNELS_PER_PAGE
    );
    dispatch(incrementPage())
    if (!channels.length) {
      dispatch(setChannelMeta(channelsMeta));
    }
    setLoading(false);
  };

  // load more channels when we get to the bottom of the page
  const loadMoreChannelMeta = async (newPageNumber: any) => {
    const startingPoint = newPageNumber * CHANNELS_PER_PAGE;
    const moreChannels = await ChannelsDataStore.instance.getChannelFromApi(
      startingPoint,
      CHANNELS_PER_PAGE
    );
    dispatch(setChannelMeta([...channels, ...moreChannels]));
    setMoreLoading(false);
  };

  // conditionally display the waymore bar which loads more information
  // load more channels when we are at the bottom of the page
  const showWayPoint = (index: any) => {
    return Number(index) === channels.length - 1;
  };

  // Search Channels Feature
  React.useEffect(() => {
    if (!channels.length) return;
    setChannelToShow(channels);
  }, [channels]);


  function searchForChannel() {
    if (loadingChannel) return; //if we are already loading, do nothing
    if (search) {
      setLoadingChannel(true); //begin loading here
      setChannelToShow([]); //maybe remove later
      postReq("/channels/search", {
        query: search,
        op: "read",
      })
        .then((data) => {
          setChannelToShow(data.data.channels || []);
          setLoadingChannel(false);
        })
        .catch(() => {
          // if there's an error search for three times before giving up and displaying the normal channels
          if (trialCount < SEARCH_TRIAL_LIMIT) {
            setTrialCount((t) => t + 1);
            searchForChannel(); //if theres an error, recursively search
          } else {
            setChannelToShow(channels);
            setLoadingChannel(false);
          }
        });
    } else {
      // if no search item, then set it back to the channels
      setLoadingChannel(false);
      setChannelToShow(channels);
    }
  }

  React.useEffect(() => {
    // debounce request
    // this is done so that we only make a request after the user stops typing
    const timeout = setTimeout(searchForChannel, DEBOUNCE_TIMEOUT);
    return () => {
      clearTimeout(timeout);
    };
  }, [search]);

  React.useEffect(() => {
    const parsedChannel = String(queryString.parse(window.location.search).channel)
    if(!ADDRESS_REGEX.test(parsedChannel)) return;
    setTimeout(() => {
      setSearch(parsedChannel);
    }, SEARCH_DELAY)
  }, [])

  return (
    <>
      <Container>
        {!loading && channels.length == 0 ? (
          <ContainerInfo>
            <DisplayNotice
              title="That's weird, No Channels in EPNS... world is ending... right?"
              theme="primary"
            />
          </ContainerInfo>
        ) : (
          <Items
            id="scrollstyle-secondary"
            style={{ position: "relative", padding: "0 1rem" }}
          >
            {!loading && (
              <Header style={{ minHeight: "140px" }}>
                  {/* if on mainnet then occupy full width*/}
                <InputWrapper style={{width: isMainnet ? "100%" : "50%"}}>
                  <SearchBar
                    type="text"
                    value={search}
                    onChange={(e: any) => setSearch(e.target.value)}
                    className="input"
                    placeholder="Search By Name/Address"
                  />
                  <SearchIconImage src='/searchicon.svg' alt="" />
                </InputWrapper>
                {!isMainnet && <Faucets />} 
                {/* only display faucets on mainnet */}
              </Header>
            )}

            {/* render all channels depending on if we are searching or not */}
            {(search ? channelToShow : channels).map(
              (channel: any, index: any) =>
                channel &&
              channel.addr !== ZERO_ADDRESS && (
                <>
                  <div key={channel.addr}>
                    <ViewChannelItem channelObjectProp={channel} />
                  </div>
                  {showWayPoint(index) && (
                    <Waypoint onEnter={updateCurrentPage} />
                  )}
                </>
              )
            )}
            {/* render all channels depending on if we are searching or not */}

            {/* if we are in search mode and there are no channels then display error message */}
            {search && !channelToShow?.length && !loadingChannel && (
              <CenteredContainerInfo>
                <DisplayNotice
                  title="No channels match your query, please search for another name/address"
                  theme="third"
                />
              </CenteredContainerInfo>
            )}
            {/* display loader if pagination is loading next batch of channelTotalList */}
            {((moreLoading && channels.length) ||
              loading ||
              loadingChannel) && (
              <CenterContainer>
                <Loader type="Oval" color="#35c5f3" height={40} width={40} />
              </CenterContainer>
            )}
          </Items>
        )}
      </Container>
    </>
  );
}

// css styles
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  background: inherit;
  
  top: 0px;
  z-index: 2;
  background: #fafafa;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const InputWrapper = styled.div`
  width: 50%;
  position: relative;

  @media (max-width: 600px) {
    width: 100%;
    margin: 2rem 0;
  }
`;

const SearchBar = styled.input`
  width: 100%;
  padding-right: 50px;
  height: 60px;
  padding-left: 40px;

  background: rgb(255, 255, 255);
  border: 1px solid rgba(169, 169, 169, 0.5);
  box-sizing: border-box;
  border-radius: 10px;
  transition: 500ms;
  text-transform: capitalize;
  font-size: 16px;

  input[type="reset"] {
    display: none;
  }
  &::placeholder {
    letter-spacing: 0.15em;
  }
  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
  &:focus {
    border: 1px solid #ec008c;
  }
`;
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  font-weight: 200;
  align-content: center;
  align-items: center;
  justify-content: center;

  max-height: 92vh;
`;

const ContainerInfo = styled.div`
  padding: 20px;
`;

const CenteredContainerInfo = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterContainer = styled(ContainerInfo)`
  width: fit-content;
  margin: auto;
`;

const Items = styled.div`
  display: block;
  align-self: stretch;
  padding: 10px 20px;
  overflow-y: scroll;
  background: #fafafa;
`;

const SearchIconImage = styled.img`
  position: absolute;
  right: 4px;
  top: 4px;
`;

// Export Default
export default ViewChannels;
