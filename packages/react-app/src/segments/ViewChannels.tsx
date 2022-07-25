import React from "react";
import styled, { useTheme } from "styled-components";
import Loader from "react-loader-spinner";
import { Waypoint } from "react-waypoint";
import { useDispatch, useSelector } from "react-redux";
import { postReq } from "api";
import { useWeb3React } from "@web3-react/core";
import { envConfig } from "@project/contracts";

import { Item, ItemH } from "../primaries/SharedStyling";
import { AiOutlineSearch } from "react-icons/ai";

import UtilityHelper from 'helpers/UtilityHelper';

import DisplayNotice from "../primaries/DisplayNotice";
import ViewChannelItem from "components/ViewChannelItem";
import Faucets from "components/Faucets";
import ChannelsDataStore from "singletons/ChannelsDataStore";
import { setChannelMeta, incrementPage } from "redux/slices/channelSlice";
import { incrementStepIndex } from "redux/slices/userJourneySlice";

import { ThemeProvider } from "styled-components";


const CHANNELS_PER_PAGE = 10; //pagination parameter which indicates how many channels to return over one iteration
const SEARCH_TRIAL_LIMIT = 5; //ONLY TRY SEARCHING 5 TIMES BEFORE GIVING UP
const DEBOUNCE_TIMEOUT = 500; //time in millisecond which we want to wait for then to finish typing
const ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/;
const SEARCH_DELAY = 1500;

// Create Header
function ViewChannels({ loadTeaser, playTeaser }) {
  const themes = useTheme();
  const dispatch = useDispatch();
  const { account, chainId } = useWeb3React();
  const { channels, page, ZERO_ADDRESS } = useSelector((state: any) => state.channels);
  const {
    run,
    stepIndex
  } = useSelector((state: any) => state.userJourney);

  const [loading, setLoading] = React.useState(false);
  const [moreLoading, setMoreLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [channelToShow, setChannelToShow] = React.useState([]);
  const [loadingChannel, setLoadingChannel] = React.useState(false);
  const [trialCount, setTrialCount] = React.useState(0);

  const channelsVisited = page * CHANNELS_PER_PAGE;

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
      CHANNELS_PER_PAGE,
      account,
      chainId
    );
    dispatch(incrementPage())
    if (!channels.length) {
      dispatch(setChannelMeta(channelsMeta));
    }

    // increases the step once the channel are loaded
    if (
      run &&
      stepIndex === 3
    ) {
      dispatch(incrementStepIndex());
      dispatch(incrementStepIndex());
    }

    setLoading(false);
  };

  // load more channels when we get to the bottom of the page
  const loadMoreChannelMeta = async (newPageNumber: any) => {
    const startingPoint = newPageNumber * CHANNELS_PER_PAGE;
    const moreChannels = await ChannelsDataStore.instance.getChannelFromApi(
      startingPoint,
      CHANNELS_PER_PAGE,
      account,
      chainId
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
      let payloadToSearchApiObj;
      if (envConfig.coreContractChain === 42) {
        payloadToSearchApiObj = {
          query: search,
          op: "read",
          page: 1,
          address: account,
          pageSize: 1000,
          chainId: chainId,
        };
      } else {
        payloadToSearchApiObj = {
          query: search,
          op: "read",
        };
      }
      postReq("/channels/search", payloadToSearchApiObj)
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
    // this is done so that we only make a request after the user stops typing
    const timeout = setTimeout(searchForChannel, DEBOUNCE_TIMEOUT);
    return () => {
      clearTimeout(timeout);
    };
  }, [search]);



  React.useEffect(() => {
    const parsedChannel = window.location.href.toString().slice(window.location.href.toString().length - 42)
    if (!ADDRESS_REGEX.test(parsedChannel)) return;
    setTimeout(() => {
      setSearch(parsedChannel);
    }, SEARCH_DELAY)
  }, [])

  return (
    <ThemeProvider theme={themes}>
      <Container>
        <ScrollItem>
          {!loading && (
            <ItemH
              padding="10px 0px"
              flex="initial"
            >
              <SearchContainer
                flex="1"
                margin="10px"
              >
                <SearchBar
                  type="text"
                  value={search}
                  onChange={(e: any) => setSearch(e.target.value)}
                  className="input"
                  placeholder="Search By Name/Address"
                />
                <Item
                  position="absolute"
                  top="0"
                  bottom="0"
                  left="12px"

                >
                  <AiOutlineSearch size={20} style={{ color: themes.viewChannelSearchIcon }} />
                </Item>
              </SearchContainer>

              {!UtilityHelper.isMainnet(chainId) &&
                <Faucets chainId={chainId} />
              }

            </ItemH>
          )}

          {/* render all channels depending on if we are searching or not */}
          {(search ? channelToShow : channels).map(
            (channel: any, index: any) =>
              channel &&
              channel.addr !== ZERO_ADDRESS && (
                <>
                  <ViewChannelItems key={channel.addr} self="stretch">
                    <ViewChannelItem channelObjectProp={channel} loadTeaser={loadTeaser} playTeaser={playTeaser} />
                  </ViewChannelItems>

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
        </ScrollItem>
      </Container>
    </ThemeProvider>
  );
}

// css styles
const SearchBar = styled.input`
  width: 100%;
  padding-right: 50px;
  height: 60px;
  padding-left: 40px;

  background: ${props => props.theme.viewChannelSearchBg};
  border: 1px solid ${props => props.theme.viewChannelSearchBorder} !important;
  color: ${props => props.theme.viewChannelSearchText};
  box-sizing: border-box;
  border-radius: 10px;
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

const ViewChannelItems = styled.div`
  align-self: stretch;
`

const CenteredContainerInfo = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterContainer = styled(ContainerInfo)`
  width: fit-content;
  align-self: center;
`;

const ScrollItem = styled(Item)`
  display: flex;
  align-self: stretch;
  align-items: stretch;
  justify-content: stretch;
  flex-wrap: nowrap;
  
  flex: 1;
  padding: 10px 20px;
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.scrollBg};
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    background-color: ${props => props.theme.scrollBg};
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: -webkit-gradient(linear,
                       left top,
                       left bottom,
                       color-stop(0.44, #35c5f3),
                       color-stop(0.72, #35b0f3),
                       color-stop(0.86, #35a1f3));
  }
`;

const SearchContainer = styled(Item)`
  min-width: 320px;

  @media (max-width: 768px) {
    min-width: 320px;
  }

  @media (max-width: 480px) {
    min-width: 210px;
  }
`;

// Export Default
export default ViewChannels; 
export { ScrollItem };
