import React, { FC } from 'react'
import { css } from 'styled-components';
import { Box, Button, Text } from 'blocks';

export type RewardActivitiesProps = {
  onGetStarted: () => void;
}

const RewardActivities: FC<RewardActivitiesProps> = ({ onGetStarted }) => {

  const rewardsArray = [
    {
      title: 'Follow @PushProtocol on X',
      points: 10000,
      buttonText: 'Follow'
    },
    {
      title: 'Join Push Discord',
      points: 10000,
      buttonText: 'Join Discord'
    },
    {
      title: 'Send 20 Messages using Push Chat',
      points: 1500,
      buttonText: 'Claim',
      disabled: true
    },
    {
      title: 'Subscribe to 3 Channels on PushX',
      subtitle: 'Visit app.push.org/channels and opt-in to any 3 channels.',
      points: 1500,
      buttonText: 'Follow'
    }
  ]
  
  return (
    <Box 
      display='flex'
      flexDirection='column'
      gap='s1'
    >
      <Text variant='h4-bold'>Activities</Text>

      {rewardsArray.map((item, i) => (
        <Box
        display='flex'
        width='-webkit-fill-available'
        flexDirection='row'
        padding='s6'
        backgroundColor='gray-100'
        borderRadius='var(--r4)'
        css={css`
          align-items: center;
        `}
      >
        <Box 
        display='flex'
        flexDirection='row'
        gap="s4"
        css={css`
          align-items: center;
        `}
        >
        <div style={{width:'48px', height: '48px', borderRadius: '100%', background: '#202124'}}></div>
        
        <Box>
          <Text variant='bl-semibold' color='gray-1000'>{item?.title}</Text>
          <Text variant='h5-regular' color='gray-500'>{item?.subtitle}</Text>
        </Box>

        </Box>

        <Box 
          display='flex'
          flexDirection='row'
          gap="s2"
          css={css`
            align-items: center;
            margin-left: auto;
          `}
        >
          <div style={{width:'32px', height: '32px', borderRadius: '100%', background: '#202124'}}></div>
          <Text variant='h4-semibold' color='gray-1000' css={css`
            margin-right: 24px;
          `}>
            {item?.points?.toLocaleString()} points
          </Text>
          <Button
            variant={item?.disabled ? "disabled" : "tertiary"}
            size="small"
            css={css`
              min-width: 100px;
            `}
          >
            {item?.buttonText}
          </Button>
        </Box>
      </Box>))}
    </Box>
  )
}

export { RewardActivities };