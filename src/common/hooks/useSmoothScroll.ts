import { useEffect, useRef, useState } from 'react';

type UseSmoothCarouselProps = {
  items: any[];
  itemsPerPage: number;
};

export const useSmoothCarousel = ({ items, itemsPerPage }: UseSmoothCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(items.slice(0, itemsPerPage));
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisibleItems(items.slice(currentIndex, currentIndex + itemsPerPage));
  }, [currentIndex, items, itemsPerPage]);

  const handleNext: () => void = () => {
    if (currentIndex + itemsPerPage < items.length) {
      setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
      console.log('List Ref >>>', listRef.current?.clientWidth);
      listRef.current?.scrollBy({
        left: listRef.current.clientWidth,
        behavior: 'smooth'
      });
    } else {
      setCurrentIndex(items.length - itemsPerPage);
      console.log('List Ref 2>>>', listRef.current?.clientWidth);
      listRef.current?.scrollBy({
        left: listRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const handlePrevious: () => void = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
      console.log('List Ref 3>>>', listRef.current?.clientWidth);
      listRef.current?.scrollBy({
        left: -listRef.current.clientWidth,
        behavior: 'smooth'
      });
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
