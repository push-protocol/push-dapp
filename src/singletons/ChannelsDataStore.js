// Internal Components
import { getReq, postReq } from 'api';
import EPNSCoreHelper from 'helpers/EPNSCoreHelper';

// Internal Configs
import { appConfig } from 'config/index.js';

// STATIC SINGLETON
export const ChannelEvents = {
  ADD_CHANNEL_ANY: 'AddChannelAny',
  ADD_CHANNEL_SELF: 'AddChannelSelf',
  UPDATE_CHANNEL_ANY: 'UpdateChannelAny',
  UPDATE_CHANNEL_SELF: 'UpdateChannelSelf',
  SUBSCRIBER_ANY_CHANNEL: 'SubscriberAnyChannel',
  SUBSCRIBER_SELF_CHANNEL: 'SubscriberSelfChannel',
  UNSUBSCRIBER_ANY_CHANNEL: 'UnsubscriberAnyChannel',
  UNSUBSCRIBER_SELF_CHANNEL: 'UnsubscriberSelfChannel',
};

export default class ChannelsDataStore {
  static instance = null;

  // Singleton getter
  static getInstance() {
    if (!ChannelsDataStore.instance) {
      ChannelsDataStore.instance = new ChannelsDataStore();
    }
    return ChannelsDataStore.instance;
  }

  state = {
    channelsCount: -1,
    channelsMeta: {},
    channelsJson: {},
    channelJsonStartBlock: {},
    subscribers: {},
    subscribersCount: {},

    callbacks: [],

    account: null,
    epnsReadProvider: null,
    epnsCommReadProvider: null,
    chainId: null,
    onCoreNetwork: false,
  };

  // init
  init = (account, epnsReadProvider, epnsCommReadProvider, chainId) => {
    // set account
    this.state.account = account;

    // set chainId
    this.state.chainId = chainId;
    this.state.onCoreNetwork = chainId === appConfig.coreContractChain;

    // First attach listeners then overwrite the old one if any
    this.resetChannelsListeners();
    this.state.epnsReadProvider = epnsReadProvider;
    this.state.epnsCommReadProvider = epnsCommReadProvider;
    this.initChannelsListenersAsync();

    // next get store channels count
  };

  // RESET LISTENERS
  resetChannelsListeners = () => {
    // only proceed if a read provider is attached
    if (this.state.epnsReadProvider) {
      this.state.epnsReadProvider.removeAllListeners('AddChannel');
      this.state.epnsReadProvider.removeAllListeners('UpdateChannel');
      this.state.epnsCommReadProvider.removeAllListeners('Subscribe');
      this.state.epnsCommReadProvider.removeAllListeners('Unsubscribe');
    }
  };

  // init LISTENERS
  // TODO This is causing multiple errors constantly on timeout
  initChannelsListenersAsync = async () => {
    // Add Listeners
    await this.listenForAddChannelAnyAsync();
    await this.listenForAddChannelSelfAsync();

    await this.listenForUpdateChannelAnyAsync();
    await this.listenForUpdateChannelSelfAsync();

    // use the communicator contract for the below
    await this.listenForSubscribeAnyAsync();
    await this.listenForSubscribeSelfAsync();
    await this.listenForUnsubscribeAnyAsync();
    await this.listenForUnsubscribeSelfAsync();
  };

  // 1. Add Any Channel Listeners
  listenForAddChannelAnyAsync = async () => {
    const contract = this.state.epnsReadProvider;
    let filter = contract.filters.AddChannel(null, null);

    contract.on(filter, async (channel, ipfs) => {
      // Do own stuff
      await this.incrementChannelsCountAsync(1);

      // then perform callbacks
      if (this.state.callbacks[ChannelEvents.ADD_CHANNEL_ANY]) {
        for (let [callbackID, callback] of Object.entries(this.state.callbacks[ChannelEvents.ADD_CHANNEL_ANY])) {
          if (callback) {
            callback(channel, ipfs);
          }
        }
      }
    });
  };

  // 2. Add Self Channel Listener
  listenForAddChannelSelfAsync = async () => {
    const contract = this.state.epnsReadProvider;
    let filter = contract.filters.AddChannel(this.state.account, null);

    contract.on(filter, async (channel, ipfs) => {
      // Do own stuff
      // Nothing to do, just do callback

      // then perform callbacks
      if (this.state.callbacks[ChannelEvents.ADD_CHANNEL_SELF]) {
        for (let [callbackID, callback] of Object.entries(this.state.callbacks[ChannelEvents.ADD_CHANNEL_SELF])) {
          if (callback) {
            callback(channel, ipfs);
          }
        }
      }
    });
  };

  // 3. Update Any Channel Listener
  listenForUpdateChannelAnyAsync = async () => {
    const contract = this.state.epnsReadProvider;
    let filter = contract.filters.UpdateChannel(null, null);

    contract.on(filter, async (channel, ipfs) => {
      // then perform callbacks
      if (this.state.callbacks[ChannelEvents.UPDATE_CHANNEL_ANY]) {
        for (let [callbackID, callback] of Object.entries(this.state.callbacks[ChannelEvents.UPDATE_CHANNEL_ANY])) {
          if (callback) {
            callback(channel, ipfs);
          }
        }
      }
    });
  };

  // 4. Update Self Channel Listener
  listenForUpdateChannelSelfAsync = async () => {
    const contract = this.state.epnsReadProvider;
    let filter = contract.filters.UpdateChannel(this.state.account, null);

    contract.on(filter, async (channel, ipfs) => {
      // then perform callbacks
      if (this.state.callbacks[ChannelEvents.UPDATE_CHANNEL_SELF]) {
        for (let [callbackID, callback] of Object.entries(this.state.callbacks[ChannelEvents.UPDATE_CHANNEL_SELF])) {
          if (callback) {
            callback(channel, ipfs);
          }
        }
      }
    });
  };

  // 5. Subscriber Any
  listenForSubscribeAnyAsync = async () => {
    const contract = this.state.epnsCommReadProvider;
    let filter = contract.filters.Subscribe(null, null);

    contract.on(filter, async (channel, user) => {
      //   // Do own stuff
      //   if (this.state.channelsMeta[channel]) {
      //     const channelID = this.state.channelsMeta[channel];
      //     let count = this.state.channelsMeta[channelID].memberCount.toNumber();
      //     count = count + 1;
      //     this.state.channelsMeta[channelID].memberCount = bigNumberify(count);
      //   }

      // then perform callbacks
      if (this.state.callbacks[ChannelEvents.SUBSCRIBER_ANY_CHANNEL]) {
        for (let [callbackID, callback] of Object.entries(this.state.callbacks[ChannelEvents.SUBSCRIBER_ANY_CHANNEL])) {
          if (callback) {
            callback(channel, user);
          }
        }
      }
    });
  };

  // 6. Subscriber Self
  listenForSubscribeSelfAsync = async () => {
    const contract = this.state.epnsCommReadProvider;
    let filter = contract.filters.Subscribe(this.state.account, null);

    contract.on(filter, async (channel, user) => {
      // then perform callbacks
      if (this.state.callbacks[ChannelEvents.SUBSCRIBER_SELF_CHANNEL]) {
        for (let [callbackID, callback] of Object.entries(
          this.state.callbacks[ChannelEvents.SUBSCRIBER_SELF_CHANNEL]
        )) {
          if (callback) {
            callback(channel, user);
          }
        }
      }
    });
  };

  // 7. Unsubscribe Any
  listenForUnsubscribeAnyAsync = async () => {
    const contract = this.state.epnsCommReadProvider;
    let filter = contract.filters.Unsubscribe(null, null);

    contract.on(filter, async (channel, user) => {
      // Do own stuff
      // if (this.state.channelsMeta[channel]) {
      //   const channelID = this.state.channelsMeta[channel];
      //   let count = this.state.channelsMeta[channelID].memberCount.toNumber();
      //   count = count - 1;
      //   this.state.channelsMeta[channelID].memberCount = bigNumberify(count);
      // }

      // then perform callbacks
      if (this.state.callbacks[ChannelEvents.UNSUBSCRIBER_ANY_CHANNEL]) {
        for (let [callbackID, callback] of Object.entries(
          this.state.callbacks[ChannelEvents.UNSUBSCRIBER_ANY_CHANNEL]
        )) {
          if (callback) {
            callback(channel, user);
          }
        }
      }
    });
  };

  // 8. Unsubscribe Self
  listenForUnsubscribeSelfAsync = async () => {
    const contract = this.state.epnsCommReadProvider;
    let filter = contract.filters.Unsubscribe(this.state.account, null);

    contract.on(filter, async (channel, user) => {
      // then perform callbacks
      if (this.state.callbacks[ChannelEvents.UNSUBSCRIBER_SELF_CHANNEL]) {
        for (let [callbackID, callback] of Object.entries(
          this.state.callbacks[ChannelEvents.UNSUBSCRIBER_SELF_CHANNEL]
        )) {
          if (callback) {
            callback(channel, user);
          }
        }
      }
    });
  };

  // FOR CALLBACKS
  addCallbacks = (callbackType, callbackID, callback) => {
    // first check if callback already exists
    if (!this.state.callbacks[callbackType]) {
      this.state.callbacks[callbackType] = {};
    }

    if (!this.state.callbacks[callbackType][callbackID]) {
      this.state.callbacks[callbackType][callbackID] = callback;
    }
  };

  removeCallbacks = (callbackType, callbackID) => {
    // first check if callback already exists
    if (this.state.callbacks[callbackType][callbackID]) {
      this.state.callbacks[callbackType][callbackID] = null;
    }
  };

  /**
   * Get paginated channel information
   * @param {Number} startIndex the number of channels viewed so far e.g 50
   * @param {Number} pageCount the number of items per page we want
   * @returns
   */
  getChannelFromApi = async (startIndex, pageCount, account, chainId) => {
    return postReq('/channels/_search', {
      page: Math.ceil(startIndex / pageCount) || 1,
      pageSize: pageCount,
      address: account,
      chainId: chainId,
      query: ' ',
      op: 'read',
    }).then((response) => {
      let output;
      output = response.data.channels.map(({ alias_address, channel, memberCount, isSubscriber }) => {
        this.state.subscribersCount[channel] = memberCount;
        return {
          addr: channel,
          alias_address: alias_address,
          memberCount: memberCount,
          isSubscriber: isSubscriber,
        };
      });
      return output;
    });
  };
  //Helper to get eth address of an alias when in alias network
  // getEthAddressFromAlias = async (channel) => {
  //   if (channel === null) return;
  //   const enableLogs = 0;

  //   return new Promise((resolve, reject) => {
  //     // To get channel info from a channel address
  //     postReq("/channels/getCoreAddress", {
  //       aliasAddress: channel,
  //       op: "read",
  //     })
  //       .then(({ data }) => {
  //         if (enableLogs)
  //           console.log("getEthAddressFromAlias() --> %o", data?.ethAddress);
  //         resolve(data?.ethAddress);
  //       })
  //       .catch((err) => {
  //         console.log("!!!Error, getEthAddressFromAlias() --> %o", err);
  //         reject(err);
  //       });
  //   });
  // };
  // Helper to get Channel Alias from Channel's address
  // TODO This is causing multiple errors constantly on timeout
  getChannelDetailsFromAddress = async (channel, userPushSDKInstance) => {
    if (channel === null) return;
    const enableLogs = 0;

    return new Promise((resolve, reject) => {
      // To get channel info from a channel address
      userPushSDKInstance.channel
        .info()
        .then((response) => {
          let output;
          if (response && response != 'channel not found') {
            output = {
              ...response,
              aliasAddress: response.alias_address,
              isAliasVerified: response.is_alias_verified,
            };
          }
          if (enableLogs) console.debug('getChannelDetailsFromAddress() --> %o', response);
          if (response === 'channel not found' || !response) {
            output = { alias_address: null, isAliasVerified: null };
          }
          resolve(output);
        })
        .catch((err) => {
          console.error('!!!Error, getChannelDetailsFromAddress() --> %o', err);
          reject(err);
        });
    });
  };

  getChannelSubscribers = async (channelAddress) => {
    if (!channelAddress) return;
    const cachedSubscribers = this.state.subscribers[channelAddress];
    if (cachedSubscribers) {
      return cachedSubscribers;
    }
    let address = channelAddress;

    return postReq('/channels/_get_subscribers', {
      channel: address,
      blockchain: this.state.chainId,
      op: 'read',
    })
      .then(({ data }) => {
        const subs = data.subscribers;
        this.state.subscribers[channelAddress] = subs;
        return subs;
      })
      .catch((err) => {
        console.error(`getChannelSubscribers => ${err.message}`);
        return [];
      });
  };

  getChannelSubscribersCount = async (channelAddress) => {
    if (!channelAddress) return;
    const cachedSubscribersCount = this.state.subscribers[channelAddress];
    if (cachedSubscribersCount) {
      return cachedSubscribersCount;
    }
    let address = channelAddress;

    return postReq('/channels/_get_subscribers', {
      channel: address,
      blockchain: this.state.chainId,
      op: 'read',
    })
      .then(({ data }) => {
        const subs = data.subscribers;
        this.state.subscribersCount[channelAddress] = subs.length;
        return subs.length;
      })
      .catch((err) => {
        console.error(`getChannelSubscribersCount => ${err.message}`);
        return [];
      });
  };

  // CHANNELS INFO FUNCTIONS
  // To get a single channel meta via id
  getChannelJsonAsync = async (channelAddress) => {
    return new Promise(async (resolve, reject) => {
      if (this.state.channelsJson[channelAddress]) {
        // console.log("getChannelJsonAsync() [CACHED] --> %o", this.state.channelsJson[channelAddress]);
        resolve(this.state.channelsJson[channelAddress]);
      } else {
        try {
          // let objResponse = {};
          const getChannelJson = await EPNSCoreHelper.getChannelJsonFromChannelAddress(
            channelAddress,
            this.state.epnsReadProvider
          ).then((response) => {
            return response;
          });

          console.debug('getChannelJsonAsync() [Address: %s] --> %o', getChannelJson);
          this.state.channelsJson[channelAddress] = getChannelJson;
          resolve(getChannelJson);
        } catch (err) {
          console.error('!!!Error, getChannelJsonAsync() --> %o', err);
          reject(err);
        }
      }
    });
  };

  // To get a single channel meta via id
  getChannelJsonStartBlockAsync = async (channelAddress) => {
    return new Promise(async (resolve, reject) => {
      if (this.state.channelJsonStartBlock[channelAddress]) {
        // console.log("getChannelJsonStartBlockAsync() [CACHED] --> %o", this.state.channelsJson[channelAddress]);
        resolve(this.state.channelJsonStartBlock[channelAddress]);
      } else {
        try {
          const getChannelJson = await EPNSCoreHelper.getChannelJsonFromChannelAddressStartBlock(
            channelAddress,
            this.state.epnsReadProvider
          ).then((response) => {
            return response;
          });

          console.debug('getChannelJsonStartBlockAsync() [Address: %s] --> %o', getChannelJson);
          this.state.channelJsonStartBlock[channelAddress] = getChannelJson;
          resolve(getChannelJson);
        } catch (err) {
          console.error('!!!Error, getChannelJsonStartBlockAsync() --> %o', err);
          reject(err);
        }
      }
    });
  };
}
