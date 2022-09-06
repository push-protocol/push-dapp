import { themeLight, themeDark } from 'config/Themization';
import GLOBALS from 'config/Globals';

const NavigationList = {
  primary: {
    inbox: {
      src: 'svg/Inbox-off.svg',
      activeSrc: 'svg/Inbox-on.svg',
      iconFactory: null,
      name: 'Inbox',
      title: 'Inbox',
      alt: 'Open Inbox',
      href: '/inbox',
      newTab: false,
      isRoute: true,
      hasMenuLogic: true,
      headerTag: {
        title: 'Inbox',
        light: {
          bg: GLOBALS.COLORS.GRADIENT_PRIMARY,
          fg: themeLight.headerTagFg
        },
        dark: {
          bg: themeDark.headerTagBg,
          fg: themeDark.headerTagFg
        }
      }
    },
    channels: {
      src: 'svg/Channels-off.svg',
      activeSrc: 'svg/Channels-on.svg',
      iconFactory: null,
      name: 'Channels',
      title: 'Browse Channels',
      alt: 'Open Channels',
      href: '/channels',
      newTab: false,
      isRoute: true,
      hasMenuLogic: true,
      opened: true,
      headerTag: {
        title: 'View Channels',
        light: {
          bg: GLOBALS.COLORS.GRADIENT_SECONDARY,
          fg: themeLight.headerTagFg
        },
        dark: {
          bg: themeDark.headerTagBg,
          fg: themeDark.headerTagFg
        }
      }
    }
  },
  secondary: {
    createChannel: {
      uid: GLOBALS.CONSTANTS.NAVBAR_IDENTIFIERS.CREATE_CHANNEL,
      src: 'svg/create-channel-icon.svg',
      activeSrc: 'svg/create-channel-icon.svg',
      iconFactory: null,
      name: 'Create Channel',
      title: 'Create Channel',
      alt: 'Create Channels / Dashboard',
      href: '/dashboard',
      newTab: false,
      isRoute: true,
      hasMenuLogic: true,
      headerTag: {
        title: 'Channel Dashboard',
        light: {
          bg: GLOBALS.COLORS.GRADIENT_SECONDARY,
          fg: themeLight.headerTagFg
        },
        dark: {
          bg: themeDark.headerTagBg,
          fg: themeDark.headerTagFg
        }
      }
    },
    sendNotifs: {
      uid: GLOBALS.CONSTANTS.NAVBAR_IDENTIFIERS.SEND_NOTIFS,
      src: 'svg/Send-off.svg',
      activeSrc: 'svg/Send-on.svg',
      iconFactory: null,
      name: 'Send Notifications',
      title: 'Send Notifications',
      alt: 'Send Notifs',
      href: '/send',
      newTab: false,
      isRoute: true,
      hasMenuLogic: true,
      headerTag: {
        title: 'Send Notifications',
        light: {
          bg: GLOBALS.COLORS.GRADIENT_SECONDARY,
          fg: themeLight.headerTagFg
        },
        dark: {
          bg: themeDark.headerTagBg,
          fg: themeDark.headerTagFg
        }
      }
    }
  },
  third: {
    receiveNotifs: {
      src: 'svg/Notifs-off.svg',
      activeSrc: 'svg/Notifs-on.svg',
      iconFactory: null,
      name: 'Receive Notifications',
      title: 'Receive Notifications',
      alt: 'Receive Notifications',
      href: '/receive',
      newTab: false,
      isRoute: true,
      hasMenuLogic: true,
      headerTag: {
        title: 'Receive Notifications',
        light: {
          bg: GLOBALS.COLORS.GRADIENT_THIRD,
          fg: themeLight.headerTagFg
        },
        dark: {
          bg: themeDark.headerTagBg,
          fg: themeDark.headerTagFg
        }
      }
    },
    governance: {
      uid: GLOBALS.CONSTANTS.NAVBAR_IDENTIFIERS.GOVERNANCE,
      src: 'svg/Gov-off.svg',
      activeSrc: 'svg/Gov-on.svg',
      iconFactory: null,
      name: 'Governance',
      title: 'Governance',
      alt: 'Governance',
      href: '/govern',
      newTab: false,
      isRoute: true,
      hasMenuLogic: true,
      headerTag: {
        title: 'Governance',
        light: {
          bg: GLOBALS.COLORS.GRADIENT_SECONDARY,
          fg: themeLight.headerTagFg
        },
        dark: {
          bg: themeDark.headerTagBg,
          fg: themeDark.headerTagFg
        }
      }
    },
    incentives: {
      src: 'svg/inc-off.svg',
      activeSrc: 'svg/inc-on.svg',
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
          src: 'svg/yield-icon.svg',
          activeSrc: 'svg/yield-icon.svg',
          iconFactory: null,
          name: 'Yield Farming',
          title: 'Yield Farming',
          alt: 'Open Yield Farming',
          href: '/yield',
          newTab: false,
          isRoute: true,
          hasMenuLogic: true,
          headerTag: {
            title: 'Yield Farming',
            light: {
              bg: GLOBALS.COLORS.GRADIENT_PRIMARY,
              fg: themeLight.headerTagFg
            },
            dark: {
              bg: themeDark.headerTagBg,
              fg: themeDark.headerTagFg
            }
          }
        },
        rockstars: {
          src: 'svg/rockstars-icon.svg',
          activeSrc: 'svg/rockstars-icon.svg',
          iconFactory: null,
          name: 'Rockstars of EPNS',
          title: 'Check Rockstars of EPNS',
          alt: 'Open Inbox',
          href: '/rockstar',
          newTab: false,
          isRoute: true,
          hasMenuLogic: true,
          headerTag: {
            title: 'Rockstars NFTs',
            light: {
              bg: GLOBALS.COLORS.GRADIENT_SECONDARY,
              fg: themeLight.headerTagFg
            },
            dark: {
              bg: themeDark.headerTagBg,
              fg: themeDark.headerTagFg
            }
          }
        },
        airdrop: {
          src: 'svg/airdrop-icon.svg',
          activeSrc: 'svg/airdrop-icon.svg',
          iconFactory: null,
          name: 'Gratitude Drops',
          title: 'Check Gratitude Drop',
          alt: 'Open Gratitude Drop',
          href: '/gratitude',
          newTab: false,
          isRoute: true,
          hasMenuLogic: true,
          headerTag: {
            title: 'Gratitude Drop',
            light: {
              bg: GLOBALS.COLORS.GRADIENT_THIRD,
              fg: themeLight.headerTagFg
            },
            dark: {
              bg: themeDark.headerTagBg,
              fg: themeDark.headerTagFg
            }
          }
        }
      }
    },
    more: {
      src: 'svg/More-off.svg',
      activeSrc: 'svg/More-on.svg',
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
          src: 'svg/faq-icon.svg',
          activeSrc: 'svg/faq-icon.svg',
          iconFactory: null,
          name: 'FAQs',
          title: 'Checkout Frequently Asked Questions',
          alt: 'Open FAQs',
          href: '/faq',
          newTab: false,
          isRoute: true,
          hasMenuLogic: true,
          headerTag: {
            title: 'FAQ',
            light: {
              bg: GLOBALS.COLORS.GRADIENT_PRIMARY,
              fg: themeLight.headerTagFg
            },
            dark: {
              bg: themeDark.headerTagBg,
              fg: themeDark.headerTagFg
            }
          }
        },
        livewalkthrough: {
          src: 'svg/walkthrough-icon.svg',
          activeSrc: 'svg/walkthrough-icon.svg',
          iconFactory: null,
          name: 'Live Walkthrough',
          title: 'Live Walkthrough',
          alt: 'Start Live Walkthrough',
          href: '/live_walkthrough',
          newTab: false,
          isRoute: true,
          hasMenuLogic: true,
          headerTag: {
            title: 'Live Walkthrough',
            light: {
              bg: GLOBALS.COLORS.GRADIENT_SECONDARY,
              fg: themeLight.headerTagFg
            },
            dark: {
              bg: themeDark.headerTagBg,
              fg: themeDark.headerTagFg
            }
          }
        },
        support: {
          src: 'svg/support-icon.svg',
          activeSrc: 'svg/support-icon.svg',
          iconFactory: null,
          name: 'Support',
          title: 'Open a support ticket',
          alt: 'Open Support Ticket',
          href: '/support',
          newTab: false,
          opened: false,
          isRoute: true,
          isMenuLogic: false
        }
      }
    }
  }
};

export default NavigationList;
