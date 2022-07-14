import React from "react";
import styled from 'styled-components';
import Loader from 'react-loader-spinner'
import { envConfig } from "@project/contracts";

import { useWeb3React } from '@web3-react/core'
import { addresses, abis } from "@project/contracts";
import NFTHelper from 'helpers/NFTHelper';
import { ethers } from "ethers";

import DisplayNotice from "../primaries/DisplayNotice";
import ViewNFTItem from "components/ViewNFTItem";

// Create Header
function MyNFTs({controlAt, setControlAt, setTokenId}) {
  const { account, library, chainId } = useWeb3React();

  const [nftReadProvider, setNftReadProvider] = React.useState(null);
  const [nftWriteProvider, setNftWriteProvider] = React.useState(null);
  const [NFTRewardsContract, setNFTRewardsContract] = React.useState(null);
  const [NFTObjects, setNFTObjects] = React.useState([]);

  const [loading, setLoading] = React.useState(true);

  const onMainnetCore = chainId === envConfig.mainnetCoreContractChain;

  const mainnetCoreProvider = onMainnetCore
    ? library
    : new ethers.providers.JsonRpcProvider(envConfig.mainnetCoreRPC);

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

  // to fetch NFT Details
  const fetchNFTDetails = async () => {
    let balance = await NFTHelper.getNFTBalance(account, nftReadProvider);
    setLoading(false);
    for(let i=0; i<balance; i++){
      let tokenId = await NFTHelper.getTokenOfOwnerByIndex(account, i, nftReadProvider)
      let NFTObject = await NFTHelper.getTokenData(tokenId, nftReadProvider, NFTRewardsContract)
      await setNFTObjects(prev => [...prev, NFTObject])
    }
  }

  return (
    <>
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

      {!loading && NFTObjects.length == 0 &&
        <ContainerInfo>
          <DisplayNotice
            title="No ROCKSTAR tokens are available in your account"
            theme="primary"
          />
        </ContainerInfo>
      }


      {!loading && NFTObjects.length != 0 &&
        <Items id="scrollstyle-secondary">

          {Object.keys(NFTObjects).map(index => {
            if (NFTObjects[index].id) {
              return (
                <ViewNFTItem
                  key={NFTObjects[index].id}
                  NFTObject={NFTObjects[index]}
                  nftReadProvider={nftReadProvider}
                  nftWriteProvider={nftWriteProvider}
                  controlAt={controlAt}
                  setControlAt={setControlAt}
                  setTokenId={setTokenId}
                />
              );
            }

          })}
        </Items>
      }
    </>
  );
}

// css styles
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
export default MyNFTs;
