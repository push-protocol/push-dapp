// Define what props.theme will look like
const themeLight = {
  scheme: 'light',

  // Default Theme
  default: {
    bg: '#FFF',
    secondaryBg: '#F4F5FA',
    border: '#E5E8F6',
    color: '#000',
    secondaryColor: '#657795',
    hover: '#F3F3FF',
    borderColor: '#dfdee9',
    primaryPushThemeTextColor: '#cf1c84',
  },

  // Login Theme
  login: {
    bg: '#DBEBFF',
    blur1: '#F6E4FF',
    blur2: '#CECDFF',
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
    sendMesageBg: 'white',
    sendMessageFontColor: 'black',
    gifContainerBg: '#F7F8FF',
  },

  btn: {
    disabledBg: '#E0E3E7',
    disabledColor: '#BEC8D8',
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
  backgroundBG: '#F4F5FA',
  backgroundBGLucid: '#00000099',
  mainBg: '#fff',
  fontColor: '#000',
  fontColorSecondary: '#00000099',
  scrollBg: '#eee',
  borderBg: '#f1f1f1',

  // View Channels Theme
  // -- View Channel Header Theme
  // -- -- Search Bar
  viewChannelSearchBg: '#F4F5FA',
  viewChannelSearchText: '#657795',
  viewChannelSearchIcon: '#657795',

  // -- -- Faucet Theme
  faucetBg: '#fff',
  faucetBorder: '#BAC4D6',
  faucetText: '#657795',
  faucetFilter:
    'brightness(0) saturate(100%) invert(46%) sepia(24%) saturate(480%) hue-rotate(179deg) brightness(95%) contrast(89%)',

  // -- View Channel Main Theme
  viewChannelOuterBorder: '#eee',
  viewChannelLink: '#e20880',
  viewChannelVerifiedBadge: '#ec008c',
  viewChannelIconBorder: '#E6E7EC',
  viewChannelSecondaryBG: '#FFDBF0',
  viewChannelSecondaryText: '#D53893',
  viewChannelSecondaryIcon: '#D53893',
  viewChannelPrimaryText: '#657795',
  viewChannelPrimaryTextColor: '#494D5F',

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

  dropdownTextColor: '#000',

  channelBg: '#fafafa',

  button: '#000',

  buttonColor: '#fff',

  createColor: '#808080',

  // Modals
  modalContentBackground: '#FFFFFF',
  modalBackdropBackground: `rgba(255,255,255,0.4)`,
  modalBorderColor: '#E5E8F6',
  modalMessageColor: 'black',
  modalIconColor: '#657795',
  modalLoaderPrimary: 'red',
  modalLoaderSecondary: 'white',
  modalBackdropZIndex: 1000,
  modalConfirmButtonBackground: '#F4DCEA',
  modalConfirmButtonBorder: '#F4DCEA',
  modalConfirmButtonTextColor: '#CF1C84',
  modalOptionHoverBackgroundColor: '#F4F5FA',
  modalInputBorderColor: '#C2CBDB',
  modalHeadingColor: '#333333',
  modalPrimaryTextColor: '#1E1E1E',
  modalSecondaryTextColor: '#657795',
  modalSearchBarBorderColor: '#BAC4D6',
  modalSearchBarBackground: '#FFF',
  blurModalContentBackground: '#FFF',
  modalInputBackgrundColor: '#FFF',
  modalDescriptionTextColor: '#575D73',
  modalProfileTextColor: '#1E1E1E',
  pendingCardBackground: 'rgba(173, 176, 190, 0.12)',

  // Group Profiles
  groupSearchProfilBackground: '#F4F5FA',
  groupButtonBackgroundColor: '#ADB0BE',
  groupButtonTextColor: '#FFF',

  modalTextColor: '#657795',
  modalbackgroundColor: '#F5F5FA',
  modalImageBgColor: 'rgba(0, 0, 0, 0.5)',

  modalTextColor: '#657795',
  modalbackgroundColor: '#F5F5FA',
  modalImageBgColor: 'rgba(0, 0, 0, 0.5)',

  // Toast Notifications
  toastTextColor: '#000',
  toastBorderColor: '#F4F3FF',
  toastShadowColor: '#ccc',

  toastSuccessBackground: 'linear-gradient(90.15deg, #30CC8B -125.65%, #30CC8B -125.63%, #F3FFF9 42.81%)',
  toastErrorBackground: 'linear-gradient(90.15deg, #FF2070 -125.65%, #FF2D79 -125.63%, #FFF9FB 42.81%)',
  toastWarningBackground: 'linear-gradient(90deg, #FFF2D1 0%, rgba(255, 255, 255, 0.00) 100%)',

  // Profile
  profileBG: 'linear-gradient(107deg, rgba(226,8,128,1) 30%, rgba(103,76,159,1) 70%, rgba(53,197,243,1) 100%)',
  profileText: '#fff',

  //Snackbar
  snackbarBorderColor: '#E5E8F7',
  snackbarBorderText: '#000',
  snackbarBorderIcon: 'none',

  // Chain indicator
  chainIndicatorBG: '#F4F5FA',
  chainIndicatorBorderColor: '#BAC4D6',
  chainIndicatorHoverBG: '#F4F5FA',
  chainIndicatorDropdownBG: '#fff',
  chainIndicatorHeading: '#333333',
  chainIndicatorHeadingMobile: '#000',
  chainIndicatorText: '#657795',

  LinkMobileAppBorder: '#bac9e5',
  textcolor: '#657795',
  chatQRbg: '#ffff',

  //Edit Channel
  logoBtnBg: '#F4DCEA',
  logoBtnColor: '#D53893',
  editFooterBg: '#F4F5FA',
  editChannelPrimaryText: '#1E1E1E', //it is black
  editChannelSecondaryText: '#657795',
  editChannelInputbg: '#fff',
  textAreaBorderColor: '1px solid #ADB0BE',
  textAreaFocusBorder: '1px solid #f90e96',
  verticalLineColor: '#ADB0BE',

  // toggle switch
  toggleContainerBG: '#F4F5FA',
  toggleActiveBG: '#CF1C84',
  toggleInactiveBG: '#A0A3B1',
  qrBg: '#fff',

  // tooltip
  tooltipTopHeading: '#333333',
  tooltipTopSubHeading: '#333333',
  tooltipContentHeading: '#CF1C84',
  tooltipContentDesc: '#494D5F',
  tooltipIconBorderClr: '#E6E7EC',

  // video call
  vcBGColor: 'linear-gradient(179.97deg, #EEF5FF 0.02%, #ECE9FA 123.25%)',
  vcBorderColor: '#FFFFFF',
  vcModalBGColor: 'linear-gradient(179.97deg, rgba(255, 255, 255, 0.6) 0.02%, rgba(236, 233, 250, 0.6) 123.25%)',
  vcUserInfoText: '#1e1e1e',
  vcCrossIconColor: '#657795',

  //staking
  stakingPrimaryText: '#333333',
  stakingSecondaryText: '#000000',
  stakingUserDetails: 'rgba(87, 93, 115, 0.8)',
  emptyButtonText: '#9D9FA6',
  disabledButtonText: '#9D9FA6',
  disableButtonBg: '#DEDFE1',
  activeButtonText: '#657795',
  stakingBorder: '#BAC4D6',
  stakingEmptyButtonBG: '#DEDFE1',

  // notif settings modal
  settingsModalBorderBottomColor: '#D4DCEA',
  sliderActiveColor: '#CF1C84',
  sliderTrackColor: '#BAC4D6',
  settingsModalPrimaryTextColor: '#1E1E1E',
  settingsModalBorderColor: '#D4DFF2',
  settingsModalBackground: '#FFF',

  //spaces
  spaceHostTextColor: '#1e1e1e',

  spaceTheme: {
    titleBg: 'linear-gradient(45deg, #E165EC 0.01%, #A483ED 100%)', //not changed
    titleTextColor: '#FFFFFF',
    bgColorPrimary: 'red',
    bgColorSecondary: '#F7F1FB',
    textColorPrimary: '#000',
    textColorSecondary: '#657795',
    textGradient: 'linear-gradient(45deg, #B6A0F5, #F46EF6, #FFDED3, #FFCFC5)', //not changed
    btnColorPrimary: '#D53A94',
    btnOutline: '#D53A94',
    borderColor: '#FFFF',
    borderRadius: '17px',
    containerBorderRadius: '12px',
    statusColorError: '#E93636',
    statusColorSuccess: '#30CC8B',
    iconColorPrimary: '#82828A',
  },

  snapUIBackground: '#F9F9F9',
  snapButtonBackground: '#1E1E1E',
  snapPrimaryText: '#000',
  snapSecondaryText: '#62626a',
  snapBackground: '#F2F2F2',
  snapBorderColor: '#BAC4D6',

  // Notification Settings
  nfsError: '#ED5858',
  nfsDisabled: '#DFDEE9',
  nfsDisabledText: '#AFB3BF',
  nfsTickerPreviewBg: 'rgba(182, 188, 214, 0.12)',

  // Send Notification
  snfBorder: '#BAC4D6',
  snfToggleBg: '#f4f5fa',

  //collapsable sidebar
  collapsaBg: '#575d737f',
  svgStrokeColor: '#FFF',
};

const themeDark = {
  scheme: 'dark',

  // Default Theme
  default: {
    bg: '#2F3137',
    secondaryBg: '#282A2E',
    border: '#4A4F67',
    color: '#FFF',
    secondaryColor: '#B6BCD6',
    hover: '#00000033',
    borderColor: '#4A4F67',
    primaryPushThemeTextColor: '#cf1c84',
  },

  // Login Theme
  login: {
    bg: '#000000',
    blur1: '#E845A322',
    blur2: '#E845A322',
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
    activeColor: '#404650',
  },

  // Chat Theme
  chat: {
    snapFocusBg: '#404650',
    chatboxBg: '#282A2E',
    sendMesageBg: '#404650',
    sendMessageFontColor: '#B6BCD6',
    gifContainerBg: '#282A2E',
  },

  btn: {
    disabledBg: '#383A40',
    disabledColor: '#545F74',
  },

  // Header Theme
  headerTagBg: '#fff',
  headerTagFg: '#fff',

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
  connectWalletBg: '#222',
  backgroundBG: '#222',
  backgroundBGLucid: '#000000cc',
  mainBg: '#000',
  fontColor: '#fff',
  fontColorSecondary: '#ffffff99',
  scrollBg: '#333',
  borderBg: '#333',

  // View Channels Theme
  // -- View Channel Header Theme
  // -- -- Search Bar
  viewChannelSearchBg: '#282A2E',
  viewChannelSearchBorder: '#333',
  viewChannelSearchText: '#fff',
  viewChannelSearchIcon: '#414141',

  // -- -- Faucet Theme
  faucetBg: '#222',
  faucetBorder: '#333',
  faucetText: '#657795',
  faucetFilter:
    'brightness(0) saturate(100%) invert(46%) sepia(24%) saturate(480%) hue-rotate(179deg) brightness(95%) contrast(89%)',

  // -- View Channel Main Theme
  viewChannelOuterBorder: '#222',
  viewChannelLink: '#35c5f3',
  viewChannelVerifiedBadge: '#ccc',
  viewChannelIconBorder: '#222',
  viewChannelSecondaryBG: '#222',
  viewChannelSecondaryText: '#D53893',
  viewChannelSecondaryIcon: '#D53893',
  viewChannelPrimaryText: '#fff',
  viewChannelPrimaryTextColor: '#fff',

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

  dropdownTextColor: '#B6BCD6',

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
  modalContentBackground: '#2F3137',
  modalBackdropBackground: `rgba(0,0,0,0.4)`,
  modalBorderColor: '#4A4F67',
  modalMessageColor: '#B6BCD6',
  modalIconColor: '#787E99',
  modalLoaderPrimary: 'red',
  modalLoaderSecondary: 'white',
  modalBackdropZIndex: 1000,
  modalConfirmButtonBackground: '#2F3137',
  modalConfirmButtonBorder: '#787E99',
  modalConfirmButtonTextColor: '#787E99',
  modalOptionHoverBackgroundColor: '#404650;',
  modalInputBorderColor: '#4A4F67',
  modalHeadingColor: '#B6BCD6',
  modalPrimaryTextColor: '#B6BCD6',
  modalSecondaryTextColor: '#B6BCD6',
  modalSearchBarBorderColor: '#4A4F67',
  modalSearchBarBackground: '#282A2E',
  blurModalContentBackground: '#2F3137',
  modalInputBackgrundColor: '#282A2E',
  modalDescriptionTextColor: '#787E99',
  modalProfileTextColor: '#B6BCD6',
  pendingCardBackground: 'rgba(173, 176, 190, 0.08)',

  // Group Profiles
  groupSearchProfilBackground: '#404650',
  groupButtonBackgroundColor: '#2F3137',
  groupButtonTextColor: '#787E99',

  modalTextColor: '#B6BCD6',
  modalbackgroundColor: '#282A2E',
  modalImageBgColor: 'rgba(255, 255, 255, 0.1);',

  modalTextColor: '#B6BCD6',
  modalbackgroundColor: '#282A2E',
  modalImageBgColor: 'rgba(255, 255, 255, 0.1);',

  // Toast Notifications
  toastTextColor: '#B6BCD6',
  toastBorderColor: '#4A4F67',
  toastShadowColor: '#00000010',
  toastSuccessBackground: 'linear-gradient(90.15deg, #30CC8B -125.65%, #30CC8B -125.63%, #2F3137 42.81%)',
  toastErrorBackground: 'linear-gradient(89.96deg, #FF2070 -101.85%, #2F3137 51.33%)',
  toastWarningBackground: 'linear-gradient(90deg, #66562D 0.03%, #2F3137 74.67%)',

  //Profile
  profileBG: '#2F3137',
  profileText: '#B6BCD6',

  //Snackbar
  snackbarBorderColor: '#4A4F67',
  snackbarBorderText: '#B6BCD6',
  snackbarBorderIcon:
    'brightness(0) saturate(100%) invert(89%) sepia(8%) saturate(1567%) hue-rotate(191deg) brightness(86%) contrast(93%)',

  // Chain indicator
  chainIndicatorBG: '#2F3137',
  chainIndicatorBorderColor: '#BAC4D6',
  chainIndicatorHoverBG: '#393E46',
  chainIndicatorDropdownBG: '#2F3137',
  chainIndicatorHeading: '#C5CAE9',
  chainIndicatorHeadingMobile: '#C5CAE9',
  chainIndicatorText: '#B6BCD6',

  //QR Code related
  LinkMobileAppBorder: '#717887',
  textcolor: '#B6BCD6',
  chatQRbg: '#292a2c',
  qrBg: '#000',

  //Edit Channel
  logoBtnBg: '#404650',
  logoBtnColor: '#B6BCD6',
  editFooterBg: '#404650',
  editChannelPrimaryText: '#B6BCD6',
  editChannelSecondaryText: '#787E99',
  editChannelInputbg: '#282A2E',
  textAreaBorderColor: '1px solid #4A4F67',
  textAreaFocusBorder: '1px solid #D53893',
  verticalLineColor: '#4A4F67',

  // toggle switch
  toggleContainerBG: '#282A2E',
  toggleActiveBG: '#CF1C84',
  toggleInactiveBG: '#A0A3B1',

  // tooltip
  tooltipTopHeading: '#D4DCEA',
  tooltipTopSubHeading: '#B6BCD6',
  tooltipContentHeading: '#CF1C84',
  tooltipContentDesc: '#B6BCD6',
  tooltipIconBorderClr: '#E6E7EC',

  // video call
  vcBGColor: '#282A2E',
  vcBorderColor: '#2F3137',
  vcModalBGColor: 'rgba(40, 42, 46, 0.6)',
  vcUserInfoText: '#B6BCD6',
  vcCrossIconColor: '#787E99',

  //staking
  stakingPrimaryText: '#B6BCD6',
  stakingSecondaryText: '#F4F5FA',
  stakingUserDetails: '#787E99',
  stakingBorder: '#4A4F67',
  stakingEmptyButtonBG: '#404550',
  disabledButtonText: '#2D313C',
  disableButtonBg: '#404550',
  activeButtonText: '#B6BCD6',
  emptyButtonText: '#2D313C',
  emptyButtonBg: '',

  // notif settings modal
  settingsModalBorderBottomColor: '#4A4F67',
  sliderActiveColor: '#CF1C84',
  sliderTrackColor: '#4A4F67',
  settingsModalPrimaryTextColor: '#fff',
  settingsModalBorderColor: '#4A4F67',
  settingsModalBackground: '#2F3137',

  //spaces
  spaceHostTextColor: '#ffff',

  spaceTheme: {
    titleBg: 'linear-gradient(87.17deg, #EA4EE4 0%, #D23CDF 0.01%, #8B5CF6 100%)',
    titleTextColor: '#fff',
    bgColorPrimary: '#000',
    bgColorSecondary: '#292344',
    textColorPrimary: '#fff',
    textColorSecondary: '#71717A',
    textGradient: 'linear-gradient(45deg, #B6A0F5, #F46EF6, #FFDED3, #FFCFC5)',
    btnColorPrimary: '#8B5CF6',
    btnOutline: '#8B5CF6',
    borderColor: '#3F3F46',
    borderRadius: '17px',
    containerBorderRadius: '12px',
    statusColorError: '#E93636',
    statusColorSuccess: '#30CC8B',
    iconColorPrimary: '#71717A',
  },

  snapUIBackground: 'transparent',
  snapButtonBackground: '#404650',
  snapPrimaryText: '#fff',
  snapSecondaryText: '#B6BCD6',
  snapBackground: '#404650',
  snapBorderColor: '#787E99',

  // Notification Settings
  nfsError: '#ED5858',
  nfsDisabled: '#AFB3BF',
  nfsDisabledText: '#787E99',
  nfsTickerPreviewBg: 'rgba(182, 188, 214, 0.12)',

  // Send Notification
  snfBorder: '#4A4F67',
  snfToggleBg: '#404650',

  //collapsable sidebar
  collapsaBg: '#0000004c',
  svgStrokeColor: '#575D73',
};

module.exports = {
  themeLight: themeLight,
  themeDark: themeDark,
};
