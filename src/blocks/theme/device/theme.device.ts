import { DeviceSizeName, DeviceSize, Breakpoint } from '../../Blocks.types';

export const deviceSizes: Record<DeviceSizeName, DeviceSize> = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
  ultrawide: '3440px',
};

export const deviceMediaQ: Record<DeviceSizeName, `(max-width: ${DeviceSize})`> = {
  mobileS: `(max-width: ${deviceSizes.mobileS})`,
  mobileM: `(max-width: ${deviceSizes.mobileM})`,
  mobileL: `(max-width: ${deviceSizes.mobileL})`,
  tablet: `(max-width: ${deviceSizes.tablet})`,
  laptop: `(max-width: ${deviceSizes.laptop})`,
  laptopL: `(max-width: ${deviceSizes.laptopL})`,
  desktop: `(max-width: ${deviceSizes.desktop})`,
  ultrawide: `(max-width: ${deviceSizes.ultrawide})`,
};

export const breakpointMap: Record<Breakpoint | 'initial', DeviceSizeName | ''> = {
  initial: '',
  ms: 'mobileS',
  mm: 'mobileM',
  ml: 'mobileL',
  tb: 'tablet',
  lp: 'laptop',
  ll: 'laptopL',
  dp: 'desktop',
  uw: 'ultrawide',
};
