import React from "react";
import styled, { css } from 'styled-components';
import Loader from 'react-loader-spinner'
import { Waypoint } from "react-waypoint";

import { useWeb3React } from '@web3-react/core'
import { addresses, abis } from "@project/contracts";
import NFTHelper from 'helpers/NFTHelper';
import { ethers } from "ethers";

import DisplayNotice from "components/DisplayNotice";
import ViewNFTItem from "components/ViewNFTItem";


// Create Header
function AllNFTs({controlAt, setControlAt, setTokenId}) {
  const { account, library } = useWeb3React();

  const [nftReadProvider, setNftReadProvider] = React.useState(null);
  const [nftWriteProvider, setNftWriteProvider] = React.useState(null);
  const [NFTRewardsContract, setNFTRewardsContract] = React.useState(null);
  const [NFTObjects, setNFTObjects] = React.useState([]);

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!!(library && account)) {
      const contractInstance = new ethers.Contract(addresses.rockstar, abis.rockstar, library);
      setNftReadProvider(contractInstance);
      let signer = library.getSigner(account);
      const signerInstance = new ethers.Contract(addresses.rockstar, abis.rockstar, signer);
      setNftWriteProvider(signerInstance);
      const NFTRewardsInstance = new ethers.Contract(addresses.NFTRewards, abis.NFTRewards, signer);
      setNFTRewardsContract(NFTRewardsInstance);
    }
  }, [account, library]);

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
            title="That's weird, No ROCKSTAR NFTs in EPNS... world is ending... right?"
            theme="primary"
          />
        </ContainerInfo>
      }
      

      {!loading && NFTObjects.length != 0 &&
        <Items id="scrollstyle-secondary">

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
        </Items>
      }
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
export default AllNFTs;
