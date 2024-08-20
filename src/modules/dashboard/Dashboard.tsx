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

const dataSource = [
  {
    id: '1',
    name: 'Task 1',
    deadline: new Date(),
    type: 'Type A',
    isComplete: false,
    nodes: [],
  },
  {
    id: '2',
    name: 'Task 2',
    deadline: new Date(),
    type: 'Type B',
    isComplete: true,
    nodes: [],
  },
];

const columns = [
  { title: 'Task', dataIndex: 'name' },
  // { title: 'Task2', dataIndex: 'name' },
  // { title: 'Task3', dataIndex: 'name' },
  // { title: 'Task4', dataIndex: 'name' },
  // { title: 'Task5', dataIndex: 'name' },
  // { title: 'Task6', dataIndex: 'name' },
  // { title: 'Task7', dataIndex: 'name' },
  // { title: 'Task8', dataIndex: 'name' },
  // { title: 'Task9', dataIndex: 'name' },
  // { title: 'Task10', dataIndex: 'name' },
  // { title: 'Task11', dataIndex: 'name' },
  {
    title: 'Deadline',
    dataIndex: 'deadline',
    render: (text: any) =>
      text.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
  },
  { title: 'Type', dataIndex: 'type' },
  // { title: 'Complete', dataIndex: 'isComplete' },
  { title: 'Tasks', dataIndex: 'nodes', render: (nodes: any[]) => nodes.length },
];

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
      <Table
        columns={columns}
        dataSource={dataSource}
      />
      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-md"
      ></Box>
    </Box>
  );
};

export { Dashboard };
