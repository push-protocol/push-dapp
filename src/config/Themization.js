// Define what props.theme will look like
const themeLight = {
  scheme: "light",

  // Default Theme
  default: {
    bg: '#FFF',
    secondaryBg: '#F4F5FA',
    border: '#E5E8F6',
    color: '#000',
    secondaryColor: '#657795',
    hover: '#F3F3FF',
  },

  // Login Theme
  login: {
    bg: '#DBEBFF',
    blur1: '#F6E4FF',
    blur2: '#CECDFF'
  },

  // Header Theme
  header: {
    bg: '#F4F5FA', // alt color to try - #F4F5FA, #FFF
  },

  // Navigation Theme
  nav: {
    bg: '#F4F5FA', // alt color to try - #F4F5FA, #FFF
    hamburgerBg: '#00000066',
    color: '#000',
    activeColor: '#F9EBF3',
  },

  // Chat Theme
  chat: {
    snapFocusBg: '#F4F5FA',
    chatboxBg: 'linear-gradient(179.97deg, #EEF5FF 0.02%, #ECE9FA 123.25%)',
    sendMessageBoxBg: "#ffffff",
    sendMessageBoxFontClr: "#494D5F",
    gifBtnBg: "#F6F8FF",
  },

  // Default Background Theme
  defaultBG: '#FFFFFF',

  // Header Theme
  headerTagBg: '#000',
  headerTagFg: '#000',

  headerIconsBg: '#000',

  // Left Bar Theme
  leftBarLoaderBg: '#ddd',

  leftBarSocialBg: '#eee',
  leftBarSocialIconBg: '#ddd',

  // Interface Theme
  interfaceTopPadding: '0px',
  interfaceBorder: '#f1f1f1',

  interfaceSkeleton: '#eee',

  // Main Theme
  backgroundBG: "#F4F5FA",
  backgroundBGLucid: "#00000099",
  mainBg: "#fff",
  fontColor: "#000",
  fontColorSecondary: "#00000099",
  scrollBg: "#eee",
  borderBg: "#f1f1f1",

  // View Channels Theme
  // -- View Channel Header Theme
  // -- -- Search Bar
  viewChannelSearchBg: "#F4F5FA",
  viewChannelSearchText: "#657795",
  viewChannelSearchIcon: "#657795",

  // -- -- Faucet Theme
  faucetBg: '#fff',
  faucetBorder: '#BAC4D6',
  faucetText: '#657795',
  faucetFilter: "brightness(0) saturate(100%) invert(46%) sepia(24%) saturate(480%) hue-rotate(179deg) brightness(95%) contrast(89%)",

  // -- View Channel Main Theme
  viewChannelOuterBorder: "#eee",
  viewChannelLink: "#e20880",
  viewChannelVerifiedBadge: "#ec008c",
  viewChannelIconBorder: "#E6E7EC",
  viewChannelSecondaryBG: "#FFDBF0",
  viewChannelSecondaryText: "#D53893",
  viewChannelSecondaryIcon: "#D53893",
  viewChannelPrimaryText: "#657795",

  // -- -- View Channel Tuts
  viewChannelTutsTitleBg: '#000',
  viewChannelTutsButtonBg: '#e20880',

  // Dynamic Tuts
  dynamicTutsBg: '#fff',
  dynamicTutsBgOverlay: '#00000099',
  dynamicTutsFontColor: '000',
  dynamicTutsButtonBg: '#000',
  dynamicTutsButtonColor: '#fff',
  dynamicTutsPrimaryColor: '#e20880',

  // QnA
  qnaBg: '#fff',
  qnaBgBorder: '#fafafa',

  yieldBg: '#f3f3f3',

  pushPriceBg: '#000',

  greyText: '#818589',

  color: '#000',

  channelBg: '#fafafa',

  button: '#000',

  buttonColor: '#fff',

  createColor: '#808080',

  // Modals
  modalContentBackground: "white",
  modalBackdropBackground: `rgba(255,255,255,0.4)`,
  modalBorderColor: "#E5E8F6",
  modalMessageColor: "black",
  modalIconColor: "#657795",
  modalLoaderPrimary: "red",
  modalLoaderSecondary: "white",
  modalBackdropZIndex: 1000,

  // Toast Notifications
  toastTextColor: "#000",
  toastBorderColor: "#F4F3FF",
  toastShadowColor: "#ccc",
  toastSuccessBackground: "linear-gradient(90.15deg, #30CC8B -125.65%, #30CC8B -125.63%, #F3FFF9 42.81%)",
  toastErrorBackground: "linear-gradient(90.15deg, #FF2070 -125.65%, #FF2D79 -125.63%, #FFF9FB 42.81%)",

  // Profile
  profileBG: "linear-gradient(107deg, rgba(226,8,128,1) 30%, rgba(103,76,159,1) 70%, rgba(53,197,243,1) 100%)",
  profileText: "#fff",

  //Snackbar
  snackbarBorderColor: "#E5E8F7",
  snackbarBorderText: "#000",
  snackbarBorderIcon: "none",
};

const themeDark = {
  scheme: "dark",

  // Default Theme
  default: {
    bg: '#2F3137',
    secondaryBg: '#282A2E',
    border: '#4A4F67',
    color: '#FFF',
    secondaryColor: '#B6BCD6',
    hover: '#00000033',
  },

  // Login Theme
  login: {
    bg: '#000000',
    blur1: '#E845A322',
    blur2: '#E845A322'
  },

  // Header Theme
  header: {
    bg: '#212228', // alt color to try - #F4F5FA, #FFF
  },

  // Navigation Theme
  nav: {
    bg: '#212228', // alt color to try - #212228, #2F3137
    hamburgerBg: '#00000066',
    color: '#B6BCD6',
    activeColor: '#404650'
  },

  // Chat Theme
  chat: {
    snapFocusBg: '#404650',
    chatboxBg: '#282A2E',
    sendMessageBoxBg: "#404650",
    sendMessageBoxFontClr: "#B6BCD6",
    gifBtnBg: "#282A2E"
  },

  // Header Theme
  headerTagBg: "#fff",
  headerTagFg: "#fff",

  headerIconsBg: '#fff',

  // Left Bar Theme
  leftBarLoaderBg: '#ddd',

  leftBarSocialBg: '#222',
  leftBarSocialIconBg: '#000',

  // Interface Theme
  interfaceTopPadding: '20px',
  interfaceBorder: '#333',
  interfaceSkeleton: '#414141',

  // Main Theme
  connectWalletBg: "#222",
  backgroundBG: "#222",
  backgroundBGLucid: "#000000cc",
  mainBg: "#000",
  fontColor: "#fff",
  fontColorSecondary: "#ffffff99",
  scrollBg: "#333",
  borderBg: "#333",

  // View Channels Theme
  // -- View Channel Header Theme
  // -- -- Search Bar
  viewChannelSearchBg: '#222',
  viewChannelSearchBorder: '#333',
  viewChannelSearchText: '#fff',
  viewChannelSearchIcon: '#414141',

  // -- -- Faucet Theme
  faucetBg: '#222',
  faucetBorder: '#333',
  faucetText: '#657795',
  faucetFilter: "brightness(0) saturate(100%) invert(46%) sepia(24%) saturate(480%) hue-rotate(179deg) brightness(95%) contrast(89%)",

  // -- View Channel Main Theme
  viewChannelOuterBorder: "#222",
  viewChannelLink: "#35c5f3",
  viewChannelVerifiedBadge: "#ccc",
  viewChannelIconBorder: "#222",
  viewChannelSecondaryBG: "#222",
  viewChannelSecondaryText: "#D53893",
  viewChannelSecondaryIcon: "#D53893",
  viewChannelPrimaryText: "#fff",


  // -- -- View Channel Tuts
  viewChannelTutsTitleBg: '#000',
  viewChannelTutsButtonBg: '#000',

  // Dynamic Tutorial
  dynamicTutsBg: '#222',
  dynamicTutsBgOverlay: '#000000cc',
  dynamicTutsFontColor: '#fff',
  dynamicTutsButtonBg: '#000',
  dynamicTutsButtonColor: '#fff',
  dynamicTutsPrimaryColor: '#fff',

  // QnA
  qnaBg: '#222',
  qnaBgBorder: '#666',

  color: '#fff',

  yieldBg: '#ddd',

  questionBg: '#000',

  pushPriceBg: 'teal',

  greyText: '#818589',

  channelBg: '#000',

  button: '#fff',

  buttonColor: '#000',

  buttonBd: '1px solid #fff',

  createColor: '#fff',

  // Modals
  modalContentBackground: "#282a2e",
  modalBackdropBackground: `rgba(0,0,0,0.4)`,
  modalBorderColor: "#4A4F67",
  modalMessageColor: "#B6BCD6",
  modalIconColor: "#787E99",
  modalLoaderPrimary: "red",
  modalLoaderSecondary: "white",
  modalBackdropZIndex: 1000,

  // Toast Notifications
  toastTextColor: "#B6BCD6",
  toastBorderColor: "#4A4F67",
  toastShadowColor: "#00000010",
  toastSuccessBackground: "linear-gradient(90.15deg, #30CC8B -125.65%, #30CC8B -125.63%, #2F3137 42.81%)",
  toastErrorBackground: "linear-gradient(89.96deg, #FF2070 -101.85%, #2F3137 51.33%)",

  //Profile
  profileBG: "#2F3137",
  profileText: "#B6BCD6",

  //Snackbar
  snackbarBorderColor: "#4A4F67",
  snackbarBorderText: "#B6BCD6",
  snackbarBorderIcon: "brightness(0) saturate(100%) invert(89%) sepia(8%) saturate(1567%) hue-rotate(191deg) brightness(86%) contrast(93%)"
};

module.exports = {
  themeLight: themeLight,
  themeDark: themeDark
}
