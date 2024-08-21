// React and other libraries
import { FC, useState } from 'react';

// Components
import { Box, Table } from 'blocks';
import { AnalyticsOverview } from './components/AnalyticsOverview';
import { ChannelVariantsSection } from './components/ChannelVariantsSection';
import { DashboardHeader } from './components/DashboardHeader';
import { DashboardSubHeader } from './components/DashboardSubHeader';
import { FeaturedChannels } from './components/FeaturedChannels';
import { StakingPools } from './components/StakingPools';

export type DashboardProps = {};

const Dashboard: FC<DashboardProps> = () => {
  const [showSubHeader, setSubHeaderVisibility] = useState(true);

  return (
    <Box
      flexDirection="column"
      display="flex"
      margin={{ initial: 'spacing-sm spacing-xl spacing-sm spacing-xl', ml: 'spacing-sm', lp: 'spacing-sm' }}
      gap={{ ml: 'spacing-md' }}
      height="100%"
      width="auto"
    >
      <DashboardHeader
        showSubHeader={showSubHeader}
        setSubHeaderVisibility={setSubHeaderVisibility}
      />

      {showSubHeader && <DashboardSubHeader />}
      <Box
        height="300px"
        // overflow="scroll"
      >
        <Table
          fixedHeader
          columns={[
            { title: 'Task', dataIndex: 'name', width: '30%' },
            {
              title: 'Deadline',
              dataIndex: 'deadline',
              width: '30%',
            },
            { title: 'Type', dataIndex: 'type', width: '30%' },
            { title: 'Complete', dataIndex: 'isComplete', width: '30%' },
            { title: 'Tasks', dataIndex: 'nodes' },
          ]}
          dataSource={[
            {
              id: '0',
              name: 'Shopping List',
              deadline: new Date(2020, 1, 15),
              type: 'TASK',
              isComplete: true,
              nodes: 3,
            },
            {
              id: '1',
              name: 'Shopping List',
              deadline: new Date(2020, 1, 15),
              type: 'TASK',
              isComplete: true,
              nodes: 2,
            },
            {
              id: '2',
              name: 'Shopping List',
              deadline: new Date(2020, 1, 15),
              type: 'TASK',
              isComplete: true,
              nodes: 2,
            },
            {
              id: '3',
              name: 'Shopping List',
              deadline: new Date(2020, 1, 15),
              type: 'TASK',
              isComplete: true,
              nodes: 2,
            },
            {
              id: '4',
              name: 'Shopping List',
              deadline: new Date(2020, 1, 15),
              type: 'TASK',
              isComplete: true,
              nodes: 2,
            },
            {
              id: '5',
              name: 'Shopping List',
              deadline: new Date(2020, 1, 15),
              type: 'TASK',
              isComplete: true,
              nodes: 2,
            },
            {
              id: '6',
              name: 'Shopping List',
              deadline: new Date(2020, 1, 15),
              type: 'TASK',
              isComplete: true,
              nodes: 2,
            },

            {
              id: '7',
              name: 'Shopping List',
              deadline: new Date(2020, 1, 15),
              type: 'TASK',
              isComplete: true,
              nodes: 2,
            },
            {
              id: '8',
              name: 'Shopping List',
              deadline: new Date(2020, 1, 15),
              type: 'TASK',
              isComplete: true,
              nodes: 2,
            },
            {
              id: '9',
              name: 'Shopping List',
              deadline: new Date(2020, 1, 15),
              type: 'TASK',
              isComplete: true,
              nodes: 2,
            },
            {
              id: '10',
              name: 'Shopping List',
              deadline: new Date(2020, 1, 15),
              type: 'TASK',
              isComplete: true,
              nodes: 2,
            },
          ]}
        />{' '}
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-md"
      ></Box>
    </Box>
  );
};

export { Dashboard };
