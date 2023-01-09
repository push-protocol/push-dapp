// React + Web3 Essentials
import { ethers } from 'ethers';

interface ITokenFunctionProps {
  tokenId: string | number;
  contract: ethers.Contract;
}

// FeedDB Helper Function
const NFTHelper = {
  getNFTBalance: async (user: string, contract: ethers.Contract): Promise<number | string> => {
    const enableLogs: number = 0;

    return new Promise((resolve, reject) => {
      if (contract) {
        contract
          .balanceOf(user)
          .then((response: any) => {
            if (enableLogs) console.log('getNFTBalance() --> %o', response);
            resolve(response.toNumber());
          })
          .catch((err: any) => {
            console.log('!!!Error, getNFTBalance() --> %o', err);
            reject(err);
          });
      }
    });
  },

  getTotalSupply: async (contract: ethers.Contract): Promise<number> => {
    const enableLogs: number = 0;

    return new Promise((resolve, reject) => {
      contract
        .totalSupply()
        .then((response: any) => {
          if (enableLogs) console.log('getNFTBalance() --> %o', response);
          resolve(response.toNumber());
        })
        .catch((err: any) => {
          console.log('!!!Error, getNFTBalance() --> %o', err);
          reject(err);
        });
    });
  },

  getOwnerOfTokenId: async ({ tokenId, contract }: ITokenFunctionProps): Promise<any> => {
    const enableLogs: number = 0;

    return new Promise((resolve, reject) => {
      contract
        .ownerOf(tokenId)
        .then((response: any) => {
          if (enableLogs) console.log('getOwnerOfTokenId() --> %o', response);
          resolve(response);
        })
        .catch((err: any) => {
          console.log('!!!Error, getOwnerOfTokenId() --> %o', err);
          reject(err);
        });
    });
  },

  getTokenOfOwnerByIndex: async (user: string, index: number, contract: ethers.Contract): Promise<number | string> => {
    const enableLogs: number = 0;

    return new Promise((resolve, reject) => {
      contract
        .tokenOfOwnerByIndex(user, index)
        .then((response: any) => {
          if (enableLogs) console.log('getTokenOfOwnerByIndex() --> %o', response);
          resolve(response.toNumber());
        })
        .catch((err: any) => {
          console.log('!!!Error, getTokenOfOwnerByIndex() --> %o', err);
          reject(err);
        });
    });
  },

  getTokenByIndex: async (index: number, contract: ethers.Contract): Promise<number | string> => {
    const enableLogs: number = 0;

    return new Promise((resolve, reject) => {
      contract
        .tokenByIndex(index)
        .then((response: any) => {
          if (enableLogs) console.log('getTokenByIndex() --> %o', response);
          resolve(response.toNumber());
        })
        .catch((err: any) => {
          console.log('!!!Error, getTokenByIndex() --> %o', err);
          reject(err);
        });
    });
  },

  getTokenMetadata: async ({ tokenId, contract }: ITokenFunctionProps): Promise<any> => {
    const enableLogs: number = 0;

    return new Promise((resolve, reject) => {
      contract
        .tokenURI(tokenId)
        .then((response: any) => {
          if (enableLogs) console.log('getTokenMetadata() --> %o', response);
          resolve(response);
        })
        .catch((err: any) => {
          console.log('!!!Error, getTokenMetadata() --> %o', err);
          reject(err);
        });
    });
  },

  getTokenMetadatasOfOwner: async (
    owner: string,
    nftContract: ethers.Contract,
    rewardsContract: ethers.Contract
  ): Promise<any> => {
    const enableLogs: number = 1;

    return new Promise((resolve, reject) => {
      NFTHelper.getNFTBalance(owner, nftContract)
        .then(async (balance) => {
          // const balance = await res
          let NFTDetails: any[] = [];
          let promises: any[] = [];

          for (let i = 0; i < balance; i++) {
            promises.push(
              NFTHelper.getTokenOfOwnerByIndex(owner, i, nftContract).then(async (tokenId) => {
                await NFTHelper.getClaimable({ tokenId, contract: rewardsContract })
                  .then(async (claimable) => {
                    console.log('🚀 ~ file: NFTHelper.js ~ line 102 ~ .then ~ claimable', claimable);

                    await NFTHelper.getTokenMetadata({ tokenId, contract: nftContract }).then(async (metadata) => {
                      if (tokenId != null && metadata != null && claimable != null)
                        NFTDetails.push({ id: tokenId, metadata, claimable });
                    });
                  })
                  .catch((err) => {
                    console.log('!!!Error, getClaimable() --> %o', err);
                    reject(err);
                  });
              })
            );
          }
          // // wait until all promises are resolved
          await Promise.all(promises);
          console.log('🚀 ~ file: NFTHelper.js ~ line 83 ~ .then ~ NFTDetails', NFTDetails);
          resolve(NFTDetails);
        })
        .catch((err) => {
          console.log('!!!Error, getTokenMetadatasOfOwner() --> %o', err);
          reject(err);
        });
    });
  },

  getAllTokenDatas: async (nftContract: ethers.Contract, rewardsContract: ethers.Contract) => {
    const enableLogs: number = 1;

    return new Promise((resolve, reject) => {
      NFTHelper.getNFTBalance(nftContract)
        .then(async (totalSupply) => {
          let NFTDetails: any[] = [];
          let promises: any[] = [];

          for (let i = 0; i < totalSupply; i++) {
            promises.push(
              NFTHelper.getTokenByIndex(i, nftContract)
                .then(async (tokenId) => {
                  await NFTHelper.getClaimable({ tokenId, contract: rewardsContract })
                    .then(async (claimable) => {
                      await NFTHelper.getTokenMetadata({ tokenId, contract: nftContract })
                        .then(async (metadata) => {
                          await NFTHelper.getOwnerOfTokenId({ tokenId, contract: nftContract })
                            .then(async (owner) => {
                              if (tokenId != null && metadata != null && claimable != null && owner != null)
                                NFTDetails.push({ id: tokenId, metadata, owner, claimable });
                            })
                            .catch((err) => {
                              console.log('!!!Error, getAllTokenDatas::getOwnerOfTokenId() --> %o', err);
                              reject(err);
                            });
                        })
                        .catch((err) => {
                          console.log('!!!Error, getAllTokenDatas::getTokenMetadata() --> %o', err);
                          reject(err);
                        });
                    })
                    .catch((err) => {
                      console.log('!!!Error, getAllTokenDatas::getClaimable() --> %o', err);
                      reject(err);
                    });
                })
                .catch((err) => {
                  console.log('!!!Error, getAllTokenDatas::getTokenByIndex() --> %o', err);
                  reject(err);
                })
            );
          }
          // // wait until all promises are resolved
          await Promise.all(promises);
          console.log('🚀 ~ file: NFTHelper.js ~ line 83 ~ .then ~ NFTDetails', NFTDetails);
          resolve(NFTDetails);
        })
        .catch((err) => {
          console.log('!!!Error, getAllTokenDatas() --> %o', err);
          reject(err);
        });
    });
  },

  getTokenData: async (
    tokenId: string | number,
    nftContract: ethers.Contract,
    rewardsContract: ethers.Contract
  ): Promise<any> => {
    const enableLogs: number = 0;

    return new Promise((resolve, reject) => {
      NFTHelper.getTokenMetadata({ tokenId, contract: nftContract })
        .then(async (metadata: any) => {
          await NFTHelper.getOwnerOfTokenId({ tokenId, contract: nftContract }).then(async (owner) => {
            if (tokenId != null && metadata != null && owner != null) resolve({ id: tokenId, metadata, owner });
          });
        })
        .catch((err: any) => {
          console.log('!!!Error, getTokenData() --> %o', err);
          reject(err);
        });
    });
  },

  transferNFT: async (from: string, to: string, tokenId: string | number, contract: ethers.Contract): Promise<any> => {
    const enableLogs: number = 1;

    return new Promise((resolve, reject) => {
      contract
        .safeTransferFrom(from, to, tokenId)
        .then((response: any) => {
          if (enableLogs) console.log('transferNFT() --> %o', response);
          resolve(response);
        })
        .catch((err: any) => {
          console.log('!!!Error, transferNFT() --> %o', err);
          reject(err);
        });
    });
  },

  getClaimable: async ({ tokenId, contract }: ITokenFunctionProps): Promise<any> => {
    console.log(tokenId, contract);

    const enableLogs: number = 0;

    return new Promise((resolve, reject) => {
      if (contract) {
        contract
          .getClaimRewardStatus(tokenId)
          .then((response: any) => {
            if (enableLogs) console.log('getClaimable() --> %o', response);
            resolve(response);
          })
          .catch((err: any) => {
            console.log('!!!Error, getClaimable() --> %o', err);
            reject(err);
          });
      }
    });
  },
};

export default NFTHelper;
