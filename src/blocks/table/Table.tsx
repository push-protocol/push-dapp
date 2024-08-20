import { FC } from 'react';
import {
  Table as ReactTable,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from '@table-library/react-table-library/table';
import { useTheme } from '@table-library/react-table-library/theme';
import { textVariants } from '../text';
import { Column, DataSource } from './Table.types';

export type TableProps = {
  columns: Column[];
  dataSource: DataSource[];
};

const Table: FC<TableProps> = ({ columns, dataSource }) => {
  const theme = useTheme([
    {
      Table: `
        --data-table-library_grid-template-columns:  25% 25% 25% 25% minmax(150px, 1fr);
      `,
      Cell: `
      align-items: center;
      align-self: stretch;
      border-bottom: var(--border-sm, 1px) solid var(--components-table-stroke-default);
      display: flex;
      flex: 1 0 0;
      font-family: var(--font-family);
      font-size: ${textVariants['bs-bold'].fontSize};
      font-style: ${textVariants['bs-bold'].fontStyle};
      font-weight: ${textVariants['bs-bold'].fontWeight};
      line-height: ${textVariants['bs-bold'].lineHeight};
      gap: var(--spacing-xxs);
      height: 56px;
      padding: var(--spacing-xxxs);
      `,
      Row: `
      background: var(--surface-transparent);
      `,
      HeaderRow: `
      background: var(--surface-transparent);
      `,
      HeaderCell: `
      align-items: center;
      color: var(--components-table-text-heading);
      display: flex;
      font-family: var(--font-family);
      font-size: ${textVariants['c-bold'].fontSize};
      font-style: ${textVariants['c-bold'].fontStyle};
      font-weight: ${textVariants['c-bold'].fontWeight};
      line-height: ${textVariants['c-bold'].lineHeight};
      padding: var(--spacing-xxs) var(--spacing-xxxs);
      gap: 10px;
      `,
    },
  ]);

  return (
    <ReactTable
      data={{ nodes: dataSource }}
      theme={theme}
      layout={{ horizontalScroll: true }}
    >
      {(tableList: DataSource[]) => (
        <>
          <Header>
            <HeaderRow>
              {columns.map((col) => (
                <HeaderCell key={col.dataIndex}>{col.title}</HeaderCell>
              ))}
            </HeaderRow>
          </Header>

          <Body>
            {tableList.map((item) => (
              <Row
                key={item.id}
                item={item}
              >
                {columns.map((col) => (
                  <Cell key={col.dataIndex}>
                    {col.render ? col.render(item[col.dataIndex], item) : item[col.dataIndex]}
                  </Cell>
                ))}
              </Row>
            ))}
          </Body>
        </>
      )}
    </ReactTable>
  );
};

export { Table };
