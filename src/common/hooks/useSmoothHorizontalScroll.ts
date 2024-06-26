import { useEffect, useRef, useState } from 'react';

type UseSmoothHorizontalScrollProps = {
  items: any[];
  itemsPerPage: number;
  itemGap: number;
};

export const useSmoothHorizontalScroll = ({ items, itemsPerPage, itemGap }: UseSmoothHorizontalScrollProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(items.slice(0, itemsPerPage));
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisibleItems(items.slice(currentIndex, currentIndex + itemsPerPage));
  }, [currentIndex, items, itemsPerPage]);

  const handleNext = () => {
    if (currentIndex + itemsPerPage < items.length) {
      setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
      if (listRef.current) {
        listRef.current.scrollBy({
          left: listRef.current.clientWidth + itemGap,
          behavior: 'smooth'
        });
      }
    } else {
      setCurrentIndex(items.length - itemsPerPage);
      if (listRef.current) {
        listRef.current.scrollBy({
          left: listRef.current.clientWidth + itemGap,
          behavior: 'smooth'
        });
      }
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
      if (listRef.current) {
        listRef.current.scrollBy({
          left: -listRef.current.clientWidth - itemGap,
          behavior: 'smooth'
        });
      }
    }
  };

  return {
    currentIndex,
    handleNext,
    handlePrevious,
    listRef,
    visibleItems
  };
};
