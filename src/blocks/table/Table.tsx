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
import { Button } from '../button';
import { getTextVariantStyles } from '../Blocks.utils';
import { ErrorFilled, Refresh, Search } from '../icons';
import { Spinner } from '../spinner';
import { textVariants } from '../text';
import { SurfaceColors } from '../theme/Theme.types';
import { Column, DataSource } from './Table.types';

export type TableProps = {
  backgroundColor?: SurfaceColors;
  columns: Column[];
  dataSource: DataSource[];
  error?: boolean;
  fixedHeader?: boolean;
  loading?: boolean;
  onRetry?: () => void;
  onRow?: { onClick: (record: any, rowIndex: number) => void };
  retrying?: boolean;
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

const OverlayContainer = styled.div<{ blur?: boolean }>`
  position: absolute;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: var(--spacing-xs);
  opacity: ${({ blur }) => (blur ? '0.5' : '1')};
`;

const NullStateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
  flex-direction: column;
`;

const NullStateTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xxxs);
  flex-direction: column;
`;

const NullStateHeading = styled.span`
  ${() => getTextVariantStyles('bm-semibold', 'text-primary')}
`;

const NullStateDescription = styled.span`
  ${() => getTextVariantStyles('bes-regular', 'text-tertiary')}
`;

const LoadingText = styled.span`
  ${() => getTextVariantStyles('bm-semibold', 'text-tertiary')}
`;

const TableContainer = styled.div`
  width: inherit;
  height: inherit;
  position: relative;
`;

const Table: FC<TableProps> = ({
  backgroundColor = 'surface-secondary',
  columns,
  dataSource,
  error = false,
  fixedHeader = false,
  loading = false,
  onRetry,
  onRow,
  retrying = false,
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
      height: fit-content;
      opacity: ${loading ? '0.5' : '1'};
      `,
  });

  return (
    <TableContainer>
      {loading && !error && (
        <OverlayContainer blur>
          <Spinner
            size="medium"
            variant="primary"
          />
          <LoadingText>Loading</LoadingText>
        </OverlayContainer>
      )}
      {!loading && !dataSource.length && (
        <OverlayContainer>
          <NullStateContainer>
            {error ? <ErrorFilled size={24} /> : <Search size={24} />}
            <NullStateTextContainer>
              <NullStateHeading>{error ? 'Trouble Fetching Data' : 'No Results Found'}</NullStateHeading>
              <NullStateDescription>
                {error
                  ? 'Please try again in a few minutes or reload the page.'
                  : 'Try adjusting your search or filter to find what you’re looking for'}
              </NullStateDescription>
            </NullStateTextContainer>
            {error && onRetry && (
              <Button
                size="extraSmall"
                onClick={onRetry}
                leadingIcon={<Refresh />}
                loading={retrying}
              >
                Try Again
              </Button>
            )}
          </NullStateContainer>
        </OverlayContainer>
      )}
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
    </TableContainer>
  );
};

export { Table };
