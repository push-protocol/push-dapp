import EPNSCoreHelper from 'helpers/EPNSCoreHelper';
import { ethers } from "ethers";
import { bigNumber } from 'ethers/utils'

import { addresses, abis } from "@project/contracts";

// STATIC SINGLETON
export const user_events = {
    SUBSCRIBED: "Subscribed",
    UNSUBSCRIBED: "Unsubscribed",
    PUBLIC_KEY_BROADCASTED: "PublicKeyBroadcasted",
    CREATED_CHANNEL: "CreatedChannel",
    DEACTIVATE_CHANNEL: "DeactivateChannel",
}

export default class UsersDataStore {
    static instance = UsersDataStore.instance || new UsersDataStore();

    state = {
      usersCount: -1,
      subscribedCount: -1,
      userMeta: {},

      callbacks: [],

      account: null,
      epnsReadProvider: null,
    }

    // init
    init = (account, epnsReadProvider) => {
      // set account
      this.state.account = account;

      // First attach listeners then overwrite the old one if any
      this.resetUsersListeners();
      this.state.epnsReadProvider = epnsReadProvider;
      this.initUsersListenersAsync();

      // next get store channels count
      this.getChannelsCountAsync();
    }

    // RESET LISTENERS
    resetUsersListeners = () => {
      // only proceed if a read provider is attached
      if (this.state.epnsReadProvider) {
        this.state.epnsReadProvider.removeAllListeners("Subscribe");
        this.state.epnsReadProvider.removeAllListeners("Unsubscribe");
        this.state.epnsReadProvider.removeAllListeners("PublicKeyRegistered");
        this.state.epnsReadProvider.removeAllListeners("AddChannel");
        this.state.epnsReadProvider.removeAllListeners("DeactivateChannel");
      }
    }

    // init LISTENERS
    initUsersListenersAsync = async () => {
      // Add Listeners
      await this.listenForSubscribedAsync();
    }

    // 1. Add Any Channel Listeners
    listenForSubscribedAsync = async () => {
      const contract = this.state.epnsReadProvider;
      let filter = contract.filters.Subscribe(null, this.state.account);

      contract.on(filter, async (channel, user) => {
        // Nothing to do so perform callbacks
        for (let [callbackID, callback] of Object.entries(this.state.callbacks[user_events.SUBSCRIBER_SELF_CHANNEL])) {
          if (callback) { callback(channel, user); }
        }
      });
    }

    // FOR CALLBACKS
    addCallbacks = (callbackType, callbackID, callback) => {
      // first check if callback already exists
      if (!this.state.callbacks[callbackType]) {
        this.state.callbacks[callbackType] = {};
      }

      if (!this.state.callbacks[callbackType][callbackID]) {
        this.state.callbacks[callbackType][callbackID] = callback;
      }
    }

    removeCallbacks = (callbackType, callbackID) => {
      // first check if callback already exists
      if (this.state.callbacks[callbackType][callbackID]) {
        this.state.callbacks[callbackType][callbackID] = null;
      }
    }

    // USERS COUNT
    getUsersCountAsync = async () => {
      return new Promise (async (resolve, reject) => {
        if (this.state.channelsCount == -1) {
          // Count not set, get and set it first
          const count = EPNSCoreHelper.getTotalNumberOfUsers(this.state.epnsReadProvider)
            .then(response => {
              this.state.usersCount = response;
              resolve(this.state.usersCount)
            })
            .catch(err => reject(err));
        }
        else {
          resolve(this.state.usersCount);
        }
      });
    }

    incrementUsersCountAsync = async (incrementCount) => {
      return new Promise ((resolve, reject) => {
        this.getUsersCountAsync()
          .then(response => resolve(this.state.usersCount = response + incrementCount))
          .catch(err => reject(err));
      });
    }

    // SUBSCRIBED COUNT


    // CHANNELS META FUNCTIONS
    // To get channels meta
    getChannelsMetaAsync = async (atIndex, numChannels) => {
      return new Promise (async (resolve, reject) => {
        // get total number of channels
        const channelsCount = await this.getChannelsCountAsync();

        if (atIndex == -1) {
          atIndex = channelsCount - 1;
        }

        if (numChannels == -1) {
          numChannels = channelsCount;
        }

        // Get channels
        let channelsMeta = [];
        let channelsDummy = [];

        // prefil and then refil
        let count = 0;
        for (let i = numChannels - 1; i >= 0; i--) {
          const assignedChannelID = atIndex - i;
          channelsDummy[count] = assignedChannelID;
          count = count + 1;
        }

        const promises = channelsDummy.map(async (channelID) => {
          // Match the cache
          await this.getChannelMetaAsync(channelID)
            .then(response => {
              channelsMeta = [response, ...channelsMeta];
            })
            .catch(err => console.log("!!!Error (but skipping), getChannelMetaAsync() --> %o", err))
        });

        // wait until all promises are resolved
        await Promise.all(promises);

        // return channels meta
        console.log("getChannelsMetaAsync(From %d to %d) --> %o", atIndex - numChannels + 1, atIndex, channelsMeta);
        resolve(channelsMeta);
      });
    }

    // To get a single channel meta via id
    getChannelMetaAsync = async (channelID) => {
      return new Promise (async (resolve, reject) => {
        if (this.state.channelsMeta[channelID]) {
          console.log("getChannelMetaAsync() [CACHED] --> %o", this.state.channelsMeta[channelID]);
          resolve(this.state.channelsMeta[channelID]);
        }
        else {
          let channelAddress;

          await EPNSCoreHelper.getChannelAddressFromID(channelID, this.state.epnsReadProvider)
            .then(async response => {
              channelAddress = response;
              await this.getChannelMetaViaAddressAsync(channelAddress)
                .then(response => {
                  // update the channel cache before resolving
                  this.state.channelsMeta[channelID] = response;
                  this.state.channelsMeta[channelAddress] = channelID;

                  // resolve
                  console.log("getChannelMetaAsync() [Address: %s] --> %o", channelAddress, response);
                  resolve(response);
                })
            })
            .catch(err => { console.log("!!!Error, getChannelMetaAsync() --> %o", err); reject(err); })
        }
      });
    }

    // To get a single channel meta via address
    getChannelMetaViaAddressAsync = async (channelAddress) => {
      return new Promise (async (resolve, reject) => {
        if (this.state.channelsMeta[channelAddress]) {
          const channelID = this.state.channelsMeta[channelAddress];

          console.log("getChannelMetaViaAddressAsync() [CACHED] --> %o", this.state.channelsMeta[channelID]);
          resolve(this.state.channelsMeta[channelID]);
        }
        else {
          // Can't cache this :(, no way to know channel id
          await EPNSCoreHelper.getChannelInfo(channelAddress, this.state.epnsReadProvider)
            .then(response => {
              // resolve
              console.log("getChannelMetaViaAddressAsync() [Address: %s] --> %o", channelAddress, response);
              resolve(response);
            })
            .catch(err => { console.log("!!!Error, getChannelMetaViaAddressAsync() --> %o", err); reject(err); })
        }
      });
    }

    // CHANNELS INFO FUNCTIONS
    // To get a single channel meta via id
    getChannelJsonAsync = async (channelAddress) => {
      return new Promise (async (resolve, reject) => {
        if (this.state.channelsJson[channelAddress]) {
          console.log("getChannelJsonAsync() [CACHED] --> %o", this.state.channelsJson[channelAddress]);
          resolve(this.state.channelsJson[channelAddress]);
        }
        else {
          await EPNSCoreHelper.getChannelJsonFromChannelAddress(channelAddress, this.state.epnsReadProvider)
            .then(response => {
              // First set the cache
              this.state.channelsJson[channelAddress] = response;

              // resolve
              console.log("getChannelJsonAsync() [Address: %s] --> %o", channelAddress, response);
              resolve(response);
            })
            .catch(err => { console.log("!!!Error, getChannelJsonAsync() --> %o", err); reject(err); })
        }
      });
    }

}
