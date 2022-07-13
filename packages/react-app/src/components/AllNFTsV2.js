import React from "react";

import styled from "styled-components";
import {
  Section,
  ItemH,
} from "../primaries/SharedStyling";

import Loader from "react-loader-spinner";

import { useWeb3React } from "@web3-react/core";
import { addresses, abis } from "@project/contracts";
import NFTHelper from "helpers/NFTHelper";
import { ethers } from "ethers";
import { envConfig } from "@project/contracts";
import ViewNFTV2Item from "components/ViewNFTsV2Item";

// Create Header
function AllNFTsV2({ controlAt, setControlAt, setTokenId }) {
  const { account, chainId, library } = useWeb3React();

  const [nftReadProvider, setNftReadProvider] = React.useState(null);
  const [nftWriteProvider, setNftWriteProvider] = React.useState(null);
  const [NFTRewardsV2Contract, setNFTRewardsV2Contract] = React.useState(null);
  const [NFTObjects, setNFTObjects] = React.useState([]);

  const [loading, setLoading] = React.useState(true);

  const onMainnetCore = chainId === envConfig.mainnetCoreContractChain;

  const mainnetCoreProvider = onMainnetCore
  ? library
  : new ethers.providers.JsonRpcProvider(envConfig.mainnetCoreRPC)

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

  // to fetch all minted NFT Details
  const fetchNFTDetails = async () => {
    let totalSupply = await NFTHelper.getTotalSupply(nftReadProvider);
    setLoading(false);
    for (let i = 0; i < totalSupply; i++) {
      let tokenId = await NFTHelper.getTokenByIndex(i, nftReadProvider)
      // let tokenURI = await NFTHelper.getTokenURIByIndex(tokenId, nftReadProvider);
      let NFTObject = await NFTHelper.getTokenData(
        tokenId,
        nftReadProvider,
        NFTRewardsV2Contract
      );
    let tokenUrl = NFTObject.metadata.replace('ipfs://','https://ipfs.io/ipfs/')
      let response = await fetch(`${tokenUrl}`);
      let data = await response.json()
      NFTObject['nftInfo'] = data
      await setNFTObjects((prev) => [...prev, NFTObject]);

    }
  };

  return (
    <Section align="center">
      {loading && (
        <ContainerInfo>
          <Loader type="Oval" color="#674c9f" height={40} width={40} />
        </ContainerInfo>
      )}

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

      {!loading && NFTObjects.length != 0 && (
        <ItemH id="scrollstyle-secondary">
          {Object.keys(NFTObjects).map((index) => {
            if (NFTObjects) {
              return (
                <>
                  <ViewNFTV2Item
                    key={NFTObjects[index]}
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
      )}
    </Section>
  );
}

// css styles
const ContainerInfo = styled.div`
  padding: 20px;
`;

// Export Default
export default AllNFTsV2;
