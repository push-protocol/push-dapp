// TableComponent.tsx
import React from 'react';
import { Table as ReactTable, Header, Row, Cell } from '@table-library/react-table-library/table';
import styled from 'styled-components';

export type TableProps = {
  columns: { label: string; key: string }[];
  data: any[];
};

const StyledTable = styled(ReactTable)`
  width: 100%;
  border-collapse: collapse;

  thead {
    background-color: #f4f4f4;
  }

  th,
  td {
    padding: 12px 15px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f1f1f1;
  }
`;

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {columns.map((col) => (
            <Header key={col.key}>{col.label}</Header>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* {data.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {columns.map((col) => (
              <Cell key={col.key}>{row[col.key]}</Cell>
            ))}
          </Row>
        ))} */}
      </tbody>
    </StyledTable>
  );
};

export { Table };
