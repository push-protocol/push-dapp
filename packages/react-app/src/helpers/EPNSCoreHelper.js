import React from "react";

import { addresses, abis } from "@project/contracts";
const ethers = require('ethers');

// FeedDB Helper Function
const EPNSCoreHelper = {
  // To get if user is a channel
  getUserInfo: async (wallet, contract) => {
    return new Promise ((resolve, reject) => {
      // Get User Info from EPNS Core
      contract.users(wallet)
        .then(response => {
          console.log(response);
          resolve(response);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    })
  },
  // To retrieve a channel's Info
  getChannelInfo: async (channel, contract) => {
    return new Promise ((resolve, reject) => {
      // To get channel info from a channel address
      contract.channels(channel)
        .then(response => {
          console.log(response);
          resolve(response);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    })
  },
  // To retrieve a channel's AddChannel event
  getChannelAddEvent: async (channel, startBlock, endBlock, contract) => {
    return new Promise ((resolve, reject) => {
      // To get channel ipfs hash from channel info
      let filteredResponse;
      contract.queryFilter('AddChannel', startBlock, endBlock)
        .then(response => {

          response.forEach(function (item) {
            if (item.args[0] == channel) {
              filteredResponse = item;
            }
          });

          console.log("Full Response: ");
          console.log(response);
          console.log("Filtered Response: ");
          console.log(filteredResponse);

          resolve(filteredResponse);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    })
  },
  // Retrive IPFS File from ipfshash
  getJsonFileFromIPFSHash: async(ipfs) => {
    return new Promise ((resolve, reject) => {
      // Form Gateway URL
      const url = "https://ipfs.io/ipfs/" + ipfs;
      fetch(url)
        .then(response => response.json())
        .then((jsonData) => {
          console.log(jsonData)
          resolve(jsonData);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  },
  // Finally a helper to get Channel from User's address
  getChannelJsonFromUserAddress: async (wallet, contract) => {
    return new Promise ((resolve, reject) => {
      // To get channel info from a channel address
      EPNSCoreHelper.getUserInfo(wallet, contract)
        .then(response => EPNSCoreHelper.getChannelInfo(wallet, contract))
        .then(response => EPNSCoreHelper.getChannelAddEvent(wallet, response.channelStartBlock.toNumber(), response.channelStartBlock.toNumber(), contract))
        .then(response => EPNSCoreHelper.getJsonFileFromIPFSHash(response.args[1]))
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
  }
}

export default EPNSCoreHelper;
