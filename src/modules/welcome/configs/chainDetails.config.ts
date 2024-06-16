import { IllustrationProps } from 'blocks';
import Arbitrum from 'blocks/illustrations/components/Arbitrum';
import BNB from 'blocks/illustrations/components/BNB';
import Cyber from 'blocks/illustrations/components/Cyber';
import Ethereum from 'blocks/illustrations/components/Ethereum';
import Fuse from 'blocks/illustrations/components/Fuse';
import Optimisim from 'blocks/illustrations/components/Optimisim';
import Polygon from 'blocks/illustrations/components/Polygon';
import PolygonZK from 'blocks/illustrations/components/PolygonZK';
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
  11155420: Optimisim,
  10: Optimisim,
  2442: PolygonZK,
  1101: PolygonZK,
  111557560: Cyber,
  7560: Cyber,
  122: Fuse,
  123: Fuse
};
