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
  mainBg: '#fff',

  yieldBg: "#f3f3f3",

  pushPriceBg: "#000",

  greyText: "#818589",

  color: "#000",

  channelBg: "#fafafa"

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
  navMenuBg: '#000',

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
  mainBg: '#000',

  color: "#fff",

  yieldBg: "#ddd",

  questionBg: "#000",

  pushPriceBg: "teal",

  greyText: "#818589",

  channelBg: "#000"


}

module.exports = {
    themeLight: themeLight,
    themeDark: themeDark
}
