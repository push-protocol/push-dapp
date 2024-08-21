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
  fixedHeader?: boolean;
};

const Table: FC<TableProps> = ({ columns, dataSource, fixedHeader = false }) => {
  const gridTemplateColumns = columns.map((col) => col.width || '1fr').join(' ');

  const theme = useTheme({
    Table: `
      --data-table-library_grid-template-columns: ${gridTemplateColumns};
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
      background: var(--surface-secondary);
      `,
    HeaderRow: `
      background: var(--surface-secondary);
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
  });

  return (
    <ReactTable
      data={{
        nodes: dataSource,
      }}
      theme={theme}
      layout={{ custom: true, horizontalScroll: true, fixedHeader }}
    >
      {(tableList: DataSource[]) => (
        <>
          <Header>
            <HeaderRow>
              {columns.map((column, index) => (
                <HeaderCell key={`${column.title}-${index}`}>{column.title}</HeaderCell>
              ))}
            </HeaderRow>
          </Header>

          <Body>
            {tableList.map((record) => (
              <Row
                key={record.id}
                item={record}
              >
                {columns.map((column) => {
                  const cellValue = `${record[column.dataIndex]}`;
                  return (
                    <Cell key={`${column.dataIndex}-${record.id}`}>
                      {column.render ? column.render(cellValue, record) : cellValue}
                    </Cell>
                  );
                })}
              </Row>
            ))}
          </Body>
        </>
      )}
    </ReactTable>
  );
};

export { Table };
