// Define what props.theme will look like
const themeLight = {
  // Section Theme
  sectionBorderBg: '#ddd',

  // Header Theme
  headerBg: '#fff',
  headerTagBg: '#000',
  headerTagFg: '#fff',

  // Left Bar Theme
  leftBarBg: '#fff',
  leftBarButtonBg: '#fff',
  leftBarHoverColor: '#5c5c5c',
  leftBarFontColor: '#000',

  leftBarSocialBg: '#eee',
  leftBarSocialIconBg: '#ddd',

  // Main Container Theme
  mainBg: '#fff'
};

const themeDark = {
  // Section Theme
  sectionBorderBg: '#fff',

  // Header Theme
  headerBg: '#000',
  headerTagBg: '#fff',
  headerTagFg: '#000',

  // Left Bar Theme
  leftBarBg: '#000',
  leftBarButtonBg: '#000',
  leftBarHoverColor: '#fff',
  leftBarFontColor: '#fff',

  leftBarSocialBg: '#222',
  leftBarSocialIconBg: '#000',

  // Main Container Theme
  mainBg: '#000'
}

module.exports = {
    themeLight: themeLight,
    themeDark: themeDark
}
