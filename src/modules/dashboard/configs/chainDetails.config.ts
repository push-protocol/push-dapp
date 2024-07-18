import { Arbitrum, BNB, Cyber, Ethereum, Fuse, IllustrationProps, Optimism, Polygon, PolygonZk } from 'blocks';
import { FC } from 'react';

export const LOGO_ALIAS_CHAIN: {
  [x: number]: FC<IllustrationProps>;
} = {
  1: Ethereum,
  11155111: Ethereum,
  137: Polygon,
  80002: Polygon,
  97: BNB,
  56: BNB,
  42161: Arbitrum,
  421614: Arbitrum,
  11155420: Optimism,
  10: Optimism,
  2442: PolygonZk,
  1101: PolygonZk,
  111557560: Cyber,
  7560: Cyber,
  122: Fuse,
  123: Fuse
};
