/* eslint-disable import/no-anonymous-default-export */
// Define Size and Device

import { blocksColorsLegacy as COLORS, deviceSizes, deviceMediaQ } from 'blocks';

/**
 * @deprecated
 *
 * Please import it from blocks
 */
export const size = deviceSizes;

/**
 * @deprecated
 *
 * Please import it from blocks
 */
export const device = deviceMediaQ;

// Define Padding
export const globalsPadding = {};

// Define Margin
export const globalsMargin = {
  LOGIN_MODULES: {
    DESKTOP: {
      TOP: '30px',
      RIGHT: '30px',
      BOTTOM: '30px',
      LEFT: '30px',
    },
    TABLET: {
      TOP: '25px',
      RIGHT: '25px',
      BOTTOM: '25px',
      LEFT: '25px',
    },
    MOBILE: {
      TOP: '20px',
      RIGHT: '20px',
      BOTTOM: '20px',
      LEFT: '20px',
    },
  },
  MINI_MODULES: {
    DESKTOP: {
      TOP: '0px',
      RIGHT: '30px',
      BOTTOM: '48px',
      // LEFT: '30px', //prev margin of module
      LEFT: '14px', //new margin of module
    },
    TABLET: {
      TOP: '0px',
      RIGHT: '25px',
      BOTTOM: '25px',
      LEFT: '25px',
    },
    MOBILE: {
      TOP: '0px',
      RIGHT: '0px',
      BOTTOM: '20px',
      LEFT: '0px',
    },
  },
  BIG_MODULES: {
    DESKTOP: {
      TOP: '0px',
      RIGHT: '0px',
      BOTTOM: '0px',
      // LEFT: '18px', //prev margin of module
      LEFT: '0px', // new margin of the module
    },
    TABLET: {
      TOP: '0px',
      RIGHT: '25px',
      BOTTOM: '25px',
      LEFT: '25px',
    },
    MOBILE: {
      TOP: '0px',
      RIGHT: '0px',
      BOTTOM: '0px',
      LEFT: '0px',
    },
  },
};

// Define Globals
export default {
  LINKS: {
    IOS_APP: 'https://apps.apple.com/app/ethereum-push-service-epns/id1528614910',
    ANDROID_APP: 'https://play.google.com/store/apps/details?id=io.epns.epns&hl=mr&gl=US',
  },

  // For Async Storage --> Represents Key and some Constants
  STORAGE: {},

  CONSTANTS: {
    HEADER_HEIGHT: 70,
    LG_HEADER_HEIGHT: 120,
    LEFT_BAR_WIDTH: 250,
    COLLAPSABLE_LEFT_BAR_WIDTH: 100,
    COLLAPSABLE_RIGHT_BAR_WIDTH: 90,
    NO_LEFT_BAR_WIDTH: 0,

    NAVBAR_SECTIONS: {
      PRIMARY: 1,
      NOTIFICATION: 2,
      MESSAGING: 3,
      DEVELOPERS: 4,
      MOBILE: 5,
      THIRD: 6,
    },

    NAVBAR_IDENTIFIERS: {
      CREATE_CHANNEL: 1,
      COMMUNICATE_TAB: 2,
      DEVELOPER_TAB: 3,
      LOADING: 4,
    },
  },

  ADJUSTMENTS: {
    MODULE_BOX_SHADOW: 'rgb(0 0 0 / 10%) 0px 15px 20px -5px',

    PADDING: {
      DEFAULT: '20px',
      BIG: '40px',
      HUGE: '60px',
    },
    MARGIN: {
      VERTICAL: '30px',
      HORIZONTAL: '20px',

      LOGIN_MODULES: {
        DESKTOP: `${globalsMargin.LOGIN_MODULES.DESKTOP.TOP} ${globalsMargin.LOGIN_MODULES.DESKTOP.RIGHT} ${globalsMargin.LOGIN_MODULES.DESKTOP.BOTTOM} ${globalsMargin.LOGIN_MODULES.DESKTOP.LEFT}`,
        TABLET: `${globalsMargin.LOGIN_MODULES.TABLET.TOP} ${globalsMargin.LOGIN_MODULES.TABLET.RIGHT} ${globalsMargin.LOGIN_MODULES.TABLET.BOTTOM} ${globalsMargin.LOGIN_MODULES.TABLET.LEFT}`,
        MOBILE: `${globalsMargin.LOGIN_MODULES.MOBILE.TOP} ${globalsMargin.LOGIN_MODULES.MOBILE.RIGHT} ${globalsMargin.LOGIN_MODULES.MOBILE.BOTTOM} ${globalsMargin.LOGIN_MODULES.MOBILE.LEFT}`,
      },
      MINI_MODULES: {
        DESKTOP: `${globalsMargin.MINI_MODULES.DESKTOP.TOP} ${globalsMargin.MINI_MODULES.DESKTOP.RIGHT} ${globalsMargin.MINI_MODULES.DESKTOP.BOTTOM} ${globalsMargin.MINI_MODULES.DESKTOP.LEFT}`,
        TABLET: `${globalsMargin.MINI_MODULES.TABLET.TOP} ${globalsMargin.MINI_MODULES.TABLET.RIGHT} ${globalsMargin.MINI_MODULES.TABLET.BOTTOM} ${globalsMargin.MINI_MODULES.TABLET.LEFT}`,
        MOBILE: `${globalsMargin.MINI_MODULES.MOBILE.TOP} ${globalsMargin.MINI_MODULES.MOBILE.RIGHT} ${globalsMargin.MINI_MODULES.MOBILE.BOTTOM} ${globalsMargin.MINI_MODULES.MOBILE.LEFT}`,
      },
      BIG_MODULES: {
        DESKTOP: `${globalsMargin.BIG_MODULES.DESKTOP.TOP} ${globalsMargin.BIG_MODULES.DESKTOP.RIGHT} ${globalsMargin.BIG_MODULES.DESKTOP.BOTTOM} ${globalsMargin.BIG_MODULES.DESKTOP.LEFT}`,
        TABLET: `${globalsMargin.BIG_MODULES.TABLET.TOP} ${globalsMargin.BIG_MODULES.TABLET.RIGHT} ${globalsMargin.BIG_MODULES.TABLET.BOTTOM} ${globalsMargin.BIG_MODULES.TABLET.LEFT}`,
        MOBILE: `${globalsMargin.BIG_MODULES.MOBILE.TOP} ${globalsMargin.BIG_MODULES.MOBILE.RIGHT} ${globalsMargin.BIG_MODULES.MOBILE.BOTTOM} ${globalsMargin.BIG_MODULES.MOBILE.LEFT}`,
      },
    },
    RADIUS: {
      LARGE: '32px',
      MID: '24px',
      SMALL: '16px',
      MINI: '12px',
    },
    BLUR: {
      DEFAULT: 5,
    },
  },

  COLORS,
};
