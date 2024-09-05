// React and other libraries
import { FC, useEffect, useState } from 'react';

// Components
import { Box, Button, Ethereum, Link, Table, Tag } from 'blocks';
import { AnalyticsOverview } from './components/AnalyticsOverview';
import { ChannelVariantsSection } from './components/ChannelVariantsSection';
import { DashboardHeader } from './components/DashboardHeader';
import { DashboardSubHeader } from './components/DashboardSubHeader';
import { FeaturedChannels } from './components/FeaturedChannels';
import { StakingPools } from './components/StakingPools';
import { TagVariant } from 'blocks/tag';

export type DashboardProps = {};

const Dashboard: FC<DashboardProps> = () => {
  const [showSubHeader, setSubHeaderVisibility] = useState(true);

  const [loading, setLoading] = useState(true);

  const [error] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
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
        height="500px"
        width="400px"
      >
        <Table
          loading={loading}
          fixedHeader
          onRow={{
            onClick: (record, index) => {
              console.log(record, index);
            },
          }}
          columns={[
            {
              title: 'STATUS',
              dataIndex: 'status',
              width: '100px',
              fixed: 'left',
              render: (text) => (
                <Tag
                  label="Success"
                  variant={text as TagVariant}
                />
              ),
            },
            {
              title: 'TX HASH',
              dataIndex: 'txHash',
              width: '150px',
            },
            {
              title: 'BLOCK HASH',
              dataIndex: 'blockHash',
              width: '150px',
            },
            {
              title: 'FROM',
              dataIndex: 'from',
              width: '150px',
              render: (text) => (
                <Box
                  display="flex"
                  gap="spacing-xxs"
                  alignItems="center"
                >
                  <Ethereum
                    width={16}
                    height={16}
                  />
                  <Link to="#">{text}</Link>
                </Box>
              ),
            },
            {
              title: 'TO',
              dataIndex: 'to',
              width: '150px',
              render: (text) => (
                <Box
                  display="flex"
                  gap="spacing-xxs"
                  alignItems="center"
                >
                  <Ethereum
                    width={16}
                    height={16}
                  />
                  <Link to="#">{text}</Link>
                </Box>
              ),
            },
            { title: 'CATEGORY', dataIndex: 'category', width: '120px' },
            { title: 'AGE', dataIndex: 'age', width: '80px' },
            {
              title: 'ACTIONS',
              dataIndex: 'actions',
              width: '250px',
              fixed: 'right',
              render: (text, record) => (
                <Box
                  display="flex"
                  gap="spacing-xxs"
                >
                  <Button
                    size="extraSmall"
                    variant="outline"
                    onClick={() => {
                      console.log('Button click a', record);
                    }}
                  >
                    Accept
                  </Button>
                  <Button
                    size="extraSmall"
                    variant="dangerSecondary"
                    onClick={() => {
                      console.log('Button click b', record);
                    }}
                  >
                    Reject
                  </Button>
                </Box>
              ),
            },
          ]}
          error={error}
          onRetry={() => {}}
          dataSource={
            loading || error
              ? []
              : [
                  {
                    id: '0',
                    status: 'success',
                    txHash: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    blockHash: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    from: '323kmi2j2312321321e1w000320ni23ni3r9d93nd',
                    to: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    category: 'Notification',
                    age: '2s ago',
                  },
                  {
                    id: '1',
                    status: 'success',
                    txHash: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    blockHash: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    from: '323kmi2j2312321321e1w000320ni23ni3r9d93nd',
                    to: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    category: 'Notification',
                    age: '2s ago',
                  },
                  {
                    id: '2',
                    status: 'success',
                    txHash: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    blockHash: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    from: '323kmi2j2312321321e1w000320ni23ni3r9d93nd',
                    to: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    category: 'Notification',
                    age: '2s ago',
                  },
                  {
                    id: '3',
                    status: 'success',
                    txHash: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    blockHash: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    from: '323kmi2j2312321321e1w000320ni23ni3r9d93nd',
                    to: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    category: 'Notification',
                    age: '2s ago',
                  },
                  {
                    id: '4',
                    status: 'success',
                    txHash: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    blockHash: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    from: '323kmi2j2312321321e1w000320ni23ni3r9d93nd',
                    to: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    category: 'Notification',
                    age: '2s ago',
                  },
                  {
                    id: '5',
                    status: 'success',
                    txHash: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    blockHash: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    from: '323kmi2j2312321321e1w000320ni23ni3r9d93nd',
                    to: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    category: 'Notification',
                    age: '2s ago',
                  },
                  {
                    id: '6',
                    status: 'success',
                    txHash: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    blockHash: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    from: '323kmi2j2312321321e1w000320ni23ni3r9d93nd',
                    to: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    category: 'Notification',
                    age: '2s ago',
                  },
                  {
                    id: '7',
                    status: 'success',
                    txHash: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    blockHash: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    from: '323kmi2j2312321321e1w000320ni23ni3r9d93nd',
                    to: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    category: 'Notification',
                    age: '2s ago',
                  },
                  {
                    id: '8',
                    status: 'success',
                    txHash: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    blockHash: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    from: '323kmi2j2312321321e1w000320ni23ni3r9d93nd',
                    to: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    category: 'Notification',
                    age: '2s ago',
                  },
                  {
                    id: '9',
                    status: 'success',
                    txHash: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    blockHash: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    from: '323kmi2j2312321321e1w000320ni23ni3r9d93nd',
                    to: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    category: 'Notification',
                    age: '2s ago',
                  },
                  {
                    id: '10',
                    status: 'success',
                    txHash: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    blockHash: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    from: '323kmi2j2312321321e1w000320ni23ni3r9d93nd',
                    to: 'd2eonci2j2312321321e1w000320ni23ni3r9d93nd',
                    category: 'Notification',
                    age: '2s ago',
                  },
                ]
          }
        />
      </Box>
    </Box>
  );
};

export { Dashboard };
