export const GuestModeWalletAddress = 'eip155:0x0000000000000000000000000000000000000001';
export const GuestWalletAddress = '0x0000000000000000000000000000000000000001';

import { IllustrationProps } from 'blocks';
import Arbitrum from 'blocks/illustrations/components/Arbitrum';
import BNB from 'blocks/illustrations/components/BNB';
import Base from 'blocks/illustrations/components/Base';
import Cyber from 'blocks/illustrations/components/Cyber';
import Ethereum from 'blocks/illustrations/components/Ethereum';
import Fuse from 'blocks/illustrations/components/Fuse';
import Linea from 'blocks/illustrations/components/Linea';
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
  84532: BNB,
  42161: Arbitrum,
  421614: Arbitrum,
  11155420: Optimisim,
  10: Optimisim,
  2442: PolygonZK,
  1101: PolygonZK,
  111557560: Cyber,
  7560: Cyber,
  122: Fuse,
  123: Fuse,
  8453: Base,
  84532: Base,
  59141: Linea,
  59144: Linea,
};

export const SepoliaFaucetLink =
  'https://chaindrop.org/?chainid=11155111&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
