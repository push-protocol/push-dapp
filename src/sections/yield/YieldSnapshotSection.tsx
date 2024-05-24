// External Packages
import styled from 'styled-components';

// Internal Compoonents
import { ItemHV2 } from 'components/reusables/SharedStylingV2';
import YieldUniswapV3 from 'components/yield/YieldUniswapV3';
import YieldPushFeeV3 from 'components/yield/YieldPushFeeV3';

// Chat Sections
// Divided into two, left and right
const YieldSnapshotSection = ({
  userDataPush,
  getUserDataPush,
  PUSHPoolstats,
  loadingComponent,
  lpPoolStats,
  userDataLP,
  getLpPoolStats,
  getUserDataLP,
  getPUSHPoolStats,
  loadingPushComponent,
}) => {
  // RENDER
  return (
    <>
      <V3Container>
        {/* <YieldUniswapV3/> */}
        <YieldUniswapV3
          loadingComponent={loadingComponent}
          lpPoolStats={lpPoolStats}
          userDataLP={userDataLP}
          getLpPoolStats={getLpPoolStats}
          getUserDataLP={getUserDataLP}
        />
        <YieldPushFeeV3
          userDataPush={userDataPush}
          getUserDataPush={getUserDataPush}
          PUSHPoolstats={PUSHPoolstats}
          // loadingComponent={loadingComponent}
          getPUSHPoolStats={getPUSHPoolStats}
          loadingPushComponent={loadingPushComponent}
        />
      </V3Container>
    </>
  );
};
export default YieldSnapshotSection;

const V3Container = styled(ItemHV2)`
  // width: 50%;
  // margin: auto;

  // @media (max-width:1300px){
  //   width: 75%;
  // }

  // @media (max-width:768px){
  //   width: 100%;
  // }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
