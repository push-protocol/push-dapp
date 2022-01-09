import React from "react";

import { addresses, abis } from "@project/contracts";
import { ethers } from "ethers";
//import { parseEther, bigNumber } from 'ethers/utils'

// FeedDB Helper Function
const NFTHelper = {
  getNFTBalance: async (user, contract) => {
    const enableLogs = 0;

    return new Promise ((resolve, reject) => {
      if(contract){
        contract.balanceOf(user)
        .then(response => {
          if (enableLogs) console.log("getNFTBalance() --> %o", response);
          resolve(response.toNumber());
        })
        .catch(err => {
          console.log("!!!Error, getNFTBalance() --> %o", err);
          reject(err);
        });

      }
      
    })
  },

  getTotalSupply: async (contract) => {
    const enableLogs = 0;

    return new Promise ((resolve, reject) => {
      contract.totalSupply()
        .then(response => {
          if (enableLogs) console.log("getNFTBalance() --> %o", response);
          resolve(response.toNumber());
        })
        .catch(err => {
          console.log("!!!Error, getNFTBalance() --> %o", err);
          reject(err);
        });
    })
  },

  getOwnerOfTokenId: async (tokenId, contract) => {
    const enableLogs = 0;

    return new Promise ((resolve, reject) => {
      contract.ownerOf(tokenId)
        .then(response => {
          if (enableLogs) console.log("getOwnerOfTokenId() --> %o", response);
          resolve(response);
        })
        .catch(err => {
          console.log("!!!Error, getOwnerOfTokenId() --> %o", err);
          reject(err);
        });
    })
  },

  getTokenOfOwnerByIndex: async (user, index, contract) => {
    const enableLogs = 0;

    return new Promise ((resolve, reject) => {
      contract.tokenOfOwnerByIndex(user, index)
        .then(response => {
          if (enableLogs) console.log("getTokenOfOwnerByIndex() --> %o", response);
          resolve(response.toNumber());
        })
        .catch(err => {
          console.log("!!!Error, getTokenOfOwnerByIndex() --> %o", err);
          reject(err);
        });
    })
  },

  getTokenByIndex: async (index, contract) => {
    const enableLogs = 0;

    return new Promise ((resolve, reject) => {
      contract.tokenByIndex(index)
        .then(response => {
          if (enableLogs) console.log("getTokenByIndex() --> %o", response);
          resolve(response.toNumber());
        })
        .catch(err => {
          console.log("!!!Error, getTokenByIndex() --> %o", err);
          reject(err);
        });
    })
  },

  getTokenMetadata: async (tokenId, contract) => {
    const enableLogs = 0;

    return new Promise ((resolve, reject) => {
      contract.tokenURI(tokenId)
        .then(response => {
          if (enableLogs) console.log("getTokenMetadata() --> %o", response);
          resolve(response);
        })
        .catch(err => {
          console.log("!!!Error, getTokenMetadata() --> %o", err);
          reject(err);
        });
    })
  },

  getTokenMetadatasOfOwner: async (owner, nftContract, rewardsContract) => {
    const enableLogs = 1;

    return new Promise ((resolve, reject) => {
      NFTHelper.getNFTBalance(owner, nftContract)
      .then(async (balance) => {
        // const balance = await res
        let NFTDetails = []
        let promises = []
      
      for(let i=0; i<balance; i++){
        promises.push(NFTHelper.getTokenOfOwnerByIndex(owner, i, nftContract)
        .then(async tokenId => {
            await NFTHelper.getClaimable(tokenId, rewardsContract)
            .then(async claimable => {
              console.log("🚀 ~ file: NFTHelper.js ~ line 102 ~ .then ~ claimable", claimable)

              await NFTHelper.getTokenMetadata(tokenId, nftContract)
              .then(async metadata => {
                if(tokenId != null && metadata != null && claimable != null )
                NFTDetails.push({id: tokenId, metadata, claimable})

              })
            })
            .catch(err => {
              console.log("!!!Error, getClaimable() --> %o", err);
              reject(err);
            });
        }))
      }
      // // wait until all promises are resolved
      await Promise.all(promises);
      console.log("🚀 ~ file: NFTHelper.js ~ line 83 ~ .then ~ NFTDetails", NFTDetails)
      resolve(NFTDetails);

      })
      .catch(err => {
        console.log("!!!Error, getTokenMetadatasOfOwner() --> %o", err);
        reject(err);
      });
        
    })
  },

  getAllTokenDatas: async (nftContract, rewardsContract) => {
    const enableLogs = 1;

    return new Promise ((resolve, reject) => {
      NFTHelper.getNFTBalance(nftContract)
      .then(async (totalSupply) => {
        let NFTDetails = []
        let promises = []
      
      for(let i=0; i<totalSupply; i++){
        promises.push(NFTHelper.getTokenByIndex(i, nftContract)
        .then(async tokenId => {
            await NFTHelper.getClaimable(tokenId, rewardsContract)
            .then(async claimable => {
              await NFTHelper.getTokenMetadata(tokenId, nftContract)
              .then(async metadata => {
                await NFTHelper.getOwnerOfTokenId(tokenId, nftContract)
                .then(async owner => {
                  if(tokenId != null && metadata != null && claimable != null && owner != null )
                  NFTDetails.push({id: tokenId, metadata, owner, claimable})
                })
                .catch(err => {
                  console.log("!!!Error, getAllTokenDatas::getOwnerOfTokenId() --> %o", err);
                  reject(err);
                })
              })
              .catch(err => {
                console.log("!!!Error, getAllTokenDatas::getTokenMetadata() --> %o", err);
                reject(err);
              })
            })
            .catch(err => {
              console.log("!!!Error, getAllTokenDatas::getClaimable() --> %o", err);
              reject(err);
            });
        })
        .catch(err => {
          console.log("!!!Error, getAllTokenDatas::getTokenByIndex() --> %o", err);
          reject(err);
        })
        )
      }
      // // wait until all promises are resolved
      await Promise.all(promises);
      console.log("🚀 ~ file: NFTHelper.js ~ line 83 ~ .then ~ NFTDetails", NFTDetails)
      resolve(NFTDetails);

      })
      .catch(err => {
        console.log("!!!Error, getAllTokenDatas() --> %o", err);
        reject(err);
      });
        
    })
  },

  getTokenData: async (tokenId, nftContract, rewardsContract) => {
    const enableLogs = 0;

    return new Promise ((resolve, reject) => {
             NFTHelper.getClaimable(tokenId, rewardsContract)
            .then(async claimable => {
              await NFTHelper.getTokenMetadata(tokenId, nftContract)
              .then(async metadata => {
                await NFTHelper.getOwnerOfTokenId(tokenId, nftContract)
                .then(async owner => {
                  if(tokenId != null && metadata != null && claimable != null && owner != null )
                  resolve({id: tokenId, metadata, owner, claimable});
                })
              })
            })
            .catch(err => {
              console.log("!!!Error, getTokenData() --> %o", err);
              reject(err);
            });
    })
  },

  transferNFT: async (from, to, tokenId, contract) => {
    const enableLogs = 1;

    return new Promise ((resolve, reject) => {
      contract.safeTransferFrom(from, to, tokenId)
        .then(response => {
          if (enableLogs) console.log("transferNFT() --> %o", response);
          resolve(response);
        })
        .catch(err => {
          console.log("!!!Error, transferNFT() --> %o", err);
          reject(err);
        });
    })
  },

  getClaimable: async (tokenId, contract) => {
    
    const enableLogs = 0;

    return new Promise ((resolve, reject) => {
      if(contract){
        contract.getClaimRewardStatus(tokenId)
        .then(response => {
          if (enableLogs) console.log("getClaimable() --> %o", response);
          resolve(response);
        })
        .catch(err => {
          console.log("!!!Error, getClaimable() --> %o", err);
          reject(err);
        });

      }
      
    })
  },

}

export default NFTHelper;
