import { FC, useMemo } from 'react';
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
import styled from 'styled-components';
import { textVariants } from '../text';
import { SurfaceColors } from '../theme/Theme.types';
import { Column, DataSource } from './Table.types';
import { Spinner } from 'blocks/spinner';

export type TableProps = {
  backgroundColor?: SurfaceColors;
  columns: Column[];
  dataSource: DataSource[];
  fixedHeader?: boolean;
  loading?: boolean;
  onRow?: { onClick: (record: any, rowIndex: number) => void };
};

const StyledHeaderCell = styled(HeaderCell)<{ headerAlignment?: Column['headerAlignment'] }>`
  ${({ headerAlignment }) =>
    headerAlignment
      ? `
         div {
          display: flex;
          justify-content: ${headerAlignment};
         }
        `
      : ''}
`;

const StyledRowCell = styled(Cell)<{ cellAlignment?: Column['cellAlignment'] }>`
  ${({ cellAlignment }) =>
    cellAlignment
      ? `
       div {
        display: flex;
        justify-content: ${cellAlignment};
       }
      `
      : ''}
`;

const LoadingContainer = styled.div``;

const Table: FC<TableProps> = ({
  backgroundColor = 'surface-secondary',
  columns,
  dataSource,
  fixedHeader = false,
  loading = false,
  onRow,
}) => {
  const columnData = useMemo(() => {
    const columnWidths = columns.map((col) => col.width || `${100 / columns.length}%`);

    const leftRightPositionCSS = columns
      .map((col, index) => {
        if (col?.fixed == 'left') {
          return `
            &:nth-of-type(${index + 1}) {
              left: ${index === 0 ? '0px' : columnWidths[index]};
            };
          `;
        }
        if (col?.fixed == 'right') {
          return `
            &:nth-of-type(${index + 1}) {
              right: ${index + 1 === columns.length ? '0px' : columnWidths[index]};
            };
          `;
        }

        return '';
      })
      .join('');

    return {
      columnWidthCSS: columnWidths.join(' '),
      leftRightPositionCSS,
    };
  }, [columns]);

  const theme = useTheme({
    Table: `
        --data-table-library_grid-template-columns: ${columnData.columnWidthCSS};
      `,
    BaseCell: `
      ${columnData.leftRightPositionCSS}
    `,
    Cell: `
      align-items: center;
      align-self: stretch;
      border-bottom: var(--border-sm) solid var(--components-table-stroke-default);
      color: var(--components-table-text-default);
      display: flex;
      flex: 1 0 0;
      font-family: var(--font-family);
      font-size: ${textVariants['bs-semibold'].fontSize};
      font-style: ${textVariants['bs-semibold'].fontStyle};
      font-weight: ${textVariants['bs-semibold'].fontWeight};
      line-height: ${textVariants['bs-semibold'].lineHeight};
      gap: var(--spacing-xxs);
      height: 56px;
      padding: var(--spacing-xxxs);
      `,
    Row: `
      background: var(--${backgroundColor});
      `,
    HeaderRow: `
      background: var(--${backgroundColor});
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
                <StyledHeaderCell
                  headerAlignment={column.headerAlignment}
                  key={`${column.title}-${index}`}
                  pinLeft={column?.fixed === 'left'}
                  pinRight={column?.fixed === 'right'}
                >
                  {column.title}
                </StyledHeaderCell>
              ))}
            </HeaderRow>
          </Header>

          <Body>
            {/* <Row
              item={{ id: 'loader' }}
              key="loader"
            >
              <Cell colSpan={columns.length}>
                <LoadingContainer>
                  <Spinner size="medium" />
                </LoadingContainer>
              </Cell>
            </Row> */}
            {tableList.map((record, recordIndex) => (
              <Row
                key={record.id}
                item={record}
                onClick={() => onRow?.onClick?.(record, recordIndex)}
              >
                {columns.map((column) => {
                  const cellValue = `${record?.[column.dataIndex] || ''}`;
                  return (
                    <StyledRowCell
                      cellAlignment={column.cellAlignment}
                      key={`${column.dataIndex}-${record.id}`}
                      pinLeft={column?.fixed === 'left'}
                      pinRight={column?.fixed === 'right'}
                    >
                      {column.render ? column.render(cellValue, record) : cellValue}
                    </StyledRowCell>
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
