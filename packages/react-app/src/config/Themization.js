// Define what props.theme will look like
const themeLight = {
  scheme : "light",
  // Section Theme
  sectionBorderBg: 'transparent',

  // Header Theme
  headerBg: '#fff',
  headerTagBg: '#000',
  headerTagFg: '#fff',

  headerIconsBg: '#000',

  // Nav Menu 
  navMenuBg: '#00000066',

  // Left Bar Theme
  leftBarLoaderBg: '#ddd',

  leftBarBg: '#fff',
  leftBarButtonBg: '#fff',
  leftBarHoverColor: '#5c5c5c',
  leftBarFontColor: '#000',

  leftBarSocialBg: '#eee',
  leftBarSocialIconBg: '#ddd',

  // Interface Theme
  interfaceTopPadding: '0px',
  interfaceBorder: '#f1f1f1',

  interfaceSkeleton: '#eee',

  // Main Theme
  backgroundBG: '#fff',
  mainBg: '#fff',
  fontColor: '#000',
  scrollBg: '#eee',

  // View Channels Theme

  // -- View Channel Header Theme
  // -- -- Search Bar
  viewChannelSearchBg: '#fff',
  viewChannelSearchBorder: '#f1f1f1',
  viewChannelSearchText: '#000',
  viewChannelSearchIcon: '#333',

  // -- -- Faucet Theme
  faucetBg: '#fff',
  faucetBorder: '#ededed',
  faucetIcon: '#674c9f',
  faucetHeader: '#e20880',

  // -- View Channel Main Theme
  viewChannelOuterBorder: '#eee',
  viewChannelLink: '#e20880',
  viewChannelVerifiedBadge: '#ec008c',
  viewChannelIconBorder: '#fafafa',
  viewChannelSecondaryBG: '#35c5f3',
  viewChannelSecondaryIcon: '#ccc',


  yieldBg: "#f3f3f3",

  pushPriceBg: "#000",

  greyText: "#818589",

  color: "#000",

  channelBg: "#fafafa",

  button: "#000",
  
  buttonColor: "#fff",

  createColor: "#808080",

};

const themeDark = {
  scheme : "dark",
  // Section Theme
  sectionBorderBg: '#333',

  // Header Theme
  headerBg: '#000',
  headerTagBg: '#fff',
  headerTagFg: '#000',

  headerIconsBg: '#fff',

  // Nav Menu 
  navMenuBg: '#00000066',

  // Left Bar Theme
  leftBarLoaderBg: '#ddd',

  leftBarBg: '#000',
  leftBarButtonBg: '#000',
  leftBarHoverColor: '#fff',
  leftBarFontColor: '#fff',

  leftBarSocialBg: '#222',
  leftBarSocialIconBg: '#000',

  // Interface Theme
  interfaceTopPadding: '20px',
  interfaceBorder: '#333',
  interfaceSkeleton: '#414141',

  // Main Theme
  backgroundBG: '#222',
  mainBg: '#000',
  fontColor: '#fff',
  scrollBg: '#333',

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
  faucetIcon: '#414141',
  faucetHeader: '#414141',

  // -- View Channel Main Theme
  viewChannelOuterBorder: '#222',
  viewChannelLink: '#35c5f3',
  viewChannelVerifiedBadge: '#ccc',
  viewChannelIconBorder: '#222',
  viewChannelSecondaryBG: '#222',
  viewChannelSecondaryIcon: '#414141',

  color: "#fff",

  yieldBg: "#ddd",

  questionBg: "#000",

  pushPriceBg: "teal",

  greyText: "#818589",

  channelBg: "#000",

  button: "#fff",
  
  buttonColor: "#000",

  buttonBd: "1px solid #fff",

  createColor: "#fff",



}

module.exports = {
    themeLight: themeLight,
    themeDark: themeDark
}
