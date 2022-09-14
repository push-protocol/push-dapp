/* eslint-disable import/no-anonymous-default-export */
// Define Size and Device
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};

// Define Padding
export const globalsPadding = {

}

// Define Margin
export const globalsMargin = {
  MINI_MODULES: {
    DESKTOP: {
      TOP: '48px',
      RIGHT: '30px', 
      BOTTOM: '48px',
      LEFT: '30px'
    },
    TABLET: {
      TOP: '25px',
      RIGHT: '25px', 
      BOTTOM: '25px',
      LEFT: '25px'
    },
    MOBILE: {
      TOP: '20px',
      RIGHT: '20px', 
      BOTTOM: '20px',
      LEFT: '20px'
    },
  },
  BIG_MODULES: {
    DESKTOP: {
      TOP: '18px',
      RIGHT: '0px', 
      BOTTOM: '0px',
      LEFT: '18px'
    },
    TABLET: {
      TOP: '25px',
      RIGHT: '25px', 
      BOTTOM: '25px',
      LEFT: '25px'
    },
    MOBILE: {
      TOP: '20px',
      RIGHT: '20px', 
      BOTTOM: '20px',
      LEFT: '20px'
    },
  }
}

// Define Globals
export default {
  LINKS: {
    IOS_APP: 'https://apps.apple.com/app/ethereum-push-service-epns/id1528614910',
    ANDROID_APP: 'https://play.google.com/store/apps/details?id=io.epns.epns&hl=mr&gl=US'
  },

  // For Async Storage --> Represents Key and some Constants
  STORAGE: {},

  CONSTANTS: {
    HEADER_HEIGHT: 70,
    LEFT_BAR_WIDTH: 260,

    NAVBAR_SECTIONS: {
      PRIMARY: 1,
      SECONDARY: 2,
      MOBILE: 3,
      THIRD: 4
    },

    NAVBAR_IDENTIFIERS: {
      CREATE_CHANNEL: 1,
      COMMUNICATE_TAB: 2,
      DEVELOPER_TAB: 3,
    }
  },
  
  ADJUSTMENTS: {
    MODULE_BOX_SHADOW: 'rgb(0 0 0 / 10%) 0px 15px 20px -5px',

    PADDING: {
      DEFAULT: '20px',
      BIG: '40px',
    },
    MARGIN: {
      VERTICAL: '30px',
      HORIZONTAL: '20px',

      MINI_MODULES: {
        DESKTOP: `${globalsMargin.MINI_MODULES.DESKTOP.TOP} ${globalsMargin.MINI_MODULES.DESKTOP.RIGHT} ${globalsMargin.MINI_MODULES.DESKTOP.BOTTOM} ${globalsMargin.MINI_MODULES.DESKTOP.LEFT}`,
        TABLET: `${globalsMargin.MINI_MODULES.TABLET.TOP} ${globalsMargin.MINI_MODULES.TABLET.RIGHT} ${globalsMargin.MINI_MODULES.TABLET.BOTTOM} ${globalsMargin.MINI_MODULES.TABLET.LEFT}`,
        MOBILE: `${globalsMargin.MINI_MODULES.MOBILE.TOP} ${globalsMargin.MINI_MODULES.MOBILE.RIGHT} ${globalsMargin.MINI_MODULES.MOBILE.BOTTOM} ${globalsMargin.MINI_MODULES.MOBILE.LEFT}`,
      },
      BIG_MODULES: {
        DESKTOP: `${globalsMargin.BIG_MODULES.DESKTOP.TOP} ${globalsMargin.BIG_MODULES.DESKTOP.RIGHT} ${globalsMargin.BIG_MODULES.DESKTOP.BOTTOM} ${globalsMargin.BIG_MODULES.DESKTOP.LEFT}`,
        TABLET: `${globalsMargin.BIG_MODULES.TABLET.TOP} ${globalsMargin.BIG_MODULES.TABLET.RIGHT} ${globalsMargin.BIG_MODULES.TABLET.BOTTOM} ${globalsMargin.BIG_MODULES.TABLET.LEFT}`,
        MOBILE: `${globalsMargin.BIG_MODULES.MOBILE.TOP} ${globalsMargin.BIG_MODULES.MOBILE.RIGHT} ${globalsMargin.BIG_MODULES.MOBILE.BOTTOM} ${globalsMargin.BIG_MODULES.MOBILE.LEFT}`,
      }
    },
    RADIUS: {
      LARGE: '32px',
      MID: '24px',
      SMALL: '16px',
      MINI: '12px'
    }
  },

  COLORS: {
    PRIMARY: 'rgba(27.0, 150.0, 227.0, 1.0)',
    PRIMARY_PINK: '#CF1C84',

    LINKS: 'rgba(20.0, 126.0, 251.0, 1.0)',

    GRADIENT_PRIMARY: 'rgba(226.0, 8.0, 128.0, 1.0)',
    GRADIENT_SECONDARY: 'rgba(53.0, 197.0, 243.0, 1.0)',
    GRADIENT_THIRD: 'rgba(103.0, 76.0, 159.0, 1.0)',

    TRANSPARENT: 'transparent',

    WHITE: 'rgba(255.0, 255.0, 255.0, 1.0)',
    DARK_WHITE: 'rgba(255.0, 255.0, 255.0, 0.75)',
    MID_WHITE: 'rgba(255.0, 255.0, 255.0, 0.5)',
    LIGHT_WHITE: 'rgba(255.0, 255.0, 255.0, 0.25)',

    SLIGHTER_GRAY: 'rgba(250.0, 250.0, 250.0, 1)',
    SLIGHT_GRAY: 'rgba(231.0, 231.0, 231.0, 1)',
    LIGHT_GRAY: 'rgba(225.0, 225.0, 225.0, 1)',
    MID_GRAY: 'rgba(200.0, 200.0, 200.0, 1)',
    DARK_GRAY: 'rgba(160.0, 160.0, 160.0, 1)',
    DARKER_GRAY: 'rgba(100.0, 100.0, 100.0, 1)',

    LIGHT_BLACK_TRANS: 'rgba(0.0, 0.0, 0.0, 0.1)',
    SEMI_MID_BLACK_TRANS: 'rgba(0.0, 0.0, 0.0, 0.25)',
    MID_BLACK_TRANS: 'rgba(0.0, 0.0, 0.0, 0.5)',
    DARK_BLACK_TRANS: 'rgba(0.0, 0.0, 0.0, 0.75)',
    BLACK: 'rgba(0.0, 0.0, 0.0, 1.0)',

    CONFIRM_GREEN: 'rgba(50.0, 205.0, 50.0, 1.0)',

    CONFIRM: 'rgba(34.0, 139.0, 34.0, 1.0)',
    WARNING: 'rgba(255.0, 153.0, 0.0, 1.0)',

    SUBLIME_RED: 'rgba(237.0, 59.0, 72.0, 1.0)',
    BADGE_RED: 'rgba(208.0, 44.0, 30.0, 1.0)',
    LIGHT_MAROON: 'rgba(159.0, 0.0, 0.0, 1.0)',
    LIGHTER_MAROON: 'rgba(129.0, 0.0, 0.0, 1.0)',
  },
};

