// React + Web3 Essentials
import React from 'react';

// External Packages
import styled from 'styled-components';

// Internal Compoonents
import { ItemHV2, ItemVV2, Skeleton, SkeletonLine, SpanV2 } from 'components/reusables/SharedStylingV2';

// Internal Configs
import GLOBALS from 'config/Globals';
import { formatTokens, numberWithCommas } from 'helpers/StakingHelper';
import { useDeviceWidthCheck } from 'hooks';

const YieldStatsSection = ({
  getLpPoolStats,
  poolStats,
  setPoolStats
}
) => {

  const [formattedDuration, setFormattedDuration] = React.useState('');

  const [epochEndTime,setEpochEndTime] = React.useState<number>();

  const calculateEpochEndDuration = () =>{
    const epochEndSeconds = poolStats.epochEndTime;
    const epochEndTimeStamp = new Date().getTime() + epochEndSeconds * 1000;
    setEpochEndTime(epochEndTimeStamp);

  }

  React.useEffect(()=>{
    if(poolStats){
      calculateEpochEndDuration()
    }
    
  },[poolStats])

  const getFormattedDuration = () => {
    if (poolStats?.epochEndTimestamp) {
      const epochEndTimestamp = poolStats.epochEndTimestamp.toNumber();

      const now = new Date().getTime();
      const timeRemaining = epochEndTime - now;

      if (timeRemaining < 0) {
        setPoolStats(null);
        getLpPoolStats();
      }

      const day = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hour = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setFormattedDuration(`${day}D ${hour}H ${minutes}M ${seconds}S`);
    }
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      getFormattedDuration();
    }, 1000);

    return () => clearTimeout(timeout);
  });



  // RENDER
  return (
    <ItemHV2Modified>
      {/* Total Value Locked */}
      <StatsContainer alignItems='baseline' justifyContent="center" background="linear-gradient(0deg, #7ADDB3, #7ADDB3), #FFFFFF">
        <BgCircleEffect background="radial-gradient(70% 90% at 40% 16.25%, #7CDCB4 2.6%, #7ADDB3 53.65%, #E888F8 85.42%, #F99DEA 100%)" />
        {poolStats ? (
          <>
            <StatsText>
              <PrimaryText>Total Value Locked</PrimaryText>

              <SecondaryText>
                {`$ ${numberWithCommas(poolStats?.totalValueLocked.toFixed(2))}`}

              </SecondaryText>
            </StatsText>

          </>
        ) : (
          <SkeletonLoader />
        )}

      </StatsContainer>

      {/* Push Rewards Given */}
      <StatsContainer alignItems='baseline' justifyContent="center" background="#F58DF8">
        <BgCircleEffect background="radial-gradient(70% 90% at 40% 16.25%, #F58DF8 2.6%, #F47EF8 53.65%, #A17DEF 85.42%, #AE68F4 100%)" />
        {poolStats ? (
          <>
            <StatsText>
              <PrimaryText>Push Rewards Given</PrimaryText>
              <TextBox justifyContent="end">
                <SecondaryText>
                  {
                    // TODO fix the calculation
                    numberWithCommas(
                      Math.min(
                        formatTokens(poolStats?.pushRewardsDistributed),
                        formatTokens(poolStats?.totalDistributedAmount)
                      ))}
                </SecondaryText>
                <SpanV2 color="#fff" fontSize="16px" fontWeight="600" lineHeight="141%">
                  out of {numberWithCommas(formatTokens(poolStats?.totalDistributedAmount))}
                </SpanV2>
              </TextBox>
            </StatsText>
          </>
        ) : (
          <SkeletonLoader />
        )}

      </StatsContainer>

      {/* Time Left */}
      <StatsContainer alignItems='baseline' justifyContent="center" background="#A17DEF">
        <BgCircleEffect background="radial-gradient(70% 90% at 40% 16.25%, #A17DEF 2.6%, #9770ED 53.65%, #DF7EEF 85.42%, #F488E3 100%)" />
        {formattedDuration ? (
          <>
            <StatsText>
              <PrimaryText>Time Left</PrimaryText>
              <TextBox justifyContent="end">
                <SecondaryText>
                  {formattedDuration}
                </SecondaryText>
                <SpanV2 color="#fff" fontSize="16px" fontWeight="600" lineHeight="141%">until next epoch</SpanV2>
              </TextBox>
            </StatsText>
          </>
        ) : (
          <SkeletonLoader />
        )}
      </StatsContainer>
    </ItemHV2Modified >
  );
}
export default YieldStatsSection;

const SkeletonLoader = () => {
  
  const isMobile = useDeviceWidthCheck(1300);
  return (
    <SkeletonContainer
      padding='21px 15px'
    >
      <SkeletonLine height='12px' width='135px' margin='0 0 10px 0' background='linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)'></SkeletonLine>
      <SkeletonLine height='26px;' width={isMobile ? '175px' : '189px'} margin='0 0 10px 0' background='linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)'></SkeletonLine>
      <SkeletonLine height='12px' width='135px' margin='0 0 10px 0' background='linear-gradient(to right,rgb(255 255 255 / 21%) 8%,rgb(221 221 221 / 15%) 18%,rgb(255 255 255 / 29%) 33%)'></SkeletonLine>
    </SkeletonContainer>
  )
}

// css styles
const ItemHV2Modified = styled(ItemHV2)`
  column-gap: 12px;

  @media (max-width: 992px) {
    flex-direction: column;
    row-gap: 12px;
  }
`;

const StatsContainer = styled(ItemVV2)`
  position: relative;
  border-radius: 16px;
  overflow:hidden;
`;

const BgCircleEffect = styled(ItemVV2)`
  position: absolute;
  width: 170px;
  height: 170px;
  right: 5px;
  top: -35px;
  border-radius: 50%;

  box-shadow: 0px 30px 50px rgba(240, 86, 254, 0.5);
  filter: blur(2.5px);
`;

const PrimaryText = styled(SpanV2)`
  color:#FFF;
  font-size:18px;
  font-weight:600;
  line-height:141%;

  @media (max-width:600px){
    font-size:16px;
  }

  @media (min-width:992px) and (max-width:1150px){
    font-size:14px;
  }

  @media(min-width:1150px) and (max-width:1300px){
    font-size:16px;
  }

`  
const SecondaryText = styled(SpanV2)`
  color:#FFF;
  font-size:32px;
  font-weight:600;
  line-height:141%;

  @media (max-width:992px){
    font-size:24px;
  }

  @media (min-width:992px) and (max-width:1150px){
    font-size:18px;
  }

  @media(min-width:1150px) and (max-width:1300px){
    font-size:24px;
  }





`  

const TextBox = styled(ItemVV2)`
  align-items: flex-start;
`

const StatsText = styled(TextBox)`
  padding: 20px 10px 20px 15px;
  // gap: 8px;
  justify-content:center;
`;

const SkeletonContainer = styled(Skeleton)`
    // width:150px;
    z-index:1;
    align-items:baseline;
    justify-content: center;
    max-width:-webkit-fill-available;
    border-radius: 5px;
    gap:5px;
`