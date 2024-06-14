import { RefObject, useMemo, useSyncExternalStore } from 'react';

function subscribeToResize(callback: () => void) {
  window.addEventListener('resize', callback);

  return () => {
    window.removeEventListener('resize', callback);
  };
}

export function useDimensions(ref: RefObject<HTMLElement>) {
  const dimensions = useSyncExternalStore(subscribeToResize, () =>
    JSON.stringify({
      width: ref.current?.offsetWidth ?? 0,
      height: ref.current?.offsetHeight ?? 0,
    })
  );

  return useMemo(() => JSON.parse(dimensions), [dimensions]);
}
