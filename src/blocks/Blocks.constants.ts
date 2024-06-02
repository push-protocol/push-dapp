import { DeviceSizeName, DeviceSize, Breakpoint } from './Blocks.types';

export const DeviceSizes: Record<DeviceSizeName, DeviceSize> = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const DeviceMediaQ: Record<DeviceSizeName, `(max-width: ${DeviceSize})`> = {
  mobileS: `(max-width: ${DeviceSizes.mobileS})`,
  mobileM: `(max-width: ${DeviceSizes.mobileM})`,
  mobileL: `(max-width: ${DeviceSizes.mobileL})`,
  tablet: `(max-width: ${DeviceSizes.tablet})`,
  laptop: `(max-width: ${DeviceSizes.laptop})`,
  laptopL: `(max-width: ${DeviceSizes.laptopL})`,
  desktop: `(max-width: ${DeviceSizes.desktop})`,
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
};
