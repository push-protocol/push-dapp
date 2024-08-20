// Internal Components
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';

// Internal Configs
import GLOBALS from 'config/Globals';
import { themeDark, themeLight } from 'config/Themization';
import APP_PATHS from './AppPaths';

const NavigationList = {
  primary: {
    dashboard: {
      src: 'homeOffIcon',
      activeSrc: 'homeOnIcon',
      iconFactory: null,
      name: 'Dashboard',
      title: 'Dashboard',
      alt: 'Open Dashboard',
      href: APP_PATHS.WelcomeDashboard,
      newTab: false,
      isRoute: true,
      hasMenuLogic: true,
      loading: false,
      hidden: false,
      headerTag: {
        title: 'Dashboard',
        light: {
          bg: GLOBALS.COLORS.GRADIENT_PRIMARY,
          fg: themeLight.headerTagFg,
        },
        dark: {
          bg: themeDark.headerTagBg,
          fg: themeDark.headerTagFg,
        },
      },
    },
  },
  secondary: {
    Notifications: {
      inbox: {
        src: 'inboxOffIcon',
        activeSrc: 'inboxOnIcon',
        iconFactory: null,
        name: 'Inbox',
        title: 'Inbox',
        alt: 'Open Inbox',
        href: APP_PATHS.Inbox,
        newTab: false,
        isRoute: true,
        hasMenuLogic: true,
        loading: false,
        hidden: false,
        headerTag: {
          title: 'Inbox',
          light: {
            bg: GLOBALS.COLORS.GRADIENT_PRIMARY,
            fg: themeLight.headerTagFg,
          },
          dark: {
            bg: themeDark.headerTagBg,
            fg: themeDark.headerTagFg,
          },
        },
      },

      channels: {
        src: 'channelsOffIcon',
        activeSrc: 'channelsOnIcon',
        iconFactory: null,
        name: 'Channels',
        title: 'Browse Channels',
        alt: 'Open Channels',
        href: APP_PATHS.Channels,
        newTab: false,
        isRoute: true,
        hasMenuLogic: true,
        opened: true,
        loading: false,
        hidden: false,
        headerTag: {
          title: 'View Channels',
          light: {
            bg: GLOBALS.COLORS.GRADIENT_SECONDARY,
            fg: themeLight.headerTagFg,
          },
          dark: {
            bg: themeDark.headerTagBg,
            fg: themeDark.headerTagFg,
          },
        },
      },


    },
    Messsaging: {

      chat: {
        src: 'chatOffIcon',
        activeSrc: 'chatOnIcon',
        iconFactory: null,
        name: 'Chat',
        title: 'Chat',
        alt: 'Open Chat',
        href: APP_PATHS.Chat,
        newTab: false,
        isRoute: true,
        hasMenuLogic: true,
        hidden: false,
        // allowReadOnly: false,
        headerTag: {
          title: 'Chat',
          light: {
            bg: GLOBALS.COLORS.GRADIENT_SECONDARY,
            fg: themeLight.headerTagFg,
          },
          dark: {
            bg: themeDark.headerTagBg,
            fg: themeDark.headerTagFg,
          },
        },
      },



    },
    Developers: {

      createChannel: {
        uid: GLOBALS.CONSTANTS.NAVBAR_IDENTIFIERS.CREATE_CHANNEL,
        src: 'createChannelIcon',
        activeSrc: 'createChannelIcon',
        iconFactory: null,
        name: 'Create Channel',
        title: 'Create Channel',
        alt: 'Create Channels / Dashboard',
        href: APP_PATHS.CreateChannel,
        newTab: false,
        isRoute: true,
        hasMenuLogic: true,
        loading: true,
        hidden: false,
        headerTag: {
          title: 'Channel Dashboard',
          light: {
            bg: GLOBALS.COLORS.GRADIENT_SECONDARY,
            fg: themeLight.headerTagFg,
          },
          dark: {
            bg: themeDark.headerTagBg,
            fg: themeDark.headerTagFg,
          },
        },
      },

      sendNotifs: {
        uid: GLOBALS.CONSTANTS.NAVBAR_IDENTIFIERS.SEND_NOTIFS,
        src: 'sendNotifOffIcon',
        activeSrc: 'sendNotifOnIcon',
        iconFactory: null,
        name: 'Send Notifications',
        title: 'Send Notifications',
        alt: 'Send Notifs',
        href: APP_PATHS.Send,
        newTab: false,
        isRoute: true,
        hasMenuLogic: true,
        hidden: true,
        headerTag: {
          title: 'Send Notifications',
          light: {
            bg: GLOBALS.COLORS.GRADIENT_SECONDARY,
            fg: themeLight.headerTagFg,
          },
          dark: {
            bg: themeDark.headerTagBg,
            fg: themeDark.headerTagFg,
          },
        },
      },




    }
  },
  third: {
    yieldv2: {
      src: 'YieldFarmingOff',
      activeSrc: 'YieldFarmingOn',
      iconFactory: null,
      name: 'Yield Farming V2',
      title: 'Yield Farming V2',
      alt: 'Open Yield Farming V2',
      href: APP_PATHS.YieldV2,
      newTab: false,
      isRoute: true,
      hasMenuLogic: true,
      hidden: false,
      showNewTag: false,
      headerTag: {
        title: 'Yield Farming V2',
        light: {
          bg: GLOBALS.COLORS.GRADIENT_PRIMARY,
          fg: themeLight.headerTagFg,
        },
        dark: {
          bg: themeDark.headerTagBg,
          fg: themeDark.headerTagFg,
        },
      },
    },

    receiveNotifs: {
      src: 'receiveNotifOffIcon',
      activeSrc: 'receiveNotifOnIcon',
      iconFactory: null,
      name: 'Receive Notifications',
      title: 'Receive Notifications',
      alt: 'Receive Notifications',
      href: '#receive-notifications',
      hasOnClickFunction: true,
      newTab: false,
      isRoute: true,
      hasMenuLogic: true,
      hidden: false,
      headerTag: {
        title: 'Receive Notifications',
        light: {
          bg: GLOBALS.COLORS.GRADIENT_THIRD,
          fg: themeLight.headerTagFg,
        },
        dark: {
          bg: themeDark.headerTagBg,
          fg: themeDark.headerTagFg,
        },
      },
    },
    // latestOlvy: {
    //   src: 'olvyIcon',
    //   activeSrc: 'olvyIcon',
    //   iconFactory: null,
    //   name: 'Latest',
    //   title: 'Latest',
    //   alt: 'Latest',
    //   id:"olvy-target",
    //   newTab: false,
    //   isRoute: true,
    //   hasMenuLogic: true,
    //   headerTag: {
    //     title: 'Latest',
    //     light: {
    //       bg: GLOBALS.COLORS.GRADIENT_THIRD,
    //       fg: themeLight.headerTagFg
    //     },
    //     dark: {
    //       bg: themeDark.headerTagBg,
    //       fg: themeDark.headerTagFg
    //     }
    //   }
    // },
    governance: {
      uid: GLOBALS.CONSTANTS.NAVBAR_IDENTIFIERS.GOVERNANCE,
      src: 'govOffIcon',
      activeSrc: 'govOnIcon',
      iconFactory: null,
      name: 'Governance',
      title: 'Governance',
      alt: 'Governance',
      href: APP_PATHS.Govern,
      newTab: false,
      isRoute: true,
      hasMenuLogic: true,
      hidden: false,
      headerTag: {
        title: 'Governance',
        light: {
          bg: GLOBALS.COLORS.GRADIENT_SECONDARY,
          fg: themeLight.headerTagFg,
        },
        dark: {
          bg: themeDark.headerTagBg,
          fg: themeDark.headerTagFg,
        },
      },
    },

    // incentives: {
    //   src: 'incentivesOffIcon',
    //   activeSrc: 'incentivesOnIcon',
    //   iconFactory: null,
    //   name: 'Incentives',
    //   title: 'Check Incentives Tab',
    //   alt: 'Incentives Tab Icon',
    //   href: null,
    //   newTab: false,
    //   opened: false,
    //   isRoute: true,
    //   hasMenuLogic: true,
    //   drilldown: {
    //     // yield: {
    //     //   src: 'yieldIcon',
    //     //   activeSrc: 'yieldIcon',
    //     //   iconFactory: null,
    //     //   name: 'Yield Farming',
    //     //   title: 'Yield Farming',
    //     //   alt: 'Open Yield Farming',
    //     //   href: '/yield',
    //     //   newTab: false,
    //     //   isRoute: true,
    //     //   hasMenuLogic: true,
    //     //   hidden: false,
    //     //   headerTag: {
    //     //     title: 'Yield Farming',
    //     //     light: {
    //     //       bg: GLOBALS.COLORS.GRADIENT_PRIMARY,
    //     //       fg: themeLight.headerTagFg,
    //     //     },
    //     //     dark: {
    //     //       bg: themeDark.headerTagBg,
    //     //       fg: themeDark.headerTagFg,
    //     //     },
    //     //   },
    //     // },
    //     yieldv2: {
    //       src: 'yieldIcon',
    //       activeSrc: 'yieldIcon',
    //       iconFactory: null,
    //       name: 'Yield Farming V2',
    //       title: 'Yield Farming V2',
    //       alt: 'Open Yield Farming V2',
    //       href: '/yieldv2',
    //       newTab: false,
    //       isRoute: true,
    //       hasMenuLogic: true,
    //       hidden: false,
    //       headerTag: {
    //         title: 'Yield Farming V2',
    //         light: {
    //           bg: GLOBALS.COLORS.GRADIENT_PRIMARY,
    //           fg: themeLight.headerTagFg,
    //         },
    //         dark: {
    //           bg: themeDark.headerTagBg,
    //           fg: themeDark.headerTagFg,
    //         },
    //       },
    //     },
    //     rockstars: {
    //       src: 'rockstarsIcon',
    //       activeSrc: 'rockstarsIcon',
    //       iconFactory: null,
    //       name: 'Rockstars of Push (EPNS)',
    //       title: 'Check Rockstars of Push (EPNS)',
    //       alt: 'Open Inbox',
    //       href: '/rockstar',
    //       newTab: false,
    //       isRoute: true,
    //       hasMenuLogic: true,
    //       hidden: false,
    //       headerTag: {
    //         title: 'Rockstars NFTs',
    //         light: {
    //           bg: GLOBALS.COLORS.GRADIENT_SECONDARY,
    //           fg: themeLight.headerTagFg,
    //         },
    //         dark: {
    //           bg: themeDark.headerTagBg,
    //           fg: themeDark.headerTagFg,
    //         },
    //       },
    //     },
    //     airdrop: {
    //       src: 'airdropIcon',
    //       activeSrc: 'airdropIcon',
    //       iconFactory: null,
    //       name: 'Gratitude Drops',
    //       title: 'Check Gratitude Drop',
    //       alt: 'Open Gratitude Drop',
    //       href: '/gratitude',
    //       newTab: false,
    //       isRoute: true,
    //       hasMenuLogic: true,
    //       hidden: false,
    //       headerTag: {
    //         title: 'Gratitude Drop',
    //         light: {
    //           bg: GLOBALS.COLORS.GRADIENT_THIRD,
    //           fg: themeLight.headerTagFg,
    //         },
    //         dark: {
    //           bg: themeDark.headerTagBg,
    //           fg: themeDark.headerTagFg,
    //         },
    //       },
    //     },
    //   },
    // },
    more: {
      src: 'moreOffIcon',
      activeSrc: 'moreOnIcon',
      iconFactory: null,
      name: 'More',
      title: 'More',
      alt: 'More',
      href: null,
      newTab: false,
      opened: false,
      isRoute: true,
      hasMenuLogic: true,
      drilldown: {
        faq: {
          src: 'faqIcon',
          activeSrc: 'faqIcon',
          iconFactory: null,
          name: 'FAQs',
          title: 'Checkout Frequently Asked Questions',
          alt: 'Open FAQs',
          href: APP_PATHS.FAQ,
          newTab: false,
          isRoute: true,
          hasMenuLogic: true,
          hidden: false,
          headerTag: {
            title: 'FAQ',
            light: {
              bg: GLOBALS.COLORS.GRADIENT_PRIMARY,
              fg: themeLight.headerTagFg,
            },
            dark: {
              bg: themeDark.headerTagBg,
              fg: themeDark.headerTagFg,
            },
          },
        },
        // livewalkthrough: {
        //   src: 'walkthroughIcon',
        //   activeSrc: 'walkthroughIcon',
        //   iconFactory: null,
        //   name: 'Live Walkthrough',
        //   title: 'Live Walkthrough',
        //   alt: 'Start Live Walkthrough',
        //   href: '/live_walkthrough',
        //   newTab: false,
        //   isRoute: true,
        //   hasMenuLogic: true,
        //   hidden: false,
        //   headerTag: {
        //     title: 'Live Walkthrough',
        //     light: {
        //       bg: GLOBALS.COLORS.GRADIENT_SECONDARY,
        //       fg: themeLight.headerTagFg,
        //     },
        //     dark: {
        //       bg: themeDark.headerTagBg,
        //       fg: themeDark.headerTagFg,
        //     },
        //   },
        // },
        support: {
          src: 'supportIcon',
          activeSrc: 'supportIcon',
          iconFactory: null,
          name: 'Support',
          title: 'Open a support ticket',
          alt: 'Open Support Ticket',
          href: APP_PATHS.Support,
          newTab: false,
          opened: false,
          isRoute: true,
          hasMenuLogic: true,
          hidden: false,
        },
      },
    },
  }
}

// // remove secret feature
// if (
// window.location.hostname == 'app.epns.io' ||
// window.location.hostname == 'staging.epns.io' ||
// window.location.hostname == 'app.push.org' ||
// window.location.hostname == 'staging.push.org'
// ) {
//   delete NavigationList.primary.chat;
// }

export default NavigationList;
