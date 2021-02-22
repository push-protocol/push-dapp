import React from "react";
import styled, { css } from 'styled-components';
import Loader from 'react-loader-spinner'

import { useWeb3React } from '@web3-react/core'
import { addresses, abis } from "@project/contracts";
import EPNSCoreHelper from 'helpers/EPNSCoreHelper';
import { ethers } from "ethers";

import DisplayNotice from "components/DisplayNotice";
import ViewChannelItem from "components/ViewChannelItem";
import Faucets from "components/Faucets";

import ChannelsDataStore, { ChannelEvents } from "singletons/ChannelsDataStore";
import UsersDataStore, { UserEvents } from "singletons/UsersDataStore";

// Create Header
function ViewChannels({ epnsReadProvider, epnsWriteProvide }) {
  const { account, library } = useWeb3React();

  const [controlAt, setControlAt] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [channels, setChannels] = React.useState([]);
  const [user, setUser] = React.useState(null);
  const [owner, setOwner] = React.useState(null);

  React.useEffect(() => {
    fetchChannels();
  }, [account]);

  // handle user action at control center
  const userClickedAt = (controlIndex) => {
    setControlAt(controlIndex);
  }

  //ROPSTEN ETHER FAUCET API IMPLEMENTATION
  //not feasible at the moment

  // const requestEther = () => {

  //   fetch('https://faucet.ropsten.be/donate/0x276B820E8382f17ECB9FA77B0952ca4E67287601')
  //   .then(async response => {
  //     const data = await response.json();
  //     console.log("🚀 ~ file: ViewChannels.tsx ~ line 40 ~ requestEther ~ data", data)

  //     // check for error response
  //     if (!response.ok) {
  //         // get error message from body or default to response statusText
  //         const error = (data && data.message) || response.statusText;
  //         console.log(error);
  //     }
  // })
  // .catch(error => {
  //     console.error('There was an error!', error);
  // });
  // }

  // to fetch channels
  const fetchChannels = async () => {
    // get and set user and owner first
    const userMeta = await UsersDataStore.instance.getUserMetaAsync();
    setUser(userMeta);

    const ownerAddr = await UsersDataStore.instance.getOwnerMetaAsync();
    setOwner(ownerAddr);

    // const channelsMeta = await EPNSCoreHelper.getChannelsMetaLatestToOldest(-1, -1, epnsReadProvider);
    const channelsMeta = await ChannelsDataStore.instance.getChannelsMetaAsync(-1, -1);

    // sort this again, this time with subscriber count
    // channelsMeta.sort((a, b) => {
    //   if (a.memberCount.toNumber() < b.memberCount.toNumber()) return -1;
    //   if (a.memberCount.toNumber() > b.memberCount.toNumber()) return 1;
    //   return 0;
    // });

    // Filter out channel

    setChannels(channelsMeta);
    setLoading(false);
  }

  return (
    <>
    <Container>
      {loading &&
        <ContainerInfo>
          <Loader
           type="Oval"
           color="#35c5f3"
           height={40}
           width={40}
          />
        </ContainerInfo>
      }

      {!loading && controlAt == 0 && channels.length == 0 &&
        <ContainerInfo>
          <DisplayNotice
            title="That's weird, No Channels in EPNS... world is ending... right?"
            theme="primary"
          />
        </ContainerInfo>
      }

      {!loading && controlAt == 0 && channels.length != 0 &&
        <Items id="scrollstyle-secondary">
          <Faucets/>

          {Object.keys(channels).map(index => {
            const isOwner = (
              channels[index].addr === account ||
              (account === owner && channels[index].addr === "0x0000000000000000000000000000000000000000")
            );

            if (channels[index].addr !== "0x0000000000000000000000000000000000000000") {
              return (
                <ViewChannelItem
                  key={channels[index].addr}
                  channelObject={channels[index]}
                  isOwner={isOwner}
                  epnsReadProvider={epnsReadProvider}
                  epnsWriteProvide={epnsWriteProvide}
                />
              );
            }
            else if (channels[index].addr === "0x0000000000000000000000000000000000000000" && user.channellized) {
              return (
                <ViewChannelItem
                  key={channels[index].addr}
                  channelObject={channels[index]}
                  isOwner={isOwner}
                  epnsReadProvider={epnsReadProvider}
                  epnsWriteProvide={epnsWriteProvide}
                />
              );
            }
            else {
              return null;
            }
          })}
        </Items>
      }
    </Container>
    </>
  );
}

// css styles
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  font-weight: 200;
  align-content: center;
  align-items: center;
  justify-content: center;

  max-height: 80vh;
`

const ContainerInfo = styled.div`
  padding: 20px;
`

const Items = styled.div`
  display: block;
  align-self: stretch;
  padding: 10px 20px;
  overflow-y: scroll;
  background: #fafafa;
`

// Export Default
export default ViewChannels;
