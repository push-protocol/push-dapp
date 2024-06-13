import { IllustrationProps } from 'blocks';
import Ethereum from 'blocks/illustrations/components/Ethereum';
import Polygon from 'blocks/illustrations/components/Polygon';
import { FC } from 'react';

export const LOGO_ALIAS_CHAIN: {
  [x: number]: FC<IllustrationProps>;
} = {
  1: Ethereum,
  137: Polygon,
  42161: Polygon
};
