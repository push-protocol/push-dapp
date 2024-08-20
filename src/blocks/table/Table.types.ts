export type Column = {
  title: string;
  dataIndex: string;
  render?: (text: any, record: any) => React.ReactNode;
};

export type DataSource = {
  id: string;
  [key: string]: any;
};
