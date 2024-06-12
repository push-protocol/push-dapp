import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface CarouselProps {
  items: any[];
  itemsPerPage: number;
}

const Carousel: React.FC<CarouselProps> = ({ items, itemsPerPage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(items.slice(0, itemsPerPage));
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisibleItems(items.slice(currentIndex, currentIndex + itemsPerPage));
  }, [currentIndex, items, itemsPerPage]);

  const handleNext = () => {
    if (currentIndex + itemsPerPage < items.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
      listRef.current?.scrollBy({
        left: listRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const handlePrevious = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
      listRef.current?.scrollBy({
        left: -listRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <CarouselContainer>
      <Button onClick={handlePrevious} disabled={currentIndex === 0}>
        Previous
      </Button>
      <ListContainer ref={listRef}>
        {visibleItems.map((item, index) => (
          <ListItem key={index}>{item.name}</ListItem>
        ))}
      </ListContainer>
      <Button onClick={handleNext} disabled={currentIndex + itemsPerPage >= items.length}>
        Next
      </Button>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ListContainer = styled.div`
  display: flex;
  overflow-x: auto;
  width: 630px; /* adjust the width as needed */
  scrollbar-width: none; /* For Firefox */

  &::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Opera */
  }
`;

const ListItem = styled.div`
  min-width: 100px; /* adjust the width as needed */
  margin: 5px;
  padding: 10px;
  background-color: lightgray;
  text-align: center;
`;

const Button = styled.button`
  margin: 5px;
`;

export default Carousel;