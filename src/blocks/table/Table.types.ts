import { ReactNode } from 'react';

export type Column = {
  title: string;
  dataIndex: string;
  render?: (text: string, record: any) => ReactNode;
  width?: string;
};

export type DataSource = {
  id: string;
  [key: string]: any;
};
