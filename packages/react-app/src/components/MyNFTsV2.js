import React,{useState} from "react";
import styled from 'styled-components';
import Loader from 'react-loader-spinner'

import { useWeb3React } from '@web3-react/core'
import { addresses, abis } from "@project/contracts";
import NFTHelper from 'helpers/NFTHelper';
import { ethers } from "ethers";
import { envConfig } from "@project/contracts";

import DisplayNotice from "../primaries/DisplayNotice";
import ViewNFTV2Item from "components/ViewNFTsV2Item";
import { ItemH } from "../primaries/SharedStyling";

// Create Header
function MyNFTs({controlAt, setControlAt, setTokenId}) {
  const { account, library,chainId } = useWeb3React();

  const [nftReadProvider, setNftReadProvider] = React.useState(null);
  const [nftWriteProvider, setNftWriteProvider] = React.useState(null);
  const [NFTRewardsV2Contract, setNFTRewardsV2Contract] = React.useState(null);
  const [NFTObjects, setNFTObjects] = useState([]);

  const [loading, setLoading] = React.useState(true);

  const onMainnetCore = chainId === envConfig.mainnetCoreContractChain;

  const mainnetCoreProvider = onMainnetCore
    ? library
    : new ethers.providers.JsonRpcProvider(envConfig.mainnetCoreRPC);

  React.useEffect(() => {
    if (!!(mainnetCoreProvider && account)) {
      const contractInstance = new ethers.Contract(
        addresses.rockstarV2,
        abis.rockstarV2,
        mainnetCoreProvider
      );
      setNftReadProvider(contractInstance);
      let signer = mainnetCoreProvider.getSigner(account);
      const signerInstance = new ethers.Contract(
        addresses.rockstarV2,
        abis.rockstarV2,
        signer
      );
      setNftWriteProvider(signerInstance);
      const NFTRewardsV2Instance = new ethers.Contract(
        addresses.NFTRewardsV2,
        abis.NFTRewardsV2,
        signer
      );
      setNFTRewardsV2Contract(NFTRewardsV2Instance);
    }
  }, [account]);

  React.useEffect(() => {
    if (nftReadProvider) {
      fetchNFTDetails();
    }
  }, [account, nftReadProvider]);


  // to fetch NFT Details
  const fetchNFTDetails = async () => {
    let balance = await NFTHelper.getNFTBalance(account, nftReadProvider);
    setLoading(false);
    for(let i= 0; i<balance; i++){
      let tokenId = await NFTHelper.getTokenOfOwnerByIndex(account, i, nftReadProvider)
      // let tokenURI = await NFTHelper.getTokenURIByIndex(tokenId, nftReadProvider);
      let NFTObject = await NFTHelper.getTokenData(tokenId, nftReadProvider,NFTRewardsV2Contract)
      let url = await callFunction(NFTObject.metadata)
      NFTObject['nftInfo']= url
      setNFTObjects((prev) => [...prev, NFTObject]);
    }
  }

  const callFunction =  async (tokenURI) => {
      let tokenUrl = tokenURI.replace('ipfs://','https://ipfs.io/ipfs/')
      let response = await fetch(`${tokenUrl}`);
      let data = await response.json()
      return data
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
            title="No ROCKSTAR NFTs are available in your account"
            theme="primary"
          />
        </ContainerInfo>
      }


      {!loading && NFTObjects.length != 0 &&
        <ItemH id="scrollstyle-secondary">

          {Object.keys(NFTObjects).map(index => {
            if (NFTObjects) {
              return (
                <ViewNFTV2Item
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
        </ItemH>
      }
    </>
  );
}

// css styles
const ContainerInfo = styled.div`
  padding: 20px;
`

// Export Default
export default MyNFTs;
