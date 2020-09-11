import React from "react";

import { addresses, abis } from "@project/contracts";
import { ethers } from "ethers";
import { parseEther, bigNumber } from 'ethers/utils'

// FeedDB Helper Function
const EPNSCoreHelper = {
  // To get owner info
  getOwnerInfo: async (contract) => {
    return new Promise ((resolve, reject) => {
      // Get User Info from EPNS Core
      contract.owner()
        .then(response => { console.log("getOwnerInfo() --> %o", response); resolve(response); })
        .catch(err => { console.log("!!!Error, getOwnerInfo() --> %o", err); reject(err); });
    })
  },
  // To get user info
  getUserInfo: async (user, contract) => {
    return new Promise ((resolve, reject) => {
      // Get User Info from EPNS Core
      contract.users(user)
        .then(response => {
          const mappings = { ...response };
          mappings.addr = user;

          console.log("getUserInfo() --> %o", mappings);
          resolve(mappings);
        })
        .catch(err => { console.log("!!!Error, getUserInfo() --> %o", err); reject(err); });
    })
  },
  // To retrieve a channel address from it's id
  getChannelAddressFromID: async (channelID, contract) => {
    return new Promise ((resolve, reject) => {
      // To get channel info from a channel address
      contract.mapAddressChannels(channelID)
        .then(response => {
          console.log("getChannelAddressFromID() --> %o", response.toString());
          resolve(response.toString());
        })
        .catch(err => { console.log("!!!Error, getChannelAddressFromID() --> %o", err); reject(err); });
    })
  },
  // To retrieve a channel's Info from channel address
  getChannelInfo: async (channel, contract) => {
    return new Promise ((resolve, reject) => {
      // To get channel info from a channel address
      contract.channels(channel)
        .then(response => {
          // Add an extra field for future info
          const mappings = { ...response };
          mappings.addr = channel;

          console.log("getChannelInfo() --> %o", mappings);
          resolve(mappings);
        })
        .catch(err => { console.log("!!!Error, getChannelInfo() --> %o", err); reject(err); });
    })
  },
  // To retrieve a channel's AddChannel event
  getChannelAddEvent: async (channel, startBlock, endBlock, contract) => {
    return new Promise ((resolve, reject) => {
      // To get channel ipfs hash from channel info
      contract.queryFilter('AddChannel', startBlock, endBlock)
        .then(response => {

          let filteredResponse;
          response.forEach(function (item) {
            if (item.args[0] == channel) {
              filteredResponse = item;
            }
          });

          console.log("getChannelAddEvent() --> %o", filteredResponse);
          resolve(filteredResponse);
        })
        .catch(err => { console.log("!!!Error, getChannelAddEvent() --> %o", err); reject(err); });
    })
  },
  // Retrive IPFS File from ipfshash
  getJsonFileFromIPFSHash: async(ipfs) => {
    return new Promise ((resolve, reject) => {
      // Form Gateway URL
      const url = "https://ipfs.io/ipfs/" + ipfs;
      fetch(url)
        .then(response => response.json())
        .then(response => {
          console.log("getJsonFileFromIPFSHash() --> %o", response);
          resolve(response);
        })
        .catch(err => { console.log("!!!Error, getJsonFileFromIPFSHash() --> %o", err); reject(err); });
    });
  },
  // Helper to get Channel from Channel's address
  getChannelJsonFromChannelAddress: async (channel, contract) => {
    return new Promise ((resolve, reject) => {
      // To get channel info from a channel address
      EPNSCoreHelper.getChannelInfo(channel, contract)
        .then(response => EPNSCoreHelper.getChannelAddEvent(channel, response.channelStartBlock.toNumber(), response.channelStartBlock.toNumber(), contract))
        .then(response => EPNSCoreHelper.getJsonFileFromIPFSHash(response.args[1]))
        .then(response => {console.log("getChannelJsonFromChannelAddress() --> %o", response); resolve(response);})
        .catch(err => {console.log("!!!Error, getChannelJsonFromChannelAddress() --> %o", err); reject(err);});
    });
  },
  // Helper to get Channel from User's address
  getChannelJsonFromUserAddress: async (user, contract) => {
    return new Promise ((resolve, reject) => {
      // To get channel info from a channel address
      EPNSCoreHelper.getUserInfo(user, contract)
        .then(response => EPNSCoreHelper.getChannelJsonFromChannelAddress(user, contract))
        .then(response => {console.log("getChannelJsonFromUserAddress() --> %o", response); resolve(response);})
        .catch(err => {console.log("!!!Error, getChannelJsonFromUserAddress() --> %o", err); reject(err);});
    });
  },
  // Get Total Number of Channels
  getTotalNumberOfChannels: async (contract) => {
    return new Promise ((resolve, reject) => {
      // Get User Info from EPNS Core
      contract.channelsCount()
        .then(response => {
          console.log("getTotalNumberOfChannels() --> %o", response.toNumber());
          resolve(response.toNumber());
        })
        .catch(err => { console.log("!!!Error, getTotalNumberOfChannels() --> %o", err); reject(err); });
    })
  },
  // Get channels address given number of channels, , atIndex: -1 is start from latest, numChannels: -1 is return all
  getChannelsMetaLatestToOldest: async (atIndex, numChannels, contract) => {
    return new Promise ((resolve, reject) => {
      EPNSCoreHelper.getTotalNumberOfChannels(contract)
        .then(async (response) => {
          let channelsInfo = [];
          const channelsCount = response;

          if (atIndex > channelsCount || atIndex == -1) {
            atIndex = channelsCount - 1;
          }

          if (numChannels == -1) {
            numChannels = channelsCount;
          }

          // Get channels
          let channelArrays = [];

          // prefil and then refil
          let count = 0;
          for (let i = numChannels - 1; i >= 0; i--) {
            const assignedChannelID = atIndex - i;
            channelArrays.push(assignedChannelID);
          }

          const promises = channelArrays.map(async (channelID) => {
            await EPNSCoreHelper.getChannelAddressFromID(channelID, contract)
              .then(response => EPNSCoreHelper.getChannelInfo(response, contract))
              .then(response => {
                // console.log("getChannelsMetaLatestToOldest(%d, %d) --> %o", channelID, numChannels, channelsInfo);
                channelsInfo = [response, ...channelsInfo];
              })
              .catch(err => console.log("Error in channel: %d | skipping...", channelID))
          });

          // wait until all promises are resolved
          await Promise.all(promises);

          console.log("getChannelsMetaLatestToOldest(Index: %d, Number: %d) --> %o", atIndex, numChannels, channelsInfo);
          resolve(channelsInfo);
        })
        .catch(err => { console.log("!!!Error, getChannelsMetaLatestToOldest() --> %o", err); reject(err); })
    });
  },
  // Get Total Number of Users
  getTotalNumberOfUsers: async (contract) => {
    return new Promise ((resolve, reject) => {
      // Get User Info from EPNS Core
      contract.usersCount()
        .then(response => {
          console.log("getTotalNumberOfUsers() --> %o", response.toNumber());
          resolve(response.toNumber());
        })
        .catch(err => { console.log("!!!Error, getTotalNumberOfUsers() --> %o", err); reject(err); });
    })
  },
  // To retrieve public key of a user
  getPublicKey: async (address, contract) => {
    return new Promise ((resolve, reject) => {
      // To get channel ipfs hash from channel info
      let filteredResponse;
      contract.queryFilter('PublicKeyRegistered')
        .then(response => {

          response.forEach(function (item) {
            if (item.args[0] == address) {
              filteredResponse = item;
            }
          });

          console.log("Full Response: ");
          console.log(response);
          console.log("Filtered Response: ");
          console.log(filteredResponse);

          if (filteredResponse.length == 0) {
            reject()
          }
          else {
            resolve(filteredResponse.args[1]);
          }

        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    })
  },
  // Get Total Subsbribed Channels
  getSubscribedStatus: async (user, channel, contract) => {
    return new Promise ((resolve, reject) => {
      // Get User Info from EPNS Core
      contract.memberExists(user, channel)
        .then(response => {
          console.log("getSubscribedStatus() --> %o", response);
          resolve(response);
        })
        .catch(err => { console.log("!!!Error, getSubscribedStatus() --> %o", err); reject(err); });
    })
  },
  // Get Total Subsbribed Channels
  getTotalSubscribedChannels: async (user, contract) => {
    return new Promise ((resolve, reject) => {
      // Get User Info from EPNS Core
      contract.users[user].subscribedCount()
        .then(response => {
          console.log("getTotalSubscribedChannels() --> %o", response.toNumber());
          resolve(response.toNumber());
        })
        .catch(err => { console.log("!!!Error, getTotalSubscribedChannels() --> %o", err); reject(err); });
    })
  },
  // Get Fair Share
  getFairShareOfUserAtBlock: async(user, block, contract) => {
    return new Promise ((resolve, reject) => {
      // Get User Info from EPNS Core
      contract.calcAllChannelsRatio(user, block)
        .then(response => {
          console.log("calcAllChannelsRatio() --> %o", response);
          resolve(response);
        })
        .catch(err => { console.log("!!!Error, calcAllChannelsRatio() --> %o", err); reject(err); });
    })
  },
  // Get Pool Funds
  getPoolFunds: async(contract) => {
    return new Promise ((resolve, reject) => {
      contract.poolFunds()
        .then(response => { console.log("getPoolFunds() --> %o", response); resolve(response); })
        .catch(err => { console.log("!!!Error, getPoolFunds() --> %o", err); reject(err); });
    })
  },
  // Helper Functions
  // To format Big Number
  formatBigNumberToMetric: (bignumber, convertToCurrency) => {
    try {
      if (convertToCurrency) {
        bignumber = bignumber.div(100000000000000);
        bignumber = bignumber.div(10000);
      }
      bignumber = bignumber.toNumber();
      return EPNSCoreHelper.metricFormatter(bignumber, 2);
    }
    catch (e) {
      console.log(e);
      return "---";
    }
  },
  // Metric Formatter, thanks: https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900
  metricFormatter: (num, digits) => {
    var si = [
      { value: 1, symbol: "" },
      { value: 1E3, symbol: "k" },
      { value: 1E6, symbol: "M" },
      { value: 1E9, symbol: "G" },
      { value: 1E12, symbol: "T" },
      { value: 1E15, symbol: "P" },
      { value: 1E18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
  },

}

export default EPNSCoreHelper;
