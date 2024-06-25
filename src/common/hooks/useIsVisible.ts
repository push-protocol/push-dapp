import { RefObject, useEffect, useMemo, useState } from 'react';

export const useIsVisible = (ref: RefObject<HTMLElement>, onChange?: (isVisible: boolean) => void) => {
  const [isVisible, setIsVisible] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        setIsVisible(entry.isIntersecting);
        onChange?.(entry.isIntersecting);
      }),
    [ref]
  );

  useEffect(() => {
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return isVisible;
};
