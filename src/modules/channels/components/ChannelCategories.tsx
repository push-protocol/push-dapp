import { FC, useRef } from 'react';
import { Box, Button, CaretLeft, CaretRight, Pill, Skeleton } from 'blocks';
import { css } from 'styled-components';
import { useGetChannelCategories } from 'queries';
import { Filters } from '../hooks/useChannelsFilters';

export type ChannelCategoriesProps = {
  filters: Filters;
  setFilter: (filter: Partial<Filters>) => void;
};
const scrollAmount = 150;

const ChannelCategories: FC<ChannelCategoriesProps> = ({ filters, setFilter }) => {
  const categoryContainerRef = useRef<HTMLDivElement>(null);

  const { data, isLoading } = useGetChannelCategories();

  const channelCategories = isLoading ? Array(15).fill(0) : data?.tags || [];

  return (
    <Box
      display="flex"
      alignItems="center"
      css={css`
        flex-shrink: 0;
      `}
      gap="spacing-xs"
      maxWidth={{ ml: '346px' }}
    >
      <Button
        iconOnly={<CaretLeft />}
        circular
        variant="outline"
        size="small"
        onClick={() => {
          categoryContainerRef?.current?.scrollBy({
            left: -scrollAmount,
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
        {channelCategories.map((cat, index) => (
          <Skeleton
            isLoading={isLoading}
            width="200px"
            borderRadius="radius-round"
          >
            <Pill
              key={`${index}`}
              isActive={cat === filters.category}
              onClick={() => setFilter({ category: cat })}
            >
              {cat}
            </Pill>
          </Skeleton>
        ))}
      </Box>

      <Button
        iconOnly={<CaretRight />}
        circular
        variant="outline"
        size="small"
        onClick={() => {
          categoryContainerRef?.current?.scrollBy({
            left: scrollAmount,
            behavior: 'smooth',
          });
        }}
      />
    </Box>
  );
};

export { ChannelCategories };
