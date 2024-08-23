import Pagination from 'rc-pagination';
import styled from 'styled-components';
import 'rc-pagination/assets/index.css';
import { FC } from 'react';
import { CaretLeft, CaretRight } from 'blocks/icons';
import { getTextVariantStyles } from 'blocks/Blocks.utils';
import { PaginationProps } from './Pagination.types';

const StyledPagination = styled(Pagination)<{ disabled?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  .rc-pagination-item {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none !important;
    background: transparent !important;
    margin: var(--spacing-none) !important;
    height: 24px;
    line-height: 24px;
    width: auto;
    font-family: var(--font-family);
    ${({ disabled }) =>
      getTextVariantStyles(
        'bes-semibold',
        disabled ? 'components-pagination-text-disabled' : 'components-pagination-text-default'
      )};

    &-active {
      font-weight: bold;
      color: ${({ disabled }) =>
        disabled ? 'var(--components-pagination-text-disabled)' : 'var(--components-pagination-text-selected)'};
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
    margin: var(--spacing-none) var(--spacing-xxs) !important;
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

const PaginationItem: FC<PaginationProps> = ({ startPage = 1, totalCount, disabled = false, onChange, perPage }) => {
  return (
    <StyledPagination
      current={startPage}
      pageSize={perPage}
      total={totalCount}
      onChange={onChange}
      disabled={disabled}
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
  );
};

export { PaginationItem as Pagination };
