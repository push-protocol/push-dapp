import { Box, Button, CaretLeft, CaretRight, Pill } from 'blocks';
import { FC, useRef } from 'react';
import { css } from 'styled-components';
import { Filters } from '../hooks/useChannelsFilters';

export type ChannelCategoriesProps = {
  filters: Filters;
  setFilter: (filter: Partial<Filters>) => void;
};

const ChannelCategories: FC<ChannelCategoriesProps> = ({ filters, setFilter }) => {
  const categoryContainerRef = useRef<HTMLDivElement>(null);
  return (
    <Box
      display="flex"
      alignItems="center"
      css={css`
        flex-shrink: 0;
      `}
      gap="spacing-xs"
    >
      <Button
        iconOnly={<CaretLeft />}
        circular
        variant="outline"
        size="small"
        onClick={() => {
          categoryContainerRef?.current?.scrollTo({
            left: 0,
            behavior: 'smooth',
          });
        }}
      />
      <Box
        display="flex"
        overflow="hidden"
        gap="spacing-xs"
        width="100%"
        ref={categoryContainerRef}
      >
        {categories.map((cat, index) => (
          <Pill
            key={`${index}`}
            isActive={cat === filters.category}
            onClick={() => setFilter({ category: cat })}
          >
            {cat}
          </Pill>
        ))}
      </Box>

      <Button
        iconOnly={<CaretRight />}
        circular
        variant="outline"
        size="small"
        onClick={() => {
          categoryContainerRef?.current?.scrollTo({
            left: categoryContainerRef?.current.scrollWidth,
            behavior: 'smooth',
          });
        }}
      />
    </Box>
  );
};

export { ChannelCategories };

const categories = [
  'All',
  'Subscribed',
  'DEFI',
  'DAO',
  'NFT',
  'Metaverse',
  'Tooling',
  'Infrastrucuture',
  'Gaming',
  'Social',
  'Serivce',
  'DEFI',
  'DAO',
  'NFT',
];
