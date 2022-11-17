// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import { ethers } from "ethers";
import React from "react";

// External Packages
import styled from 'styled-components';

// Internal Compoonents
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ItemVV2 } from "components/reusables/SharedStylingV2";
import ViewNFTItem from "components/ViewNFTItem";
import { ItemH, Section } from 'primaries/SharedStyling';
import NFTHelper from 'helpers/NFTHelper';

// Internal Configs
import { abis, addresses, appConfig } from "config";


// Create Header
function AllNFTs({ controlAt, setControlAt, setTokenId }) {
  const { account, chainId, library } = useWeb3React();

  const [nftReadProvider, setNftReadProvider] = React.useState(null);
  const [nftWriteProvider, setNftWriteProvider] = React.useState(null);
  const [NFTRewardsContract, setNFTRewardsContract] = React.useState(null);
  const [NFTObjects, setNFTObjects] = React.useState([]);

  const [loading, setLoading] = React.useState(true);

  const onMainnetCore = chainId === appConfig.mainnetCoreContractChain;

  const mainnetCoreProvider = onMainnetCore
    ? library
    : new ethers.providers.JsonRpcProvider(appConfig.mainnetCoreRPC)

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
    if (nftReadProvider && NFTRewardsContract) {
      fetchNFTDetails();
    }
  }, [account, nftReadProvider, nftWriteProvider, NFTRewardsContract]);

  // to fetch all minted NFT Details
  const fetchNFTDetails = async () => {
    let totalSupply = await NFTHelper.getTotalSupply(nftReadProvider);
    setLoading(false);
    for (let i = 0; i < totalSupply; i++) {
      let tokenId = await NFTHelper.getTokenByIndex(i, nftReadProvider)
      let NFTObject = await NFTHelper.getTokenData(tokenId, nftReadProvider, NFTRewardsContract)
      await setNFTObjects(prev => [...prev, NFTObject])
    }
  }

  return (
    <Section align="center">
      {loading &&
        <ItemVV2 padding="50px 20px 20px 20px">
          <LoaderSpinner type={LOADER_TYPE.SEAMLESS} />
        </ItemVV2>
      }

      {!loading && NFTObjects.length != 0 &&
        <ItemH id="scrollstyle-secondary" margin="20px 0 0 0">
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
const ContainerInfo = styled.div`
  padding: 20px;
`

// Export Default
export default AllNFTs;
