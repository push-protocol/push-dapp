export type PaginationProps = {
  /* Called when the page is changed, and it takes the resulting page number as argument */
  onChange: (page: number) => void;
  /* Number of data items per page */
  pageSize: number;
  /* Default initial page number */
  current: number;
  /* Total number of data items */
  total: number;
  /* Disable pagination item */
  disabled?: boolean;
};
