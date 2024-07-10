import { BlocksColorData, BlocksColors, GlobalColors } from './Blocks.types';

// TODO This file needs to be removed after all the blcoks components uses the new design theme

const brandColors = {
  /* New brand colors */

  'GRAY-100': '#F5F6F8',
  'GRAY-200': '#EAEBF2',
  'GRAY-300': '#C4CBD5',
  'GRAY-400': '#B0B3B9',
  'GRAY-500': '#8C93A0',
  'GRAY-600': '#757D8D',
  'GRAY-700': '#484D58',
  'GRAY-800': '#313338',
  'GRAY-900': '#202124',
  'GRAY-1000': '#17181B',

  'PINK-100': '#FCEBFF',
  'PINK-200': '#FBE8FF',
  'PINK-300': '#F3AEFF',
  'PINK-400': '#CF59E2',
  'PINK-500': '#D548EC',
  'PINK-600': '#C742DD',
  'PINK-700': '#AA30BE',
  'PINK-800': '#7B0090',
  'PINK-900': '#570066',
  'PINK-1000': '#35003F',

  'RED-100': '#FFECEC',
  'RED-200': '#FFD9D9',
  'RED-300': '#FFB1B1',
  'RED-400': '#FF8585',
  'RED-500': '#FF4E4E',
  'RED-600': '#F11F1F',
  'RED-700': '#D43B3B',
  'RED-800': '#A40A0A',
  'RED-900': '#670000',
  'RED-1000': '#400000',

  'GREEN-100': '#D8F7F0',
  'GREEN-200': '#AFEFE1',
  'GREEN-300': '#51DCBD',
  'GREEN-400': '#00C296',
  'GREEN-500': '#00A47F',
  'GREEN-600': '#008769',
  'GREEN-700': '#006B53',
  'GREEN-800': '#A40A0A',
  'GREEN-900': '#00382B',
  'GREEN-1000': '#002019',
};

export const blocksColorsLegacy = {
  /* Legacy colors used through out the app */
  PRIMARY: 'rgba(27.0, 150.0, 227.0, 1.0)',
  PRIMARY_PINK: '#CF1C84',
  PLACEHOLDER_DARK_GRAY: '#D9D9D9',

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

  ...brandColors,
};

const createBlocksColors = () => {
  const globalColors: GlobalColors = blocksColorsLegacy;

  const appColors = Object.keys(globalColors).reduce((acc: Partial<BlocksColorData>, key) => {
    const newKey = key.toLowerCase().replace(/_([a-z])/g, (match, letter) => letter.toUpperCase()) as BlocksColors;
    acc[newKey as keyof BlocksColorData] = globalColors[key as keyof GlobalColors];
    return acc;
  }, {});

  return appColors as BlocksColorData;
};

export const blocksColors = createBlocksColors();
