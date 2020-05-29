import React from "react";
import styled, { css } from 'styled-components';
import Loader from 'react-loader-spinner'

import { useWeb3React } from '@web3-react/core'
import { addresses, abis } from "@project/contracts";
import EPNSCoreHelper from 'helpers/EPNSCoreHelper';
import { ethers } from "ethers";

import DisplayNotice from "components/DisplayNotice";
import ViewChannelItem from "components/ViewChannelItem";

import ChannelsDataStore, { channel_events } from "singletons/ChannelsDataStore";
import UsersDataStore, { user_events } from "singletons/UsersDataStore";

// Create Header
function ViewChannels({ epnsReadProvider, epnsWriteProvide }) {
  const { account, library } = useWeb3React();

  const [loading, setLoading] = React.useState(true);
  const [channels, setChannels] = React.useState([]);

  React.useEffect(() => {
    fetchChannels();
  }, [account]);

  // to fetch channels
  const fetchChannels = async () => {
    // const channesInfo = await EPNSCoreHelper.getChannelsMetaLatestToOldest(-1, -1, epnsReadProvider);
    const channesInfo = await ChannelsDataStore.instance.getChannelsMetaAsync(-1, -1);

    setChannels(channesInfo);
    setLoading(false);
  }

  return (
    <Container>
      {loading &&
        <Loader
         type="Oval"
         color="#35c5f3"
         height={40}
         width={40}
        />
      }

      {!loading && channels.length == 0 &&
        <DisplayNotice
          title="That's weird, No Channels in EPNS... world is ending... right?"
          theme="primary"
        />
      }

      {!loading && channels.length != 0 &&
        <Items>
          {channels.map(channelObject => {

            return (
              <ViewChannelItem
                channelObject={channelObject}
                epnsReadProvider={epnsReadProvider}
                epnsWriteProvide={epnsWriteProvide}
              />
            );
          })}
        </Items>
      }
    </Container>
  );
}

// css styles
const Container = styled.div`
  font-size: 32px;
  color: #DDD;
  display: flex;
  font-weight: 200;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Items = styled.div`

`

// Export Default
export default ViewChannels;
