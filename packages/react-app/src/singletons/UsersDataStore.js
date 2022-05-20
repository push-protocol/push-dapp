import EPNSCoreHelper from 'helpers/EPNSCoreHelper';
import { ethers } from "ethers";

import { addresses, abis } from "@project/contracts";

// STATIC SINGLETON
export const UserEvents = {
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
      userMeta: null,
      ownerMeta: null,

      callbacks: [],

      account: null,
      epnsReadProvider: null,
      epnsCommReadProvider: null
    }

    // init
    init = (account, epnsReadProvider, epnsCommReadProvider) => {
      // set account
      this.state.account = account;

      // First attach listeners then overwrite the old one if any
      this.resetUsersListeners();
      this.state.epnsReadProvider = epnsReadProvider;
      this.state.epnsCommReadProvider = epnsCommReadProvider;
      this.initUsersListenersAsync();

      // next get store user count & user meta
      this.getOwnerMetaAsync();
      this.getUsersCountAsync();
      this.getUserMetaAsync();
    }

    // RESET LISTENERS
    resetUsersListeners = () => {
      // only proceed if a read provider is attached
      if (this.state.epnsReadProvider) {
        this.state.epnsCommReadProvider.removeAllListeners("Subscribe");
        this.state.epnsCommReadProvider.removeAllListeners("Unsubscribe");
        this.state.epnsCommReadProvider.removeAllListeners("PublicKeyRegistered");
        this.state.epnsReadProvider.removeAllListeners("AddChannel");
        this.state.epnsReadProvider.removeAllListeners("DeactivateChannel");
      }

      // reset user meta as well
      this.state.userMeta = null;
    }

    // init LISTENERS
    initUsersListenersAsync = async () => {
      // Add Listeners
      await this.listenForSubscribedAsync();
      await this.listenForUnsubscribedAsync();

      if (!this.state.userMeta || (this.state.userMeta && !this.state.userMeta.publicKeyRegistered)) {
        await this.listenForPublicKeyBroadcastAsync();
      }
    }

    // 1. Listen for Subscribe Async
    listenForSubscribedAsync = async () => {
      // TODO use the right contract comms
      // const contract = this.state.epnsReadProvider;
      // let filter = contract.filters.Subscribe(null, this.state.account);

      // if (this.state.userMeta) {
      //   this.state.userMeta.subscribedCount = this.state.userMeta.subscribedCount.add(1);
      // }

      // contract.on(filter, async (channel, user) => {
      //   // then perform callbacks
      //   if (this.state.callbacks[UserEvents.SUBSCRIBED]) {
      //     for (let [callbackID, callback] of Object.entries(this.state.callbacks[UserEvents.SUBSCRIBED])) {
      //       if (callback) { callback(channel, user); }
      //     }
      //   }
      // });
    }

    // 2. Listen for Unsubscribe Async
    listenForUnsubscribedAsync = async () => {
      // TODO Use the COMMUNICATOR CONTRACT
      // const contract = this.state.epnsReadProvider;
      // let filter = contract.filters.Unsubscribe(null, this.state.account);

      // if (this.state.userMeta) {
      //   this.state.userMeta.subscribedCount = this.state.userMeta.subscribedCount.sub(1);
      // }

      // contract.on(filter, async (channel, user) => {
      //   // then perform callbacks
      //   if (this.state.callbacks[UserEvents.UNSUBSCRIBED]) {
      //     for (let [callbackID, callback] of Object.entries(this.state.callbacks[UserEvents.UNSUBSCRIBED])) {
      //       if (callback) { callback(channel, user); }
      //     }
      //   }
      // });
    }

    // 3. Listen For Public Key Broadcast
    listenForPublicKeyBroadcastAsync = async () => {
        // TODO Use the COMMUNICATOR CONTRACT
      // const contract = this.state.epnsReadProvider;
      // let filter = contract.filters.PublicKeyRegistered(this.state.account, null);

      // if (this.state.userMeta) {
      //   this.state.userMeta.publicKeyRegistered = true;
      // }

      // contract.once(filter, async (channel, user) => {
      //   // then perform callbacks
      //   if (this.state.callbacks[UserEvents.UNSUBSCRIBED]) {
      //     for (let [callbackID, callback] of Object.entries(this.state.callbacks[UserEvents.UNSUBSCRIBED])) {
      //       if (callback) { callback(channel, user); }
      //     }
      //   }
      // });
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

    // GET OWNER META
    getOwnerMetaAsync = async () => {
      const enableLogs = 0;

      return new Promise ((resolve, reject) => {
        if (this.state.ownerMeta) {
          if (enableLogs) console.log("getOwnerMetaAsync() [CACHED] --> %o", this.state.ownerMeta);
          resolve(this.state.ownerMeta);
        }
        else {
          EPNSCoreHelper.getOwnerInfo(this.state.epnsReadProvider)
            .then(response => {
              this.state.ownerMeta = response;

              if (enableLogs) console.log("getOwnerMetaAsync() --> %o", response);
              resolve(this.state.ownerMeta);
            })
            .catch(err => {
              console.log("!!!Error, getOwnerMetaAsync() --> %o", err);
              reject(err);
            });
        }
      });
    }

    // USERS COUNT
    getUsersCountAsync = async () => {
      return new Promise (async (resolve, reject) => {
        if (this.state.channelsCount == -1) {
          // Count not set, get and set it first
          const count = EPNSCoreHelper.getTotalNumberOfUsers(this.state.epnsReadProvider)
            .then(response => {
              this.state.usersCount = response;
              console.log("getUsersCountAsync() --> %o", response);
              resolve(this.state.usersCount)
            })
            .catch(err => { console.log("!!!Error, getUsersCountAsync() --> %o", err); reject(err); });
        }
        else {
          resolve(this.state.usersCount);
        }
      });
    }

    incrementUsersCountAsync = async (incrementCount) => {
      return new Promise ((resolve, reject) => {
        this.getUsersCountAsync()
          .then(response => {
            this.state.usersCount = response + incrementCount;
            console.log("incrementChannelsCountAsync() --> %d", this.state.usersCount);
            resolve(this.state.usersCount);
          })
          .catch(err => { console.log("!!!Error, getUsersCountAsync() --> %o", err); reject(err); });
      });
    }

    // GET USER META
    getUserMetaAsync = async () => {
      const enableLogs = 0;

      return new Promise ((resolve, reject) => {
        if (this.state.userMeta) {
          if (enableLogs) console.log("getUserMetaAsync() [CACHED] --> %o", this.state.userMeta);
          resolve(this.state.userMeta);
        }
        else {
          EPNSCoreHelper.getUserInfo(this.state.account, this.state.epnsCommReadProvider)
            .then(response => {
              this.state.userMeta = response;

              if (enableLogs) console.log("getUserMetaAsync() --> %o", this.state.userMeta);
              resolve(this.state.userMeta);
            })
            .catch(err => {
              console.log("!!!Error, getUserMetaAsync() --> %o", err);
              reject(err);
          });
        }
      });
    }

}
