export type PaginationProps = {
  //onChange function
  onChange: (page: number) => void;
  // items per page
  perPage: number;
  // startPage of pagination
  startPage: number;
  // total number of items
  totalCount: number;
  /* Option to disable the pagination component */
  disabled?: boolean;
};
