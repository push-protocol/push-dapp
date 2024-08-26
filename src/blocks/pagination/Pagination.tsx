import RCPagination from 'rc-pagination';
import styled from 'styled-components';
import 'rc-pagination/assets/index.css';
import { FC } from 'react';
import { CaretLeft, CaretRight } from 'blocks/icons';
import { getTextVariantStyles } from 'blocks/Blocks.utils';
import { PaginationProps } from './Pagination.types';
import enUS from 'rc-pagination/lib/locale/en_US';

const StyledPagination = styled(RCPagination)<{ disabled?: PaginationProps['disabled'] }>`
  display: flex;
  justify-content: center;
  align-items: center;

  .rc-pagination-item {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none !important;
    background: transparent !important;
    margin: var(--spacing-none) var(--spacing-xxxs) !important;
    padding: 0;
    height: 24px;
    min-width: 18px !important;
    max-width: 18px !important;
    line-height: 24px;
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

  .rc-pagination-jump-prev,
  .rc-pagination-jump-next {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none !important;
    background: transparent !important;
    min-width: 18px !important;
    max-width: 18px !important;
    margin: var(--spacing-none) var(--spacing-xxxs) !important;
    padding: 0;

    /* Hide the original ellipsis content */
    & > * {
      display: none;
    }

    &::before {
      content: '...';
      color: ${({ disabled }) =>
        disabled ? 'var(--components-pagination-text-disabled)' : 'var(--components-pagination-text-default)'};
      display: inline-block;
      line-height: 24px;
      vertical-align: middle;
      margin-bottom: var(--spacing-xxxs);
    }

    &:hover::before {
      color: var(--components-pagination-text-default);
    }
  }

  .rc-pagination-prev,
  .rc-pagination-next {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0;
  }

  .rc-pagination-prev:focus-visible,
  .rc-pagination-next:focus-visible,
  .rc-pagination-item:focus-visible {
    outline: none !important;
    box-shadow: none !important;
  }
`;

const CaretIcon = styled.div`
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

const Pagination: FC<PaginationProps> = ({ current = 1, total, disabled = false, onChange, pageSize }) => {
  return (
    <StyledPagination
      current={current}
      pageSize={pageSize}
      total={total}
      onChange={onChange}
      disabled={disabled}
      locale={enUS}
      prevIcon={
        <CaretIcon>
          <CaretLeft color="icon-primary" />
        </CaretIcon>
      }
      nextIcon={
        <CaretIcon>
          <CaretRight color="icon-primary" />
        </CaretIcon>
      }
    />
  );
};

export { Pagination };
