import React from "react";

import styled from 'styled-components';
import {Section, ItemH} from 'components/SharedStyling';

import Loader from 'react-loader-spinner'
import { envConfig } from "@project/contracts";

import { useWeb3React } from '@web3-react/core'
import { addresses, abis } from "@project/contracts";
import NFTHelper from 'helpers/NFTHelper';
import { ethers } from "ethers";

import ViewNFTItem from "components/ViewNFTItem";

// Create Header
function AllNFTs({controlAt, setControlAt, setTokenId}) {
  const { account, chainId, library } = useWeb3React();

  const [nftReadProvider, setNftReadProvider] = React.useState(null);
  const [nftWriteProvider, setNftWriteProvider] = React.useState(null);
  const [NFTRewardsContract, setNFTRewardsContract] = React.useState(null);
  const [NFTObjects, setNFTObjects] = React.useState([]);

  const [loading, setLoading] = React.useState(true);

  const onMainnetCore = chainId === envConfig.mainnetCoreContractChain;

  const mainnetCoreProvider = onMainnetCore
        ? library
        : new ethers.providers.JsonRpcProvider(envConfig.mainnetCoreRPC)

  React.useEffect(() => {
    if (!!(mainnetCoreProvider && account)) {
      const contractInstance = new ethers.Contract(addresses.rockstar, abis.rockstar, mainnetCoreProvider);
      setNftReadProvider(contractInstance);
      let signer = mainnetCoreProvider.getSigner(account);
      const signerInstance = new ethers.Contract(addresses.rockstar, abis.rockstar, signer);
      setNftWriteProvider(signerInstance);
      const NFTRewardsInstance = new ethers.Contract(addresses.NFTRewards, abis.NFTRewards, signer);
      setNFTRewardsContract(NFTRewardsInstance);
    }
  }, [account]);

  React.useEffect(() => {
    if(nftReadProvider && NFTRewardsContract){
      fetchNFTDetails();
    }
  }, [account, nftReadProvider, nftWriteProvider, NFTRewardsContract]);

  // to fetch all minted NFT Details
  const fetchNFTDetails = async () => {
    let totalSupply = await NFTHelper.getTotalSupply(nftReadProvider);
    setLoading(false);
    for(let i=0; i<totalSupply; i++){
      let tokenId = await NFTHelper.getTokenByIndex(i, nftReadProvider)
      let NFTObject = await NFTHelper.getTokenData(tokenId, nftReadProvider, NFTRewardsContract)
      await setNFTObjects(prev => [...prev, NFTObject])
    }
  }

  return (
    <Section align="center">
      {loading &&
        <ContainerInfo>
          <Loader
           type="Oval"
           color="#674c9f"
           height={40}
           width={40}
          />
        </ContainerInfo>
      }

      {/* {!loading && NFTObjects.length == 0 &&
        <ContainerInfo>
          <Loader
           type="Oval"
           color="#674c9f"
           height={40}
           width={40}
          />
        </ContainerInfo>
      } */}

      {!loading && NFTObjects.length != 0 &&
        <ItemH id="scrollstyle-secondary">
          {Object.keys(NFTObjects).map(index => {
            if (NFTObjects) {
              return (
                <>
                <ViewNFTItem
                  key={NFTObjects[index].id}
                  NFTObject={NFTObjects[index]}
                  nftReadProvider={nftReadProvider}
                  nftWriteProvider={nftWriteProvider}
                  controlAt={controlAt}
                  setControlAt={setControlAt}
                  setTokenId={setTokenId}
                />
                </>
              );
            }
          })}
        </ItemH>
      }
    </Section>
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
export default AllNFTs;
