import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import GLOBALS from 'config/Globals';
import { themeDark, themeLight } from 'config/Themization';

const NavigationList = {
  primary: {
    inbox: {
      src: 'navigation/inboxOffIcon.svg',
      activeSrc: 'navigation/inboxOnIcon.svg',
      iconFactory: null,
      name: 'Inbox',
      title: 'Inbox',
      alt: 'Open Inbox',
      href: '/inbox',
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
      src: 'navigation/channelsOffIcon.svg',
      activeSrc: 'navigation/channelsOnIcon.svg',
      iconFactory: null,
      name: 'Channels',
      title: 'Browse Channels',
      alt: 'Open Channels',
      href: '/channels',
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
    chat: {
      src: 'navigation/chatOffIcon.svg',
      activeSrc: 'navigation/chatOnIcon.svg',
      iconFactory: null,
      name: 'Chat',
      title: 'Chat',
      alt: 'Open Chat',
      href: '/chat',
      newTab: false,
      isRoute: true,
      hasMenuLogic: true,
      hidden: false,
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
  secondary: {
    createChannel: {
      uid: GLOBALS.CONSTANTS.NAVBAR_IDENTIFIERS.CREATE_CHANNEL,
      src: 'navigation/createChannelIcon.svg',
      activeSrc: 'navigation/createChannelIcon.svg',
      iconFactory: null,
      name: 'Create Channel',
      title: 'Create Channel',
      alt: 'Create Channels / Dashboard',
      href: '/dashboard',
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
      src: 'navigation/sendNotifOffIcon.svg',
      activeSrc: 'navigation/sendNotifOnIcon.svg',
      iconFactory: null,
      name: 'Send Notifications',
      title: 'Send Notifications',
      alt: 'Send Notifs',
      href: '/send',
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
  },
  third: {
    receiveNotifs: {
      src: 'navigation/receiveNotifOffIcon.svg',
      activeSrc: 'navigation/receiveNotifOnIcon.svg',
      iconFactory: null,
      name: 'Receive Notifications',
      title: 'Receive Notifications',
      alt: 'Receive Notifications',
      href: '/receive',
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
    //   src: 'navigation/olvyIcon.svg',
    //   activeSrc: 'navigation/olvyIcon.svg',
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
      src: 'navigation/govOffIcon.svg',
      activeSrc: 'navigation/govOnIcon.svg',
      iconFactory: null,
      name: 'Governance',
      title: 'Governance',
      alt: 'Governance',
      href: '/govern',
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
    incentives: {
      src: 'navigation/incentivesOffIcon.svg',
      activeSrc: 'navigation/incentivesOnIcon.svg',
      iconFactory: null,
      name: 'Incentives',
      title: 'Check Incentives Tab',
      alt: 'Incentives Tab Icon',
      href: null,
      newTab: false,
      opened: false,
      isRoute: true,
      hasMenuLogic: true,
      drilldown: {
        yield: {
          src: 'navigation/yieldIcon.svg',
          activeSrc: 'navigation/yieldIcon.svg',
          iconFactory: null,
          name: 'Yield Farming',
          title: 'Yield Farming',
          alt: 'Open Yield Farming',
          href: '/yield',
          newTab: false,
          isRoute: true,
          hasMenuLogic: true,
          hidden: false,
          headerTag: {
            title: 'Yield Farming',
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
        rockstars: {
          src: 'navigation/rockstarsIcon.svg',
          activeSrc: 'navigation/rockstarsIcon.svg',
          iconFactory: null,
          name: 'Rockstars of Push (EPNS)',
          title: 'Check Rockstars of Push (EPNS)',
          alt: 'Open Inbox',
          href: '/rockstar',
          newTab: false,
          isRoute: true,
          hasMenuLogic: true,
          hidden: false,
          headerTag: {
            title: 'Rockstars NFTs',
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
        airdrop: {
          src: 'navigation/airdropIcon.svg',
          activeSrc: 'navigation/airdropIcon.svg',
          iconFactory: null,
          name: 'Gratitude Drops',
          title: 'Check Gratitude Drop',
          alt: 'Open Gratitude Drop',
          href: '/gratitude',
          newTab: false,
          isRoute: true,
          hasMenuLogic: true,
          hidden: false,
          headerTag: {
            title: 'Gratitude Drop',
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
      },
    },
    more: {
      src: 'navigation/moreOffIcon.svg',
      activeSrc: 'navigation/moreOnIcon.svg',
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
          src: 'navigation/faqIcon.svg',
          activeSrc: 'navigation/faqIcon.svg',
          iconFactory: null,
          name: 'FAQs',
          title: 'Checkout Frequently Asked Questions',
          alt: 'Open FAQs',
          href: '/faq',
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
        livewalkthrough: {
          src: 'navigation/walkthroughIcon.svg',
          activeSrc: 'navigation/walkthroughIcon.svg',
          iconFactory: null,
          name: 'Live Walkthrough',
          title: 'Live Walkthrough',
          alt: 'Start Live Walkthrough',
          href: '/live_walkthrough',
          newTab: false,
          isRoute: true,
          hasMenuLogic: true,
          hidden: false,
          headerTag: {
            title: 'Live Walkthrough',
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
        support: {
          src: 'navigation/supportIcon.svg',
          activeSrc: 'navigation/supportIcon.svg',
          iconFactory: null,
          name: 'Support',
          title: 'Open a support ticket',
          alt: 'Open Support Ticket',
          href: '/support',
          newTab: false,
          opened: false,
          isRoute: true,
          hasMenuLogic: true,
          hidden: false,
        },
      },
    },
  },
};

// remove secret feature
if (
  window.location.hostname == 'app.epns.io' ||
  window.location.hostname == 'staging.epns.io' ||
  window.location.hostname == 'app.push.org' ||
  window.location.hostname == 'staging.push.org'
) {
  delete NavigationList.primary.chat;
}

export default NavigationList;
