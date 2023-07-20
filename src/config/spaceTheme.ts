/**
 * @file theme file: all the predefined themes are defined here
 */

export interface ISpacesTheme {
  titleBg?: string;
  titleTextColor?: string;
  bgColorPrimary?: string;
  bgColorSecondary?: string;
  textColorPrimary?: string;
  textColorSecondary?: string;
  textGradient?: string;
  btnColorPrimary?: string;
  btnOutline?: string;
  borderColor?: string;
  borderRadius?: string;
  containerBorderRadius?: string;
  statusColorError?: string;
  statusColorSuccess?: string;
  iconColorPrimary?: string;
  fontFamily?: string;
}

export const lightTheme = {
  titleBg: 'linear-gradient(45deg, #E165EC 0.01%, #A483ED 100%)',
  titleTextColor: '#FFFFFF',
  bgColorPrimary: '#fff',
  bgColorSecondary: '#F7F1FB',
  textColorPrimary: '#000',
  textColorSecondary: '#657795',
  textGradient: 'linear-gradient(45deg, #B6A0F5 0%, #F46EF6 57.29%, #FF95D5 100%)',
  btnColorPrimary: '#D53A94',
  btnOutline: '#D53A94',
  borderColor: '#FFFF',
  borderRadius: '17px',
  containerBorderRadius: '12px',
  statusColorError: '#E93636',
  statusColorSuccess: '#30CC8B',
  iconColorPrimary: '#657795', // need to check
};

export const darkTheme = {
  titleBg: 'linear-gradient(45deg, #E165EC 0.01%, #A483ED 100%)',
  titleTextColor: '#fff',
  bgColorPrimary: '#2F3137',
  bgColorSecondary: '#404550',
  textColorPrimary: '#fff',
  textColorSecondary: '#B6BCD6',
  textGradient: 'linear-gradient(45deg, #B6A0F5 0%, #F46EF6 57.29%, #FF95D5 100%)',
  btnColorPrimary: '#D53A94',
  btnOutline: '#D53A94',
  borderColor: '#2F3137',
  borderRadius: '17px',
  containerBorderRadius: '12px',
  statusColorError: '#E93636',
  statusColorSuccess: '#30CC8B',
  iconColorPrimary: '#787E99',
};
