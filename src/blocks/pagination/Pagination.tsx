import Pagination from 'rc-pagination';
import styled from 'styled-components';
import 'rc-pagination/assets/index.css';
import { useState } from 'react';
import { Box } from 'blocks/box';
import { CaretLeft, CaretRight } from 'blocks/icons';
import { getTextVariantStyles } from 'blocks/Blocks.utils';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9'];

const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  align-items: center;

  .rc-pagination-item {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none !important;
    background: transparent !important;
    margin: 0px !important;
    height: 24px;
    line-height: 24px;
    width: auto !important;
    font-family: var(--font-family);
    ${() => getTextVariantStyles('bes-semibold', 'components-pagination-text-default')};

    &-active {
      font-weight: bold;
      color: var(--components-pagination-text-selected);
    }

    a {
      color: inherit !important;
      padding: 0px;
      text-decoration: none;
    }
  }

  .rc-pagination-prev,
  .rc-pagination-next {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none !important;
    background: transparent !important;
    margin: 0px !important;
  }

  .rc-pagination-prev:focus-visible,
  .rc-pagination-next:focus-visible,
  .rc-pagination-item:focus-visible {
    outline: none !important;
    box-shadow: none !important;
  }
`;

const IconComponent = styled.div`
  background: var(--components-pagination-background-default);
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-xxs);

  &:hover {
    background: var(--components-pagination-background-hover);
  }

  span {
    height: 10px;
    width: 10px;
  }
`;

const PaginationItem = () => {
  const [current, setCurrent] = useState(1);
  const pageSize = 3;

  const paginatedItems = items.slice((current - 1) * pageSize, current * pageSize);

  return (
    <div>
      <Box>
        <ul>
          {paginatedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Box>
      <StyledPagination
        current={current}
        pageSize={pageSize}
        total={items.length}
        onChange={(page) => setCurrent(page)}
        prevIcon={
          <IconComponent>
            <CaretLeft color="icon-primary" />
          </IconComponent>
        }
        nextIcon={
          <IconComponent>
            <CaretRight color="icon-primary" />
          </IconComponent>
        }
      />
    </div>
  );
};

export { PaginationItem as Pagination };
